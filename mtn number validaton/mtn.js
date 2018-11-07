function validatePhone(){
    var phoneNumber = /^(\+?234703|0703|\+?234706|0706|\+?234803|0803|\+?234806|0806|\+?234810|0810|\+?234813|0813|\+?234814|0814|\+?234816|0816|\+?234903|0903)[0-9]{6}[0-9]{1}$/
 let input = document.getElementById('space').value;
    if (phoneNumber.test(input) ){
        alert("welcome  to MTN!")
    }else {
        alert("please enter an MTN number!")
    }
}
