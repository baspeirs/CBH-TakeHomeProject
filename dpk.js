const crypto = require("crypto");
const { type } = require("os");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  let hashValue = (value) => {
    let result = crypto.createHash("sha3-512").update(value).digest("hex");
    return result
  }

  if (!event) throw "Event does not exist"

  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = hashValue(data);
  }

  if (candidate && typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashValue(candidate);
  }

  return candidate;
};