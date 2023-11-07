

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

Grid.prototype.assignNumbers = function() {
  for (let i = 0; i < this.rows; i++) {
    for (let x = 0; x < this.columns; x++) {
      this.array[i][x] = Math.floor(Math.random() * 9) + 1;
    }
  }
}

Grid.prototype.duplicateChecker = function() {
  let set = new Set(grid.array[0]);
  return set.size !== grid.array[0];
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
