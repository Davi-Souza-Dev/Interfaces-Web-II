const inputs = [...document.getElementsByClassName("input")];
const btnComfirmar = document.getElementById("btnComfirmar");

btnComfirmar.addEventListener("click",()=>{
    inputs.map((campo)=>{
        if(campo.value == ''){
            campo.style.border = "2px solid red";
        }else{
            campo.style.border = "2px solid lightgreen";
        }
    });
    
});

console.log(inputs);