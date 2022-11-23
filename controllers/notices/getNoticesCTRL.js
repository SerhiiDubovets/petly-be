const { getNoticesService, getNoticesByCathegoryService, getNoticesByFilerService } = require("../../services/db/notices/noticeServices");

const getNoticesCTRL = async (req, res) => {
  const { category, page = 1, per_page = 15, filter } = req.query;

  // eslint-disable-next-line camelcase
  const skip = (+page - 1) * +per_page;

  if (category) {
    const notices = await getNoticesByCathegoryService(category, skip, per_page);

    return res.status(200).json({ notices });
  }

  if (filter) {
    const notices = await getNoticesByFilerService(filter, skip, per_page);
    return res.status(200).json({ notices });
  }

  const notices = await getNoticesService(skip, per_page);

  return res.status(200).json({ notices });
};

module.exports = getNoticesCTRL;
