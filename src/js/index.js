import {getJSON} from './utils/getJSON';
import {makeBarChart} from './makeBarChart'

const url = 'http://localhost:3000';

getJSON(url, res => makeBarChart(JSON.parse(res)));

setInterval(() => getJSON(url, res => makeBarChart(JSON.parse(res))), 1000);
