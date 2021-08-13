var item = localStorage.getItem("User:");
var alluser = JSON.parse(item);
console.log(alluser);
console.log(alluser[0].name);
$("#submit").click(function () {
    var name = $("#name").val();
    var psw = $("#psw").val();
 
    for (var i=0;i<alluser.length;i++){
        if(name === alluser[i].name&& psw=== alluser[i].psw){
            alert("You are logged in!")
        }else{alert("Your password or username is incorrect")}
    }
  
})