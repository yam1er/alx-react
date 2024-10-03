import $ from 'jquery';
import _ from 'lodash';

const dashboardTitle = $('<p>Holberton Dashboard</p>');
const dashboardData = $('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>');
const counterParagraph = $('<p id="count"></p>');
const copyright = $('<p>Copyright - Holberton School</p>');

$('body').append(dashboardTitle, dashboardData, button, counterParagraph, copyright);

let count = 0;

const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

button.on('click', _.debounce(updateCounter, 300));
