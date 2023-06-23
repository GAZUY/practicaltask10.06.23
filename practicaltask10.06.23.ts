/*
Задание
Создать объект, описывающий прямоугольник (хранит коор-
динаты левой верхней и правой нижней точек), и написать следу-
ющие функции для работы с таким объектом.
*/

// 1. Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).
/*
===================================================================================================================
type Coordinates = {
    x1: number
    y1: number 
    x2: number
    y2: number
}
const coordinates = {
    x1: 9,
    y1: 3, 
    x2: 4,
    y2: 10,
}
document.write (`<p>Координаты первой точки прямоугольника: X1 = ${ coordinates.x1} Y1 = ${ coordinates.y1}</p>`)
document.write (`<p>Координаты второй точки прямоугольника: X2 = ${ coordinates.x2} Y2 = ${ coordinates.y2} </p>`)
=====================================================================================================================
*/
const coordinates = {
    x1: 9,
    y1: 3, 
    x2: 4,
    y2: 10,
}
function printCoordinates (rentagle){
document.write (`<p>Координаты первой точки прямоугольника: X1 = ${ rentagle.x1} Y1 = ${ rentagle.y1}</p>`)
document.write (`<p>Координаты второй точки прямоугольника: X2 = ${ rentagle.x2} Y2 = ${ rentagle.y2} </p>`)
}
printCoordinates (coordinates)




// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.

/*
==========================================================================================================================
function countingTheWidthOfTheRectangle (x1, y1, x2, y2,) {
    let b 
   if ( coordinates.x1 < coordinates.x2 ) {
    b = coordinates.x2 - coordinates.x1
    return b
   } else if (coordinates.x1 > coordinates.x2) {
    b = coordinates.x1 - coordinates.x2
    return b
   }
}

document.write (`<p> Ширина прямоугольника составит: ${countingTheWidthOfTheRectangle (coordinates.x1, coordinates.y1, coordinates.x2, coordinates.y2, )} `)
==========================================================================================================================
*/
function countingTheWidthOfTheRectangle (rentagle) {
    let b 
   if ( rentagle.x1 < rentagle.x2 ) {
    b = rentagle.x2 - rentagle.x1
    return b
   } else if (rentagle.x1 > rentagle.x2) {
    b = rentagle.x1 - rentagle.x2
    return b
   }
}
document.write (`<p> Ширина прямоугольника составит: ${countingTheWidthOfTheRectangle (coordinates)} `)




// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.
/*
==========================================================================================================

function countingTheHeightOfTheRectangle (x1, y1, x2, y2,){
    let h 
    if ( coordinates.y1 < coordinates.y2 ) {
     h = coordinates.y2 - coordinates.y1
     return h
    } else if (coordinates.y1 > coordinates.y2) {
     h = coordinates.y1 - coordinates.y2
     return h
    }
 }
 
 document.write (`<p> Высота прямоугольника составит: ${countingTheHeightOfTheRectangle (coordinates.x1, coordinates.y1, coordinates.x2, coordinates.y2,)} `)
=============================================================================================================
*/

function countingTheHeightOfTheRectangle (rentagle) {
    let h 
   if ( rentagle.y1 < rentagle.y2 ) {
    h = rentagle.y2 - rentagle.y1
    return h
   } else if (rentagle.y1 > rentagle.y2) {
    h = rentagle.y1 - rentagle.y2
    return h
   }
}
document.write (`<p> Высота прямоугольника составит: ${countingTheHeightOfTheRectangle (coordinates)} `)


//  4. Функция принимает объект-прямоугольник и возвращает
//  его площадь.
/*
===========================================================================================================
function countingTheAreaOfTheRectangle (x1, y1, x2, y2,) {
    let b 
    let h
    if ( coordinates.x1 < coordinates.x2 ) {
        b = coordinates.x2 - coordinates.x1
    } else if (coordinates.x1 > coordinates.x2) {
        b = coordinates.x1 - coordinates.x2
    } 
    if ( coordinates.y1 < coordinates.y2 ) {
        h = coordinates.y2 - coordinates.y1
    } else if (coordinates.y1 > coordinates.y2) {
        h = coordinates.y1 - coordinates.y2
    } 
    return  h * b 
}
document.write (`<p> Площадь прямоугольника составит: ${countingTheAreaOfTheRectangle (coordinates.x1, coordinates.y1, coordinates.x2, coordinates.y2,)} `)
=================================================================================================================
*/
function countingTheAreaOfTheRectangle (rentagle) {
    return countingTheHeightOfTheRectangle (coordinates) * countingTheWidthOfTheRectangle (coordinates)
}
document.write (`<p> Площадь прямоугольника составит: ${countingTheAreaOfTheRectangle (coordinates)} `)

// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.
/*
==================================================================================================================
function rectanglePerimeter (x1, y1, x2, y2,) {
    let b 
    let h
    if ( coordinates.x1 < coordinates.x2 ) {
        b = coordinates.x2 - coordinates.x1
    } else if (coordinates.x1 > coordinates.x2) {
        b = coordinates.x1 - coordinates.x2
    } 
    if ( coordinates.y1 < coordinates.y2 ) {
        h = coordinates.y2 - coordinates.y1
    } else if (coordinates.y1 > coordinates.y2) {
        h = coordinates.y1 - coordinates.y2
    } 
    return  (h + b) * 2 
}
document.write (`<p> Периметр прямоугольника составит: ${rectanglePerimeter (coordinates.x1, coordinates.y1, coordinates.x2, coordinates.y2,)} `)
=====================================================================================================================
*/
function rectanglePerimeter (rentagle) {
    return countingTheHeightOfTheRectangle (coordinates) * 2 + countingTheWidthOfTheRectangle (coordinates) * 2
}
document.write (`<p> Периметр прямоугольника составит: ${rectanglePerimeter (coordinates)} `)

// 6. Функция изменения ширины прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// ширину.
/*
===============================================================================================================
let width_changes = 4
document.write (`<p> Величина изменения ширины прямоугольника составит: ${width_changes} `)

function changingTheWidthOfTheRectangle (renctagle, l,) {
    let b 
   if ( renctagle.x1 < renctagle.x2 ) {
    b = renctagle.x2 - renctagle.x1
   } else if (renctagle.x1 > renctagle.x2) {
    b = renctagle.x1 - renctagle.x2
   } 
   return l + b
}

document.write (`<p> Изменённая ширина прямоугольника составит: ${changingTheWidthOfTheRectangle ( coordinates, width_changes,)} `)
===============================================================================================================
*/
let width_changes = 4
document.write (`<p> Величина изменения ширины прямоугольника составит: ${width_changes} `)
function changingTheWidthOfTheRectangle (renctagle, l,) {
   return countingTheWidthOfTheRectangle (coordinates) + l
}

document.write (`<p> Изменённая ширина прямоугольника составит: ${changingTheWidthOfTheRectangle ( coordinates, width_changes,)} `)

// 7. Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
/*
=============================================================================================================
let height_changes = -3
document.write (`<p> Величина изменения высоты прямоугольника составит: ${height_changes} `)

function changingTheHeightOfTheRectangle (renctagle, l,) {
    let h 
    if ( renctagle.y1 < renctagle.y2 ) {
     h = renctagle.y2 - renctagle.y1
    } else if (renctagle.y1 > renctagle.y2) {
     h = renctagle.y1 - renctagle.y2
    }
   return l + h
}

document.write (`<p> Изменённая высота прямоугольника составит: ${changingTheHeightOfTheRectangle ( coordinates, height_changes,)} `)
=====================================================================================================================
*/

let height_changes = -3
document.write (`<p> Величина изменения высоты прямоугольника составит: ${height_changes} `)

function changingTheHeightOfTheRectangle (renctagle, k,) {
    return countingTheHeightOfTheRectangle (coordinates) + k
}

document.write (`<p> Изменённая высота прямоугольника составит: ${changingTheHeightOfTheRectangle ( coordinates, height_changes,)} `)
// 8. Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
/*
===================================================================================================
function changingTheWidthHeightOfTheRectangle (renctagle, l, k,) {
    let b 
    if ( renctagle.x1 < renctagle.x2 ) {
     b = renctagle.x2 - renctagle.x1
    } else if (renctagle.x1 > renctagle.x2) {
     b = renctagle.x1 - renctagle.x2
    } 
    let h 
    if ( renctagle.y1 < renctagle.y2 ) {
     h = renctagle.y2 - renctagle.y1
    } else if (renctagle.y1 > renctagle.y2) {
     h = renctagle.y1 - renctagle.y2
    }
   return `<p>Изменённая ширина прямоугольника: ${b + l} </p><p>Изменённая высота прямоугольника: ${h + k} </p>`
}
document.write(changingTheWidthHeightOfTheRectangle(coordinates, width_changes, height_changes,))
=======================================================================================================
*/
function changingTheWidthHeightOfTheRectangle (renctagle, l, k,) {
   
   return `<p>Изменённая ширина прямоугольника: ${countingTheWidthOfTheRectangle (coordinates) + l} </p><p>Изменённая высота прямоугольника: ${countingTheHeightOfTheRectangle (coordinates) + k} </p>`
}
document.write(changingTheWidthHeightOfTheRectangle(coordinates, width_changes, height_changes,))

// 9. Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.

let  coordinate_offset_X = 8
document.write (`<p> Величина изменения координат X прямоугольника: ${coordinate_offset_X} `)
let coordinates1 = {}

function changingTheCoordinatesX (renctagle, x,) {
    coordinates1 = { 
       x1: renctagle.x1 + x,
       y1: renctagle.y1,
       x2: renctagle.x2 + x,
       y2: renctagle.y2,
    }
    return coordinates1 

}
console.log (coordinates1)
document.write (`<p> ${changingTheCoordinatesX (coordinates, coordinate_offset_X,)}</p>`)









