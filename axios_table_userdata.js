axios.get("https://jsonplaceholder.typicode.com/users")
.then (function (response) {
    var data2="";
var table=document.getElementById("tbl");
data2="<tr>"+
"<th>ID</th>"+
"<th>Name</th>"+
"<th>username</th>"+
"<th>email</th>"+
"<th>adress</th>"+
"<th>Phone</th>"+
"<th>website</th>"+
"<th>company</th>"+
"</tr>"
response.data.forEach(element => {
    data2+="<tr>"+
    "<td>"+"ID:"+" "+element.id+"</td>"+
    "<td>"+"name:"+" "+element.name+"</td>"+
    "<td>"+"username:"+" "+element.username+"</td>"+
    "<td>"+"email:"+" "+element.email+"</td>"+
    "<td>"+"address:"+" "+element.address+"</td>"+
    "<td>"+"phone:"+" "+element.phone+"</td>"+
    "<td>"+"website:"+" "+element.website+"</td>"+
    "<td>"+"company:"+" "+element.company+"</td>"+
    "</tr>"
    
});
table.innerHTML = data2;


});
console.log();