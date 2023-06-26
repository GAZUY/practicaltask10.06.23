document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442, \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A (\u0445\u0440\u0430\u043D\u0438\u0442 \u043A\u043E\u043E\u0440-\n    \u0434\u0438\u043D\u0430\u0442\u044B \u043B\u0435\u0432\u043E\u0439 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0438 \u043F\u0440\u0430\u0432\u043E\u0439 \u043D\u0438\u0436\u043D\u0435\u0439 \u0442\u043E\u0447\u0435\u043A), \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443-\n    \u044E\u0449\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C.</p>");
var coordinates = {
    x1: 9,
    y1: 3,
    x2: 4,
    y2: 10
};
document.write("<p>\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u043F\u0435\u0440\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: X1 = " + coordinates.x1 + " Y1 = " + coordinates.y1 + "</p>");
document.write("<p>\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0432\u0442\u043E\u0440\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: X2 = " + coordinates.x2 + " Y2 = " + coordinates.y2 + " </p>");
document.write("<hr>");
document.write("<p>1. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\n\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043D\u0435\u043C (\u0433\u0434\u0435 \u043A\u0430\u043A\u0430\u044F \u0442\u043E\u0447\u043A\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0430).</p>");
function printCoordinates(rentagle) {
    document.write("<p>\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u043F\u0435\u0440\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: X1 = " + rentagle.x1 + " Y1 = " + rentagle.y1 + "</p>");
    document.write("<p>\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0432\u0442\u043E\u0440\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: X2 = " + rentagle.x2 + " Y2 = " + rentagle.y2 + " </p>");
}
printCoordinates(coordinates);
document.write("<hr>");
document.write("<p>2. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\n\u0435\u0433\u043E \u0448\u0438\u0440\u0438\u043D\u0443.</p>");
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
function countingTheWidthOfTheRectangle(rentagle) {
    var b;
    if (rentagle.x1 < rentagle.x2) {
        b = rentagle.x2 - rentagle.x1;
        return b;
    }
    else if (rentagle.x1 > rentagle.x2) {
        b = rentagle.x1 - rentagle.x2;
        return b;
    }
}
document.write("<p> \u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + countingTheWidthOfTheRectangle(coordinates) + " ");
document.write("<hr>");
document.write("<p>3. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\n\u0435\u0433\u043E \u0432\u044B\u0441\u043E\u0442\u0443.</p>");
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
function countingTheHeightOfTheRectangle(rentagle) {
    var h;
    if (rentagle.y1 < rentagle.y2) {
        h = rentagle.y2 - rentagle.y1;
        return h;
    }
    else if (rentagle.y1 > rentagle.y2) {
        h = rentagle.y1 - rentagle.y2;
        return h;
    }
}
document.write("<p> \u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + countingTheHeightOfTheRectangle(coordinates) + " ");
document.write("<hr>");
document.write("<p> 4. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\n\u0435\u0433\u043E \u043F\u043B\u043E\u0449\u0430\u0434\u044C.</p>");
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
function countingTheAreaOfTheRectangle(rentagle) {
    return countingTheHeightOfTheRectangle(coordinates) * countingTheWidthOfTheRectangle(coordinates);
}
document.write("<p> \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + countingTheAreaOfTheRectangle(coordinates) + " ");
document.write("<hr>");
document.write("<p>5. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\n\u0435\u0433\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440.</p>");
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
function rectanglePerimeter(rentagle) {
    return countingTheHeightOfTheRectangle(coordinates) * 2 + countingTheWidthOfTheRectangle(coordinates) * 2;
}
document.write("<p> \u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + rectanglePerimeter(coordinates) + " ");
document.write("<hr>");
document.write("<p>6. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0448\u0438\u0440\u0438\u043D\u044B \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430. \u041E\u043D\u0430 \u043F\u0440\u0438\u043D\u0438-\n\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0434\u0438\u043D\u0438\u0446 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\n\u0448\u0438\u0440\u0438\u043D\u0443.</p>");
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
var width_changes = 4;
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0448\u0438\u0440\u0438\u043D\u044B \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + width_changes + " ");
function changingTheWidthOfTheRectangle(renctagle, l) {
    return countingTheWidthOfTheRectangle(coordinates) + l;
}
document.write("<p> \u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + changingTheWidthOfTheRectangle(coordinates, width_changes) + " ");
document.write("<hr>");
document.write("<p>7. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u043E\u0442\u044B \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430. \u041E\u043D\u0430 \u043F\u0440\u0438\u043D\u0438-\n\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0434\u0438\u043D\u0438\u0446 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\n\u0432\u044B\u0441\u043E\u0442\u0443.</p>");
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
var height_changes = -3;
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u043E\u0442\u044B \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + height_changes + " ");
function changingTheHeightOfTheRectangle(renctagle, k) {
    return countingTheHeightOfTheRectangle(coordinates) + k;
}
document.write("<p> \u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442: " + changingTheHeightOfTheRectangle(coordinates, height_changes) + " ");
document.write("<hr>");
document.write("<p>8. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0432\u044B\u0441\u043E\u0442\u044B \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430.\n\u041E\u043D\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0434\u0432\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u2013\n\u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0432\u044B\u0441\u043E\u0442\u044B.</p>");
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
function changingTheWidthHeightOfTheRectangle(renctagle, l, k) {
    return "<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + (countingTheWidthOfTheRectangle(coordinates) + l) + " </p><p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u0430\u044F \u0432\u044B\u0441\u043E\u0442\u0430 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + (countingTheHeightOfTheRectangle(coordinates) + k) + " </p>";
}
document.write(changingTheWidthHeightOfTheRectangle(coordinates, width_changes, height_changes));
document.write("<hr>");
document.write("<p>9. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u043F\u043E \u043E\u0441\u0438 X. \u041E\u043D\u0430 \u043F\u0440\u0438-\n\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0434\u0438\u043D\u0438\u0446 \u0435\u0433\u043E\n\u0441\u0434\u0432\u0438\u043D\u0443\u0442\u044C.</p>");
var coordinate_offset_X = 8;
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 X \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + coordinate_offset_X + " ");
var coordinates1 = {};
function changingTheCoordinatesX(renctagle, x) {
    coordinates1 = {
        x1: renctagle.x1 + x,
        y1: renctagle.y1,
        x2: renctagle.x2 + x,
        y2: renctagle.y2
    };
    return JSON.stringify(coordinates1);
}
document.write("<p> " + changingTheCoordinatesX(coordinates, coordinate_offset_X) + "</p>");
document.write("<hr>");
document.write("<p>10 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u043F\u043E \u043E\u0441\u0438 Y. \u041E\u043D\u0430 \u043F\u0440\u0438-\n\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0434\u0438\u043D\u0438\u0446 \u0435\u0433\u043E\n\u0441\u0434\u0432\u0438\u043D\u0443\u0442\u044C.</p>");
var coordinate_offset_Y = 3;
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 Y \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + coordinate_offset_Y + " ");
var coordinates2 = {};
function changingTheCoordinatesY(renctagle, y) {
    coordinates2 = {
        x1: renctagle.x1,
        y1: renctagle.y1 + y,
        x2: renctagle.x2,
        y2: renctagle.y2 + y
    };
    return JSON.stringify(coordinates2);
}
document.write("<p> " + changingTheCoordinatesY(coordinates, coordinate_offset_Y) + "</p>");
document.write("<hr>");
document.write("<p>11 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 \u0438 \u043F\u043E \u043E\u0441\u0438 X \u0438 \u043F\u043E\n\u043E\u0441\u0438 Y. \u041E\u043D\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438 \u0434\u0432\u0430 \u0437\u043D\u0430\u0447\u0435-\n\u043D\u0438\u044F: \u0441\u0434\u0432\u0438\u0433 \u043F\u043E \u043E\u0441\u0438 X \u0438 \u0441\u0434\u0432\u0438\u0433 \u043F\u043E \u043E\u0441\u0438 Y.</p>");
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 X \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + coordinate_offset_X + " ");
document.write("<p> \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 Y \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430: " + coordinate_offset_Y + " ");
var coordinates3 = {};
function changingTheCoordinatesYX(renctagle, y, x) {
    coordinates3 = {
        x1: renctagle.x1 + x,
        y1: renctagle.y1 + y,
        x2: renctagle.x2 + x,
        y2: renctagle.y2 + y
    };
    return JSON.stringify(coordinates3);
}
document.write("<p> " + changingTheCoordinatesYX(coordinates, coordinate_offset_Y, coordinate_offset_X) + "</p>");
document.write("<hr>");
document.write("<p>12 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043B\u0438 \u0442\u043E\u0447\u043A\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u044F-\n\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430. \u041E\u043D\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442-\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0438\n\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u043E\u0447\u043A\u0438.</p>");
var pointCoordinates = {
    x1: 6,
    y1: 6
};
printCoordinates(coordinates);
document.write("\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u043E\u0447\u043A\u0438: " + JSON.stringify(pointCoordinates));
function checkingPointCoordinates(renctagle, coordinates) {
    if (renctagle.x1 >= coordinates.x1
        && renctagle.x2 <= coordinates.x1
        && renctagle.y1 <= coordinates.y1
        && renctagle.y2 >= coordinates.y1) {
        return "\u0422\u043E\u0447\u043A\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430";
    }
    else {
        return "\u0422\u043E\u0447\u043A\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u043D\u0435 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430";
    }
}
document.write("<p> " + checkingPointCoordinates(coordinates, pointCoordinates) + "</p>");
