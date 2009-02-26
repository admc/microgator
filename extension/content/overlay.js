function getWindows(type) {
  if (type == undefined) {
      var type = "";
  }
  var windows = []
  var enumerator = Components.classes["@mozilla.org/appshell/window-mediator;1"]
                     .getService(Components.interfaces.nsIWindowMediator)
                     .getEnumerator(type);
  while(enumerator.hasMoreElements()) {
    windows.push(enumerator.getNext());
  }
  return windows;
};

function getWindowByTitle(title) {
  for each(w in getWindows()) {
    if (w.document.title && w.document.title == title) {
      return w;
    }
  }
};

var MG = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
  },
  go: function() {
    var mw = getWindowByTitle('MicroGator');
    if (mw){
      mw.focus();
    }
    else {
      var h = window.innerHeight;
      var l = window.innerWidth;
      var w = window.open("chrome://microgator/content/microgator.html", "", "resizable,chrome,height="+h+",width=400,left="+l); 
    }
  }
};

window.addEventListener("load", function(e) { MG.onLoad(e); }, false);
