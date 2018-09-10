"use strict";
function defaultExported() {
    console.log("Default Exported from SourceWithDefaultExport");
}
function unused() {
    console.log('asdf');
}
module.exports = {
    unused: unused,
    "default": defaultExported
};
