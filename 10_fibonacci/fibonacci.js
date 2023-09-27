const fibonacci = function (number_in_sequence) {
  if (number_in_sequence < 0) return "OOPS";
  if (number_in_sequence == 0) return 0;
  if (number_in_sequence == 1) return 1;
  return fibonacci(number_in_sequence - 1) + fibonacci(number_in_sequence - 2);
};

// Do not edit below this line
module.exports = fibonacci;
