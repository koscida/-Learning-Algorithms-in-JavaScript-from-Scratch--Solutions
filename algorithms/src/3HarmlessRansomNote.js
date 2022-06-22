import React, {useState} from 'react'

// Attempt #1
const attempt1 = (noteText, magazineText) => {
	// O(m) + ( O(2n) * (O(2m) + O(2)) ) + O(1)
	// O(m) + O(4nm) + O(4n) + O(1)
	// O(4nm) + O(m) + O(4n) + O(1)
	// O(nm) + O(m) + O(n)
	// O(mn)
	
	// O(m)
	let mag = magazineText.split(" ")
	// O(n) + O(n)
	for (const text of noteText.split(" ")) {
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
const solution1 = (noteText, magazineText) => {
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

const HarmlessRansomNote = (props) => {
	const [note, setNote] = useState('secret note')
	const [magazine, setMagazine] = useState('this is a secret magazine with multiple note')
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		const r = func(note, magazine)
		return <div>{r ? "True" : "False"}</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Harmless Ransom Note</h2>
		
		<p>Enter a note</p>
		<input type="text" value={note} onChange={ (e) => handleChange(e.target.value, setNote) } />
		<p>Enter the magazine text</p>
		<textarea value={magazine} onChange={ (e) => handleChange(e.target.value, setMagazine) } />
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
	</div>
}

export default HarmlessRansomNote

