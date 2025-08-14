// Define a type for Cartesian coordinates
type Coordinate = { x: number; y: number };

const dataset: Coordinate[] = [
  { x: 1, y: 5.2 }, { x: 2, y: 7.1 }, { x: 3, y: 9.3 }, { x: 4, y: 10.8 }, { x: 5, y: 13.1 },
  { x: 6, y: 14.9 }, { x: 7, y: 17.2 }, { x: 8, y: 19.1 }, { x: 9, y: 20.8 }, { x: 10, y: 23.2 },
  { x: 11, y: 25.1 }, { x: 12, y: 26.9 }, { x: 13, y: 29.3 }, { x: 14, y: 31.1 }, { x: 15, y: 32.8 },
  { x: 16, y: 35.2 }, { x: 17, y: 37.1 }, { x: 18, y: 38.9 }, { x: 19, y: 41.2 }, { x: 20, y: 43.1 }
];

function calculateRegressionLine(points: Coordinate[]) {
  const n = points.length;
  const sumX = points.reduce((total, point) => total + point.x, 0);
  const sumY = points.reduce((total, point) => total + point.y, 0);
  const sumXY = points.reduce((total, point) => total + point.x * point.y, 0);
  const sumX2 = points.reduce((total, point) => total + point.x * point.x, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

const { slope, intercept } = calculateRegressionLine(dataset);

console.log(`Regression line: y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`);
