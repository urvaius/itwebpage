/* eslint-env browser */
import _ from 'lodash';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome/css/all.css';
import { $, jQuery } from 'jquery';
import Icon from '../image/images.jpg';
import runCode from './code';

window.$ = $;
window.jQuery = jQuery;


const body = document.getElementsByTagName('body')[0];
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack '], ' ');
  element.classList.add('hello');
  btn.className = ('btn btn-primary');
  btn.innerHTML = 'click me an check the console';
  btn.onclick = runCode;
  // element.innerHTML = 'will be jumbotron';
  // add an image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}
body.appendChild(component());
// testing jquery does work here
$(document).ready(() => {
  alert('DOM Loaded');
  $('#myContent').html('Hey Jquery added this');
});
// document.body.appendChild(component());
