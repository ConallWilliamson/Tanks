function calculateTheta(x1,y1,x2,y2){
    let delX = x2 - x1;
    let delY = y2- y1;
    let theta = Math.atan2(delY,delX);
    return theta;
}

function rectIntersectCircle(rect, circle) {
    let hw = rect.width / 2;
    let hh = rect.height / 2;
    let distX = Math.abs(circle.x - (rect.x + rect.width / 2));
    let distY = Math.abs(circle.y - (rect.y + rect.height / 2));

    if (distX > hw + circle.r || distY > hh + circle.r)
    {
        return false;
    }

    if (distX <= hw || distY <= hh)
    {
        return true;
    }

    let x = distX - hw;
    let y = distY - hh;
    return x * x + y * y <= circle.r * circle.r;
  }