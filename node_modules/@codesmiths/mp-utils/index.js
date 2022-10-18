const pageHelpers = require('./page-helpers');
const mpSizing = require('./sizing');
const mpDom = require('./dom');

module.exports = {
  ...pageHelpers, ...mpSizing, ...mpDom,
};
