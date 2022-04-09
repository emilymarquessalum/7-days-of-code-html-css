

/* Esse arquivo faz parte do desafio que eu decidi adicionar para a semana, 
    onde teria uma versão dist dos arquivos, minificada.  */
 


const updateHtml = require("./transformDist/htmlDist.js").updateHtml;
const updateCss = require("./transformDist/cssDist.js").updateCss;
const updateRes = require("./transformDist/resDist.js").updateRes;


updateHtml();
updateCss();
updateRes();
  
 
 
 