module.exports = {
  sendSuccessResponse: (res, msg, data) => {
    res.json({ message: msg, data });
    console.log(msg, data);
  },

  checkEmptyData: (data, res) => {
    if (Object.keys(data).length === 0) {
      res.json({ error: "Please provide some data" });
      return true;
    }
    return false;
  },
};
