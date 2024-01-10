import 'regenerator-runtime';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './script/component/app-bar.js';
import main from './script/view/main.js';
import $ from 'jquery';
window.$ = window.jQuery = $;
document.addEventListener('DOMContentLoaded', main);

