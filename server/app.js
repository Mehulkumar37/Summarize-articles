const express = require("express");
const cors = require("cors");           // fixed typo: cros → cors
const requestIp = require("request-ip");
const mongoose = require("mongoose");    // fixed typo: mongoos → mongoose
require("dotenv").config();
const UAParser = require("ua-parser-js");
const User = require("./model/user");

const MONGO_CONNECT = process.env.MONGO_URI;
const PORT = process.env.PORT || 3030;

const app = express();
const publicRoutes = require("./routes/public");

app.use(express.json());
app.use(cors());                         // fixed typo
app.use(requestIp.mw());

// Middleware to track user by IP and device
app.use(async (req, res, next) => {
  try {
    let user = await User.findOne({ ip: req.clientIp });

    if (user) {
      req.user = user;
      console.log("already exist");
    } else {
      const parser = new UAParser(req.headers["user-agent"]);
      const parserResults = parser.getResult();

      const newUser = new User({
        ip: req.clientIp,
        deviceDetails: parserResults,
        query: []
      });

      await newUser.save();
      user = await User.findOne({ ip: req.clientIp });
      req.user = user;
      console.log("new user");
    }

    next();
  } catch (err) {
    console.error(err);
    next();
  }
});

app.use(publicRoutes);

// Connect to MongoDB Atlas
mongoose.connect(MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected!");
  app.listen(PORT, () => console.log(`Server Running On ${PORT}`));
})
.catch(err => console.error("MongoDB connection error:", err));
