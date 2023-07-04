let polygon = [
    { longitude: -3.52, latitude: 2.19 },
    { longitude: -3.62, latitude: 4.47 },
    { longitude: 0.78, latitude: 0.57 },
    { longitude: 1.12, latitude: 4.35 }
  ]
  

function calculateArea(){
    let area = 0
    for (let i = 0; i < polygon.length; i++) {
        const e1 = polygon[i];
        const e2 = (i + 1) < polygon.length ? polygon[i+1] : polygon[0];

        area = area + ((e1.longitude * e2.latitude) - (e2.longitude * e1.latitude))
    }
    area = area / 2


    
    area = area < 0 ? area * -1 : area
    return area
}

let area = calculateArea()

// if (area < 0){
    polygon = polygon.reverse();
    area = calculateArea()
// }
    
console.log(polygon)
console.log("area: ", area)


// (-2.82,-1.79)
// (-3.26,-0.47)
// (-5.14,-1.43)
// (-5.98,0)
// (-5.58,1.85)
// (-2.4,2.77)
// (0.12,3.85)
// (3.82,2.61)
// (5.84,-1.03)
// (5.28,-1.91)
// (2.68,-0.43)
// (2.54,1.49)
// (1.46,1.97)
// (1,1)
// (2.18,-0.89)
// (2.54,-2.09)
// (3.76,-2.59)
// (5.06,-2.59)
// (5.54,-2.83)
// (6.34,-2.53)
// (6.74,-3.43)
// (5.82,-3.91)
// (4.84,-4.27)
// (2.74,-4.21)
// (2.74,-3.45)
// (1.34,-3.45)
// (-0.16,-4.15)
// (-0.12,-2.81)
// (0.54,-2.37)
// (0.1,-1.49)
// (-1,-2)
// (-2.36,-3.15)
// (-2.66,-2.67)