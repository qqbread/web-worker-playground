onmessage = function(e) {
  var action = e.data.action,
      params = e.data.params;

  var c = 0;

  switch(action) {
    case 'start':
      setInterval(function() {
        c ++;
        postMessage(c);
      }, 1000);
      break;
    default:

  }
};