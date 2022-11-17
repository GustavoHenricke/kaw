var gasolina, etanol;
function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="../assents/img/etanol.jpg";

    }
    else{
        document.getElementById("imagem").src="../assents/img/gasolina.jpg";
 }
}
function limpar(){
    document.getElementById("imagem").src="../assents/img/normal.jpg";

}