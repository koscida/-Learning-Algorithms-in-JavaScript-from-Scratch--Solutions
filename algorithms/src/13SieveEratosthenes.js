import React, {useState} from 'react'

// Attempt #1
const attempt1 = (num) => {
	if(num < 4) {
		return [...Array(num+1).keys()].slice(1)
	} else {
		let primes = [2,3]
		const s = [...Array(num+1).keys()].slice(4)
		s.forEach(key => {
			let div = false
			for (const prime of primes) {
				if(key % prime === 0) div = true
			}
			if(!div) primes.push(key)
		})
		return primes
	} 
}

// Attempt #2
const attempt2 = (num) => {
	let primeMap = [...Array(num+1).keys()].map(k => false)
	console.log("--primeMap", primeMap)
	for(let i=0;i<Math.ceil(Math.sqrt(num));i++) {
		console.log("i", i)
		if(i > 1) {
			if(primeMap[i] === false) {
				primeMap[i] = true
				for(let j=i+i;j<num;j+=i) {
					primeMap[j] = true
				}
			}
		}
		console.log("primeMap", primeMap)
	}
	console.log("primeMap", primeMap)
	return primeMap.reduce((prev,x,i)=>x?[...prev,i]:prev,[])
	
}

// Code Solution #1
const solution1 = (num) => {
	return []
}




const SieveEratosthenes = (props) => {
	const [num, setNum] = useState(20)
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		return <div>
			{func(num).join(', ')}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Sieve Eratosthenes</h2>
		
		<div>
			<p>Enter a number</p>
			<input type="number" value={num} onChange={ (e) => handleChange(e.target.value, setNum) } />
		</div>
		
		<p>Attempt #1</p>
		{Response(attempt1)}
		
		<p>Attempt #2</p>
		{Response(attempt2)}
		
		<p>Solution #1</p>
		{Response(solution1)}
		
	</div>
}


export default SieveEratosthenes
