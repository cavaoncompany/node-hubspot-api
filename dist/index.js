'use strict';

var _request = require('./helpers/request');

var _request2 = _interopRequireDefault(_request);

var _contacts = require('./endpoints/contacts');

var _contacts2 = _interopRequireDefault(_contacts);

var _blog = require('./endpoints/blog');

var _blog2 = _interopRequireDefault(_blog);

var _deals = require('./endpoints/deals');

var _deals2 = _interopRequireDefault(_deals);

var _tickets = require('./endpoints/tickets');

var _tickets2 = _interopRequireDefault(_tickets);

var _associations = require('./endpoints/associations');

var _associations2 = _interopRequireDefault(_associations);

var _files = require('./endpoints/files');

var _files2 = _interopRequireDefault(_files);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NodeHubSpotApi = function NodeHubSpotApi() {
  var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  var api = new _request2.default(apiKey);

  return _defineProperty({
    calendar: null,
    companies: null,
    contacts: (0, _contacts2.default)(api),
    blog: (0, _blog2.default)(api),
    domains: null,
    files: null,
    deals: (0, _deals2.default)(api),
    tickets: (0, _tickets2.default)(api),
    associations: (0, _associations2.default)(api)
  }, 'files', (0, _files2.default)(api));
};

module.exports = NodeHubSpotApi;