var dateFormat = require("dateformat");

module.exports = (timeStamp) => {
  const formattedTimeStamp =
  dateFormat(timeStamp, "yyyy-mm-dd h:MM:ss");
  return formattedTimeStamp;
};
