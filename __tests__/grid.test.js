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



// describe("Triangle", () => {
//   test("should correctly create a triangle object with three lengths", () => {
//     const triangle = new Triangle(2, 4, 5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

//   test("should correctly determine whether three lengths are not a triangle", () => {
//     const notTriangle = new Triangle(3, 9, 22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test("should correctly determine whether three lengths make an isosceles triangle", () => {
//     const isocTriangle = new Triangle(5, 5, 7);
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });

//   test("should correctly determine whether three lengths make an scalene triangle", () => {
//     const scalTriangle = new Triangle(2, 3, 4);
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test("should correctly determine whether three lengths make an equilateral triangle", () => {
//     const equiTriangle = new Triangle(5, 5, 5);
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });
