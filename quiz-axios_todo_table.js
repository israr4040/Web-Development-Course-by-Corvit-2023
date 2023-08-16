axios.get("https://jsonplaceholder.typicode.com/todos")
.then (function (response) {
    var data2="";
// var table=document.getElementById("tbl");
data2="<tr>"+
"<th>userId</th>"+
"<th>ID</th>"+
"<th>title</th>"+
"<th>completed</th>"+
"</tr>"
response.data.forEach(element => {
    data2+="<tr>"+
    "<td>"+"ID:"+" "+element.userId+"</td>"+
    "<td>"+"name:"+" "+element.id+"</td>"+
    "<td>"+"username:"+" "+element.title+"</td>"+
    "<td>"+"email:"+" "+element.completed+"</td>"+
    "</tr>"
    
});
$("#tbl").html(data2)


});
console.log();