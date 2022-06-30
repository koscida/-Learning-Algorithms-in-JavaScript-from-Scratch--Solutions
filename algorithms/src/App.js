import FizzBuzz from './2FizzBuzz.js'
import HarmlessRansomNote from './3HarmlessRansomNote.js'
import IsPalindrome from './4IsPalindrome.js'
import CaesarCipher from './5CaesarCipher.js'
import ReverseWords from './6ReverseWords.js'
import ReverseArrayInPlace from './7ReverseArrayInPlace.js'
import MeanMedianMode from './8MeanMedianMode.js'
import TwoSum from './9TwoSum.js'
import BinarySearch from './10BinarySearch.js'
import Fibonacci from './11Fibonacci.js'
import MemorizedFibonacci from './12MemorizedFibonacci.js'
import SieveEratosthenes from './13SieveEratosthenes.js'


function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
		<FizzBuzz />
		<HarmlessRansomNote />
		<IsPalindrome />
		<CaesarCipher />
		<ReverseWords />
		<ReverseArrayInPlace />
		<MeanMedianMode />
		<TwoSum />
		<BinarySearch />
		<Fibonacci />
		<MemorizedFibonacci />
		<SieveEratosthenes />
    </div>
  );
}

export default App;
