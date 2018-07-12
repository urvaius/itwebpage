/* eslint-env browser */
import _ from 'lodash';
import '../css/style.css';
// import '../css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/font-awesome/css/all.css';
import 'font-awesome/css/font-awesome.min.css';
import jQuery from 'jquery';

import Icon from '../image/images.jpg';
import * as codeblock from './code';
// import runCode2 from './code';

if (process.env.NODE_ENV !== 'production') {
  console.log('We Are in Development mode!!');
}

// document.getElementById('btn1').onclick = codeblock.runCodetwo();
const body = document.getElementsByTagName('body')[0];
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack '], ' ');
  element.classList.add('hello');
  btn.className = ('btn btn-primary');
  btn.innerHTML = 'click me an check the console';
  btn.onclick = codeblock.runCode;
  // element.innerHTML = 'will be jumbotron';
  // add an image to our existing div
  const myIcon = new Image();
  const testtext = jQuery('#testme');
  myIcon.src = Icon;
  // document.getElementById('btn1').onclick = codeblock.runCodetwo;
  // yes this jquery works here instead of above code
  jQuery('#btn1').click(codeblock.runCodetwo);
  // buttontest.onclick = testtext.text('jquery did click this');
  testtext.text('this is jquery test so it works here');
  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}
body.appendChild(component());

// document.body.appendChild(component());
