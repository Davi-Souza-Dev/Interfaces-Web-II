let btnTheme = document.getElementById("btnTheme");
btnTheme.addEventListener("click",(event)=>{
    let tema = document.getElementById("tema");
    if(event.target.checked){
        tema.href = "style/temaClaro.css";
    }else{
        tema.href = "style/temaEscuro.css";
    }
});