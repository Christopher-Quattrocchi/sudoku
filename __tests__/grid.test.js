import Grid from "../src/js/Grid.js";

describe("Grid", () => {
  test("should register rows and columns", () => {
    const grid = new Grid(9, 9);
    expect(grid.rows).toEqual(9);
    expect(grid.columns).toEqual(9);
  })
});

describe("create2dArray", () => {
  test("should create a 9x9 grid", () => {
    const grid = new Grid(9, 9);
    grid.create2dArray();
    expect(grid.array.length).toEqual(9);

    grid.array.forEach(innerArray => {
      expect(innerArray.length).toEqual(9);
    });
  });
});

describe("assignNumbers", () => {
  test("should populate the grid with random 1-9 numbers", () => {
    const grid = new Grid(9, 9);
    grid.create2dArray();
    grid.assignNumbers();

    grid.array.forEach(row => {
      row.forEach(gridElement => {
        expect(gridElement).toBeGreaterThanOrEqual(1);
        expect(gridElement).toBeLessThanOrEqual(9);
      });
    });
  });
});

describe("duplicateChecker", () => {
  test("Should return true if there is a duplicate number", () => {
    const grid = new Grid(9, 9);
    grid.create2dArray();
    grid.assignNumbers();
    grid.duplicateChecker();
    let set = new Set(grid.array[0]);
    
    const duplicateDetected = grid.duplicateChecker(grid.array[0]);
    expect(duplicateDetected).toBe(true);
    
  });
  test("Should return false if no duplicate number", () => {
    const grid = new Grid(9, 9);
    grid.create2dArray();
    grid.assignNumbers();
    grid.duplicateChecker();
    let set = new Set(grid.array[0]);

    const duplicateDetected = grid.duplicateChecker(grid.array[0]);
    expect(duplicateDetected).toBe(false);
  })
});

