import React, {useState} from 'react'

// Attempt #1
const attempt1 = (num) => {
	// O(nlog(n)) ??
	
	if(num < 4) {
		return [[...Array(num).keys()].slice(1),num]
	} else {
		let primes = [2,3]
		let ops = 0
		// O(n)
		const s = [...Array(num).keys()].slice(4)
		// O(n)
		s.forEach(key => {
			ops++
			let div = false
			// primes = O(log(n)) ??
			for (const prime of primes) {
				ops++
				if(key % prime === 0) div = true
			}
			if(!div) primes.push(key)
		})
		return [primes,ops]
	} 
}

// Attempt #2
const attempt2 = (num) => {
	// O(n) + 
	// O(n^1/2) * O(n)
	// 	O(n)
	// O(2n) + O(n^3/2)
	// O(sqrt(n^2)) ??
	
	// O(n)
	let primeMap = [...Array(num).keys()].map(k => true)
	
	let ops = 0
	
	// O(n^1/2)
	for(let i=0;i<Math.ceil(Math.sqrt(num));i++) {
		ops++
		if(i <= 1) {
			primeMap[i] = false
		} else {
			if(primeMap[i]) {
				primeMap[i] = true
				// O(n) ??
				for(let j=i+i;j<num;j+=i) {
					ops++
					primeMap[j] = false
				}
			}
		}
	}
	
	// O(n)
	const primes = primeMap.reduce((prev,x,i)=>x?[...prev,i]:prev,[])
	
	return [primes,ops]
	
}

// Code Solution #1
const solution1 = (num) => {
	// O(n) + 
	// O(n^1/2) * O(n)
	// 	O(n)
	// O(sqrt(n^2)) ??
	
	let ops = 0
	let primes = [];
	// O(n)
	for(let i=0;i<=num;i++) {
		primes[i] = true;
	}
	
	primes[0] = false
	primes[1] = false
	
	// O(n^1/2)
	for(let i=2;i<Math.sqrt(num);i++) {
		ops++
		// O(n)
		for(let j=2;j*i<=num;j++) {
			ops++
			primes[i*j] = false
		}
	}
	
	let result = []
	// O(n)
	for(let i=0;i<primes.length;i++) {
		if(primes[i]) result.push(i)
	}

	return [result,ops]
}

// Attempt #2
const attempt3 = (num) => {
	/// O(sqrt(n^2)) ??
	
	let ops = 0
	
	// O(n)
	let primeMap = [...Array(num).keys()].map(k => true)
	
	// O(n^1/2)
	for(let i=0;i<Math.ceil(Math.sqrt(num));i++) {
		ops++
		if(i <= 1) {
			primeMap[i] = false
		} else {
			if(primeMap[i]) {
				// O(n)
				for(let j=i+i;j<num;j+=i) {
					ops++
					primeMap[j] = false
				}
			}
		}
	}
	
	// O(n)
	const primes = primeMap.reduce((prev,x,i)=>x?[...prev,i]:prev,[])
	
	return [primes, ops]
	
}




const SieveEratosthenes = (props) => {
	const [num, setNum] = useState(20)
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		const [arr, ops] = func(num)
		return <div>
			Primes: {arr.join(', ')}
			<br />
			Operations: {ops}
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
		
		<p>Attempt #3</p>
		{Response(attempt3)}
		
	</div>
}


export default SieveEratosthenes
