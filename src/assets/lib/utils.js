const utils = {
  getDate(timeStamp, startType) {
    const d = new Date(timeStamp);
    const year = d.getFullYear();
    const month = this.getHandledValue(d.getMonth() + 1);
    const date = this.getHandledValue(d.getDate());
    const hours = this.getHandledValue(d.getHours());
    const minutes = this.getHandledValue(d.getMinutes());
    const second = this.getHandledValue(d.getSeconds());
    let resStr = "";
    if (startType === "year")
      resStr =
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        second;
    else if (startType === "month") {
      resStr = year + "-" + month + "-" + date;
    }
    return resStr;
  },
  getHandledValue(num) {
    return num < 10 ? "0" + num : num;
  },
  getRemain(timestamp) {
    let hours, minutes, seconds;

    hours = Math.floor(timestamp / 3600000).toString();
    minutes = Math.floor((timestamp % 3600000) / 60000).toString();
    seconds = Math.floor(((timestamp % 3600000) % 60000) / 1000).toString();

    hours = hours.length <= 1 ? "0" + hours : hours;
    minutes = minutes.length <= 1 ? "0" + minutes : minutes;
    seconds = seconds.length <= 1 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  },
};

export default utils;
