// Attempt #1
function isPalindrome(text) {
  // O(1) + O(n) + O(n) + 
  //  O(n/2) * ( O(1) + O(1) ) + O(1)
  // O(1) + O(2n) + O(n/2) + O(n/2) + O(1)
  // O(3n) + O(2)
  // O(n)
  
  // O(1)
  let pal = true;

  // 1. Get array of all lowercase letters
  // 2. Create array of all letters
  // O(n) + O(n)
  const t = [...(text.toLowerCase().replace(/\W/g, ''))]

  // 3. Test if same forwards/back
  // O(n/2)
  for (const i of [...Array(Math.floor(t.length/2)).keys()]) {
    // O(1)  // O(1)
    if(t[i] != t[t.length-1-i])
      pal = false
  }
  // O(1)
  return pal
}


// Code Solution #1
function isPalindrome1(text) {
  // 1. Get array of all lowercase letters
  text = text.toLowerCase()
  var characetsArr = text.split("")
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  // 2. create array of all letters
  var letterArray = []
  characetsArr.forEach( char => {
    if(validCharacters.indexOf(char) > -1) letterArray.push(char)
  })

  // 3. test if same forwards/back
  return letterArray.join('') === letterArray.reverse().join('')
}


// Attempt #2
function isPalindrome2(text) {
  // 1. Get array of all lowercase letters
  // 2. Create array of all letters
  // O(n) + O(n)
  const t = [...(text.toLowerCase().replace(/\W/g, ''))]

  // 3. Test if same forwards/back
  return t.join('') === t.reverse().join('')
}


const RunIsPalindrome = () => {
	const text = prompt("Enter a string")
	console.log(isPalindrome(text))
	console.log(isPalindrome1(text))
	console.log(isPalindrome2(text))
}


export default RunIsPalindrome


