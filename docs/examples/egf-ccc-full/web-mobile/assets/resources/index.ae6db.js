(function e(t, n, r) {
  function s(o, u, npmPkgName) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o;
        if (o.includes("./")) {
          b = o.split("/");
          b = b[b.length - 1];
        }
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e, void 0, e.includes("./") ? void 0 : e);
      }, f, f.exports, e, t, n, r);
    }
    npmPkgName && n[o] && !n[npmPkgName] && (n[npmPkgName] = n[o]);
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})({}, {}, []);
//# sourceMappingURL=index.js.map
