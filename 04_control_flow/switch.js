//BASIC SYNTAX
//switch (key) {
//   case value:
//         
//      break;
//
//   default:
//        break;    
//}

const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
       break;
    case 5:
        console.log("may");
        break;
    
    default:
        console.log("default case match");
        break;
}//march
//for eg- agar hum break use nhi krte to ek jaise hi condition match hon jati h uske baad ka saara code bhi execute ho jata h by default.....maan lo agar hum break use hi na kre to output march april may default case match hoga!