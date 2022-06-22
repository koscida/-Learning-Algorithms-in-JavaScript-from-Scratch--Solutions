import React, {useState} from 'react'

const FizzBuzzOutput = ({num}) => <>
	{[...Array(num+1).keys()].slice(1).map(i => {
		let display = i
		if(i % 3 === 0 && i % 5 === 0)
			display = "FizzBuzz"
		else if(i % 3 === 0)
			display = "Fizz"
		else if(i % 5 === 0)
			display = "Buzz"
		
		return <div key={i}>{display}</div>
	})}
</>

const FizzBuzz = (props) => {
	const [num, setNum] = useState(20)
	
	const handleUpdate = (e) => {
		setNum(Number(e.target.value) % 50)
	}
	
	return <div style={{padding: "10px"}}>
		<h2>FizzBuzz</h2>
		
		<div>
			<input 
				value={num} 
				type="number" 
				onChange={handleUpdate}
				placeholder="Enter a number between 0 and 50" 
				/>
		</div>
		
		<FizzBuzzOutput num={num} />
	</div>
}


export default FizzBuzz