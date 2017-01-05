/* eslint-disable */
if (__DEV__) {
  module.exports = require('./configure_store.dev');
}
else {
  module.exports = require('./configure_store.prod');
}
