//    take the input value and store in to "outPutScreen" //
const outPutScreen = document.getElementById("input")


// take the input and display the input to clint //
function display(num){
    outPutScreen.value += num;
}

// clear the input feild //
function clr(){
   outPutScreen.value = "";
}

// calculate the input value and if it is any err show the err //
function calculate(){
    try{
        outPutScreen.value = eval(outPutScreen.value);
    }
    catch{
        alert("Invalid");
    }
};   

// clear input value one by one 
function del(){
        outPutScreen.value = outPutScreen.value.slice(0,-1)
}

