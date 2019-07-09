import 'fabric.min';
let canvas = new fabric.Canvas('canvas', {
    isDrawingMode: false,
});
let vx = [];
let vy = [];
let balls = [{}];
let partNum = 10;
for (let i = 0; i < partNum; i++) {
    vx[i] = Math.floor(Math.random() * 9 + 1);
    vy[i] = -Math.floor(Math.random() * 9 + 1);
    balls[i] = new fabric.Circle = ({
        id: 'ball' + String(i),
        selectable: false,
        radius: 10,
        fill: 'red',
        top: Math.floor(Math.random()*350+50),
        left: Math.floor(Math.random()*550+50),
    })
    canvas.add(balls[i]);
}
/*
let ball1 = new fabric.Circle({
    id: 'ball1',
    selectable: false,
    radius: 40,
    fill: 'red',
    top: 100,
    left: 250,
});
let ball2 = new fabric.Circle({
    id: 'ball2',
    selectable: false,
    radius: 20,
    fill: 'blue',
    top: 100,
    left: 50,
});
canvas.add(ball1);
canvas.add(ball2);
canvas.renderAll();
*/
canvas.renderAll();
/*
canvas.on('mouse:down', function(options) {
    setInterval(function() {
        let b1center = { x: ball1.left + ball1.radius, y: ball1.top + ball1.radius };
        let b2center = { x: ball2.left + ball2.radius, y: ball2.top + ball2.radius };
        let dist =
            (b1center.y - b2center.y) * (b1center.y - b2center.y) +
            (b1center.x - b2center.x) * (b1center.x - b2center.x);

        let r = (ball1.radius + ball2.radius) * (ball1.radius + ball2.radius);
        console.log('dist = ' + dist);
        console.log('r = ' + r);
        if (Math.abs(dist) <= r) {
            v1.y = -v1.y;
            v1.x = -v1.x;
            v2.x = -v2.x;
            v2.y = -v2.y;
        }
        if (ball1.top >= 400 - 2 * ball1.radius) {
            v1.y = -v1.y;
        }
        if (ball1.top <= 0) {
            v1.y = -v1.y;
        }
        if (ball1.left >= 600 - 2 * ball1.radius) {
            v1.x = -v1.x;
        }
        if (ball1.left <= 0) {
            v1.x = -v1.x;
        }
        if (ball2.top >= 400 - 2 * ball2.radius) {
            v2.y = -v2.y;
        }
        if (ball2.top <= 0) {
            v2.y = -v2.y;
        }
        if (ball2.left >= 600 - 2 * ball2.radius) {
            v2.x = -v2.x;
        }
        if (ball2.left <= 0) {
            v2.x = -v2.x;
        }
        ball1.set('top', ball1.top + v1.y);
        ball1.set('left', ball1.left + v1.x);
        ball2.set('top', ball2.top + v2.y);
        ball2.set('left', ball2.left + v2.x);
        canvas.renderAll();
    }, 10);
});
*/