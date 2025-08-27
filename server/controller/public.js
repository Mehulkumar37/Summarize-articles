const axios = require("axios");
const { validationResult } = require("express-validator");

exports.getApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Safu API V1" });
};

exports.postApi = async (req, res, next) => {
  const url = req.body.urls;

  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({
      status: "fail",
      error: "Please enter a valid URL.",
      code: 422,
    });
  }

  try {
    // Make RapidAPI request
    const response = await axios.get(
      "https://article-data-extractor-and-summarizer.p.rapidapi.com/summarize",
      {
        params: {
          url: url,
          lang: "en",
          engine: 2,
        },
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY, // must be subscribed
          "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
        },
        timeout: 10000, // optional: 10 seconds timeout
      }
    );

    // Extract summary
    const summary = response.data?.summary;
    if (!summary) {
      return res.status(500).json({
        status: "fail",
        error: "No summary returned from API.",
        code: 500,
      });
    }

    // Send response
    res.status(200).json({ summary });

    // Save query to user (optional)
    if (req.user) {
      try {
        const result = await req.user.addQuery({ question: url, summary });
        console.log("Query saved:", result);
      } catch (err) {
        console.error("Failed to save query:", err);
      }
    }
  } catch (err) {
    console.error("RapidAPI request error:", err.response?.data || err.message);
    return res.status(500).json({
      status: "fail",
      error:
        err.response?.data?.message ||
        "An unexpected error occurred. Please try again later.",
      code: 500,
    });
  }
};
