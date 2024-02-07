const os = require("os");

const totalRAMinBytes = os.totalmem();
const totalRAMinMB = (totalRAMinBytes / 1048576).toFixed(2);
const totalRAMinGB = (totalRAMinMB / 1024).toFixed(2);
console.table({
  "Total RAM in bytes": totalRAMinBytes + " bytes",
  "Total RAM in MB": totalRAMinMB + " MB",
  "Total RAM in GB": totalRAMinGB + " GB",
});
console.log(os.uptime());
console.log(time);
