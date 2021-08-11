$('#psw,#psw-repeat').on('keyup',function(){
    if($('#psw').val()== $('#psw-repeat').val()){
        $('#message').html('Matching').css('color','green')
    }else{
        $('#message').html('Not matching').css('color','red')
    }
});
var submit=$("#submit")
submit.onclick=function(){
    var name=$('#name').val()
    var age=$('#age').val()
    var email=$('#email').val()
    var psw=$('#psw').val()
    function User(name,age,email,psw){
        this.name=name
        this.age=age
        this.email=email
        this.psw=psw
    }
    const user= new User(name,age,email,psw)
    localStorage.setItem("User:",JSON.stringify(user))}

