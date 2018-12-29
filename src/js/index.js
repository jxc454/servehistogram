import {getJSON} from './utils/getJSON';
import * as d3 from "d3";

const url = 'http://localhost:8080/data/udpHistogram.json';

console.log("hello from index.js.");

getJSON(url, res => {
   console.log("in callback");
   console.log(res);
});

console.log("after callback.");