let latitude = 21.0061832;
let longtitude = 105.8431307;

export function postLa( lati){
    latitude = lati;
}

export function postLong(longti){
    latitude = longti;
}

export function getLa(){
    return latitude;
}

export function getLong(){
    return longtitude;
}