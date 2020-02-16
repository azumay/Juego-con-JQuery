$(document).ready(function(){

    var eleccioMaquina = 0;
    //$("#CaixaEmergent").hide();
    
    var derrotas = new Audio("sound/derrota.mp3");
   
    var ganar = new Audio("sound/encert.mp3");

    var empate = new Audio("sound/iguals.mp3");

   $("#CaixaEmergent").click(function () {
        $("#CaixaEmergent").hide();
        $("#CaixaEmergent h1").remove();
        $("#CaixaEmergent h3").remove();
  });
  

    $("#pedra").click(function(){

        eleccioMaquina = randomBetween(0, 2);
        
        

        if (eleccioMaquina == 0) {
            $("#CaixaEmergent").show();
            $("#CaixaEmergent").html("<h1>Empatat!</h1>" +  "<h3>Heu escollit el mateix.</h3>");
            empate.play();
        }else if (eleccioMaquina == 1){
             $("#CaixaEmergent").show();
             $("#CaixaEmergent").html("<h1>Has Perdut!</h1>" + "<h3>La maquina va escollir paper i tu pedra.</h3>");
             derrotas.play();
            }else if (eleccioMaquina == 2) {
                $("#CaixaEmergent").show();
           $("#CaixaEmergent").html("<h1>Has Guanyat!</h1>" + "<h3>La maquina va escollir tisora i tu pedra.</h3>");
           ganar.play();
        } 

    });

    $("#paper").click(function () {
        
        eleccioMaquina = randomBetween(0, 2);

        
        if (eleccioMaquina == 1) {
            $("#CaixaEmergent").show();
            $("#CaixaEmergent").html("<h1>Empatat!</h1>" +  "<h3>Heu escollit el mateix.</h3>");
            empate.play();
        }else if (eleccioMaquina == 0){
             $("#CaixaEmergent").show();
             $("#CaixaEmergent").html("<h1>Has Guanyat!</h1>" + "<h3>La maquina va escollir pedra i tu paper.</h3>");
             ganar.play();
            }else if (eleccioMaquina == 2) {
                $("#CaixaEmergent").show();
           $("#CaixaEmergent").html("<h1>Has Perdut!</h1>" + "<h3>La maquina va escollir tisora i tu paper.</h3>");
           derrotas.play();
        } 
    });

    $("#tisoras").click(function () {

        eleccioMaquina = randomBetween(0, 2);
       
                
                if (eleccioMaquina == 2) {
                    $("#CaixaEmergent").show();
                    $("#CaixaEmergent").html("<h1>Empatat!</h1>" +  "<h3>Heu escollit el mateix.</h3>");
                    empate.play();
                }else if (eleccioMaquina == 1){
                     $("#CaixaEmergent").show();
                     $("#CaixaEmergent").html("<h1>Has Guanyat!</h1>" + "<h3>La maquina va escollir paper i tu tisora.</h3>");
                     ganar.play();
                    }else if (eleccioMaquina == 0) {
                        $("#CaixaEmergent").show();
                   $("#CaixaEmergent").html("<h1>Has Perdut!</h1>" + "<h3>La maquina va escollir pedra i tu tisora.</h3>");
                   derrotas.play();
                } 
    });

});
