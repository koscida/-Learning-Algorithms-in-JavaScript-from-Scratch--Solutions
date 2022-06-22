import React, {useState} from 'react'

// Attempt #1
const attempt1 = (text, num) => {
	// O(n) + 
	//  O(n) + O(n) + O(n) * ( O(n) + O(1) ) + 
	//  O(n)
	// O(n) + O(2n) + O(n^2) + O(n) + O(n)
	// O(n^2) + O(5n)
	// O(n^2)
	// O(n)
	
	const validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
	// O(n) + O(n) + O(n) .. + O(n)
	const switched = text.toLowerCase().split('').map(t => {
		// O(n)
		const pos = validLetters.indexOf(t)
		
		// O(1)
		if(pos > -1) {
			const diff = pos + num
			const newPos = diff < 0 ? validLetters.length + diff : diff
			return validLetters[newPos % validLetters.length]
		} else
			return t
	}).join('')
	return <>{switched}</>
}

// Code Solution #1
const solution1 = (text, num) => {
	// O(n^2)
	
	num = num % 26
	const lowerCaseString = text.toLowerCase()
	const validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let newString = ''
	
	// O(n)
	for(let i=0;i<lowerCaseString.length;i++) {
		var currentLetter = lowerCaseString[i]
		if(currentLetter === " ") {
			newString += currentLetter
			continue
		}
		// O(n)
		var currentIndex = validLetters.indexOf(currentLetter)
		var newIndex = currentIndex + num
		if(newIndex > 25) newIndex = newIndex - 26
		if(newIndex < 0) newIndex = 26 + newIndex
		if(text[i] === text[i].toUpperCase()) {
			newString += validLetters[newIndex].toUpperCase()
		} else {
			newString += validLetters[newIndex]
		}
		
		
	}
	
	return <div>{newString}</div>
}

// Attempt #2
const attempt2 = (text, num) => {
	// O(n^2)
	
	num = num % 26
	const validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
	// O(n) + O(n) + O(n) .. + O(n)
	const switched = text.split('').map( (letter,i) => {
		let newLetter = letter
		
		const pos = validLetters.indexOf(letter.toLowerCase())
		if(pos > -1) {
			const diff = pos + num
			const newPos = diff < 0 ? validLetters.length + diff : diff
			newLetter =  validLetters[newPos % validLetters.length]
			if(letter === letter.toUpperCase()) newLetter = newLetter.toUpperCase()
		}
		
		return newLetter
	}).join('')
	return <>{switched}</>
}

const CaesarCipher = (props) => {
	const [text, setText] = useState("1 Zoo Keeper")
	const [num, setNum] = useState(2)
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Caesar Cipher</h2>
		
		<div>
			<p>Enter a string</p>
			<input type="text" value={text} onChange={ (e) => handleChange(e.target.value, setText) } />
			<p>Enter a num</p>
			<input type="number" value={num} onChange={ (e) => handleChange(Number(e.target.value), setNum) } />
		</div>
		
		<p>Attempt #1</p>
		{attempt1(text, num)}
		
		<p>Solution #1</p>
		{solution1(text, num)}
		
		<p>Attempt #2</p>
		{attempt2(text, num)}
	</div>
}


export default CaesarCipher


