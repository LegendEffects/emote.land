const sharp = require('sharp');
const gifsicle = require('gifsicle');
const fs = require('fs');
const { execFile } = require('child_process');

const folder = './static/emojis/large';
const output = './static/emojis';

function build() {
  const started = microSeconds();
  console.log('Building Images...');

  const files = fs.readdirSync(folder);
  for(const file of files) {
    if(file == 'resized') continue;

    if(file.match(/\.gif$/)) {
      execFile(gifsicle, ['--resize-fit-width', '32', '-o', `${output}/${file}`, `${folder}/${file}`]);
    } else if(file.match(/\.png$/)) {
      sharp(`${folder}/${file}`).resize({width: 32}).toFile(`${output}/${file}`).catch(e => {
        console.info(`Happened while parsing: ${file}`);
        console.error(e);
      });
    } else {
      console.info(`Who tried to something other than a .gif or .png???? Remove ${file}`);
    }
  }

  console.log(`Finished Building Images! Took: ${(microSeconds() - started) / 1000} ms.`);
}

function microSeconds() {
  var hrTime = process.hrtime()
  return hrTime[0] * 1000000 + hrTime[1] / 1000
}

build();
