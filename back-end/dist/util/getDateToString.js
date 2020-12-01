"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDateToString(date) {
    var dateToString;
    dateToString = date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear();
    return (dateToString);
}
exports.default = getDateToString;
