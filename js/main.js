var getUserName = prompt("Week 8");

console.log(getUserName);

document.getElementById("username").innerText = getUserName;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })