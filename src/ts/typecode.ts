// import _ from 'lodash';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import * as $ from 'jquery';
// import Icon from '../image/images.jpg';
// import * as codeblock from './code';


if (process.env.NODE_ENV !== 'production') {
  console.log('We Are in Development mode!!');
}

function changeColor(color: string) {
  
  document.getElementById('purps').style.color = color;
  document.getElementById('purps').textContent = "I am now Red";
  // testing jquery does work here
}
console.log('this is typescript file yay');
function testLog(){
  console.log('check typescriptfunction')
}

$( "#btn1" ).click(function() {
  changeColor('red');
});

export {changeColor, testLog};