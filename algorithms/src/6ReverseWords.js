import React, {useState} from 'react'

// Attempt #1
const attempt1 = (text) => {
	// O(n * word) (n = number of words, word = length of longest word)
	
	return <div>
		{text
			.split(' ')
			.reduce( (newText, word) => 
				[
					...newText, 
					word.split("").reduce( 
						(newWord, letter) => 
							[letter, ...newWord]
					, []).join('')
				]
			, [])
			.join(' ')}
		</div>
}

// Code Solution #1
const solution1 = (text) => {
	// O(n * word) (n = number of words, word = length of longest word)
	
	
	let wordsArr = text.split(" ")
	let reverseWordsArr = []
	
	wordsArr.forEach(word => {
		let reversedWord = ''
		for(let i=word.length-1; i>=0; i--) {
			reversedWord += word[i]
		}
		reverseWordsArr.push(reversedWord)
	})
	
	return <div>{reverseWordsArr.join(" ")}</div>
}

// Attempt #2
const attempt2 = (text) => {
	// O(n * word) (n = number of words, word = length of longest word)
	
	return <div>
		{text
			.split(' ')
			.reduce( (newText, word) => 
				[
					...newText, 
					[...word].reduce( (revWord, letter) => letter += revWord, '')
				]
			, [])
			.join(' ')}
		</div>
}

const ReverseWords = (props) => {
	const [text, setText] = useState("This is a string of Words")
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Reverse Words</h2>
		
		<div>
			<p>Enter a string</p>
			<input type="text" value={text} onChange={ (e) => handleChange(e.target.value, setText) } />
		</div>
		
		<p>Attempt #1</p>
		{attempt1(text)}
		
		<p>Solution #1</p>
		{solution1(text)}
		
		<p>Attempt #2</p>
		{attempt2(text)}
	</div>
}


export default ReverseWords


