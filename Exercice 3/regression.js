var dataset = [
    { x: 1, y: 5.2 }, { x: 2, y: 7.1 }, { x: 3, y: 9.3 }, { x: 4, y: 10.8 }, { x: 5, y: 13.1 },
    { x: 6, y: 14.9 }, { x: 7, y: 17.2 }, { x: 8, y: 19.1 }, { x: 9, y: 20.8 }, { x: 10, y: 23.2 },
    { x: 11, y: 25.1 }, { x: 12, y: 26.9 }, { x: 13, y: 29.3 }, { x: 14, y: 31.1 }, { x: 15, y: 32.8 },
    { x: 16, y: 35.2 }, { x: 17, y: 37.1 }, { x: 18, y: 38.9 }, { x: 19, y: 41.2 }, { x: 20, y: 43.1 }
];
function calculateRegressionLine(points) {
    var n = points.length;
    var sumX = points.reduce(function (total, point) { return total + point.x; }, 0);
    var sumY = points.reduce(function (total, point) { return total + point.y; }, 0);
    var sumXY = points.reduce(function (total, point) { return total + point.x * point.y; }, 0);
    var sumX2 = points.reduce(function (total, point) { return total + point.x * point.x; }, 0);
    var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;
    return { slope: slope, intercept: intercept };
}
var _a = calculateRegressionLine(dataset), slope = _a.slope, intercept = _a.intercept;
console.log("Regression line: y = ".concat(slope.toFixed(2), "x + ").concat(intercept.toFixed(2)));
var predictY = function (x) { return slope * x + intercept; };
console.log("Prediction for x = 15 \u2192 y = ".concat(predictY(15).toFixed(2)));
console.log("Prediction for x = 25 \u2192 y = ".concat(predictY(25).toFixed(2)));
