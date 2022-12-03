"use strict";
const sentence = "     to         BE       oR   nOt        To     bE ";
function toJadenCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ")
    .replace(/\s+/g, " ");
}
console.log(toJadenCase(sentence));
