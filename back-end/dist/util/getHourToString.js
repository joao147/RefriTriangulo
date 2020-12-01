"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHourToString(date) {
    var dateToString;
    if (date.getMinutes() > 9) {
        dateToString = date.getHours() + ":" + date.getMinutes();
    }
    else {
        dateToString = date.getHours() + ":0" + date.getMinutes();
    }
    return (dateToString);
}
exports.default = getHourToString;
