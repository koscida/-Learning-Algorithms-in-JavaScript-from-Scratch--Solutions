// Attempt #1
function isPalindrome(text) {
  // O(1) + O(n) + O(n) + 
  //  O(n/2) * ( O(1) + O(1) ) + O(1)
  // O(1) + O(2n) + O(n/2) + O(n/2) + O(1)
  // O(3n) + O(2)
  // O(n)
  
  // O(1)
  let pal = true;
  // O(n) + O(n)
  const t = [...(text.toLowerCase().replace(/\W/g, ''))]
  // O(n/2)
  for (i of [...Array(Math.floor(t.length/2)).keys()]) {
    // O(1)  // O(1)
    if(t[i] != t[t.length-1-i])
      pal = false
  }
  // O(1)
  return pal
}


// Code Solution #1
function isPalindrome1(text) {
  
}



const text1 = "race car"
const text2 = "Madam, I'm Adam"
const text3 = "fdjskalg ewkjals"

console.log(isPalindrome(text1))
console.log(isPalindrome(text2))
console.log(isPalindrome(text3))

// console.log(isPalindrome1(text1))
// console.log(isPalindrome1(text2))
// console.log(isPalindrome1(text3))


