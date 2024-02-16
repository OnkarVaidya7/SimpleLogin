let username = document.getElementById("un");
let password = document.getElementById("pass");

function login(){
    // console.log("click login button")
    username = username.value;
    password = password.value;

    let userDate = JSON.parse(localStorage.getItem("userdetails"));
    if ((username!=="")&&(password!=="")){
        if((username === userDate.un) && (password === userDate.pass)){
            open("index.html","_self");
        }else{
            alert("INVALID CREDENTIALS!")
        }
    }
    else{
        alert("FILL THE DETAILS !!!")
    }
}