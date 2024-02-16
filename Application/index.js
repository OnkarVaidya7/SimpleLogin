let username= document.getElementById("username");
let phone= document.getElementById("phone");
let education= document.getElementById("education");
let branch= document.getElementById("branch");
let college= document.getElementById("college");
let passout= document.getElementById("passout-year");
let email= document.getElementById("email");
let tableBody= document.getElementById("tablebody");
let srno=1;
let check= null;

function dataProcessing(){
    let formData= fetchData();
    if (check==null){
        storeData(formData);
    }
}