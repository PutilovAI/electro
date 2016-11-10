'use strict';
let dist = './dist';
let src = './src';
const conf = {
  path : {
    js : {
      src : ['./src/blocks/**/*.js', './src/assets/js/*.js'],
      vendor: [
        './src/assets/libs/jquery/dist/jquery.min.js',
        './src/assets/libs/jquery.scrollbar/jquery.scrollbar.min.js',
  			'./src/assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        './src/assets/libs/owl.carousel/dist/owl.carousel.min.js',
        './src/assets/libs/jquery.maskedinput/src/jquery.maskedinput.js'
      ],
      dest: "./dist/assets/js"
    },
    dist: dist,
    src: src
  },
  name: {
    zip: 'uraltabak.zip'
  }
}

module.exports = conf;
