function checkStringsEquality(str1, str2) {
    return str1.match(/\S|$/g).sort().join() === str2.match(/\S|$/g).sort().join()
}
  
  console.log(checkStringsEquality("clockwise", "owe clicks"))
  console.log(checkStringsEquality("clockwise", "clockwork"))    
  console.log(checkStringsEquality("", " "))
  console.log(checkStringsEquality("aa", "a"))