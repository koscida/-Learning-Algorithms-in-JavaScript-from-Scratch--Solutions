import React, {useState} from 'react'

// Attempt #1
const attempt1 = (position) => {
	if(position === 1) return 1
	else if(position === 2) return 1
	else if(position > 2) return attempt1(position-1) + attempt1(position-2)
	else return 0
}

// Code Solution #1
const solution1 = (position) => {
	if(position < 3) return 1
	else return solution1(position - 1) + solution1(position - 2)
}

const Fib = (position) => {
	if(position === 1) return [1]
	else if(position === 2) return [1,1]
	else if(position > 2){
		const prevFib = Fib(position-1)
		return [...prevFib, prevFib[prevFib.length-1] + prevFib[prevFib.length-2]]
	}
	else return [0]
}


const Fibonacci = (props) => {
	const [position, setPosition] = useState(4)
	
	const handleChange = (value, setFunc) => {
		setFunc(Number(value))
	}
	
	const Response = (func) => {
		return <div>
			{func(position)}
		</div>
	}
	
	return <div style={{padding: "10px"}}>
		<h2>Fibonacci</h2>
		
		<div>
			<p>Enter the position</p>
			<input type="number" value={position} onChange={ (e) => handleChange(e.target.value, setPosition) } />
		</div>
		
		<p>Attempt #1</p>
		{position && Response(attempt1)}
		
		<p>Solution #1</p>
		{position && Response(solution1)}
		
		<div>
			<p>Fibonacci Sequence:</p>
			{position && Fib(position).join(", ")}
		</div>
		
	</div>
}


export default Fibonacci
