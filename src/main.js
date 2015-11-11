require("!style!css!sass!../src/styles/main.scss");

import { my_module } from './js/my_module';

var mod = my_module();

var body = document.querySelector('body');
body.innerHTML += `<h4>Modules loaded: ${mod}</h4>`;