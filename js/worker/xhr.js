var load = function(url, callback) {
  var xhr;

  if (typeof XMLHttpRequest !== 'undefined') {
    xhr = new XMLHttpRequest();
  } else {
    var versions = [
      "MSXML2.XmlHttp.5.0", 
      "MSXML2.XmlHttp.4.0",
      "MSXML2.XmlHttp.3.0", 
      "MSXML2.XmlHttp.2.0",
      "Microsoft.XmlHttp"
    ];

    for (var i = 0, len = versions.length; i < len; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch(e) { }
    }
  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4) {
      return;
    }

    if (xhr.status !== 200) {
      return;
    }

    if (xhr.readyState == 4) {
      callback(xhr);
    }
  };

  xhr.open('GET', url, true);
  xhr.send('');
};

onmessage = function(e) {
  var action = e.data.action,
      params = e.data.params;

  switch(action) {
    case 'position':
      var url = 'http://cats-api.ecominfinity.com:7280/?';
      url += 'la=' + params[0] + '&lo=' + params[1];
      load(url, function(xhr) {
        var result = xhr.responseText;
        postMessage(result);
      });
      break;
    default:
  }
};

// load(
//   'http://cats-api.ecominfinity.com:7280/product/detail?id=1',
//   function(xhr) {
//     var result = xhr.responseText;

//     postMessage(result);
//   }
// );