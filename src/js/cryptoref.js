//UI Logic
window.addEventListener("load", function() {
  document.querySelector("form#input-form").addEventListener("submit", inputFunction);
})

function inputFunction(event) {
  event.preventDefault();
  const initialString = document.getElementById("input-text").value;
  const lowerString = initialString.toLowerCase();
  const cleanString = lowerString.replace(/[^a-z]/gi, '');
  const rowColObj = rowColFinder(cleanString);
  const rows = rowColObj.rows;
  const columns = rowColObj.columns;
  const cryptoArray = squareBuilder(rows, columns, cleanString);
  const outputString = squareReader(cryptoArray, rows, columns);
  const finalString = addSpaces(outputString);
  outputFunction(finalString);
}

function outputFunction(finalString) {
  pEle = document.createElement("p");
  outputDiv = document.getElementById("output-div");
  pEle.append(finalString);
  document.querySelector("div#output-div").innerHTML = "";
  outputDiv.append(pEle);
}

//Business Logic
function rowColFinder(cleanString) {
  const length = cleanString.length;
  if (length === 0) {
    return "Please enter some text";
  }
  const columns = Math.ceil(Math.sqrt(length));
  console.log(columns);
  const rows = Math.ceil(length / columns);
  console.log(rows);
  return {
    rows: rows,
    columns: columns
  };
}

function squareBuilder(rows, columns, cleanString) {
  let cryptoArray = [];
  for (let i = 0; i < rows; i++) {
    let innerArray = [];
    for (let j = 0; j < columns; j++) {
      innerArray.push(cleanString[(i * columns) + j]);
    }
    cryptoArray.push(innerArray);
  }
  return cryptoArray;
}

function squareReader(cryptoArray, rows, columns) {
  let outputString = "";
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
      outputString += cryptoArray[i][j];
    }
  }
  return outputString;
}

function addSpaces(outputString) {
  let noUndefinedStr = outputString.replace(/undefined/g, "");
  let splitArray = [];
  for (let i = 0; i < noUndefinedStr.length; i += 5) {
    let chunk = noUndefinedStr.slice(i, i + 5);
    splitArray.push(chunk);
  }
  let finalString = splitArray.join(" ");
  return finalString;
}

