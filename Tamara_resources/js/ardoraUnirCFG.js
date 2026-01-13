//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Inicio";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#808000"; colorText="#000000"; colorSele="#FFFF00";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muchas felicidades , sigue hacia delante"; messageTime="2"; messageError="Tu puedes lograrlo"; messageErrorG="Tu puedes lograrlo"; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGFtYXJh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=[];
var con1=["Inteligencia Artificial en la educación","Personalización del aprendizaje","Uso irresponsable de la IA","Rol del docente","Valores digitales","Uso responsable de la IA"];
var con2=["C. Conjunto de herramientas tecnológicas que pueden enriquecer el proceso de enseñanza-aprendizaje.","B. Permite que los estudiantes avancen a su propio ritmo y reciban retroalimentación inmediata","D. Incluye la dependencia tecnológica y la pérdida del pensamiento crítico.","E. Orienta y guía a los estudiantes para el uso ético y reflexivo de la IA.","F. Promueven el respeto a la privacidad, la honestidad académica y la veracidad de la información.",".A. Práctica que implica emplear la IA de forma ética, consciente y como apoyo al aprendizaje."];
var con3=["16.67","16.66","16.67","16.66","16.67","16.67"];
var sel1=""; join1=[]; join2=[];
