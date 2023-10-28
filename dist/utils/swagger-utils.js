"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnumDescription = void 0;
function createEnumDescription(enum_obj) {
    let desc = "";
    Object.keys(enum_obj).forEach(k => {
        desc += "<p>" + k + " = " + enum_obj[k] + "</p>";
    });
    return desc;
}
exports.createEnumDescription = createEnumDescription;
