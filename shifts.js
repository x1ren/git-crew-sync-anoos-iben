function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  return Math.round(hours * rate);
}

module.exports = { isValidShift, calculatePay };