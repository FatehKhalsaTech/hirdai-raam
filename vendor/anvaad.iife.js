var anvaad = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // vendor/anvaad.js
  var require_anvaad = __commonJS({
    "vendor/anvaad.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["anvaad-js"] = e() : t["anvaad-js"] = e();
      }(self, () => (() => {
        var t = { 9466: (t2, e2, r2) => {
          "use strict";
          var o = r2(6400), n = r2(9122), i = n(o("String.prototype.indexOf"));
          t2.exports = function(t3, e3) {
            var r3 = o(t3, !!e3);
            return "function" == typeof r3 && i(t3, ".prototype.") > -1 ? n(r3) : r3;
          };
        }, 9122: (t2, e2, r2) => {
          "use strict";
          var o = r2(2354), n = r2(6400), i = r2(3900), u = r2(2268), a = n("%Function.prototype.apply%"), c = n("%Function.prototype.call%"), p = n("%Reflect.apply%", true) || o.call(c, a), l = r2(988), f = n("%Math.max%");
          t2.exports = function(t3) {
            if ("function" != typeof t3) throw new u("a function is required");
            var e3 = p(o, c, arguments);
            return i(e3, 1 + f(0, t3.length - (arguments.length - 1)), true);
          };
          var y = function() {
            return p(o, a, arguments);
          };
          l ? l(t2.exports, "apply", { value: y }) : t2.exports.apply = y;
        }, 6750: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = r2(988), i = r2(9907), u = r2(2268), a = r2(1464);
          t2.exports = function(t3, e3, r3) {
            if (!t3 || "object" !== o(t3) && "function" != typeof t3) throw new u("`obj` must be an object or a function`");
            if ("string" != typeof e3 && "symbol" !== o(e3)) throw new u("`property` must be a string or a symbol`");
            if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new u("`nonEnumerable`, if provided, must be a boolean or null");
            if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new u("`nonWritable`, if provided, must be a boolean or null");
            if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new u("`nonConfigurable`, if provided, must be a boolean or null");
            if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new u("`loose`, if provided, must be a boolean");
            var c = arguments.length > 3 ? arguments[3] : null, p = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 && arguments[6], y = !!a && a(t3, e3);
            if (n) n(t3, e3, { configurable: null === l && y ? y.configurable : !l, enumerable: null === c && y ? y.enumerable : !c, value: r3, writable: null === p && y ? y.writable : !p });
            else {
              if (!f && (c || p || l)) throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
              t3[e3] = r3;
            }
          };
        }, 2273: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = r2(668), i = "function" == typeof Symbol && "symbol" === o(Symbol("foo")), u = Object.prototype.toString, a = Array.prototype.concat, c = r2(6750), p = r2(3191)(), l = function(t3, e3, r3, o2) {
            if (e3 in t3) {
              if (true === o2) {
                if (t3[e3] === r3) return;
              } else if ("function" != typeof (n2 = o2) || "[object Function]" !== u.call(n2) || !o2()) return;
            }
            var n2;
            p ? c(t3, e3, r3, true) : c(t3, e3, r3);
          }, f = function(t3, e3) {
            var r3 = arguments.length > 2 ? arguments[2] : {}, o2 = n(e3);
            i && (o2 = a.call(o2, Object.getOwnPropertySymbols(e3)));
            for (var u2 = 0; u2 < o2.length; u2 += 1) l(t3, o2[u2], e3[o2[u2]], r3[o2[u2]]);
          };
          f.supportsDescriptors = !!p, t2.exports = f;
        }, 988: (t2, e2, r2) => {
          "use strict";
          var o = r2(6400)("%Object.defineProperty%", true) || false;
          if (o) try {
            o({}, "a", { value: 1 });
          } catch (t3) {
            o = false;
          }
          t2.exports = o;
        }, 9206: (t2) => {
          "use strict";
          t2.exports = EvalError;
        }, 9870: (t2) => {
          "use strict";
          t2.exports = Error;
        }, 9939: (t2) => {
          "use strict";
          t2.exports = RangeError;
        }, 783: (t2) => {
          "use strict";
          t2.exports = ReferenceError;
        }, 9907: (t2) => {
          "use strict";
          t2.exports = SyntaxError;
        }, 2268: (t2) => {
          "use strict";
          t2.exports = TypeError;
        }, 8188: (t2) => {
          "use strict";
          t2.exports = URIError;
        }, 1035: (t2, e2, r2) => {
          "use strict";
          var o = r2(2268);
          t2.exports = function(t3) {
            if (null == t3) throw new o(arguments.length > 0 && arguments[1] || "Cannot call method on " + t3);
            return t3;
          };
        }, 2934: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = "function" == typeof Symbol && "symbol" === o(Symbol.iterator), i = r2(4835), u = r2(9809), a = r2(9191), c = r2(449);
          t2.exports = function(t3) {
            if (i(t3)) return t3;
            var e3, r3 = "default";
            if (arguments.length > 1 && (arguments[1] === String ? r3 = "string" : arguments[1] === Number && (r3 = "number")), n && (Symbol.toPrimitive ? e3 = function(t4, e4) {
              var r4 = t4[e4];
              if (null != r4) {
                if (!u(r4)) throw new TypeError(r4 + " returned for property " + e4 + " of object " + t4 + " is not a function");
                return r4;
              }
            }(t3, Symbol.toPrimitive) : c(t3) && (e3 = Symbol.prototype.valueOf)), void 0 !== e3) {
              var o2 = e3.call(t3, r3);
              if (i(o2)) return o2;
              throw new TypeError("unable to convert exotic object to primitive");
            }
            return "default" === r3 && (a(t3) || c(t3)) && (r3 = "string"), function(t4, e4) {
              if (null == t4) throw new TypeError("Cannot call method on " + t4);
              if ("string" != typeof e4 || "number" !== e4 && "string" !== e4) throw new TypeError('hint must be "string" or "number"');
              var r4, o3, n2, a2 = "string" === e4 ? ["toString", "valueOf"] : ["valueOf", "toString"];
              for (n2 = 0; n2 < a2.length; ++n2) if (r4 = t4[a2[n2]], u(r4) && (o3 = r4.call(t4), i(o3))) return o3;
              throw new TypeError("No default value");
            }(t3, "default" === r3 ? "number" : r3);
          };
        }, 4835: (t2) => {
          "use strict";
          function e2(t3) {
            return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, e2(t3);
          }
          t2.exports = function(t3) {
            return null === t3 || "function" != typeof t3 && "object" !== e2(t3);
          };
        }, 6730: (t2) => {
          "use strict";
          var e2 = Object.prototype.toString, r2 = Math.max, o = function(t3, e3) {
            for (var r3 = [], o2 = 0; o2 < t3.length; o2 += 1) r3[o2] = t3[o2];
            for (var n = 0; n < e3.length; n += 1) r3[n + t3.length] = e3[n];
            return r3;
          };
          t2.exports = function(t3) {
            var n = this;
            if ("function" != typeof n || "[object Function]" !== e2.apply(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var i, u = function(t4) {
              for (var e3 = [], r3 = 1, o2 = 0; r3 < t4.length; r3 += 1, o2 += 1) e3[o2] = t4[r3];
              return e3;
            }(arguments), a = r2(0, n.length - u.length), c = [], p = 0; p < a; p++) c[p] = "$" + p;
            if (i = Function("binder", "return function (" + function(t4) {
              for (var e3 = "", r3 = 0; r3 < t4.length; r3 += 1) e3 += t4[r3], r3 + 1 < t4.length && (e3 += ",");
              return e3;
            }(c) + "){ return binder.apply(this,arguments); }")(function() {
              if (this instanceof i) {
                var e3 = n.apply(this, o(u, arguments));
                return Object(e3) === e3 ? e3 : this;
              }
              return n.apply(t3, o(u, arguments));
            }), n.prototype) {
              var l = function() {
              };
              l.prototype = n.prototype, i.prototype = new l(), l.prototype = null;
            }
            return i;
          };
        }, 2354: (t2, e2, r2) => {
          "use strict";
          var o = r2(6730);
          t2.exports = Function.prototype.bind || o;
        }, 6400: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n, i = r2(9870), u = r2(9206), a = r2(9939), c = r2(783), p = r2(9907), l = r2(2268), f = r2(8188), y = Function, s = function(t3) {
            try {
              return y('"use strict"; return (' + t3 + ").constructor;")();
            } catch (t4) {
            }
          }, b = Object.getOwnPropertyDescriptor;
          if (b) try {
            b({}, "");
          } catch (t3) {
            b = null;
          }
          var m = function() {
            throw new l();
          }, g = b ? function() {
            try {
              return m;
            } catch (t3) {
              try {
                return b(arguments, "callee").get;
              } catch (t4) {
                return m;
              }
            }
          }() : m, h = r2(5510)(), d = r2(309)(), v = Object.getPrototypeOf || (d ? function(t3) {
            return t3.__proto__;
          } : null), S = {}, x = "undefined" != typeof Uint8Array && v ? v(Uint8Array) : n, A = { __proto__: null, "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer, "%ArrayIteratorPrototype%": h && v ? v([][Symbol.iterator]()) : n, "%AsyncFromSyncIteratorPrototype%": n, "%AsyncFunction%": S, "%AsyncGenerator%": S, "%AsyncGeneratorFunction%": S, "%AsyncIteratorPrototype%": S, "%Atomics%": "undefined" == typeof Atomics ? n : Atomics, "%BigInt%": "undefined" == typeof BigInt ? n : BigInt, "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array, "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? n : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i, "%eval%": eval, "%EvalError%": u, "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry, "%Function%": y, "%GeneratorFunction%": S, "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": h && v ? v(v([][Symbol.iterator]())) : n, "%JSON%": "object" === ("undefined" == typeof JSON ? "undefined" : o(JSON)) ? JSON : n, "%Map%": "undefined" == typeof Map ? n : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && h && v ? v((/* @__PURE__ */ new Map())[Symbol.iterator]()) : n, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? n : Promise, "%Proxy%": "undefined" == typeof Proxy ? n : Proxy, "%RangeError%": a, "%ReferenceError%": c, "%Reflect%": "undefined" == typeof Reflect ? n : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? n : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && h && v ? v((/* @__PURE__ */ new Set())[Symbol.iterator]()) : n, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": h && v ? v(""[Symbol.iterator]()) : n, "%Symbol%": h ? Symbol : n, "%SyntaxError%": p, "%ThrowTypeError%": g, "%TypedArray%": x, "%TypeError%": l, "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array, "%URIError%": f, "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet };
          if (v) try {
            null.error;
          } catch (t3) {
            var w = v(v(t3));
            A["%Error.prototype%"] = w;
          }
          var j = function t3(e3) {
            var r3;
            if ("%AsyncFunction%" === e3) r3 = s("async function () {}");
            else if ("%GeneratorFunction%" === e3) r3 = s("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e3) r3 = s("async function* () {}");
            else if ("%AsyncGenerator%" === e3) {
              var o2 = t3("%AsyncGeneratorFunction%");
              o2 && (r3 = o2.prototype);
            } else if ("%AsyncIteratorPrototype%" === e3) {
              var n2 = t3("%AsyncGenerator%");
              n2 && v && (r3 = v(n2.prototype));
            }
            return A[e3] = r3, r3;
          }, O = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, E = r2(2354), P = r2(5994), F = E.call(Function.call, Array.prototype.concat), I = E.call(Function.apply, Array.prototype.splice), R = E.call(Function.call, String.prototype.replace), k = E.call(Function.call, String.prototype.slice), U = E.call(Function.call, RegExp.prototype.exec), N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $ = /\\(\\)?/g, M = function(t3, e3) {
            var r3, o2 = t3;
            if (P(O, o2) && (o2 = "%" + (r3 = O[o2])[0] + "%"), P(A, o2)) {
              var n2 = A[o2];
              if (n2 === S && (n2 = j(o2)), void 0 === n2 && !e3) throw new l("intrinsic " + t3 + " exists, but is not available. Please file an issue!");
              return { alias: r3, name: o2, value: n2 };
            }
            throw new p("intrinsic " + t3 + " does not exist!");
          };
          t2.exports = function(t3, e3) {
            if ("string" != typeof t3 || 0 === t3.length) throw new l("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof e3) throw new l('"allowMissing" argument must be a boolean');
            if (null === U(/^%?[^%]*%?$/, t3)) throw new p("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var r3 = function(t4) {
              var e4 = k(t4, 0, 1), r4 = k(t4, -1);
              if ("%" === e4 && "%" !== r4) throw new p("invalid intrinsic syntax, expected closing `%`");
              if ("%" === r4 && "%" !== e4) throw new p("invalid intrinsic syntax, expected opening `%`");
              var o3 = [];
              return R(t4, N, function(t5, e5, r5, n3) {
                o3[o3.length] = r5 ? R(n3, $, "$1") : e5 || t5;
              }), o3;
            }(t3), o2 = r3.length > 0 ? r3[0] : "", n2 = M("%" + o2 + "%", e3), i2 = n2.name, u2 = n2.value, a2 = false, c2 = n2.alias;
            c2 && (o2 = c2[0], I(r3, F([0, 1], c2)));
            for (var f2 = 1, y2 = true; f2 < r3.length; f2 += 1) {
              var s2 = r3[f2], m2 = k(s2, 0, 1), g2 = k(s2, -1);
              if (('"' === m2 || "'" === m2 || "`" === m2 || '"' === g2 || "'" === g2 || "`" === g2) && m2 !== g2) throw new p("property names with quotes must have matching quotes");
              if ("constructor" !== s2 && y2 || (a2 = true), P(A, i2 = "%" + (o2 += "." + s2) + "%")) u2 = A[i2];
              else if (null != u2) {
                if (!(s2 in u2)) {
                  if (!e3) throw new l("base intrinsic for " + t3 + " exists, but the property is not available.");
                  return;
                }
                if (b && f2 + 1 >= r3.length) {
                  var h2 = b(u2, s2);
                  u2 = (y2 = !!h2) && "get" in h2 && !("originalValue" in h2.get) ? h2.get : u2[s2];
                } else y2 = P(u2, s2), u2 = u2[s2];
                y2 && !a2 && (A[i2] = u2);
              }
            }
            return u2;
          };
        }, 1464: (t2, e2, r2) => {
          "use strict";
          var o = r2(6400)("%Object.getOwnPropertyDescriptor%", true);
          if (o) try {
            o([], "length");
          } catch (t3) {
            o = null;
          }
          t2.exports = o;
        }, 3191: (t2, e2, r2) => {
          "use strict";
          var o = r2(988), n = function() {
            return !!o;
          };
          n.hasArrayLengthDefineBug = function() {
            if (!o) return null;
            try {
              return 1 !== o([], "length", { value: 1 }).length;
            } catch (t3) {
              return true;
            }
          }, t2.exports = n;
        }, 309: (t2) => {
          "use strict";
          var e2 = { __proto__: null, foo: {} }, r2 = Object;
          t2.exports = function() {
            return { __proto__: e2 }.foo === e2.foo && !(e2 instanceof r2);
          };
        }, 5510: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = "undefined" != typeof Symbol && Symbol, i = r2(5484);
          t2.exports = function() {
            return "function" == typeof n && "function" == typeof Symbol && "symbol" === o(n("foo")) && "symbol" === o(Symbol("bar")) && i();
          };
        }, 5484: (t2) => {
          "use strict";
          function e2(t3) {
            return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, e2(t3);
          }
          t2.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return false;
            if ("symbol" === e2(Symbol.iterator)) return true;
            var t3 = {}, r2 = Symbol("test"), o = Object(r2);
            if ("string" == typeof r2) return false;
            if ("[object Symbol]" !== Object.prototype.toString.call(r2)) return false;
            if ("[object Symbol]" !== Object.prototype.toString.call(o)) return false;
            for (r2 in t3[r2] = 42, t3) return false;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t3).length) return false;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t3).length) return false;
            var n = Object.getOwnPropertySymbols(t3);
            if (1 !== n.length || n[0] !== r2) return false;
            if (!Object.prototype.propertyIsEnumerable.call(t3, r2)) return false;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var i = Object.getOwnPropertyDescriptor(t3, r2);
              if (42 !== i.value || true !== i.enumerable) return false;
            }
            return true;
          };
        }, 953: (t2, e2, r2) => {
          "use strict";
          var o = r2(5484);
          t2.exports = function() {
            return o() && !!Symbol.toStringTag;
          };
        }, 5994: (t2, e2, r2) => {
          "use strict";
          var o = Function.prototype.call, n = Object.prototype.hasOwnProperty, i = r2(2354);
          t2.exports = i.call(o, n);
        }, 9809: (t2) => {
          "use strict";
          function e2(t3) {
            return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, e2(t3);
          }
          var r2, o, n = Function.prototype.toString, i = "object" === ("undefined" == typeof Reflect ? "undefined" : e2(Reflect)) && null !== Reflect && Reflect.apply;
          if ("function" == typeof i && "function" == typeof Object.defineProperty) try {
            r2 = Object.defineProperty({}, "length", { get: function() {
              throw o;
            } }), o = {}, i(function() {
              throw 42;
            }, null, r2);
          } catch (t3) {
            t3 !== o && (i = null);
          }
          else i = null;
          var u = /^\s*class\b/, a = function(t3) {
            try {
              var e3 = n.call(t3);
              return u.test(e3);
            } catch (t4) {
              return false;
            }
          }, c = function(t3) {
            try {
              return !a(t3) && (n.call(t3), true);
            } catch (t4) {
              return false;
            }
          }, p = Object.prototype.toString, l = "function" == typeof Symbol && !!Symbol.toStringTag, f = !(0 in [,]), y = function() {
            return false;
          };
          if ("object" === ("undefined" == typeof document ? "undefined" : e2(document))) {
            var s = document.all;
            p.call(s) === p.call(document.all) && (y = function(t3) {
              if ((f || !t3) && (void 0 === t3 || "object" === e2(t3))) try {
                var r3 = p.call(t3);
                return ("[object HTMLAllCollection]" === r3 || "[object HTML document.all class]" === r3 || "[object HTMLCollection]" === r3 || "[object Object]" === r3) && null == t3("");
              } catch (t4) {
              }
              return false;
            });
          }
          t2.exports = i ? function(t3) {
            if (y(t3)) return true;
            if (!t3) return false;
            if ("function" != typeof t3 && "object" !== e2(t3)) return false;
            try {
              i(t3, null, r2);
            } catch (t4) {
              if (t4 !== o) return false;
            }
            return !a(t3) && c(t3);
          } : function(t3) {
            if (y(t3)) return true;
            if (!t3) return false;
            if ("function" != typeof t3 && "object" !== e2(t3)) return false;
            if (l) return c(t3);
            if (a(t3)) return false;
            var r3 = p.call(t3);
            return !("[object Function]" !== r3 && "[object GeneratorFunction]" !== r3 && !/^\[object HTML/.test(r3)) && c(t3);
          };
        }, 9191: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = Date.prototype.getDay, i = Object.prototype.toString, u = r2(953)();
          t2.exports = function(t3) {
            return "object" === o(t3) && null !== t3 && (u ? function(t4) {
              try {
                return n.call(t4), true;
              } catch (t5) {
                return false;
              }
            }(t3) : "[object Date]" === i.call(t3));
          };
        }, 9344: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n, i, u, a, c = r2(9466), p = r2(953)();
          if (p) {
            n = c("Object.prototype.hasOwnProperty"), i = c("RegExp.prototype.exec"), u = {};
            var l = function() {
              throw u;
            };
            a = { toString: l, valueOf: l }, "symbol" === o(Symbol.toPrimitive) && (a[Symbol.toPrimitive] = l);
          }
          var f = c("Object.prototype.toString"), y = Object.getOwnPropertyDescriptor;
          t2.exports = p ? function(t3) {
            if (!t3 || "object" !== o(t3)) return false;
            var e3 = y(t3, "lastIndex");
            if (!e3 || !n(e3, "value")) return false;
            try {
              i(t3, a);
            } catch (t4) {
              return t4 === u;
            }
          } : function(t3) {
            return !(!t3 || "object" !== o(t3) && "function" != typeof t3) && "[object RegExp]" === f(t3);
          };
        }, 449: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = Object.prototype.toString;
          if (r2(5510)()) {
            var i = Symbol.prototype.toString, u = /^Symbol\(.*\)$/;
            t2.exports = function(t3) {
              if ("symbol" === o(t3)) return true;
              if ("[object Symbol]" !== n.call(t3)) return false;
              try {
                return function(t4) {
                  return "symbol" === o(t4.valueOf()) && u.test(i.call(t4));
                }(t3);
              } catch (t4) {
                return false;
              }
            };
          } else t2.exports = function(t3) {
            return false;
          };
        }, 2419: (t2, e2, r2) => {
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n, i = /&(?:amp|lt|gt|quot|#39|#96);/g, u = RegExp(i.source), a = "object" == (void 0 === r2.g ? "undefined" : o(r2.g)) && r2.g && r2.g.Object === Object && r2.g, c = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self, p = a || c || Function("return this")(), l = (n = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`" }, function(t3) {
            return null == n ? void 0 : n[t3];
          }), f = Object.prototype.toString, y = p.Symbol, s = y ? y.prototype : void 0, b = s ? s.toString : void 0;
          t2.exports = function(t3) {
            var e3;
            return (t3 = null == (e3 = t3) ? "" : function(t4) {
              if ("string" == typeof t4) return t4;
              if (function(t5) {
                return "symbol" == o(t5) || function(t6) {
                  return !!t6 && "object" == o(t6);
                }(t5) && "[object Symbol]" == f.call(t5);
              }(t4)) return b ? b.call(t4) : "";
              var e4 = t4 + "";
              return "0" == e4 && 1 / t4 == -1 / 0 ? "-0" : e4;
            }(e3)) && u.test(t3) ? t3.replace(i, l) : t3;
          };
        }, 6544: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n;
          if (!Object.keys) {
            var i = Object.prototype.hasOwnProperty, u = Object.prototype.toString, a = r2(6312), c = Object.prototype.propertyIsEnumerable, p = !c.call({ toString: null }, "toString"), l = c.call(function() {
            }, "prototype"), f = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], y = function(t3) {
              var e3 = t3.constructor;
              return e3 && e3.prototype === t3;
            }, s = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, b = function() {
              if ("undefined" == typeof window) return false;
              for (var t3 in window) try {
                if (!s["$" + t3] && i.call(window, t3) && null !== window[t3] && "object" === o(window[t3])) try {
                  y(window[t3]);
                } catch (t4) {
                  return true;
                }
              } catch (t4) {
                return true;
              }
              return false;
            }();
            n = function(t3) {
              var e3 = null !== t3 && "object" === o(t3), r3 = "[object Function]" === u.call(t3), n2 = a(t3), c2 = e3 && "[object String]" === u.call(t3), s2 = [];
              if (!e3 && !r3 && !n2) throw new TypeError("Object.keys called on a non-object");
              var m = l && r3;
              if (c2 && t3.length > 0 && !i.call(t3, 0)) for (var g = 0; g < t3.length; ++g) s2.push(String(g));
              if (n2 && t3.length > 0) for (var h = 0; h < t3.length; ++h) s2.push(String(h));
              else for (var d in t3) m && "prototype" === d || !i.call(t3, d) || s2.push(String(d));
              if (p) for (var v = function(t4) {
                if ("undefined" == typeof window || !b) return y(t4);
                try {
                  return y(t4);
                } catch (t5) {
                  return false;
                }
              }(t3), S = 0; S < f.length; ++S) v && "constructor" === f[S] || !i.call(t3, f[S]) || s2.push(f[S]);
              return s2;
            };
          }
          t2.exports = n;
        }, 668: (t2, e2, r2) => {
          "use strict";
          var o = Array.prototype.slice, n = r2(6312), i = Object.keys, u = i ? function(t3) {
            return i(t3);
          } : r2(6544), a = Object.keys;
          u.shim = function() {
            if (Object.keys) {
              var t3 = function() {
                var t4 = Object.keys(arguments);
                return t4 && t4.length === arguments.length;
              }(1, 2);
              t3 || (Object.keys = function(t4) {
                return n(t4) ? a(o.call(t4)) : a(t4);
              });
            } else Object.keys = u;
            return Object.keys || u;
          }, t2.exports = u;
        }, 6312: (t2) => {
          "use strict";
          function e2(t3) {
            return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, e2(t3);
          }
          var r2 = Object.prototype.toString;
          t2.exports = function(t3) {
            var o = r2.call(t3), n = "[object Arguments]" === o;
            return n || (n = "[object Array]" !== o && null !== t3 && "object" === e2(t3) && "number" == typeof t3.length && t3.length >= 0 && "[object Function]" === r2.call(t3.callee)), n;
          };
        }, 2724: (t2, e2, r2) => {
          "use strict";
          var o = r2(9466), n = r2(9344), i = o("RegExp.prototype.exec"), u = r2(2268);
          t2.exports = function(t3) {
            if (!n(t3)) throw new u("`regex` must be a RegExp");
            return function(e3) {
              return null !== i(t3, e3);
            };
          };
        }, 3900: (t2, e2, r2) => {
          "use strict";
          var o = r2(6400), n = r2(6750), i = r2(3191)(), u = r2(1464), a = r2(2268), c = o("%Math.floor%");
          t2.exports = function(t3, e3) {
            if ("function" != typeof t3) throw new a("`fn` is not a function");
            if ("number" != typeof e3 || e3 < 0 || e3 > 4294967295 || c(e3) !== e3) throw new a("`length` must be a positive 32-bit integer");
            var r3 = arguments.length > 2 && !!arguments[2], o2 = true, p = true;
            if ("length" in t3 && u) {
              var l = u(t3, "length");
              l && !l.configurable && (o2 = false), l && !l.writable && (p = false);
            }
            return (o2 || p || !r3) && (i ? n(t3, "length", e3, true, true) : n(t3, "length", e3)), t3;
          };
        }, 4404: (t2, e2, r2) => {
          "use strict";
          var o = r2(6094), n = r2(367), i = r2(1035), u = r2(9466)("String.prototype.slice");
          t2.exports = function(t3) {
            var e3, r3 = i(this), a = n(r3), c = o(a.length);
            arguments.length > 1 && (e3 = arguments[1]);
            var p = void 0 === e3 ? "" : n(e3);
            "" === p && (p = " ");
            var l = o(t3);
            if (l <= c) return a;
            for (var f = l - c; p.length < f; ) {
              var y = p.length, s = f - y;
              p += y > s ? u(p, 0, s) : p;
            }
            return (p.length > f ? u(p, 0, f) : p) + a;
          };
        }, 1040: (t2, e2, r2) => {
          "use strict";
          var o = r2(2273), n = r2(1035), i = r2(9122), u = r2(4404), a = r2(6241), c = r2(815), p = i.apply(a()), l = function(t3, e3) {
            return n(t3), p(t3, arguments.length > 2 ? [e3, arguments[2]] : [e3]);
          };
          o(l, { getPolyfill: a, implementation: u, shim: c }), t2.exports = l;
        }, 6241: (t2, e2, r2) => {
          "use strict";
          var o = r2(4404);
          t2.exports = function() {
            return "function" == typeof String.prototype.padStart ? String.prototype.padStart : o;
          };
        }, 815: (t2, e2, r2) => {
          "use strict";
          var o = r2(6241), n = r2(2273);
          t2.exports = function() {
            var t3 = o();
            return n(String.prototype, { padStart: t3 }, { padStart: function() {
              return String.prototype.padStart !== t3;
            } }), t3;
          };
        }, 4385: (t2, e2, r2) => {
          "use strict";
          var o = r2(1035), n = r2(367), i = r2(9466)("String.prototype.replace"), u = /^\s$/.test("\u180E"), a = u ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, c = u ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
          t2.exports = function() {
            var t3 = n(o(this));
            return i(i(t3, a, ""), c, "");
          };
        }, 5855: (t2, e2, r2) => {
          "use strict";
          var o = r2(9122), n = r2(2273), i = r2(1035), u = r2(4385), a = r2(2484), c = r2(2638), p = o(a()), l = function(t3) {
            return i(t3), p(t3);
          };
          n(l, { getPolyfill: a, implementation: u, shim: c }), t2.exports = l;
        }, 2484: (t2, e2, r2) => {
          "use strict";
          var o = r2(4385);
          t2.exports = function() {
            return String.prototype.trim && "\u200B" === "\u200B".trim() && "\u180E" === "\u180E".trim() && "_\u180E" === "_\u180E".trim() && "\u180E_" === "\u180E_".trim() ? String.prototype.trim : o;
          };
        }, 2638: (t2, e2, r2) => {
          "use strict";
          var o = r2(2273), n = r2(2484);
          t2.exports = function() {
            var t3 = n();
            return o(String.prototype, { trim: t3 }, { trim: function() {
              return String.prototype.trim !== t3;
            } }), t3;
          };
        }, 9176: (t2) => {
          var e2, r2 = { a: "\u0A73", A: "\u0A05", e: "\u0A72", s: "\u0A38", h: "\u0A39", k: "\u0A15", K: "\u0A16", g: "\u0A17", G: "\u0A18", "|": "\u0A19", c: "\u0A1A", C: "\u0A1B", j: "\u0A1C", J: "\u0A1D", "\\": "\u0A1E", t: "\u0A1F", T: "\u0A20", f: "\u0A21", F: "\u0A22", x: "\u0A23", q: "\u0A24", Q: "\u0A25", d: "\u0A26", D: "\u0A27", n: "\u0A28", p: "\u0A2A", P: "\u0A2B", b: "\u0A2C", B: "\u0A2D", m: "\u0A2E", X: "\u0A2F", r: "\u0A30", l: "\u0A32", v: "\u0A35", V: "\u0A5C" }, o = [["[\u0A09, \u0A0A]", "\u0A73"], ["[\u0A06, \u0A06\u0A02, \u0A10, \u0A14]", "\u0A05"], ["[\u0A08, \u0A0F]", "\u0A72"]], n = function(t3, r3) {
            var o2 = e2.indexOf(t3[0]), i = e2.indexOf(r3[0]);
            return o2 === i ? n(t3.substr(1), r3.substr(1)) : o2 - i;
          };
          t2.exports = function(t3) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "english";
            "unicode" === i ? e2 = Object.values(r2) : "english" === i && (e2 = Object.keys(r2));
            var u = {};
            return t3.forEach(function(t4) {
              var r3;
              o.forEach(function(e3) {
                r3 = t4.replace(new RegExp(e3[0], "g"), e3[1]);
              });
              var n2 = r3.split("").filter(function(t5) {
                return e2.indexOf(t5) > 0;
              });
              u[t4] = n2.join("");
            }), Object.values(u).sort(n).map(function(t4) {
              return function(t5, e3) {
                return Object.keys(t5).find(function(r3) {
                  return t5[r3] === e3;
                });
              }(u, t4);
            });
          };
        }, 1544: (t2, e2, r2) => {
          r2(1040).shim(), t2.exports = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "" === t3 || "string" != typeof t3 ? t3 : ",".concat(t3.split("").map(function(t4) {
              return String(t4.charCodeAt(0)).padStart(3, "0");
            }).join(","), ",");
          };
        }, 4720: (t2) => {
          var e2 = [["E", "a"], ["\u0A13", "\u0A73"], ["<>", "a"], ["\u0A74", "\u0A73"], ["L", "l"], ["\u0A33", "\u0A32"], ["S", "s"], ["\u0A36", "\u0A38"], ["z", "j"], ["\u0A5B", "\u0A1C"], ["Z", "g"], ["\u0A5A", "\u0A17"], ["\\^", "K"], ["\u0A59", "\u0A16"], ["\u0192", "n"], ["\u0A28\u0A42\u0A70", "\u0A28"], ["&", "P"], ["\u0A5E", "\u0A2B"]], r2 = [["\u0A06", "\u0A05"], ["\u0A07", "\u0A72"], ["\u0A08", "\u0A72"], ["\u0A09", "\u0A73"], ["\u0A0A", "\u0A73"], ["\u0A0F", "\u0A72"], ["\u0A10", "\u0A05"], ["\u0A14", "\u0A05"]];
          t2.exports = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ("" === t3 || "string" != typeof t3) return t3;
            var n = t3;
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && e2.forEach(function(t4) {
              n = n.replace(new RegExp(t4[0], "g"), t4[1]);
            });
            var i = (n = n.replace(/\]/g, "").replace(/\[/g, "").replace(/॥/g, "").replace(/।/g, "").replace(/rhwau dUjw/g, "").replace(/rhwau/g, "").replace(/ਰਹਾਉ/g, "").replace(/ਰਹਾਉ ਦੂਜਾ/g, "").replace(/[0-9]/g, "").replace(/[੦-੯]/g, "").replace(/[;,.]/g, "")).split(" ").map(function(t4) {
              return t4 ? "i" !== t4[0] || o ? t4[0] : t4[1] : "";
            }).join("");
            return r2.forEach(function(t4) {
              i = i.replace(new RegExp(t4[0], "g"), t4[1]);
            }), o ? i.replace(/\|/g, "") : i;
          };
        }, 5619: (t2, e2, r2) => {
          var o = r2(9176), n = r2(1544), i = r2(4720), u = r2(2277), a = r2(812), c = r2(8392);
          t2.exports = { alphabetize: o, ascii: n, firstLetters: i, mainLetters: u, translit: a, unicode: c };
        }, 2277: (t2) => {
          var e2 = [["E", "a"], ["\u0A13", "\u0A73"], ["<>", "a"], ["\u0A74", "\u0A73"], ["L", "l"], ["\u0A33", "\u0A32"], ["S", "s"], ["\u0A36", "\u0A38"], ["z", "j"], ["\u0A5B", "\u0A1C"], ["Z", "g"], ["\u0A5A", "\u0A17"], ["\\^", "K"], ["\u0A59", "\u0A16"], ["\u0192", "n"], ["&", "P"], ["\u0A5E", "\u0A2B"]], r2 = [["H", "h"], ["R", "r"], ["\xAE", "r"], ["\xCD", "v"], ["\u0153", "q"], ["\xE7", "c"], ["\u2020", "t"], ["\u02DC", "n"], ["\xB4", "X"], ["\xCE", "X"], ["\xEC", "X"], ["\xED", "X"], ["\xCF", "X"]], o = [["\u0A06", "\u0A05"], ["\u0A07", "\u0A72"], ["\u0A08", "\u0A72"], ["\u0A09", "\u0A73"], ["\u0A0A", "\u0A73"], ["\u0A0F", "\u0A72"], ["\u0A10", "\u0A05"], ["\u0A14", "\u0A05"]];
          t2.exports = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("" === t3 || "string" != typeof t3) return t3;
            var i = t3;
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && e2.forEach(function(t4) {
              i = i.replace(new RegExp(t4[0], "g"), t4[1]);
            }), n ? (r2.forEach(function(t4) {
              i = i.replace(new RegExp(t4[0], "g"), t4[1]);
            }), i = i.replace(/੍/g, "").replace(/ੵ/g, "\u0A2F")) : i = i.replace(/[HR]/g, "").replace(/੍ਹ/g, "").replace(/੍ਰ/g, ""), o.forEach(function(t4) {
              i = i.replace(new RegExp(t4[0], "g"), t4[1]);
            }), i.replace(/[^A-Za-z\u0A00-\u0A7F ]/g, "").replace(/[uUiIyYwWoOMN]/g, "").replace(/[\u0A00-\u0A04]/g, "").replace(/[\u0A3C-\u0A51]/g, "").replace(/[\u0A60-\u0A71]/g, "").replace(/[ \s]+/g, " ").trim();
          };
        }, 812: (t2, e2, r2) => {
          var o = {};
          o.english = r2(8829), o.devnagri = r2(2647), o.ipa = r2(5737), o.shahmukhi = r2(1971), t2.exports = function(t3) {
            var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "english", r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return "all" === e3 ? Object.keys(o).reduce(function(e4, r4) {
              var n = e4;
              return n[r4] = o[r4](t3), n;
            }, {}) : null != r3 ? t3.split(" ").map(function(t4) {
              var n = t4, i = /[.,;]$/, u = n.match(i);
              n = n.replace(i, "");
              var a = r3.get(n);
              return a ? null != u ? a + u : a : o[e3](n);
            }).join(" ") : o[e3](t3);
          };
        }, 2647: (t2) => {
          function e2(t3, e3) {
            (null == e3 || e3 > t3.length) && (e3 = t3.length);
            for (var r3 = 0, o = Array(e3); r3 < e3; r3++) o[r3] = t3[r3];
            return o;
          }
          var r2 = [["i", "\u093F"], ["1", "\u0967"], ["2", "\u0968"], ["3", "\u0969"], ["4", "\u096A"], ["5", "\u096B"], ["6", "\u096C"], ["7", "\u096D"], ["8", "\u096E"], ["9", "\u096F"], ["0", "\u0966"], ["k", "\u0915"], ["K", "\u0916"], ["g", "\u0917"], ["G", "\u0918"], ["|", "\u0919"], ["V", "\u095C"], ["F", "\u0922"], ["c", "\u091A"], ["C", "\u091B"], ["j", "\u091C"], ["J", "\u091D"], ["\\", "\u091E"], ["t", "\u091F"], ["T", "\u0920"], ["f", "\u0921"], ["D", "\u0927"], ["x", "\u0923"], ["q", "\u0924"], ["Q", "\u0925"], ["d", "\u0926"], ["D", "\u0927"], ["n", "\u0928"], ["p", "\u092A"], ["P", "\u092B"], ["b", "\u092C"], ["B", "\u092D"], ["m", "\u092E"], ["X", "\u092F"], ["r", "\u0930"], ["l", "\u0932"], ["v", "\u0935"], ["S", "\u0936"], ["s", "\u0938"], ["h", "\u0939"], ["G", "\u091C\u094D\u091E"], ["A", "\u0905"], ["a", "\u0909"], ["w", "\u093E"], ["W", "\u093E\u0901"], ["I", "\u0940"], ["u", "\u0941"], ["U", "\u0942"], ["y", "\u0947"], ["Y", "\u0948"], ["e", "\u0907"], ["o", "\u094B"], ["O", "\u094C"], ["M", "\u0902"], ["R", "\u094D\u0930"], ["]", "\u0965"], ["&", "\u092B\u093C"], ["<", "\u0A74"], [">", ""], ["[", "\u0964"], ["\xA8", "\u0942"], ["\xAE", "\u094D\u0930"], ["\xDA", ":"], ["\xFC", "\u0941"], ["@", "\u094D"], ["E", "\u0913"], ["H", "\u094D\u0939"], ["L", "\u0933"], ["N", "\u0902"], ["\xE6", "\u093C"], ["Z", "\u0917\u093C"], ["^", "\u0916\u093C"], ["`", "\u094D"], ["z", "\u091C\u093C"], ["~", "\u094D"], ["\xA4", "\u094D"], ["\xB4", "\u094D\u092F"], ["\xB5", "\u0902"], ["\u02C6", "\u0902"], ["\xCD", "\u094D\u0935"], ["\xCE", "\u094D\u092F"], ["\xD8", ""], ["\xE7", "\u094D\u091A"], ["\u0153", "\u094D\u0924"], ["\u0167", ""], ["\u02DC", "\u094D\u0928"], ["\u2020", "\u094D\u091F"]];
          t2.exports = function(t3) {
            return r2.reduce(function(t4, r3) {
              var o, n, i = (n = 2, function(t5) {
                if (Array.isArray(t5)) return t5;
              }(o = r3) || function(t5, e3) {
                var r4 = null == t5 ? null : "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
                if (null != r4) {
                  var o2, n2, i2, u2, a2 = [], c2 = true, p = false;
                  try {
                    if (i2 = (r4 = r4.call(t5)).next, 0 === e3) {
                      if (Object(r4) !== r4) return;
                      c2 = false;
                    } else for (; !(c2 = (o2 = i2.call(r4)).done) && (a2.push(o2.value), a2.length !== e3); c2 = true) ;
                  } catch (t6) {
                    p = true, n2 = t6;
                  } finally {
                    try {
                      if (!c2 && null != r4.return && (u2 = r4.return(), Object(u2) !== u2)) return;
                    } finally {
                      if (p) throw n2;
                    }
                  }
                  return a2;
                }
              }(o, n) || function(t5, r4) {
                if (t5) {
                  if ("string" == typeof t5) return e2(t5, r4);
                  var o2 = {}.toString.call(t5).slice(8, -1);
                  return "Object" === o2 && t5.constructor && (o2 = t5.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(t5) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? e2(t5, r4) : void 0;
                }
              }(o, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()), u = i[0], a = i[1], c = t4;
              for (c = c.replace(/<>/gi, "\u0A74"), "i" === u && (c = c.replace(/i./gm, function(t5) {
                return t5.split("").reverse().join("");
              })), "`" === u && (c = c.replace(/(`|~|¤)./gm, function(t5) {
                return t5.repeat(2).slice(1);
              })), "@" === u && (c = c.replace(/.@/gm, function(t5) {
                return t5.repeat(2).slice(0, -1);
              })); c.includes(u); ) c = c.replace(u, a, "g");
              return [["\u0907\u0940", "\u0908"], ["\u0905\u0948", "\u0910"], ["\u0907\u093F", "\u0907"], ["\u0909\u0941", "\u0909"], ["\u0909\u0942", "\u090A"], ["\u0907\u0947", "\u090F"], ["\u0941\u0902", "\u0941\u0901"], ["\u0942\u0902", "\u0942\u0901"], ["\u093E\u0902", "\u093E\u0901"], ["\u0906\u0902", "\u0906\u0901"], ["\u0905\u093E\u0902", "\u0906\u0901"], ["\u093F\u094D\u0930", "\u0943"], ["\u0902\u0940", "\u0940\u0902"], ["\u0916\u094D\u0916", "\u0915\u094D\u0916"], ["\u0918\u094D\u0918", "\u0917\u094D\u0918"], ["\u091B\u094D\u091B", "\u091A\u094D\u091B"], ["\u091D\u094D\u091D", "\u091C\u094D\u091D"], ["\u0920\u094D\u0920", "\u091F\u094D\u0920"], ["\u0922\u094D\u0922", "\u0921\u094D\u0922"], ["\u0925\u094D\u0925", "\u0924\u094D\u0925"], ["\u0927\u094D\u0927", "\u0926\u094D\u0927"], ["\u092D\u094D\u092D", "\u092C\u094D\u092D"], ["\u0905\u093E", "\u0906"], ["\u0905\u094B", "\u0913"], ["\u0905\u094C", "\u0914"]].forEach(function(t5) {
                c = c.replace(new RegExp(t5[0], "g"), t5[1]);
              }), c;
            }, t3);
          };
        }, 8829: (t2, e2, r2) => {
          var o = r2(2419);
          t2.exports = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if ("" === t3 || "string" != typeof t3) return t3;
            var e3 = t3;
            [["\xDA", ":"], ["\u02C6", "N"], ["\xCD", "vY"], ["vYY", "vY"], ["\u0152", "\u0153"], ["\u2020", "t"], ["ey", "e"]].forEach(function(t4) {
              e3 = e3.replace(new RegExp(t4[0], "g"), t4[1]);
            });
            for (var r3 = (e3 = (e3 = (e3 = o(e3)).replace(/i./gm, function(t4) {
              return t4.split("").reverse().join("");
            })).split("")).length, n = function() {
              var t4 = e3[i], r4 = e3[i + 1] || " ", o2 = [], n2 = [];
              [["!", "!"], ['"', '"'], ["#", "#"], ["$", "$"], ["%", "%"], ["&", "ph"], ["'", "'"], ["(", "("], [")", ")"], ["*", "i"], ["+", "+"], [",", ","], ["-", "-"], [".", "."], ["/", "-"], [0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"], [8, "8"], [9, "9"], [":", ":"], [";", ";"], ["<", "ik"], ["=", "="], [">", "Oankaar"], ["?", "?"], ["@", "(h)"], ["A", "a"], ["B", "bh"], ["C", "chh"], ["D", "dh"], ["E", "o"], ["F", "dd"], ["G", "gh"], ["H", "h"], ["I", "ee"], ["J", "jh"], ["K", "kh"], ["L", "lh"], ["M", "(n)"], ["N", "(n)"], ["O", "au"], ["P", "f"], ["Q", "th"], ["R", "x"], ["S", "sh"], ["T", "Th"], ["U", "oo"], ["V", "R"], ["W", "aa(n)"], ["X", "y"], ["Y", "AI"], ["Z", "g(h)"], ["[", "|"], ["\\", "n(j)"], ["]", "||"], ["^", "khh"], ["_", "_"], ["`", "'"], ["a", "u"], ["b", "b"], ["c", "ch"], ["d", "dh"], ["e", "e"], ["f", "dd"], ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"], ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "t"], ["r", "r"], ["s", "s"], ["t", "T"], ["u", "u"], ["v", "v"], ["w", "aa"], ["x", "N"], ["y", "e"], ["z", "z"], ["{", "{"], ["|", "n(g)"], ["}", "}"], ["~", "'"], ["\xA1", "ikOankaar"], ["\xA2", "\xA2"], ["\xA3", "\xA3"], ["\xA4", ""], ["\xA5", "\xA5"], ["\xA7", "hoo"], ["\xA8", "oo"], ["\xAA", ""], ["\xAE", "r"], ["\xB0", ""], ["\xB1", "\xB1"], ["\xB4", "ye"], ["\xB5", "(n)"], ["\xB6", "\xB6"], ["\xB7", "\xB7"], ["\xBF", "x"], ["\xC5", "ik"], ["\xC6", "Oankaar"], ["\xC7", ""], ["\xCD", "vY"], ["\xCE", "y"], ["\xCF", "y"], ["\xD2", "||"], ["\xD3", ""], ["\xD4", ""], ["\xD8", ""], ["\xDA", ":"], ["\xE5", "Oankaar"], ["\xE6", ""], ["\xE7", "ch"], ["\xFC", "u"], ["\u0152", ""], ["\u0153", "t"], ["\u0192", "noo(n)"], ["\u02C6", "(n)"], ["\u02DC", "n"], ["\u2013", "\u2013"], ["\u2014", "\u2014"], ["\u2018", "'"], ["\u2019", "'"], ["\u201A", ""], ["\u201C", '"'], ["\u201D", '"'], ["\u2020", "T"], ["\u2022", "\u2022"], ["\u2026", "\u2026"], ["\u2030", ""]].forEach(function(t5) {
                o2.push(t5[0]), n2.push(t5[1]);
              }), " " !== t4 && (o2.indexOf(t4) > -1 ? t4 = n2[o2.indexOf(t4)] : Number.isNaN(t4 - parseFloat(t4)) && (t4 = "")), "" === t4 || -1 !== "aeiou ooaiee".indexOf(t4.toLowerCase()) || !/^[a-zA-Z]+$/.test(t4) || t4 === n2[o2.indexOf("N")] || t4 === n2[o2.indexOf("M")] || "hoo" === t4 || "ye" === t4 || "noo(n)" === t4 || t4 === n2[o2.indexOf("<")] || t4 === n2[o2.indexOf(">")] || !r4 || "" === r4 || -1 !== "iaeouyw".indexOf(r4.toLowerCase()) || -1 !== "I@ HR\xAA\xC5\xC6\xC7\xCD\xCF\xD2\xD3\xD4\xD8\xDA\xE5\xE6\xE7\xFC\u0152\u0153:[]()".indexOf(r4) || r4.toLowerCase().indexOf("i") > -1 && e3[i + 2] && " " === e3[i + 2] || (t4 = "".concat(t4, "a")), "e" === t4 && (e3[i - 1] || " " === e3[i - 1] || "]" === e3[i - 1]) && "i".indexOf(r4.toLowerCase()) > -1 && (t4 = "i"), t4 === n2[o2.indexOf("R")] && "i" === e3[i - 1] && (t4 = "i", e3[i - 1] = "r"), e3[i] = t4;
            }, i = 0; i < r3; i += 1) n();
            return e3 = (e3 = (e3 = (e3 = (e3 = (e3 = (e3 = (e3 = (e3 = (e3 = e3.join("")).replace(/[^aeiouy]i(\s|$|\|)/gm, function(t4) {
              return t4.replace("i", "");
            })).replace(/((m:|mahalaa|mahalu|ghar|gharu)\s*([0-9][0-7]?))/gm, function(t4, e4, r4, o2) {
              return "".concat(r4.replace("m:", "mahalaa"), " ").concat([" ", "pehilaa", "doojaa", "teejaa", "chauthhaa", "panjavaa", "chhayvaa", "satvaa", "atthvaa", "nauvaa", "dasvaa", "gayaarvaa", "baarvaa", "tayrvaa", "chaudavaa", "pandaravaa", "solavaa", "sataaravaa"][o2]);
            })).replace(/([aeiou]|oo|ai|ee)(ie)aaa/gm, function(t4) {
              return t4.replace("ie", "i");
            })).replace(/ih\s+|$/gm, function(t4) {
              return t4.replace("ih", "eh");
            })).replace(/aie\s+|$/gm, function(t4) {
              return t4.replace("ie", "ey");
            })).replace(/gura[dmbs][a-zA-Z]+/gm, function(t4) {
              return t4.replace("gura", "gur");
            })).replace(/mana[m][a-zA-Z]+/gm, function(t4) {
              return t4.replace("mana", "man");
            })).replace(/x/gm, function(t4) {
              return t4.replace("x", "r");
            })).replace(/mirat[a-zA-Z]+/gm, function(t4) {
              return t4.replace("mirat", "mrit");
            }), [["uu", "au"], [" ju ", "* JU *"], [" su ", "* SU *"], ["ahu ", "*AHU *"], ["au ", "*AU *"], ["u ", " "], ["\\* JU \\*", " ju "], ["\\* SU \\*", " su "], ["\\*AHU \\*", "ahu "], ["\\*AU \\*", "au "], ["hi ", "*HI *"], ["i ", " "], ["\\*HI \\*", "hi "], ["ai", "i"], ["AI", "ai"], ["aaa", "aa"], [" n ", " na "], [" t ", " ta "], ["(N)", "n"], ["ah ", "eh "], ["eee", "e'ee"], ["Aih", "ahai"], ["ii", "i"], ["eay", "ey"], ["jIA", "jee"], ["a'eh", "eh"], ["Re'ee", "Re'e"], ["re'ee", "re'e"], ["aaa", "aa"], [" au", " u"]].forEach(function(t4) {
              e3 = e3.replace(new RegExp(t4[0], "g"), t4[1]);
            }), e3;
          };
        }, 5737: (t2, e2, r2) => {
          var o = r2(2419);
          t2.exports = function(t3) {
            for (var e3 = t3, r3 = (e3 = (e3 = (e3 = o(e3)).replace(/i./gm, function(t4) {
              return t4.split("").reverse().join("");
            })).split("")).length, n = function() {
              var t4 = e3[i], r4 = e3[i + 1] || "", o2 = "EauaUAAwAYAOieeIeysShkK^gZG\\cCjzJtTfFxqQdDnpP&bBmXrlLvV\u0A71NM\xB4\xA8\xB5\xAE@\u02DC\u20200123456789a\xE7eHiI\xCD\xEE\xCEoO\xD8\u0153R\u0167uU\xDA\xFCwWyY\u0192\u0259\u0251\u025B\u0254\u026Aies\u0283hkk\u02B0q\u02B0Gg\u02B0G\u02B0\u0259\u0300Nt\u0361\u0283\u0255d\u0361\u0292z\u0256\u0361\u0290\u014B\u0288\u0288\u02B0\u0256\u0288\u0259\u0300\u0273t\u032At\u032A\u02B0d\u032At\u032A\u0259\u0300npf\u0278b\u0253mjrll\u02B0\u028B\u027D\u0A71\u207F\u014Bju\u026Ak o\u0259nk\u0251\u027E\u207F/\u02B3@n\u0288ot\u0361\u0283e\u02B0\u026Ai\u028Bjj\u0254\u0252t\u032A\u0279\u028Au\u028A\u0251\u0251\u207Fe\xE6nu", n2 = [], u = [];
              [["E", "o"], ["au", "o"], ["aU", "u"], ["A", "\u0259"], ["Aw", "\u0251"], ["AY", "\u025B"], ["AO", "\u0254"], ["ie", "\u026A"], ["eI", "i"], ["ey", "e"], ["s", "s"], ["S", "\u0283"], ["h", "h"], ["k", "k"], ["K", "k\u02B0"], ["^", "q\u02B0"], ["g", "G"], ["Z", "g\u02B0"], ["G", "G\u02B0\u0259\u0300"], ["|", "N"], ["c", "t\u0361\u0283"], ["C", "\u0255"], ["j", "d\u0361\u0292"], ["z", "z"], ["J", "\u0256\u0361\u0290"], ["\\", "\u014B"], ["t", "\u0288"], ["T", "\u0288\u02B0"], ["f", "\u0256"], ["F", "\u0288\u0259\u0300"], ["x", "\u0273"], ["q", "t\u032A"], ["Q", "t\u032A\u02B0"], ["d", "d\u032A"], ["D", "t\u032A\u0259\u0300"], ["n", "n"], ["p", "p"], ["P", "f"], ["&", "\u0278"], ["b", "b"], ["B", "\u0253"], ["m", "m"], ["X", "j"], ["r", "r"], ["l", "l"], ["L", "l\u02B0"], ["v", "\u028B"], ["V", "\u027D"], ["\u0A71", "\u0A71"], ["N", "\u207F"], ["M", "\u014B"], ["\xB4", "j"], ["\xA8", "u"], ["<", "\u026Ak o\u0259\u014B"], [">", "k\u0251\u027E"], ["\xB5", "\u207F"], ["-", "-"], [",", ","], [":", ":"], ["!", "!"], ["?", "?"], ["/", "/"], ["\u2018", "\u2018"], ["\u2019", "\u2019"], ["(", "("], [")", ")"], ["[", "."], ["]", "."], ["\xAE", "\u02B3"], ["@", "@"], ["\u02DC", "n"], ["\u2020", "\u0288"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "o"], ["\xE7", "t\u0361\u0283"], ["e", "e"], ["H", "\u02B0"], ["i", "\u026A"], ["I", "i"], ["\xCD", "\u028B"], ["\xEE", "j"], ["\xCE", "j"], ["o", "\u0254"], ["O", "\u0252"], ["\xD8", ""], ["\u0153", "t\u032A"], ["R", "\u0279"], ["\u0167", ""], ["u", "\u028A"], ["U", "u"], ["\xDA", ":"], ["\xFC", "\u028A"], ["w", "\u0251"], ["W", "\u0251\u207F"], ["y", "e"], ["Y", "\xE6"], ["\u0192", "nu\u014B"]].forEach(function(t5) {
                n2.push(t5[0]), u.push(t5[1]);
              }), " " !== t4 && (n2.indexOf(t4) > -1 ? t4 = u[n2.indexOf(t4)] : Number.isNaN(t4 - parseFloat(t4)) && (t4 = "")), "" !== t4 && -1 === "\u0259\u0251e\u0254\u0275 u\xE6ij\u026A\u0259\u025B\u028A\u0300".indexOf(t4) && (/^[a-zA-Z]+$/.test(t4) || o2.indexOf(t4) > -1) && t4 !== u[n2.indexOf("N")] && t4 !== u[n2.indexOf("M")] && "nu\u207F" !== t4 && t4 !== u[n2.indexOf("<")] && t4 !== u[n2.indexOf(">")] && "e" !== t4 && r4 && "" !== r4 && -1 === "ia\u0251eouyw\u026A\u0259\u0300\u025B\u028A".indexOf(r4.toLowerCase()) && (/^[a-zA-Z]+$/.test(r4) || o2.indexOf(r4) > -1) && -1 === "@ HR\xAA\xC5\xC6\xC7\xCD\xCF\xD2\xD3\xD4\xD8\xDA\xE5\xE6\xE7\xFC\u0152\u0153:\u026A[]()".indexOf(r4) && (t4 = "".concat(t4, "\u0259")), e3[i] = t4;
            }, i = 0; i < r3; i += 1) n();
            return e3 = (e3 = (e3 = (e3 = e3.join("")).replace(/[^ɑⁿəeæɪiɵouyɒɔɛ]ɪ(\s|$|\|)/gm, function(t4) {
              return t4.replace("\u026A", "");
            })).replace(/((m:|məhəlɑ|məhəlɵ|Gʰə̀ɾɵ|Gʰə̀ɾ)\s*([0-9]0?))/gm, function(t4, e4, r4, o2) {
              return "".concat(r4.replace("m:", "mahalaa"), " ").concat([" ", "p\u0259h\u026Al\u0251", "d\u032Aud\u0361\u0292\u0251", "t\u032Aid\u0361\u0292\u0251", "t\u0361\u0283\u0275\u0275t\u032A\u02B0\u0251", "p\u0259\u014Bd\u0361\u0292\u028B\u0251", "t\u0361\u0255e\u028B\u0251", "s\u0259t\u032A\u028B\u0251", "\u0259\u0288\u02B0\u028B\u0251", "n\u0251\u028B\u0251", "d\u032As\u0259\u028B\u0251", "G\u026A\u0259\u0251\u027E\u028B\u0251", "b\u0251\u027Eh\u0259\u028B\u0251", "t\u032Ae\u027E\u028B\u0251", "t\u0361\u0283\u0252d\u032A\u02B0\u028B\u0251", "p\u0259\u014Bd\u032A\u02B0\u027E\u028B\u0251", "s\u0254l\u02B0\u028B\u0251", "s\u0259t\u032A\u0251\u027E\u028B\u0251"][o2]);
            })).replace(/ə̀[iaɑeouywɪəʊ̀ɔ]/gm, function(t4) {
              return t4.replace("\u0259\u0300", "");
            }), [["(?!(s)).r\u0259\u0253(?!(s)).", function(t4) {
              return t4.replace("r\u0259\u0253", "r\u0253");
            }], ["ei\u0259", "ei"], [" n ", " n\u0259 "], [" k ", " k\u0259 "], ["\u0259\u0259", "\u0259"], ["\u0259i", "i"], ["e\u026A\u0259", "\u026A"], ["\u028A ", " "], ["\u0259\xE6", "\xE6"], ["\u0251eih", "\u0251\u026A\xE6h"], [" \\.", "."]].forEach(function(t4) {
              e3 = e3.replace(new RegExp(t4[0], "g"), t4[1]);
            }), e3;
          };
        }, 1971: (t2, e2, r2) => {
          function o(t3, e3) {
            (null == e3 || e3 > t3.length) && (e3 = t3.length);
            for (var r3 = 0, o2 = Array(e3); r3 < e3; r3++) o2[r3] = t3[r3];
            return o2;
          }
          var n = r2(2419), i = [["ieAw", "\u0627\u06CC\u0627"], ["iE", "\u0624"], ["Un", "\u064C"], ["Mp", "\u0645\u067E"], ["Mn", "\u0646\u0651"], ["ie", "\u0650\u0627"], ["au", "\u0627\u064F"], ["aU", "\u0627\u064F\u0648"], ["eI", "\u0627\u06CC"], ["ey", "\u0627\u06D2"], ["Aw", "\u0622"], ["AY", "\u0627\u064E\u06D2"], ["AO", "\u0627\u064E\u0648"], ["AW", "\u0622\u06BA"], ["XI", "\u06CC"], ["k\xE6", "\u0642"], ["<>", "\u0627\u06A9 \u0627\u0648\u0646\u06A9\u0627\u0631"], ["\u2020", "\u0679"], ["\u02DC", "\u0646"], ["\xCE", "\u06D2"], ["\xE7", "\u0686"], ["\u0153", "\u062A"], ["M", "\u06BA"], ["H", "\u06BE"], ["i", "\u0650"], ["I", "\u06CC\u0650"], ["u", "\u064F"], ["U", "\u064F\u0648"], ["y", "\u06D2"], ["Y", "\u064E\u06D2"], ["N", "\u06BA"], ["o", "\u0648"], ["O", "\u064E\u0648"], ["R", "\u0631"], ["w", "\u0627"], ["W", "\u0627\u06BA"], ["\xB4", "\u06D2"], ["@", "\u06BE"], ["`", "\u0651"], ["\xCD", "\u0648"], ["|", "\u0646\u06AF"], ["a", "\u0627"], ["A", "\u0627"], ["b", "\u0628"], ["B", "\u0628\u06BE"], ["c", "\u0686"], ["C", "\u0686\u06BE"], ["d", "\u062F"], ["D", "\u062F\u06BE"], ["e", "\u0627"], ["E", "\u0627\u0648"], ["f", "\u0688"], ["F", "\u0688\u06BE"], ["g", "\u06AF"], ["G", "\u06AF\u06BE"], ["h", "\u0647"], ["j", "\u062C"], ["J", "\u062C\u06BE"], ["k", "\u06A9"], ["K", "\u06A9\u06BE"], ["l", "\u0644"], ["L", "\u0644\u0615"], ["m", "\u0645"], ["n", "\u0646"], ["p", "\u067E"], ["P", "\u067E\u06BE"], ["q", "\u062A"], ["Q", "\u062A\u06BE"], ["r", "\u0631"], ["s", "\u0633"], ["S", "\u0634"], ["t", "\u0679"], ["T", "\u0679\u06BE"], ["v", "\u0648"], ["V", "\u0691"], ["x", "\u0768"], ["X", "\u06D2"], ["z", "\u0632"], ["Z", "\u063A"], ["^", "\u062E"], ["&", "\u0641"], ["\\", "\u0646\u062C"], ["1", "\u06F1"], ["2", "\u06F2"], ["3", "\u06F3"], ["4", "\u06F4"], ["5", "\u06F5"], ["6", "\u06F6"], ["7", "\u06F7"], ["8", "\u06F8"], ["9", "\u06F9"], ["0", "\u06F0"], ["[", "\u06D4"], ["]", "\u06D4\u06D4"], ["\xE6", ""]];
          t2.exports = function(t3) {
            return i.reduce(function(t4, e3) {
              var r3, i2, u = (i2 = 2, function(t5) {
                if (Array.isArray(t5)) return t5;
              }(r3 = e3) || function(t5, e4) {
                var r4 = null == t5 ? null : "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
                if (null != r4) {
                  var o2, n2, i3, u2, a2 = [], c2 = true, p2 = false;
                  try {
                    if (i3 = (r4 = r4.call(t5)).next, 0 === e4) {
                      if (Object(r4) !== r4) return;
                      c2 = false;
                    } else for (; !(c2 = (o2 = i3.call(r4)).done) && (a2.push(o2.value), a2.length !== e4); c2 = true) ;
                  } catch (t6) {
                    p2 = true, n2 = t6;
                  } finally {
                    try {
                      if (!c2 && null != r4.return && (u2 = r4.return(), Object(u2) !== u2)) return;
                    } finally {
                      if (p2) throw n2;
                    }
                  }
                  return a2;
                }
              }(r3, i2) || function(t5, e4) {
                if (t5) {
                  if ("string" == typeof t5) return o(t5, e4);
                  var r4 = {}.toString.call(t5).slice(8, -1);
                  return "Object" === r4 && t5.constructor && (r4 = t5.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t5) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? o(t5, e4) : void 0;
                }
              }(r3, i2) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()), a = u[0], c = u[1], p = t4;
              for (p = n(p), "i" === a && (p = p.replace(/i./gm, function(t5) {
                return t5.split("").reverse().join("");
              })), "`" === a && (p = p.replace(/(`|~|¤)./gm, function(t5) {
                return t5.split("").reverse().join("");
              })), p = p.replace(/(\S[^h])([iu])/m, "$1"); p.includes(a); ) p = p.replace(a, c);
              return [["\u0650\u0646", "\u064D\u0646"]].forEach(function(t5) {
                p = p.replace(new RegExp(t5[0], "g"), t5[1]);
              }), p;
            }, t3);
          };
        }, 8392: (t2) => {
          var e2 = { a: "\u0A73", A: "\u0A05", s: "\u0A38", S: "\u0A36", d: "\u0A26", D: "\u0A27", f: "\u0A21", F: "\u0A22", g: "\u0A17", G: "\u0A18", h: "\u0A39", H: "\u0A4D\u0A39", j: "\u0A1C", J: "\u0A1D", k: "\u0A15", K: "\u0A16", l: "\u0A32", L: "\u0A33", q: "\u0A24", Q: "\u0A25", w: "\u0A3E", W: "\u0A3E\u0A02", e: "\u0A72", E: "\u0A13", r: "\u0A30", R: "\u0A4D\u0A30", "\xAE": "\u0A4D\u0A30", t: "\u0A1F", T: "\u0A20", y: "\u0A47", Y: "\u0A48", u: "\u0A41", \u00FC: "\u0A41", U: "\u0A42", "\xA8": "\u0A42", i: "\u0A3F", I: "\u0A40", o: "\u0A4B", O: "\u0A4C", p: "\u0A2A", P: "\u0A2B", z: "\u0A5B", Z: "\u0A5A", x: "\u0A23", X: "\u0A2F", c: "\u0A1A", C: "\u0A1B", v: "\u0A35", V: "\u0A5C", b: "\u0A2C", B: "\u0A2D", n: "\u0A28", \u0192: "\u0A28\u0A42\u0A70", N: "\u0A02", "\u02C6": "\u0A02", m: "\u0A2E", M: "\u0A70", \u00B5: "\u0A70", "`": "\u0A71", "~": "\u0A71", "\xA4": "\u0A71", \u00CD: "\u0A4D\u0A35", \u00E7: "\u0A4D\u0A1A", "\u2020": "\u0A4D\u0A1F", \u0153: "\u0A4D\u0A24", "\u02DC": "\u0A4D\u0A28", "\xB4": "\u0A75", \u00CF: "\u0A75", \u00E6: "\u0A3C", \u00CE: "\u0A4D\u0A2F", \u00EC: "\u0A2F", \u00ED: "\u0A4D\u0A2F", 1: "\u0A67", 2: "\u0A68", 3: "\u0A69", 4: "\u0A6A", 5: "\u0A6B", 6: "\u0A6C", "^": "\u0A59", 7: "\u0A6D", "&": "\u0A5E", 8: "\u0A6E", 9: "\u0A6F", 0: "\u0A66", "\\": "\u0A1E", "|": "\u0A19", "[": "\u0964", "]": "\u0965", "<": "\u0A74", "\xA1": "\u0A74", \u00C5: "\u0A74", \u00DA: "\u0A03", \u00C7: "\u262C", "@": "\u0A51", "\u201A": "\u2741", "\u2022": "\u0A76", " ": " " }, r2 = { \u0A07: "ie", \u0A09: "au", \u0A0A: "aU", \u0A06: "Aw", \u0A06\u0A02: "AW", \u0A10: "AY", \u0A14: "AO", \u0A08: "eI", \u0A0F: "ey", "\u0A4B\u0A41": "uo", "\u0A4D\u0A35": "\xCD", "\u0A4D\u0A1A": "\xE7", "\u0A4D\u0A1F": "\u2020", "\u0A4D\u0A24": "\u0153", "\u0A4D\u0A28": "\u02DC", "\u0A75": "\xB4", "\u0A3C": "\xE6", "\u0A4D\u0A2F": "\xCE", \u0A28\u0A42\u0A70: "\u0192", "\u0A4D\u0A39": "H", "\u0A4D\u0A30": "R", "\uF051": "\u2081\u2085", "\u0A66": "0", "\u0A67": "1", "\u0A68": "2", "\u0A69": "3", "\u0A6A": "4", "\u0A6B": "5", "\u0A6C": "6", "\u0A6D": "7", "\u0A6E": "8", "\u0A6F": "9", \u0A73: "a", \u0A05: "A", \u0A38: "s", \u0A36: "S", \u0A26: "d", \u0A27: "D", \u0A21: "f", \u0A22: "F", \u0A17: "g", \u0A18: "G", \u0A39: "h", \u0A1C: "j", \u0A1D: "J", \u0A15: "k", \u0A16: "K", \u0A32: "l", \u0A33: "L", \u0A24: "q", \u0A25: "Q", "\u0A3E": "w", "\u0A3E\u0A02": "W", \u0A72: "e", \u0A13: "E", \u0A30: "r", \u0A1F: "t", \u0A20: "T", "\u0A47": "y", "\u0A48": "Y", "\u0A41": "u", "\u0A42": "U", "\u0A3F": "i", "\u0A40": "I", "\u0A4B": "o", "\u0A4C": "O", \u0A2A: "p", \u0A2B: "P", \u0A5B: "z", \u0A5A: "Z", \u0A23: "x", \u0A2F: "X", \u0A1A: "c", \u0A1B: "C", \u0A35: "v", \u0A5C: "V", \u0A2C: "b", \u0A2D: "B", \u0A28: "n", "\u0A02": "N", \u0A2E: "m", "\u0A70": "M", "\u0A71": "`", \u0A59: "^", \u0A5E: "&", \u0A1E: "\\", \u0A19: "|", "\u0964": "[", "\u0965": "]", \u0A74: "<>", "\u0A03": "\xDA", "\u262C": "\xC7", "\u0A51": "@", "\u2741": "\u201A", "\u0A76": "\u2022", "\uF04A": "\u2081", "\uF04B": "\u2082", "\uF04C": "\u2083", "\uF04D": "\u2084", "\uF04E": "\u2085", "\uF04F": "\u2086", "\uF050": "\u2088", " ": " ", "\uF045": "\u2081", "\uF046": "\u2082", "\uF047": "\u2083", "\uF048": "\u2084", "\uF049": "\u2086" }, o = ["@W", "@w", "@o", "@O", "@y", "@Y", "@\xFC", "@`", "\xCDY", "Ry", "RY", "RM", "RN", "YN", "yN", "YM", "yM", "uN", "UN", "\xFCN", "uM", "UM", "\xFCM", "R`", "u`", "U`", "\xFC`", "I\u02C6", "IN"], n = ["H", "R", "\xAE", "\xCD", "\xE7", "\u2020", "\u0153", "\u02DC", "\xB4", "\xCE", "\xCF", "\xED", "\xE6"], i = ["\u0A47", "\u0A48", "\u0A4B", "\u0A4C"], u = ["\u0A38\u0A3C", "\u0A16\u0A3C", "\u0A17\u0A3C", "\u0A1C\u0A3C", "\u0A2B\u0A3C", "\u0A32\u0A3C"], a = { \u0A38\u0A3C: "S", \u0A16\u0A3C: "^", \u0A17\u0A3C: "Z", \u0A1C\u0A3C: "z", \u0A2B\u0A3C: "&", \u0A32\u0A3C: "L" };
          t2.exports = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("" === t3 || "string" != typeof t3) return t3;
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return function() {
              for (var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e3 = [], o2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(""), n2 = 0; n2 < o2.length; n2 += 1) {
                var c2 = o2[n2], p2 = o2[n2 + 1], l2 = o2[n2 + 2];
                if (u.includes(c2 + p2)) t4 ? e3.push(a[c2 + p2]) : e3.push(r2[c2] + r2[p2]), n2 += 1;
                else if ("\u0A3F" === c2) {
                  var f2 = e3.pop();
                  e3.push("i"), e3.push(f2);
                } else if ("\u0A4D" === c2) {
                  if ("\u0A3F" === l2) {
                    var y2 = e3.pop();
                    e3.push("i"), e3.push(y2), n2 += 1;
                  }
                  e3.push(r2[c2 + p2]), "\u0A41" === l2 ? (e3.push("\xFC"), n2 += 1) : "\u0A42" === l2 && (e3.push("\xA8"), n2 += 1), n2 += 1;
                } else "\u0A51" === c2 || "\u0A75" === c2 ? (e3.push(r2[c2] || c2), "\u0A41" === p2 ? (e3.push("\xFC"), n2 += 1) : "\u0A42" === p2 && (e3.push("\xA8"), n2 += 1)) : "\u0A28" === c2 && "\u0A42" === p2 && "\u0A70" === l2 ? (e3.push("\u0192"), n2 += 2) : "\u0A4B" === c2 && "\u0A41" === p2 ? (e3.push(r2[c2 + p2]), n2 += 1) : "\u0A71" === c2 && i.includes(l2) ? e3.push("\xA4") : "\u0A3E" === c2 && "\u0A02" === p2 ? (e3.push("W"), n2 += 1) : "\u0A06" === c2 && "\u0A02" === p2 ? (e3.push("AW"), n2 += 1) : "\u0A08" === c2 && "\uF03D" === p2 ? (e3.push("e\u02C6\xD8I"), n2 += 1) : "\u0A08" === c2 && "\uF034" === p2 ? (e3.push("e\xB5\xD8I"), n2 += 1) : "\u0A02" === c2 && "\u0A40" === p2 || "\u0A40" === c2 && "\uF03D" === p2 ? (e3.push("\u02C6\xD8I"), n2 += 1) : "\u0A70" === c2 && "\u0A40" === p2 || "\u0A40" === c2 && "\uF034" === p2 ? (e3.push("\xB5\xD8I"), n2 += 1) : e3.push(r2[c2] || c2);
              }
              return e3.join("");
            }(t3, c);
            var p = "", l = t3.replace(/>/gi, "").replace(/Ø/gi, "").replace(/Æ/g, "");
            o.forEach(function(t4) {
              l = l.replace(new RegExp(t4.split("").reverse().join(""), "g"), t4);
            });
            for (var f = l.split(""), y = 0; y < f.length; y += 1) {
              var s = f[y], b = f[y + 1], m = f[y + 2];
              if ("i" === s) null != b ? ("e" === b ? p += "\u0A07" : n.includes(m) ? (p += e2[b], p += e2[m], p += "\u0A3F", y += 1) : (p += e2[b], p += "\u0A3F"), y += 1) : p += e2[s];
              else if ("a" === s) switch (b) {
                case "u":
                  p += "\u0A09", y += 1;
                  break;
                case "U":
                  p += "\u0A0A", y += 1;
                  break;
                default:
                  p += e2[s];
              }
              else if ("A" === s) switch (b) {
                case "w":
                  p += "\u0A06", y += 1;
                  break;
                case "W":
                  p += "\u0A06\u0A02", y += 1;
                  break;
                case "Y":
                  p += "\u0A10", y += 1;
                  break;
                case "O":
                  p += "\u0A14", y += 1;
                  break;
                default:
                  p += e2[s];
              }
              else if ("e" === s) switch (b) {
                case "I":
                  p += "\u0A08", y += 1;
                  break;
                case "y":
                  p += "\u0A0F", y += 1;
                  break;
                default:
                  p += e2[s];
              }
              else if ("1" === s && "E" === b && "\xE5" === m) p += "\u0A74", y += 2;
              else if ("u" === s && "o" === b) p += "\u0A4B\u0A41", y += 1;
              else if (c && "\xE6" === b) switch (s) {
                case "s":
                  p += "\u0A36", y += 1;
                  break;
                case "j":
                  p += "\u0A5B", y += 1;
                  break;
                case "K":
                  p += "\u0A59", y += 1;
                  break;
                case "g":
                  p += "\u0A5A", y += 1;
                  break;
                case "P":
                  p += "\u0A5E", y += 1;
                  break;
                case "l":
                  p += "\u0A33", y += 1;
                  break;
                default:
                  p += e2[s];
              }
              else p += e2[s] || s;
            }
            return p;
          };
        }, 5958: (t2, e2, r2) => {
          "use strict";
          var o = r2(6400), n = o("%Number%"), i = o("%RegExp%"), u = r2(2268), a = o("%parseInt%"), c = r2(9466), p = r2(2724), l = c("String.prototype.slice"), f = p(/^0b[01]+$/i), y = p(/^0o[0-7]+$/i), s = p(/^[-+]0x[0-9a-f]+$/i), b = p(new i("[" + ["\x85", "\u200B", "\uFFFE"].join("") + "]", "g")), m = r2(5855);
          t2.exports = function t3(e3) {
            if ("string" != typeof e3) throw new u("Assertion failed: `argument` is not a String");
            if (f(e3)) return n(a(l(e3, 2), 2));
            if (y(e3)) return n(a(l(e3, 2), 8));
            if (b(e3) || s(e3)) return NaN;
            var r3 = m(e3);
            return r3 !== e3 ? t3(r3) : n(e3);
          };
        }, 1711: (t2, e2, r2) => {
          "use strict";
          var o = r2(1167), n = r2(2241), i = r2(2421), u = r2(1649);
          t2.exports = function(t3) {
            var e3 = o(t3);
            return i(e3) || 0 === e3 ? 0 : u(e3) ? n(e3) : e3;
          };
        }, 6094: (t2, e2, r2) => {
          "use strict";
          var o = r2(8001), n = r2(1711);
          t2.exports = function(t3) {
            var e3 = n(t3);
            return e3 <= 0 ? 0 : e3 > o ? o : e3;
          };
        }, 1167: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = r2(6400), i = r2(2268), u = n("%Number%"), a = r2(281), c = r2(2313), p = r2(5958);
          t2.exports = function(t3) {
            var e3 = a(t3) ? t3 : c(t3, u);
            if ("symbol" === o(e3)) throw new i("Cannot convert a Symbol value to a number");
            if ("bigint" == typeof e3) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
            return "string" == typeof e3 ? p(e3) : u(e3);
          };
        }, 2313: (t2, e2, r2) => {
          "use strict";
          var o = r2(2934);
          t2.exports = function(t3) {
            return arguments.length > 1 ? o(t3, arguments[1]) : o(t3);
          };
        }, 367: (t2, e2, r2) => {
          "use strict";
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          var n = r2(6400)("%String%"), i = r2(2268);
          t2.exports = function(t3) {
            if ("symbol" === o(t3)) throw new i("Cannot convert a Symbol value to a string");
            return n(t3);
          };
        }, 5557: (t2) => {
          "use strict";
          var e2 = Math.floor;
          t2.exports = function(t3) {
            return "bigint" == typeof t3 ? t3 : e2(t3);
          };
        }, 2241: (t2, e2, r2) => {
          "use strict";
          var o = r2(5557), n = r2(2268);
          t2.exports = function(t3) {
            if ("number" != typeof t3 && "bigint" != typeof t3) throw new n("argument must be a Number or a BigInt");
            var e3 = t3 < 0 ? -o(-t3) : o(t3);
            return 0 === e3 ? 0 : e3;
          };
        }, 1649: (t2, e2, r2) => {
          "use strict";
          var o = r2(2421);
          t2.exports = function(t3) {
            return ("number" == typeof t3 || "bigint" == typeof t3) && !o(t3) && t3 !== 1 / 0 && t3 !== -1 / 0;
          };
        }, 2421: (t2) => {
          "use strict";
          t2.exports = Number.isNaN || function(t3) {
            return t3 != t3;
          };
        }, 281: (t2) => {
          "use strict";
          function e2(t3) {
            return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, e2(t3);
          }
          t2.exports = function(t3) {
            return null === t3 || "function" != typeof t3 && "object" !== e2(t3);
          };
        }, 8001: (t2) => {
          "use strict";
          t2.exports = Number.MAX_SAFE_INTEGER || 9007199254740991;
        } }, e = {};
        function r(o) {
          var n = e[o];
          if (void 0 !== n) return n.exports;
          var i = e[o] = { exports: {} };
          return t[o](i, i.exports, r), i.exports;
        }
        return r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t2) {
            if ("object" == typeof window) return window;
          }
        }(), r(5619);
      })());
    }
  });
  return require_anvaad();
})();
