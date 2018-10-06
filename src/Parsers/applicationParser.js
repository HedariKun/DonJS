"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applicationObject_1 = require("../Objects/applicationObject");
function applicationParser(obj) {
    let application = new applicationObject_1.Appllication();
    application.name = obj.name;
    application.webiste = obj.website;
    return application;
}
exports.default = applicationParser;
