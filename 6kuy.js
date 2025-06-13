function duplicateCount(text){
  const counts = text
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  
  return Object.values(counts).filter(count => count > 1).length;
}