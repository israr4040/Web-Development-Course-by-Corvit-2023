// function btn() {
//     console.log("button clicked");
    
    
// }
// var btn=()=>{
// document.getElementById("body").style.backgroundColor="green"
// document.getElementById("div").style.backgroundColor="red"
// }
// $("#btn").click(function () {
//     var valu=$("#name").val();
//     $("#div").text(valu);
// });

// $("#password").focus(function () {
//     var valu=$("#password").val();
//     $("#div").text(valu);
// });
$(".btn").click(function(){
  // $(".pra").hide(1000);

    $("#div1").hide(1000);
    $("#div2").hide(2000);
    $("#div3").hide(3000);
  });

  $(".btn").mouseenter(function(){
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(4000);
    $("#div3").fadeIn(6000);
  });