let map = [];
let size = 10;
let mapY = [];
let used = [];
let usedY = [];
for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        mapY[j] = Number(Math.random().toFixed());
        map[i] = mapY[j];
        usedY[j] = Boolean(Number(Math.random().toFixed()));
        used[i] = usedY[j];
    }
}

function findExit(map, x, y, used, size) {
    if (x < 0 || x >= size || y < 0 || y >= size) {
        return true;
    }
    if (map[x][y] == 1 || used[x][y]) {
        return false;
    }
    used[x][y] = true;
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];
    let res = false;
    for (let i = 0; i < 4; i++) {
        res = findExit(map, x + dx[i], y + dy[i], used, size);
    }
    return res;
}
let x = 4;
let y = 6;
console.log(map);
console.log(findExit(map, x, y, used, size));
