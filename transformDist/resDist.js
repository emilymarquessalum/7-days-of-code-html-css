

const compress_images = require("compress-images");
const path = require("path");

exports.updateRes = function updateRes() {


    
    compress_images('./res/imgs/*.png', './dist/res/imgs/',
    {},
    false, 

    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50 --strip", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    }
    , (error, completed, total, t) => {
      if (error) {
        console.log(error);
      }
      console.log(`${completed} , ${total} , ${t}`);

    });
}
