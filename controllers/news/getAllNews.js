const { News } = require("../../models/news");

const getAllNews = async (req, res) => {
  const { page = 1, limit = 10, ...query } = req.query;
  const skip = (page - 1) * limit;
  const news = await News.find({}, "", {
    skip,
    limit: limit,
  });

  res.json({
    message: "success",
    data: { result: news },
  });
};

module.exports = getAllNews;
