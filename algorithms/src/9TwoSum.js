import React, {useState} from 'react'

// Attempt #1
const attempt1 = (arr) => {
	
}

// Code Solution #1
const solution1 = (arr) => {
	
}

const attempt2 = (arr) => {
	
}


const TwoSum = (props) => {
	const [nums, setNums] = useState("1,2,2,2,3,4,5,5,5")
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Two Sum</h2>
		
		<div>
			<p>Enter a list of numbers separated by a comma</p>
			<textarea type="text" value={nums} onChange={ (e) => handleChange(e.target.value, setNums) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
		<p>Attempt #2</p>
		{Response(attempt2)}
		
	</div>
}


export default TwoSum
