import React, {useState} from 'react'



// Attempt #1
const attempt1 = (array) => {
	let ops = 0
	
	let max = -(Number.MAX_SAFE_INTEGER)
	let min = Number.MAX_SAFE_INTEGER
	let maxProfit = -1
	
	array.forEach(n => {
		ops++
		if(max < n) max = n
		if(min > n) min = n
		const localProfit = max - min
		if (localProfit >= 0 && localProfit > maxProfit) {
			maxProfit = localProfit
		}
	})
	
	return [maxProfit, ops]
}



// Code Solution #1
const solution1 = (array) => {
	let ops = 0
	
	var maxProfit = -1;
	var buyPrice = 0;
	var sellPrice = 0;
	
	var changeBuyPrice = true;
	
	for (var i = 0; i < array.length; i++) {
		ops++
		if (changeBuyPrice) 
			buyPrice = array[i];
		sellPrice = array[i + 1];
		
		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		}
		else {
			var tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) 
				maxProfit = tempProfit;
			changeBuyPrice = false;
		}
	}
  
	return [maxProfit, ops]
}


const MaxStockProfit = (props) => {
	const [numArr, setNumArr] = useState("32,46,26,38,40,48,42")
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		const [sortArr, ops] = func(
			numArr.split(',').map(n=>Number(n)), 0
		)
		return <div>
			Max Profit: {sortArr}
			<br />
			Operations: {ops}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Max Stock Profit</h2>
		
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


export default MaxStockProfit
