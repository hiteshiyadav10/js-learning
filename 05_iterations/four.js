const coding = ["js","ruby","java","python","cpp"]
 const values = coding.forEach((items) => {
    //console.log(items);
    return items;
 })//thereby, this for each loop does not return anything as such
console.log(values)//undefined

 const myNums= [1,2,3,4,5,6,7,8,9,10]
 const newNums=myNums.filter( (num) => num>4)//here we are writing inline function for now
 console.log(newNums)//[ 5, 6, 7, 8, 9, 10 ]

 const newNums2=myNums.filter( (num) => {
    num>4
 })
 console.log(newNums2);//[]
 //this is because now we have started a scope (uning {}) thereby we need to use return keyword

  const newNums3=myNums.filter( (num) => {
   return num>4
 })
 console.log(newNums3);//[ 5, 6, 7, 8, 9, 10 ]

 //using for-each to do the same thing
 const newNums4=[]
 myNums.forEach( (num) => {
       if(num>4){
           newNums4.push(num)
       }
 })
 console.log(newNums4)//[ 5, 6, 7, 8, 9, 10 ]
 
 const books = [
    {
        title: "book1",
        genre: "fiction",
        edition: 2010
    },
    {
        title: "book2",
        genre: "science",
        edition: 1864
    },
    {
        title: "book3",
        genre: "fiction",
        edition: 1989
    }
 ]
 const userBook = books.filter( (bk) => bk.genre ==="fiction")
 console.log(userBook)
 //[
//  { title: 'book1', genre: 'fiction', edition: 2010 },
//  { title: 'book3', genre: 'fiction', edition: 1989 }
//]
const userBook2 = books.filter( (bk) => { return bk.edition <= 1900})
 console.log(userBook2)
//[ { title: 'book2', genre: 'science', edition: 1864 } ]
const userBook3 = books.filter( (bk) => { return bk.edition >= 2000  && bk.genre==="fiction";
})
 console.log(userBook3)//[ { title: 'book1', genre: 'fiction', edition: 2010 } ]