function automorphic(num) {
  const square = num * num;
  const numStr = num.toString();
  const squareStr = square.toString();

  // Check if the square ends with the original number
  if (squareStr.endsWith(numStr)) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}