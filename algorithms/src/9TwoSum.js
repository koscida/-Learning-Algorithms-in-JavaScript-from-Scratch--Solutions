import React, {useState} from 'react'

// Attempt #1
const attempt1 = (arr, sum) => {
	arr = arr.sort()
	const arrMap = arr.reduce( (arrMap, ele) => {
		arrMap[ele]
			? arrMap[ele]++
			: arrMap[ele] = 1
		return arrMap
	}, {})
	const res = [];
	Object.entries(arrMap).forEach(([value, freq]) => {
		const val = Number(value)
		const diff = sum - val
		if(arrMap[diff]) {
			res.push([val, diff])
		}
			
	})
	return res
}

// Code Solution #1
const solution1 = (arr, sum) => {
	let pairs = []
	let arrMap = [];
	
	for (const currentNum of arr) {
		let counterpart = sum - currentNum
		if(arrMap.indexOf(counterpart) !== -1) {
			pairs.push([currentNum, counterpart])
		}
		arrMap.push(currentNum)
	}
	
	return pairs
}




const TwoSum = (props) => {
	const [numArr, setNumArr] = useState("1,6,4,5,3,3")
	const [sum, setSum] = useState(7)
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		return <div>
			{func(numArr.split(',').map(n=>Number(n)), sum).map( (result,i) => <p key={i}>[{result[0]}, {result[1]}]</p>)}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Two Sum</h2>
		
		<div>
			<p>Enter a list of numbers separated by a comma</p>
			<textarea type="text" value={numArr} onChange={ (e) => handleChange(e.target.value, setNumArr) } />
			<p>Enter a sum</p>
			<input type="text" value={sum} onChange={ (e) => handleChange(e.target.value, setSum) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
	</div>
}


export default TwoSum
