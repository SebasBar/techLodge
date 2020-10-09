// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
//     import shortid from "shortid" 
// function newID(){
//     const myId = shortid()
//     console.log("my id", myId)
//     return myId;
// }
function quote1() {
  //I wanted to email the information ... 
  // not sure why when I try to call the function save file
  // it doesn't work from here, but it works in the contact page :(
  // So this page prints in the console the information 
  var emailQuote1 = document.getElementById("email-quote1").value.trim(); //email validation

  if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 || emailQuote1.indexOf(".") === -1) {
    alert("Please enter a valid e-mail address");
    return;
  }

  var numberOfPeople = document.getElementById("number-people1").value;
  var option1;
  var option2;
  var option3;
  var option4; //not working :(
  // var internnalId = newId();
  //check for selected radio options

  document.getElementById('option1').checked === true ? option1 = "selected" : option1 = "not selected";
  document.getElementById('option2').checked === true ? option2 = "selected" : option2 = "not selected";
  document.getElementById('option3').checked === true ? option3 = "selected" : option3 = "not selected";
  document.getElementById('option4').checked === true ? option4 = "selected" : option4 = "not selected"; //information collected

  var information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople + "\nOption1: " + option1 + "\nOption2: " + option2 + "\nOption3: " + option3 + "\nOption4: " + option4; // + "\nInternal ID: " + internnalId;

  console.log(information);
  openSubmit(); //This function is not working here!? but when I call it
  //from writeToFile it works .... :(
  // saveFile(information, emailQuote1); 
}

function writeToFile() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById('last-name').value;
  var country = document.getElementById('country').value;
  var subject = document.getElementById('subject').value;
  var information = "First Name: " + firstName + "\nLast Name: " + lastName + "\nCountry: " + country + "\nSubject: " + subject; //here this function works ....

  saveFile(information, firstName);
}

function saveFile(information, fileName) {
  var blob = new Blob([information], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, "".concat(fileName, ".txt"));
} //to clear the selected radio options


function clearSelection1() {
  document.getElementById('option1').checked = false;
  document.getElementById('option2').checked = false;
  document.getElementById('option3').checked = false;
  document.getElementById('option4').checked = false;
}

function clearSelection2() {
  document.getElementById('option5').checked = false;
  document.getElementById('option6').checked = false;
  document.getElementById('option7').checked = false;
  document.getElementById('option8').checked = false;
}

function clearSelection3() {
  document.getElementById('option9').checked = false;
  document.getElementById('option10').checked = false;
  document.getElementById('option11').checked = false;
  document.getElementById('option1contact you2').checked = false;
}

function clearSelection4() {
  document.getElementById('option13').checked = false;
  document.getElementById('option14').checked = false;
  document.getElementById('option15').checked = false;
  document.getElementById('option16').checked = false;
}

function clearSelection5() {
  document.getElementById('option17').checked = false;
  document.getElementById('option18').checked = false;
  document.getElementById('option19').checked = false;
  document.getElementById('option20').checked = false;
}

function openSubmit() {
  alert("Your selction was saved. Now please fill your information so we can know more about you :)");
  window.open('https://sebasbar.github.io/techLodge/contact.html');
}

function quote2() {
  var emailQuote1 = document.getElementById("email-quote2").value.trim(); //email validation

  if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 || emailQuote1.indexOf(".") === -1) {
    alert("Please enter a valid e-mail address");
    return;
  }

  var numberOfPeople = document.getElementById("number-people2").value;
  var option1;
  var option2;
  var option3;
  var option4;
  document.getElementById('option5').checked === true ? option1 = "selected" : option1 = "not selected";
  document.getElementById('option6').checked === true ? option2 = "selected" : option2 = "not selected";
  document.getElementById('option7').checked === true ? option3 = "selected" : option3 = "not selected";
  document.getElementById('option8').checked === true ? option4 = "selected" : option4 = "not selected";
  var information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople + "\nOption1: " + option1 + "\nOption2: " + option2 + "\nOption3: " + option3 + "\nOption4: " + option4; // + "\nInternal ID: " + internnalId;

  console.log(information);
  openSubmit(); // saveFile(information, emailQuote1); 
}

function quote3() {
  var emailQuote1 = document.getElementById("email-quote3").value.trim(); //email validation

  if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 || emailQuote1.indexOf(".") === -1) {
    alert("Please enter a valid e-mail address");
    return;
  }

  var numberOfPeople = document.getElementById("number-people3").value;
  var option1;
  var option2;
  var option3;
  var option4;
  document.getElementById('option9').checked === true ? option1 = "selected" : option1 = "not selected";
  document.getElementById('option10').checked === true ? option2 = "selected" : option2 = "not selected";
  document.getElementById('option11').checked === true ? option3 = "selected" : option3 = "not selected";
  document.getElementById('option12').checked === true ? option4 = "selected" : option4 = "not selected";
  var information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople + "\nOption1: " + option1 + "\nOption2: " + option2 + "\nOption3: " + option3 + "\nOption4: " + option4; // + "\nInternal ID: " + internnalId;

  console.log(information);
  openSubmit(); // saveFile(information, emailQuote1); 
}

function quote4() {
  var emailQuote1 = document.getElementById("email-quote4").value.trim(); //email validation

  if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 || emailQuote1.indexOf(".") === -1) {
    alert("Please enter a valid e-mail address");
    return;
  }

  var numberOfPeople = document.getElementById("number-people4").value;
  var option1;
  var option2;
  var option3;
  var option4;
  document.getElementById('option13').checked === true ? option1 = "selected" : option1 = "not selected";
  document.getElementById('option14').checked === true ? option2 = "selected" : option2 = "not selected";
  document.getElementById('option15').checked === true ? option3 = "selected" : option3 = "not selected";
  document.getElementById('option16').checked === true ? option4 = "selected" : option4 = "not selected";
  var information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople + "\nOption1: " + option1 + "\nOption2: " + option2 + "\nOption3: " + option3 + "\nOption4: " + option4; // + "\nInternal ID: " + internnalId;

  console.log(information);
  openSubmit(); // saveFile(information, emailQuote1); 
}

function quote5() {
  var emailQuote1 = document.getElementById("email-quote5").value.trim(); //email validation

  if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 || emailQuote1.indexOf(".") === -1) {
    alert("Please enter a valid e-mail address");
    return;
  }

  var numberOfPeople = document.getElementById("number-people5").value;
  var option1;
  var option2;
  var option3;
  var option4;
  document.getElementById('option17').checked === true ? option1 = "selected" : option1 = "not selected";
  document.getElementById('option18').checked === true ? option2 = "selected" : option2 = "not selected";
  document.getElementById('option19').checked === true ? option3 = "selected" : option3 = "not selected";
  document.getElementById('option20').checked === true ? option4 = "selected" : option4 = "not selected";
  var information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople + "\nOption1: " + option1 + "\nOption2: " + option2 + "\nOption3: " + option3 + "\nOption4: " + option4; // + "\nInternal ID: " + internnalId;

  console.log(information);
  openSubmit(); // saveFile(information, emailQuote1); 
}
},{}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45517" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map