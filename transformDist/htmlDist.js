

const fs = require('fs'); 
var minify = require('html-minifier').minify; 

exports.updateHtml = function updateHtml() {
    console.log("updateHtml chamado");
    let htmlToSave = fs.readFileSync('./index.html', 'utf8');

    htmlToSave = replaceCssImports(htmlToSave);

    let minifiedHtml = minifyHTML(htmlToSave);
    fs.writeFileSync('./dist/index.html', minifiedHtml);
    console.log("updateHtml finalizado");
}

function replaceCssImports(htmlToSave) {


    let cssRegex = /<!--CSS-->[\s\w<!->]*?<!--CSS-->/;

    return htmlToSave.replace(cssRegex, "<link rel='stylesheet' href='./styles.css'>");
}



function minifyHTML(htmlToSave) {

    return minify(htmlToSave, {
        collapseWhitespace: true, // Removes all white space characters
        removeComments: true, // Removes all comments
        removeRedundantAttributes: true, // Removes all unnecessary attributes
        removeAttributeQuotes: true, // Removes unnecessary quotes
        removeTagWhitespace: true, // Removes all whitespace between tags
        trimCustomFragments: true, // Trims custom fragments
        useShortDoctype: true, // Uses short doctype
    });
}
