const txtMsg = document.getElementById("txtMsg");

let date = new Date();
let hora = date.getHours();
// let hora = 19;

let dia = false;
let tarde = false;

window.addEventListener("load",()=>{
    if(hora>=0 && hora<=12){
        dia = true;
        tarde = false;
    }else if(hora>=12 && hora<=18 ){
        dia = false;
        tarde = true;
    }
    mudarMsg();
})


const mudarMsg = () =>{
    if(dia){
        txtMsg.innerHTML = `Bom Dia <br /><span>Entre para testar nosso APP</span>`;
    }else if(tarde){
        txtMsg.innerHTML = `Boa Tarde <br /><span>Entre para testar nosso APP</span>`;
    }else{
        txtMsg.innerHTML = `Boa Noite <br /><span>Entre para testar nosso APP</span>`;
    }
}


// console.log(hora);