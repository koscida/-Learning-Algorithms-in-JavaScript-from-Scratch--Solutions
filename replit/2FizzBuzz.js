const FizzBuzz = (num) => {
  [...Array(num+1).keys()].slice(1).forEach(i => {
    if(i % 3 == 0 && i % 5 == 0)
      console.log("FizzBuzz")
    else if(i % 3 == 0)
      console.log("Fizz")
    else if(i % 5 == 0)
      console.log("Buzz")
    else
      console.log(i)
  })
}

const RunFizzBuzz = () => {
  const num = prompt("Enter a number between 0 and 50")
  FizzBuzz(num % 50)
}

export default RunFizzBuzz