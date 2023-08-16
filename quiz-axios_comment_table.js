axios.get("https://jsonplaceholder.typicode.com/comments")
.then (function (response) {
    var data2="";
// var table=document.getElementById("tbl");
data2="<tr>"+
"<th>postId</th>"+
"<th>ID</th>"+
"<th>name</th>"+
"<th>email</th>"+
"<th>body</th>"+

"</tr>"
response.data.forEach(element => {
    data2+="<tr>"+
    "<td>"+"ID:"+" "+element.postId+"</td>"+
    "<td>"+"name:"+" "+element.id+"</td>"+
    "<td>"+"username:"+" "+element.name+"</td>"+
    "<td>"+"email:"+" "+element.email+"</td>"+
    "<td>"+"email:"+" "+element.body+"</td>"+

    "</tr>"
    
});
$("#tbl").html(data2)


});
console.log();