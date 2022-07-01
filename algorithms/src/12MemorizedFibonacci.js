import React, {useState} from 'react'

// Attempt #1
const attempt1 = (index, cache, ops) => {
	ops = ops || 0
	ops++
	
	if(index === 1) return [[1],ops]
	else if(index === 2) return [[1,1],ops]
	else if(index > 2) {
		const [pastCache, pastOps] = attempt1(index-1, cache, ops)
		ops += pastOps
		const newValue = pastCache[pastCache.length-1] + pastCache[pastCache.length-2]
		return [[...pastCache, newValue],ops]
	}
	else return [[0],ops]
}

// Code Solution #1
const solution1 = (index, cache, ops) => {
	ops = ops || 0
	ops++
	
	cache = cache || []
	
	if(index === 1) return [[1], ops]
	else if(index === 2) return [[1,1], ops]
	else {
		let [cacheA, opsA] = solution1(index-1, cache, ops)
		const [cacheB, opsB] = solution1(index-2, cache, ops)
		ops += (opsA + opsB)
		cacheA[index-1] = cacheA[cacheA.length-1] + cacheB[cacheB.length-1]
		return [cacheA, ops]
	}
}

const Fib = (index) => {
	if(index === 1) return [1]
	else if(index === 2) return [1,1]
	else if(index > 2){
		const prevFib = Fib(index-1)
		return [...prevFib, prevFib[prevFib.length-1] + prevFib[prevFib.length-2]]
	}
	else return [0]
}



const MemorizedFibonacci = (props) => {
	const startingIndex = 6
	const startingAttempt1Response = attempt1(startingIndex, [])
	const startingSolution1Response = solution1(startingIndex)
	const [index, setIndex] = useState(startingIndex)
	const [attempt1Response, setAttempt1Response] = useState(startingAttempt1Response)
	const [solution1Response, setSolution1Response] = useState(startingSolution1Response)
	
	const handleChange = (value) => {
		setIndex(Number(value))
		setAttempt1Response(attempt1(value, attempt1Response))
		setSolution1Response(solution1(value))
	}
	
	const Response = ([cache, ops]) => {
		return <div>
			Cache: {cache.join(", ")}
			<br />
			Operations: {ops}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Memorized Fibonacci</h2>
		
		<div>
			<p>Enter the index</p>
			<input type="number" value={index} onChange={ (e) => handleChange(e.target.value) } />
		</div>
		
		<p>Attempt #1</p>
		{index && Response(attempt1Response)}
		
		<p>Solution #1</p>
		{index && Response(solution1Response)}
		
		<div>
			<p>Fibonacci Sequence:</p>
			{index && Fib(index).join(", ")}
		</div>
		
	</div>
}


export default MemorizedFibonacci
