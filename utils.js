function calculateTheta(x1, y1, x2, y2) {
    let delX = x2 - x1;
    let delY = y2 - y1;
    let theta = Math.atan2(delY, delX);
    return theta;
}

function rectIntersectCircle(rect, circle) {
    let hw = rect.width / 2;
    let hh = rect.height / 2;
    let distX = Math.abs(circle.x - (rect.x + rect.width / 2));
    let distY = Math.abs(circle.y - (rect.y + rect.height / 2));

    if (distX > hw + circle.r || distY > hh + circle.r) {
        return false;
    }

    if (distX <= hw || distY <= hh) {
        return true;
    }

    let x = distX - hw;
    let y = distY - hh;
    return x * x + y * y <= circle.r * circle.r;
}

function lineIntersectCircle(line, circle) {
    let deltaX = line.b.x - line.a.x;
    let deltaY = line.b.y - line.a.y;
  
    let mag = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
    let unitX = deltaX / mag;
    let unitY = deltaY / mag;
  
    let d = (circle.x - line.a.x) * unitY - (circle.y - line.a.y) * unitX;
  
    if (d < -circle.r || d > circle.r) { return false; }
  
    let x1CXDelta = line.a.x - circle.x;
    let y1CYDelta = line.a.y - circle.y;
  
    let x2CXDelta = line.b.x - circle.x;
    let y2CYDelta = line.b.y - circle.y;
  
    let pointOneWithinCircle = x1CXDelta * x1CXDelta + y1CYDelta * y1CYDelta < circle.r * circle.r;
    if (pointOneWithinCircle) { return true; }
  
    let pointTwoWithinCircle = x2CXDelta * x2CXDelta + y2CYDelta * y2CYDelta < circle.r * circle.r;
    if (pointTwoWithinCircle) { return true; }
  
    let foo = unitX * line.a.x + unitY * line.a.y;
    let bar = unitX * circle.x + unitY * circle.y;
    let baz = unitX * line.b.x + unitY * line.b.y;
  
    return (foo < bar && bar < baz) || (baz < bar && bar < foo); 
  }