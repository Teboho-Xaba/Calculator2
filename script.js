let result = document.getElementById("input-text");

let calculate = (number)=>{
    result.value += number;
}

let equate = ()=> {
    try {
        result.value = eval(result.value)
    } 
    catch (error) {
        alert("Enter the valid result");
    }
}

function clr(){
    //result.value = "0";
    result.innerHTML = 0;
    console.log("Button clicked");
}

function del(){
    result.value = result.value.slice(0,-1);
}