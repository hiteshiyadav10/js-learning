const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//Arrays can take anything as its input(even another array as seen above)
console.log(marvel_heros[3])//[ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][0])//superman
//Its not good of a method though.

//concat()=>combines two or more arrays and returns a new array.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//spread gives same values as concat() over here but using spread we can combine more than 2 arrays too(...___,...___,...___,...____) unlike concat.


//flat()=> it is a method that takes a nested array(an array containing other arrays and FLATTENS it into a single,simple array by pulling out all the inner elements)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//flat(depth)=>depth parameter tells how many levels of nested boxes open by passing a number inside.
//array.falt(1) => opens 1 level of nested array(it is by default if you leave it empty)
//infinity=>tells to open all nested arrays.
console.log(real_another_array)//[
  //1, 2, 3, 4, 5,
 // 6, 7, 6, 7, 4,
// 5
//]
const real_another_array2 = another_array.flat()
console.log(real_another_array2)//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

//to check if the passed data is array or not
console.log(Array.isArray("hiteshi"))//false
//to convert passed data to array
console.log(Array.from("hiteshi"))//['h', 'i', 't','e', 's', 'h','i']
console.log(Array.from({name: "hiteshi"}))//[](the function is unable to convert '{name: "hiteshi"}' to an array)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]
//of()=>returns a new array from set of elements.