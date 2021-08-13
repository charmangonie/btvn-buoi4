$('#psw,#psw-repeat').on('keyup',function(){
    if($('#psw').val()== $('#psw-repeat').val()){
        $('#message').html('Matching').css('color','green')
    }else{
        $('#message').html('Not matching').css('color','red')
    }
});
let alluser;
if (JSON.parse(localStorage.getItem("alluser")) !==null) {
    alluser = localStorage.getItem("alluser");
    alluser = JSON.parse(alluser)
} else {
    alluser = [];
}
$("#submit").click(function () {
    var name = $("#name").val();
    var age = $("#age").val();
    var email = $("#email").val();
    var psw = $("#psw").val();
    function User(name, age, email, psw) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.psw = psw;
    }
    const user = new User(name, age, email, psw);
    var found = false;
    for (var i=0;i<alluser.length;i++){
        if(user.name === alluser[i].name){
            found = true;
            break;
        }
    }
    if ( found ){
        alert("This username is already in use. Please try another.");
    } else {
        alluser.push(user)
        localStorage.setItem("User:", JSON.stringify(alluser));
       
    }
    })
    

 
  
  

