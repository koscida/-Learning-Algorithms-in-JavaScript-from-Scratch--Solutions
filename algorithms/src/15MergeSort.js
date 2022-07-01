import React, {useState} from 'react'


const attempt1Merge = (arrayA, arrayB, ops) => {
	ops++
	let sortedArray = []
	// merge
	while(arrayA.length > 0 && arrayB.length > 0) {
		ops++
		if(arrayA[0] < arrayB[0]) {
			sortedArray.push(arrayA.shift())
		} else {
			sortedArray.push(arrayB.shift())
		}
	}
	if(arrayA.length > 0) sortedArray = [...sortedArray, ...arrayA]
	if(arrayB.length > 0) sortedArray = [...sortedArray, ...arrayB]
	
	// return
	return [sortedArray, ops]
}

// Attempt #1
const attempt1Sort = (array, ops) => {
	ops++
	
	if(array.length === 1) {
		return [array,ops]
	}
	else if(array.length === 2) {
		if(array[0]>array[1])
			return [[array[1],array[0]],ops]
		else
			return [array, ops]
	}
	else {
		// split
		//ops = ops || 0
		const mid = Math.floor(array.length/2)
		const arrayFirst = array.slice(0,mid)
		const arrayLast = array.slice(mid, array.length)
		const [arrayA, opsA] = attempt1Sort(arrayFirst, ops)
		const [arrayB, opsB] = attempt1Sort(arrayLast, ops)
		ops += (opsA + opsB)
		
		// sort
		let [sortedArray, opsMerged] = attempt1Merge(arrayA, arrayB, ops)
		ops += opsMerged
		
		return [sortedArray, ops]
	}
}


function solution1Merge (array1, array2, ops) { 
	ops++
    var result = [];
	
    while (array1.length && array2.length) {
		ops++
		var minElem;
		if (array1[0] < array2[0]) minElem = array1.shift();
		else minElem = array2.shift();
		result.push(minElem);
    }
    
    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);
	
    return [result, ops];
}
// Code Solution #1
const solution1Sort = (array, ops) => {
	ops++
	
	if (array.length < 2) return [array, ops];
    var middleIndex = Math.floor(array.length / 2);
    var firstHalf = array.slice(0, middleIndex);
    var secondHalf = array.slice(middleIndex);
    
	const [arrayA, opsA] = attempt1Sort(firstHalf, ops)
	const [arrayB, opsB] = attempt1Sort(secondHalf, ops)
	ops += (opsA + opsB)
    const [mergedArray, opsMerged] = solution1Merge(arrayA, arrayB, ops);
	ops += opsMerged
	
	return [mergedArray, ops]
}


const MergeSort = (props) => {
	const [numArr, setNumArr] = useState("11,7,4,1,15,12,3")
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		const [sortArr, ops] = func(
			numArr.split(',').map(n=>Number(n)), 0
		)
		return <div>
			Merged Sorted Array: {sortArr.join(', ')}
			<br />
			Operations: {ops}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Merge Sort</h2>
		
		<div>
			<p>Enter a list of numbers separated by a comma</p>
			<textarea type="text" value={numArr} onChange={ (e) => handleChange(e.target.value, setNumArr) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1Sort)}
		
		<p>Solution #1</p>
		{Response(solution1Sort)}
		
	</div>
}


export default MergeSort
