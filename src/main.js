require("!style!css!sass!../src/styles/main.scss");

import { my_module } from './js/my_module';

let mod = my_module();

let body = document.querySelector('body');
body.innerHTML += `<h4>Modules loaded: ${mod}</h4>`;
