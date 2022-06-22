// Attempt #1
function harmlessRansonNote(noteText, magazineText) {
  // O(m) + ( O(2n) * (O(2m) + O(2)) ) + O(1)
  // O(m) + O(4nm) + O(4n) + O(1)
  // O(4nm) + O(m) + O(4n) + O(1)
  // O(nm) + O(m) + O(n)
  // O(mn)
  
  // O(m)
  let mag = magazineText.split(" ")
  // O(n) + O(n)
  for (text of noteText.split(" ")) {
    // O(m)
    const i = mag.findIndex(m=>m===text)
    // O(1)
    if(i === -1) {
      // O(1)
      return false
    } else {
      // O(m)
      mag.splice(i,1)
    }
  }
  // O(1)
  return true
}


// Code Solution #1
function harmlessRansomNote1(noteText, magazineText) {
  // O(n) + O(m) + O(1) +
  //  O(m) * ( O(1) + O(1) ) + 
  //  O(1) + O(n) * ( O(1) + O(1) + O(1) + O(1) ) + 
  //  O(1)
  // O(n) + O(m) + O(1) +
  //  O(2m) + 
  //  O(1) + O(4n) + 
  //  O(1)
  // O(3m) + O(5n) + O(3)
  // O(m) + O(n)

  
  // O(n)
  let note = noteText.split(" ")
  // O(m)
  let mag = magazineText.split(" ")
  // O(1)
  let magObj = {}

  // O(m)
  mag.forEach(word => {
    // O(1) // O(1)
    if(!magObj[word]) magObj[word] = 0
    // O(1)
    magObj[word]++;
  })

  // O(1)
  let isNotePossible = true
  // O(n)
  note.forEach(word => {
    // O(1)
    if(magObj[word]) {
      // O(1)
      magObj[word]--
      // O(1)  
      if(magObj[word] < 0) {
        // O(1)
        isNotePossible = false
      }
    } else {
      // O(1)
      isNotePossible = false
    }
  })

  // O(1)
  return isNotePossible
}


const RunHarmlessRansomNote = () => {
	const note = prompt("Enter a note")
	const mag = prompt("Enter the magazine")
	console.log(harmlessRansomNote1(note))
	console.log(harmlessRansomNote1(mag))
}


export default RunHarmlessRansomNote

