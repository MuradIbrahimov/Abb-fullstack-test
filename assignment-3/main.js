function stringtransform(string) {
  let transformedString = "";
  for (let i = 0; i < string.length; i++) {
    let stringUpperCased = string.charAt(i).toUpperCase();
    let stringChar = string.charAt(i);
    transformedString += stringUpperCased + stringChar.repeat(i);
    if (i < string.length - 1) transformedString += "-";
  }
  return transformedString;
}
console.log(stringtransform("ab"));
console.log(stringtransform("abc"));
console.log(stringtransform("dkjb"));
