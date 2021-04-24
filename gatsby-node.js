const { createPages } = require('./lib/bootup/createPages')

/** @type { import("gatsby").GatsbyNode } */
const config = {}
exports.config = config

config.createPages = createPages

module.exports = config