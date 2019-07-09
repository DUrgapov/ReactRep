function pointsArrayCreate(xPoints, yPoints) {
    let points = [];
    for (let i = 0; i < xPoints.length; i++) {
        points.push({ x: xPoints[i], y: yPoints[i] });
    }
    return points;
}

function isVertAxis(points, addPoints) {
    let arr = points[0].x && points[0].y ? points.slice() : pointsArrayCreate(points, addPoints);
    if (arr.length == 1) {
        return true;
    }
    console.log(arr);
    let hash = {};
    let xCenter = findAxisAbs(findMinAndMax(arr));
    for (let i = 0; i < arr.length; i++) {
        let key = String(arr[i].x - xCenter) + '; ' + String(arr[i].y);
        console.log(key);
        hash[key] = arr[i];
    }
    console.log(hash);
    for (key in hash) {
        let newKey = String(xCenter - hash[key].x) + '; ' + String(hash[key].y);
        if (!hash.hasOwnProperty(newKey)) {
            return false;
        }
    }
    return true;
}

function findMinAndMax(points) {
    let min = points[0].x;
    let max = points[0].x;
    for (let i = 0; i < points.length; i++) {
        if (points[i].x > max) {
            max = points[i].x;
        }
        if (points[i].x < min) {
            min = points[i].x;
        }
    }
    return { min, max };
}

function findAxisAbs(obj) {
    return (obj.min + obj.max) / 2;
}

console.log(isVertAxis([{ x: -2, y: 1 }, { x: 1, y: 1 }]));
