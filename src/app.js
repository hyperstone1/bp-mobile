import './checkLocal';
import './script';
import './events';
import './langs';
import '../style/style.css';
import '../style/media.css';

const app = (function () {
  var events = require('./events');
  var script = require('./script');
  var checkLocal = require('./checkLocal');

  return {
    events,
    script,
    checkLocal,
  };
})();

module.exports = app;
