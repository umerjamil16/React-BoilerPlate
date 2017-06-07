var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: "Umer"
};
var objTwo = {
  firstName: "Gio",
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
