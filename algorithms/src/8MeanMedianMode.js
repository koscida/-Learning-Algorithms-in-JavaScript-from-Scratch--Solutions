import React, {useState} from 'react'

// Attempt #1
const attempt1 = (arr) => {
	const median = (arr.length % 2 === 0)
		? arr[arr.length / 2]
		: (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2)+1]) / 2
	
	let sum = 0
	let modeObj = {}
	arr.forEach( ele => {
		sum = sum + ele;
		(!modeObj[ele]) 
			? modeObj[ele] = 1
			: modeObj[ele]++
	})
	const mean = sum / arr.length
	
	let mode = {}
	Object.entries(modeObj).forEach( ([num, freq]) => {
		if(!mode.freq) mode = {num, freq}
		if(mode.freq < freq) mode = {num, freq}
	})
	mode = mode.num
	
	return { mean, median, mode }
}

// Code Solution #1
const solution1 = (arr) => {
	const mean = (arr) => {
		let sum = 0;
		arr.forEach(num => {
			sum += num
		})
		return sum / arr.length
	}
	
	const median = (arr) => {
		arr.sort((a,b)=>a-b)
		let median
		if(arr.length % 2 !== 0) {
			median = arr[Math.floor(arr.length / 2)]
		} else {
			const mid1 = arr[Math.floor(arr.length / 2)]
			const mid2 = arr[Math.floor(arr.length / 2)+1]
			median = (mid1 + mid2) / 2
		}
		return median
	}
	
	const mode = (arr) => {
		let modeObj = {}
		arr.forEach( num => {
			if (!modeObj[num]) modeObj[num] = 0
			modeObj[num]++
		})
		
		let maxFreq = 0
		let modes = []
		for (let num in modeObj) {
			if(modeObj[num] > maxFreq) {
				modes = [num]
				maxFreq = modeObj[num]
			} else if(modeObj[num] === maxFreq) {
				modes.push(num)
			}
		}
		if(modes.length === Object.keys(modeObj)) modes = []
		return modes
	} 
	
	return { 
		mean: mean(arr), 
		median: median(arr), 
		mode: mode(arr)
	}
}

const attempt2 = (arr) => {
	const mean = (arr) => arr.reduce( (s,n) => s+n,0) / arr.length 
	
	const median = (arr) => {
		arr.sort((a,b)=>a-b)
		
		return (arr.length % 2 === 0)
			? arr[arr.length / 2]
			: (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2)+1]) / 2
	} 
	
	const mode = (arr) => {
		let modeObj = {}
		arr.forEach( num => {
			(!modeObj[num]) ? modeObj[num] = 1 : modeObj[num]++
		})
		
		let maxFreq = 0
		let modes = []
		for (let num in modeObj) {
			if(modeObj[num] > maxFreq) {
				modes = [num]
				maxFreq = modeObj[num]
			} else if(modeObj[num] === maxFreq) {
				modes.push(num)
			}
		}
		if(modes.length === Object.keys(modeObj)) modes = []
		return modes
	} 
	
	return { 
		mean: mean(arr), 
		median: median(arr), 
		mode: mode(arr)
	}
}


const MeanMedianMode = (props) => {
	const [nums, setNums] = useState("1,2,2,2,3,4,5,5,5")
	
	const handleChange = (value, setFunc) => {
		setFunc(value)
	}
	
	const Response = (func) => {
		const data = func(nums.split(",").map(n=>Number(n)))
		return <div>
			Mean: {data.mean} <br/>
			Median: {data.median} <br/>
			Mode: {data.mode.length > 1 ? data.mode.join(",") : data.mode}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Mean, Median, Mode</h2>
		
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


export default MeanMedianMode
