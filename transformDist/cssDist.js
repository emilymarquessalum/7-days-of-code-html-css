
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');

exports.updateCss = async function updateCss() {
    console.log("updateCss chamado");
    let condensedCss = "";

    await walk("./styles/", async function(err, files) {

        if(err) {
            console.log("Erro ao ler os arquivos, ", err);
            throw err;
        }

        for(file of files) {
            let fileContent = fs.readFileSync(file, 'utf8');
            console.log("fileContent", file);
            condensedCss += await minifyCSS(fileContent);
        } 
    });

    console.log("updateCss finalizado");

    fs.writeFileSync('./dist/styles.css', condensedCss);
}



async function minifyCSS(css) {

    return await postcss([cssnano, autoprefixer])
    .process(css);
    
}

/* Função que caminha pelo caminho pegando todos os arquivos de todos os diretórios, 
peguei de stackoverflow
https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
*/
async function walk(dir, done) {
    //log("walk", styles.called, {dir: dir});
    var results = [];
    let list = fs.readdirSync(dir)
  
  
    var i = 0;
    await (async function next() {
      var file = list[i++];
      if (!file) return await done(null, results);
      file = path.resolve(dir, file);
      let stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        await walk(file, async function (_err, res) {
          results = results.concat(res);
          await next();
        });
      } else {
        results.push(file);
        await next();
      }
  
    })();
  
  };