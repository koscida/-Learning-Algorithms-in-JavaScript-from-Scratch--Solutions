function fizzBuzz(num) {
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

fizzBuzz(20)