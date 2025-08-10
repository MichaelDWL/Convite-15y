function enviarWpp() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    // var texto = "Nome: ${nome}\nSetor:${setor}\nRamal:${ramal}\nLocal:${local}\nSolicitacao:${solicitacao}\nUrgecia:${urgencia}";
    // var numeroWhatsapp = "5531992214044";
   
    var url = "https://wa.me/99999999?text=" //ADICIONE SEU N°
    
    // estrutura do texto

+ "*Confirmação de Presença*" + "%0a" 
+ "%0a"
+ "*Nome*: " + name + "%0a" + "%0a"
+ "*Numero*: " + number + "%0a" + "%0a"

window.open(url, '_blank').focus();

}