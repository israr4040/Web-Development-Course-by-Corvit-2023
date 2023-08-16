// var x=10;
//  var   y=15;
// var z ;
// var i="Israr"; 
// console.log("z="+ (x+y));
// if(x>=y){
//     console.log("X is Greater");
// }
// else{
//     console.log("Y is greater");
// }

// console.log(!(false && true) && !(false||true));

// console.log("Hameed +"+ " " + i);

// var x=2;

// for (let i = 1; i <=10; i++) {
//    var Table= x*i

//   console.log((x+ "*" +i +"=") + Table);

//Switch Case

// }
// var fruit = "mango"
// switch (fruit) {
//   case "orange":
//     console.log('orange');
//     break;
//     case "mango":
//     console.log("mango");
//     break;
//     case "banana":
//       console.log('Banana');
//       break;
//       case "strawberry":
//         console.log('strabwberry');
//         break;
//   default:
//     console.log("Not  in Our List");
//     break;
// }

//Stars Print

// let n = 5;
// let String= "";
// for (let x = 1; x <= n; x++) {
//   for (let y = 0; y < x; y++) {

//     String = String+"*";
//   }
//   String += "\n"

// }
// console.log(String);

//Check Even or Odd

// for (let i = 1; i <= 50; i++) {
//   var check=i%2;
//   if (check===0) {
//     console.log(i+" " + "Is Even No");
//   }
//     else {
//       console.log(i +" "+ "Is Odd No");
//   }

//While Loop

// }
// let i=0;
// while ( i<5) {
//     console.log(i);
//     i++;
// }

//Do While Loop

// let i=1;
// do {
//      console.log(i);
// } while (i==2);

//Array

//  const fname =["Israr", "Abrar","Anwar", "Izhar"];
//  console.log(fname);
//  fname.push( "Zahoor","Zia")
//  Bros=fname.length
//  console.log(Bros);
//  console.log(fname[2]);
//  fname.pop();
 
//  fname.forEach(element => {
//     console.log(fname[4]);
//  });
 
//  for (let i = 0; i < fname.length; i++) {
//     const element = fname[i];
//     console.log(i+" "+element);
//  }
//  final=fname.splice(1,0,"replace abrar")
//  console.log(final);
//  console.log(fname);

//Even Odd Function

// function even(num) {
//  if( num%2==0){
//    return num+" "+ "Is Even No"
//  }
//  else
//    return num+" "+ "Is odd No"

//  }
//  console.log(even(9));

//Object Function

//  Israr= {
//    fname: "Israr",
//    lname: "UL-Haq",
//    age: 24,
//    phone: "03000000000",
// }
// console.log(Israr);
// console.log(Israr.phone+"\n"+ Israr.fname);

//Prime Number Function

// function primeNO(num){
   
//    if (num<=1){
//       return num+" "+"Is Not a Prime No"
//    }
//    else if (num===2){
//       return num+" "+ "Is  Prime Number"
//    }
//    for (let i = 2; i < num; i++) {
//       if(num%i===0){
//          return num+" "+ "Is Not Prime Number"
//       }
//    }
//    return num+" "+ "Is  Prime Number"
// }
// console.log(primeNO(25));

//Table Function

// function table(data){
//    for (let i = 1; i < 11; i++) {
//       var tbdata=data*i;
//       console.log(data+"X"+i+" "+"="+tbdata);
      
//    }
// }
// table(3)

//Get Element By ID

// var table=document.getElementById("tabl");
//     let data="<tr>"+" "+
//     "<th>Name</th>"+" "+
//     "<th>Roll No</th>"+" "+
//     "<th> Class</th>"+" "+
//     "<th>Section</th>"+" "+"</tr>"+
//     "<tr>"+
//     "<td>Name</td>"+" "+
//     "<td>Roll No</td>"+" "+
//     "<td> Class</td>"+" "+
//     "<td>Section</td>"+" "+"</tr>";
// table.innerHTML=data;
    

$("p").click (function(){
    $(this).hide();
  });
