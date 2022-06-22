import React, {useState} from 'react'

// Attempt #1
const attempt1 = (text) => {
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
		if(t[i] !== t[t.length-1-i])
			pal = false
	}
	// O(1)
	return pal
}


// Code Solution #1
const solution1 = (text) => {
	// O(n) + O(n) + O(n) + 
	//	O(1) + O(n) * ( O(1) + O(1) )
	//	O(n) + O(n) + O(n) + O(n)
	// O(3n) + O(1) + O(n) + O(n) + O(4n)
	// O(9n) + O(1)
	// O(n)
	
	// 1. Get array of all lowercase letters
	// O(n)
	text = text.toLowerCase()
	// O(n)
	var characetsArr = text.split("")
	// O(n)
	var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

	// 2. create array of all letters
	// O(1)
	var letterArray = []
	// O(n)
	characetsArr.forEach( char => {
		// O(1)		// O(1)
		if(validCharacters.indexOf(char) > -1) letterArray.push(char)
	})

	// 3. test if same forwards/back
	// O(n) + O(n) + O(n) + O(n)
	return letterArray.join('') === letterArray.reverse().join('')
}


// Attempt #2
const attempt2 = (text) => {
	// O(n) + O(n) + 
	// 	O(n) + O(n) + O(n) + O(n)
	// O(2n) + O(4n)
	// O(6n)
	// O(n)

	// 1. Get array of all lowercase letters
	// 2. Create array of all letters
	// O(n) + O(n)
	const t = [...(text.toLowerCase().replace(/\W/g, ''))]

	// 3. Test if same forwards/back
	// O(n) + O(n) + O(n) + O(n)
	return t.join('') === t.reverse().join('')
}


const IsPalindrome = (props) => {
	const [text, setText] = useState("Madam I'm Adam")
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		return <div>{func(text) ? "True" : "False"}</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Is Palindrome</h2>
		
		<p>Enter a string</p>
		<input type="text" value={text} onChange={ (e) => handleChange(e.target.value, setText) } />
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
		<p>Attempt #2</p>
		{Response(attempt2)}
	</div>
}


export default IsPalindrome


