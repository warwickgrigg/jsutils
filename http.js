/* shorted version of Mozilla MDN's example */

function $http(url) {
  var core = {  // A small example of object
    ajax : function (method, url, args) { // Method that performs the ajax request
      var promise = new Promise( function (resolve, reject) {
        var client = new XMLHttpRequest();
        var uri = url;
        if (args && (method === 'POST' || method === 'PUT')) {
          uri += '?';
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                uri += '&';
              }
              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }
        client.open(method, uri);
        client.send();
        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            // Performs the function "resolve" when this.status is equal to 2xx
            resolve(this.response);
          } else {
            // Performs the function "reject" when this.status is different than 2xx
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
}

// Executes the method call 
//$http('https://developer.mozilla.org/en-US/search.json') 
//  .get({topic: 'js', q: 'Promise'}) 
//  .then(function(data){
//     console.log(1, 'success', JSON.parse(data));
//  }) 
//  .catch( function(data){
//     console.log(2, 'error', JSON.parse(data));
//  });//
