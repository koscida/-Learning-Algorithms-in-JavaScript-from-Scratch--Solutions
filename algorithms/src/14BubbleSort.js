import React, {useState} from 'react'

// Attempt #1
const attempt1 = (array) => {
	let ops = 0
	for(let j=0;j<array.length-1;j++) {
		ops++
		for(let i=0;i<array.length-1-j;i++) {
			ops++
			const aValue = array[i]
			const bValue = array[i+1]
			if(bValue < aValue) {
				array[i] = bValue;
				array[i+1] = aValue;
			}
		}
	}
	return [array, ops]
}


// Code Solution #1
const solution1 = (array) => {
	let ops = 0
	for(let i=array.length;i>0;i--) {
		ops++
		for(let j=0;j<i;j++) {
			ops++
			if(array[j] > array[j+1]) {
				const tmp = array[j]
				array[j] = array[j+1];
				array[j+1] = tmp;
			}
		}
	}
	return [array, ops]
}


const BubbleSort = (props) => {
	const [numArr, setNumArr] = useState("12,5,3,18,1,8,9,2,1,4,10")
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		const [sortArr, ops] = func(numArr.split(',').map(n=>Number(n)))
		return <div>
			Sorted Array: {sortArr.join(', ')}
			<br />
			Operations: {ops}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Bubble Sort</h2>
		
		<div>
			<p>Enter a list of numbers separated by a comma</p>
			<textarea type="text" value={numArr} onChange={ (e) => handleChange(e.target.value, setNumArr) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
	</div>
}


export default BubbleSort
