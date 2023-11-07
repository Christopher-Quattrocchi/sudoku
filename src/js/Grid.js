

export default function Grid(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.array = [];
}

Grid.prototype.create2dArray = function () {
  let array = new Array(this.rows);
  for (let i = 0; i < this.rows; i++) {
    array[i] = new Array(this.columns).fill(0);
  }
  this.array = array;
}

Grid.prototype.assignNumbers = function () {
  for (let i = 0; i < this.rows; i++) {
    for (let x = 0; x < this.columns; x++) {
      this.array[i][x] = Math.floor(Math.random() * 9) + 1;
    }
  }
}

Grid.prototype.rowChecker = function () {

  // return set.size !== grid.array[0].length;

  for (let i = 0; i < this.rows; i++) {
    let set = new Set(this.array[i]);

    if (set.size !== this.array[i].length) {
      return true;
    }
  }
  return false;
}

Grid.prototype.rowCheckerAll = function() {
  return this.array.every(row => this.rowChecker(row));
}

Grid.prototype.colChecker = function() {
  for (let colIndex = 0; colIndex < this.columns; colIndex++) {
    let columnSet = new Set();

    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      columnSet.add(this.array[rowIndex][colIndex]);
    }

    if (columnSet.size !== this.rows) {
      return true;
    }
  }
  return false;
}

let grid = new Grid(9, 9);
grid.create2dArray();
grid.assignNumbers();

// Grid.prototype.assignNumbers = function() {
//   for (let i = 0; i < this.rows; i++) {
//     for (let x = 0; x < this.columns; x++) {
//       this.array[i][x] = x + 1;//This will fill 1-9 for each row
//     }
//   }
// }
