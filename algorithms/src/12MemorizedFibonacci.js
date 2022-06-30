import React, {useState} from 'react'

// Attempt #1
const attempt1 = (index, cache) => {
	if(index === 1) return [1]
	else if(index === 2) return [1,1]
	else if(index > 2) {
		const pastCache = attempt1(index-1, cache)
		const newValue = pastCache[pastCache.length-1] + pastCache[pastCache.length-2]
		return [...pastCache, newValue]
	}
	else return [0]
}

// Code Solution #1
const solution1 = (index, cache) => {
	cache = cache || []
	if(cache[index]) return cache[index]
	else {
		if(index < 3) return 1
		else {
			cache[index] = solution1(index-1, cache) + solution1(index-2, cache)
		}
	}
	return cache[index]
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
	const startingAttempt1Cache = attempt1(startingIndex, [])
	const startingSolution1Cache = solution1(startingIndex)
	const [index, setIndex] = useState(startingIndex)
	const [attempt1Cache, setAttempt1Cache] = useState(startingAttempt1Cache)
	const [solution1Cache, setSolution1Cache] = useState(startingSolution1Cache)
	
	const handleChange = (value) => {
		setIndex(Number(value))
		setAttempt1Cache(attempt1(value, attempt1Cache))
		setSolution1Cache(solution1(value))
	}
	
	const Response = (cache) => {
		return <div>
			{cache.join(", ")}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Memorized Fibonacci</h2>
		
		<div>
			<p>Enter the index</p>
			<input type="number" value={index} onChange={ (e) => handleChange(e.target.value) } />
		</div>
		
		<p>Attempt #1</p>
		{index && Response(attempt1Cache)}
		
		<p>Solution #1</p>
		{index && solution1Cache}
		
		<div>
			<p>Fibonacci Sequence:</p>
			{index && Response(Fib(index))}
		</div>
		
	</div>
}


export default MemorizedFibonacci
