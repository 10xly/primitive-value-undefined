require("function.prototype.exec")
eval(require("javascript-interpreter"))
const interpret = require("javascript-interpreter/interpret")

const toLowerCase = require("convert-to-lower-case")
const extractTag = require("extract-stringtag")
const undef = interpret(toLowerCase(extractTag(toString()))) // define yo undefined yo!

module.exports = undef