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
})({"src/assets/iconfont.js":[function(require,module,exports) {
!function (c) {
  var t,
      o = '<svg><symbol id="icon-settings" viewBox="0 0 1024 1024"><path d="M998.4 670.72C806.4 519.68 998.4 345.6 998.4 345.6l5.12-5.12-102.4-176.64-10.24 5.12c-33.28 15.36-64 20.48-92.16 20.48-148.48 0-189.44-184.32-189.44-184.32l0-5.12-202.24 0-2.56 10.24C384 158.72 286.72 186.88 212.48 186.88c-48.64 0-87.04-12.8-87.04-12.8L117.76 171.52l-99.84 176.64L25.6 353.28C217.6 504.32 25.6 678.4 25.6 678.4l-5.12 5.12 102.4 176.64 10.24-5.12c35.84-15.36 66.56-20.48 92.16-20.48 148.48 0 189.44 181.76 189.44 181.76l2.56 7.68 202.24 0 2.56-10.24c20.48-145.92 117.76-174.08 192-174.08 48.64 0 87.04 12.8 87.04 12.8l7.68 2.56 102.4-176.64L998.4 670.72zM880.64 793.6c-17.92-2.56-43.52-7.68-69.12-7.68-125.44 0-209.92 66.56-238.08 186.88l-120.32 0c-28.16-79.36-97.28-189.44-230.4-189.44-25.6 0-51.2 5.12-79.36 12.8L84.48 691.2c30.72-35.84 81.92-107.52 76.8-194.56-2.56-58.88-28.16-112.64-79.36-161.28L140.8 230.4c17.92 2.56 43.52 7.68 69.12 7.68 125.44 0 209.92-66.56 238.08-186.88l120.32 0c23.04 64 84.48 189.44 230.4 189.44 25.6 0 51.2-5.12 79.36-12.8l61.44 104.96c-30.72 35.84-81.92 107.52-79.36 194.56 2.56 58.88 28.16 112.64 79.36 161.28L880.64 793.6z"  ></path><path d="M512 294.4c-125.44 0-227.84 102.4-227.84 227.84s102.4 227.84 227.84 227.84 227.84-102.4 227.84-227.84S637.44 294.4 512 294.4zM512 698.88c-97.28 0-176.64-79.36-176.64-176.64s79.36-176.64 176.64-176.64 176.64 79.36 176.64 176.64S609.28 698.88 512 698.88z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M488 784q10.016 10.016 24 10.016t24-10.016l156-156q11.008-10.016 11.008-24t-10.496-24.512-24.512-10.496-24 11.008l-96.992 96V99.008q0-15.008-10.496-24.992T512 64t-24 10.016-10.016 24.992v576.992l-96.992-96.992q-11.008-10.016-24.992-10.016t-24 10.496-10.016 24.512 10.016 24zM924.512 640q-14.496 0-24.512 10.496t-10.016 24.512v195.008q0 8.992-6.016 15.008t-15.008 6.016H152.96q-8.992 0-15.008-6.016t-6.016-15.008v-195.008q0-14.016-10.016-24.512T97.408 640t-24.512 10.496-10.016 24.512v223.008q0 26.016 18.016 44t44 18.016h772q26.016 0 44-18.496t18.016-43.488v-223.008q0-14.016-10.016-24.512t-24.512-10.496z"  ></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 1024 1024"><path d="M908.8 430.08A128 128 0 0 0 810.666667 384h-194.56L640 322.986667A176.213333 176.213333 0 0 0 474.026667 85.333333a42.666667 42.666667 0 0 0-38.826667 25.173334L313.6 384H213.333333a128 128 0 0 0-128 128v298.666667a128 128 0 0 0 128 128h543.146667a128 128 0 0 0 125.866667-104.96l54.186666-298.666667a128 128 0 0 0-27.733333-104.96zM298.666667 853.333333H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666v-298.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h85.333334z m554.666666-333.653333l-54.186666 298.666667a42.666667 42.666667 0 0 1-42.666667 34.986666H384v-417.706666l116.053333-261.12a90.026667 90.026667 0 0 1 58.88 118.613333l-22.613333 61.013333a85.333333 85.333333 0 0 0 79.786667 115.2H810.666667a42.666667 42.666667 0 0 1 32.853333 15.36 42.666667 42.666667 0 0 1 9.813333 34.986667z"  ></path></symbol><symbol id="icon-Right" viewBox="0 0 1024 1024"><path d="M141.162 512.025c0-13.596 11.099-24.72 24.72-24.72H802.13l-209.62-230.63c-9.146-10.135-8.404-25.708 1.73-34.854a24.546 24.546 0 0 1 34.83 1.73l247.193 271.912a24.324 24.324 0 0 1 0 33.124L629.07 800.498a24.645 24.645 0 1 1-36.56-33.124l209.62-230.63H165.857c-13.596 0-24.72-11.124-24.72-24.72"  ></path></symbol><symbol id="icon-Left" viewBox="0 0 1024 1024"><path d="M882.838 511.975c0 13.596-11.099 24.72000001-24.72 24.72L221.87 536.69500001l209.62 230.62999999c9.146 10.135 8.404 25.708-1.73 34.854a24.546 24.546 0 0 1-34.83-1.73l-247.193-271.91199999a24.324 24.324 0 0 1 0-33.124L394.93 223.502a24.645 24.645 0 1 1 36.56 33.124l-209.62 230.63L858.143 487.25600001c13.596 0 24.72 11.12399999 24.72 24.71999999"  ></path></symbol><symbol id="icon-Up" viewBox="0 0 1024 1024"><path d="M512.025 882.838c-13.596 0-24.72000001-11.099-24.72-24.72L487.30499999 221.87l-230.62999999 209.62c-10.135 9.146-25.708 8.404-34.854-1.73a24.546 24.546 0 0 1 1.73-34.83l271.91199999-247.193a24.324 24.324 0 0 1 33.124 0L800.498 394.93a24.645 24.645 0 1 1-33.124 36.56l-230.63-209.62L536.74399999 858.143c0 13.596-11.12399999 24.72-24.71999999 24.72"  ></path></symbol><symbol id="icon-Down" viewBox="0 0 1024 1024"><path d="M511.975 141.162c13.596 0 24.72000001 11.099 24.72 24.72L536.69500001 802.13l230.62999999-209.62c10.135-9.146 25.708-8.404 34.854 1.73a24.546 24.546 0 0 1-1.73 34.83l-271.91199999 247.193a24.324 24.324 0 0 1-33.124 0L223.502 629.07a24.645 24.645 0 1 1 33.124-36.56l230.63 209.62L487.25600001 165.857c0-13.596 11.12399999-24.72 24.71999999-24.72"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (n = t, l = c.document, a = !1, (_i = function i() {
      try {
        l.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_i, 50);
      }

      o();
    })(), l.onreadystatechange = function () {
      "complete" == l.readyState && (l.onreadystatechange = null, o());
    });

    function o() {
      a || (a = !0, n());
    }

    var n, l, a, _i;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = o, o = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58650" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/assets/iconfont.js"], null)
//# sourceMappingURL=/iconfont.aefa4bb8.js.map