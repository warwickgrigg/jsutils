/* utility functions to shorten date strings for couchdb ids etc */

var dDate = function(d) { /* yyyymmdd from ISO */
  return d.replace(/[\:\-\.TZ]/g, "").slice(0,8);
};

var minDate = function(d) { /* yyyymmddhhnn from ISO */
  return d.replace(/[\:\-\.TZ]/g, "").slice(0,12);
};

var secDate = function(d) {  /* yyyymmddhhnnss from ISO */
  return d.replace(/[\:\-\.TZ]/g, "").slice(0,14);
};

var shortDate = function(d) { { /* yyyymmddhhnnssttt from ISO */
  return d.replace(/[\:\-\.TZ]/g, "");
};

var newId = function() { /* yyyymmddhhnnssttt for now */
  var d = new Date().toISOString();
  return shortDate(d);
}; 

if ((typeof(module)!='undefined') && (typeof(module.exports)!='undefined')) { //for browser/node
  module.exports.dayDate = dDate;
  module.exports.minDate = minDate;
  module.exports.secDate = secDate;
  module.exports.shortDate = shortDate;
  module.exports.newId = newId;
}
