const colorArr = ["#725d47", "#5d4c3a", "#9c7f61", "#a99076"];

const background = document.querySelector("body");

const color = colorArr[Math.floor(Math.random() * colorArr.length)];

background.style = `background: ${color}`;
