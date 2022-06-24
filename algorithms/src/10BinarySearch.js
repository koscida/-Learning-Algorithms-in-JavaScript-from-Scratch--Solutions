import React, {useState} from 'react'

// Attempt #1
const attempt1 = (arr, key) => {
	if(arr.length === 1) {
		return arr[0] === key
	} else {
		const midPoint = Math.floor(arr.length/2)
		if(arr[midPoint] === key) return true
		else if(arr[midPoint] < key) return attempt1(arr.slice(midPoint+1), key)
		else return attempt1(arr.slice(0,midPoint), key)
	}
}

// Code Solution #1
const solution1 = (arr, key) => {
	const midIdx = Math.floor(arr.length/2)
	const midEle = arr[midIdx]
	
	if(midEle === key) return true
	else if(midEle < key && arr.length > 1) return solution1(arr.slice(midIdx), key)
	else if(midEle > key && arr.length > 1) return solution1(arr.slice(0, midIdx), key)
	else return false
}




const BinarySearch = (props) => {
	const [numArr, setNumArr] = useState("5,7,12,16,36,39,42,56,71")
	const [key, setKey] = useState(56)
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		return <div>
			{func(numArr.split(',').map(n=>Number(n)), Number(key)) ? "True" : "False"}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Binary Search</h2>
		
		<div>
			<p>Enter a list of numbers separated by a comma</p>
			<textarea type="text" value={numArr} onChange={ (e) => handleChange(e.target.value, setNumArr) } />
			<p>Enter a key</p>
			<input type="text" value={key} onChange={ (e) => handleChange(e.target.value, setKey) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
	</div>
}


export default BinarySearch
