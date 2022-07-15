function calculateTheta(x1,y1,x2,y2){
    let delX = x2 - x1;
    let delY = y2- y1;
    let theta = Math.atan2(delY,delX)
    return theta;
}