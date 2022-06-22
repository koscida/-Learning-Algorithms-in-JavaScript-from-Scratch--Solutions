import React, {useState} from 'react'

// Attempt #1
const attempt1 = (arr) => {
	// O(n)
	
	let temp = ''
	for(let i=0; i<Math.floor(arr.length/2); i++) {
		temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return <div>{arr.join(",")}</div>
}

// Code Solution #1
const solution1 = (arr) => {
	
	for(let i=0; i<arr.length / 2; i++) {
		let temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return <div>{arr.join(",")}</div>
}


const ReverseArrayInPlace = (props) => {
	const [arrText, setArrText] = useState("apple,banana,orange,pear,kiwi")
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Reverse Array In Place</h2>
		
		<div>
			<p>Enter a list of things separated by a comma</p>
			<textarea type="text" value={arrText} onChange={ (e) => handleChange(e.target.value, setArrText) } />
		</div>
		
		<p>Attempt #1</p>
		{attempt1(arrText.split(','))}
		
		<p>Solution #1</p>
		{solution1(arrText.split(','))}
		
	</div>
}


export default ReverseArrayInPlace
