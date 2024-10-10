import Yn, { createElement as ho, useState as mo, createRef as fo } from "react";
var zr = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function po() {
  if (Gn) return at;
  Gn = 1;
  var b = Yn, z = Symbol.for("react.element"), N = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, D = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(P, G, n0) {
    var J, m0 = {}, x0 = null, S0 = null;
    n0 !== void 0 && (x0 = "" + n0), G.key !== void 0 && (x0 = "" + G.key), G.ref !== void 0 && (S0 = G.ref);
    for (J in G) T.call(G, J) && !w.hasOwnProperty(J) && (m0[J] = G[J]);
    if (P && P.defaultProps) for (J in G = P.defaultProps, G) m0[J] === void 0 && (m0[J] = G[J]);
    return { $$typeof: z, type: P, key: x0, ref: S0, props: m0, _owner: D.current };
  }
  return at.Fragment = N, at.jsx = I, at.jsxs = I, at;
}
var lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function go() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Yn, z = Symbol.for("react.element"), N = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), P = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), n0 = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), m0 = Symbol.for("react.memo"), x0 = Symbol.for("react.lazy"), S0 = Symbol.for("react.offscreen"), B0 = Symbol.iterator, b0 = "@@iterator";
    function X(l) {
      if (l === null || typeof l != "object")
        return null;
      var M = B0 && l[B0] || l[b0];
      return typeof M == "function" ? M : null;
    }
    var O = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function e0(l) {
      {
        for (var M = arguments.length, S = new Array(M > 1 ? M - 1 : 0), H = 1; H < M; H++)
          S[H - 1] = arguments[H];
        ae("error", l, S);
      }
    }
    function ae(l, M, S) {
      {
        var H = O.ReactDebugCurrentFrame, K = H.getStackAddendum();
        K !== "" && (M += "%s", S = S.concat([K]));
        var R = S.map(function(j) {
          return String(j);
        });
        R.unshift("Warning: " + M), Function.prototype.apply.call(console[l], console, R);
      }
    }
    var F0 = !1, R0 = !1, ge = !1, le = !1, U0 = !1, D0;
    D0 = Symbol.for("react.module.reference");
    function Y0(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === T || l === w || U0 || l === D || l === n0 || l === J || le || l === S0 || F0 || R0 || ge || typeof l == "object" && l !== null && (l.$$typeof === x0 || l.$$typeof === m0 || l.$$typeof === I || l.$$typeof === P || l.$$typeof === G || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === D0 || l.getModuleId !== void 0));
    }
    function N0(l, M, S) {
      var H = l.displayName;
      if (H)
        return H;
      var K = M.displayName || M.name || "";
      return K !== "" ? S + "(" + K + ")" : S;
    }
    function t0(l) {
      return l.displayName || "Context";
    }
    function l0(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && e0("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case T:
          return "Fragment";
        case N:
          return "Portal";
        case w:
          return "Profiler";
        case D:
          return "StrictMode";
        case n0:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case P:
            var M = l;
            return t0(M) + ".Consumer";
          case I:
            var S = l;
            return t0(S._context) + ".Provider";
          case G:
            return N0(l, l.render, "ForwardRef");
          case m0:
            var H = l.displayName || null;
            return H !== null ? H : l0(l.type) || "Memo";
          case x0: {
            var K = l, R = K._payload, j = K._init;
            try {
              return l0(j(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w0 = Object.assign, J0 = 0, ce, Ce, be, Q0, Ne, F, Oe;
    function ht() {
    }
    ht.__reactDisabledLog = !0;
    function qe() {
      {
        if (J0 === 0) {
          ce = console.log, Ce = console.info, be = console.warn, Q0 = console.error, Ne = console.group, F = console.groupCollapsed, Oe = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: ht,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        J0++;
      }
    }
    function dt() {
      {
        if (J0--, J0 === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w0({}, l, {
              value: ce
            }),
            info: w0({}, l, {
              value: Ce
            }),
            warn: w0({}, l, {
              value: be
            }),
            error: w0({}, l, {
              value: Q0
            }),
            group: w0({}, l, {
              value: Ne
            }),
            groupCollapsed: w0({}, l, {
              value: F
            }),
            groupEnd: w0({}, l, {
              value: Oe
            })
          });
        }
        J0 < 0 && e0("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = O.ReactCurrentDispatcher, $e;
    function Ie(l, M, S) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (K) {
            var H = K.stack.trim().match(/\n( *(at )?)/);
            $e = H && H[1] || "";
          }
        return `
` + $e + l;
      }
    }
    var Ue = !1, Le;
    {
      var Ht = typeof WeakMap == "function" ? WeakMap : Map;
      Le = new Ht();
    }
    function mt(l, M) {
      if (!l || Ue)
        return "";
      {
        var S = Le.get(l);
        if (S !== void 0)
          return S;
      }
      var H;
      Ue = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = ee.current, ee.current = null, qe();
      try {
        if (M) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (E0) {
              H = E0;
            }
            Reflect.construct(l, [], j);
          } else {
            try {
              j.call();
            } catch (E0) {
              H = E0;
            }
            l.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E0) {
            H = E0;
          }
          l();
        }
      } catch (E0) {
        if (E0 && H && typeof E0.stack == "string") {
          for (var V = E0.stack.split(`
`), T0 = H.stack.split(`
`), f = V.length - 1, a0 = T0.length - 1; f >= 1 && a0 >= 0 && V[f] !== T0[a0]; )
            a0--;
          for (; f >= 1 && a0 >= 0; f--, a0--)
            if (V[f] !== T0[a0]) {
              if (f !== 1 || a0 !== 1)
                do
                  if (f--, a0--, a0 < 0 || V[f] !== T0[a0]) {
                    var g = `
` + V[f].replace(" at new ", " at ");
                    return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), typeof l == "function" && Le.set(l, g), g;
                  }
                while (f >= 1 && a0 >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, ee.current = R, dt(), Error.prepareStackTrace = K;
      }
      var ue = l ? l.displayName || l.name : "", ne = ue ? Ie(ue) : "";
      return typeof l == "function" && Le.set(l, ne), ne;
    }
    function _t(l, M, S) {
      return mt(l, !1);
    }
    function jt(l) {
      var M = l.prototype;
      return !!(M && M.isReactComponent);
    }
    function Pe(l, M, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return mt(l, jt(l));
      if (typeof l == "string")
        return Ie(l);
      switch (l) {
        case n0:
          return Ie("Suspense");
        case J:
          return Ie("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case G:
            return _t(l.render);
          case m0:
            return Pe(l.type, M, S);
          case x0: {
            var H = l, K = H._payload, R = H._init;
            try {
              return Pe(R(K), M, S);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, ft = {}, xe = O.ReactDebugCurrentFrame;
    function O0(l) {
      if (l) {
        var M = l._owner, S = Pe(l.type, l._source, M ? M.type : null);
        xe.setExtraStackFrame(S);
      } else
        xe.setExtraStackFrame(null);
    }
    function Fe(l, M, S, H, K) {
      {
        var R = Function.call.bind(ye);
        for (var j in l)
          if (R(l, j)) {
            var V = void 0;
            try {
              if (typeof l[j] != "function") {
                var T0 = Error((H || "React class") + ": " + S + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T0.name = "Invariant Violation", T0;
              }
              V = l[j](M, j, H, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              V = f;
            }
            V && !(V instanceof Error) && (O0(K), e0("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", S, j, typeof V), O0(null)), V instanceof Error && !(V.message in ft) && (ft[V.message] = !0, O0(K), e0("Failed %s type: %s", S, V.message), O0(null));
          }
      }
    }
    var pt = Array.isArray;
    function Ye(l) {
      return pt(l);
    }
    function Xe(l) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, S = M && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S;
      }
    }
    function Ke(l) {
      try {
        return gt(l), !1;
      } catch {
        return !0;
      }
    }
    function gt(l) {
      return "" + l;
    }
    function bt(l) {
      if (Ke(l))
        return e0("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(l)), gt(l);
    }
    var we = O.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _0, xt, Be;
    Be = {};
    function Gt(l) {
      if (ye.call(l, "ref")) {
        var M = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function wt(l) {
      if (ye.call(l, "key")) {
        var M = Object.getOwnPropertyDescriptor(l, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function f0(l, M) {
      if (typeof l.ref == "string" && we.current && M && we.current.stateNode !== M) {
        var S = l0(we.current.type);
        Be[S] || (e0('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l0(we.current.type), l.ref), Be[S] = !0);
      }
    }
    function E(l, M) {
      {
        var S = function() {
          _0 || (_0 = !0, e0("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function te(l, M) {
      {
        var S = function() {
          xt || (xt = !0, e0("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var vt = function(l, M, S, H, K, R, j) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: z,
        // Built-in properties that belong on the element
        type: l,
        key: M,
        ref: S,
        props: j,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function kt(l, M, S, H, K) {
      {
        var R, j = {}, V = null, T0 = null;
        S !== void 0 && (bt(S), V = "" + S), wt(M) && (bt(M.key), V = "" + M.key), Gt(M) && (T0 = M.ref, f0(M, K));
        for (R in M)
          ye.call(M, R) && !yt.hasOwnProperty(R) && (j[R] = M[R]);
        if (l && l.defaultProps) {
          var f = l.defaultProps;
          for (R in f)
            j[R] === void 0 && (j[R] = f[R]);
        }
        if (V || T0) {
          var a0 = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          V && E(j, a0), T0 && te(j, a0);
        }
        return vt(l, V, T0, K, H, we.current, j);
      }
    }
    var He = O.ReactCurrentOwner, ve = O.ReactDebugCurrentFrame;
    function re(l) {
      if (l) {
        var M = l._owner, S = Pe(l.type, l._source, M ? M.type : null);
        ve.setExtraStackFrame(S);
      } else
        ve.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function Je(l) {
      return typeof l == "object" && l !== null && l.$$typeof === z;
    }
    function q0() {
      {
        if (He.current) {
          var l = l0(He.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function X0(l) {
      return "";
    }
    var K0 = {};
    function Qe(l) {
      {
        var M = q0();
        if (!M) {
          var S = typeof l == "string" ? l : l.displayName || l.name;
          S && (M = `

Check the top-level render call using <` + S + ">.");
        }
        return M;
      }
    }
    function et(l, M) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var S = Qe(M);
        if (K0[S])
          return;
        K0[S] = !0;
        var H = "";
        l && l._owner && l._owner !== He.current && (H = " It was passed a child from " + l0(l._owner.type) + "."), re(l), e0('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, H), re(null);
      }
    }
    function St(l, M) {
      {
        if (typeof l != "object")
          return;
        if (Ye(l))
          for (var S = 0; S < l.length; S++) {
            var H = l[S];
            Je(H) && et(H, M);
          }
        else if (Je(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var K = X(l);
          if (typeof K == "function" && K !== l.entries)
            for (var R = K.call(l), j; !(j = R.next()).done; )
              Je(j.value) && et(j.value, M);
        }
      }
    }
    function Vt(l) {
      {
        var M = l.type;
        if (M == null || typeof M == "string")
          return;
        var S;
        if (typeof M == "function")
          S = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === G || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === m0))
          S = M.propTypes;
        else
          return;
        if (S) {
          var H = l0(M);
          Fe(S, l.props, "prop", H, l);
        } else if (M.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var K = l0(M);
          e0("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && e0("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(l) {
      {
        for (var M = Object.keys(l.props), S = 0; S < M.length; S++) {
          var H = M[S];
          if (H !== "children" && H !== "key") {
            re(l), e0("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), re(null);
            break;
          }
        }
        l.ref !== null && (re(l), e0("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    var Ee = {};
    function h0(l, M, S, H, K, R) {
      {
        var j = Y0(l);
        if (!j) {
          var V = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T0 = X0();
          T0 ? V += T0 : V += q0();
          var f;
          l === null ? f = "null" : Ye(l) ? f = "array" : l !== void 0 && l.$$typeof === z ? (f = "<" + (l0(l.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : f = typeof l, e0("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, V);
        }
        var a0 = kt(l, M, S, K, R);
        if (a0 == null)
          return a0;
        if (j) {
          var g = M.children;
          if (g !== void 0)
            if (H)
              if (Ye(g)) {
                for (var ue = 0; ue < g.length; ue++)
                  St(g[ue], l);
                Object.freeze && Object.freeze(g);
              } else
                e0("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              St(g, l);
        }
        if (ye.call(M, "key")) {
          var ne = l0(l), E0 = Object.keys(M).filter(function(tt) {
            return tt !== "key";
          }), ke = E0.length > 0 ? "{key: someKey, " + E0.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ee[ne + ke]) {
            var W = E0.length > 0 ? "{" + E0.join(": ..., ") + ": ...}" : "{}";
            e0(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, ne, W, ne), Ee[ne + ke] = !0;
          }
        }
        return l === T ? Wt(a0) : Vt(a0), a0;
      }
    }
    function o(l, M, S) {
      return h0(l, M, S, !0);
    }
    function i(l, M, S) {
      return h0(l, M, S, !1);
    }
    var A = i, u = o;
    lt.Fragment = T, lt.jsx = A, lt.jsxs = u;
  }()), lt;
}
process.env.NODE_ENV === "production" ? zr.exports = po() : zr.exports = go();
var Z = zr.exports;
function bo(b, z) {
  z === void 0 && (z = {});
  var N = z.insertAt;
  if (!(typeof document > "u")) {
    var T = document.head || document.getElementsByTagName("head")[0], D = document.createElement("style");
    D.type = "text/css", N === "top" && T.firstChild ? T.insertBefore(D, T.firstChild) : T.appendChild(D), D.styleSheet ? D.styleSheet.cssText = b : D.appendChild(document.createTextNode(b));
  }
}
var yo = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xo(b, z) {
  return z = { exports: {} }, b(z, z.exports), z.exports;
}
var Xn = xo(function(b, z) {
  (function(T, D) {
    b.exports = D();
  })(typeof self < "u" ? self : yo, function() {
    return (
      /******/
      function() {
        var N = {};
        (function() {
          N.d = function(t, e) {
            for (var r in e)
              N.o(e, r) && !N.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
          };
        })(), function() {
          N.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          };
        }();
        var T = {};
        N.d(T, {
          default: function() {
            return (
              /* binding */
              lo
            );
          }
        });
        class D {
          // Error start position based on passed-in Token or ParseNode.
          // Length of affected text based on passed-in Token or ParseNode.
          // The underlying error message without any context added.
          constructor(e, r) {
            this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
            let n = "KaTeX parse error: " + e, s, a;
            const c = r && r.loc;
            if (c && c.start <= c.end) {
              const m = c.lexer.input;
              s = c.start, a = c.end, s === m.length ? n += " at end of input: " : n += " at position " + (s + 1) + ": ";
              const p = m.slice(s, a).replace(/[^]/g, "$&̲");
              let y;
              s > 15 ? y = "…" + m.slice(s - 15, s) : y = m.slice(0, s);
              let x;
              a + 15 < m.length ? x = m.slice(a, a + 15) + "…" : x = m.slice(a), n += y + p + x;
            }
            const h = new Error(n);
            return h.name = "ParseError", h.__proto__ = D.prototype, h.position = s, s != null && a != null && (h.length = a - s), h.rawMessage = e, h;
          }
        }
        D.prototype.__proto__ = Error.prototype;
        var w = D;
        const I = function(t, e) {
          return t.indexOf(e) !== -1;
        }, P = function(t, e) {
          return t === void 0 ? e : t;
        }, G = /([A-Z])/g, n0 = function(t) {
          return t.replace(G, "-$1").toLowerCase();
        }, J = {
          "&": "&amp;",
          ">": "&gt;",
          "<": "&lt;",
          '"': "&quot;",
          "'": "&#x27;"
        }, m0 = /[&><"']/g;
        function x0(t) {
          return String(t).replace(m0, (e) => J[e]);
        }
        const S0 = function(t) {
          return t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? S0(t.body[0]) : t : t.type === "font" ? S0(t.body) : t;
        }, B0 = function(t) {
          const e = S0(t);
          return e.type === "mathord" || e.type === "textord" || e.type === "atom";
        }, b0 = function(t) {
          if (!t)
            throw new Error("Expected non-null, but got " + String(t));
          return t;
        };
        var O = {
          contains: I,
          deflt: P,
          escape: x0,
          hyphenate: n0,
          getBaseElem: S0,
          isCharacterBox: B0,
          protocolFromUrl: function(t) {
            const e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
            return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
          }
        };
        const e0 = {
          displayMode: {
            type: "boolean",
            description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
            cli: "-d, --display-mode"
          },
          output: {
            type: {
              enum: ["htmlAndMathml", "html", "mathml"]
            },
            description: "Determines the markup language of the output.",
            cli: "-F, --format <type>"
          },
          leqno: {
            type: "boolean",
            description: "Render display math in leqno style (left-justified tags)."
          },
          fleqn: {
            type: "boolean",
            description: "Render display math flush left."
          },
          throwOnError: {
            type: "boolean",
            default: !0,
            cli: "-t, --no-throw-on-error",
            cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
          },
          errorColor: {
            type: "string",
            default: "#cc0000",
            cli: "-c, --error-color <color>",
            cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
            cliProcessor: (t) => "#" + t
          },
          macros: {
            type: "object",
            cli: "-m, --macro <def>",
            cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
            cliDefault: [],
            cliProcessor: (t, e) => (e.push(t), e)
          },
          minRuleThickness: {
            type: "number",
            description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
            processor: (t) => Math.max(0, t),
            cli: "--min-rule-thickness <size>",
            cliProcessor: parseFloat
          },
          colorIsTextColor: {
            type: "boolean",
            description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
            cli: "-b, --color-is-text-color"
          },
          strict: {
            type: [{
              enum: ["warn", "ignore", "error"]
            }, "boolean", "function"],
            description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
            cli: "-S, --strict",
            cliDefault: !1
          },
          trust: {
            type: ["boolean", "function"],
            description: "Trust the input, enabling all HTML features such as \\url.",
            cli: "-T, --trust"
          },
          maxSize: {
            type: "number",
            default: 1 / 0,
            description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
            processor: (t) => Math.max(0, t),
            cli: "-s, --max-size <n>",
            cliProcessor: parseInt
          },
          maxExpand: {
            type: "number",
            default: 1e3,
            description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
            processor: (t) => Math.max(0, t),
            cli: "-e, --max-expand <n>",
            cliProcessor: (t) => t === "Infinity" ? 1 / 0 : parseInt(t)
          },
          globalGroup: {
            type: "boolean",
            cli: !1
          }
        };
        function ae(t) {
          if (t.default)
            return t.default;
          const e = t.type, r = Array.isArray(e) ? e[0] : e;
          if (typeof r != "string")
            return r.enum[0];
          switch (r) {
            case "boolean":
              return !1;
            case "string":
              return "";
            case "number":
              return 0;
            case "object":
              return {};
          }
        }
        class F0 {
          constructor(e) {
            this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
            for (const r in e0)
              if (e0.hasOwnProperty(r)) {
                const n = e0[r];
                this[r] = e[r] !== void 0 ? n.processor ? n.processor(e[r]) : e[r] : ae(n);
              }
          }
          /**
           * Report nonstrict (non-LaTeX-compatible) input.
           * Can safely not be called if `this.strict` is false in JavaScript.
           */
          reportNonstrict(e, r, n) {
            let s = this.strict;
            if (typeof s == "function" && (s = s(e, r, n)), !(!s || s === "ignore")) {
              if (s === !0 || s === "error")
                throw new w("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + e + "]"), n);
              s === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + r + " [" + e + "]"));
            }
          }
          /**
           * Check whether to apply strict (LaTeX-adhering) behavior for unusual
           * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
           * instead, "error" translates to a return value of `true`, while "ignore"
           * translates to a return value of `false`.  May still print a warning:
           * "warn" prints a warning and returns `false`.
           * This is for the second category of `errorCode`s listed in the README.
           */
          useStrictBehavior(e, r, n) {
            let s = this.strict;
            if (typeof s == "function")
              try {
                s = s(e, r, n);
              } catch {
                s = "error";
              }
            return !s || s === "ignore" ? !1 : s === !0 || s === "error" ? !0 : s === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + r + " [" + e + "]")), !1);
          }
          /**
           * Check whether to test potentially dangerous input, and return
           * `true` (trusted) or `false` (untrusted).  The sole argument `context`
           * should be an object with `command` field specifying the relevant LaTeX
           * command (as a string starting with `\`), and any other arguments, etc.
           * If `context` has a `url` field, a `protocol` field will automatically
           * get added by this function (changing the specified object).
           */
          isTrusted(e) {
            if (e.url && !e.protocol) {
              const n = O.protocolFromUrl(e.url);
              if (n == null)
                return !1;
              e.protocol = n;
            }
            return !!(typeof this.trust == "function" ? this.trust(e) : this.trust);
          }
        }
        class R0 {
          constructor(e, r, n) {
            this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = n;
          }
          /**
           * Get the style of a superscript given a base in the current style.
           */
          sup() {
            return w0[J0[this.id]];
          }
          /**
           * Get the style of a subscript given a base in the current style.
           */
          sub() {
            return w0[ce[this.id]];
          }
          /**
           * Get the style of a fraction numerator given the fraction in the current
           * style.
           */
          fracNum() {
            return w0[Ce[this.id]];
          }
          /**
           * Get the style of a fraction denominator given the fraction in the current
           * style.
           */
          fracDen() {
            return w0[be[this.id]];
          }
          /**
           * Get the cramped version of a style (in particular, cramping a cramped style
           * doesn't change the style).
           */
          cramp() {
            return w0[Q0[this.id]];
          }
          /**
           * Get a text or display version of this style.
           */
          text() {
            return w0[Ne[this.id]];
          }
          /**
           * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
           */
          isTight() {
            return this.size >= 2;
          }
        }
        const ge = 0, le = 1, U0 = 2, D0 = 3, Y0 = 4, N0 = 5, t0 = 6, l0 = 7, w0 = [new R0(ge, 0, !1), new R0(le, 0, !0), new R0(U0, 1, !1), new R0(D0, 1, !0), new R0(Y0, 2, !1), new R0(N0, 2, !0), new R0(t0, 3, !1), new R0(l0, 3, !0)], J0 = [Y0, N0, Y0, N0, t0, l0, t0, l0], ce = [N0, N0, N0, N0, l0, l0, l0, l0], Ce = [U0, D0, Y0, N0, t0, l0, t0, l0], be = [D0, D0, N0, N0, l0, l0, l0, l0], Q0 = [le, le, D0, D0, N0, N0, l0, l0], Ne = [ge, le, U0, D0, U0, D0, U0, D0];
        var F = {
          DISPLAY: w0[ge],
          TEXT: w0[U0],
          SCRIPT: w0[Y0],
          SCRIPTSCRIPT: w0[t0]
        };
        const Oe = [{
          // Latin characters beyond the Latin-1 characters we have metrics for.
          // Needed for Czech, Hungarian and Turkish text, for example.
          name: "latin",
          blocks: [
            [256, 591],
            // Latin Extended-A and Latin Extended-B
            [768, 879]
            // Combining Diacritical marks
          ]
        }, {
          // The Cyrillic script used by Russian and related languages.
          // A Cyrillic subset used to be supported as explicitly defined
          // symbols in symbols.js
          name: "cyrillic",
          blocks: [[1024, 1279]]
        }, {
          // Armenian
          name: "armenian",
          blocks: [[1328, 1423]]
        }, {
          // The Brahmic scripts of South and Southeast Asia
          // Devanagari (0900–097F)
          // Bengali (0980–09FF)
          // Gurmukhi (0A00–0A7F)
          // Gujarati (0A80–0AFF)
          // Oriya (0B00–0B7F)
          // Tamil (0B80–0BFF)
          // Telugu (0C00–0C7F)
          // Kannada (0C80–0CFF)
          // Malayalam (0D00–0D7F)
          // Sinhala (0D80–0DFF)
          // Thai (0E00–0E7F)
          // Lao (0E80–0EFF)
          // Tibetan (0F00–0FFF)
          // Myanmar (1000–109F)
          name: "brahmic",
          blocks: [[2304, 4255]]
        }, {
          name: "georgian",
          blocks: [[4256, 4351]]
        }, {
          // Chinese and Japanese.
          // The "k" in cjk is for Korean, but we've separated Korean out
          name: "cjk",
          blocks: [
            [12288, 12543],
            // CJK symbols and punctuation, Hiragana, Katakana
            [19968, 40879],
            // CJK ideograms
            [65280, 65376]
            // Fullwidth punctuation
            // TODO: add halfwidth Katakana and Romanji glyphs
          ]
        }, {
          // Korean
          name: "hangul",
          blocks: [[44032, 55215]]
        }];
        function ht(t) {
          for (let e = 0; e < Oe.length; e++) {
            const r = Oe[e];
            for (let n = 0; n < r.blocks.length; n++) {
              const s = r.blocks[n];
              if (t >= s[0] && t <= s[1])
                return r.name;
            }
          }
          return null;
        }
        const qe = [];
        Oe.forEach((t) => t.blocks.forEach((e) => qe.push(...e)));
        function dt(t) {
          for (let e = 0; e < qe.length; e += 2)
            if (t >= qe[e] && t <= qe[e + 1])
              return !0;
          return !1;
        }
        const ee = 80, $e = function(t, e) {
          return "M95," + (622 + t + e) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t / 2.075 + " -" + t + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
        }, Ie = function(t, e) {
          return "M263," + (601 + t + e) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t / 2.084 + " -" + t + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
        }, Ue = function(t, e) {
          return "M983 " + (10 + t + e) + `
l` + t / 3.13 + " -" + t + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
        }, Le = function(t, e) {
          return "M424," + (2398 + t + e) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t / 4.223 + " -" + t + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t) + " " + e + `
h400000v` + (40 + t) + "h-400000z";
        }, Ht = function(t, e) {
          return "M473," + (2713 + t + e) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t / 5.298 + " -" + t + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z";
        }, mt = function(t) {
          const e = t / 2;
          return "M400000 " + t + " H0 L" + e + " 0 l65 45 L145 " + (t - 80) + " H400000z";
        }, _t = function(t, e, r) {
          const n = r - 54 - e - t;
          return "M702 " + (t + e) + "H400000" + (40 + t) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + e + "H400000v" + (40 + t) + "H742z";
        }, jt = function(t, e, r) {
          e = 1e3 * e;
          let n = "";
          switch (t) {
            case "sqrtMain":
              n = $e(e, ee);
              break;
            case "sqrtSize1":
              n = Ie(e, ee);
              break;
            case "sqrtSize2":
              n = Ue(e, ee);
              break;
            case "sqrtSize3":
              n = Le(e, ee);
              break;
            case "sqrtSize4":
              n = Ht(e, ee);
              break;
            case "sqrtTall":
              n = _t(e, ee, r);
          }
          return n;
        }, Pe = function(t, e) {
          switch (t) {
            case "⎜":
              return "M291 0 H417 V" + e + " H291z M291 0 H417 V" + e + " H291z";
            case "∣":
              return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z";
            case "∥":
              return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z" + ("M367 0 H410 V" + e + " H367z M367 0 H410 V" + e + " H367z");
            case "⎟":
              return "M457 0 H583 V" + e + " H457z M457 0 H583 V" + e + " H457z";
            case "⎢":
              return "M319 0 H403 V" + e + " H319z M319 0 H403 V" + e + " H319z";
            case "⎥":
              return "M263 0 H347 V" + e + " H263z M263 0 H347 V" + e + " H263z";
            case "⎪":
              return "M384 0 H504 V" + e + " H384z M384 0 H504 V" + e + " H384z";
            case "⏐":
              return "M312 0 H355 V" + e + " H312z M312 0 H355 V" + e + " H312z";
            case "‖":
              return "M257 0 H300 V" + e + " H257z M257 0 H300 V" + e + " H257z" + ("M478 0 H521 V" + e + " H478z M478 0 H521 V" + e + " H478z");
            default:
              return "";
          }
        }, ye = {
          // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
          doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
          // doublerightarrow is from glyph U+21D2 in font KaTeX Main
          doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
          // leftarrow is from glyph U+2190 in font KaTeX Main
          leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
          // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
          leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
          leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
          // overgroup is from the MnSymbol package (public domain)
          leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
          leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
          // Harpoons are from glyph U+21BD in font KaTeX Main
          leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
          leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
          leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
          leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
          // hook is from glyph U+21A9 in font KaTeX Main
          lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
          leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
          leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
          // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
          leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
          longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
          midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
          midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
          oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
          oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
          oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
          oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
          rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
          rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
          rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
          rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
          rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
          rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
          rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
          rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
          rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
          righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
          rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
          rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
          // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
          twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
          twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
          // tilde1 is a modified version of a glyph from the MnSymbol package
          tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
          // ditto tilde2, tilde3, & tilde4
          tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
          tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
          tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
          // vec is from glyph U+20D7 in font KaTeX Main
          vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
          // widehat1 is a modified version of a glyph from the MnSymbol package
          widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
          // ditto widehat2, widehat3, & widehat4
          widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
          // widecheck paths are all inverted versions of widehat
          widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
          widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
          // The next ten paths support reaction arrows from the mhchem package.
          // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
          // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
          baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
          // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
          rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
          // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
          // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
          baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
          rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
          shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
          shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
        }, ft = function(t, e) {
          switch (t) {
            case "lbrack":
              return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + e + " v1759 h84z";
            case "rbrack":
              return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + e + " v1759 h84z";
            case "vert":
              return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + " v585 h43z";
            case "doublevert":
              return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + ` v585 h43z
M367 15 v585 v` + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + e + " v585 h43z";
            case "lfloor":
              return "M319 602 V0 H403 V602 v" + e + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
            case "rfloor":
              return "M319 602 V0 H403 V602 v" + e + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
            case "lceil":
              return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v602 h84z
M403 1759 V0 H319 V1759 v` + e + " v602 h84z";
            case "rceil":
              return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + e + " v602 h84z";
            case "lparen":
              return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (e + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (e + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
            case "rparen":
              return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (e + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (e + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
            default:
              throw new Error("Unknown stretchy delimiter.");
          }
        };
        class xe {
          // HtmlDomNode
          // Never used; needed for satisfying interface.
          constructor(e) {
            this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
          }
          hasClass(e) {
            return O.contains(this.classes, e);
          }
          /** Convert the fragment into a node. */
          toNode() {
            const e = document.createDocumentFragment();
            for (let r = 0; r < this.children.length; r++)
              e.appendChild(this.children[r].toNode());
            return e;
          }
          /** Convert the fragment into HTML markup. */
          toMarkup() {
            let e = "";
            for (let r = 0; r < this.children.length; r++)
              e += this.children[r].toMarkup();
            return e;
          }
          /**
           * Converts the math node into a string, similar to innerText. Applies to
           * MathDomNode's only.
           */
          toText() {
            const e = (r) => r.toText();
            return this.children.map(e).join("");
          }
        }
        var O0 = {
          "AMS-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68889, 0, 0, 0.72222],
            66: [0, 0.68889, 0, 0, 0.66667],
            67: [0, 0.68889, 0, 0, 0.72222],
            68: [0, 0.68889, 0, 0, 0.72222],
            69: [0, 0.68889, 0, 0, 0.66667],
            70: [0, 0.68889, 0, 0, 0.61111],
            71: [0, 0.68889, 0, 0, 0.77778],
            72: [0, 0.68889, 0, 0, 0.77778],
            73: [0, 0.68889, 0, 0, 0.38889],
            74: [0.16667, 0.68889, 0, 0, 0.5],
            75: [0, 0.68889, 0, 0, 0.77778],
            76: [0, 0.68889, 0, 0, 0.66667],
            77: [0, 0.68889, 0, 0, 0.94445],
            78: [0, 0.68889, 0, 0, 0.72222],
            79: [0.16667, 0.68889, 0, 0, 0.77778],
            80: [0, 0.68889, 0, 0, 0.61111],
            81: [0.16667, 0.68889, 0, 0, 0.77778],
            82: [0, 0.68889, 0, 0, 0.72222],
            83: [0, 0.68889, 0, 0, 0.55556],
            84: [0, 0.68889, 0, 0, 0.66667],
            85: [0, 0.68889, 0, 0, 0.72222],
            86: [0, 0.68889, 0, 0, 0.72222],
            87: [0, 0.68889, 0, 0, 1],
            88: [0, 0.68889, 0, 0, 0.72222],
            89: [0, 0.68889, 0, 0, 0.72222],
            90: [0, 0.68889, 0, 0, 0.66667],
            107: [0, 0.68889, 0, 0, 0.55556],
            160: [0, 0, 0, 0, 0.25],
            165: [0, 0.675, 0.025, 0, 0.75],
            174: [0.15559, 0.69224, 0, 0, 0.94666],
            240: [0, 0.68889, 0, 0, 0.55556],
            295: [0, 0.68889, 0, 0, 0.54028],
            710: [0, 0.825, 0, 0, 2.33334],
            732: [0, 0.9, 0, 0, 2.33334],
            770: [0, 0.825, 0, 0, 2.33334],
            771: [0, 0.9, 0, 0, 2.33334],
            989: [0.08167, 0.58167, 0, 0, 0.77778],
            1008: [0, 0.43056, 0.04028, 0, 0.66667],
            8245: [0, 0.54986, 0, 0, 0.275],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8487: [0, 0.68889, 0, 0, 0.72222],
            8498: [0, 0.68889, 0, 0, 0.55556],
            8502: [0, 0.68889, 0, 0, 0.66667],
            8503: [0, 0.68889, 0, 0, 0.44445],
            8504: [0, 0.68889, 0, 0, 0.66667],
            8513: [0, 0.68889, 0, 0, 0.63889],
            8592: [-0.03598, 0.46402, 0, 0, 0.5],
            8594: [-0.03598, 0.46402, 0, 0, 0.5],
            8602: [-0.13313, 0.36687, 0, 0, 1],
            8603: [-0.13313, 0.36687, 0, 0, 1],
            8606: [0.01354, 0.52239, 0, 0, 1],
            8608: [0.01354, 0.52239, 0, 0, 1],
            8610: [0.01354, 0.52239, 0, 0, 1.11111],
            8611: [0.01354, 0.52239, 0, 0, 1.11111],
            8619: [0, 0.54986, 0, 0, 1],
            8620: [0, 0.54986, 0, 0, 1],
            8621: [-0.13313, 0.37788, 0, 0, 1.38889],
            8622: [-0.13313, 0.36687, 0, 0, 1],
            8624: [0, 0.69224, 0, 0, 0.5],
            8625: [0, 0.69224, 0, 0, 0.5],
            8630: [0, 0.43056, 0, 0, 1],
            8631: [0, 0.43056, 0, 0, 1],
            8634: [0.08198, 0.58198, 0, 0, 0.77778],
            8635: [0.08198, 0.58198, 0, 0, 0.77778],
            8638: [0.19444, 0.69224, 0, 0, 0.41667],
            8639: [0.19444, 0.69224, 0, 0, 0.41667],
            8642: [0.19444, 0.69224, 0, 0, 0.41667],
            8643: [0.19444, 0.69224, 0, 0, 0.41667],
            8644: [0.1808, 0.675, 0, 0, 1],
            8646: [0.1808, 0.675, 0, 0, 1],
            8647: [0.1808, 0.675, 0, 0, 1],
            8648: [0.19444, 0.69224, 0, 0, 0.83334],
            8649: [0.1808, 0.675, 0, 0, 1],
            8650: [0.19444, 0.69224, 0, 0, 0.83334],
            8651: [0.01354, 0.52239, 0, 0, 1],
            8652: [0.01354, 0.52239, 0, 0, 1],
            8653: [-0.13313, 0.36687, 0, 0, 1],
            8654: [-0.13313, 0.36687, 0, 0, 1],
            8655: [-0.13313, 0.36687, 0, 0, 1],
            8666: [0.13667, 0.63667, 0, 0, 1],
            8667: [0.13667, 0.63667, 0, 0, 1],
            8669: [-0.13313, 0.37788, 0, 0, 1],
            8672: [-0.064, 0.437, 0, 0, 1.334],
            8674: [-0.064, 0.437, 0, 0, 1.334],
            8705: [0, 0.825, 0, 0, 0.5],
            8708: [0, 0.68889, 0, 0, 0.55556],
            8709: [0.08167, 0.58167, 0, 0, 0.77778],
            8717: [0, 0.43056, 0, 0, 0.42917],
            8722: [-0.03598, 0.46402, 0, 0, 0.5],
            8724: [0.08198, 0.69224, 0, 0, 0.77778],
            8726: [0.08167, 0.58167, 0, 0, 0.77778],
            8733: [0, 0.69224, 0, 0, 0.77778],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8737: [0, 0.69224, 0, 0, 0.72222],
            8738: [0.03517, 0.52239, 0, 0, 0.72222],
            8739: [0.08167, 0.58167, 0, 0, 0.22222],
            8740: [0.25142, 0.74111, 0, 0, 0.27778],
            8741: [0.08167, 0.58167, 0, 0, 0.38889],
            8742: [0.25142, 0.74111, 0, 0, 0.5],
            8756: [0, 0.69224, 0, 0, 0.66667],
            8757: [0, 0.69224, 0, 0, 0.66667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8765: [-0.13313, 0.37788, 0, 0, 0.77778],
            8769: [-0.13313, 0.36687, 0, 0, 0.77778],
            8770: [-0.03625, 0.46375, 0, 0, 0.77778],
            8774: [0.30274, 0.79383, 0, 0, 0.77778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8778: [0.08167, 0.58167, 0, 0, 0.77778],
            8782: [0.06062, 0.54986, 0, 0, 0.77778],
            8783: [0.06062, 0.54986, 0, 0, 0.77778],
            8785: [0.08198, 0.58198, 0, 0, 0.77778],
            8786: [0.08198, 0.58198, 0, 0, 0.77778],
            8787: [0.08198, 0.58198, 0, 0, 0.77778],
            8790: [0, 0.69224, 0, 0, 0.77778],
            8791: [0.22958, 0.72958, 0, 0, 0.77778],
            8796: [0.08198, 0.91667, 0, 0, 0.77778],
            8806: [0.25583, 0.75583, 0, 0, 0.77778],
            8807: [0.25583, 0.75583, 0, 0, 0.77778],
            8808: [0.25142, 0.75726, 0, 0, 0.77778],
            8809: [0.25142, 0.75726, 0, 0, 0.77778],
            8812: [0.25583, 0.75583, 0, 0, 0.5],
            8814: [0.20576, 0.70576, 0, 0, 0.77778],
            8815: [0.20576, 0.70576, 0, 0, 0.77778],
            8816: [0.30274, 0.79383, 0, 0, 0.77778],
            8817: [0.30274, 0.79383, 0, 0, 0.77778],
            8818: [0.22958, 0.72958, 0, 0, 0.77778],
            8819: [0.22958, 0.72958, 0, 0, 0.77778],
            8822: [0.1808, 0.675, 0, 0, 0.77778],
            8823: [0.1808, 0.675, 0, 0, 0.77778],
            8828: [0.13667, 0.63667, 0, 0, 0.77778],
            8829: [0.13667, 0.63667, 0, 0, 0.77778],
            8830: [0.22958, 0.72958, 0, 0, 0.77778],
            8831: [0.22958, 0.72958, 0, 0, 0.77778],
            8832: [0.20576, 0.70576, 0, 0, 0.77778],
            8833: [0.20576, 0.70576, 0, 0, 0.77778],
            8840: [0.30274, 0.79383, 0, 0, 0.77778],
            8841: [0.30274, 0.79383, 0, 0, 0.77778],
            8842: [0.13597, 0.63597, 0, 0, 0.77778],
            8843: [0.13597, 0.63597, 0, 0, 0.77778],
            8847: [0.03517, 0.54986, 0, 0, 0.77778],
            8848: [0.03517, 0.54986, 0, 0, 0.77778],
            8858: [0.08198, 0.58198, 0, 0, 0.77778],
            8859: [0.08198, 0.58198, 0, 0, 0.77778],
            8861: [0.08198, 0.58198, 0, 0, 0.77778],
            8862: [0, 0.675, 0, 0, 0.77778],
            8863: [0, 0.675, 0, 0, 0.77778],
            8864: [0, 0.675, 0, 0, 0.77778],
            8865: [0, 0.675, 0, 0, 0.77778],
            8872: [0, 0.69224, 0, 0, 0.61111],
            8873: [0, 0.69224, 0, 0, 0.72222],
            8874: [0, 0.69224, 0, 0, 0.88889],
            8876: [0, 0.68889, 0, 0, 0.61111],
            8877: [0, 0.68889, 0, 0, 0.61111],
            8878: [0, 0.68889, 0, 0, 0.72222],
            8879: [0, 0.68889, 0, 0, 0.72222],
            8882: [0.03517, 0.54986, 0, 0, 0.77778],
            8883: [0.03517, 0.54986, 0, 0, 0.77778],
            8884: [0.13667, 0.63667, 0, 0, 0.77778],
            8885: [0.13667, 0.63667, 0, 0, 0.77778],
            8888: [0, 0.54986, 0, 0, 1.11111],
            8890: [0.19444, 0.43056, 0, 0, 0.55556],
            8891: [0.19444, 0.69224, 0, 0, 0.61111],
            8892: [0.19444, 0.69224, 0, 0, 0.61111],
            8901: [0, 0.54986, 0, 0, 0.27778],
            8903: [0.08167, 0.58167, 0, 0, 0.77778],
            8905: [0.08167, 0.58167, 0, 0, 0.77778],
            8906: [0.08167, 0.58167, 0, 0, 0.77778],
            8907: [0, 0.69224, 0, 0, 0.77778],
            8908: [0, 0.69224, 0, 0, 0.77778],
            8909: [-0.03598, 0.46402, 0, 0, 0.77778],
            8910: [0, 0.54986, 0, 0, 0.76042],
            8911: [0, 0.54986, 0, 0, 0.76042],
            8912: [0.03517, 0.54986, 0, 0, 0.77778],
            8913: [0.03517, 0.54986, 0, 0, 0.77778],
            8914: [0, 0.54986, 0, 0, 0.66667],
            8915: [0, 0.54986, 0, 0, 0.66667],
            8916: [0, 0.69224, 0, 0, 0.66667],
            8918: [0.0391, 0.5391, 0, 0, 0.77778],
            8919: [0.0391, 0.5391, 0, 0, 0.77778],
            8920: [0.03517, 0.54986, 0, 0, 1.33334],
            8921: [0.03517, 0.54986, 0, 0, 1.33334],
            8922: [0.38569, 0.88569, 0, 0, 0.77778],
            8923: [0.38569, 0.88569, 0, 0, 0.77778],
            8926: [0.13667, 0.63667, 0, 0, 0.77778],
            8927: [0.13667, 0.63667, 0, 0, 0.77778],
            8928: [0.30274, 0.79383, 0, 0, 0.77778],
            8929: [0.30274, 0.79383, 0, 0, 0.77778],
            8934: [0.23222, 0.74111, 0, 0, 0.77778],
            8935: [0.23222, 0.74111, 0, 0, 0.77778],
            8936: [0.23222, 0.74111, 0, 0, 0.77778],
            8937: [0.23222, 0.74111, 0, 0, 0.77778],
            8938: [0.20576, 0.70576, 0, 0, 0.77778],
            8939: [0.20576, 0.70576, 0, 0, 0.77778],
            8940: [0.30274, 0.79383, 0, 0, 0.77778],
            8941: [0.30274, 0.79383, 0, 0, 0.77778],
            8994: [0.19444, 0.69224, 0, 0, 0.77778],
            8995: [0.19444, 0.69224, 0, 0, 0.77778],
            9416: [0.15559, 0.69224, 0, 0, 0.90222],
            9484: [0, 0.69224, 0, 0, 0.5],
            9488: [0, 0.69224, 0, 0, 0.5],
            9492: [0, 0.37788, 0, 0, 0.5],
            9496: [0, 0.37788, 0, 0, 0.5],
            9585: [0.19444, 0.68889, 0, 0, 0.88889],
            9586: [0.19444, 0.74111, 0, 0, 0.88889],
            9632: [0, 0.675, 0, 0, 0.77778],
            9633: [0, 0.675, 0, 0, 0.77778],
            9650: [0, 0.54986, 0, 0, 0.72222],
            9651: [0, 0.54986, 0, 0, 0.72222],
            9654: [0.03517, 0.54986, 0, 0, 0.77778],
            9660: [0, 0.54986, 0, 0, 0.72222],
            9661: [0, 0.54986, 0, 0, 0.72222],
            9664: [0.03517, 0.54986, 0, 0, 0.77778],
            9674: [0.11111, 0.69224, 0, 0, 0.66667],
            9733: [0.19444, 0.69224, 0, 0, 0.94445],
            10003: [0, 0.69224, 0, 0, 0.83334],
            10016: [0, 0.69224, 0, 0, 0.83334],
            10731: [0.11111, 0.69224, 0, 0, 0.66667],
            10846: [0.19444, 0.75583, 0, 0, 0.61111],
            10877: [0.13667, 0.63667, 0, 0, 0.77778],
            10878: [0.13667, 0.63667, 0, 0, 0.77778],
            10885: [0.25583, 0.75583, 0, 0, 0.77778],
            10886: [0.25583, 0.75583, 0, 0, 0.77778],
            10887: [0.13597, 0.63597, 0, 0, 0.77778],
            10888: [0.13597, 0.63597, 0, 0, 0.77778],
            10889: [0.26167, 0.75726, 0, 0, 0.77778],
            10890: [0.26167, 0.75726, 0, 0, 0.77778],
            10891: [0.48256, 0.98256, 0, 0, 0.77778],
            10892: [0.48256, 0.98256, 0, 0, 0.77778],
            10901: [0.13667, 0.63667, 0, 0, 0.77778],
            10902: [0.13667, 0.63667, 0, 0, 0.77778],
            10933: [0.25142, 0.75726, 0, 0, 0.77778],
            10934: [0.25142, 0.75726, 0, 0, 0.77778],
            10935: [0.26167, 0.75726, 0, 0, 0.77778],
            10936: [0.26167, 0.75726, 0, 0, 0.77778],
            10937: [0.26167, 0.75726, 0, 0, 0.77778],
            10938: [0.26167, 0.75726, 0, 0, 0.77778],
            10949: [0.25583, 0.75583, 0, 0, 0.77778],
            10950: [0.25583, 0.75583, 0, 0, 0.77778],
            10955: [0.28481, 0.79383, 0, 0, 0.77778],
            10956: [0.28481, 0.79383, 0, 0, 0.77778],
            57350: [0.08167, 0.58167, 0, 0, 0.22222],
            57351: [0.08167, 0.58167, 0, 0, 0.38889],
            57352: [0.08167, 0.58167, 0, 0, 0.77778],
            57353: [0, 0.43056, 0.04028, 0, 0.66667],
            57356: [0.25142, 0.75726, 0, 0, 0.77778],
            57357: [0.25142, 0.75726, 0, 0, 0.77778],
            57358: [0.41951, 0.91951, 0, 0, 0.77778],
            57359: [0.30274, 0.79383, 0, 0, 0.77778],
            57360: [0.30274, 0.79383, 0, 0, 0.77778],
            57361: [0.41951, 0.91951, 0, 0, 0.77778],
            57366: [0.25142, 0.75726, 0, 0, 0.77778],
            57367: [0.25142, 0.75726, 0, 0, 0.77778],
            57368: [0.25142, 0.75726, 0, 0, 0.77778],
            57369: [0.25142, 0.75726, 0, 0, 0.77778],
            57370: [0.13597, 0.63597, 0, 0, 0.77778],
            57371: [0.13597, 0.63597, 0, 0, 0.77778]
          },
          "Caligraphic-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68333, 0, 0.19445, 0.79847],
            66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
            67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
            68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
            69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
            70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
            71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
            72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
            73: [0, 0.68333, 0.07382, 0, 0.54452],
            74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
            75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
            76: [0, 0.68333, 0, 0.13889, 0.68972],
            77: [0, 0.68333, 0, 0.13889, 1.2009],
            78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
            79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
            80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
            81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
            82: [0, 0.68333, 0, 0.08334, 0.8475],
            83: [0, 0.68333, 0.075, 0.13889, 0.60556],
            84: [0, 0.68333, 0.25417, 0, 0.54464],
            85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
            86: [0, 0.68333, 0.08222, 0, 0.61278],
            87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
            88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
            89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
            90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
            160: [0, 0, 0, 0, 0.25]
          },
          "Fraktur-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69141, 0, 0, 0.29574],
            34: [0, 0.69141, 0, 0, 0.21471],
            38: [0, 0.69141, 0, 0, 0.73786],
            39: [0, 0.69141, 0, 0, 0.21201],
            40: [0.24982, 0.74947, 0, 0, 0.38865],
            41: [0.24982, 0.74947, 0, 0, 0.38865],
            42: [0, 0.62119, 0, 0, 0.27764],
            43: [0.08319, 0.58283, 0, 0, 0.75623],
            44: [0, 0.10803, 0, 0, 0.27764],
            45: [0.08319, 0.58283, 0, 0, 0.75623],
            46: [0, 0.10803, 0, 0, 0.27764],
            47: [0.24982, 0.74947, 0, 0, 0.50181],
            48: [0, 0.47534, 0, 0, 0.50181],
            49: [0, 0.47534, 0, 0, 0.50181],
            50: [0, 0.47534, 0, 0, 0.50181],
            51: [0.18906, 0.47534, 0, 0, 0.50181],
            52: [0.18906, 0.47534, 0, 0, 0.50181],
            53: [0.18906, 0.47534, 0, 0, 0.50181],
            54: [0, 0.69141, 0, 0, 0.50181],
            55: [0.18906, 0.47534, 0, 0, 0.50181],
            56: [0, 0.69141, 0, 0, 0.50181],
            57: [0.18906, 0.47534, 0, 0, 0.50181],
            58: [0, 0.47534, 0, 0, 0.21606],
            59: [0.12604, 0.47534, 0, 0, 0.21606],
            61: [-0.13099, 0.36866, 0, 0, 0.75623],
            63: [0, 0.69141, 0, 0, 0.36245],
            65: [0, 0.69141, 0, 0, 0.7176],
            66: [0, 0.69141, 0, 0, 0.88397],
            67: [0, 0.69141, 0, 0, 0.61254],
            68: [0, 0.69141, 0, 0, 0.83158],
            69: [0, 0.69141, 0, 0, 0.66278],
            70: [0.12604, 0.69141, 0, 0, 0.61119],
            71: [0, 0.69141, 0, 0, 0.78539],
            72: [0.06302, 0.69141, 0, 0, 0.7203],
            73: [0, 0.69141, 0, 0, 0.55448],
            74: [0.12604, 0.69141, 0, 0, 0.55231],
            75: [0, 0.69141, 0, 0, 0.66845],
            76: [0, 0.69141, 0, 0, 0.66602],
            77: [0, 0.69141, 0, 0, 1.04953],
            78: [0, 0.69141, 0, 0, 0.83212],
            79: [0, 0.69141, 0, 0, 0.82699],
            80: [0.18906, 0.69141, 0, 0, 0.82753],
            81: [0.03781, 0.69141, 0, 0, 0.82699],
            82: [0, 0.69141, 0, 0, 0.82807],
            83: [0, 0.69141, 0, 0, 0.82861],
            84: [0, 0.69141, 0, 0, 0.66899],
            85: [0, 0.69141, 0, 0, 0.64576],
            86: [0, 0.69141, 0, 0, 0.83131],
            87: [0, 0.69141, 0, 0, 1.04602],
            88: [0, 0.69141, 0, 0, 0.71922],
            89: [0.18906, 0.69141, 0, 0, 0.83293],
            90: [0.12604, 0.69141, 0, 0, 0.60201],
            91: [0.24982, 0.74947, 0, 0, 0.27764],
            93: [0.24982, 0.74947, 0, 0, 0.27764],
            94: [0, 0.69141, 0, 0, 0.49965],
            97: [0, 0.47534, 0, 0, 0.50046],
            98: [0, 0.69141, 0, 0, 0.51315],
            99: [0, 0.47534, 0, 0, 0.38946],
            100: [0, 0.62119, 0, 0, 0.49857],
            101: [0, 0.47534, 0, 0, 0.40053],
            102: [0.18906, 0.69141, 0, 0, 0.32626],
            103: [0.18906, 0.47534, 0, 0, 0.5037],
            104: [0.18906, 0.69141, 0, 0, 0.52126],
            105: [0, 0.69141, 0, 0, 0.27899],
            106: [0, 0.69141, 0, 0, 0.28088],
            107: [0, 0.69141, 0, 0, 0.38946],
            108: [0, 0.69141, 0, 0, 0.27953],
            109: [0, 0.47534, 0, 0, 0.76676],
            110: [0, 0.47534, 0, 0, 0.52666],
            111: [0, 0.47534, 0, 0, 0.48885],
            112: [0.18906, 0.52396, 0, 0, 0.50046],
            113: [0.18906, 0.47534, 0, 0, 0.48912],
            114: [0, 0.47534, 0, 0, 0.38919],
            115: [0, 0.47534, 0, 0, 0.44266],
            116: [0, 0.62119, 0, 0, 0.33301],
            117: [0, 0.47534, 0, 0, 0.5172],
            118: [0, 0.52396, 0, 0, 0.5118],
            119: [0, 0.52396, 0, 0, 0.77351],
            120: [0.18906, 0.47534, 0, 0, 0.38865],
            121: [0.18906, 0.47534, 0, 0, 0.49884],
            122: [0.18906, 0.47534, 0, 0, 0.39054],
            160: [0, 0, 0, 0, 0.25],
            8216: [0, 0.69141, 0, 0, 0.21471],
            8217: [0, 0.69141, 0, 0, 0.21471],
            58112: [0, 0.62119, 0, 0, 0.49749],
            58113: [0, 0.62119, 0, 0, 0.4983],
            58114: [0.18906, 0.69141, 0, 0, 0.33328],
            58115: [0.18906, 0.69141, 0, 0, 0.32923],
            58116: [0.18906, 0.47534, 0, 0, 0.50343],
            58117: [0, 0.69141, 0, 0, 0.33301],
            58118: [0, 0.62119, 0, 0, 0.33409],
            58119: [0, 0.47534, 0, 0, 0.50073]
          },
          "Main-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.35],
            34: [0, 0.69444, 0, 0, 0.60278],
            35: [0.19444, 0.69444, 0, 0, 0.95833],
            36: [0.05556, 0.75, 0, 0, 0.575],
            37: [0.05556, 0.75, 0, 0, 0.95833],
            38: [0, 0.69444, 0, 0, 0.89444],
            39: [0, 0.69444, 0, 0, 0.31944],
            40: [0.25, 0.75, 0, 0, 0.44722],
            41: [0.25, 0.75, 0, 0, 0.44722],
            42: [0, 0.75, 0, 0, 0.575],
            43: [0.13333, 0.63333, 0, 0, 0.89444],
            44: [0.19444, 0.15556, 0, 0, 0.31944],
            45: [0, 0.44444, 0, 0, 0.38333],
            46: [0, 0.15556, 0, 0, 0.31944],
            47: [0.25, 0.75, 0, 0, 0.575],
            48: [0, 0.64444, 0, 0, 0.575],
            49: [0, 0.64444, 0, 0, 0.575],
            50: [0, 0.64444, 0, 0, 0.575],
            51: [0, 0.64444, 0, 0, 0.575],
            52: [0, 0.64444, 0, 0, 0.575],
            53: [0, 0.64444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0, 0.64444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0, 0.64444, 0, 0, 0.575],
            58: [0, 0.44444, 0, 0, 0.31944],
            59: [0.19444, 0.44444, 0, 0, 0.31944],
            60: [0.08556, 0.58556, 0, 0, 0.89444],
            61: [-0.10889, 0.39111, 0, 0, 0.89444],
            62: [0.08556, 0.58556, 0, 0, 0.89444],
            63: [0, 0.69444, 0, 0, 0.54305],
            64: [0, 0.69444, 0, 0, 0.89444],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0, 0, 0.81805],
            67: [0, 0.68611, 0, 0, 0.83055],
            68: [0, 0.68611, 0, 0, 0.88194],
            69: [0, 0.68611, 0, 0, 0.75555],
            70: [0, 0.68611, 0, 0, 0.72361],
            71: [0, 0.68611, 0, 0, 0.90416],
            72: [0, 0.68611, 0, 0, 0.9],
            73: [0, 0.68611, 0, 0, 0.43611],
            74: [0, 0.68611, 0, 0, 0.59444],
            75: [0, 0.68611, 0, 0, 0.90138],
            76: [0, 0.68611, 0, 0, 0.69166],
            77: [0, 0.68611, 0, 0, 1.09166],
            78: [0, 0.68611, 0, 0, 0.9],
            79: [0, 0.68611, 0, 0, 0.86388],
            80: [0, 0.68611, 0, 0, 0.78611],
            81: [0.19444, 0.68611, 0, 0, 0.86388],
            82: [0, 0.68611, 0, 0, 0.8625],
            83: [0, 0.68611, 0, 0, 0.63889],
            84: [0, 0.68611, 0, 0, 0.8],
            85: [0, 0.68611, 0, 0, 0.88472],
            86: [0, 0.68611, 0.01597, 0, 0.86944],
            87: [0, 0.68611, 0.01597, 0, 1.18888],
            88: [0, 0.68611, 0, 0, 0.86944],
            89: [0, 0.68611, 0.02875, 0, 0.86944],
            90: [0, 0.68611, 0, 0, 0.70277],
            91: [0.25, 0.75, 0, 0, 0.31944],
            92: [0.25, 0.75, 0, 0, 0.575],
            93: [0.25, 0.75, 0, 0, 0.31944],
            94: [0, 0.69444, 0, 0, 0.575],
            95: [0.31, 0.13444, 0.03194, 0, 0.575],
            97: [0, 0.44444, 0, 0, 0.55902],
            98: [0, 0.69444, 0, 0, 0.63889],
            99: [0, 0.44444, 0, 0, 0.51111],
            100: [0, 0.69444, 0, 0, 0.63889],
            101: [0, 0.44444, 0, 0, 0.52708],
            102: [0, 0.69444, 0.10903, 0, 0.35139],
            103: [0.19444, 0.44444, 0.01597, 0, 0.575],
            104: [0, 0.69444, 0, 0, 0.63889],
            105: [0, 0.69444, 0, 0, 0.31944],
            106: [0.19444, 0.69444, 0, 0, 0.35139],
            107: [0, 0.69444, 0, 0, 0.60694],
            108: [0, 0.69444, 0, 0, 0.31944],
            109: [0, 0.44444, 0, 0, 0.95833],
            110: [0, 0.44444, 0, 0, 0.63889],
            111: [0, 0.44444, 0, 0, 0.575],
            112: [0.19444, 0.44444, 0, 0, 0.63889],
            113: [0.19444, 0.44444, 0, 0, 0.60694],
            114: [0, 0.44444, 0, 0, 0.47361],
            115: [0, 0.44444, 0, 0, 0.45361],
            116: [0, 0.63492, 0, 0, 0.44722],
            117: [0, 0.44444, 0, 0, 0.63889],
            118: [0, 0.44444, 0.01597, 0, 0.60694],
            119: [0, 0.44444, 0.01597, 0, 0.83055],
            120: [0, 0.44444, 0, 0, 0.60694],
            121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
            122: [0, 0.44444, 0, 0, 0.51111],
            123: [0.25, 0.75, 0, 0, 0.575],
            124: [0.25, 0.75, 0, 0, 0.31944],
            125: [0.25, 0.75, 0, 0, 0.575],
            126: [0.35, 0.34444, 0, 0, 0.575],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.86853],
            168: [0, 0.69444, 0, 0, 0.575],
            172: [0, 0.44444, 0, 0, 0.76666],
            176: [0, 0.69444, 0, 0, 0.86944],
            177: [0.13333, 0.63333, 0, 0, 0.89444],
            184: [0.17014, 0, 0, 0, 0.51111],
            198: [0, 0.68611, 0, 0, 1.04166],
            215: [0.13333, 0.63333, 0, 0, 0.89444],
            216: [0.04861, 0.73472, 0, 0, 0.89444],
            223: [0, 0.69444, 0, 0, 0.59722],
            230: [0, 0.44444, 0, 0, 0.83055],
            247: [0.13333, 0.63333, 0, 0, 0.89444],
            248: [0.09722, 0.54167, 0, 0, 0.575],
            305: [0, 0.44444, 0, 0, 0.31944],
            338: [0, 0.68611, 0, 0, 1.16944],
            339: [0, 0.44444, 0, 0, 0.89444],
            567: [0.19444, 0.44444, 0, 0, 0.35139],
            710: [0, 0.69444, 0, 0, 0.575],
            711: [0, 0.63194, 0, 0, 0.575],
            713: [0, 0.59611, 0, 0, 0.575],
            714: [0, 0.69444, 0, 0, 0.575],
            715: [0, 0.69444, 0, 0, 0.575],
            728: [0, 0.69444, 0, 0, 0.575],
            729: [0, 0.69444, 0, 0, 0.31944],
            730: [0, 0.69444, 0, 0, 0.86944],
            732: [0, 0.69444, 0, 0, 0.575],
            733: [0, 0.69444, 0, 0, 0.575],
            915: [0, 0.68611, 0, 0, 0.69166],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0, 0, 0.89444],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0, 0, 0.76666],
            928: [0, 0.68611, 0, 0, 0.9],
            931: [0, 0.68611, 0, 0, 0.83055],
            933: [0, 0.68611, 0, 0, 0.89444],
            934: [0, 0.68611, 0, 0, 0.83055],
            936: [0, 0.68611, 0, 0, 0.89444],
            937: [0, 0.68611, 0, 0, 0.83055],
            8211: [0, 0.44444, 0.03194, 0, 0.575],
            8212: [0, 0.44444, 0.03194, 0, 1.14999],
            8216: [0, 0.69444, 0, 0, 0.31944],
            8217: [0, 0.69444, 0, 0, 0.31944],
            8220: [0, 0.69444, 0, 0, 0.60278],
            8221: [0, 0.69444, 0, 0, 0.60278],
            8224: [0.19444, 0.69444, 0, 0, 0.51111],
            8225: [0.19444, 0.69444, 0, 0, 0.51111],
            8242: [0, 0.55556, 0, 0, 0.34444],
            8407: [0, 0.72444, 0.15486, 0, 0.575],
            8463: [0, 0.69444, 0, 0, 0.66759],
            8465: [0, 0.69444, 0, 0, 0.83055],
            8467: [0, 0.69444, 0, 0, 0.47361],
            8472: [0.19444, 0.44444, 0, 0, 0.74027],
            8476: [0, 0.69444, 0, 0, 0.83055],
            8501: [0, 0.69444, 0, 0, 0.70277],
            8592: [-0.10889, 0.39111, 0, 0, 1.14999],
            8593: [0.19444, 0.69444, 0, 0, 0.575],
            8594: [-0.10889, 0.39111, 0, 0, 1.14999],
            8595: [0.19444, 0.69444, 0, 0, 0.575],
            8596: [-0.10889, 0.39111, 0, 0, 1.14999],
            8597: [0.25, 0.75, 0, 0, 0.575],
            8598: [0.19444, 0.69444, 0, 0, 1.14999],
            8599: [0.19444, 0.69444, 0, 0, 1.14999],
            8600: [0.19444, 0.69444, 0, 0, 1.14999],
            8601: [0.19444, 0.69444, 0, 0, 1.14999],
            8636: [-0.10889, 0.39111, 0, 0, 1.14999],
            8637: [-0.10889, 0.39111, 0, 0, 1.14999],
            8640: [-0.10889, 0.39111, 0, 0, 1.14999],
            8641: [-0.10889, 0.39111, 0, 0, 1.14999],
            8656: [-0.10889, 0.39111, 0, 0, 1.14999],
            8657: [0.19444, 0.69444, 0, 0, 0.70277],
            8658: [-0.10889, 0.39111, 0, 0, 1.14999],
            8659: [0.19444, 0.69444, 0, 0, 0.70277],
            8660: [-0.10889, 0.39111, 0, 0, 1.14999],
            8661: [0.25, 0.75, 0, 0, 0.70277],
            8704: [0, 0.69444, 0, 0, 0.63889],
            8706: [0, 0.69444, 0.06389, 0, 0.62847],
            8707: [0, 0.69444, 0, 0, 0.63889],
            8709: [0.05556, 0.75, 0, 0, 0.575],
            8711: [0, 0.68611, 0, 0, 0.95833],
            8712: [0.08556, 0.58556, 0, 0, 0.76666],
            8715: [0.08556, 0.58556, 0, 0, 0.76666],
            8722: [0.13333, 0.63333, 0, 0, 0.89444],
            8723: [0.13333, 0.63333, 0, 0, 0.89444],
            8725: [0.25, 0.75, 0, 0, 0.575],
            8726: [0.25, 0.75, 0, 0, 0.575],
            8727: [-0.02778, 0.47222, 0, 0, 0.575],
            8728: [-0.02639, 0.47361, 0, 0, 0.575],
            8729: [-0.02639, 0.47361, 0, 0, 0.575],
            8730: [0.18, 0.82, 0, 0, 0.95833],
            8733: [0, 0.44444, 0, 0, 0.89444],
            8734: [0, 0.44444, 0, 0, 1.14999],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.31944],
            8741: [0.25, 0.75, 0, 0, 0.575],
            8743: [0, 0.55556, 0, 0, 0.76666],
            8744: [0, 0.55556, 0, 0, 0.76666],
            8745: [0, 0.55556, 0, 0, 0.76666],
            8746: [0, 0.55556, 0, 0, 0.76666],
            8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
            8764: [-0.10889, 0.39111, 0, 0, 0.89444],
            8768: [0.19444, 0.69444, 0, 0, 0.31944],
            8771: [222e-5, 0.50222, 0, 0, 0.89444],
            8773: [0.027, 0.638, 0, 0, 0.894],
            8776: [0.02444, 0.52444, 0, 0, 0.89444],
            8781: [222e-5, 0.50222, 0, 0, 0.89444],
            8801: [222e-5, 0.50222, 0, 0, 0.89444],
            8804: [0.19667, 0.69667, 0, 0, 0.89444],
            8805: [0.19667, 0.69667, 0, 0, 0.89444],
            8810: [0.08556, 0.58556, 0, 0, 1.14999],
            8811: [0.08556, 0.58556, 0, 0, 1.14999],
            8826: [0.08556, 0.58556, 0, 0, 0.89444],
            8827: [0.08556, 0.58556, 0, 0, 0.89444],
            8834: [0.08556, 0.58556, 0, 0, 0.89444],
            8835: [0.08556, 0.58556, 0, 0, 0.89444],
            8838: [0.19667, 0.69667, 0, 0, 0.89444],
            8839: [0.19667, 0.69667, 0, 0, 0.89444],
            8846: [0, 0.55556, 0, 0, 0.76666],
            8849: [0.19667, 0.69667, 0, 0, 0.89444],
            8850: [0.19667, 0.69667, 0, 0, 0.89444],
            8851: [0, 0.55556, 0, 0, 0.76666],
            8852: [0, 0.55556, 0, 0, 0.76666],
            8853: [0.13333, 0.63333, 0, 0, 0.89444],
            8854: [0.13333, 0.63333, 0, 0, 0.89444],
            8855: [0.13333, 0.63333, 0, 0, 0.89444],
            8856: [0.13333, 0.63333, 0, 0, 0.89444],
            8857: [0.13333, 0.63333, 0, 0, 0.89444],
            8866: [0, 0.69444, 0, 0, 0.70277],
            8867: [0, 0.69444, 0, 0, 0.70277],
            8868: [0, 0.69444, 0, 0, 0.89444],
            8869: [0, 0.69444, 0, 0, 0.89444],
            8900: [-0.02639, 0.47361, 0, 0, 0.575],
            8901: [-0.02639, 0.47361, 0, 0, 0.31944],
            8902: [-0.02778, 0.47222, 0, 0, 0.575],
            8968: [0.25, 0.75, 0, 0, 0.51111],
            8969: [0.25, 0.75, 0, 0, 0.51111],
            8970: [0.25, 0.75, 0, 0, 0.51111],
            8971: [0.25, 0.75, 0, 0, 0.51111],
            8994: [-0.13889, 0.36111, 0, 0, 1.14999],
            8995: [-0.13889, 0.36111, 0, 0, 1.14999],
            9651: [0.19444, 0.69444, 0, 0, 1.02222],
            9657: [-0.02778, 0.47222, 0, 0, 0.575],
            9661: [0.19444, 0.69444, 0, 0, 1.02222],
            9667: [-0.02778, 0.47222, 0, 0, 0.575],
            9711: [0.19444, 0.69444, 0, 0, 1.14999],
            9824: [0.12963, 0.69444, 0, 0, 0.89444],
            9825: [0.12963, 0.69444, 0, 0, 0.89444],
            9826: [0.12963, 0.69444, 0, 0, 0.89444],
            9827: [0.12963, 0.69444, 0, 0, 0.89444],
            9837: [0, 0.75, 0, 0, 0.44722],
            9838: [0.19444, 0.69444, 0, 0, 0.44722],
            9839: [0.19444, 0.69444, 0, 0, 0.44722],
            10216: [0.25, 0.75, 0, 0, 0.44722],
            10217: [0.25, 0.75, 0, 0, 0.44722],
            10815: [0, 0.68611, 0, 0, 0.9],
            10927: [0.19667, 0.69667, 0, 0, 0.89444],
            10928: [0.19667, 0.69667, 0, 0, 0.89444],
            57376: [0.19444, 0.69444, 0, 0, 0]
          },
          "Main-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.11417, 0, 0.38611],
            34: [0, 0.69444, 0.07939, 0, 0.62055],
            35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
            37: [0.05556, 0.75, 0.12861, 0, 0.94444],
            38: [0, 0.69444, 0.08528, 0, 0.88555],
            39: [0, 0.69444, 0.12945, 0, 0.35555],
            40: [0.25, 0.75, 0.15806, 0, 0.47333],
            41: [0.25, 0.75, 0.03306, 0, 0.47333],
            42: [0, 0.75, 0.14333, 0, 0.59111],
            43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
            44: [0.19444, 0.14722, 0, 0, 0.35555],
            45: [0, 0.44444, 0.02611, 0, 0.41444],
            46: [0, 0.14722, 0, 0, 0.35555],
            47: [0.25, 0.75, 0.15806, 0, 0.59111],
            48: [0, 0.64444, 0.13167, 0, 0.59111],
            49: [0, 0.64444, 0.13167, 0, 0.59111],
            50: [0, 0.64444, 0.13167, 0, 0.59111],
            51: [0, 0.64444, 0.13167, 0, 0.59111],
            52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            53: [0, 0.64444, 0.13167, 0, 0.59111],
            54: [0, 0.64444, 0.13167, 0, 0.59111],
            55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            56: [0, 0.64444, 0.13167, 0, 0.59111],
            57: [0, 0.64444, 0.13167, 0, 0.59111],
            58: [0, 0.44444, 0.06695, 0, 0.35555],
            59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
            61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
            63: [0, 0.69444, 0.11472, 0, 0.59111],
            64: [0, 0.69444, 0.09208, 0, 0.88555],
            65: [0, 0.68611, 0, 0, 0.86555],
            66: [0, 0.68611, 0.0992, 0, 0.81666],
            67: [0, 0.68611, 0.14208, 0, 0.82666],
            68: [0, 0.68611, 0.09062, 0, 0.87555],
            69: [0, 0.68611, 0.11431, 0, 0.75666],
            70: [0, 0.68611, 0.12903, 0, 0.72722],
            71: [0, 0.68611, 0.07347, 0, 0.89527],
            72: [0, 0.68611, 0.17208, 0, 0.8961],
            73: [0, 0.68611, 0.15681, 0, 0.47166],
            74: [0, 0.68611, 0.145, 0, 0.61055],
            75: [0, 0.68611, 0.14208, 0, 0.89499],
            76: [0, 0.68611, 0, 0, 0.69777],
            77: [0, 0.68611, 0.17208, 0, 1.07277],
            78: [0, 0.68611, 0.17208, 0, 0.8961],
            79: [0, 0.68611, 0.09062, 0, 0.85499],
            80: [0, 0.68611, 0.0992, 0, 0.78721],
            81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
            82: [0, 0.68611, 0.02559, 0, 0.85944],
            83: [0, 0.68611, 0.11264, 0, 0.64999],
            84: [0, 0.68611, 0.12903, 0, 0.7961],
            85: [0, 0.68611, 0.17208, 0, 0.88083],
            86: [0, 0.68611, 0.18625, 0, 0.86555],
            87: [0, 0.68611, 0.18625, 0, 1.15999],
            88: [0, 0.68611, 0.15681, 0, 0.86555],
            89: [0, 0.68611, 0.19803, 0, 0.86555],
            90: [0, 0.68611, 0.14208, 0, 0.70888],
            91: [0.25, 0.75, 0.1875, 0, 0.35611],
            93: [0.25, 0.75, 0.09972, 0, 0.35611],
            94: [0, 0.69444, 0.06709, 0, 0.59111],
            95: [0.31, 0.13444, 0.09811, 0, 0.59111],
            97: [0, 0.44444, 0.09426, 0, 0.59111],
            98: [0, 0.69444, 0.07861, 0, 0.53222],
            99: [0, 0.44444, 0.05222, 0, 0.53222],
            100: [0, 0.69444, 0.10861, 0, 0.59111],
            101: [0, 0.44444, 0.085, 0, 0.53222],
            102: [0.19444, 0.69444, 0.21778, 0, 0.4],
            103: [0.19444, 0.44444, 0.105, 0, 0.53222],
            104: [0, 0.69444, 0.09426, 0, 0.59111],
            105: [0, 0.69326, 0.11387, 0, 0.35555],
            106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
            107: [0, 0.69444, 0.11111, 0, 0.53222],
            108: [0, 0.69444, 0.10861, 0, 0.29666],
            109: [0, 0.44444, 0.09426, 0, 0.94444],
            110: [0, 0.44444, 0.09426, 0, 0.64999],
            111: [0, 0.44444, 0.07861, 0, 0.59111],
            112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
            113: [0.19444, 0.44444, 0.105, 0, 0.53222],
            114: [0, 0.44444, 0.11111, 0, 0.50167],
            115: [0, 0.44444, 0.08167, 0, 0.48694],
            116: [0, 0.63492, 0.09639, 0, 0.385],
            117: [0, 0.44444, 0.09426, 0, 0.62055],
            118: [0, 0.44444, 0.11111, 0, 0.53222],
            119: [0, 0.44444, 0.11111, 0, 0.76777],
            120: [0, 0.44444, 0.12583, 0, 0.56055],
            121: [0.19444, 0.44444, 0.105, 0, 0.56166],
            122: [0, 0.44444, 0.13889, 0, 0.49055],
            126: [0.35, 0.34444, 0.11472, 0, 0.59111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0.11473, 0, 0.59111],
            176: [0, 0.69444, 0, 0, 0.94888],
            184: [0.17014, 0, 0, 0, 0.53222],
            198: [0, 0.68611, 0.11431, 0, 1.02277],
            216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
            223: [0.19444, 0.69444, 0.09736, 0, 0.665],
            230: [0, 0.44444, 0.085, 0, 0.82666],
            248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
            305: [0, 0.44444, 0.09426, 0, 0.35555],
            338: [0, 0.68611, 0.11431, 0, 1.14054],
            339: [0, 0.44444, 0.085, 0, 0.82666],
            567: [0.19444, 0.44444, 0.04611, 0, 0.385],
            710: [0, 0.69444, 0.06709, 0, 0.59111],
            711: [0, 0.63194, 0.08271, 0, 0.59111],
            713: [0, 0.59444, 0.10444, 0, 0.59111],
            714: [0, 0.69444, 0.08528, 0, 0.59111],
            715: [0, 0.69444, 0, 0, 0.59111],
            728: [0, 0.69444, 0.10333, 0, 0.59111],
            729: [0, 0.69444, 0.12945, 0, 0.35555],
            730: [0, 0.69444, 0, 0, 0.94888],
            732: [0, 0.69444, 0.11472, 0, 0.59111],
            733: [0, 0.69444, 0.11472, 0, 0.59111],
            915: [0, 0.68611, 0.12903, 0, 0.69777],
            916: [0, 0.68611, 0, 0, 0.94444],
            920: [0, 0.68611, 0.09062, 0, 0.88555],
            923: [0, 0.68611, 0, 0, 0.80666],
            926: [0, 0.68611, 0.15092, 0, 0.76777],
            928: [0, 0.68611, 0.17208, 0, 0.8961],
            931: [0, 0.68611, 0.11431, 0, 0.82666],
            933: [0, 0.68611, 0.10778, 0, 0.88555],
            934: [0, 0.68611, 0.05632, 0, 0.82666],
            936: [0, 0.68611, 0.10778, 0, 0.88555],
            937: [0, 0.68611, 0.0992, 0, 0.82666],
            8211: [0, 0.44444, 0.09811, 0, 0.59111],
            8212: [0, 0.44444, 0.09811, 0, 1.18221],
            8216: [0, 0.69444, 0.12945, 0, 0.35555],
            8217: [0, 0.69444, 0.12945, 0, 0.35555],
            8220: [0, 0.69444, 0.16772, 0, 0.62055],
            8221: [0, 0.69444, 0.07939, 0, 0.62055]
          },
          "Main-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.12417, 0, 0.30667],
            34: [0, 0.69444, 0.06961, 0, 0.51444],
            35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
            37: [0.05556, 0.75, 0.13639, 0, 0.81777],
            38: [0, 0.69444, 0.09694, 0, 0.76666],
            39: [0, 0.69444, 0.12417, 0, 0.30667],
            40: [0.25, 0.75, 0.16194, 0, 0.40889],
            41: [0.25, 0.75, 0.03694, 0, 0.40889],
            42: [0, 0.75, 0.14917, 0, 0.51111],
            43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
            44: [0.19444, 0.10556, 0, 0, 0.30667],
            45: [0, 0.43056, 0.02826, 0, 0.35778],
            46: [0, 0.10556, 0, 0, 0.30667],
            47: [0.25, 0.75, 0.16194, 0, 0.51111],
            48: [0, 0.64444, 0.13556, 0, 0.51111],
            49: [0, 0.64444, 0.13556, 0, 0.51111],
            50: [0, 0.64444, 0.13556, 0, 0.51111],
            51: [0, 0.64444, 0.13556, 0, 0.51111],
            52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            53: [0, 0.64444, 0.13556, 0, 0.51111],
            54: [0, 0.64444, 0.13556, 0, 0.51111],
            55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            56: [0, 0.64444, 0.13556, 0, 0.51111],
            57: [0, 0.64444, 0.13556, 0, 0.51111],
            58: [0, 0.43056, 0.0582, 0, 0.30667],
            59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
            61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
            63: [0, 0.69444, 0.1225, 0, 0.51111],
            64: [0, 0.69444, 0.09597, 0, 0.76666],
            65: [0, 0.68333, 0, 0, 0.74333],
            66: [0, 0.68333, 0.10257, 0, 0.70389],
            67: [0, 0.68333, 0.14528, 0, 0.71555],
            68: [0, 0.68333, 0.09403, 0, 0.755],
            69: [0, 0.68333, 0.12028, 0, 0.67833],
            70: [0, 0.68333, 0.13305, 0, 0.65277],
            71: [0, 0.68333, 0.08722, 0, 0.77361],
            72: [0, 0.68333, 0.16389, 0, 0.74333],
            73: [0, 0.68333, 0.15806, 0, 0.38555],
            74: [0, 0.68333, 0.14028, 0, 0.525],
            75: [0, 0.68333, 0.14528, 0, 0.76888],
            76: [0, 0.68333, 0, 0, 0.62722],
            77: [0, 0.68333, 0.16389, 0, 0.89666],
            78: [0, 0.68333, 0.16389, 0, 0.74333],
            79: [0, 0.68333, 0.09403, 0, 0.76666],
            80: [0, 0.68333, 0.10257, 0, 0.67833],
            81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
            82: [0, 0.68333, 0.03868, 0, 0.72944],
            83: [0, 0.68333, 0.11972, 0, 0.56222],
            84: [0, 0.68333, 0.13305, 0, 0.71555],
            85: [0, 0.68333, 0.16389, 0, 0.74333],
            86: [0, 0.68333, 0.18361, 0, 0.74333],
            87: [0, 0.68333, 0.18361, 0, 0.99888],
            88: [0, 0.68333, 0.15806, 0, 0.74333],
            89: [0, 0.68333, 0.19383, 0, 0.74333],
            90: [0, 0.68333, 0.14528, 0, 0.61333],
            91: [0.25, 0.75, 0.1875, 0, 0.30667],
            93: [0.25, 0.75, 0.10528, 0, 0.30667],
            94: [0, 0.69444, 0.06646, 0, 0.51111],
            95: [0.31, 0.12056, 0.09208, 0, 0.51111],
            97: [0, 0.43056, 0.07671, 0, 0.51111],
            98: [0, 0.69444, 0.06312, 0, 0.46],
            99: [0, 0.43056, 0.05653, 0, 0.46],
            100: [0, 0.69444, 0.10333, 0, 0.51111],
            101: [0, 0.43056, 0.07514, 0, 0.46],
            102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
            103: [0.19444, 0.43056, 0.08847, 0, 0.46],
            104: [0, 0.69444, 0.07671, 0, 0.51111],
            105: [0, 0.65536, 0.1019, 0, 0.30667],
            106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
            107: [0, 0.69444, 0.10764, 0, 0.46],
            108: [0, 0.69444, 0.10333, 0, 0.25555],
            109: [0, 0.43056, 0.07671, 0, 0.81777],
            110: [0, 0.43056, 0.07671, 0, 0.56222],
            111: [0, 0.43056, 0.06312, 0, 0.51111],
            112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
            113: [0.19444, 0.43056, 0.08847, 0, 0.46],
            114: [0, 0.43056, 0.10764, 0, 0.42166],
            115: [0, 0.43056, 0.08208, 0, 0.40889],
            116: [0, 0.61508, 0.09486, 0, 0.33222],
            117: [0, 0.43056, 0.07671, 0, 0.53666],
            118: [0, 0.43056, 0.10764, 0, 0.46],
            119: [0, 0.43056, 0.10764, 0, 0.66444],
            120: [0, 0.43056, 0.12042, 0, 0.46389],
            121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
            122: [0, 0.43056, 0.12292, 0, 0.40889],
            126: [0.35, 0.31786, 0.11585, 0, 0.51111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.66786, 0.10474, 0, 0.51111],
            176: [0, 0.69444, 0, 0, 0.83129],
            184: [0.17014, 0, 0, 0, 0.46],
            198: [0, 0.68333, 0.12028, 0, 0.88277],
            216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
            223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
            230: [0, 0.43056, 0.07514, 0, 0.71555],
            248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
            338: [0, 0.68333, 0.12028, 0, 0.98499],
            339: [0, 0.43056, 0.07514, 0, 0.71555],
            710: [0, 0.69444, 0.06646, 0, 0.51111],
            711: [0, 0.62847, 0.08295, 0, 0.51111],
            713: [0, 0.56167, 0.10333, 0, 0.51111],
            714: [0, 0.69444, 0.09694, 0, 0.51111],
            715: [0, 0.69444, 0, 0, 0.51111],
            728: [0, 0.69444, 0.10806, 0, 0.51111],
            729: [0, 0.66786, 0.11752, 0, 0.30667],
            730: [0, 0.69444, 0, 0, 0.83129],
            732: [0, 0.66786, 0.11585, 0, 0.51111],
            733: [0, 0.69444, 0.1225, 0, 0.51111],
            915: [0, 0.68333, 0.13305, 0, 0.62722],
            916: [0, 0.68333, 0, 0, 0.81777],
            920: [0, 0.68333, 0.09403, 0, 0.76666],
            923: [0, 0.68333, 0, 0, 0.69222],
            926: [0, 0.68333, 0.15294, 0, 0.66444],
            928: [0, 0.68333, 0.16389, 0, 0.74333],
            931: [0, 0.68333, 0.12028, 0, 0.71555],
            933: [0, 0.68333, 0.11111, 0, 0.76666],
            934: [0, 0.68333, 0.05986, 0, 0.71555],
            936: [0, 0.68333, 0.11111, 0, 0.76666],
            937: [0, 0.68333, 0.10257, 0, 0.71555],
            8211: [0, 0.43056, 0.09208, 0, 0.51111],
            8212: [0, 0.43056, 0.09208, 0, 1.02222],
            8216: [0, 0.69444, 0.12417, 0, 0.30667],
            8217: [0, 0.69444, 0.12417, 0, 0.30667],
            8220: [0, 0.69444, 0.1685, 0, 0.51444],
            8221: [0, 0.69444, 0.06961, 0, 0.51444],
            8463: [0, 0.68889, 0, 0, 0.54028]
          },
          "Main-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.27778],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.77778],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.19444, 0.10556, 0, 0, 0.27778],
            45: [0, 0.43056, 0, 0, 0.33333],
            46: [0, 0.10556, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.64444, 0, 0, 0.5],
            49: [0, 0.64444, 0, 0, 0.5],
            50: [0, 0.64444, 0, 0, 0.5],
            51: [0, 0.64444, 0, 0, 0.5],
            52: [0, 0.64444, 0, 0, 0.5],
            53: [0, 0.64444, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0, 0.64444, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0, 0.64444, 0, 0, 0.5],
            58: [0, 0.43056, 0, 0, 0.27778],
            59: [0.19444, 0.43056, 0, 0, 0.27778],
            60: [0.0391, 0.5391, 0, 0, 0.77778],
            61: [-0.13313, 0.36687, 0, 0, 0.77778],
            62: [0.0391, 0.5391, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.77778],
            65: [0, 0.68333, 0, 0, 0.75],
            66: [0, 0.68333, 0, 0, 0.70834],
            67: [0, 0.68333, 0, 0, 0.72222],
            68: [0, 0.68333, 0, 0, 0.76389],
            69: [0, 0.68333, 0, 0, 0.68056],
            70: [0, 0.68333, 0, 0, 0.65278],
            71: [0, 0.68333, 0, 0, 0.78472],
            72: [0, 0.68333, 0, 0, 0.75],
            73: [0, 0.68333, 0, 0, 0.36111],
            74: [0, 0.68333, 0, 0, 0.51389],
            75: [0, 0.68333, 0, 0, 0.77778],
            76: [0, 0.68333, 0, 0, 0.625],
            77: [0, 0.68333, 0, 0, 0.91667],
            78: [0, 0.68333, 0, 0, 0.75],
            79: [0, 0.68333, 0, 0, 0.77778],
            80: [0, 0.68333, 0, 0, 0.68056],
            81: [0.19444, 0.68333, 0, 0, 0.77778],
            82: [0, 0.68333, 0, 0, 0.73611],
            83: [0, 0.68333, 0, 0, 0.55556],
            84: [0, 0.68333, 0, 0, 0.72222],
            85: [0, 0.68333, 0, 0, 0.75],
            86: [0, 0.68333, 0.01389, 0, 0.75],
            87: [0, 0.68333, 0.01389, 0, 1.02778],
            88: [0, 0.68333, 0, 0, 0.75],
            89: [0, 0.68333, 0.025, 0, 0.75],
            90: [0, 0.68333, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.27778],
            92: [0.25, 0.75, 0, 0, 0.5],
            93: [0.25, 0.75, 0, 0, 0.27778],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.31, 0.12056, 0.02778, 0, 0.5],
            97: [0, 0.43056, 0, 0, 0.5],
            98: [0, 0.69444, 0, 0, 0.55556],
            99: [0, 0.43056, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.55556],
            101: [0, 0.43056, 0, 0, 0.44445],
            102: [0, 0.69444, 0.07778, 0, 0.30556],
            103: [0.19444, 0.43056, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.55556],
            105: [0, 0.66786, 0, 0, 0.27778],
            106: [0.19444, 0.66786, 0, 0, 0.30556],
            107: [0, 0.69444, 0, 0, 0.52778],
            108: [0, 0.69444, 0, 0, 0.27778],
            109: [0, 0.43056, 0, 0, 0.83334],
            110: [0, 0.43056, 0, 0, 0.55556],
            111: [0, 0.43056, 0, 0, 0.5],
            112: [0.19444, 0.43056, 0, 0, 0.55556],
            113: [0.19444, 0.43056, 0, 0, 0.52778],
            114: [0, 0.43056, 0, 0, 0.39167],
            115: [0, 0.43056, 0, 0, 0.39445],
            116: [0, 0.61508, 0, 0, 0.38889],
            117: [0, 0.43056, 0, 0, 0.55556],
            118: [0, 0.43056, 0.01389, 0, 0.52778],
            119: [0, 0.43056, 0.01389, 0, 0.72222],
            120: [0, 0.43056, 0, 0, 0.52778],
            121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
            122: [0, 0.43056, 0, 0, 0.44445],
            123: [0.25, 0.75, 0, 0, 0.5],
            124: [0.25, 0.75, 0, 0, 0.27778],
            125: [0.25, 0.75, 0, 0, 0.5],
            126: [0.35, 0.31786, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.76909],
            167: [0.19444, 0.69444, 0, 0, 0.44445],
            168: [0, 0.66786, 0, 0, 0.5],
            172: [0, 0.43056, 0, 0, 0.66667],
            176: [0, 0.69444, 0, 0, 0.75],
            177: [0.08333, 0.58333, 0, 0, 0.77778],
            182: [0.19444, 0.69444, 0, 0, 0.61111],
            184: [0.17014, 0, 0, 0, 0.44445],
            198: [0, 0.68333, 0, 0, 0.90278],
            215: [0.08333, 0.58333, 0, 0, 0.77778],
            216: [0.04861, 0.73194, 0, 0, 0.77778],
            223: [0, 0.69444, 0, 0, 0.5],
            230: [0, 0.43056, 0, 0, 0.72222],
            247: [0.08333, 0.58333, 0, 0, 0.77778],
            248: [0.09722, 0.52778, 0, 0, 0.5],
            305: [0, 0.43056, 0, 0, 0.27778],
            338: [0, 0.68333, 0, 0, 1.01389],
            339: [0, 0.43056, 0, 0, 0.77778],
            567: [0.19444, 0.43056, 0, 0, 0.30556],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.62847, 0, 0, 0.5],
            713: [0, 0.56778, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.66786, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.75],
            732: [0, 0.66786, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.68333, 0, 0, 0.625],
            916: [0, 0.68333, 0, 0, 0.83334],
            920: [0, 0.68333, 0, 0, 0.77778],
            923: [0, 0.68333, 0, 0, 0.69445],
            926: [0, 0.68333, 0, 0, 0.66667],
            928: [0, 0.68333, 0, 0, 0.75],
            931: [0, 0.68333, 0, 0, 0.72222],
            933: [0, 0.68333, 0, 0, 0.77778],
            934: [0, 0.68333, 0, 0, 0.72222],
            936: [0, 0.68333, 0, 0, 0.77778],
            937: [0, 0.68333, 0, 0, 0.72222],
            8211: [0, 0.43056, 0.02778, 0, 0.5],
            8212: [0, 0.43056, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5],
            8224: [0.19444, 0.69444, 0, 0, 0.44445],
            8225: [0.19444, 0.69444, 0, 0, 0.44445],
            8230: [0, 0.123, 0, 0, 1.172],
            8242: [0, 0.55556, 0, 0, 0.275],
            8407: [0, 0.71444, 0.15382, 0, 0.5],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8465: [0, 0.69444, 0, 0, 0.72222],
            8467: [0, 0.69444, 0, 0.11111, 0.41667],
            8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
            8476: [0, 0.69444, 0, 0, 0.72222],
            8501: [0, 0.69444, 0, 0, 0.61111],
            8592: [-0.13313, 0.36687, 0, 0, 1],
            8593: [0.19444, 0.69444, 0, 0, 0.5],
            8594: [-0.13313, 0.36687, 0, 0, 1],
            8595: [0.19444, 0.69444, 0, 0, 0.5],
            8596: [-0.13313, 0.36687, 0, 0, 1],
            8597: [0.25, 0.75, 0, 0, 0.5],
            8598: [0.19444, 0.69444, 0, 0, 1],
            8599: [0.19444, 0.69444, 0, 0, 1],
            8600: [0.19444, 0.69444, 0, 0, 1],
            8601: [0.19444, 0.69444, 0, 0, 1],
            8614: [0.011, 0.511, 0, 0, 1],
            8617: [0.011, 0.511, 0, 0, 1.126],
            8618: [0.011, 0.511, 0, 0, 1.126],
            8636: [-0.13313, 0.36687, 0, 0, 1],
            8637: [-0.13313, 0.36687, 0, 0, 1],
            8640: [-0.13313, 0.36687, 0, 0, 1],
            8641: [-0.13313, 0.36687, 0, 0, 1],
            8652: [0.011, 0.671, 0, 0, 1],
            8656: [-0.13313, 0.36687, 0, 0, 1],
            8657: [0.19444, 0.69444, 0, 0, 0.61111],
            8658: [-0.13313, 0.36687, 0, 0, 1],
            8659: [0.19444, 0.69444, 0, 0, 0.61111],
            8660: [-0.13313, 0.36687, 0, 0, 1],
            8661: [0.25, 0.75, 0, 0, 0.61111],
            8704: [0, 0.69444, 0, 0, 0.55556],
            8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
            8707: [0, 0.69444, 0, 0, 0.55556],
            8709: [0.05556, 0.75, 0, 0, 0.5],
            8711: [0, 0.68333, 0, 0, 0.83334],
            8712: [0.0391, 0.5391, 0, 0, 0.66667],
            8715: [0.0391, 0.5391, 0, 0, 0.66667],
            8722: [0.08333, 0.58333, 0, 0, 0.77778],
            8723: [0.08333, 0.58333, 0, 0, 0.77778],
            8725: [0.25, 0.75, 0, 0, 0.5],
            8726: [0.25, 0.75, 0, 0, 0.5],
            8727: [-0.03472, 0.46528, 0, 0, 0.5],
            8728: [-0.05555, 0.44445, 0, 0, 0.5],
            8729: [-0.05555, 0.44445, 0, 0, 0.5],
            8730: [0.2, 0.8, 0, 0, 0.83334],
            8733: [0, 0.43056, 0, 0, 0.77778],
            8734: [0, 0.43056, 0, 0, 1],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.27778],
            8741: [0.25, 0.75, 0, 0, 0.5],
            8743: [0, 0.55556, 0, 0, 0.66667],
            8744: [0, 0.55556, 0, 0, 0.66667],
            8745: [0, 0.55556, 0, 0, 0.66667],
            8746: [0, 0.55556, 0, 0, 0.66667],
            8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8768: [0.19444, 0.69444, 0, 0, 0.27778],
            8771: [-0.03625, 0.46375, 0, 0, 0.77778],
            8773: [-0.022, 0.589, 0, 0, 0.778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8781: [-0.03625, 0.46375, 0, 0, 0.77778],
            8784: [-0.133, 0.673, 0, 0, 0.778],
            8801: [-0.03625, 0.46375, 0, 0, 0.77778],
            8804: [0.13597, 0.63597, 0, 0, 0.77778],
            8805: [0.13597, 0.63597, 0, 0, 0.77778],
            8810: [0.0391, 0.5391, 0, 0, 1],
            8811: [0.0391, 0.5391, 0, 0, 1],
            8826: [0.0391, 0.5391, 0, 0, 0.77778],
            8827: [0.0391, 0.5391, 0, 0, 0.77778],
            8834: [0.0391, 0.5391, 0, 0, 0.77778],
            8835: [0.0391, 0.5391, 0, 0, 0.77778],
            8838: [0.13597, 0.63597, 0, 0, 0.77778],
            8839: [0.13597, 0.63597, 0, 0, 0.77778],
            8846: [0, 0.55556, 0, 0, 0.66667],
            8849: [0.13597, 0.63597, 0, 0, 0.77778],
            8850: [0.13597, 0.63597, 0, 0, 0.77778],
            8851: [0, 0.55556, 0, 0, 0.66667],
            8852: [0, 0.55556, 0, 0, 0.66667],
            8853: [0.08333, 0.58333, 0, 0, 0.77778],
            8854: [0.08333, 0.58333, 0, 0, 0.77778],
            8855: [0.08333, 0.58333, 0, 0, 0.77778],
            8856: [0.08333, 0.58333, 0, 0, 0.77778],
            8857: [0.08333, 0.58333, 0, 0, 0.77778],
            8866: [0, 0.69444, 0, 0, 0.61111],
            8867: [0, 0.69444, 0, 0, 0.61111],
            8868: [0, 0.69444, 0, 0, 0.77778],
            8869: [0, 0.69444, 0, 0, 0.77778],
            8872: [0.249, 0.75, 0, 0, 0.867],
            8900: [-0.05555, 0.44445, 0, 0, 0.5],
            8901: [-0.05555, 0.44445, 0, 0, 0.27778],
            8902: [-0.03472, 0.46528, 0, 0, 0.5],
            8904: [5e-3, 0.505, 0, 0, 0.9],
            8942: [0.03, 0.903, 0, 0, 0.278],
            8943: [-0.19, 0.313, 0, 0, 1.172],
            8945: [-0.1, 0.823, 0, 0, 1.282],
            8968: [0.25, 0.75, 0, 0, 0.44445],
            8969: [0.25, 0.75, 0, 0, 0.44445],
            8970: [0.25, 0.75, 0, 0, 0.44445],
            8971: [0.25, 0.75, 0, 0, 0.44445],
            8994: [-0.14236, 0.35764, 0, 0, 1],
            8995: [-0.14236, 0.35764, 0, 0, 1],
            9136: [0.244, 0.744, 0, 0, 0.412],
            9137: [0.244, 0.745, 0, 0, 0.412],
            9651: [0.19444, 0.69444, 0, 0, 0.88889],
            9657: [-0.03472, 0.46528, 0, 0, 0.5],
            9661: [0.19444, 0.69444, 0, 0, 0.88889],
            9667: [-0.03472, 0.46528, 0, 0, 0.5],
            9711: [0.19444, 0.69444, 0, 0, 1],
            9824: [0.12963, 0.69444, 0, 0, 0.77778],
            9825: [0.12963, 0.69444, 0, 0, 0.77778],
            9826: [0.12963, 0.69444, 0, 0, 0.77778],
            9827: [0.12963, 0.69444, 0, 0, 0.77778],
            9837: [0, 0.75, 0, 0, 0.38889],
            9838: [0.19444, 0.69444, 0, 0, 0.38889],
            9839: [0.19444, 0.69444, 0, 0, 0.38889],
            10216: [0.25, 0.75, 0, 0, 0.38889],
            10217: [0.25, 0.75, 0, 0, 0.38889],
            10222: [0.244, 0.744, 0, 0, 0.412],
            10223: [0.244, 0.745, 0, 0, 0.412],
            10229: [0.011, 0.511, 0, 0, 1.609],
            10230: [0.011, 0.511, 0, 0, 1.638],
            10231: [0.011, 0.511, 0, 0, 1.859],
            10232: [0.024, 0.525, 0, 0, 1.609],
            10233: [0.024, 0.525, 0, 0, 1.638],
            10234: [0.024, 0.525, 0, 0, 1.858],
            10236: [0.011, 0.511, 0, 0, 1.638],
            10815: [0, 0.68333, 0, 0, 0.75],
            10927: [0.13597, 0.63597, 0, 0, 0.77778],
            10928: [0.13597, 0.63597, 0, 0, 0.77778],
            57376: [0.19444, 0.69444, 0, 0, 0]
          },
          "Math-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.44444, 0, 0, 0.575],
            49: [0, 0.44444, 0, 0, 0.575],
            50: [0, 0.44444, 0, 0, 0.575],
            51: [0.19444, 0.44444, 0, 0, 0.575],
            52: [0.19444, 0.44444, 0, 0, 0.575],
            53: [0.19444, 0.44444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0.19444, 0.44444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0.19444, 0.44444, 0, 0, 0.575],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0.04835, 0, 0.8664],
            67: [0, 0.68611, 0.06979, 0, 0.81694],
            68: [0, 0.68611, 0.03194, 0, 0.93812],
            69: [0, 0.68611, 0.05451, 0, 0.81007],
            70: [0, 0.68611, 0.15972, 0, 0.68889],
            71: [0, 0.68611, 0, 0, 0.88673],
            72: [0, 0.68611, 0.08229, 0, 0.98229],
            73: [0, 0.68611, 0.07778, 0, 0.51111],
            74: [0, 0.68611, 0.10069, 0, 0.63125],
            75: [0, 0.68611, 0.06979, 0, 0.97118],
            76: [0, 0.68611, 0, 0, 0.75555],
            77: [0, 0.68611, 0.11424, 0, 1.14201],
            78: [0, 0.68611, 0.11424, 0, 0.95034],
            79: [0, 0.68611, 0.03194, 0, 0.83666],
            80: [0, 0.68611, 0.15972, 0, 0.72309],
            81: [0.19444, 0.68611, 0, 0, 0.86861],
            82: [0, 0.68611, 421e-5, 0, 0.87235],
            83: [0, 0.68611, 0.05382, 0, 0.69271],
            84: [0, 0.68611, 0.15972, 0, 0.63663],
            85: [0, 0.68611, 0.11424, 0, 0.80027],
            86: [0, 0.68611, 0.25555, 0, 0.67778],
            87: [0, 0.68611, 0.15972, 0, 1.09305],
            88: [0, 0.68611, 0.07778, 0, 0.94722],
            89: [0, 0.68611, 0.25555, 0, 0.67458],
            90: [0, 0.68611, 0.06979, 0, 0.77257],
            97: [0, 0.44444, 0, 0, 0.63287],
            98: [0, 0.69444, 0, 0, 0.52083],
            99: [0, 0.44444, 0, 0, 0.51342],
            100: [0, 0.69444, 0, 0, 0.60972],
            101: [0, 0.44444, 0, 0, 0.55361],
            102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
            103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
            104: [0, 0.69444, 0, 0, 0.66759],
            105: [0, 0.69326, 0, 0, 0.4048],
            106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
            107: [0, 0.69444, 0.01852, 0, 0.6037],
            108: [0, 0.69444, 88e-4, 0, 0.34815],
            109: [0, 0.44444, 0, 0, 1.0324],
            110: [0, 0.44444, 0, 0, 0.71296],
            111: [0, 0.44444, 0, 0, 0.58472],
            112: [0.19444, 0.44444, 0, 0, 0.60092],
            113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
            114: [0, 0.44444, 0.03194, 0, 0.5287],
            115: [0, 0.44444, 0, 0, 0.53125],
            116: [0, 0.63492, 0, 0, 0.41528],
            117: [0, 0.44444, 0, 0, 0.68102],
            118: [0, 0.44444, 0.03704, 0, 0.56666],
            119: [0, 0.44444, 0.02778, 0, 0.83148],
            120: [0, 0.44444, 0, 0, 0.65903],
            121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
            122: [0, 0.44444, 0.04213, 0, 0.55509],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68611, 0.15972, 0, 0.65694],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0.03194, 0, 0.86722],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0.07458, 0, 0.84125],
            928: [0, 0.68611, 0.08229, 0, 0.98229],
            931: [0, 0.68611, 0.05451, 0, 0.88507],
            933: [0, 0.68611, 0.15972, 0, 0.67083],
            934: [0, 0.68611, 0, 0, 0.76666],
            936: [0, 0.68611, 0.11653, 0, 0.71402],
            937: [0, 0.68611, 0.04835, 0, 0.8789],
            945: [0, 0.44444, 0, 0, 0.76064],
            946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
            947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
            948: [0, 0.69444, 0.03819, 0, 0.52222],
            949: [0, 0.44444, 0, 0, 0.52882],
            950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
            951: [0.19444, 0.44444, 0.03704, 0, 0.6],
            952: [0, 0.69444, 0.03194, 0, 0.5618],
            953: [0, 0.44444, 0, 0, 0.41204],
            954: [0, 0.44444, 0, 0, 0.66759],
            955: [0, 0.69444, 0, 0, 0.67083],
            956: [0.19444, 0.44444, 0, 0, 0.70787],
            957: [0, 0.44444, 0.06898, 0, 0.57685],
            958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
            959: [0, 0.44444, 0, 0, 0.58472],
            960: [0, 0.44444, 0.03704, 0, 0.68241],
            961: [0.19444, 0.44444, 0, 0, 0.6118],
            962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
            963: [0, 0.44444, 0.03704, 0, 0.68588],
            964: [0, 0.44444, 0.13472, 0, 0.52083],
            965: [0, 0.44444, 0.03704, 0, 0.63055],
            966: [0.19444, 0.44444, 0, 0, 0.74722],
            967: [0.19444, 0.44444, 0, 0, 0.71805],
            968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
            969: [0, 0.44444, 0.03704, 0, 0.71782],
            977: [0, 0.69444, 0, 0, 0.69155],
            981: [0.19444, 0.69444, 0, 0, 0.7125],
            982: [0, 0.44444, 0.03194, 0, 0.975],
            1009: [0.19444, 0.44444, 0, 0, 0.6118],
            1013: [0, 0.44444, 0, 0, 0.48333],
            57649: [0, 0.44444, 0, 0, 0.39352],
            57911: [0.19444, 0.44444, 0, 0, 0.43889]
          },
          "Math-Italic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.43056, 0, 0, 0.5],
            49: [0, 0.43056, 0, 0, 0.5],
            50: [0, 0.43056, 0, 0, 0.5],
            51: [0.19444, 0.43056, 0, 0, 0.5],
            52: [0.19444, 0.43056, 0, 0, 0.5],
            53: [0.19444, 0.43056, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0.19444, 0.43056, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0.19444, 0.43056, 0, 0, 0.5],
            65: [0, 0.68333, 0, 0.13889, 0.75],
            66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
            67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
            68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
            69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
            70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
            71: [0, 0.68333, 0, 0.08334, 0.78625],
            72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
            74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
            75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
            76: [0, 0.68333, 0, 0.02778, 0.68056],
            77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
            78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
            79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
            81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
            82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
            83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
            84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
            85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
            86: [0, 0.68333, 0.22222, 0, 0.58333],
            87: [0, 0.68333, 0.13889, 0, 0.94445],
            88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
            89: [0, 0.68333, 0.22222, 0, 0.58056],
            90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
            97: [0, 0.43056, 0, 0, 0.52859],
            98: [0, 0.69444, 0, 0, 0.42917],
            99: [0, 0.43056, 0, 0.05556, 0.43276],
            100: [0, 0.69444, 0, 0.16667, 0.52049],
            101: [0, 0.43056, 0, 0.05556, 0.46563],
            102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
            103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
            104: [0, 0.69444, 0, 0, 0.57616],
            105: [0, 0.65952, 0, 0, 0.34451],
            106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
            107: [0, 0.69444, 0.03148, 0, 0.5206],
            108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
            109: [0, 0.43056, 0, 0, 0.87801],
            110: [0, 0.43056, 0, 0, 0.60023],
            111: [0, 0.43056, 0, 0.05556, 0.48472],
            112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
            113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
            114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
            115: [0, 0.43056, 0, 0.05556, 0.46875],
            116: [0, 0.61508, 0, 0.08334, 0.36111],
            117: [0, 0.43056, 0, 0.02778, 0.57246],
            118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
            119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
            120: [0, 0.43056, 0, 0.02778, 0.57153],
            121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
            122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
            916: [0, 0.68333, 0, 0.16667, 0.83334],
            920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            923: [0, 0.68333, 0, 0.16667, 0.69445],
            926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
            928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
            933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
            934: [0, 0.68333, 0, 0.08334, 0.66667],
            936: [0, 0.68333, 0.11, 0.05556, 0.61222],
            937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
            945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
            946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
            947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
            948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
            949: [0, 0.43056, 0, 0.08334, 0.46632],
            950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
            951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
            952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
            953: [0, 0.43056, 0, 0.05556, 0.35394],
            954: [0, 0.43056, 0, 0, 0.57616],
            955: [0, 0.69444, 0, 0, 0.58334],
            956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
            957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
            958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
            959: [0, 0.43056, 0, 0.05556, 0.48472],
            960: [0, 0.43056, 0.03588, 0, 0.57003],
            961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
            963: [0, 0.43056, 0.03588, 0, 0.57141],
            964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
            965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
            966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
            967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
            968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
            969: [0, 0.43056, 0.03588, 0, 0.62245],
            977: [0, 0.69444, 0, 0.08334, 0.59144],
            981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
            982: [0, 0.43056, 0.02778, 0, 0.82813],
            1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            1013: [0, 0.43056, 0, 0.05556, 0.4059],
            57649: [0, 0.43056, 0, 0.02778, 0.32246],
            57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
          },
          "SansSerif-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.36667],
            34: [0, 0.69444, 0, 0, 0.55834],
            35: [0.19444, 0.69444, 0, 0, 0.91667],
            36: [0.05556, 0.75, 0, 0, 0.55],
            37: [0.05556, 0.75, 0, 0, 1.02912],
            38: [0, 0.69444, 0, 0, 0.83056],
            39: [0, 0.69444, 0, 0, 0.30556],
            40: [0.25, 0.75, 0, 0, 0.42778],
            41: [0.25, 0.75, 0, 0, 0.42778],
            42: [0, 0.75, 0, 0, 0.55],
            43: [0.11667, 0.61667, 0, 0, 0.85556],
            44: [0.10556, 0.13056, 0, 0, 0.30556],
            45: [0, 0.45833, 0, 0, 0.36667],
            46: [0, 0.13056, 0, 0, 0.30556],
            47: [0.25, 0.75, 0, 0, 0.55],
            48: [0, 0.69444, 0, 0, 0.55],
            49: [0, 0.69444, 0, 0, 0.55],
            50: [0, 0.69444, 0, 0, 0.55],
            51: [0, 0.69444, 0, 0, 0.55],
            52: [0, 0.69444, 0, 0, 0.55],
            53: [0, 0.69444, 0, 0, 0.55],
            54: [0, 0.69444, 0, 0, 0.55],
            55: [0, 0.69444, 0, 0, 0.55],
            56: [0, 0.69444, 0, 0, 0.55],
            57: [0, 0.69444, 0, 0, 0.55],
            58: [0, 0.45833, 0, 0, 0.30556],
            59: [0.10556, 0.45833, 0, 0, 0.30556],
            61: [-0.09375, 0.40625, 0, 0, 0.85556],
            63: [0, 0.69444, 0, 0, 0.51945],
            64: [0, 0.69444, 0, 0, 0.73334],
            65: [0, 0.69444, 0, 0, 0.73334],
            66: [0, 0.69444, 0, 0, 0.73334],
            67: [0, 0.69444, 0, 0, 0.70278],
            68: [0, 0.69444, 0, 0, 0.79445],
            69: [0, 0.69444, 0, 0, 0.64167],
            70: [0, 0.69444, 0, 0, 0.61111],
            71: [0, 0.69444, 0, 0, 0.73334],
            72: [0, 0.69444, 0, 0, 0.79445],
            73: [0, 0.69444, 0, 0, 0.33056],
            74: [0, 0.69444, 0, 0, 0.51945],
            75: [0, 0.69444, 0, 0, 0.76389],
            76: [0, 0.69444, 0, 0, 0.58056],
            77: [0, 0.69444, 0, 0, 0.97778],
            78: [0, 0.69444, 0, 0, 0.79445],
            79: [0, 0.69444, 0, 0, 0.79445],
            80: [0, 0.69444, 0, 0, 0.70278],
            81: [0.10556, 0.69444, 0, 0, 0.79445],
            82: [0, 0.69444, 0, 0, 0.70278],
            83: [0, 0.69444, 0, 0, 0.61111],
            84: [0, 0.69444, 0, 0, 0.73334],
            85: [0, 0.69444, 0, 0, 0.76389],
            86: [0, 0.69444, 0.01528, 0, 0.73334],
            87: [0, 0.69444, 0.01528, 0, 1.03889],
            88: [0, 0.69444, 0, 0, 0.73334],
            89: [0, 0.69444, 0.0275, 0, 0.73334],
            90: [0, 0.69444, 0, 0, 0.67223],
            91: [0.25, 0.75, 0, 0, 0.34306],
            93: [0.25, 0.75, 0, 0, 0.34306],
            94: [0, 0.69444, 0, 0, 0.55],
            95: [0.35, 0.10833, 0.03056, 0, 0.55],
            97: [0, 0.45833, 0, 0, 0.525],
            98: [0, 0.69444, 0, 0, 0.56111],
            99: [0, 0.45833, 0, 0, 0.48889],
            100: [0, 0.69444, 0, 0, 0.56111],
            101: [0, 0.45833, 0, 0, 0.51111],
            102: [0, 0.69444, 0.07639, 0, 0.33611],
            103: [0.19444, 0.45833, 0.01528, 0, 0.55],
            104: [0, 0.69444, 0, 0, 0.56111],
            105: [0, 0.69444, 0, 0, 0.25556],
            106: [0.19444, 0.69444, 0, 0, 0.28611],
            107: [0, 0.69444, 0, 0, 0.53056],
            108: [0, 0.69444, 0, 0, 0.25556],
            109: [0, 0.45833, 0, 0, 0.86667],
            110: [0, 0.45833, 0, 0, 0.56111],
            111: [0, 0.45833, 0, 0, 0.55],
            112: [0.19444, 0.45833, 0, 0, 0.56111],
            113: [0.19444, 0.45833, 0, 0, 0.56111],
            114: [0, 0.45833, 0.01528, 0, 0.37222],
            115: [0, 0.45833, 0, 0, 0.42167],
            116: [0, 0.58929, 0, 0, 0.40417],
            117: [0, 0.45833, 0, 0, 0.56111],
            118: [0, 0.45833, 0.01528, 0, 0.5],
            119: [0, 0.45833, 0.01528, 0, 0.74445],
            120: [0, 0.45833, 0, 0, 0.5],
            121: [0.19444, 0.45833, 0.01528, 0, 0.5],
            122: [0, 0.45833, 0, 0, 0.47639],
            126: [0.35, 0.34444, 0, 0, 0.55],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0, 0, 0.55],
            176: [0, 0.69444, 0, 0, 0.73334],
            180: [0, 0.69444, 0, 0, 0.55],
            184: [0.17014, 0, 0, 0, 0.48889],
            305: [0, 0.45833, 0, 0, 0.25556],
            567: [0.19444, 0.45833, 0, 0, 0.28611],
            710: [0, 0.69444, 0, 0, 0.55],
            711: [0, 0.63542, 0, 0, 0.55],
            713: [0, 0.63778, 0, 0, 0.55],
            728: [0, 0.69444, 0, 0, 0.55],
            729: [0, 0.69444, 0, 0, 0.30556],
            730: [0, 0.69444, 0, 0, 0.73334],
            732: [0, 0.69444, 0, 0, 0.55],
            733: [0, 0.69444, 0, 0, 0.55],
            915: [0, 0.69444, 0, 0, 0.58056],
            916: [0, 0.69444, 0, 0, 0.91667],
            920: [0, 0.69444, 0, 0, 0.85556],
            923: [0, 0.69444, 0, 0, 0.67223],
            926: [0, 0.69444, 0, 0, 0.73334],
            928: [0, 0.69444, 0, 0, 0.79445],
            931: [0, 0.69444, 0, 0, 0.79445],
            933: [0, 0.69444, 0, 0, 0.85556],
            934: [0, 0.69444, 0, 0, 0.79445],
            936: [0, 0.69444, 0, 0, 0.85556],
            937: [0, 0.69444, 0, 0, 0.79445],
            8211: [0, 0.45833, 0.03056, 0, 0.55],
            8212: [0, 0.45833, 0.03056, 0, 1.10001],
            8216: [0, 0.69444, 0, 0, 0.30556],
            8217: [0, 0.69444, 0, 0, 0.30556],
            8220: [0, 0.69444, 0, 0, 0.55834],
            8221: [0, 0.69444, 0, 0, 0.55834]
          },
          "SansSerif-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.05733, 0, 0.31945],
            34: [0, 0.69444, 316e-5, 0, 0.5],
            35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
            36: [0.05556, 0.75, 0.11156, 0, 0.5],
            37: [0.05556, 0.75, 0.03126, 0, 0.83334],
            38: [0, 0.69444, 0.03058, 0, 0.75834],
            39: [0, 0.69444, 0.07816, 0, 0.27778],
            40: [0.25, 0.75, 0.13164, 0, 0.38889],
            41: [0.25, 0.75, 0.02536, 0, 0.38889],
            42: [0, 0.75, 0.11775, 0, 0.5],
            43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0.01946, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0.13164, 0, 0.5],
            48: [0, 0.65556, 0.11156, 0, 0.5],
            49: [0, 0.65556, 0.11156, 0, 0.5],
            50: [0, 0.65556, 0.11156, 0, 0.5],
            51: [0, 0.65556, 0.11156, 0, 0.5],
            52: [0, 0.65556, 0.11156, 0, 0.5],
            53: [0, 0.65556, 0.11156, 0, 0.5],
            54: [0, 0.65556, 0.11156, 0, 0.5],
            55: [0, 0.65556, 0.11156, 0, 0.5],
            56: [0, 0.65556, 0.11156, 0, 0.5],
            57: [0, 0.65556, 0.11156, 0, 0.5],
            58: [0, 0.44444, 0.02502, 0, 0.27778],
            59: [0.125, 0.44444, 0.02502, 0, 0.27778],
            61: [-0.13, 0.37, 0.05087, 0, 0.77778],
            63: [0, 0.69444, 0.11809, 0, 0.47222],
            64: [0, 0.69444, 0.07555, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0.08293, 0, 0.66667],
            67: [0, 0.69444, 0.11983, 0, 0.63889],
            68: [0, 0.69444, 0.07555, 0, 0.72223],
            69: [0, 0.69444, 0.11983, 0, 0.59722],
            70: [0, 0.69444, 0.13372, 0, 0.56945],
            71: [0, 0.69444, 0.11983, 0, 0.66667],
            72: [0, 0.69444, 0.08094, 0, 0.70834],
            73: [0, 0.69444, 0.13372, 0, 0.27778],
            74: [0, 0.69444, 0.08094, 0, 0.47222],
            75: [0, 0.69444, 0.11983, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0.08094, 0, 0.875],
            78: [0, 0.69444, 0.08094, 0, 0.70834],
            79: [0, 0.69444, 0.07555, 0, 0.73611],
            80: [0, 0.69444, 0.08293, 0, 0.63889],
            81: [0.125, 0.69444, 0.07555, 0, 0.73611],
            82: [0, 0.69444, 0.08293, 0, 0.64584],
            83: [0, 0.69444, 0.09205, 0, 0.55556],
            84: [0, 0.69444, 0.13372, 0, 0.68056],
            85: [0, 0.69444, 0.08094, 0, 0.6875],
            86: [0, 0.69444, 0.1615, 0, 0.66667],
            87: [0, 0.69444, 0.1615, 0, 0.94445],
            88: [0, 0.69444, 0.13372, 0, 0.66667],
            89: [0, 0.69444, 0.17261, 0, 0.66667],
            90: [0, 0.69444, 0.11983, 0, 0.61111],
            91: [0.25, 0.75, 0.15942, 0, 0.28889],
            93: [0.25, 0.75, 0.08719, 0, 0.28889],
            94: [0, 0.69444, 0.0799, 0, 0.5],
            95: [0.35, 0.09444, 0.08616, 0, 0.5],
            97: [0, 0.44444, 981e-5, 0, 0.48056],
            98: [0, 0.69444, 0.03057, 0, 0.51667],
            99: [0, 0.44444, 0.08336, 0, 0.44445],
            100: [0, 0.69444, 0.09483, 0, 0.51667],
            101: [0, 0.44444, 0.06778, 0, 0.44445],
            102: [0, 0.69444, 0.21705, 0, 0.30556],
            103: [0.19444, 0.44444, 0.10836, 0, 0.5],
            104: [0, 0.69444, 0.01778, 0, 0.51667],
            105: [0, 0.67937, 0.09718, 0, 0.23889],
            106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
            107: [0, 0.69444, 0.08336, 0, 0.48889],
            108: [0, 0.69444, 0.09483, 0, 0.23889],
            109: [0, 0.44444, 0.01778, 0, 0.79445],
            110: [0, 0.44444, 0.01778, 0, 0.51667],
            111: [0, 0.44444, 0.06613, 0, 0.5],
            112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
            113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
            114: [0, 0.44444, 0.10836, 0, 0.34167],
            115: [0, 0.44444, 0.0778, 0, 0.38333],
            116: [0, 0.57143, 0.07225, 0, 0.36111],
            117: [0, 0.44444, 0.04169, 0, 0.51667],
            118: [0, 0.44444, 0.10836, 0, 0.46111],
            119: [0, 0.44444, 0.10836, 0, 0.68334],
            120: [0, 0.44444, 0.09169, 0, 0.46111],
            121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
            122: [0, 0.44444, 0.08752, 0, 0.43472],
            126: [0.35, 0.32659, 0.08826, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0.06385, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.73752],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0.04169, 0, 0.23889],
            567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
            710: [0, 0.69444, 0.0799, 0, 0.5],
            711: [0, 0.63194, 0.08432, 0, 0.5],
            713: [0, 0.60889, 0.08776, 0, 0.5],
            714: [0, 0.69444, 0.09205, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0.09483, 0, 0.5],
            729: [0, 0.67937, 0.07774, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.73752],
            732: [0, 0.67659, 0.08826, 0, 0.5],
            733: [0, 0.69444, 0.09205, 0, 0.5],
            915: [0, 0.69444, 0.13372, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0.07555, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0.12816, 0, 0.66667],
            928: [0, 0.69444, 0.08094, 0, 0.70834],
            931: [0, 0.69444, 0.11983, 0, 0.72222],
            933: [0, 0.69444, 0.09031, 0, 0.77778],
            934: [0, 0.69444, 0.04603, 0, 0.72222],
            936: [0, 0.69444, 0.09031, 0, 0.77778],
            937: [0, 0.69444, 0.08293, 0, 0.72222],
            8211: [0, 0.44444, 0.08616, 0, 0.5],
            8212: [0, 0.44444, 0.08616, 0, 1],
            8216: [0, 0.69444, 0.07816, 0, 0.27778],
            8217: [0, 0.69444, 0.07816, 0, 0.27778],
            8220: [0, 0.69444, 0.14205, 0, 0.5],
            8221: [0, 0.69444, 316e-5, 0, 0.5]
          },
          "SansSerif-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.31945],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.75834],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.65556, 0, 0, 0.5],
            49: [0, 0.65556, 0, 0, 0.5],
            50: [0, 0.65556, 0, 0, 0.5],
            51: [0, 0.65556, 0, 0, 0.5],
            52: [0, 0.65556, 0, 0, 0.5],
            53: [0, 0.65556, 0, 0, 0.5],
            54: [0, 0.65556, 0, 0, 0.5],
            55: [0, 0.65556, 0, 0, 0.5],
            56: [0, 0.65556, 0, 0, 0.5],
            57: [0, 0.65556, 0, 0, 0.5],
            58: [0, 0.44444, 0, 0, 0.27778],
            59: [0.125, 0.44444, 0, 0, 0.27778],
            61: [-0.13, 0.37, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0, 0, 0.66667],
            67: [0, 0.69444, 0, 0, 0.63889],
            68: [0, 0.69444, 0, 0, 0.72223],
            69: [0, 0.69444, 0, 0, 0.59722],
            70: [0, 0.69444, 0, 0, 0.56945],
            71: [0, 0.69444, 0, 0, 0.66667],
            72: [0, 0.69444, 0, 0, 0.70834],
            73: [0, 0.69444, 0, 0, 0.27778],
            74: [0, 0.69444, 0, 0, 0.47222],
            75: [0, 0.69444, 0, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0, 0, 0.875],
            78: [0, 0.69444, 0, 0, 0.70834],
            79: [0, 0.69444, 0, 0, 0.73611],
            80: [0, 0.69444, 0, 0, 0.63889],
            81: [0.125, 0.69444, 0, 0, 0.73611],
            82: [0, 0.69444, 0, 0, 0.64584],
            83: [0, 0.69444, 0, 0, 0.55556],
            84: [0, 0.69444, 0, 0, 0.68056],
            85: [0, 0.69444, 0, 0, 0.6875],
            86: [0, 0.69444, 0.01389, 0, 0.66667],
            87: [0, 0.69444, 0.01389, 0, 0.94445],
            88: [0, 0.69444, 0, 0, 0.66667],
            89: [0, 0.69444, 0.025, 0, 0.66667],
            90: [0, 0.69444, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.28889],
            93: [0.25, 0.75, 0, 0, 0.28889],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.35, 0.09444, 0.02778, 0, 0.5],
            97: [0, 0.44444, 0, 0, 0.48056],
            98: [0, 0.69444, 0, 0, 0.51667],
            99: [0, 0.44444, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.51667],
            101: [0, 0.44444, 0, 0, 0.44445],
            102: [0, 0.69444, 0.06944, 0, 0.30556],
            103: [0.19444, 0.44444, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.51667],
            105: [0, 0.67937, 0, 0, 0.23889],
            106: [0.19444, 0.67937, 0, 0, 0.26667],
            107: [0, 0.69444, 0, 0, 0.48889],
            108: [0, 0.69444, 0, 0, 0.23889],
            109: [0, 0.44444, 0, 0, 0.79445],
            110: [0, 0.44444, 0, 0, 0.51667],
            111: [0, 0.44444, 0, 0, 0.5],
            112: [0.19444, 0.44444, 0, 0, 0.51667],
            113: [0.19444, 0.44444, 0, 0, 0.51667],
            114: [0, 0.44444, 0.01389, 0, 0.34167],
            115: [0, 0.44444, 0, 0, 0.38333],
            116: [0, 0.57143, 0, 0, 0.36111],
            117: [0, 0.44444, 0, 0, 0.51667],
            118: [0, 0.44444, 0.01389, 0, 0.46111],
            119: [0, 0.44444, 0.01389, 0, 0.68334],
            120: [0, 0.44444, 0, 0, 0.46111],
            121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
            122: [0, 0.44444, 0, 0, 0.43472],
            126: [0.35, 0.32659, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.66667],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0, 0, 0.23889],
            567: [0.19444, 0.44444, 0, 0, 0.26667],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.63194, 0, 0, 0.5],
            713: [0, 0.60889, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.67937, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.66667],
            732: [0, 0.67659, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.69444, 0, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0, 0, 0.66667],
            928: [0, 0.69444, 0, 0, 0.70834],
            931: [0, 0.69444, 0, 0, 0.72222],
            933: [0, 0.69444, 0, 0, 0.77778],
            934: [0, 0.69444, 0, 0, 0.72222],
            936: [0, 0.69444, 0, 0, 0.77778],
            937: [0, 0.69444, 0, 0, 0.72222],
            8211: [0, 0.44444, 0.02778, 0, 0.5],
            8212: [0, 0.44444, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5]
          },
          "Script-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.7, 0.22925, 0, 0.80253],
            66: [0, 0.7, 0.04087, 0, 0.90757],
            67: [0, 0.7, 0.1689, 0, 0.66619],
            68: [0, 0.7, 0.09371, 0, 0.77443],
            69: [0, 0.7, 0.18583, 0, 0.56162],
            70: [0, 0.7, 0.13634, 0, 0.89544],
            71: [0, 0.7, 0.17322, 0, 0.60961],
            72: [0, 0.7, 0.29694, 0, 0.96919],
            73: [0, 0.7, 0.19189, 0, 0.80907],
            74: [0.27778, 0.7, 0.19189, 0, 1.05159],
            75: [0, 0.7, 0.31259, 0, 0.91364],
            76: [0, 0.7, 0.19189, 0, 0.87373],
            77: [0, 0.7, 0.15981, 0, 1.08031],
            78: [0, 0.7, 0.3525, 0, 0.9015],
            79: [0, 0.7, 0.08078, 0, 0.73787],
            80: [0, 0.7, 0.08078, 0, 1.01262],
            81: [0, 0.7, 0.03305, 0, 0.88282],
            82: [0, 0.7, 0.06259, 0, 0.85],
            83: [0, 0.7, 0.19189, 0, 0.86767],
            84: [0, 0.7, 0.29087, 0, 0.74697],
            85: [0, 0.7, 0.25815, 0, 0.79996],
            86: [0, 0.7, 0.27523, 0, 0.62204],
            87: [0, 0.7, 0.27523, 0, 0.80532],
            88: [0, 0.7, 0.26006, 0, 0.94445],
            89: [0, 0.7, 0.2939, 0, 0.70961],
            90: [0, 0.7, 0.24037, 0, 0.8212],
            160: [0, 0, 0, 0, 0.25]
          },
          "Size1-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.35001, 0.85, 0, 0, 0.45834],
            41: [0.35001, 0.85, 0, 0, 0.45834],
            47: [0.35001, 0.85, 0, 0, 0.57778],
            91: [0.35001, 0.85, 0, 0, 0.41667],
            92: [0.35001, 0.85, 0, 0, 0.57778],
            93: [0.35001, 0.85, 0, 0, 0.41667],
            123: [0.35001, 0.85, 0, 0, 0.58334],
            125: [0.35001, 0.85, 0, 0, 0.58334],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.72222, 0, 0, 0.55556],
            732: [0, 0.72222, 0, 0, 0.55556],
            770: [0, 0.72222, 0, 0, 0.55556],
            771: [0, 0.72222, 0, 0, 0.55556],
            8214: [-99e-5, 0.601, 0, 0, 0.77778],
            8593: [1e-5, 0.6, 0, 0, 0.66667],
            8595: [1e-5, 0.6, 0, 0, 0.66667],
            8657: [1e-5, 0.6, 0, 0, 0.77778],
            8659: [1e-5, 0.6, 0, 0, 0.77778],
            8719: [0.25001, 0.75, 0, 0, 0.94445],
            8720: [0.25001, 0.75, 0, 0, 0.94445],
            8721: [0.25001, 0.75, 0, 0, 1.05556],
            8730: [0.35001, 0.85, 0, 0, 1],
            8739: [-599e-5, 0.606, 0, 0, 0.33333],
            8741: [-599e-5, 0.606, 0, 0, 0.55556],
            8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8748: [0.306, 0.805, 0.19445, 0, 0.47222],
            8749: [0.306, 0.805, 0.19445, 0, 0.47222],
            8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8896: [0.25001, 0.75, 0, 0, 0.83334],
            8897: [0.25001, 0.75, 0, 0, 0.83334],
            8898: [0.25001, 0.75, 0, 0, 0.83334],
            8899: [0.25001, 0.75, 0, 0, 0.83334],
            8968: [0.35001, 0.85, 0, 0, 0.47222],
            8969: [0.35001, 0.85, 0, 0, 0.47222],
            8970: [0.35001, 0.85, 0, 0, 0.47222],
            8971: [0.35001, 0.85, 0, 0, 0.47222],
            9168: [-99e-5, 0.601, 0, 0, 0.66667],
            10216: [0.35001, 0.85, 0, 0, 0.47222],
            10217: [0.35001, 0.85, 0, 0, 0.47222],
            10752: [0.25001, 0.75, 0, 0, 1.11111],
            10753: [0.25001, 0.75, 0, 0, 1.11111],
            10754: [0.25001, 0.75, 0, 0, 1.11111],
            10756: [0.25001, 0.75, 0, 0, 0.83334],
            10758: [0.25001, 0.75, 0, 0, 0.83334]
          },
          "Size2-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.65002, 1.15, 0, 0, 0.59722],
            41: [0.65002, 1.15, 0, 0, 0.59722],
            47: [0.65002, 1.15, 0, 0, 0.81111],
            91: [0.65002, 1.15, 0, 0, 0.47222],
            92: [0.65002, 1.15, 0, 0, 0.81111],
            93: [0.65002, 1.15, 0, 0, 0.47222],
            123: [0.65002, 1.15, 0, 0, 0.66667],
            125: [0.65002, 1.15, 0, 0, 0.66667],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1],
            732: [0, 0.75, 0, 0, 1],
            770: [0, 0.75, 0, 0, 1],
            771: [0, 0.75, 0, 0, 1],
            8719: [0.55001, 1.05, 0, 0, 1.27778],
            8720: [0.55001, 1.05, 0, 0, 1.27778],
            8721: [0.55001, 1.05, 0, 0, 1.44445],
            8730: [0.65002, 1.15, 0, 0, 1],
            8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8748: [0.862, 1.36, 0.44445, 0, 0.55556],
            8749: [0.862, 1.36, 0.44445, 0, 0.55556],
            8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8896: [0.55001, 1.05, 0, 0, 1.11111],
            8897: [0.55001, 1.05, 0, 0, 1.11111],
            8898: [0.55001, 1.05, 0, 0, 1.11111],
            8899: [0.55001, 1.05, 0, 0, 1.11111],
            8968: [0.65002, 1.15, 0, 0, 0.52778],
            8969: [0.65002, 1.15, 0, 0, 0.52778],
            8970: [0.65002, 1.15, 0, 0, 0.52778],
            8971: [0.65002, 1.15, 0, 0, 0.52778],
            10216: [0.65002, 1.15, 0, 0, 0.61111],
            10217: [0.65002, 1.15, 0, 0, 0.61111],
            10752: [0.55001, 1.05, 0, 0, 1.51112],
            10753: [0.55001, 1.05, 0, 0, 1.51112],
            10754: [0.55001, 1.05, 0, 0, 1.51112],
            10756: [0.55001, 1.05, 0, 0, 1.11111],
            10758: [0.55001, 1.05, 0, 0, 1.11111]
          },
          "Size3-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.95003, 1.45, 0, 0, 0.73611],
            41: [0.95003, 1.45, 0, 0, 0.73611],
            47: [0.95003, 1.45, 0, 0, 1.04445],
            91: [0.95003, 1.45, 0, 0, 0.52778],
            92: [0.95003, 1.45, 0, 0, 1.04445],
            93: [0.95003, 1.45, 0, 0, 0.52778],
            123: [0.95003, 1.45, 0, 0, 0.75],
            125: [0.95003, 1.45, 0, 0, 0.75],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1.44445],
            732: [0, 0.75, 0, 0, 1.44445],
            770: [0, 0.75, 0, 0, 1.44445],
            771: [0, 0.75, 0, 0, 1.44445],
            8730: [0.95003, 1.45, 0, 0, 1],
            8968: [0.95003, 1.45, 0, 0, 0.58334],
            8969: [0.95003, 1.45, 0, 0, 0.58334],
            8970: [0.95003, 1.45, 0, 0, 0.58334],
            8971: [0.95003, 1.45, 0, 0, 0.58334],
            10216: [0.95003, 1.45, 0, 0, 0.75],
            10217: [0.95003, 1.45, 0, 0, 0.75]
          },
          "Size4-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [1.25003, 1.75, 0, 0, 0.79167],
            41: [1.25003, 1.75, 0, 0, 0.79167],
            47: [1.25003, 1.75, 0, 0, 1.27778],
            91: [1.25003, 1.75, 0, 0, 0.58334],
            92: [1.25003, 1.75, 0, 0, 1.27778],
            93: [1.25003, 1.75, 0, 0, 0.58334],
            123: [1.25003, 1.75, 0, 0, 0.80556],
            125: [1.25003, 1.75, 0, 0, 0.80556],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.825, 0, 0, 1.8889],
            732: [0, 0.825, 0, 0, 1.8889],
            770: [0, 0.825, 0, 0, 1.8889],
            771: [0, 0.825, 0, 0, 1.8889],
            8730: [1.25003, 1.75, 0, 0, 1],
            8968: [1.25003, 1.75, 0, 0, 0.63889],
            8969: [1.25003, 1.75, 0, 0, 0.63889],
            8970: [1.25003, 1.75, 0, 0, 0.63889],
            8971: [1.25003, 1.75, 0, 0, 0.63889],
            9115: [0.64502, 1.155, 0, 0, 0.875],
            9116: [1e-5, 0.6, 0, 0, 0.875],
            9117: [0.64502, 1.155, 0, 0, 0.875],
            9118: [0.64502, 1.155, 0, 0, 0.875],
            9119: [1e-5, 0.6, 0, 0, 0.875],
            9120: [0.64502, 1.155, 0, 0, 0.875],
            9121: [0.64502, 1.155, 0, 0, 0.66667],
            9122: [-99e-5, 0.601, 0, 0, 0.66667],
            9123: [0.64502, 1.155, 0, 0, 0.66667],
            9124: [0.64502, 1.155, 0, 0, 0.66667],
            9125: [-99e-5, 0.601, 0, 0, 0.66667],
            9126: [0.64502, 1.155, 0, 0, 0.66667],
            9127: [1e-5, 0.9, 0, 0, 0.88889],
            9128: [0.65002, 1.15, 0, 0, 0.88889],
            9129: [0.90001, 0, 0, 0, 0.88889],
            9130: [0, 0.3, 0, 0, 0.88889],
            9131: [1e-5, 0.9, 0, 0, 0.88889],
            9132: [0.65002, 1.15, 0, 0, 0.88889],
            9133: [0.90001, 0, 0, 0, 0.88889],
            9143: [0.88502, 0.915, 0, 0, 1.05556],
            10216: [1.25003, 1.75, 0, 0, 0.80556],
            10217: [1.25003, 1.75, 0, 0, 0.80556],
            57344: [-499e-5, 0.605, 0, 0, 1.05556],
            57345: [-499e-5, 0.605, 0, 0, 1.05556],
            57680: [0, 0.12, 0, 0, 0.45],
            57681: [0, 0.12, 0, 0, 0.45],
            57682: [0, 0.12, 0, 0, 0.45],
            57683: [0, 0.12, 0, 0, 0.45]
          },
          "Typewriter-Regular": {
            32: [0, 0, 0, 0, 0.525],
            33: [0, 0.61111, 0, 0, 0.525],
            34: [0, 0.61111, 0, 0, 0.525],
            35: [0, 0.61111, 0, 0, 0.525],
            36: [0.08333, 0.69444, 0, 0, 0.525],
            37: [0.08333, 0.69444, 0, 0, 0.525],
            38: [0, 0.61111, 0, 0, 0.525],
            39: [0, 0.61111, 0, 0, 0.525],
            40: [0.08333, 0.69444, 0, 0, 0.525],
            41: [0.08333, 0.69444, 0, 0, 0.525],
            42: [0, 0.52083, 0, 0, 0.525],
            43: [-0.08056, 0.53055, 0, 0, 0.525],
            44: [0.13889, 0.125, 0, 0, 0.525],
            45: [-0.08056, 0.53055, 0, 0, 0.525],
            46: [0, 0.125, 0, 0, 0.525],
            47: [0.08333, 0.69444, 0, 0, 0.525],
            48: [0, 0.61111, 0, 0, 0.525],
            49: [0, 0.61111, 0, 0, 0.525],
            50: [0, 0.61111, 0, 0, 0.525],
            51: [0, 0.61111, 0, 0, 0.525],
            52: [0, 0.61111, 0, 0, 0.525],
            53: [0, 0.61111, 0, 0, 0.525],
            54: [0, 0.61111, 0, 0, 0.525],
            55: [0, 0.61111, 0, 0, 0.525],
            56: [0, 0.61111, 0, 0, 0.525],
            57: [0, 0.61111, 0, 0, 0.525],
            58: [0, 0.43056, 0, 0, 0.525],
            59: [0.13889, 0.43056, 0, 0, 0.525],
            60: [-0.05556, 0.55556, 0, 0, 0.525],
            61: [-0.19549, 0.41562, 0, 0, 0.525],
            62: [-0.05556, 0.55556, 0, 0, 0.525],
            63: [0, 0.61111, 0, 0, 0.525],
            64: [0, 0.61111, 0, 0, 0.525],
            65: [0, 0.61111, 0, 0, 0.525],
            66: [0, 0.61111, 0, 0, 0.525],
            67: [0, 0.61111, 0, 0, 0.525],
            68: [0, 0.61111, 0, 0, 0.525],
            69: [0, 0.61111, 0, 0, 0.525],
            70: [0, 0.61111, 0, 0, 0.525],
            71: [0, 0.61111, 0, 0, 0.525],
            72: [0, 0.61111, 0, 0, 0.525],
            73: [0, 0.61111, 0, 0, 0.525],
            74: [0, 0.61111, 0, 0, 0.525],
            75: [0, 0.61111, 0, 0, 0.525],
            76: [0, 0.61111, 0, 0, 0.525],
            77: [0, 0.61111, 0, 0, 0.525],
            78: [0, 0.61111, 0, 0, 0.525],
            79: [0, 0.61111, 0, 0, 0.525],
            80: [0, 0.61111, 0, 0, 0.525],
            81: [0.13889, 0.61111, 0, 0, 0.525],
            82: [0, 0.61111, 0, 0, 0.525],
            83: [0, 0.61111, 0, 0, 0.525],
            84: [0, 0.61111, 0, 0, 0.525],
            85: [0, 0.61111, 0, 0, 0.525],
            86: [0, 0.61111, 0, 0, 0.525],
            87: [0, 0.61111, 0, 0, 0.525],
            88: [0, 0.61111, 0, 0, 0.525],
            89: [0, 0.61111, 0, 0, 0.525],
            90: [0, 0.61111, 0, 0, 0.525],
            91: [0.08333, 0.69444, 0, 0, 0.525],
            92: [0.08333, 0.69444, 0, 0, 0.525],
            93: [0.08333, 0.69444, 0, 0, 0.525],
            94: [0, 0.61111, 0, 0, 0.525],
            95: [0.09514, 0, 0, 0, 0.525],
            96: [0, 0.61111, 0, 0, 0.525],
            97: [0, 0.43056, 0, 0, 0.525],
            98: [0, 0.61111, 0, 0, 0.525],
            99: [0, 0.43056, 0, 0, 0.525],
            100: [0, 0.61111, 0, 0, 0.525],
            101: [0, 0.43056, 0, 0, 0.525],
            102: [0, 0.61111, 0, 0, 0.525],
            103: [0.22222, 0.43056, 0, 0, 0.525],
            104: [0, 0.61111, 0, 0, 0.525],
            105: [0, 0.61111, 0, 0, 0.525],
            106: [0.22222, 0.61111, 0, 0, 0.525],
            107: [0, 0.61111, 0, 0, 0.525],
            108: [0, 0.61111, 0, 0, 0.525],
            109: [0, 0.43056, 0, 0, 0.525],
            110: [0, 0.43056, 0, 0, 0.525],
            111: [0, 0.43056, 0, 0, 0.525],
            112: [0.22222, 0.43056, 0, 0, 0.525],
            113: [0.22222, 0.43056, 0, 0, 0.525],
            114: [0, 0.43056, 0, 0, 0.525],
            115: [0, 0.43056, 0, 0, 0.525],
            116: [0, 0.55358, 0, 0, 0.525],
            117: [0, 0.43056, 0, 0, 0.525],
            118: [0, 0.43056, 0, 0, 0.525],
            119: [0, 0.43056, 0, 0, 0.525],
            120: [0, 0.43056, 0, 0, 0.525],
            121: [0.22222, 0.43056, 0, 0, 0.525],
            122: [0, 0.43056, 0, 0, 0.525],
            123: [0.08333, 0.69444, 0, 0, 0.525],
            124: [0.08333, 0.69444, 0, 0, 0.525],
            125: [0.08333, 0.69444, 0, 0, 0.525],
            126: [0, 0.61111, 0, 0, 0.525],
            127: [0, 0.61111, 0, 0, 0.525],
            160: [0, 0, 0, 0, 0.525],
            176: [0, 0.61111, 0, 0, 0.525],
            184: [0.19445, 0, 0, 0, 0.525],
            305: [0, 0.43056, 0, 0, 0.525],
            567: [0.22222, 0.43056, 0, 0, 0.525],
            711: [0, 0.56597, 0, 0, 0.525],
            713: [0, 0.56555, 0, 0, 0.525],
            714: [0, 0.61111, 0, 0, 0.525],
            715: [0, 0.61111, 0, 0, 0.525],
            728: [0, 0.61111, 0, 0, 0.525],
            730: [0, 0.61111, 0, 0, 0.525],
            770: [0, 0.61111, 0, 0, 0.525],
            771: [0, 0.61111, 0, 0, 0.525],
            776: [0, 0.61111, 0, 0, 0.525],
            915: [0, 0.61111, 0, 0, 0.525],
            916: [0, 0.61111, 0, 0, 0.525],
            920: [0, 0.61111, 0, 0, 0.525],
            923: [0, 0.61111, 0, 0, 0.525],
            926: [0, 0.61111, 0, 0, 0.525],
            928: [0, 0.61111, 0, 0, 0.525],
            931: [0, 0.61111, 0, 0, 0.525],
            933: [0, 0.61111, 0, 0, 0.525],
            934: [0, 0.61111, 0, 0, 0.525],
            936: [0, 0.61111, 0, 0, 0.525],
            937: [0, 0.61111, 0, 0, 0.525],
            8216: [0, 0.61111, 0, 0, 0.525],
            8217: [0, 0.61111, 0, 0, 0.525],
            8242: [0, 0.61111, 0, 0, 0.525],
            9251: [0.11111, 0.21944, 0, 0, 0.525]
          }
        };
        const Fe = {
          slant: [0.25, 0.25, 0.25],
          // sigma1
          space: [0, 0, 0],
          // sigma2
          stretch: [0, 0, 0],
          // sigma3
          shrink: [0, 0, 0],
          // sigma4
          xHeight: [0.431, 0.431, 0.431],
          // sigma5
          quad: [1, 1.171, 1.472],
          // sigma6
          extraSpace: [0, 0, 0],
          // sigma7
          num1: [0.677, 0.732, 0.925],
          // sigma8
          num2: [0.394, 0.384, 0.387],
          // sigma9
          num3: [0.444, 0.471, 0.504],
          // sigma10
          denom1: [0.686, 0.752, 1.025],
          // sigma11
          denom2: [0.345, 0.344, 0.532],
          // sigma12
          sup1: [0.413, 0.503, 0.504],
          // sigma13
          sup2: [0.363, 0.431, 0.404],
          // sigma14
          sup3: [0.289, 0.286, 0.294],
          // sigma15
          sub1: [0.15, 0.143, 0.2],
          // sigma16
          sub2: [0.247, 0.286, 0.4],
          // sigma17
          supDrop: [0.386, 0.353, 0.494],
          // sigma18
          subDrop: [0.05, 0.071, 0.1],
          // sigma19
          delim1: [2.39, 1.7, 1.98],
          // sigma20
          delim2: [1.01, 1.157, 1.42],
          // sigma21
          axisHeight: [0.25, 0.25, 0.25],
          // sigma22
          // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
          // they correspond to the font parameters of the extension fonts (family 3).
          // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
          // match cmex7, we'd use cmex7.tfm values for script and scriptscript
          // values.
          defaultRuleThickness: [0.04, 0.049, 0.049],
          // xi8; cmex7: 0.049
          bigOpSpacing1: [0.111, 0.111, 0.111],
          // xi9
          bigOpSpacing2: [0.166, 0.166, 0.166],
          // xi10
          bigOpSpacing3: [0.2, 0.2, 0.2],
          // xi11
          bigOpSpacing4: [0.6, 0.611, 0.611],
          // xi12; cmex7: 0.611
          bigOpSpacing5: [0.1, 0.143, 0.143],
          // xi13; cmex7: 0.143
          // The \sqrt rule width is taken from the height of the surd character.
          // Since we use the same font at all sizes, this thickness doesn't scale.
          sqrtRuleThickness: [0.04, 0.04, 0.04],
          // This value determines how large a pt is, for metrics which are defined
          // in terms of pts.
          // This value is also used in katex.less; if you change it make sure the
          // values match.
          ptPerEm: [10, 10, 10],
          // The space between adjacent `|` columns in an array definition. From
          // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
          doubleRuleSep: [0.2, 0.2, 0.2],
          // The width of separator lines in {array} environments. From
          // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
          arrayRuleWidth: [0.04, 0.04, 0.04],
          // Two values from LaTeX source2e:
          fboxsep: [0.3, 0.3, 0.3],
          //        3 pt / ptPerEm
          fboxrule: [0.04, 0.04, 0.04]
          // 0.4 pt / ptPerEm
        }, pt = {
          // Latin-1
          Å: "A",
          Ð: "D",
          Þ: "o",
          å: "a",
          ð: "d",
          þ: "o",
          // Cyrillic
          А: "A",
          Б: "B",
          В: "B",
          Г: "F",
          Д: "A",
          Е: "E",
          Ж: "K",
          З: "3",
          И: "N",
          Й: "N",
          К: "K",
          Л: "N",
          М: "M",
          Н: "H",
          О: "O",
          П: "N",
          Р: "P",
          С: "C",
          Т: "T",
          У: "y",
          Ф: "O",
          Х: "X",
          Ц: "U",
          Ч: "h",
          Ш: "W",
          Щ: "W",
          Ъ: "B",
          Ы: "X",
          Ь: "B",
          Э: "3",
          Ю: "X",
          Я: "R",
          а: "a",
          б: "b",
          в: "a",
          г: "r",
          д: "y",
          е: "e",
          ж: "m",
          з: "e",
          и: "n",
          й: "n",
          к: "n",
          л: "n",
          м: "m",
          н: "n",
          о: "o",
          п: "n",
          р: "p",
          с: "c",
          т: "o",
          у: "y",
          ф: "b",
          х: "x",
          ц: "n",
          ч: "n",
          ш: "w",
          щ: "w",
          ъ: "a",
          ы: "m",
          ь: "a",
          э: "e",
          ю: "m",
          я: "r"
        };
        function Ye(t, e) {
          O0[t] = e;
        }
        function Xe(t, e, r) {
          if (!O0[e])
            throw new Error("Font metrics not found for font: " + e + ".");
          let n = t.charCodeAt(0), s = O0[e][n];
          if (!s && t[0] in pt && (n = pt[t[0]].charCodeAt(0), s = O0[e][n]), !s && r === "text" && dt(n) && (s = O0[e][77]), s)
            return {
              depth: s[0],
              height: s[1],
              italic: s[2],
              skew: s[3],
              width: s[4]
            };
        }
        const Ke = {};
        function gt(t) {
          let e;
          if (t >= 5 ? e = 0 : t >= 3 ? e = 1 : e = 2, !Ke[e]) {
            const r = Ke[e] = {
              cssEmPerMu: Fe.quad[e] / 18
            };
            for (const n in Fe)
              Fe.hasOwnProperty(n) && (r[n] = Fe[n][e]);
          }
          return Ke[e];
        }
        const bt = [
          // Each element contains [textsize, scriptsize, scriptscriptsize].
          // The size mappings are taken from TeX with \normalsize=10pt.
          [1, 1, 1],
          // size1: [5, 5, 5]              \tiny
          [2, 1, 1],
          // size2: [6, 5, 5]
          [3, 1, 1],
          // size3: [7, 5, 5]              \scriptsize
          [4, 2, 1],
          // size4: [8, 6, 5]              \footnotesize
          [5, 2, 1],
          // size5: [9, 6, 5]              \small
          [6, 3, 1],
          // size6: [10, 7, 5]             \normalsize
          [7, 4, 2],
          // size7: [12, 8, 6]             \large
          [8, 6, 3],
          // size8: [14.4, 10, 7]          \Large
          [9, 7, 6],
          // size9: [17.28, 12, 10]        \LARGE
          [10, 8, 7],
          // size10: [20.74, 14.4, 12]     \huge
          [11, 10, 9]
          // size11: [24.88, 20.74, 17.28] \HUGE
        ], we = [
          // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
          // you change size indexes, change that function.
          0.5,
          0.6,
          0.7,
          0.8,
          0.9,
          1,
          1.2,
          1.44,
          1.728,
          2.074,
          2.488
        ], yt = function(t, e) {
          return e.size < 2 ? t : bt[t - 1][e.size - 1];
        };
        class _0 {
          // A font family applies to a group of fonts (i.e. SansSerif), while a font
          // represents a specific font (i.e. SansSerif Bold).
          // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
          /**
           * The base size index.
           */
          constructor(e) {
            this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || _0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = we[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
          }
          /**
           * Returns a new options object with the same properties as "this".  Properties
           * from "extension" will be copied to the new options object.
           */
          extend(e) {
            const r = {
              style: this.style,
              size: this.size,
              textSize: this.textSize,
              color: this.color,
              phantom: this.phantom,
              font: this.font,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontShape: this.fontShape,
              maxSize: this.maxSize,
              minRuleThickness: this.minRuleThickness
            };
            for (const n in e)
              e.hasOwnProperty(n) && (r[n] = e[n]);
            return new _0(r);
          }
          /**
           * Return an options object with the given style. If `this.style === style`,
           * returns `this`.
           */
          havingStyle(e) {
            return this.style === e ? this : this.extend({
              style: e,
              size: yt(this.textSize, e)
            });
          }
          /**
           * Return an options object with a cramped version of the current style. If
           * the current style is cramped, returns `this`.
           */
          havingCrampedStyle() {
            return this.havingStyle(this.style.cramp());
          }
          /**
           * Return an options object with the given size and in at least `\textstyle`.
           * Returns `this` if appropriate.
           */
          havingSize(e) {
            return this.size === e && this.textSize === e ? this : this.extend({
              style: this.style.text(),
              size: e,
              textSize: e,
              sizeMultiplier: we[e - 1]
            });
          }
          /**
           * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
           * changes to at least `\textstyle`.
           */
          havingBaseStyle(e) {
            e = e || this.style.text();
            const r = yt(_0.BASESIZE, e);
            return this.size === r && this.textSize === _0.BASESIZE && this.style === e ? this : this.extend({
              style: e,
              size: r
            });
          }
          /**
           * Remove the effect of sizing changes such as \Huge.
           * Keep the effect of the current style, such as \scriptstyle.
           */
          havingBaseSizing() {
            let e;
            switch (this.style.id) {
              case 4:
              case 5:
                e = 3;
                break;
              case 6:
              case 7:
                e = 1;
                break;
              default:
                e = 6;
            }
            return this.extend({
              style: this.style.text(),
              size: e
            });
          }
          /**
           * Create a new options object with the given color.
           */
          withColor(e) {
            return this.extend({
              color: e
            });
          }
          /**
           * Create a new options object with "phantom" set to true.
           */
          withPhantom() {
            return this.extend({
              phantom: !0
            });
          }
          /**
           * Creates a new options object with the given math font or old text font.
           * @type {[type]}
           */
          withFont(e) {
            return this.extend({
              font: e
            });
          }
          /**
           * Create a new options objects with the given fontFamily.
           */
          withTextFontFamily(e) {
            return this.extend({
              fontFamily: e,
              font: ""
            });
          }
          /**
           * Creates a new options object with the given font weight
           */
          withTextFontWeight(e) {
            return this.extend({
              fontWeight: e,
              font: ""
            });
          }
          /**
           * Creates a new options object with the given font weight
           */
          withTextFontShape(e) {
            return this.extend({
              fontShape: e,
              font: ""
            });
          }
          /**
           * Return the CSS sizing classes required to switch from enclosing options
           * `oldOptions` to `this`. Returns an array of classes.
           */
          sizingClasses(e) {
            return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
          }
          /**
           * Return the CSS sizing classes required to switch to the base size. Like
           * `this.havingSize(BASESIZE).sizingClasses(this)`.
           */
          baseSizingClasses() {
            return this.size !== _0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + _0.BASESIZE] : [];
          }
          /**
           * Return the font metrics for this size.
           */
          fontMetrics() {
            return this._fontMetrics || (this._fontMetrics = gt(this.size)), this._fontMetrics;
          }
          /**
           * Gets the CSS color of the current options object
           */
          getColor() {
            return this.phantom ? "transparent" : this.color;
          }
        }
        _0.BASESIZE = 6;
        var xt = _0;
        const Be = {
          // https://en.wikibooks.org/wiki/LaTeX/Lengths and
          // https://tex.stackexchange.com/a/8263
          pt: 1,
          // TeX point
          mm: 7227 / 2540,
          // millimeter
          cm: 7227 / 254,
          // centimeter
          in: 72.27,
          // inch
          bp: 803 / 800,
          // big (PostScript) points
          pc: 12,
          // pica
          dd: 1238 / 1157,
          // didot
          cc: 14856 / 1157,
          // cicero (12 didot)
          nd: 685 / 642,
          // new didot
          nc: 1370 / 107,
          // new cicero (12 new didot)
          sp: 1 / 65536,
          // scaled point (TeX's internal smallest unit)
          // https://tex.stackexchange.com/a/41371
          px: 803 / 800
          // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
        }, Gt = {
          ex: !0,
          em: !0,
          mu: !0
        }, wt = function(t) {
          return typeof t != "string" && (t = t.unit), t in Be || t in Gt || t === "ex";
        }, f0 = function(t, e) {
          let r;
          if (t.unit in Be)
            r = Be[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
          else if (t.unit === "mu")
            r = e.fontMetrics().cssEmPerMu;
          else {
            let n;
            if (e.style.isTight() ? n = e.havingStyle(e.style.text()) : n = e, t.unit === "ex")
              r = n.fontMetrics().xHeight;
            else if (t.unit === "em")
              r = n.fontMetrics().quad;
            else
              throw new w("Invalid unit: '" + t.unit + "'");
            n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier);
          }
          return Math.min(t.number * r, e.maxSize);
        }, E = function(t) {
          return +t.toFixed(4) + "em";
        }, te = function(t) {
          return t.filter((e) => e).join(" ");
        }, vt = function(t, e, r) {
          if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
            e.style.isTight() && this.classes.push("mtight");
            const n = e.getColor();
            n && (this.style.color = n);
          }
        }, kt = function(t) {
          const e = document.createElement(t);
          e.className = te(this.classes);
          for (const r in this.style)
            this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
          for (const r in this.attributes)
            this.attributes.hasOwnProperty(r) && e.setAttribute(r, this.attributes[r]);
          for (let r = 0; r < this.children.length; r++)
            e.appendChild(this.children[r].toNode());
          return e;
        }, He = function(t) {
          let e = "<" + t;
          this.classes.length && (e += ' class="' + O.escape(te(this.classes)) + '"');
          let r = "";
          for (const n in this.style)
            this.style.hasOwnProperty(n) && (r += O.hyphenate(n) + ":" + this.style[n] + ";");
          r && (e += ' style="' + O.escape(r) + '"');
          for (const n in this.attributes)
            this.attributes.hasOwnProperty(n) && (e += " " + n + '="' + O.escape(this.attributes[n]) + '"');
          e += ">";
          for (let n = 0; n < this.children.length; n++)
            e += this.children[n].toMarkup();
          return e += "</" + t + ">", e;
        };
        class ve {
          constructor(e, r, n, s) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, vt.call(this, e, n, s), this.children = r || [];
          }
          /**
           * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
           * all browsers support attributes the same, and having too many custom
           * attributes is probably bad.
           */
          setAttribute(e, r) {
            this.attributes[e] = r;
          }
          hasClass(e) {
            return O.contains(this.classes, e);
          }
          toNode() {
            return kt.call(this, "span");
          }
          toMarkup() {
            return He.call(this, "span");
          }
        }
        class re {
          constructor(e, r, n, s) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, vt.call(this, r, s), this.children = n || [], this.setAttribute("href", e);
          }
          setAttribute(e, r) {
            this.attributes[e] = r;
          }
          hasClass(e) {
            return O.contains(this.classes, e);
          }
          toNode() {
            return kt.call(this, "a");
          }
          toMarkup() {
            return He.call(this, "a");
          }
        }
        class Ze {
          constructor(e, r, n) {
            this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.style = n;
          }
          hasClass(e) {
            return O.contains(this.classes, e);
          }
          toNode() {
            const e = document.createElement("img");
            e.src = this.src, e.alt = this.alt, e.className = "mord";
            for (const r in this.style)
              this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
            return e;
          }
          toMarkup() {
            let e = '<img src="' + O.escape(this.src) + '"' + (' alt="' + O.escape(this.alt) + '"'), r = "";
            for (const n in this.style)
              this.style.hasOwnProperty(n) && (r += O.hyphenate(n) + ":" + this.style[n] + ";");
            return r && (e += ' style="' + O.escape(r) + '"'), e += "'/>", e;
          }
        }
        const Je = {
          î: "ı̂",
          ï: "ı̈",
          í: "ı́",
          // 'ī': '\u0131\u0304', // enable when we add Extended Latin
          ì: "ı̀"
        };
        class q0 {
          constructor(e, r, n, s, a, c, h, m) {
            this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = n || 0, this.italic = s || 0, this.skew = a || 0, this.width = c || 0, this.classes = h || [], this.style = m || {}, this.maxFontSize = 0;
            const p = ht(this.text.charCodeAt(0));
            p && this.classes.push(p + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Je[this.text]);
          }
          hasClass(e) {
            return O.contains(this.classes, e);
          }
          /**
           * Creates a text node or span from a symbol node. Note that a span is only
           * created if it is needed.
           */
          toNode() {
            const e = document.createTextNode(this.text);
            let r = null;
            this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = E(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = te(this.classes));
            for (const n in this.style)
              this.style.hasOwnProperty(n) && (r = r || document.createElement("span"), r.style[n] = this.style[n]);
            return r ? (r.appendChild(e), r) : e;
          }
          /**
           * Creates markup for a symbol node.
           */
          toMarkup() {
            let e = !1, r = "<span";
            this.classes.length && (e = !0, r += ' class="', r += O.escape(te(this.classes)), r += '"');
            let n = "";
            this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
            for (const a in this.style)
              this.style.hasOwnProperty(a) && (n += O.hyphenate(a) + ":" + this.style[a] + ";");
            n && (e = !0, r += ' style="' + O.escape(n) + '"');
            const s = O.escape(this.text);
            return e ? (r += ">", r += s, r += "</span>", r) : s;
          }
        }
        class X0 {
          constructor(e, r) {
            this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
          }
          toNode() {
            const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (const n in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
            for (let n = 0; n < this.children.length; n++)
              r.appendChild(this.children[n].toNode());
            return r;
          }
          toMarkup() {
            let e = '<svg xmlns="http://www.w3.org/2000/svg"';
            for (const r in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + O.escape(this.attributes[r]) + '"');
            e += ">";
            for (let r = 0; r < this.children.length; r++)
              e += this.children[r].toMarkup();
            return e += "</svg>", e;
          }
        }
        class K0 {
          constructor(e, r) {
            this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
          }
          toNode() {
            const r = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", ye[this.pathName]), r;
          }
          toMarkup() {
            return this.alternate ? '<path d="' + O.escape(this.alternate) + '"/>' : '<path d="' + O.escape(ye[this.pathName]) + '"/>';
          }
        }
        class Qe {
          constructor(e) {
            this.attributes = void 0, this.attributes = e || {};
          }
          toNode() {
            const r = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (const n in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
            return r;
          }
          toMarkup() {
            let e = "<line";
            for (const r in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + O.escape(this.attributes[r]) + '"');
            return e += "/>", e;
          }
        }
        function et(t) {
          if (t instanceof q0)
            return t;
          throw new Error("Expected symbolNode but got " + String(t) + ".");
        }
        function St(t) {
          if (t instanceof ve)
            return t;
          throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
        }
        const Vt = {
          bin: 1,
          close: 1,
          inner: 1,
          open: 1,
          punct: 1,
          rel: 1
        }, Wt = {
          "accent-token": 1,
          mathord: 1,
          "op-token": 1,
          spacing: 1,
          textord: 1
        }, Ee = {
          math: {},
          text: {}
        };
        var h0 = Ee;
        function o(t, e, r, n, s, a) {
          Ee[t][s] = {
            font: e,
            group: r,
            replace: n
          }, a && n && (Ee[t][n] = Ee[t][s]);
        }
        const i = "math", A = "text", u = "main", l = "ams", M = "accent-token", S = "bin", H = "close", K = "inner", R = "mathord", j = "op-token", V = "open", T0 = "punct", f = "rel", a0 = "spacing", g = "textord";
        o(i, u, f, "≡", "\\equiv", !0), o(i, u, f, "≺", "\\prec", !0), o(i, u, f, "≻", "\\succ", !0), o(i, u, f, "∼", "\\sim", !0), o(i, u, f, "⊥", "\\perp"), o(i, u, f, "⪯", "\\preceq", !0), o(i, u, f, "⪰", "\\succeq", !0), o(i, u, f, "≃", "\\simeq", !0), o(i, u, f, "∣", "\\mid", !0), o(i, u, f, "≪", "\\ll", !0), o(i, u, f, "≫", "\\gg", !0), o(i, u, f, "≍", "\\asymp", !0), o(i, u, f, "∥", "\\parallel"), o(i, u, f, "⋈", "\\bowtie", !0), o(i, u, f, "⌣", "\\smile", !0), o(i, u, f, "⊑", "\\sqsubseteq", !0), o(i, u, f, "⊒", "\\sqsupseteq", !0), o(i, u, f, "≐", "\\doteq", !0), o(i, u, f, "⌢", "\\frown", !0), o(i, u, f, "∋", "\\ni", !0), o(i, u, f, "∝", "\\propto", !0), o(i, u, f, "⊢", "\\vdash", !0), o(i, u, f, "⊣", "\\dashv", !0), o(i, u, f, "∋", "\\owns"), o(i, u, T0, ".", "\\ldotp"), o(i, u, T0, "⋅", "\\cdotp"), o(i, u, g, "#", "\\#"), o(A, u, g, "#", "\\#"), o(i, u, g, "&", "\\&"), o(A, u, g, "&", "\\&"), o(i, u, g, "ℵ", "\\aleph", !0), o(i, u, g, "∀", "\\forall", !0), o(i, u, g, "ℏ", "\\hbar", !0), o(i, u, g, "∃", "\\exists", !0), o(i, u, g, "∇", "\\nabla", !0), o(i, u, g, "♭", "\\flat", !0), o(i, u, g, "ℓ", "\\ell", !0), o(i, u, g, "♮", "\\natural", !0), o(i, u, g, "♣", "\\clubsuit", !0), o(i, u, g, "℘", "\\wp", !0), o(i, u, g, "♯", "\\sharp", !0), o(i, u, g, "♢", "\\diamondsuit", !0), o(i, u, g, "ℜ", "\\Re", !0), o(i, u, g, "♡", "\\heartsuit", !0), o(i, u, g, "ℑ", "\\Im", !0), o(i, u, g, "♠", "\\spadesuit", !0), o(i, u, g, "§", "\\S", !0), o(A, u, g, "§", "\\S"), o(i, u, g, "¶", "\\P", !0), o(A, u, g, "¶", "\\P"), o(i, u, g, "†", "\\dag"), o(A, u, g, "†", "\\dag"), o(A, u, g, "†", "\\textdagger"), o(i, u, g, "‡", "\\ddag"), o(A, u, g, "‡", "\\ddag"), o(A, u, g, "‡", "\\textdaggerdbl"), o(i, u, H, "⎱", "\\rmoustache", !0), o(i, u, V, "⎰", "\\lmoustache", !0), o(i, u, H, "⟯", "\\rgroup", !0), o(i, u, V, "⟮", "\\lgroup", !0), o(i, u, S, "∓", "\\mp", !0), o(i, u, S, "⊖", "\\ominus", !0), o(i, u, S, "⊎", "\\uplus", !0), o(i, u, S, "⊓", "\\sqcap", !0), o(i, u, S, "∗", "\\ast"), o(i, u, S, "⊔", "\\sqcup", !0), o(i, u, S, "◯", "\\bigcirc", !0), o(i, u, S, "∙", "\\bullet", !0), o(i, u, S, "‡", "\\ddagger"), o(i, u, S, "≀", "\\wr", !0), o(i, u, S, "⨿", "\\amalg"), o(i, u, S, "&", "\\And"), o(i, u, f, "⟵", "\\longleftarrow", !0), o(i, u, f, "⇐", "\\Leftarrow", !0), o(i, u, f, "⟸", "\\Longleftarrow", !0), o(i, u, f, "⟶", "\\longrightarrow", !0), o(i, u, f, "⇒", "\\Rightarrow", !0), o(i, u, f, "⟹", "\\Longrightarrow", !0), o(i, u, f, "↔", "\\leftrightarrow", !0), o(i, u, f, "⟷", "\\longleftrightarrow", !0), o(i, u, f, "⇔", "\\Leftrightarrow", !0), o(i, u, f, "⟺", "\\Longleftrightarrow", !0), o(i, u, f, "↦", "\\mapsto", !0), o(i, u, f, "⟼", "\\longmapsto", !0), o(i, u, f, "↗", "\\nearrow", !0), o(i, u, f, "↩", "\\hookleftarrow", !0), o(i, u, f, "↪", "\\hookrightarrow", !0), o(i, u, f, "↘", "\\searrow", !0), o(i, u, f, "↼", "\\leftharpoonup", !0), o(i, u, f, "⇀", "\\rightharpoonup", !0), o(i, u, f, "↙", "\\swarrow", !0), o(i, u, f, "↽", "\\leftharpoondown", !0), o(i, u, f, "⇁", "\\rightharpoondown", !0), o(i, u, f, "↖", "\\nwarrow", !0), o(i, u, f, "⇌", "\\rightleftharpoons", !0), o(i, l, f, "≮", "\\nless", !0), o(i, l, f, "", "\\@nleqslant"), o(i, l, f, "", "\\@nleqq"), o(i, l, f, "⪇", "\\lneq", !0), o(i, l, f, "≨", "\\lneqq", !0), o(i, l, f, "", "\\@lvertneqq"), o(i, l, f, "⋦", "\\lnsim", !0), o(i, l, f, "⪉", "\\lnapprox", !0), o(i, l, f, "⊀", "\\nprec", !0), o(i, l, f, "⋠", "\\npreceq", !0), o(i, l, f, "⋨", "\\precnsim", !0), o(i, l, f, "⪹", "\\precnapprox", !0), o(i, l, f, "≁", "\\nsim", !0), o(i, l, f, "", "\\@nshortmid"), o(i, l, f, "∤", "\\nmid", !0), o(i, l, f, "⊬", "\\nvdash", !0), o(i, l, f, "⊭", "\\nvDash", !0), o(i, l, f, "⋪", "\\ntriangleleft"), o(i, l, f, "⋬", "\\ntrianglelefteq", !0), o(i, l, f, "⊊", "\\subsetneq", !0), o(i, l, f, "", "\\@varsubsetneq"), o(i, l, f, "⫋", "\\subsetneqq", !0), o(i, l, f, "", "\\@varsubsetneqq"), o(i, l, f, "≯", "\\ngtr", !0), o(i, l, f, "", "\\@ngeqslant"), o(i, l, f, "", "\\@ngeqq"), o(i, l, f, "⪈", "\\gneq", !0), o(i, l, f, "≩", "\\gneqq", !0), o(i, l, f, "", "\\@gvertneqq"), o(i, l, f, "⋧", "\\gnsim", !0), o(i, l, f, "⪊", "\\gnapprox", !0), o(i, l, f, "⊁", "\\nsucc", !0), o(i, l, f, "⋡", "\\nsucceq", !0), o(i, l, f, "⋩", "\\succnsim", !0), o(i, l, f, "⪺", "\\succnapprox", !0), o(i, l, f, "≆", "\\ncong", !0), o(i, l, f, "", "\\@nshortparallel"), o(i, l, f, "∦", "\\nparallel", !0), o(i, l, f, "⊯", "\\nVDash", !0), o(i, l, f, "⋫", "\\ntriangleright"), o(i, l, f, "⋭", "\\ntrianglerighteq", !0), o(i, l, f, "", "\\@nsupseteqq"), o(i, l, f, "⊋", "\\supsetneq", !0), o(i, l, f, "", "\\@varsupsetneq"), o(i, l, f, "⫌", "\\supsetneqq", !0), o(i, l, f, "", "\\@varsupsetneqq"), o(i, l, f, "⊮", "\\nVdash", !0), o(i, l, f, "⪵", "\\precneqq", !0), o(i, l, f, "⪶", "\\succneqq", !0), o(i, l, f, "", "\\@nsubseteqq"), o(i, l, S, "⊴", "\\unlhd"), o(i, l, S, "⊵", "\\unrhd"), o(i, l, f, "↚", "\\nleftarrow", !0), o(i, l, f, "↛", "\\nrightarrow", !0), o(i, l, f, "⇍", "\\nLeftarrow", !0), o(i, l, f, "⇏", "\\nRightarrow", !0), o(i, l, f, "↮", "\\nleftrightarrow", !0), o(i, l, f, "⇎", "\\nLeftrightarrow", !0), o(i, l, f, "△", "\\vartriangle"), o(i, l, g, "ℏ", "\\hslash"), o(i, l, g, "▽", "\\triangledown"), o(i, l, g, "◊", "\\lozenge"), o(i, l, g, "Ⓢ", "\\circledS"), o(i, l, g, "®", "\\circledR"), o(A, l, g, "®", "\\circledR"), o(i, l, g, "∡", "\\measuredangle", !0), o(i, l, g, "∄", "\\nexists"), o(i, l, g, "℧", "\\mho"), o(i, l, g, "Ⅎ", "\\Finv", !0), o(i, l, g, "⅁", "\\Game", !0), o(i, l, g, "‵", "\\backprime"), o(i, l, g, "▲", "\\blacktriangle"), o(i, l, g, "▼", "\\blacktriangledown"), o(i, l, g, "■", "\\blacksquare"), o(i, l, g, "⧫", "\\blacklozenge"), o(i, l, g, "★", "\\bigstar"), o(i, l, g, "∢", "\\sphericalangle", !0), o(i, l, g, "∁", "\\complement", !0), o(i, l, g, "ð", "\\eth", !0), o(A, u, g, "ð", "ð"), o(i, l, g, "╱", "\\diagup"), o(i, l, g, "╲", "\\diagdown"), o(i, l, g, "□", "\\square"), o(i, l, g, "□", "\\Box"), o(i, l, g, "◊", "\\Diamond"), o(i, l, g, "¥", "\\yen", !0), o(A, l, g, "¥", "\\yen", !0), o(i, l, g, "✓", "\\checkmark", !0), o(A, l, g, "✓", "\\checkmark"), o(i, l, g, "ℶ", "\\beth", !0), o(i, l, g, "ℸ", "\\daleth", !0), o(i, l, g, "ℷ", "\\gimel", !0), o(i, l, g, "ϝ", "\\digamma", !0), o(i, l, g, "ϰ", "\\varkappa"), o(i, l, V, "┌", "\\@ulcorner", !0), o(i, l, H, "┐", "\\@urcorner", !0), o(i, l, V, "└", "\\@llcorner", !0), o(i, l, H, "┘", "\\@lrcorner", !0), o(i, l, f, "≦", "\\leqq", !0), o(i, l, f, "⩽", "\\leqslant", !0), o(i, l, f, "⪕", "\\eqslantless", !0), o(i, l, f, "≲", "\\lesssim", !0), o(i, l, f, "⪅", "\\lessapprox", !0), o(i, l, f, "≊", "\\approxeq", !0), o(i, l, S, "⋖", "\\lessdot"), o(i, l, f, "⋘", "\\lll", !0), o(i, l, f, "≶", "\\lessgtr", !0), o(i, l, f, "⋚", "\\lesseqgtr", !0), o(i, l, f, "⪋", "\\lesseqqgtr", !0), o(i, l, f, "≑", "\\doteqdot"), o(i, l, f, "≓", "\\risingdotseq", !0), o(i, l, f, "≒", "\\fallingdotseq", !0), o(i, l, f, "∽", "\\backsim", !0), o(i, l, f, "⋍", "\\backsimeq", !0), o(i, l, f, "⫅", "\\subseteqq", !0), o(i, l, f, "⋐", "\\Subset", !0), o(i, l, f, "⊏", "\\sqsubset", !0), o(i, l, f, "≼", "\\preccurlyeq", !0), o(i, l, f, "⋞", "\\curlyeqprec", !0), o(i, l, f, "≾", "\\precsim", !0), o(i, l, f, "⪷", "\\precapprox", !0), o(i, l, f, "⊲", "\\vartriangleleft"), o(i, l, f, "⊴", "\\trianglelefteq"), o(i, l, f, "⊨", "\\vDash", !0), o(i, l, f, "⊪", "\\Vvdash", !0), o(i, l, f, "⌣", "\\smallsmile"), o(i, l, f, "⌢", "\\smallfrown"), o(i, l, f, "≏", "\\bumpeq", !0), o(i, l, f, "≎", "\\Bumpeq", !0), o(i, l, f, "≧", "\\geqq", !0), o(i, l, f, "⩾", "\\geqslant", !0), o(i, l, f, "⪖", "\\eqslantgtr", !0), o(i, l, f, "≳", "\\gtrsim", !0), o(i, l, f, "⪆", "\\gtrapprox", !0), o(i, l, S, "⋗", "\\gtrdot"), o(i, l, f, "⋙", "\\ggg", !0), o(i, l, f, "≷", "\\gtrless", !0), o(i, l, f, "⋛", "\\gtreqless", !0), o(i, l, f, "⪌", "\\gtreqqless", !0), o(i, l, f, "≖", "\\eqcirc", !0), o(i, l, f, "≗", "\\circeq", !0), o(i, l, f, "≜", "\\triangleq", !0), o(i, l, f, "∼", "\\thicksim"), o(i, l, f, "≈", "\\thickapprox"), o(i, l, f, "⫆", "\\supseteqq", !0), o(i, l, f, "⋑", "\\Supset", !0), o(i, l, f, "⊐", "\\sqsupset", !0), o(i, l, f, "≽", "\\succcurlyeq", !0), o(i, l, f, "⋟", "\\curlyeqsucc", !0), o(i, l, f, "≿", "\\succsim", !0), o(i, l, f, "⪸", "\\succapprox", !0), o(i, l, f, "⊳", "\\vartriangleright"), o(i, l, f, "⊵", "\\trianglerighteq"), o(i, l, f, "⊩", "\\Vdash", !0), o(i, l, f, "∣", "\\shortmid"), o(i, l, f, "∥", "\\shortparallel"), o(i, l, f, "≬", "\\between", !0), o(i, l, f, "⋔", "\\pitchfork", !0), o(i, l, f, "∝", "\\varpropto"), o(i, l, f, "◀", "\\blacktriangleleft"), o(i, l, f, "∴", "\\therefore", !0), o(i, l, f, "∍", "\\backepsilon"), o(i, l, f, "▶", "\\blacktriangleright"), o(i, l, f, "∵", "\\because", !0), o(i, l, f, "⋘", "\\llless"), o(i, l, f, "⋙", "\\gggtr"), o(i, l, S, "⊲", "\\lhd"), o(i, l, S, "⊳", "\\rhd"), o(i, l, f, "≂", "\\eqsim", !0), o(i, u, f, "⋈", "\\Join"), o(i, l, f, "≑", "\\Doteq", !0), o(i, l, S, "∔", "\\dotplus", !0), o(i, l, S, "∖", "\\smallsetminus"), o(i, l, S, "⋒", "\\Cap", !0), o(i, l, S, "⋓", "\\Cup", !0), o(i, l, S, "⩞", "\\doublebarwedge", !0), o(i, l, S, "⊟", "\\boxminus", !0), o(i, l, S, "⊞", "\\boxplus", !0), o(i, l, S, "⋇", "\\divideontimes", !0), o(i, l, S, "⋉", "\\ltimes", !0), o(i, l, S, "⋊", "\\rtimes", !0), o(i, l, S, "⋋", "\\leftthreetimes", !0), o(i, l, S, "⋌", "\\rightthreetimes", !0), o(i, l, S, "⋏", "\\curlywedge", !0), o(i, l, S, "⋎", "\\curlyvee", !0), o(i, l, S, "⊝", "\\circleddash", !0), o(i, l, S, "⊛", "\\circledast", !0), o(i, l, S, "⋅", "\\centerdot"), o(i, l, S, "⊺", "\\intercal", !0), o(i, l, S, "⋒", "\\doublecap"), o(i, l, S, "⋓", "\\doublecup"), o(i, l, S, "⊠", "\\boxtimes", !0), o(i, l, f, "⇢", "\\dashrightarrow", !0), o(i, l, f, "⇠", "\\dashleftarrow", !0), o(i, l, f, "⇇", "\\leftleftarrows", !0), o(i, l, f, "⇆", "\\leftrightarrows", !0), o(i, l, f, "⇚", "\\Lleftarrow", !0), o(i, l, f, "↞", "\\twoheadleftarrow", !0), o(i, l, f, "↢", "\\leftarrowtail", !0), o(i, l, f, "↫", "\\looparrowleft", !0), o(i, l, f, "⇋", "\\leftrightharpoons", !0), o(i, l, f, "↶", "\\curvearrowleft", !0), o(i, l, f, "↺", "\\circlearrowleft", !0), o(i, l, f, "↰", "\\Lsh", !0), o(i, l, f, "⇈", "\\upuparrows", !0), o(i, l, f, "↿", "\\upharpoonleft", !0), o(i, l, f, "⇃", "\\downharpoonleft", !0), o(i, u, f, "⊶", "\\origof", !0), o(i, u, f, "⊷", "\\imageof", !0), o(i, l, f, "⊸", "\\multimap", !0), o(i, l, f, "↭", "\\leftrightsquigarrow", !0), o(i, l, f, "⇉", "\\rightrightarrows", !0), o(i, l, f, "⇄", "\\rightleftarrows", !0), o(i, l, f, "↠", "\\twoheadrightarrow", !0), o(i, l, f, "↣", "\\rightarrowtail", !0), o(i, l, f, "↬", "\\looparrowright", !0), o(i, l, f, "↷", "\\curvearrowright", !0), o(i, l, f, "↻", "\\circlearrowright", !0), o(i, l, f, "↱", "\\Rsh", !0), o(i, l, f, "⇊", "\\downdownarrows", !0), o(i, l, f, "↾", "\\upharpoonright", !0), o(i, l, f, "⇂", "\\downharpoonright", !0), o(i, l, f, "⇝", "\\rightsquigarrow", !0), o(i, l, f, "⇝", "\\leadsto"), o(i, l, f, "⇛", "\\Rrightarrow", !0), o(i, l, f, "↾", "\\restriction"), o(i, u, g, "‘", "`"), o(i, u, g, "$", "\\$"), o(A, u, g, "$", "\\$"), o(A, u, g, "$", "\\textdollar"), o(i, u, g, "%", "\\%"), o(A, u, g, "%", "\\%"), o(i, u, g, "_", "\\_"), o(A, u, g, "_", "\\_"), o(A, u, g, "_", "\\textunderscore"), o(i, u, g, "∠", "\\angle", !0), o(i, u, g, "∞", "\\infty", !0), o(i, u, g, "′", "\\prime"), o(i, u, g, "△", "\\triangle"), o(i, u, g, "Γ", "\\Gamma", !0), o(i, u, g, "Δ", "\\Delta", !0), o(i, u, g, "Θ", "\\Theta", !0), o(i, u, g, "Λ", "\\Lambda", !0), o(i, u, g, "Ξ", "\\Xi", !0), o(i, u, g, "Π", "\\Pi", !0), o(i, u, g, "Σ", "\\Sigma", !0), o(i, u, g, "Υ", "\\Upsilon", !0), o(i, u, g, "Φ", "\\Phi", !0), o(i, u, g, "Ψ", "\\Psi", !0), o(i, u, g, "Ω", "\\Omega", !0), o(i, u, g, "A", "Α"), o(i, u, g, "B", "Β"), o(i, u, g, "E", "Ε"), o(i, u, g, "Z", "Ζ"), o(i, u, g, "H", "Η"), o(i, u, g, "I", "Ι"), o(i, u, g, "K", "Κ"), o(i, u, g, "M", "Μ"), o(i, u, g, "N", "Ν"), o(i, u, g, "O", "Ο"), o(i, u, g, "P", "Ρ"), o(i, u, g, "T", "Τ"), o(i, u, g, "X", "Χ"), o(i, u, g, "¬", "\\neg", !0), o(i, u, g, "¬", "\\lnot"), o(i, u, g, "⊤", "\\top"), o(i, u, g, "⊥", "\\bot"), o(i, u, g, "∅", "\\emptyset"), o(i, l, g, "∅", "\\varnothing"), o(i, u, R, "α", "\\alpha", !0), o(i, u, R, "β", "\\beta", !0), o(i, u, R, "γ", "\\gamma", !0), o(i, u, R, "δ", "\\delta", !0), o(i, u, R, "ϵ", "\\epsilon", !0), o(i, u, R, "ζ", "\\zeta", !0), o(i, u, R, "η", "\\eta", !0), o(i, u, R, "θ", "\\theta", !0), o(i, u, R, "ι", "\\iota", !0), o(i, u, R, "κ", "\\kappa", !0), o(i, u, R, "λ", "\\lambda", !0), o(i, u, R, "μ", "\\mu", !0), o(i, u, R, "ν", "\\nu", !0), o(i, u, R, "ξ", "\\xi", !0), o(i, u, R, "ο", "\\omicron", !0), o(i, u, R, "π", "\\pi", !0), o(i, u, R, "ρ", "\\rho", !0), o(i, u, R, "σ", "\\sigma", !0), o(i, u, R, "τ", "\\tau", !0), o(i, u, R, "υ", "\\upsilon", !0), o(i, u, R, "ϕ", "\\phi", !0), o(i, u, R, "χ", "\\chi", !0), o(i, u, R, "ψ", "\\psi", !0), o(i, u, R, "ω", "\\omega", !0), o(i, u, R, "ε", "\\varepsilon", !0), o(i, u, R, "ϑ", "\\vartheta", !0), o(i, u, R, "ϖ", "\\varpi", !0), o(i, u, R, "ϱ", "\\varrho", !0), o(i, u, R, "ς", "\\varsigma", !0), o(i, u, R, "φ", "\\varphi", !0), o(i, u, S, "∗", "*", !0), o(i, u, S, "+", "+"), o(i, u, S, "−", "-", !0), o(i, u, S, "⋅", "\\cdot", !0), o(i, u, S, "∘", "\\circ", !0), o(i, u, S, "÷", "\\div", !0), o(i, u, S, "±", "\\pm", !0), o(i, u, S, "×", "\\times", !0), o(i, u, S, "∩", "\\cap", !0), o(i, u, S, "∪", "\\cup", !0), o(i, u, S, "∖", "\\setminus", !0), o(i, u, S, "∧", "\\land"), o(i, u, S, "∨", "\\lor"), o(i, u, S, "∧", "\\wedge", !0), o(i, u, S, "∨", "\\vee", !0), o(i, u, g, "√", "\\surd"), o(i, u, V, "⟨", "\\langle", !0), o(i, u, V, "∣", "\\lvert"), o(i, u, V, "∥", "\\lVert"), o(i, u, H, "?", "?"), o(i, u, H, "!", "!"), o(i, u, H, "⟩", "\\rangle", !0), o(i, u, H, "∣", "\\rvert"), o(i, u, H, "∥", "\\rVert"), o(i, u, f, "=", "="), o(i, u, f, ":", ":"), o(i, u, f, "≈", "\\approx", !0), o(i, u, f, "≅", "\\cong", !0), o(i, u, f, "≥", "\\ge"), o(i, u, f, "≥", "\\geq", !0), o(i, u, f, "←", "\\gets"), o(i, u, f, ">", "\\gt", !0), o(i, u, f, "∈", "\\in", !0), o(i, u, f, "", "\\@not"), o(i, u, f, "⊂", "\\subset", !0), o(i, u, f, "⊃", "\\supset", !0), o(i, u, f, "⊆", "\\subseteq", !0), o(i, u, f, "⊇", "\\supseteq", !0), o(i, l, f, "⊈", "\\nsubseteq", !0), o(i, l, f, "⊉", "\\nsupseteq", !0), o(i, u, f, "⊨", "\\models"), o(i, u, f, "←", "\\leftarrow", !0), o(i, u, f, "≤", "\\le"), o(i, u, f, "≤", "\\leq", !0), o(i, u, f, "<", "\\lt", !0), o(i, u, f, "→", "\\rightarrow", !0), o(i, u, f, "→", "\\to"), o(i, l, f, "≱", "\\ngeq", !0), o(i, l, f, "≰", "\\nleq", !0), o(i, u, a0, " ", "\\ "), o(i, u, a0, " ", "\\space"), o(i, u, a0, " ", "\\nobreakspace"), o(A, u, a0, " ", "\\ "), o(A, u, a0, " ", " "), o(A, u, a0, " ", "\\space"), o(A, u, a0, " ", "\\nobreakspace"), o(i, u, a0, null, "\\nobreak"), o(i, u, a0, null, "\\allowbreak"), o(i, u, T0, ",", ","), o(i, u, T0, ";", ";"), o(i, l, S, "⊼", "\\barwedge", !0), o(i, l, S, "⊻", "\\veebar", !0), o(i, u, S, "⊙", "\\odot", !0), o(i, u, S, "⊕", "\\oplus", !0), o(i, u, S, "⊗", "\\otimes", !0), o(i, u, g, "∂", "\\partial", !0), o(i, u, S, "⊘", "\\oslash", !0), o(i, l, S, "⊚", "\\circledcirc", !0), o(i, l, S, "⊡", "\\boxdot", !0), o(i, u, S, "△", "\\bigtriangleup"), o(i, u, S, "▽", "\\bigtriangledown"), o(i, u, S, "†", "\\dagger"), o(i, u, S, "⋄", "\\diamond"), o(i, u, S, "⋆", "\\star"), o(i, u, S, "◃", "\\triangleleft"), o(i, u, S, "▹", "\\triangleright"), o(i, u, V, "{", "\\{"), o(A, u, g, "{", "\\{"), o(A, u, g, "{", "\\textbraceleft"), o(i, u, H, "}", "\\}"), o(A, u, g, "}", "\\}"), o(A, u, g, "}", "\\textbraceright"), o(i, u, V, "{", "\\lbrace"), o(i, u, H, "}", "\\rbrace"), o(i, u, V, "[", "\\lbrack", !0), o(A, u, g, "[", "\\lbrack", !0), o(i, u, H, "]", "\\rbrack", !0), o(A, u, g, "]", "\\rbrack", !0), o(i, u, V, "(", "\\lparen", !0), o(i, u, H, ")", "\\rparen", !0), o(A, u, g, "<", "\\textless", !0), o(A, u, g, ">", "\\textgreater", !0), o(i, u, V, "⌊", "\\lfloor", !0), o(i, u, H, "⌋", "\\rfloor", !0), o(i, u, V, "⌈", "\\lceil", !0), o(i, u, H, "⌉", "\\rceil", !0), o(i, u, g, "\\", "\\backslash"), o(i, u, g, "∣", "|"), o(i, u, g, "∣", "\\vert"), o(A, u, g, "|", "\\textbar", !0), o(i, u, g, "∥", "\\|"), o(i, u, g, "∥", "\\Vert"), o(A, u, g, "∥", "\\textbardbl"), o(A, u, g, "~", "\\textasciitilde"), o(A, u, g, "\\", "\\textbackslash"), o(A, u, g, "^", "\\textasciicircum"), o(i, u, f, "↑", "\\uparrow", !0), o(i, u, f, "⇑", "\\Uparrow", !0), o(i, u, f, "↓", "\\downarrow", !0), o(i, u, f, "⇓", "\\Downarrow", !0), o(i, u, f, "↕", "\\updownarrow", !0), o(i, u, f, "⇕", "\\Updownarrow", !0), o(i, u, j, "∐", "\\coprod"), o(i, u, j, "⋁", "\\bigvee"), o(i, u, j, "⋀", "\\bigwedge"), o(i, u, j, "⨄", "\\biguplus"), o(i, u, j, "⋂", "\\bigcap"), o(i, u, j, "⋃", "\\bigcup"), o(i, u, j, "∫", "\\int"), o(i, u, j, "∫", "\\intop"), o(i, u, j, "∬", "\\iint"), o(i, u, j, "∭", "\\iiint"), o(i, u, j, "∏", "\\prod"), o(i, u, j, "∑", "\\sum"), o(i, u, j, "⨂", "\\bigotimes"), o(i, u, j, "⨁", "\\bigoplus"), o(i, u, j, "⨀", "\\bigodot"), o(i, u, j, "∮", "\\oint"), o(i, u, j, "∯", "\\oiint"), o(i, u, j, "∰", "\\oiiint"), o(i, u, j, "⨆", "\\bigsqcup"), o(i, u, j, "∫", "\\smallint"), o(A, u, K, "…", "\\textellipsis"), o(i, u, K, "…", "\\mathellipsis"), o(A, u, K, "…", "\\ldots", !0), o(i, u, K, "…", "\\ldots", !0), o(i, u, K, "⋯", "\\@cdots", !0), o(i, u, K, "⋱", "\\ddots", !0), o(i, u, g, "⋮", "\\varvdots"), o(i, u, M, "ˊ", "\\acute"), o(i, u, M, "ˋ", "\\grave"), o(i, u, M, "¨", "\\ddot"), o(i, u, M, "~", "\\tilde"), o(i, u, M, "ˉ", "\\bar"), o(i, u, M, "˘", "\\breve"), o(i, u, M, "ˇ", "\\check"), o(i, u, M, "^", "\\hat"), o(i, u, M, "⃗", "\\vec"), o(i, u, M, "˙", "\\dot"), o(i, u, M, "˚", "\\mathring"), o(i, u, R, "", "\\@imath"), o(i, u, R, "", "\\@jmath"), o(i, u, g, "ı", "ı"), o(i, u, g, "ȷ", "ȷ"), o(A, u, g, "ı", "\\i", !0), o(A, u, g, "ȷ", "\\j", !0), o(A, u, g, "ß", "\\ss", !0), o(A, u, g, "æ", "\\ae", !0), o(A, u, g, "œ", "\\oe", !0), o(A, u, g, "ø", "\\o", !0), o(A, u, g, "Æ", "\\AE", !0), o(A, u, g, "Œ", "\\OE", !0), o(A, u, g, "Ø", "\\O", !0), o(A, u, M, "ˊ", "\\'"), o(A, u, M, "ˋ", "\\`"), o(A, u, M, "ˆ", "\\^"), o(A, u, M, "˜", "\\~"), o(A, u, M, "ˉ", "\\="), o(A, u, M, "˘", "\\u"), o(A, u, M, "˙", "\\."), o(A, u, M, "¸", "\\c"), o(A, u, M, "˚", "\\r"), o(A, u, M, "ˇ", "\\v"), o(A, u, M, "¨", '\\"'), o(A, u, M, "˝", "\\H"), o(A, u, M, "◯", "\\textcircled");
        const ue = {
          "--": !0,
          "---": !0,
          "``": !0,
          "''": !0
        };
        o(A, u, g, "–", "--", !0), o(A, u, g, "–", "\\textendash"), o(A, u, g, "—", "---", !0), o(A, u, g, "—", "\\textemdash"), o(A, u, g, "‘", "`", !0), o(A, u, g, "‘", "\\textquoteleft"), o(A, u, g, "’", "'", !0), o(A, u, g, "’", "\\textquoteright"), o(A, u, g, "“", "``", !0), o(A, u, g, "“", "\\textquotedblleft"), o(A, u, g, "”", "''", !0), o(A, u, g, "”", "\\textquotedblright"), o(i, u, g, "°", "\\degree", !0), o(A, u, g, "°", "\\degree"), o(A, u, g, "°", "\\textdegree", !0), o(i, u, g, "£", "\\pounds"), o(i, u, g, "£", "\\mathsterling", !0), o(A, u, g, "£", "\\pounds"), o(A, u, g, "£", "\\textsterling", !0), o(i, l, g, "✠", "\\maltese"), o(A, l, g, "✠", "\\maltese");
        const ne = '0123456789/@."';
        for (let t = 0; t < ne.length; t++) {
          const e = ne.charAt(t);
          o(i, u, g, e, e);
        }
        const E0 = '0123456789!@*()-=+";:?/.,';
        for (let t = 0; t < E0.length; t++) {
          const e = E0.charAt(t);
          o(A, u, g, e, e);
        }
        const ke = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let t = 0; t < ke.length; t++) {
          const e = ke.charAt(t);
          o(i, u, R, e, e), o(A, u, g, e, e);
        }
        o(i, l, g, "C", "ℂ"), o(A, l, g, "C", "ℂ"), o(i, l, g, "H", "ℍ"), o(A, l, g, "H", "ℍ"), o(i, l, g, "N", "ℕ"), o(A, l, g, "N", "ℕ"), o(i, l, g, "P", "ℙ"), o(A, l, g, "P", "ℙ"), o(i, l, g, "Q", "ℚ"), o(A, l, g, "Q", "ℚ"), o(i, l, g, "R", "ℝ"), o(A, l, g, "R", "ℝ"), o(i, l, g, "Z", "ℤ"), o(A, l, g, "Z", "ℤ"), o(i, u, R, "h", "ℎ"), o(A, u, R, "h", "ℎ");
        let W = "";
        for (let t = 0; t < ke.length; t++) {
          const e = ke.charAt(t);
          W = String.fromCharCode(55349, 56320 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56372 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56424 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56580 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56684 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56736 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56788 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56840 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56944 + t), o(i, u, R, e, W), o(A, u, g, e, W), t < 26 && (W = String.fromCharCode(55349, 56632 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 56476 + t), o(i, u, R, e, W), o(A, u, g, e, W));
        }
        W = "𝕜", o(i, u, R, "k", W), o(A, u, g, "k", W);
        for (let t = 0; t < 10; t++) {
          const e = t.toString();
          W = String.fromCharCode(55349, 57294 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 57314 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 57324 + t), o(i, u, R, e, W), o(A, u, g, e, W), W = String.fromCharCode(55349, 57334 + t), o(i, u, R, e, W), o(A, u, g, e, W);
        }
        const tt = "ÐÞþ";
        for (let t = 0; t < tt.length; t++) {
          const e = tt.charAt(t);
          o(i, u, R, e, e), o(A, u, g, e, e);
        }
        const Mt = [
          ["mathbf", "textbf", "Main-Bold"],
          // A-Z bold upright
          ["mathbf", "textbf", "Main-Bold"],
          // a-z bold upright
          ["mathnormal", "textit", "Math-Italic"],
          // A-Z italic
          ["mathnormal", "textit", "Math-Italic"],
          // a-z italic
          ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
          // A-Z bold italic
          ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
          // a-z bold italic
          // Map fancy A-Z letters to script, not calligraphic.
          // This aligns with unicode-math and math fonts (except Cambria Math).
          ["mathscr", "textscr", "Script-Regular"],
          // A-Z script
          ["", "", ""],
          // a-z script.  No font
          ["", "", ""],
          // A-Z bold script. No font
          ["", "", ""],
          // a-z bold script. No font
          ["mathfrak", "textfrak", "Fraktur-Regular"],
          // A-Z Fraktur
          ["mathfrak", "textfrak", "Fraktur-Regular"],
          // a-z Fraktur
          ["mathbb", "textbb", "AMS-Regular"],
          // A-Z double-struck
          ["mathbb", "textbb", "AMS-Regular"],
          // k double-struck
          // Note that we are using a bold font, but font metrics for regular Fraktur.
          ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
          // A-Z bold Fraktur
          ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
          // a-z bold Fraktur
          ["mathsf", "textsf", "SansSerif-Regular"],
          // A-Z sans-serif
          ["mathsf", "textsf", "SansSerif-Regular"],
          // a-z sans-serif
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          // A-Z bold sans-serif
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          // a-z bold sans-serif
          ["mathitsf", "textitsf", "SansSerif-Italic"],
          // A-Z italic sans-serif
          ["mathitsf", "textitsf", "SansSerif-Italic"],
          // a-z italic sans-serif
          ["", "", ""],
          // A-Z bold italic sans. No font
          ["", "", ""],
          // a-z bold italic sans. No font
          ["mathtt", "texttt", "Typewriter-Regular"],
          // A-Z monospace
          ["mathtt", "texttt", "Typewriter-Regular"]
          // a-z monospace
        ], Cr = [
          ["mathbf", "textbf", "Main-Bold"],
          // 0-9 bold
          ["", "", ""],
          // 0-9 double-struck. No KaTeX font.
          ["mathsf", "textsf", "SansSerif-Regular"],
          // 0-9 sans-serif
          ["mathboldsf", "textboldsf", "SansSerif-Bold"],
          // 0-9 bold sans-serif
          ["mathtt", "texttt", "Typewriter-Regular"]
          // 0-9 monospace
        ], rs = function(t, e) {
          const r = t.charCodeAt(0), n = t.charCodeAt(1), s = (r - 55296) * 1024 + (n - 56320) + 65536, a = e === "math" ? 0 : 1;
          if (119808 <= s && s < 120484) {
            const c = Math.floor((s - 119808) / 26);
            return [Mt[c][2], Mt[c][a]];
          } else if (120782 <= s && s <= 120831) {
            const c = Math.floor((s - 120782) / 10);
            return [Cr[c][2], Cr[c][a]];
          } else {
            if (s === 120485 || s === 120486)
              return [Mt[0][2], Mt[0][a]];
            if (120486 < s && s < 120782)
              return ["", ""];
            throw new w("Unsupported character: " + t);
          }
        }, zt = function(t, e, r) {
          return h0[r][t] && h0[r][t].replace && (t = h0[r][t].replace), {
            value: t,
            metrics: Xe(t, e, r)
          };
        }, Z0 = function(t, e, r, n, s) {
          const a = zt(t, e, r), c = a.metrics;
          t = a.value;
          let h;
          if (c) {
            let m = c.italic;
            (r === "text" || n && n.font === "mathit") && (m = 0), h = new q0(t, c.height, c.depth, m, c.skew, c.width, s);
          } else
            typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + e + "' and mode '" + r + "'")), h = new q0(t, 0, 0, 0, 0, 0, s);
          if (n) {
            h.maxFontSize = n.sizeMultiplier, n.style.isTight() && h.classes.push("mtight");
            const m = n.getColor();
            m && (h.style.color = m);
          }
          return h;
        }, ns = function(t, e, r, n) {
          return n === void 0 && (n = []), r.font === "boldsymbol" && zt(t, "Main-Bold", e).metrics ? Z0(t, "Main-Bold", e, r, n.concat(["mathbf"])) : t === "\\" || h0[e][t].font === "main" ? Z0(t, "Main-Regular", e, r, n) : Z0(t, "AMS-Regular", e, r, n.concat(["amsrm"]));
        }, ss = function(t, e, r, n, s) {
          return s !== "textord" && zt(t, "Math-BoldItalic", e).metrics ? {
            fontName: "Math-BoldItalic",
            fontClass: "boldsymbol"
          } : {
            fontName: "Main-Bold",
            fontClass: "mathbf"
          };
        }, os = function(t, e, r) {
          const n = t.mode, s = t.text, a = ["mord"], c = n === "math" || n === "text" && e.font, h = c ? e.font : e.fontFamily;
          let m = "", p = "";
          if (s.charCodeAt(0) === 55349 && ([m, p] = rs(s, n)), m.length > 0)
            return Z0(s, m, n, e, a.concat(p));
          if (h) {
            let y, x;
            if (h === "boldsymbol") {
              const k = ss(s, n, e, a, r);
              y = k.fontName, x = [k.fontClass];
            } else c ? (y = Er[h].fontName, x = [h]) : (y = Tt(h, e.fontWeight, e.fontShape), x = [h, e.fontWeight, e.fontShape]);
            if (zt(s, y, n).metrics)
              return Z0(s, y, n, e, a.concat(x));
            if (ue.hasOwnProperty(s) && y.slice(0, 10) === "Typewriter") {
              const k = [];
              for (let C = 0; C < s.length; C++)
                k.push(Z0(s[C], y, n, e, a.concat(x)));
              return Br(k);
            }
          }
          if (r === "mathord")
            return Z0(s, "Math-Italic", n, e, a.concat(["mathnormal"]));
          if (r === "textord") {
            const y = h0[n][s] && h0[n][s].font;
            if (y === "ams") {
              const x = Tt("amsrm", e.fontWeight, e.fontShape);
              return Z0(s, x, n, e, a.concat("amsrm", e.fontWeight, e.fontShape));
            } else if (y === "main" || !y) {
              const x = Tt("textrm", e.fontWeight, e.fontShape);
              return Z0(s, x, n, e, a.concat(e.fontWeight, e.fontShape));
            } else {
              const x = Tt(y, e.fontWeight, e.fontShape);
              return Z0(s, x, n, e, a.concat(x, e.fontWeight, e.fontShape));
            }
          } else
            throw new Error("unexpected type: " + r + " in makeOrd");
        }, is = (t, e) => {
          if (te(t.classes) !== te(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize)
            return !1;
          if (t.classes.length === 1) {
            const r = t.classes[0];
            if (r === "mbin" || r === "mord")
              return !1;
          }
          for (const r in t.style)
            if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
              return !1;
          for (const r in e.style)
            if (e.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
              return !1;
          return !0;
        }, as = (t) => {
          for (let e = 0; e < t.length - 1; e++) {
            const r = t[e], n = t[e + 1];
            r instanceof q0 && n instanceof q0 && is(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, t.splice(e + 1, 1), e--);
          }
          return t;
        }, $t = function(t) {
          let e = 0, r = 0, n = 0;
          for (let s = 0; s < t.children.length; s++) {
            const a = t.children[s];
            a.height > e && (e = a.height), a.depth > r && (r = a.depth), a.maxFontSize > n && (n = a.maxFontSize);
          }
          t.height = e, t.depth = r, t.maxFontSize = n;
        }, L0 = function(t, e, r, n) {
          const s = new ve(t, e, r, n);
          return $t(s), s;
        }, Nr = (t, e, r, n) => new ve(t, e, r, n), ls = function(t, e, r) {
          const n = L0([t], [], e);
          return n.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness), n.style.borderBottomWidth = E(n.height), n.maxFontSize = 1, n;
        }, cs = function(t, e, r, n) {
          const s = new re(t, e, r, n);
          return $t(s), s;
        }, Br = function(t) {
          const e = new xe(t);
          return $t(e), e;
        }, us = function(t, e) {
          return t instanceof xe ? L0([], [t], e) : t;
        }, hs = function(t) {
          if (t.positionType === "individualShift") {
            const r = t.children, n = [r[0]], s = -r[0].shift - r[0].elem.depth;
            let a = s;
            for (let c = 1; c < r.length; c++) {
              const h = -r[c].shift - a - r[c].elem.depth, m = h - (r[c - 1].elem.height + r[c - 1].elem.depth);
              a = a + h, n.push({
                type: "kern",
                size: m
              }), n.push(r[c]);
            }
            return {
              children: n,
              depth: s
            };
          }
          let e;
          if (t.positionType === "top") {
            let r = t.positionData;
            for (let n = 0; n < t.children.length; n++) {
              const s = t.children[n];
              r -= s.type === "kern" ? s.size : s.elem.height + s.elem.depth;
            }
            e = r;
          } else if (t.positionType === "bottom")
            e = -t.positionData;
          else {
            const r = t.children[0];
            if (r.type !== "elem")
              throw new Error('First child must have type "elem".');
            if (t.positionType === "shift")
              e = -r.elem.depth - t.positionData;
            else if (t.positionType === "firstBaseline")
              e = -r.elem.depth;
            else
              throw new Error("Invalid positionType " + t.positionType + ".");
          }
          return {
            children: t.children,
            depth: e
          };
        }, ds = function(t, e) {
          const {
            children: r,
            depth: n
          } = hs(t);
          let s = 0;
          for (let C = 0; C < r.length; C++) {
            const L = r[C];
            if (L.type === "elem") {
              const _ = L.elem;
              s = Math.max(s, _.maxFontSize, _.height);
            }
          }
          s += 2;
          const a = L0(["pstrut"], []);
          a.style.height = E(s);
          const c = [];
          let h = n, m = n, p = n;
          for (let C = 0; C < r.length; C++) {
            const L = r[C];
            if (L.type === "kern")
              p += L.size;
            else {
              const _ = L.elem, Q = L.wrapperClasses || [], Y = L.wrapperStyle || {}, r0 = L0(Q, [a, _], void 0, Y);
              r0.style.top = E(-s - p - _.depth), L.marginLeft && (r0.style.marginLeft = L.marginLeft), L.marginRight && (r0.style.marginRight = L.marginRight), c.push(r0), p += _.height + _.depth;
            }
            h = Math.min(h, p), m = Math.max(m, p);
          }
          const y = L0(["vlist"], c);
          y.style.height = E(m);
          let x;
          if (h < 0) {
            const C = L0([], []), L = L0(["vlist"], [C]);
            L.style.height = E(-h);
            const _ = L0(["vlist-s"], [new q0("​")]);
            x = [L0(["vlist-r"], [y, _]), L0(["vlist-r"], [L])];
          } else
            x = [L0(["vlist-r"], [y])];
          const k = L0(["vlist-t"], x);
          return x.length === 2 && k.classes.push("vlist-t2"), k.height = m, k.depth = -h, k;
        }, ms = (t, e) => {
          const r = L0(["mspace"], [], e), n = f0(t, e);
          return r.style.marginRight = E(n), r;
        }, Tt = function(t, e, r) {
          let n = "";
          switch (t) {
            case "amsrm":
              n = "AMS";
              break;
            case "textrm":
              n = "Main";
              break;
            case "textsf":
              n = "SansSerif";
              break;
            case "texttt":
              n = "Typewriter";
              break;
            default:
              n = t;
          }
          let s;
          return e === "textbf" && r === "textit" ? s = "BoldItalic" : e === "textbf" ? s = "Bold" : e === "textit" ? s = "Italic" : s = "Regular", n + "-" + s;
        }, Er = {
          // styles
          mathbf: {
            variant: "bold",
            fontName: "Main-Bold"
          },
          mathrm: {
            variant: "normal",
            fontName: "Main-Regular"
          },
          textit: {
            variant: "italic",
            fontName: "Main-Italic"
          },
          mathit: {
            variant: "italic",
            fontName: "Main-Italic"
          },
          mathnormal: {
            variant: "italic",
            fontName: "Math-Italic"
          },
          // "boldsymbol" is missing because they require the use of multiple fonts:
          // Math-BoldItalic and Main-Bold.  This is handled by a special case in
          // makeOrd which ends up calling boldsymbol.
          // families
          mathbb: {
            variant: "double-struck",
            fontName: "AMS-Regular"
          },
          mathcal: {
            variant: "script",
            fontName: "Caligraphic-Regular"
          },
          mathfrak: {
            variant: "fraktur",
            fontName: "Fraktur-Regular"
          },
          mathscr: {
            variant: "script",
            fontName: "Script-Regular"
          },
          mathsf: {
            variant: "sans-serif",
            fontName: "SansSerif-Regular"
          },
          mathtt: {
            variant: "monospace",
            fontName: "Typewriter-Regular"
          }
        }, Dr = {
          //   path, width, height
          vec: ["vec", 0.471, 0.714],
          // values from the font glyph
          oiintSize1: ["oiintSize1", 0.957, 0.499],
          // oval to overlay the integrand
          oiintSize2: ["oiintSize2", 1.472, 0.659],
          oiiintSize1: ["oiiintSize1", 1.304, 0.499],
          oiiintSize2: ["oiiintSize2", 1.98, 0.659]
        };
        var v = {
          fontMap: Er,
          makeSymbol: Z0,
          mathsym: ns,
          makeSpan: L0,
          makeSvgSpan: Nr,
          makeLineSpan: ls,
          makeAnchor: cs,
          makeFragment: Br,
          wrapFragment: us,
          makeVList: ds,
          makeOrd: os,
          makeGlue: ms,
          staticSvg: function(t, e) {
            const [r, n, s] = Dr[t], a = new K0(r), c = new X0([a], {
              width: E(n),
              height: E(s),
              // Override CSS rule `.katex svg { width: 100% }`
              style: "width:" + E(n),
              viewBox: "0 0 " + 1e3 * n + " " + 1e3 * s,
              preserveAspectRatio: "xMinYMin"
            }), h = Nr(["overlay"], [c], e);
            return h.height = s, h.style.height = E(s), h.style.width = E(n), h;
          },
          svgData: Dr,
          tryCombineChars: as
        };
        const v0 = {
          number: 3,
          unit: "mu"
        }, De = {
          number: 4,
          unit: "mu"
        }, he = {
          number: 5,
          unit: "mu"
        }, fs = {
          mord: {
            mop: v0,
            mbin: De,
            mrel: he,
            minner: v0
          },
          mop: {
            mord: v0,
            mop: v0,
            mrel: he,
            minner: v0
          },
          mbin: {
            mord: De,
            mop: De,
            mopen: De,
            minner: De
          },
          mrel: {
            mord: he,
            mop: he,
            mopen: he,
            minner: he
          },
          mopen: {},
          mclose: {
            mop: v0,
            mbin: De,
            mrel: he,
            minner: v0
          },
          mpunct: {
            mord: v0,
            mop: v0,
            mrel: he,
            mopen: v0,
            mclose: v0,
            mpunct: v0,
            minner: v0
          },
          minner: {
            mord: v0,
            mop: v0,
            mbin: De,
            mrel: he,
            mopen: v0,
            mpunct: v0,
            minner: v0
          }
        }, ps = {
          mord: {
            mop: v0
          },
          mop: {
            mord: v0,
            mop: v0
          },
          mbin: {},
          mrel: {},
          mopen: {},
          mclose: {
            mop: v0
          },
          mpunct: {},
          minner: {
            mop: v0
          }
        }, Rr = {}, At = {}, Ct = {};
        function q(t) {
          let {
            type: e,
            names: r,
            props: n,
            handler: s,
            htmlBuilder: a,
            mathmlBuilder: c
          } = t;
          const h = {
            type: e,
            numArgs: n.numArgs,
            argTypes: n.argTypes,
            allowedInArgument: !!n.allowedInArgument,
            allowedInText: !!n.allowedInText,
            allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
            numOptionalArgs: n.numOptionalArgs || 0,
            infix: !!n.infix,
            primitive: !!n.primitive,
            handler: s
          };
          for (let m = 0; m < r.length; ++m)
            Rr[r[m]] = h;
          e && (a && (At[e] = a), c && (Ct[e] = c));
        }
        function Re(t) {
          let {
            type: e,
            htmlBuilder: r,
            mathmlBuilder: n
          } = t;
          q({
            type: e,
            names: [],
            props: {
              numArgs: 0
            },
            handler() {
              throw new Error("Should never be called.");
            },
            htmlBuilder: r,
            mathmlBuilder: n
          });
        }
        const Nt = function(t) {
          return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
        }, z0 = function(t) {
          return t.type === "ordgroup" ? t.body : [t];
        }, de = v.makeSpan, gs = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], bs = ["rightmost", "mrel", "mclose", "mpunct"], ys = {
          display: F.DISPLAY,
          text: F.TEXT,
          script: F.SCRIPT,
          scriptscript: F.SCRIPTSCRIPT
        }, xs = {
          mord: "mord",
          mop: "mop",
          mbin: "mbin",
          mrel: "mrel",
          mopen: "mopen",
          mclose: "mclose",
          mpunct: "mpunct",
          minner: "minner"
        }, A0 = function(t, e, r, n) {
          n === void 0 && (n = [null, null]);
          const s = [];
          for (let p = 0; p < t.length; p++) {
            const y = s0(t[p], e);
            if (y instanceof xe) {
              const x = y.children;
              s.push(...x);
            } else
              s.push(y);
          }
          if (v.tryCombineChars(s), !r)
            return s;
          let a = e;
          if (t.length === 1) {
            const p = t[0];
            p.type === "sizing" ? a = e.havingSize(p.size) : p.type === "styling" && (a = e.havingStyle(ys[p.style]));
          }
          const c = de([n[0] || "leftmost"], [], e), h = de([n[1] || "rightmost"], [], e), m = r === "root";
          return Ut(s, (p, y) => {
            const x = y.classes[0], k = p.classes[0];
            x === "mbin" && O.contains(bs, k) ? y.classes[0] = "mord" : k === "mbin" && O.contains(gs, x) && (p.classes[0] = "mord");
          }, {
            node: c
          }, h, m), Ut(s, (p, y) => {
            const x = Xt(y), k = Xt(p), C = x && k ? p.hasClass("mtight") ? ps[x][k] : fs[x][k] : null;
            if (C)
              return v.makeGlue(C, a);
          }, {
            node: c
          }, h, m), s;
        }, Ut = function(t, e, r, n, s) {
          n && t.push(n);
          let a = 0;
          for (; a < t.length; a++) {
            const c = t[a], h = Or(c);
            if (h) {
              Ut(h.children, e, r, null, s);
              continue;
            }
            const m = !c.hasClass("mspace");
            if (m) {
              const p = e(c, r.node);
              p && (r.insertAfter ? r.insertAfter(p) : (t.unshift(p), a++));
            }
            m ? r.node = c : s && c.hasClass("newline") && (r.node = de(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((p) => (y) => {
              t.splice(p + 1, 0, y), a++;
            })(a);
          }
          n && t.pop();
        }, Or = function(t) {
          return t instanceof xe || t instanceof re || t instanceof ve && t.hasClass("enclosing") ? t : null;
        }, Yt = function(t, e) {
          const r = Or(t);
          if (r) {
            const n = r.children;
            if (n.length) {
              if (e === "right")
                return Yt(n[n.length - 1], "right");
              if (e === "left")
                return Yt(n[0], "left");
            }
          }
          return t;
        }, Xt = function(t, e) {
          return t ? (e && (t = Yt(t, e)), xs[t.classes[0]] || null) : null;
        }, rt = function(t, e) {
          const r = ["nulldelimiter"].concat(t.baseSizingClasses());
          return de(e.concat(r));
        }, s0 = function(t, e, r) {
          if (!t)
            return de();
          if (At[t.type]) {
            let n = At[t.type](t, e);
            if (r && e.size !== r.size) {
              n = de(e.sizingClasses(r), [n], e);
              const s = e.sizeMultiplier / r.sizeMultiplier;
              n.height *= s, n.depth *= s;
            }
            return n;
          } else
            throw new w("Got group of unknown type: '" + t.type + "'");
        };
        function Bt(t, e) {
          const r = de(["base"], t, e), n = de(["strut"]);
          return n.style.height = E(r.height + r.depth), r.depth && (n.style.verticalAlign = E(-r.depth)), r.children.unshift(n), r;
        }
        function Kt(t, e) {
          let r = null;
          t.length === 1 && t[0].type === "tag" && (r = t[0].tag, t = t[0].body);
          const n = A0(t, e, "root");
          let s;
          n.length === 2 && n[1].hasClass("tag") && (s = n.pop());
          const a = [];
          let c = [];
          for (let p = 0; p < n.length; p++)
            if (c.push(n[p]), n[p].hasClass("mbin") || n[p].hasClass("mrel") || n[p].hasClass("allowbreak")) {
              let y = !1;
              for (; p < n.length - 1 && n[p + 1].hasClass("mspace") && !n[p + 1].hasClass("newline"); )
                p++, c.push(n[p]), n[p].hasClass("nobreak") && (y = !0);
              y || (a.push(Bt(c, e)), c = []);
            } else n[p].hasClass("newline") && (c.pop(), c.length > 0 && (a.push(Bt(c, e)), c = []), a.push(n[p]));
          c.length > 0 && a.push(Bt(c, e));
          let h;
          r ? (h = Bt(A0(r, e, !0)), h.classes = ["tag"], a.push(h)) : s && a.push(s);
          const m = de(["katex-html"], a);
          if (m.setAttribute("aria-hidden", "true"), h) {
            const p = h.children[0];
            p.style.height = E(m.height + m.depth), m.depth && (p.style.verticalAlign = E(-m.depth));
          }
          return m;
        }
        function qr(t) {
          return new xe(t);
        }
        class j0 {
          constructor(e, r, n) {
            this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = n || [];
          }
          /**
           * Sets an attribute on a MathML node. MathML depends on attributes to convey a
           * semantic content, so this is used heavily.
           */
          setAttribute(e, r) {
            this.attributes[e] = r;
          }
          /**
           * Gets an attribute on a MathML node.
           */
          getAttribute(e) {
            return this.attributes[e];
          }
          /**
           * Converts the math node into a MathML-namespaced DOM element.
           */
          toNode() {
            const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (const r in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            this.classes.length > 0 && (e.className = te(this.classes));
            for (let r = 0; r < this.children.length; r++)
              e.appendChild(this.children[r].toNode());
            return e;
          }
          /**
           * Converts the math node into an HTML markup string.
           */
          toMarkup() {
            let e = "<" + this.type;
            for (const r in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += O.escape(this.attributes[r]), e += '"');
            this.classes.length > 0 && (e += ' class ="' + O.escape(te(this.classes)) + '"'), e += ">";
            for (let r = 0; r < this.children.length; r++)
              e += this.children[r].toMarkup();
            return e += "</" + this.type + ">", e;
          }
          /**
           * Converts the math node into a string, similar to innerText, but escaped.
           */
          toText() {
            return this.children.map((e) => e.toText()).join("");
          }
        }
        class nt {
          constructor(e) {
            this.text = void 0, this.text = e;
          }
          /**
           * Converts the text node into a DOM text node.
           */
          toNode() {
            return document.createTextNode(this.text);
          }
          /**
           * Converts the text node into escaped HTML markup
           * (representing the text itself).
           */
          toMarkup() {
            return O.escape(this.toText());
          }
          /**
           * Converts the text node into a string
           * (representing the text itself).
           */
          toText() {
            return this.text;
          }
        }
        class ws {
          /**
           * Create a Space node with width given in CSS ems.
           */
          constructor(e) {
            this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
          }
          /**
           * Converts the math node into a MathML-namespaced DOM element.
           */
          toNode() {
            if (this.character)
              return document.createTextNode(this.character);
            {
              const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
              return e.setAttribute("width", E(this.width)), e;
            }
          }
          /**
           * Converts the math node into an HTML markup string.
           */
          toMarkup() {
            return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + E(this.width) + '"/>';
          }
          /**
           * Converts the math node into a string, similar to innerText.
           */
          toText() {
            return this.character ? this.character : " ";
          }
        }
        var B = {
          MathNode: j0,
          TextNode: nt,
          SpaceNode: ws,
          newDocumentFragment: qr
        };
        const G0 = function(t, e, r) {
          return h0[e][t] && h0[e][t].replace && t.charCodeAt(0) !== 55349 && !(ue.hasOwnProperty(t) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (t = h0[e][t].replace), new B.TextNode(t);
        }, Zt = function(t) {
          return t.length === 1 ? t[0] : new B.MathNode("mrow", t);
        }, Jt = function(t, e) {
          if (e.fontFamily === "texttt")
            return "monospace";
          if (e.fontFamily === "textsf")
            return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
          if (e.fontShape === "textit" && e.fontWeight === "textbf")
            return "bold-italic";
          if (e.fontShape === "textit")
            return "italic";
          if (e.fontWeight === "textbf")
            return "bold";
          const r = e.font;
          if (!r || r === "mathnormal")
            return null;
          const n = t.mode;
          if (r === "mathit")
            return "italic";
          if (r === "boldsymbol")
            return t.type === "textord" ? "bold" : "bold-italic";
          if (r === "mathbf")
            return "bold";
          if (r === "mathbb")
            return "double-struck";
          if (r === "mathfrak")
            return "fraktur";
          if (r === "mathscr" || r === "mathcal")
            return "script";
          if (r === "mathsf")
            return "sans-serif";
          if (r === "mathtt")
            return "monospace";
          let s = t.text;
          if (O.contains(["\\imath", "\\jmath"], s))
            return null;
          h0[n][s] && h0[n][s].replace && (s = h0[n][s].replace);
          const a = v.fontMap[r].fontName;
          return Xe(s, a, n) ? v.fontMap[r].variant : null;
        }, P0 = function(t, e, r) {
          if (t.length === 1) {
            const a = u0(t[0], e);
            return r && a instanceof j0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
          }
          const n = [];
          let s;
          for (let a = 0; a < t.length; a++) {
            const c = u0(t[a], e);
            if (c instanceof j0 && s instanceof j0) {
              if (c.type === "mtext" && s.type === "mtext" && c.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
                s.children.push(...c.children);
                continue;
              } else if (c.type === "mn" && s.type === "mn") {
                s.children.push(...c.children);
                continue;
              } else if (c.type === "mi" && c.children.length === 1 && s.type === "mn") {
                const h = c.children[0];
                if (h instanceof nt && h.text === ".") {
                  s.children.push(...c.children);
                  continue;
                }
              } else if (s.type === "mi" && s.children.length === 1) {
                const h = s.children[0];
                if (h instanceof nt && h.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
                  const m = c.children[0];
                  m instanceof nt && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), n.pop());
                }
              }
            }
            n.push(c), s = c;
          }
          return n;
        }, Se = function(t, e, r) {
          return Zt(P0(t, e, r));
        }, u0 = function(t, e) {
          if (!t)
            return new B.MathNode("mrow");
          if (Ct[t.type])
            return Ct[t.type](t, e);
          throw new w("Got group of unknown type: '" + t.type + "'");
        };
        function Ir(t, e, r, n, s) {
          const a = P0(t, r);
          let c;
          a.length === 1 && a[0] instanceof j0 && O.contains(["mrow", "mtable"], a[0].type) ? c = a[0] : c = new B.MathNode("mrow", a);
          const h = new B.MathNode("annotation", [new B.TextNode(e)]);
          h.setAttribute("encoding", "application/x-tex");
          const m = new B.MathNode("semantics", [c, h]), p = new B.MathNode("math", [m]);
          p.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && p.setAttribute("display", "block");
          const y = s ? "katex" : "katex-mathml";
          return v.makeSpan([y], [p]);
        }
        const Lr = function(t) {
          return new xt({
            style: t.displayMode ? F.DISPLAY : F.TEXT,
            maxSize: t.maxSize,
            minRuleThickness: t.minRuleThickness
          });
        }, Pr = function(t, e) {
          if (e.displayMode) {
            const r = ["katex-display"];
            e.leqno && r.push("leqno"), e.fleqn && r.push("fleqn"), t = v.makeSpan(r, [t]);
          }
          return t;
        }, vs = function(t, e, r) {
          const n = Lr(r);
          let s;
          if (r.output === "mathml")
            return Ir(t, e, n, r.displayMode, !0);
          if (r.output === "html") {
            const a = Kt(t, n);
            s = v.makeSpan(["katex"], [a]);
          } else {
            const a = Ir(t, e, n, r.displayMode, !1), c = Kt(t, n);
            s = v.makeSpan(["katex"], [a, c]);
          }
          return Pr(s, r);
        }, ks = function(t, e, r) {
          const n = Lr(r), s = Kt(t, n), a = v.makeSpan(["katex"], [s]);
          return Pr(a, r);
        }, Ss = {
          widehat: "^",
          widecheck: "ˇ",
          widetilde: "~",
          utilde: "~",
          overleftarrow: "←",
          underleftarrow: "←",
          xleftarrow: "←",
          overrightarrow: "→",
          underrightarrow: "→",
          xrightarrow: "→",
          underbrace: "⏟",
          overbrace: "⏞",
          overgroup: "⏠",
          undergroup: "⏡",
          overleftrightarrow: "↔",
          underleftrightarrow: "↔",
          xleftrightarrow: "↔",
          Overrightarrow: "⇒",
          xRightarrow: "⇒",
          overleftharpoon: "↼",
          xleftharpoonup: "↼",
          overrightharpoon: "⇀",
          xrightharpoonup: "⇀",
          xLeftarrow: "⇐",
          xLeftrightarrow: "⇔",
          xhookleftarrow: "↩",
          xhookrightarrow: "↪",
          xmapsto: "↦",
          xrightharpoondown: "⇁",
          xleftharpoondown: "↽",
          xrightleftharpoons: "⇌",
          xleftrightharpoons: "⇋",
          xtwoheadleftarrow: "↞",
          xtwoheadrightarrow: "↠",
          xlongequal: "=",
          xtofrom: "⇄",
          xrightleftarrows: "⇄",
          xrightequilibrium: "⇌",
          // Not a perfect match.
          xleftequilibrium: "⇋",
          // None better available.
          "\\cdrightarrow": "→",
          "\\cdleftarrow": "←",
          "\\cdlongequal": "="
        }, Ms = function(t) {
          const e = new B.MathNode("mo", [new B.TextNode(Ss[t.replace(/^\\/, "")])]);
          return e.setAttribute("stretchy", "true"), e;
        }, zs = {
          //   path(s), minWidth, height, align
          overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
          overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
          underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
          underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
          xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
          "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
          // CD minwwidth2.5pc
          xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
          "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
          Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
          xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
          xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
          overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
          xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
          xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
          overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
          xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
          xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
          xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
          "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
          xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
          xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
          overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
          overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
          underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
          underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
          xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
          xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
          xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
          xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
          xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
          xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
          overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
          underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
          overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
          undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
          xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
          xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
          // The next three arrows are from the mhchem package.
          // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
          // document as \xrightarrow or \xrightleftharpoons. Those have
          // min-length = 1.75em, so we set min-length on these next three to match.
          xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
          xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
          xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
        }, Ts = function(t) {
          return t.type === "ordgroup" ? t.body.length : 1;
        };
        var me = {
          encloseSpan: function(t, e, r, n, s) {
            let a;
            const c = t.height + t.depth + r + n;
            if (/fbox|color|angl/.test(e)) {
              if (a = v.makeSpan(["stretchy", e], [], s), e === "fbox") {
                const h = s.color && s.getColor();
                h && (a.style.borderColor = h);
              }
            } else {
              const h = [];
              /^[bx]cancel$/.test(e) && h.push(new Qe({
                x1: "0",
                y1: "0",
                x2: "100%",
                y2: "100%",
                "stroke-width": "0.046em"
              })), /^x?cancel$/.test(e) && h.push(new Qe({
                x1: "0",
                y1: "100%",
                x2: "100%",
                y2: "0",
                "stroke-width": "0.046em"
              }));
              const m = new X0(h, {
                width: "100%",
                height: E(c)
              });
              a = v.makeSvgSpan([], [m], s);
            }
            return a.height = c, a.style.height = E(c), a;
          },
          mathMLnode: Ms,
          svgSpan: function(t, e) {
            function r() {
              let c = 4e5;
              const h = t.label.slice(1);
              if (O.contains(["widehat", "widecheck", "widetilde", "utilde"], h)) {
                const p = Ts(t.base);
                let y, x, k;
                if (p > 5)
                  h === "widehat" || h === "widecheck" ? (y = 420, c = 2364, k = 0.42, x = h + "4") : (y = 312, c = 2340, k = 0.34, x = "tilde4");
                else {
                  const _ = [1, 1, 2, 2, 3, 3][p];
                  h === "widehat" || h === "widecheck" ? (c = [0, 1062, 2364, 2364, 2364][_], y = [0, 239, 300, 360, 420][_], k = [0, 0.24, 0.3, 0.3, 0.36, 0.42][_], x = h + _) : (c = [0, 600, 1033, 2339, 2340][_], y = [0, 260, 286, 306, 312][_], k = [0, 0.26, 0.286, 0.3, 0.306, 0.34][_], x = "tilde" + _);
                }
                const C = new K0(x), L = new X0([C], {
                  width: "100%",
                  height: E(k),
                  viewBox: "0 0 " + c + " " + y,
                  preserveAspectRatio: "none"
                });
                return {
                  span: v.makeSvgSpan([], [L], e),
                  minWidth: 0,
                  height: k
                };
              } else {
                const m = [], p = zs[h], [y, x, k] = p, C = k / 1e3, L = y.length;
                let _, Q;
                if (L === 1) {
                  const Y = p[3];
                  _ = ["hide-tail"], Q = [Y];
                } else if (L === 2)
                  _ = ["halfarrow-left", "halfarrow-right"], Q = ["xMinYMin", "xMaxYMin"];
                else if (L === 3)
                  _ = ["brace-left", "brace-center", "brace-right"], Q = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                else
                  throw new Error(`Correct katexImagesData or update code here to support
                    ` + L + " children.");
                for (let Y = 0; Y < L; Y++) {
                  const r0 = new K0(y[Y]), i0 = new X0([r0], {
                    width: "400em",
                    height: E(C),
                    viewBox: "0 0 " + c + " " + k,
                    preserveAspectRatio: Q[Y] + " slice"
                  }), d0 = v.makeSvgSpan([_[Y]], [i0], e);
                  if (L === 1)
                    return {
                      span: d0,
                      minWidth: x,
                      height: C
                    };
                  d0.style.height = E(C), m.push(d0);
                }
                return {
                  span: v.makeSpan(["stretchy"], m, e),
                  minWidth: x,
                  height: C
                };
              }
            }
            const {
              span: n,
              minWidth: s,
              height: a
            } = r();
            return n.height = a, n.style.height = E(a), s > 0 && (n.style.minWidth = E(s)), n;
          }
        };
        function $(t, e) {
          if (!t || t.type !== e)
            throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
          return t;
        }
        function Qt(t) {
          const e = Et(t);
          if (!e)
            throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
          return e;
        }
        function Et(t) {
          return t && (t.type === "atom" || Wt.hasOwnProperty(t.type)) ? t : null;
        }
        const er = (t, e) => {
          let r, n, s;
          t && t.type === "supsub" ? (n = $(t.base, "accent"), r = n.base, t.base = r, s = St(s0(t, e)), t.base = n) : (n = $(t, "accent"), r = n.base);
          const a = s0(r, e.havingCrampedStyle()), c = n.isShifty && O.isCharacterBox(r);
          let h = 0;
          if (c) {
            const k = O.getBaseElem(r), C = s0(k, e.havingCrampedStyle());
            h = et(C).skew;
          }
          const m = n.label === "\\c";
          let p = m ? a.height + a.depth : Math.min(a.height, e.fontMetrics().xHeight), y;
          if (n.isStretchy)
            y = me.svgSpan(n, e), y = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: a
              }, {
                type: "elem",
                elem: y,
                wrapperClasses: ["svg-align"],
                wrapperStyle: h > 0 ? {
                  width: "calc(100% - " + E(2 * h) + ")",
                  marginLeft: E(2 * h)
                } : void 0
              }]
            }, e);
          else {
            let k, C;
            n.label === "\\vec" ? (k = v.staticSvg("vec", e), C = v.svgData.vec[1]) : (k = v.makeOrd({
              mode: n.mode,
              text: n.label
            }, e, "textord"), k = et(k), k.italic = 0, C = k.width, m && (p += k.depth)), y = v.makeSpan(["accent-body"], [k]);
            const L = n.label === "\\textcircled";
            L && (y.classes.push("accent-full"), p = a.height);
            let _ = h;
            L || (_ -= C / 2), y.style.left = E(_), n.label === "\\textcircled" && (y.style.top = ".2em"), y = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: a
              }, {
                type: "kern",
                size: -p
              }, {
                type: "elem",
                elem: y
              }]
            }, e);
          }
          const x = v.makeSpan(["mord", "accent"], [y], e);
          return s ? (s.children[0] = x, s.height = Math.max(x.height, s.height), s.classes[0] = "mord", s) : x;
        }, Fr = (t, e) => {
          const r = t.isStretchy ? me.mathMLnode(t.label) : new B.MathNode("mo", [G0(t.label, t.mode)]), n = new B.MathNode("mover", [u0(t.base, e), r]);
          return n.setAttribute("accent", "true"), n;
        }, As = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t) => "\\" + t).join("|"));
        q({
          type: "accent",
          names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
          props: {
            numArgs: 1
          },
          handler: (t, e) => {
            const r = Nt(e[0]), n = !As.test(t.funcName), s = !n || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
            return {
              type: "accent",
              mode: t.parser.mode,
              label: t.funcName,
              isStretchy: n,
              isShifty: s,
              base: r
            };
          },
          htmlBuilder: er,
          mathmlBuilder: Fr
        }), q({
          type: "accent",
          names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
          props: {
            numArgs: 1,
            allowedInText: !0,
            allowedInMath: !0,
            // unless in strict mode
            argTypes: ["primitive"]
          },
          handler: (t, e) => {
            const r = e[0];
            let n = t.parser.mode;
            return n === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), n = "text"), {
              type: "accent",
              mode: n,
              label: t.funcName,
              isStretchy: !1,
              isShifty: !0,
              base: r
            };
          },
          htmlBuilder: er,
          mathmlBuilder: Fr
        }), q({
          type: "accentUnder",
          names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
          props: {
            numArgs: 1
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "accentUnder",
              mode: r.mode,
              label: n,
              base: s
            };
          },
          htmlBuilder: (t, e) => {
            const r = s0(t.base, e), n = me.svgSpan(t, e), s = t.label === "\\utilde" ? 0.12 : 0, a = v.makeVList({
              positionType: "top",
              positionData: r.height,
              children: [{
                type: "elem",
                elem: n,
                wrapperClasses: ["svg-align"]
              }, {
                type: "kern",
                size: s
              }, {
                type: "elem",
                elem: r
              }]
            }, e);
            return v.makeSpan(["mord", "accentunder"], [a], e);
          },
          mathmlBuilder: (t, e) => {
            const r = me.mathMLnode(t.label), n = new B.MathNode("munder", [u0(t.base, e), r]);
            return n.setAttribute("accentunder", "true"), n;
          }
        });
        const Dt = (t) => {
          const e = new B.MathNode("mpadded", t ? [t] : []);
          return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
        };
        q({
          type: "xArrow",
          names: [
            "\\xleftarrow",
            "\\xrightarrow",
            "\\xLeftarrow",
            "\\xRightarrow",
            "\\xleftrightarrow",
            "\\xLeftrightarrow",
            "\\xhookleftarrow",
            "\\xhookrightarrow",
            "\\xmapsto",
            "\\xrightharpoondown",
            "\\xrightharpoonup",
            "\\xleftharpoondown",
            "\\xleftharpoonup",
            "\\xrightleftharpoons",
            "\\xleftrightharpoons",
            "\\xlongequal",
            "\\xtwoheadrightarrow",
            "\\xtwoheadleftarrow",
            "\\xtofrom",
            // The next 3 functions are here to support the mhchem extension.
            // Direct use of these functions is discouraged and may break someday.
            "\\xrightleftarrows",
            "\\xrightequilibrium",
            "\\xleftequilibrium",
            // The next 3 functions are here only to support the {CD} environment.
            "\\\\cdrightarrow",
            "\\\\cdleftarrow",
            "\\\\cdlongequal"
          ],
          props: {
            numArgs: 1,
            numOptionalArgs: 1
          },
          handler(t, e, r) {
            let {
              parser: n,
              funcName: s
            } = t;
            return {
              type: "xArrow",
              mode: n.mode,
              label: s,
              body: e[0],
              below: r[0]
            };
          },
          // Flow is unable to correctly infer the type of `group`, even though it's
          // unambiguously determined from the passed-in `type` above.
          htmlBuilder(t, e) {
            const r = e.style;
            let n = e.havingStyle(r.sup());
            const s = v.wrapFragment(s0(t.body, n, e), e), a = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
            s.classes.push(a + "-arrow-pad");
            let c;
            t.below && (n = e.havingStyle(r.sub()), c = v.wrapFragment(s0(t.below, n, e), e), c.classes.push(a + "-arrow-pad"));
            const h = me.svgSpan(t, e), m = -e.fontMetrics().axisHeight + 0.5 * h.height;
            let p = -e.fontMetrics().axisHeight - 0.5 * h.height - 0.111;
            (s.depth > 0.25 || t.label === "\\xleftequilibrium") && (p -= s.depth);
            let y;
            if (c) {
              const x = -e.fontMetrics().axisHeight + c.height + 0.5 * h.height + 0.111;
              y = v.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: s,
                  shift: p
                }, {
                  type: "elem",
                  elem: h,
                  shift: m
                }, {
                  type: "elem",
                  elem: c,
                  shift: x
                }]
              }, e);
            } else
              y = v.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: s,
                  shift: p
                }, {
                  type: "elem",
                  elem: h,
                  shift: m
                }]
              }, e);
            return y.children[0].children[0].children[1].classes.push("svg-align"), v.makeSpan(["mrel", "x-arrow"], [y], e);
          },
          mathmlBuilder(t, e) {
            const r = me.mathMLnode(t.label);
            r.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
            let n;
            if (t.body) {
              const s = Dt(u0(t.body, e));
              if (t.below) {
                const a = Dt(u0(t.below, e));
                n = new B.MathNode("munderover", [r, a, s]);
              } else
                n = new B.MathNode("mover", [r, s]);
            } else if (t.below) {
              const s = Dt(u0(t.below, e));
              n = new B.MathNode("munder", [r, s]);
            } else
              n = Dt(), n = new B.MathNode("mover", [r, n]);
            return n;
          }
        });
        const Cs = v.makeSpan;
        function Hr(t, e) {
          const r = A0(t.body, e, !0);
          return Cs([t.mclass], r, e);
        }
        function _r(t, e) {
          let r;
          const n = P0(t.body, e);
          return t.mclass === "minner" ? r = new B.MathNode("mpadded", n) : t.mclass === "mord" ? t.isCharacterBox ? (r = n[0], r.type = "mi") : r = new B.MathNode("mi", n) : (t.isCharacterBox ? (r = n[0], r.type = "mo") : r = new B.MathNode("mo", n), t.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : t.mclass === "mopen" || t.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : t.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
        }
        q({
          type: "mclass",
          names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "mclass",
              mode: r.mode,
              mclass: "m" + n.slice(5),
              // TODO(kevinb): don't prefix with 'm'
              body: z0(s),
              isCharacterBox: O.isCharacterBox(s)
            };
          },
          htmlBuilder: Hr,
          mathmlBuilder: _r
        });
        const Rt = (t) => {
          const e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
          return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
        };
        q({
          type: "mclass",
          names: ["\\@binrel"],
          props: {
            numArgs: 2
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "mclass",
              mode: r.mode,
              mclass: Rt(e[0]),
              body: z0(e[1]),
              isCharacterBox: O.isCharacterBox(e[1])
            };
          }
        }), q({
          type: "mclass",
          names: ["\\stackrel", "\\overset", "\\underset"],
          props: {
            numArgs: 2
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[1], a = e[0];
            let c;
            n !== "\\stackrel" ? c = Rt(s) : c = "mrel";
            const h = {
              type: "op",
              mode: s.mode,
              limits: !0,
              alwaysHandleSupSub: !0,
              parentIsSupSub: !1,
              symbol: !1,
              suppressBaseShift: n !== "\\stackrel",
              body: z0(s)
            }, m = {
              type: "supsub",
              mode: a.mode,
              base: h,
              sup: n === "\\underset" ? null : a,
              sub: n === "\\underset" ? a : null
            };
            return {
              type: "mclass",
              mode: r.mode,
              mclass: c,
              body: [m],
              isCharacterBox: O.isCharacterBox(m)
            };
          },
          htmlBuilder: Hr,
          mathmlBuilder: _r
        }), q({
          type: "pmb",
          names: ["\\pmb"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "pmb",
              mode: r.mode,
              mclass: Rt(e[0]),
              body: z0(e[0])
            };
          },
          htmlBuilder(t, e) {
            const r = A0(t.body, e, !0), n = v.makeSpan([t.mclass], r, e);
            return n.style.textShadow = "0.02em 0.01em 0.04px", n;
          },
          mathmlBuilder(t, e) {
            const r = P0(t.body, e), n = new B.MathNode("mstyle", r);
            return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
          }
        });
        const Ns = {
          ">": "\\\\cdrightarrow",
          "<": "\\\\cdleftarrow",
          "=": "\\\\cdlongequal",
          A: "\\uparrow",
          V: "\\downarrow",
          "|": "\\Vert",
          ".": "no arrow"
        }, jr = () => ({
          type: "styling",
          body: [],
          mode: "math",
          style: "display"
        }), Gr = (t) => t.type === "textord" && t.text === "@", Bs = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
        function Es(t, e, r) {
          const n = Ns[t];
          switch (n) {
            case "\\\\cdrightarrow":
            case "\\\\cdleftarrow":
              return r.callFunction(n, [e[0]], [e[1]]);
            case "\\uparrow":
            case "\\downarrow": {
              const s = r.callFunction("\\\\cdleft", [e[0]], []), a = {
                type: "atom",
                text: n,
                mode: "math",
                family: "rel"
              }, c = r.callFunction("\\Big", [a], []), h = r.callFunction("\\\\cdright", [e[1]], []), m = {
                type: "ordgroup",
                mode: "math",
                body: [s, c, h]
              };
              return r.callFunction("\\\\cdparent", [m], []);
            }
            case "\\\\cdlongequal":
              return r.callFunction("\\\\cdlongequal", [], []);
            case "\\Vert": {
              const s = {
                type: "textord",
                text: "\\Vert",
                mode: "math"
              };
              return r.callFunction("\\Big", [s], []);
            }
            default:
              return {
                type: "textord",
                text: " ",
                mode: "math"
              };
          }
        }
        function Ds(t) {
          const e = [];
          for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
            e.push(t.parseExpression(!1, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
            const a = t.fetch().text;
            if (a === "&" || a === "\\\\")
              t.consume();
            else if (a === "\\end") {
              e[e.length - 1].length === 0 && e.pop();
              break;
            } else
              throw new w("Expected \\\\ or \\cr or \\end", t.nextToken);
          }
          let r = [];
          const n = [r];
          for (let a = 0; a < e.length; a++) {
            const c = e[a];
            let h = jr();
            for (let m = 0; m < c.length; m++)
              if (!Gr(c[m]))
                h.body.push(c[m]);
              else {
                r.push(h), m += 1;
                const p = Qt(c[m]).text, y = new Array(2);
                if (y[0] = {
                  type: "ordgroup",
                  mode: "math",
                  body: []
                }, y[1] = {
                  type: "ordgroup",
                  mode: "math",
                  body: []
                }, !("=|.".indexOf(p) > -1)) if ("<>AV".indexOf(p) > -1)
                  for (let C = 0; C < 2; C++) {
                    let L = !0;
                    for (let _ = m + 1; _ < c.length; _++) {
                      if (Bs(c[_], p)) {
                        L = !1, m = _;
                        break;
                      }
                      if (Gr(c[_]))
                        throw new w("Missing a " + p + " character to complete a CD arrow.", c[_]);
                      y[C].body.push(c[_]);
                    }
                    if (L)
                      throw new w("Missing a " + p + " character to complete a CD arrow.", c[m]);
                  }
                else
                  throw new w('Expected one of "<>AV=|." after @', c[m]);
                const k = {
                  type: "styling",
                  body: [Es(p, y, t)],
                  mode: "math",
                  style: "display"
                  // CD is always displaystyle.
                };
                r.push(k), h = jr();
              }
            a % 2 === 0 ? r.push(h) : r.shift(), r = [], n.push(r);
          }
          t.gullet.endGroup(), t.gullet.endGroup();
          const s = new Array(n[0].length).fill({
            type: "align",
            align: "c",
            pregap: 0.25,
            // CD package sets \enskip between columns.
            postgap: 0.25
            // So pre and post each get half an \enskip, i.e. 0.25em.
          });
          return {
            type: "array",
            mode: "math",
            body: n,
            arraystretch: 1,
            addJot: !0,
            rowGaps: [null],
            cols: s,
            colSeparationType: "CD",
            hLinesBeforeRow: new Array(n.length + 1).fill([])
          };
        }
        q({
          type: "cdlabel",
          names: ["\\\\cdleft", "\\\\cdright"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            return {
              type: "cdlabel",
              mode: r.mode,
              side: n.slice(4),
              label: e[0]
            };
          },
          htmlBuilder(t, e) {
            const r = e.havingStyle(e.style.sup()), n = v.wrapFragment(s0(t.label, r, e), e);
            return n.classes.push("cd-label-" + t.side), n.style.bottom = E(0.8 - n.depth), n.height = 0, n.depth = 0, n;
          },
          mathmlBuilder(t, e) {
            let r = new B.MathNode("mrow", [u0(t.label, e)]);
            return r = new B.MathNode("mpadded", [r]), r.setAttribute("width", "0"), t.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new B.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
          }
        }), q({
          type: "cdlabelparent",
          names: ["\\\\cdparent"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "cdlabelparent",
              mode: r.mode,
              fragment: e[0]
            };
          },
          htmlBuilder(t, e) {
            const r = v.wrapFragment(s0(t.fragment, e), e);
            return r.classes.push("cd-vert-arrow"), r;
          },
          mathmlBuilder(t, e) {
            return new B.MathNode("mrow", [u0(t.fragment, e)]);
          }
        }), q({
          type: "textord",
          names: ["\\@char"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            const s = $(e[0], "ordgroup").body;
            let a = "";
            for (let m = 0; m < s.length; m++) {
              const p = $(s[m], "textord");
              a += p.text;
            }
            let c = parseInt(a), h;
            if (isNaN(c))
              throw new w("\\@char has non-numeric argument " + a);
            if (c < 0 || c >= 1114111)
              throw new w("\\@char with invalid code point " + a);
            return c <= 65535 ? h = String.fromCharCode(c) : (c -= 65536, h = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
              type: "textord",
              mode: r.mode,
              text: h
            };
          }
        });
        const Vr = (t, e) => {
          const r = A0(t.body, e.withColor(t.color), !1);
          return v.makeFragment(r);
        }, Wr = (t, e) => {
          const r = P0(t.body, e.withColor(t.color)), n = new B.MathNode("mstyle", r);
          return n.setAttribute("mathcolor", t.color), n;
        };
        q({
          type: "color",
          names: ["\\textcolor"],
          props: {
            numArgs: 2,
            allowedInText: !0,
            argTypes: ["color", "original"]
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            const n = $(e[0], "color-token").color, s = e[1];
            return {
              type: "color",
              mode: r.mode,
              color: n,
              body: z0(s)
            };
          },
          htmlBuilder: Vr,
          mathmlBuilder: Wr
        }), q({
          type: "color",
          names: ["\\color"],
          props: {
            numArgs: 1,
            allowedInText: !0,
            argTypes: ["color"]
          },
          handler(t, e) {
            let {
              parser: r,
              breakOnTokenText: n
            } = t;
            const s = $(e[0], "color-token").color;
            r.gullet.macros.set("\\current@color", s);
            const a = r.parseExpression(!0, n);
            return {
              type: "color",
              mode: r.mode,
              color: s,
              body: a
            };
          },
          htmlBuilder: Vr,
          mathmlBuilder: Wr
        }), q({
          type: "cr",
          names: ["\\\\"],
          props: {
            numArgs: 0,
            numOptionalArgs: 0,
            allowedInText: !0
          },
          handler(t, e, r) {
            let {
              parser: n
            } = t;
            const s = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, a = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
            return {
              type: "cr",
              mode: n.mode,
              newLine: a,
              size: s && $(s, "size").value
            };
          },
          // The following builders are called only at the top level,
          // not within tabular/array environments.
          htmlBuilder(t, e) {
            const r = v.makeSpan(["mspace"], [], e);
            return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = E(f0(t.size, e)))), r;
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mspace");
            return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", E(f0(t.size, e)))), r;
          }
        });
        const tr = {
          "\\global": "\\global",
          "\\long": "\\\\globallong",
          "\\\\globallong": "\\\\globallong",
          "\\def": "\\gdef",
          "\\gdef": "\\gdef",
          "\\edef": "\\xdef",
          "\\xdef": "\\xdef",
          "\\let": "\\\\globallet",
          "\\futurelet": "\\\\globalfuture"
        }, $r = (t) => {
          const e = t.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
            throw new w("Expected a control sequence", t);
          return e;
        }, Rs = (t) => {
          let e = t.gullet.popToken();
          return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
        }, Ur = (t, e, r, n) => {
          let s = t.gullet.macros.get(r.text);
          s == null && (r.noexpand = !0, s = {
            tokens: [r],
            numArgs: 0,
            // reproduce the same behavior in expansion
            unexpandable: !t.gullet.isExpandable(r.text)
          }), t.gullet.macros.set(e, s, n);
        };
        q({
          type: "internal",
          names: [
            "\\global",
            "\\long",
            "\\\\globallong"
            // can’t be entered directly
          ],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t;
            e.consumeSpaces();
            const n = e.fetch();
            if (tr[n.text])
              return (r === "\\global" || r === "\\\\globallong") && (n.text = tr[n.text]), $(e.parseFunction(), "internal");
            throw new w("Invalid token after macro prefix", n);
          }
        }), q({
          type: "internal",
          names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t, n = e.gullet.popToken();
            const s = n.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(s))
              throw new w("Expected a control sequence", n);
            let a = 0, c;
            const h = [[]];
            for (; e.gullet.future().text !== "{"; )
              if (n = e.gullet.popToken(), n.text === "#") {
                if (e.gullet.future().text === "{") {
                  c = e.gullet.future(), h[a].push("{");
                  break;
                }
                if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
                  throw new w('Invalid argument number "' + n.text + '"');
                if (parseInt(n.text) !== a + 1)
                  throw new w('Argument number "' + n.text + '" out of order');
                a++, h.push([]);
              } else {
                if (n.text === "EOF")
                  throw new w("Expected a macro definition");
                h[a].push(n.text);
              }
            let {
              tokens: m
            } = e.gullet.consumeArg();
            return c && m.unshift(c), (r === "\\edef" || r === "\\xdef") && (m = e.gullet.expandTokens(m), m.reverse()), e.gullet.macros.set(s, {
              tokens: m,
              numArgs: a,
              delimiters: h
            }, r === tr[r]), {
              type: "internal",
              mode: e.mode
            };
          }
        }), q({
          type: "internal",
          names: [
            "\\let",
            "\\\\globallet"
            // can’t be entered directly
          ],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t;
            const n = $r(e.gullet.popToken());
            e.gullet.consumeSpaces();
            const s = Rs(e);
            return Ur(e, n, s, r === "\\\\globallet"), {
              type: "internal",
              mode: e.mode
            };
          }
        }), q({
          type: "internal",
          names: [
            "\\futurelet",
            "\\\\globalfuture"
            // can’t be entered directly
          ],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t;
            const n = $r(e.gullet.popToken()), s = e.gullet.popToken(), a = e.gullet.popToken();
            return Ur(e, n, a, r === "\\\\globalfuture"), e.gullet.pushToken(a), e.gullet.pushToken(s), {
              type: "internal",
              mode: e.mode
            };
          }
        });
        const st = function(t, e, r) {
          const n = h0.math[t] && h0.math[t].replace, s = Xe(n || t, e, r);
          if (!s)
            throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
          return s;
        }, rr = function(t, e, r, n) {
          const s = r.havingBaseStyle(e), a = v.makeSpan(n.concat(s.sizingClasses(r)), [t], r), c = s.sizeMultiplier / r.sizeMultiplier;
          return a.height *= c, a.depth *= c, a.maxFontSize = s.sizeMultiplier, a;
        }, Yr = function(t, e, r) {
          const n = e.havingBaseStyle(r), s = (1 - e.sizeMultiplier / n.sizeMultiplier) * e.fontMetrics().axisHeight;
          t.classes.push("delimcenter"), t.style.top = E(s), t.height -= s, t.depth += s;
        }, Os = function(t, e, r, n, s, a) {
          const c = v.makeSymbol(t, "Main-Regular", s, n), h = rr(c, e, n, a);
          return r && Yr(h, n, e), h;
        }, qs = function(t, e, r, n) {
          return v.makeSymbol(t, "Size" + e + "-Regular", r, n);
        }, Xr = function(t, e, r, n, s, a) {
          const c = qs(t, e, s, n), h = rr(v.makeSpan(["delimsizing", "size" + e], [c], n), F.TEXT, n, a);
          return r && Yr(h, n, F.TEXT), h;
        }, nr = function(t, e, r) {
          let n;
          return e === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4", {
            type: "elem",
            elem: v.makeSpan(["delimsizinginner", n], [v.makeSpan([], [v.makeSymbol(t, e, r)])])
          };
        }, sr = function(t, e, r) {
          const n = O0["Size4-Regular"][t.charCodeAt(0)] ? O0["Size4-Regular"][t.charCodeAt(0)][4] : O0["Size1-Regular"][t.charCodeAt(0)][4], s = new K0("inner", Pe(t, Math.round(1e3 * e))), a = new X0([s], {
            width: E(n),
            height: E(e),
            // Override CSS rule `.katex svg { width: 100% }`
            style: "width:" + E(n),
            viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * e),
            preserveAspectRatio: "xMinYMin"
          }), c = v.makeSvgSpan([], [a], r);
          return c.height = e, c.style.height = E(e), c.style.width = E(n), {
            type: "elem",
            elem: c
          };
        }, or = 8e-3, Ot = {
          type: "kern",
          size: -1 * or
        }, Is = ["|", "\\lvert", "\\rvert", "\\vert"], Ls = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Kr = function(t, e, r, n, s, a) {
          let c, h, m, p, y = "", x = 0;
          c = m = p = t, h = null;
          let k = "Size1-Regular";
          t === "\\uparrow" ? m = p = "⏐" : t === "\\Uparrow" ? m = p = "‖" : t === "\\downarrow" ? c = m = "⏐" : t === "\\Downarrow" ? c = m = "‖" : t === "\\updownarrow" ? (c = "\\uparrow", m = "⏐", p = "\\downarrow") : t === "\\Updownarrow" ? (c = "\\Uparrow", m = "‖", p = "\\Downarrow") : O.contains(Is, t) ? (m = "∣", y = "vert", x = 333) : O.contains(Ls, t) ? (m = "∥", y = "doublevert", x = 556) : t === "[" || t === "\\lbrack" ? (c = "⎡", m = "⎢", p = "⎣", k = "Size4-Regular", y = "lbrack", x = 667) : t === "]" || t === "\\rbrack" ? (c = "⎤", m = "⎥", p = "⎦", k = "Size4-Regular", y = "rbrack", x = 667) : t === "\\lfloor" || t === "⌊" ? (m = c = "⎢", p = "⎣", k = "Size4-Regular", y = "lfloor", x = 667) : t === "\\lceil" || t === "⌈" ? (c = "⎡", m = p = "⎢", k = "Size4-Regular", y = "lceil", x = 667) : t === "\\rfloor" || t === "⌋" ? (m = c = "⎥", p = "⎦", k = "Size4-Regular", y = "rfloor", x = 667) : t === "\\rceil" || t === "⌉" ? (c = "⎤", m = p = "⎥", k = "Size4-Regular", y = "rceil", x = 667) : t === "(" || t === "\\lparen" ? (c = "⎛", m = "⎜", p = "⎝", k = "Size4-Regular", y = "lparen", x = 875) : t === ")" || t === "\\rparen" ? (c = "⎞", m = "⎟", p = "⎠", k = "Size4-Regular", y = "rparen", x = 875) : t === "\\{" || t === "\\lbrace" ? (c = "⎧", h = "⎨", p = "⎩", m = "⎪", k = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (c = "⎫", h = "⎬", p = "⎭", m = "⎪", k = "Size4-Regular") : t === "\\lgroup" || t === "⟮" ? (c = "⎧", p = "⎩", m = "⎪", k = "Size4-Regular") : t === "\\rgroup" || t === "⟯" ? (c = "⎫", p = "⎭", m = "⎪", k = "Size4-Regular") : t === "\\lmoustache" || t === "⎰" ? (c = "⎧", p = "⎭", m = "⎪", k = "Size4-Regular") : (t === "\\rmoustache" || t === "⎱") && (c = "⎫", p = "⎩", m = "⎪", k = "Size4-Regular");
          const C = st(c, k, s), L = C.height + C.depth, _ = st(m, k, s), Q = _.height + _.depth, Y = st(p, k, s), r0 = Y.height + Y.depth;
          let i0 = 0, d0 = 1;
          if (h !== null) {
            const M0 = st(h, k, s);
            i0 = M0.height + M0.depth, d0 = 2;
          }
          const I0 = L + r0 + i0, C0 = Math.max(0, Math.ceil((e - I0) / (d0 * Q))), W0 = I0 + C0 * d0 * Q;
          let je = n.fontMetrics().axisHeight;
          r && (je *= n.sizeMultiplier);
          const o0 = W0 / 2 - je, c0 = [];
          if (y.length > 0) {
            const M0 = W0 - L - r0, k0 = Math.round(W0 * 1e3), $0 = ft(y, Math.round(M0 * 1e3)), co = new K0(y, $0), _n = (x / 1e3).toFixed(3) + "em", jn = (k0 / 1e3).toFixed(3) + "em", uo = new X0([co], {
              width: _n,
              height: jn,
              viewBox: "0 0 " + x + " " + k0
            }), Ft = v.makeSvgSpan([], [uo], n);
            Ft.height = k0 / 1e3, Ft.style.width = _n, Ft.style.height = jn, c0.push({
              type: "elem",
              elem: Ft
            });
          } else {
            if (c0.push(nr(p, k, s)), c0.push(Ot), h === null) {
              const M0 = W0 - L - r0 + 2 * or;
              c0.push(sr(m, M0, n));
            } else {
              const M0 = (W0 - L - r0 - i0) / 2 + 2 * or;
              c0.push(sr(m, M0, n)), c0.push(Ot), c0.push(nr(h, k, s)), c0.push(Ot), c0.push(sr(m, M0, n));
            }
            c0.push(Ot), c0.push(nr(c, k, s));
          }
          const p0 = n.havingBaseStyle(F.TEXT), y0 = v.makeVList({
            positionType: "bottom",
            positionData: o0,
            children: c0
          }, p0);
          return rr(v.makeSpan(["delimsizing", "mult"], [y0], p0), F.TEXT, n, a);
        }, ir = 80, ar = 0.08, lr = function(t, e, r, n, s) {
          const a = jt(t, n, r), c = new K0(t, a), h = new X0([c], {
            // Note: 1000:1 ratio of viewBox to document em width.
            width: "400em",
            height: E(e),
            viewBox: "0 0 400000 " + r,
            preserveAspectRatio: "xMinYMin slice"
          });
          return v.makeSvgSpan(["hide-tail"], [h], s);
        }, Ps = function(t, e) {
          const r = e.havingBaseSizing(), n = en("\\surd", t * r.sizeMultiplier, Qr, r);
          let s = r.sizeMultiplier;
          const a = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness);
          let c, h = 0, m = 0, p = 0, y;
          return n.type === "small" ? (p = 1e3 + 1e3 * a + ir, t < 1 ? s = 1 : t < 1.4 && (s = 0.7), h = (1 + a + ar) / s, m = (1 + a) / s, c = lr("sqrtMain", h, p, a, e), c.style.minWidth = "0.853em", y = 0.833 / s) : n.type === "large" ? (p = (1e3 + ir) * ot[n.size], m = (ot[n.size] + a) / s, h = (ot[n.size] + a + ar) / s, c = lr("sqrtSize" + n.size, h, p, a, e), c.style.minWidth = "1.02em", y = 1 / s) : (h = t + a + ar, m = t + a, p = Math.floor(1e3 * t + a) + ir, c = lr("sqrtTall", h, p, a, e), c.style.minWidth = "0.742em", y = 1.056), c.height = m, c.style.height = E(h), {
            span: c,
            advanceWidth: y,
            // Calculate the actual line width.
            // This actually should depend on the chosen font -- e.g. \boldmath
            // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
            // have thicker rules.
            ruleWidth: (e.fontMetrics().sqrtRuleThickness + a) * s
          };
        }, Zr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Fs = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Jr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], ot = [0, 1.2, 1.8, 2.4, 3], Hs = function(t, e, r, n, s) {
          if (t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"), O.contains(Zr, t) || O.contains(Jr, t))
            return Xr(t, e, !1, r, n, s);
          if (O.contains(Fs, t))
            return Kr(t, ot[e], !1, r, n, s);
          throw new w("Illegal delimiter: '" + t + "'");
        }, _s = [{
          type: "small",
          style: F.SCRIPTSCRIPT
        }, {
          type: "small",
          style: F.SCRIPT
        }, {
          type: "small",
          style: F.TEXT
        }, {
          type: "large",
          size: 1
        }, {
          type: "large",
          size: 2
        }, {
          type: "large",
          size: 3
        }, {
          type: "large",
          size: 4
        }], js = [{
          type: "small",
          style: F.SCRIPTSCRIPT
        }, {
          type: "small",
          style: F.SCRIPT
        }, {
          type: "small",
          style: F.TEXT
        }, {
          type: "stack"
        }], Qr = [{
          type: "small",
          style: F.SCRIPTSCRIPT
        }, {
          type: "small",
          style: F.SCRIPT
        }, {
          type: "small",
          style: F.TEXT
        }, {
          type: "large",
          size: 1
        }, {
          type: "large",
          size: 2
        }, {
          type: "large",
          size: 3
        }, {
          type: "large",
          size: 4
        }, {
          type: "stack"
        }], Gs = function(t) {
          if (t.type === "small")
            return "Main-Regular";
          if (t.type === "large")
            return "Size" + t.size + "-Regular";
          if (t.type === "stack")
            return "Size4-Regular";
          throw new Error("Add support for delim type '" + t.type + "' here.");
        }, en = function(t, e, r, n) {
          const s = Math.min(2, 3 - n.style.size);
          for (let a = s; a < r.length && r[a].type !== "stack"; a++) {
            const c = st(t, Gs(r[a]), "math");
            let h = c.height + c.depth;
            if (r[a].type === "small") {
              const m = n.havingBaseStyle(r[a].style);
              h *= m.sizeMultiplier;
            }
            if (h > e)
              return r[a];
          }
          return r[r.length - 1];
        }, tn = function(t, e, r, n, s, a) {
          t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
          let c;
          O.contains(Jr, t) ? c = _s : O.contains(Zr, t) ? c = Qr : c = js;
          const h = en(t, e, c, n);
          return h.type === "small" ? Os(t, h.style, r, n, s, a) : h.type === "large" ? Xr(t, h.size, r, n, s, a) : Kr(t, e, r, n, s, a);
        };
        var fe = {
          sqrtImage: Ps,
          sizedDelim: Hs,
          sizeToMaxHeight: ot,
          customSizedDelim: tn,
          leftRightDelim: function(t, e, r, n, s, a) {
            const c = n.fontMetrics().axisHeight * n.sizeMultiplier, h = 901, m = 5 / n.fontMetrics().ptPerEm, p = Math.max(e - c, r + c), y = Math.max(
              // In real TeX, calculations are done using integral values which are
              // 65536 per pt, or 655360 per em. So, the division here truncates in
              // TeX but doesn't here, producing different results. If we wanted to
              // exactly match TeX's calculation, we could do
              //   Math.floor(655360 * maxDistFromAxis / 500) *
              //    delimiterFactor / 655360
              // (To see the difference, compare
              //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
              // in TeX and KaTeX)
              p / 500 * h,
              2 * p - m
            );
            return tn(t, y, !0, n, s, a);
          }
        };
        const rn = {
          "\\bigl": {
            mclass: "mopen",
            size: 1
          },
          "\\Bigl": {
            mclass: "mopen",
            size: 2
          },
          "\\biggl": {
            mclass: "mopen",
            size: 3
          },
          "\\Biggl": {
            mclass: "mopen",
            size: 4
          },
          "\\bigr": {
            mclass: "mclose",
            size: 1
          },
          "\\Bigr": {
            mclass: "mclose",
            size: 2
          },
          "\\biggr": {
            mclass: "mclose",
            size: 3
          },
          "\\Biggr": {
            mclass: "mclose",
            size: 4
          },
          "\\bigm": {
            mclass: "mrel",
            size: 1
          },
          "\\Bigm": {
            mclass: "mrel",
            size: 2
          },
          "\\biggm": {
            mclass: "mrel",
            size: 3
          },
          "\\Biggm": {
            mclass: "mrel",
            size: 4
          },
          "\\big": {
            mclass: "mord",
            size: 1
          },
          "\\Big": {
            mclass: "mord",
            size: 2
          },
          "\\bigg": {
            mclass: "mord",
            size: 3
          },
          "\\Bigg": {
            mclass: "mord",
            size: 4
          }
        }, Vs = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
        function qt(t, e) {
          const r = Et(t);
          if (r && O.contains(Vs, r.text))
            return r;
          throw r ? new w("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t) : new w("Invalid delimiter type '" + t.type + "'", t);
        }
        q({
          type: "delimsizing",
          names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
          props: {
            numArgs: 1,
            argTypes: ["primitive"]
          },
          handler: (t, e) => {
            const r = qt(e[0], t);
            return {
              type: "delimsizing",
              mode: t.parser.mode,
              size: rn[t.funcName].size,
              mclass: rn[t.funcName].mclass,
              delim: r.text
            };
          },
          htmlBuilder: (t, e) => t.delim === "." ? v.makeSpan([t.mclass]) : fe.sizedDelim(t.delim, t.size, e, t.mode, [t.mclass]),
          mathmlBuilder: (t) => {
            const e = [];
            t.delim !== "." && e.push(G0(t.delim, t.mode));
            const r = new B.MathNode("mo", e);
            t.mclass === "mopen" || t.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
            const n = E(fe.sizeToMaxHeight[t.size]);
            return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r;
          }
        });
        function nn(t) {
          if (!t.body)
            throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
        }
        q({
          type: "leftright-right",
          names: ["\\right"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: (t, e) => {
            const r = t.parser.gullet.macros.get("\\current@color");
            if (r && typeof r != "string")
              throw new w("\\current@color set to non-string in \\right");
            return {
              type: "leftright-right",
              mode: t.parser.mode,
              delim: qt(e[0], t).text,
              color: r
              // undefined if not set via \color
            };
          }
        }), q({
          type: "leftright",
          names: ["\\left"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: (t, e) => {
            const r = qt(e[0], t), n = t.parser;
            ++n.leftrightDepth;
            const s = n.parseExpression(!1);
            --n.leftrightDepth, n.expect("\\right", !1);
            const a = $(n.parseFunction(), "leftright-right");
            return {
              type: "leftright",
              mode: n.mode,
              body: s,
              left: r.text,
              right: a.delim,
              rightColor: a.color
            };
          },
          htmlBuilder: (t, e) => {
            nn(t);
            const r = A0(t.body, e, !0, ["mopen", "mclose"]);
            let n = 0, s = 0, a = !1;
            for (let m = 0; m < r.length; m++)
              r[m].isMiddle ? a = !0 : (n = Math.max(r[m].height, n), s = Math.max(r[m].depth, s));
            n *= e.sizeMultiplier, s *= e.sizeMultiplier;
            let c;
            if (t.left === "." ? c = rt(e, ["mopen"]) : c = fe.leftRightDelim(t.left, n, s, e, t.mode, ["mopen"]), r.unshift(c), a)
              for (let m = 1; m < r.length; m++) {
                const y = r[m].isMiddle;
                y && (r[m] = fe.leftRightDelim(y.delim, n, s, y.options, t.mode, []));
              }
            let h;
            if (t.right === ".")
              h = rt(e, ["mclose"]);
            else {
              const m = t.rightColor ? e.withColor(t.rightColor) : e;
              h = fe.leftRightDelim(t.right, n, s, m, t.mode, ["mclose"]);
            }
            return r.push(h), v.makeSpan(["minner"], r, e);
          },
          mathmlBuilder: (t, e) => {
            nn(t);
            const r = P0(t.body, e);
            if (t.left !== ".") {
              const n = new B.MathNode("mo", [G0(t.left, t.mode)]);
              n.setAttribute("fence", "true"), r.unshift(n);
            }
            if (t.right !== ".") {
              const n = new B.MathNode("mo", [G0(t.right, t.mode)]);
              n.setAttribute("fence", "true"), t.rightColor && n.setAttribute("mathcolor", t.rightColor), r.push(n);
            }
            return Zt(r);
          }
        }), q({
          type: "middle",
          names: ["\\middle"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: (t, e) => {
            const r = qt(e[0], t);
            if (!t.parser.leftrightDepth)
              throw new w("\\middle without preceding \\left", r);
            return {
              type: "middle",
              mode: t.parser.mode,
              delim: r.text
            };
          },
          htmlBuilder: (t, e) => {
            let r;
            if (t.delim === ".")
              r = rt(e, []);
            else {
              r = fe.sizedDelim(t.delim, 1, e, t.mode, []);
              const n = {
                delim: t.delim,
                options: e
              };
              r.isMiddle = n;
            }
            return r;
          },
          mathmlBuilder: (t, e) => {
            const r = t.delim === "\\vert" || t.delim === "|" ? G0("|", "text") : G0(t.delim, t.mode), n = new B.MathNode("mo", [r]);
            return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
          }
        });
        const cr = (t, e) => {
          const r = v.wrapFragment(s0(t.body, e), e), n = t.label.slice(1);
          let s = e.sizeMultiplier, a, c = 0;
          const h = O.isCharacterBox(t.body);
          if (n === "sout")
            a = v.makeSpan(["stretchy", "sout"]), a.height = e.fontMetrics().defaultRuleThickness / s, c = -0.5 * e.fontMetrics().xHeight;
          else if (n === "phase") {
            const p = f0({
              number: 0.6,
              unit: "pt"
            }, e), y = f0({
              number: 0.35,
              unit: "ex"
            }, e), x = e.havingBaseSizing();
            s = s / x.sizeMultiplier;
            const k = r.height + r.depth + p + y;
            r.style.paddingLeft = E(k / 2 + p);
            const C = Math.floor(1e3 * k * s), L = mt(C), _ = new X0([new K0("phase", L)], {
              width: "400em",
              height: E(C / 1e3),
              viewBox: "0 0 400000 " + C,
              preserveAspectRatio: "xMinYMin slice"
            });
            a = v.makeSvgSpan(["hide-tail"], [_], e), a.style.height = E(k), c = r.depth + p + y;
          } else {
            /cancel/.test(n) ? h || r.classes.push("cancel-pad") : n === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
            let p = 0, y = 0, x = 0;
            /box/.test(n) ? (x = Math.max(
              e.fontMetrics().fboxrule,
              // default
              e.minRuleThickness
              // User override.
            ), p = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : x), y = p) : n === "angl" ? (x = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), p = 4 * x, y = Math.max(0, 0.25 - r.depth)) : (p = h ? 0.2 : 0, y = p), a = me.encloseSpan(r, n, p, y, e), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = E(x)) : n === "angl" && x !== 0.049 && (a.style.borderTopWidth = E(x), a.style.borderRightWidth = E(x)), c = r.depth + y, t.backgroundColor && (a.style.backgroundColor = t.backgroundColor, t.borderColor && (a.style.borderColor = t.borderColor));
          }
          let m;
          if (t.backgroundColor)
            m = v.makeVList({
              positionType: "individualShift",
              children: [
                // Put the color background behind inner;
                {
                  type: "elem",
                  elem: a,
                  shift: c
                },
                {
                  type: "elem",
                  elem: r,
                  shift: 0
                }
              ]
            }, e);
          else {
            const p = /cancel|phase/.test(n) ? ["svg-align"] : [];
            m = v.makeVList({
              positionType: "individualShift",
              children: [
                // Write the \cancel stroke on top of inner.
                {
                  type: "elem",
                  elem: r,
                  shift: 0
                },
                {
                  type: "elem",
                  elem: a,
                  shift: c,
                  wrapperClasses: p
                }
              ]
            }, e);
          }
          return /cancel/.test(n) && (m.height = r.height, m.depth = r.depth), /cancel/.test(n) && !h ? v.makeSpan(["mord", "cancel-lap"], [m], e) : v.makeSpan(["mord"], [m], e);
        }, ur = (t, e) => {
          let r = 0;
          const n = new B.MathNode(t.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [u0(t.body, e)]);
          switch (t.label) {
            case "\\cancel":
              n.setAttribute("notation", "updiagonalstrike");
              break;
            case "\\bcancel":
              n.setAttribute("notation", "downdiagonalstrike");
              break;
            case "\\phase":
              n.setAttribute("notation", "phasorangle");
              break;
            case "\\sout":
              n.setAttribute("notation", "horizontalstrike");
              break;
            case "\\fbox":
              n.setAttribute("notation", "box");
              break;
            case "\\angl":
              n.setAttribute("notation", "actuarial");
              break;
            case "\\fcolorbox":
            case "\\colorbox":
              if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), t.label === "\\fcolorbox") {
                const s = Math.max(
                  e.fontMetrics().fboxrule,
                  // default
                  e.minRuleThickness
                  // user override
                );
                n.setAttribute("style", "border: " + s + "em solid " + String(t.borderColor));
              }
              break;
            case "\\xcancel":
              n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
              break;
          }
          return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor), n;
        };
        q({
          type: "enclose",
          names: ["\\colorbox"],
          props: {
            numArgs: 2,
            allowedInText: !0,
            argTypes: ["color", "text"]
          },
          handler(t, e, r) {
            let {
              parser: n,
              funcName: s
            } = t;
            const a = $(e[0], "color-token").color, c = e[1];
            return {
              type: "enclose",
              mode: n.mode,
              label: s,
              backgroundColor: a,
              body: c
            };
          },
          htmlBuilder: cr,
          mathmlBuilder: ur
        }), q({
          type: "enclose",
          names: ["\\fcolorbox"],
          props: {
            numArgs: 3,
            allowedInText: !0,
            argTypes: ["color", "color", "text"]
          },
          handler(t, e, r) {
            let {
              parser: n,
              funcName: s
            } = t;
            const a = $(e[0], "color-token").color, c = $(e[1], "color-token").color, h = e[2];
            return {
              type: "enclose",
              mode: n.mode,
              label: s,
              backgroundColor: c,
              borderColor: a,
              body: h
            };
          },
          htmlBuilder: cr,
          mathmlBuilder: ur
        }), q({
          type: "enclose",
          names: ["\\fbox"],
          props: {
            numArgs: 1,
            argTypes: ["hbox"],
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "enclose",
              mode: r.mode,
              label: "\\fbox",
              body: e[0]
            };
          }
        }), q({
          type: "enclose",
          names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "enclose",
              mode: r.mode,
              label: n,
              body: s
            };
          },
          htmlBuilder: cr,
          mathmlBuilder: ur
        }), q({
          type: "enclose",
          names: ["\\angl"],
          props: {
            numArgs: 1,
            argTypes: ["hbox"],
            allowedInText: !1
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "enclose",
              mode: r.mode,
              label: "\\angl",
              body: e[0]
            };
          }
        });
        const sn = {};
        function se(t) {
          let {
            type: e,
            names: r,
            props: n,
            handler: s,
            htmlBuilder: a,
            mathmlBuilder: c
          } = t;
          const h = {
            type: e,
            numArgs: n.numArgs || 0,
            allowedInText: !1,
            numOptionalArgs: 0,
            handler: s
          };
          for (let m = 0; m < r.length; ++m)
            sn[r[m]] = h;
          a && (At[e] = a), c && (Ct[e] = c);
        }
        const on = {};
        function d(t, e) {
          on[t] = e;
        }
        class H0 {
          // The + prefix indicates that these fields aren't writeable
          // Lexer holding the input string.
          // Start offset, zero-based inclusive.
          // End offset, zero-based exclusive.
          constructor(e, r, n) {
            this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = n;
          }
          /**
           * Merges two `SourceLocation`s from location providers, given they are
           * provided in order of appearance.
           * - Returns the first one's location if only the first is provided.
           * - Returns a merged range of the first and the last if both are provided
           *   and their lexers match.
           * - Otherwise, returns null.
           */
          static range(e, r) {
            return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new H0(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
          }
        }
        class V0 {
          // don't expand the token
          // used in \noexpand
          constructor(e, r) {
            this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
          }
          /**
           * Given a pair of tokens (this and endToken), compute a `Token` encompassing
           * the whole input range enclosed by these two.
           */
          range(e, r) {
            return new V0(r, H0.range(this, e));
          }
        }
        function an(t) {
          const e = [];
          t.consumeSpaces();
          let r = t.fetch().text;
          for (r === "\\relax" && (t.consume(), t.consumeSpaces(), r = t.fetch().text); r === "\\hline" || r === "\\hdashline"; )
            t.consume(), e.push(r === "\\hdashline"), t.consumeSpaces(), r = t.fetch().text;
          return e;
        }
        const It = (t) => {
          if (!t.parser.settings.displayMode)
            throw new w("{" + t.envName + "} can be used only in display mode.");
        };
        function hr(t) {
          if (t.indexOf("ed") === -1)
            return t.indexOf("*") === -1;
        }
        function Me(t, e, r) {
          let {
            hskipBeforeAndAfter: n,
            addJot: s,
            cols: a,
            arraystretch: c,
            colSeparationType: h,
            autoTag: m,
            singleRow: p,
            emptySingleRow: y,
            maxNumCols: x,
            leqno: k
          } = e;
          if (t.gullet.beginGroup(), p || t.gullet.macros.set("\\cr", "\\\\\\relax"), !c) {
            const d0 = t.gullet.expandMacroAsText("\\arraystretch");
            if (d0 == null)
              c = 1;
            else if (c = parseFloat(d0), !c || c < 0)
              throw new w("Invalid \\arraystretch: " + d0);
          }
          t.gullet.beginGroup();
          let C = [];
          const L = [C], _ = [], Q = [], Y = m != null ? [] : void 0;
          function r0() {
            m && t.gullet.macros.set("\\@eqnsw", "1", !0);
          }
          function i0() {
            Y && (t.gullet.macros.get("\\df@tag") ? (Y.push(t.subparse([new V0("\\df@tag")])), t.gullet.macros.set("\\df@tag", void 0, !0)) : Y.push(!!m && t.gullet.macros.get("\\@eqnsw") === "1"));
          }
          for (r0(), Q.push(an(t)); ; ) {
            let d0 = t.parseExpression(!1, p ? "\\end" : "\\\\");
            t.gullet.endGroup(), t.gullet.beginGroup(), d0 = {
              type: "ordgroup",
              mode: t.mode,
              body: d0
            }, r && (d0 = {
              type: "styling",
              mode: t.mode,
              style: r,
              body: [d0]
            }), C.push(d0);
            const I0 = t.fetch().text;
            if (I0 === "&") {
              if (x && C.length === x) {
                if (p || h)
                  throw new w("Too many tab characters: &", t.nextToken);
                t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
              }
              t.consume();
            } else if (I0 === "\\end") {
              i0(), C.length === 1 && d0.type === "styling" && d0.body[0].body.length === 0 && (L.length > 1 || !y) && L.pop(), Q.length < L.length + 1 && Q.push([]);
              break;
            } else if (I0 === "\\\\") {
              t.consume();
              let C0;
              t.gullet.future().text !== " " && (C0 = t.parseSizeGroup(!0)), _.push(C0 ? C0.value : null), i0(), Q.push(an(t)), C = [], L.push(C), r0();
            } else
              throw new w("Expected & or \\\\ or \\cr or \\end", t.nextToken);
          }
          return t.gullet.endGroup(), t.gullet.endGroup(), {
            type: "array",
            mode: t.mode,
            addJot: s,
            arraystretch: c,
            body: L,
            cols: a,
            rowGaps: _,
            hskipBeforeAndAfter: n,
            hLinesBeforeRow: Q,
            colSeparationType: h,
            tags: Y,
            leqno: k
          };
        }
        function dr(t) {
          return t.slice(0, 1) === "d" ? "display" : "text";
        }
        const oe = function(t, e) {
          let r, n;
          const s = t.body.length, a = t.hLinesBeforeRow;
          let c = 0, h = new Array(s);
          const m = [], p = Math.max(
            // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
            e.fontMetrics().arrayRuleWidth,
            e.minRuleThickness
            // User override.
          ), y = 1 / e.fontMetrics().ptPerEm;
          let x = 5 * y;
          t.colSeparationType && t.colSeparationType === "small" && (x = 0.2778 * (e.havingStyle(F.SCRIPT).sizeMultiplier / e.sizeMultiplier));
          const k = t.colSeparationType === "CD" ? f0({
            number: 3,
            unit: "ex"
          }, e) : 12 * y, C = 3 * y, L = t.arraystretch * k, _ = 0.7 * L, Q = 0.3 * L;
          let Y = 0;
          function r0(o0) {
            for (let c0 = 0; c0 < o0.length; ++c0)
              c0 > 0 && (Y += 0.25), m.push({
                pos: Y,
                isDashed: o0[c0]
              });
          }
          for (r0(a[0]), r = 0; r < t.body.length; ++r) {
            const o0 = t.body[r];
            let c0 = _, p0 = Q;
            c < o0.length && (c = o0.length);
            const y0 = new Array(o0.length);
            for (n = 0; n < o0.length; ++n) {
              const $0 = s0(o0[n], e);
              p0 < $0.depth && (p0 = $0.depth), c0 < $0.height && (c0 = $0.height), y0[n] = $0;
            }
            const M0 = t.rowGaps[r];
            let k0 = 0;
            M0 && (k0 = f0(M0, e), k0 > 0 && (k0 += Q, p0 < k0 && (p0 = k0), k0 = 0)), t.addJot && (p0 += C), y0.height = c0, y0.depth = p0, Y += c0, y0.pos = Y, Y += p0 + k0, h[r] = y0, r0(a[r + 1]);
          }
          const i0 = Y / 2 + e.fontMetrics().axisHeight, d0 = t.cols || [], I0 = [];
          let C0, W0;
          const je = [];
          if (t.tags && t.tags.some((o0) => o0))
            for (r = 0; r < s; ++r) {
              const o0 = h[r], c0 = o0.pos - i0, p0 = t.tags[r];
              let y0;
              p0 === !0 ? y0 = v.makeSpan(["eqn-num"], [], e) : p0 === !1 ? y0 = v.makeSpan([], [], e) : y0 = v.makeSpan([], A0(p0, e, !0), e), y0.depth = o0.depth, y0.height = o0.height, je.push({
                type: "elem",
                elem: y0,
                shift: c0
              });
            }
          for (
            n = 0, W0 = 0;
            // Continue while either there are more columns or more column
            // descriptions, so trailing separators don't get lost.
            n < c || W0 < d0.length;
            ++n, ++W0
          ) {
            let o0 = d0[W0] || {}, c0 = !0;
            for (; o0.type === "separator"; ) {
              if (c0 || (C0 = v.makeSpan(["arraycolsep"], []), C0.style.width = E(e.fontMetrics().doubleRuleSep), I0.push(C0)), o0.separator === "|" || o0.separator === ":") {
                const M0 = o0.separator === "|" ? "solid" : "dashed", k0 = v.makeSpan(["vertical-separator"], [], e);
                k0.style.height = E(Y), k0.style.borderRightWidth = E(p), k0.style.borderRightStyle = M0, k0.style.margin = "0 " + E(-p / 2);
                const $0 = Y - i0;
                $0 && (k0.style.verticalAlign = E(-$0)), I0.push(k0);
              } else
                throw new w("Invalid separator type: " + o0.separator);
              W0++, o0 = d0[W0] || {}, c0 = !1;
            }
            if (n >= c)
              continue;
            let p0;
            (n > 0 || t.hskipBeforeAndAfter) && (p0 = O.deflt(o0.pregap, x), p0 !== 0 && (C0 = v.makeSpan(["arraycolsep"], []), C0.style.width = E(p0), I0.push(C0)));
            let y0 = [];
            for (r = 0; r < s; ++r) {
              const M0 = h[r], k0 = M0[n];
              if (!k0)
                continue;
              const $0 = M0.pos - i0;
              k0.depth = M0.depth, k0.height = M0.height, y0.push({
                type: "elem",
                elem: k0,
                shift: $0
              });
            }
            y0 = v.makeVList({
              positionType: "individualShift",
              children: y0
            }, e), y0 = v.makeSpan(["col-align-" + (o0.align || "c")], [y0]), I0.push(y0), (n < c - 1 || t.hskipBeforeAndAfter) && (p0 = O.deflt(o0.postgap, x), p0 !== 0 && (C0 = v.makeSpan(["arraycolsep"], []), C0.style.width = E(p0), I0.push(C0)));
          }
          if (h = v.makeSpan(["mtable"], I0), m.length > 0) {
            const o0 = v.makeLineSpan("hline", e, p), c0 = v.makeLineSpan("hdashline", e, p), p0 = [{
              type: "elem",
              elem: h,
              shift: 0
            }];
            for (; m.length > 0; ) {
              const y0 = m.pop(), M0 = y0.pos - i0;
              y0.isDashed ? p0.push({
                type: "elem",
                elem: c0,
                shift: M0
              }) : p0.push({
                type: "elem",
                elem: o0,
                shift: M0
              });
            }
            h = v.makeVList({
              positionType: "individualShift",
              children: p0
            }, e);
          }
          if (je.length === 0)
            return v.makeSpan(["mord"], [h], e);
          {
            let o0 = v.makeVList({
              positionType: "individualShift",
              children: je
            }, e);
            return o0 = v.makeSpan(["tag"], [o0], e), v.makeFragment([h, o0]);
          }
        }, Ws = {
          c: "center ",
          l: "left ",
          r: "right "
        }, ie = function(t, e) {
          const r = [], n = new B.MathNode("mtd", [], ["mtr-glue"]), s = new B.MathNode("mtd", [], ["mml-eqn-num"]);
          for (let x = 0; x < t.body.length; x++) {
            const k = t.body[x], C = [];
            for (let L = 0; L < k.length; L++)
              C.push(new B.MathNode("mtd", [u0(k[L], e)]));
            t.tags && t.tags[x] && (C.unshift(n), C.push(n), t.leqno ? C.unshift(s) : C.push(s)), r.push(new B.MathNode("mtr", C));
          }
          let a = new B.MathNode("mtable", r);
          const c = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
          a.setAttribute("rowspacing", E(c));
          let h = "", m = "";
          if (t.cols && t.cols.length > 0) {
            const x = t.cols;
            let k = "", C = !1, L = 0, _ = x.length;
            x[0].type === "separator" && (h += "top ", L = 1), x[x.length - 1].type === "separator" && (h += "bottom ", _ -= 1);
            for (let Q = L; Q < _; Q++)
              x[Q].type === "align" ? (m += Ws[x[Q].align], C && (k += "none "), C = !0) : x[Q].type === "separator" && C && (k += x[Q].separator === "|" ? "solid " : "dashed ", C = !1);
            a.setAttribute("columnalign", m.trim()), /[sd]/.test(k) && a.setAttribute("columnlines", k.trim());
          }
          if (t.colSeparationType === "align") {
            const x = t.cols || [];
            let k = "";
            for (let C = 1; C < x.length; C++)
              k += C % 2 ? "0em " : "1em ";
            a.setAttribute("columnspacing", k.trim());
          } else t.colSeparationType === "alignat" || t.colSeparationType === "gather" ? a.setAttribute("columnspacing", "0em") : t.colSeparationType === "small" ? a.setAttribute("columnspacing", "0.2778em") : t.colSeparationType === "CD" ? a.setAttribute("columnspacing", "0.5em") : a.setAttribute("columnspacing", "1em");
          let p = "";
          const y = t.hLinesBeforeRow;
          h += y[0].length > 0 ? "left " : "", h += y[y.length - 1].length > 0 ? "right " : "";
          for (let x = 1; x < y.length - 1; x++)
            p += y[x].length === 0 ? "none " : y[x][0] ? "dashed " : "solid ";
          return /[sd]/.test(p) && a.setAttribute("rowlines", p.trim()), h !== "" && (a = new B.MathNode("menclose", [a]), a.setAttribute("notation", h.trim())), t.arraystretch && t.arraystretch < 1 && (a = new B.MathNode("mstyle", [a]), a.setAttribute("scriptlevel", "1")), a;
        }, ln = function(t, e) {
          t.envName.indexOf("ed") === -1 && It(t);
          const r = [], n = t.envName.indexOf("at") > -1 ? "alignat" : "align", s = t.envName === "split", a = Me(t.parser, {
            cols: r,
            addJot: !0,
            autoTag: s ? void 0 : hr(t.envName),
            emptySingleRow: !0,
            colSeparationType: n,
            maxNumCols: s ? 2 : void 0,
            leqno: t.parser.settings.leqno
          }, "display");
          let c, h = 0;
          const m = {
            type: "ordgroup",
            mode: t.mode,
            body: []
          };
          if (e[0] && e[0].type === "ordgroup") {
            let y = "";
            for (let x = 0; x < e[0].body.length; x++) {
              const k = $(e[0].body[x], "textord");
              y += k.text;
            }
            c = Number(y), h = c * 2;
          }
          const p = !h;
          a.body.forEach(function(y) {
            for (let x = 1; x < y.length; x += 2) {
              const k = $(y[x], "styling");
              $(k.body[0], "ordgroup").body.unshift(m);
            }
            if (p)
              h < y.length && (h = y.length);
            else {
              const x = y.length / 2;
              if (c < x)
                throw new w("Too many math in a row: " + ("expected " + c + ", but got " + x), y[0]);
            }
          });
          for (let y = 0; y < h; ++y) {
            let x = "r", k = 0;
            y % 2 === 1 ? x = "l" : y > 0 && p && (k = 1), r[y] = {
              type: "align",
              align: x,
              pregap: k,
              postgap: 0
            };
          }
          return a.colSeparationType = p ? "align" : "alignat", a;
        };
        se({
          type: "array",
          names: ["array", "darray"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            const s = (Et(e[0]) ? [e[0]] : $(e[0], "ordgroup").body).map(function(c) {
              const m = Qt(c).text;
              if ("lcr".indexOf(m) !== -1)
                return {
                  type: "align",
                  align: m
                };
              if (m === "|")
                return {
                  type: "separator",
                  separator: "|"
                };
              if (m === ":")
                return {
                  type: "separator",
                  separator: ":"
                };
              throw new w("Unknown column alignment: " + m, c);
            }), a = {
              cols: s,
              hskipBeforeAndAfter: !0,
              // \@preamble in lttab.dtx
              maxNumCols: s.length
            };
            return Me(t.parser, a, dr(t.envName));
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
          props: {
            numArgs: 0
          },
          handler(t) {
            const e = {
              matrix: null,
              pmatrix: ["(", ")"],
              bmatrix: ["[", "]"],
              Bmatrix: ["\\{", "\\}"],
              vmatrix: ["|", "|"],
              Vmatrix: ["\\Vert", "\\Vert"]
            }[t.envName.replace("*", "")];
            let r = "c";
            const n = {
              hskipBeforeAndAfter: !1,
              cols: [{
                type: "align",
                align: r
              }]
            };
            if (t.envName.charAt(t.envName.length - 1) === "*") {
              const c = t.parser;
              if (c.consumeSpaces(), c.fetch().text === "[") {
                if (c.consume(), c.consumeSpaces(), r = c.fetch().text, "lcr".indexOf(r) === -1)
                  throw new w("Expected l or c or r", c.nextToken);
                c.consume(), c.consumeSpaces(), c.expect("]"), c.consume(), n.cols = [{
                  type: "align",
                  align: r
                }];
              }
            }
            const s = Me(t.parser, n, dr(t.envName)), a = Math.max(0, ...s.body.map((c) => c.length));
            return s.cols = new Array(a).fill({
              type: "align",
              align: r
            }), e ? {
              type: "leftright",
              mode: t.mode,
              body: [s],
              left: e[0],
              right: e[1],
              rightColor: void 0
              // \right uninfluenced by \color in array
            } : s;
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["smallmatrix"],
          props: {
            numArgs: 0
          },
          handler(t) {
            const e = {
              arraystretch: 0.5
            }, r = Me(t.parser, e, "script");
            return r.colSeparationType = "small", r;
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["subarray"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            const s = (Et(e[0]) ? [e[0]] : $(e[0], "ordgroup").body).map(function(c) {
              const m = Qt(c).text;
              if ("lc".indexOf(m) !== -1)
                return {
                  type: "align",
                  align: m
                };
              throw new w("Unknown column alignment: " + m, c);
            });
            if (s.length > 1)
              throw new w("{subarray} can contain only one column");
            let a = {
              cols: s,
              hskipBeforeAndAfter: !1,
              arraystretch: 0.5
            };
            if (a = Me(t.parser, a, "script"), a.body.length > 0 && a.body[0].length > 1)
              throw new w("{subarray} can contain only one column");
            return a;
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["cases", "dcases", "rcases", "drcases"],
          props: {
            numArgs: 0
          },
          handler(t) {
            const e = {
              arraystretch: 1.2,
              cols: [{
                type: "align",
                align: "l",
                pregap: 0,
                // TODO(kevinb) get the current style.
                // For now we use the metrics for TEXT style which is what we were
                // doing before.  Before attempting to get the current style we
                // should look at TeX's behavior especially for \over and matrices.
                postgap: 1
                /* 1em quad */
              }, {
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 0
              }]
            }, r = Me(t.parser, e, dr(t.envName));
            return {
              type: "leftright",
              mode: t.mode,
              body: [r],
              left: t.envName.indexOf("r") > -1 ? "." : "\\{",
              right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
              rightColor: void 0
            };
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["align", "align*", "aligned", "split"],
          props: {
            numArgs: 0
          },
          handler: ln,
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["gathered", "gather", "gather*"],
          props: {
            numArgs: 0
          },
          handler(t) {
            O.contains(["gather", "gather*"], t.envName) && It(t);
            const e = {
              cols: [{
                type: "align",
                align: "c"
              }],
              addJot: !0,
              colSeparationType: "gather",
              autoTag: hr(t.envName),
              emptySingleRow: !0,
              leqno: t.parser.settings.leqno
            };
            return Me(t.parser, e, "display");
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["alignat", "alignat*", "alignedat"],
          props: {
            numArgs: 1
          },
          handler: ln,
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["equation", "equation*"],
          props: {
            numArgs: 0
          },
          handler(t) {
            It(t);
            const e = {
              autoTag: hr(t.envName),
              emptySingleRow: !0,
              singleRow: !0,
              maxNumCols: 1,
              leqno: t.parser.settings.leqno
            };
            return Me(t.parser, e, "display");
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), se({
          type: "array",
          names: ["CD"],
          props: {
            numArgs: 0
          },
          handler(t) {
            return It(t), Ds(t.parser);
          },
          htmlBuilder: oe,
          mathmlBuilder: ie
        }), d("\\nonumber", "\\gdef\\@eqnsw{0}"), d("\\notag", "\\nonumber"), q({
          type: "text",
          // Doesn't matter what this is.
          names: ["\\hline", "\\hdashline"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !0
          },
          handler(t, e) {
            throw new w(t.funcName + " valid only within array environment");
          }
        });
        var cn = sn;
        q({
          type: "environment",
          names: ["\\begin", "\\end"],
          props: {
            numArgs: 1,
            argTypes: ["text"]
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            if (s.type !== "ordgroup")
              throw new w("Invalid environment name", s);
            let a = "";
            for (let c = 0; c < s.body.length; ++c)
              a += $(s.body[c], "textord").text;
            if (n === "\\begin") {
              if (!cn.hasOwnProperty(a))
                throw new w("No such environment: " + a, s);
              const c = cn[a], {
                args: h,
                optArgs: m
              } = r.parseArguments("\\begin{" + a + "}", c), p = {
                mode: r.mode,
                envName: a,
                parser: r
              }, y = c.handler(p, h, m);
              r.expect("\\end", !1);
              const x = r.nextToken, k = $(r.parseFunction(), "environment");
              if (k.name !== a)
                throw new w("Mismatch: \\begin{" + a + "} matched by \\end{" + k.name + "}", x);
              return y;
            }
            return {
              type: "environment",
              mode: r.mode,
              name: a,
              nameGroup: s
            };
          }
        });
        const un = (t, e) => {
          const r = t.font, n = e.withFont(r);
          return s0(t.body, n);
        }, hn = (t, e) => {
          const r = t.font, n = e.withFont(r);
          return u0(t.body, n);
        }, dn = {
          "\\Bbb": "\\mathbb",
          "\\bold": "\\mathbf",
          "\\frak": "\\mathfrak",
          "\\bm": "\\boldsymbol"
        };
        q({
          type: "font",
          names: [
            // styles, except \boldsymbol defined below
            "\\mathrm",
            "\\mathit",
            "\\mathbf",
            "\\mathnormal",
            // families
            "\\mathbb",
            "\\mathcal",
            "\\mathfrak",
            "\\mathscr",
            "\\mathsf",
            "\\mathtt",
            // aliases, except \bm defined below
            "\\Bbb",
            "\\bold",
            "\\frak"
          ],
          props: {
            numArgs: 1,
            allowedInArgument: !0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = Nt(e[0]);
            let a = n;
            return a in dn && (a = dn[a]), {
              type: "font",
              mode: r.mode,
              font: a.slice(1),
              body: s
            };
          },
          htmlBuilder: un,
          mathmlBuilder: hn
        }), q({
          type: "mclass",
          names: ["\\boldsymbol", "\\bm"],
          props: {
            numArgs: 1
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[0], s = O.isCharacterBox(n);
            return {
              type: "mclass",
              mode: r.mode,
              mclass: Rt(n),
              body: [{
                type: "font",
                mode: r.mode,
                font: "boldsymbol",
                body: n
              }],
              isCharacterBox: s
            };
          }
        }), q({
          type: "font",
          names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n,
              breakOnTokenText: s
            } = t;
            const {
              mode: a
            } = r, c = r.parseExpression(!0, s), h = "math" + n.slice(1);
            return {
              type: "font",
              mode: a,
              font: h,
              body: {
                type: "ordgroup",
                mode: r.mode,
                body: c
              }
            };
          },
          htmlBuilder: un,
          mathmlBuilder: hn
        });
        const mn = (t, e) => {
          let r = e;
          return t === "display" ? r = r.id >= F.SCRIPT.id ? r.text() : F.DISPLAY : t === "text" && r.size === F.DISPLAY.size ? r = F.TEXT : t === "script" ? r = F.SCRIPT : t === "scriptscript" && (r = F.SCRIPTSCRIPT), r;
        }, mr = (t, e) => {
          const r = mn(t.size, e.style), n = r.fracNum(), s = r.fracDen();
          let a;
          a = e.havingStyle(n);
          const c = s0(t.numer, a, e);
          if (t.continued) {
            const r0 = 8.5 / e.fontMetrics().ptPerEm, i0 = 3.5 / e.fontMetrics().ptPerEm;
            c.height = c.height < r0 ? r0 : c.height, c.depth = c.depth < i0 ? i0 : c.depth;
          }
          a = e.havingStyle(s);
          const h = s0(t.denom, a, e);
          let m, p, y;
          t.hasBarLine ? (t.barSize ? (p = f0(t.barSize, e), m = v.makeLineSpan("frac-line", e, p)) : m = v.makeLineSpan("frac-line", e), p = m.height, y = m.height) : (m = null, p = 0, y = e.fontMetrics().defaultRuleThickness);
          let x, k, C;
          r.size === F.DISPLAY.size || t.size === "display" ? (x = e.fontMetrics().num1, p > 0 ? k = 3 * y : k = 7 * y, C = e.fontMetrics().denom1) : (p > 0 ? (x = e.fontMetrics().num2, k = y) : (x = e.fontMetrics().num3, k = 3 * y), C = e.fontMetrics().denom2);
          let L;
          if (m) {
            const r0 = e.fontMetrics().axisHeight;
            x - c.depth - (r0 + 0.5 * p) < k && (x += k - (x - c.depth - (r0 + 0.5 * p))), r0 - 0.5 * p - (h.height - C) < k && (C += k - (r0 - 0.5 * p - (h.height - C)));
            const i0 = -(r0 - 0.5 * p);
            L = v.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: h,
                shift: C
              }, {
                type: "elem",
                elem: m,
                shift: i0
              }, {
                type: "elem",
                elem: c,
                shift: -x
              }]
            }, e);
          } else {
            const r0 = x - c.depth - (h.height - C);
            r0 < k && (x += 0.5 * (k - r0), C += 0.5 * (k - r0)), L = v.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: h,
                shift: C
              }, {
                type: "elem",
                elem: c,
                shift: -x
              }]
            }, e);
          }
          a = e.havingStyle(r), L.height *= a.sizeMultiplier / e.sizeMultiplier, L.depth *= a.sizeMultiplier / e.sizeMultiplier;
          let _;
          r.size === F.DISPLAY.size ? _ = e.fontMetrics().delim1 : r.size === F.SCRIPTSCRIPT.size ? _ = e.havingStyle(F.SCRIPT).fontMetrics().delim2 : _ = e.fontMetrics().delim2;
          let Q, Y;
          return t.leftDelim == null ? Q = rt(e, ["mopen"]) : Q = fe.customSizedDelim(t.leftDelim, _, !0, e.havingStyle(r), t.mode, ["mopen"]), t.continued ? Y = v.makeSpan([]) : t.rightDelim == null ? Y = rt(e, ["mclose"]) : Y = fe.customSizedDelim(t.rightDelim, _, !0, e.havingStyle(r), t.mode, ["mclose"]), v.makeSpan(["mord"].concat(a.sizingClasses(e)), [Q, v.makeSpan(["mfrac"], [L]), Y], e);
        }, fr = (t, e) => {
          let r = new B.MathNode("mfrac", [u0(t.numer, e), u0(t.denom, e)]);
          if (!t.hasBarLine)
            r.setAttribute("linethickness", "0px");
          else if (t.barSize) {
            const s = f0(t.barSize, e);
            r.setAttribute("linethickness", E(s));
          }
          const n = mn(t.size, e.style);
          if (n.size !== e.style.size) {
            r = new B.MathNode("mstyle", [r]);
            const s = n.size === F.DISPLAY.size ? "true" : "false";
            r.setAttribute("displaystyle", s), r.setAttribute("scriptlevel", "0");
          }
          if (t.leftDelim != null || t.rightDelim != null) {
            const s = [];
            if (t.leftDelim != null) {
              const a = new B.MathNode("mo", [new B.TextNode(t.leftDelim.replace("\\", ""))]);
              a.setAttribute("fence", "true"), s.push(a);
            }
            if (s.push(r), t.rightDelim != null) {
              const a = new B.MathNode("mo", [new B.TextNode(t.rightDelim.replace("\\", ""))]);
              a.setAttribute("fence", "true"), s.push(a);
            }
            return Zt(s);
          }
          return r;
        };
        q({
          type: "genfrac",
          names: [
            "\\dfrac",
            "\\frac",
            "\\tfrac",
            "\\dbinom",
            "\\binom",
            "\\tbinom",
            "\\\\atopfrac",
            // can’t be entered directly
            "\\\\bracefrac",
            "\\\\brackfrac"
            // ditto
          ],
          props: {
            numArgs: 2,
            allowedInArgument: !0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0], a = e[1];
            let c, h = null, m = null, p = "auto";
            switch (n) {
              case "\\dfrac":
              case "\\frac":
              case "\\tfrac":
                c = !0;
                break;
              case "\\\\atopfrac":
                c = !1;
                break;
              case "\\dbinom":
              case "\\binom":
              case "\\tbinom":
                c = !1, h = "(", m = ")";
                break;
              case "\\\\bracefrac":
                c = !1, h = "\\{", m = "\\}";
                break;
              case "\\\\brackfrac":
                c = !1, h = "[", m = "]";
                break;
              default:
                throw new Error("Unrecognized genfrac command");
            }
            switch (n) {
              case "\\dfrac":
              case "\\dbinom":
                p = "display";
                break;
              case "\\tfrac":
              case "\\tbinom":
                p = "text";
                break;
            }
            return {
              type: "genfrac",
              mode: r.mode,
              continued: !1,
              numer: s,
              denom: a,
              hasBarLine: c,
              leftDelim: h,
              rightDelim: m,
              size: p,
              barSize: null
            };
          },
          htmlBuilder: mr,
          mathmlBuilder: fr
        }), q({
          type: "genfrac",
          names: ["\\cfrac"],
          props: {
            numArgs: 2
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0], a = e[1];
            return {
              type: "genfrac",
              mode: r.mode,
              continued: !0,
              numer: s,
              denom: a,
              hasBarLine: !0,
              leftDelim: null,
              rightDelim: null,
              size: "display",
              barSize: null
            };
          }
        }), q({
          type: "infix",
          names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
          props: {
            numArgs: 0,
            infix: !0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r,
              token: n
            } = t, s;
            switch (r) {
              case "\\over":
                s = "\\frac";
                break;
              case "\\choose":
                s = "\\binom";
                break;
              case "\\atop":
                s = "\\\\atopfrac";
                break;
              case "\\brace":
                s = "\\\\bracefrac";
                break;
              case "\\brack":
                s = "\\\\brackfrac";
                break;
              default:
                throw new Error("Unrecognized infix genfrac command");
            }
            return {
              type: "infix",
              mode: e.mode,
              replaceWith: s,
              token: n
            };
          }
        });
        const fn = ["display", "text", "script", "scriptscript"], pn = function(t) {
          let e = null;
          return t.length > 0 && (e = t, e = e === "." ? null : e), e;
        };
        q({
          type: "genfrac",
          names: ["\\genfrac"],
          props: {
            numArgs: 6,
            allowedInArgument: !0,
            argTypes: ["math", "math", "size", "text", "math", "math"]
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            const n = e[4], s = e[5], a = Nt(e[0]), c = a.type === "atom" && a.family === "open" ? pn(a.text) : null, h = Nt(e[1]), m = h.type === "atom" && h.family === "close" ? pn(h.text) : null, p = $(e[2], "size");
            let y, x = null;
            p.isBlank ? y = !0 : (x = p.value, y = x.number > 0);
            let k = "auto", C = e[3];
            if (C.type === "ordgroup") {
              if (C.body.length > 0) {
                const L = $(C.body[0], "textord");
                k = fn[Number(L.text)];
              }
            } else
              C = $(C, "textord"), k = fn[Number(C.text)];
            return {
              type: "genfrac",
              mode: r.mode,
              numer: n,
              denom: s,
              continued: !1,
              hasBarLine: y,
              barSize: x,
              leftDelim: c,
              rightDelim: m,
              size: k
            };
          },
          htmlBuilder: mr,
          mathmlBuilder: fr
        }), q({
          type: "infix",
          names: ["\\above"],
          props: {
            numArgs: 1,
            argTypes: ["size"],
            infix: !0
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n,
              token: s
            } = t;
            return {
              type: "infix",
              mode: r.mode,
              replaceWith: "\\\\abovefrac",
              size: $(e[0], "size").value,
              token: s
            };
          }
        }), q({
          type: "genfrac",
          names: ["\\\\abovefrac"],
          props: {
            numArgs: 3,
            argTypes: ["math", "size", "math"]
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0], a = b0($(e[1], "infix").size), c = e[2], h = a.number > 0;
            return {
              type: "genfrac",
              mode: r.mode,
              numer: s,
              denom: c,
              continued: !1,
              hasBarLine: h,
              barSize: a,
              leftDelim: null,
              rightDelim: null,
              size: "auto"
            };
          },
          htmlBuilder: mr,
          mathmlBuilder: fr
        });
        const gn = (t, e) => {
          const r = e.style;
          let n, s;
          t.type === "supsub" ? (n = t.sup ? s0(t.sup, e.havingStyle(r.sup()), e) : s0(t.sub, e.havingStyle(r.sub()), e), s = $(t.base, "horizBrace")) : s = $(t, "horizBrace");
          const a = s0(s.base, e.havingBaseStyle(F.DISPLAY)), c = me.svgSpan(s, e);
          let h;
          if (s.isOver ? (h = v.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: a
            }, {
              type: "kern",
              size: 0.1
            }, {
              type: "elem",
              elem: c
            }]
          }, e), h.children[0].children[0].children[1].classes.push("svg-align")) : (h = v.makeVList({
            positionType: "bottom",
            positionData: a.depth + 0.1 + c.height,
            children: [{
              type: "elem",
              elem: c
            }, {
              type: "kern",
              size: 0.1
            }, {
              type: "elem",
              elem: a
            }]
          }, e), h.children[0].children[0].children[0].classes.push("svg-align")), n) {
            const m = v.makeSpan(["mord", s.isOver ? "mover" : "munder"], [h], e);
            s.isOver ? h = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: m
              }, {
                type: "kern",
                size: 0.2
              }, {
                type: "elem",
                elem: n
              }]
            }, e) : h = v.makeVList({
              positionType: "bottom",
              positionData: m.depth + 0.2 + n.height + n.depth,
              children: [{
                type: "elem",
                elem: n
              }, {
                type: "kern",
                size: 0.2
              }, {
                type: "elem",
                elem: m
              }]
            }, e);
          }
          return v.makeSpan(["mord", s.isOver ? "mover" : "munder"], [h], e);
        };
        q({
          type: "horizBrace",
          names: ["\\overbrace", "\\underbrace"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            return {
              type: "horizBrace",
              mode: r.mode,
              label: n,
              isOver: /^\\over/.test(n),
              base: e[0]
            };
          },
          htmlBuilder: gn,
          mathmlBuilder: (t, e) => {
            const r = me.mathMLnode(t.label);
            return new B.MathNode(t.isOver ? "mover" : "munder", [u0(t.base, e), r]);
          }
        }), q({
          type: "href",
          names: ["\\href"],
          props: {
            numArgs: 2,
            argTypes: ["url", "original"],
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[1], s = $(e[0], "url").url;
            return r.settings.isTrusted({
              command: "\\href",
              url: s
            }) ? {
              type: "href",
              mode: r.mode,
              href: s,
              body: z0(n)
            } : r.formatUnsupportedCmd("\\href");
          },
          htmlBuilder: (t, e) => {
            const r = A0(t.body, e, !1);
            return v.makeAnchor(t.href, [], r, e);
          },
          mathmlBuilder: (t, e) => {
            let r = Se(t.body, e);
            return r instanceof j0 || (r = new j0("mrow", [r])), r.setAttribute("href", t.href), r;
          }
        }), q({
          type: "href",
          names: ["\\url"],
          props: {
            numArgs: 1,
            argTypes: ["url"],
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = $(e[0], "url").url;
            if (!r.settings.isTrusted({
              command: "\\url",
              url: n
            }))
              return r.formatUnsupportedCmd("\\url");
            const s = [];
            for (let c = 0; c < n.length; c++) {
              let h = n[c];
              h === "~" && (h = "\\textasciitilde"), s.push({
                type: "textord",
                mode: "text",
                text: h
              });
            }
            const a = {
              type: "text",
              mode: r.mode,
              font: "\\texttt",
              body: s
            };
            return {
              type: "href",
              mode: r.mode,
              href: n,
              body: z0(a)
            };
          }
        }), q({
          type: "hbox",
          names: ["\\hbox"],
          props: {
            numArgs: 1,
            argTypes: ["text"],
            allowedInText: !0,
            primitive: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "hbox",
              mode: r.mode,
              body: z0(e[0])
            };
          },
          htmlBuilder(t, e) {
            const r = A0(t.body, e, !1);
            return v.makeFragment(r);
          },
          mathmlBuilder(t, e) {
            return new B.MathNode("mrow", P0(t.body, e));
          }
        }), q({
          type: "html",
          names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
          props: {
            numArgs: 2,
            argTypes: ["raw", "original"],
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n,
              token: s
            } = t;
            const a = $(e[0], "raw").string, c = e[1];
            r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
            let h;
            const m = {};
            switch (n) {
              case "\\htmlClass":
                m.class = a, h = {
                  command: "\\htmlClass",
                  class: a
                };
                break;
              case "\\htmlId":
                m.id = a, h = {
                  command: "\\htmlId",
                  id: a
                };
                break;
              case "\\htmlStyle":
                m.style = a, h = {
                  command: "\\htmlStyle",
                  style: a
                };
                break;
              case "\\htmlData": {
                const p = a.split(",");
                for (let y = 0; y < p.length; y++) {
                  const x = p[y].split("=");
                  if (x.length !== 2)
                    throw new w("Error parsing key-value for \\htmlData");
                  m["data-" + x[0].trim()] = x[1].trim();
                }
                h = {
                  command: "\\htmlData",
                  attributes: m
                };
                break;
              }
              default:
                throw new Error("Unrecognized html command");
            }
            return r.settings.isTrusted(h) ? {
              type: "html",
              mode: r.mode,
              attributes: m,
              body: z0(c)
            } : r.formatUnsupportedCmd(n);
          },
          htmlBuilder: (t, e) => {
            const r = A0(t.body, e, !1), n = ["enclosing"];
            t.attributes.class && n.push(...t.attributes.class.trim().split(/\s+/));
            const s = v.makeSpan(n, r, e);
            for (const a in t.attributes)
              a !== "class" && t.attributes.hasOwnProperty(a) && s.setAttribute(a, t.attributes[a]);
            return s;
          },
          mathmlBuilder: (t, e) => Se(t.body, e)
        }), q({
          type: "htmlmathml",
          names: ["\\html@mathml"],
          props: {
            numArgs: 2,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            return {
              type: "htmlmathml",
              mode: r.mode,
              html: z0(e[0]),
              mathml: z0(e[1])
            };
          },
          htmlBuilder: (t, e) => {
            const r = A0(t.html, e, !1);
            return v.makeFragment(r);
          },
          mathmlBuilder: (t, e) => Se(t.mathml, e)
        });
        const pr = function(t) {
          if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
            return {
              number: +t,
              unit: "bp"
            };
          {
            const e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
            if (!e)
              throw new w("Invalid size: '" + t + "' in \\includegraphics");
            const r = {
              number: +(e[1] + e[2]),
              // sign + magnitude, cast to number
              unit: e[3]
            };
            if (!wt(r))
              throw new w("Invalid unit: '" + r.unit + "' in \\includegraphics.");
            return r;
          }
        };
        q({
          type: "includegraphics",
          names: ["\\includegraphics"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1,
            argTypes: ["raw", "url"],
            allowedInText: !1
          },
          handler: (t, e, r) => {
            let {
              parser: n
            } = t, s = {
              number: 0,
              unit: "em"
            }, a = {
              number: 0.9,
              unit: "em"
            }, c = {
              number: 0,
              unit: "em"
            }, h = "";
            if (r[0]) {
              const y = $(r[0], "raw").string.split(",");
              for (let x = 0; x < y.length; x++) {
                const k = y[x].split("=");
                if (k.length === 2) {
                  const C = k[1].trim();
                  switch (k[0].trim()) {
                    case "alt":
                      h = C;
                      break;
                    case "width":
                      s = pr(C);
                      break;
                    case "height":
                      a = pr(C);
                      break;
                    case "totalheight":
                      c = pr(C);
                      break;
                    default:
                      throw new w("Invalid key: '" + k[0] + "' in \\includegraphics.");
                  }
                }
              }
            }
            const m = $(e[0], "url").url;
            return h === "" && (h = m, h = h.replace(/^.*[\\/]/, ""), h = h.substring(0, h.lastIndexOf("."))), n.settings.isTrusted({
              command: "\\includegraphics",
              url: m
            }) ? {
              type: "includegraphics",
              mode: n.mode,
              alt: h,
              width: s,
              height: a,
              totalheight: c,
              src: m
            } : n.formatUnsupportedCmd("\\includegraphics");
          },
          htmlBuilder: (t, e) => {
            const r = f0(t.height, e);
            let n = 0;
            t.totalheight.number > 0 && (n = f0(t.totalheight, e) - r);
            let s = 0;
            t.width.number > 0 && (s = f0(t.width, e));
            const a = {
              height: E(r + n)
            };
            s > 0 && (a.width = E(s)), n > 0 && (a.verticalAlign = E(-n));
            const c = new Ze(t.src, t.alt, a);
            return c.height = r, c.depth = n, c;
          },
          mathmlBuilder: (t, e) => {
            const r = new B.MathNode("mglyph", []);
            r.setAttribute("alt", t.alt);
            const n = f0(t.height, e);
            let s = 0;
            if (t.totalheight.number > 0 && (s = f0(t.totalheight, e) - n, r.setAttribute("valign", E(-s))), r.setAttribute("height", E(n + s)), t.width.number > 0) {
              const a = f0(t.width, e);
              r.setAttribute("width", E(a));
            }
            return r.setAttribute("src", t.src), r;
          }
        }), q({
          type: "kern",
          names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
          props: {
            numArgs: 1,
            argTypes: ["size"],
            primitive: !0,
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = $(e[0], "size");
            if (r.settings.strict) {
              const a = n[1] === "m", c = s.value.unit === "mu";
              a ? (c || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + s.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : c && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
            }
            return {
              type: "kern",
              mode: r.mode,
              dimension: s.value
            };
          },
          htmlBuilder(t, e) {
            return v.makeGlue(t.dimension, e);
          },
          mathmlBuilder(t, e) {
            const r = f0(t.dimension, e);
            return new B.SpaceNode(r);
          }
        }), q({
          type: "lap",
          names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "lap",
              mode: r.mode,
              alignment: n.slice(5),
              body: s
            };
          },
          htmlBuilder: (t, e) => {
            let r;
            t.alignment === "clap" ? (r = v.makeSpan([], [s0(t.body, e)]), r = v.makeSpan(["inner"], [r], e)) : r = v.makeSpan(["inner"], [s0(t.body, e)]);
            const n = v.makeSpan(["fix"], []);
            let s = v.makeSpan([t.alignment], [r, n], e);
            const a = v.makeSpan(["strut"]);
            return a.style.height = E(s.height + s.depth), s.depth && (a.style.verticalAlign = E(-s.depth)), s.children.unshift(a), s = v.makeSpan(["thinbox"], [s], e), v.makeSpan(["mord", "vbox"], [s], e);
          },
          mathmlBuilder: (t, e) => {
            const r = new B.MathNode("mpadded", [u0(t.body, e)]);
            if (t.alignment !== "rlap") {
              const n = t.alignment === "llap" ? "-1" : "-0.5";
              r.setAttribute("lspace", n + "width");
            }
            return r.setAttribute("width", "0px"), r;
          }
        }), q({
          type: "styling",
          names: ["\\(", "$"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !1
          },
          handler(t, e) {
            let {
              funcName: r,
              parser: n
            } = t;
            const s = n.mode;
            n.switchMode("math");
            const a = r === "\\(" ? "\\)" : "$", c = n.parseExpression(!1, a);
            return n.expect(a), n.switchMode(s), {
              type: "styling",
              mode: n.mode,
              style: "text",
              body: c
            };
          }
        }), q({
          type: "text",
          // Doesn't matter what this is.
          names: ["\\)", "\\]"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !1
          },
          handler(t, e) {
            throw new w("Mismatched " + t.funcName);
          }
        });
        const bn = (t, e) => {
          switch (e.style.size) {
            case F.DISPLAY.size:
              return t.display;
            case F.TEXT.size:
              return t.text;
            case F.SCRIPT.size:
              return t.script;
            case F.SCRIPTSCRIPT.size:
              return t.scriptscript;
            default:
              return t.text;
          }
        };
        q({
          type: "mathchoice",
          names: ["\\mathchoice"],
          props: {
            numArgs: 4,
            primitive: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            return {
              type: "mathchoice",
              mode: r.mode,
              display: z0(e[0]),
              text: z0(e[1]),
              script: z0(e[2]),
              scriptscript: z0(e[3])
            };
          },
          htmlBuilder: (t, e) => {
            const r = bn(t, e), n = A0(r, e, !1);
            return v.makeFragment(n);
          },
          mathmlBuilder: (t, e) => {
            const r = bn(t, e);
            return Se(r, e);
          }
        });
        const yn = (t, e, r, n, s, a, c) => {
          t = v.makeSpan([], [t]);
          const h = r && O.isCharacterBox(r);
          let m, p;
          if (e) {
            const k = s0(e, n.havingStyle(s.sup()), n);
            p = {
              elem: k,
              kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - k.depth)
            };
          }
          if (r) {
            const k = s0(r, n.havingStyle(s.sub()), n);
            m = {
              elem: k,
              kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - k.height)
            };
          }
          let y;
          if (p && m) {
            const k = n.fontMetrics().bigOpSpacing5 + m.elem.height + m.elem.depth + m.kern + t.depth + c;
            y = v.makeVList({
              positionType: "bottom",
              positionData: k,
              children: [{
                type: "kern",
                size: n.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: m.elem,
                marginLeft: E(-a)
              }, {
                type: "kern",
                size: m.kern
              }, {
                type: "elem",
                elem: t
              }, {
                type: "kern",
                size: p.kern
              }, {
                type: "elem",
                elem: p.elem,
                marginLeft: E(a)
              }, {
                type: "kern",
                size: n.fontMetrics().bigOpSpacing5
              }]
            }, n);
          } else if (m) {
            const k = t.height - c;
            y = v.makeVList({
              positionType: "top",
              positionData: k,
              children: [{
                type: "kern",
                size: n.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: m.elem,
                marginLeft: E(-a)
              }, {
                type: "kern",
                size: m.kern
              }, {
                type: "elem",
                elem: t
              }]
            }, n);
          } else if (p) {
            const k = t.depth + c;
            y = v.makeVList({
              positionType: "bottom",
              positionData: k,
              children: [{
                type: "elem",
                elem: t
              }, {
                type: "kern",
                size: p.kern
              }, {
                type: "elem",
                elem: p.elem,
                marginLeft: E(a)
              }, {
                type: "kern",
                size: n.fontMetrics().bigOpSpacing5
              }]
            }, n);
          } else
            return t;
          const x = [y];
          if (m && a !== 0 && !h) {
            const k = v.makeSpan(["mspace"], [], n);
            k.style.marginRight = E(a), x.unshift(k);
          }
          return v.makeSpan(["mop", "op-limits"], x, n);
        }, xn = ["\\smallint"], _e = (t, e) => {
          let r, n, s = !1, a;
          t.type === "supsub" ? (r = t.sup, n = t.sub, a = $(t.base, "op"), s = !0) : a = $(t, "op");
          const c = e.style;
          let h = !1;
          c.size === F.DISPLAY.size && a.symbol && !O.contains(xn, a.name) && (h = !0);
          let m;
          if (a.symbol) {
            const x = h ? "Size2-Regular" : "Size1-Regular";
            let k = "";
            if ((a.name === "\\oiint" || a.name === "\\oiiint") && (k = a.name.slice(1), a.name = k === "oiint" ? "\\iint" : "\\iiint"), m = v.makeSymbol(a.name, x, "math", e, ["mop", "op-symbol", h ? "large-op" : "small-op"]), k.length > 0) {
              const C = m.italic, L = v.staticSvg(k + "Size" + (h ? "2" : "1"), e);
              m = v.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: m,
                  shift: 0
                }, {
                  type: "elem",
                  elem: L,
                  shift: h ? 0.08 : 0
                }]
              }, e), a.name = "\\" + k, m.classes.unshift("mop"), m.italic = C;
            }
          } else if (a.body) {
            const x = A0(a.body, e, !0);
            x.length === 1 && x[0] instanceof q0 ? (m = x[0], m.classes[0] = "mop") : m = v.makeSpan(["mop"], x, e);
          } else {
            const x = [];
            for (let k = 1; k < a.name.length; k++)
              x.push(v.mathsym(a.name[k], a.mode, e));
            m = v.makeSpan(["mop"], x, e);
          }
          let p = 0, y = 0;
          return (m instanceof q0 || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift && (p = (m.height - m.depth) / 2 - e.fontMetrics().axisHeight, y = m.italic), s ? yn(m, r, n, e, c, y, p) : (p && (m.style.position = "relative", m.style.top = E(p)), m);
        }, it = (t, e) => {
          let r;
          if (t.symbol)
            r = new j0("mo", [G0(t.name, t.mode)]), O.contains(xn, t.name) && r.setAttribute("largeop", "false");
          else if (t.body)
            r = new j0("mo", P0(t.body, e));
          else {
            r = new j0("mi", [new nt(t.name.slice(1))]);
            const n = new j0("mo", [G0("⁡", "text")]);
            t.parentIsSupSub ? r = new j0("mrow", [r, n]) : r = qr([r, n]);
          }
          return r;
        }, $s = {
          "∏": "\\prod",
          "∐": "\\coprod",
          "∑": "\\sum",
          "⋀": "\\bigwedge",
          "⋁": "\\bigvee",
          "⋂": "\\bigcap",
          "⋃": "\\bigcup",
          "⨀": "\\bigodot",
          "⨁": "\\bigoplus",
          "⨂": "\\bigotimes",
          "⨄": "\\biguplus",
          "⨆": "\\bigsqcup"
        };
        q({
          type: "op",
          names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
          props: {
            numArgs: 0
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t, s = n;
            return s.length === 1 && (s = $s[s]), {
              type: "op",
              mode: r.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !0,
              name: s
            };
          },
          htmlBuilder: _e,
          mathmlBuilder: it
        }), q({
          type: "op",
          names: ["\\mathop"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[0];
            return {
              type: "op",
              mode: r.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !1,
              body: z0(n)
            };
          },
          htmlBuilder: _e,
          mathmlBuilder: it
        });
        const Us = {
          "∫": "\\int",
          "∬": "\\iint",
          "∭": "\\iiint",
          "∮": "\\oint",
          "∯": "\\oiint",
          "∰": "\\oiiint"
        };
        q({
          type: "op",
          names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
          props: {
            numArgs: 0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t;
            return {
              type: "op",
              mode: e.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !1,
              name: r
            };
          },
          htmlBuilder: _e,
          mathmlBuilder: it
        }), q({
          type: "op",
          names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
          props: {
            numArgs: 0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t;
            return {
              type: "op",
              mode: e.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !1,
              name: r
            };
          },
          htmlBuilder: _e,
          mathmlBuilder: it
        }), q({
          type: "op",
          names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
          props: {
            numArgs: 0
          },
          handler(t) {
            let {
              parser: e,
              funcName: r
            } = t, n = r;
            return n.length === 1 && (n = Us[n]), {
              type: "op",
              mode: e.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !0,
              name: n
            };
          },
          htmlBuilder: _e,
          mathmlBuilder: it
        });
        const wn = (t, e) => {
          let r, n, s = !1, a;
          t.type === "supsub" ? (r = t.sup, n = t.sub, a = $(t.base, "operatorname"), s = !0) : a = $(t, "operatorname");
          let c;
          if (a.body.length > 0) {
            const h = a.body.map((p) => {
              const y = p.text;
              return typeof y == "string" ? {
                type: "textord",
                mode: p.mode,
                text: y
              } : p;
            }), m = A0(h, e.withFont("mathrm"), !0);
            for (let p = 0; p < m.length; p++) {
              const y = m[p];
              y instanceof q0 && (y.text = y.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
            }
            c = v.makeSpan(["mop"], m, e);
          } else
            c = v.makeSpan(["mop"], [], e);
          return s ? yn(c, r, n, e, e.style, 0, 0) : c;
        };
        q({
          type: "operatorname",
          names: ["\\operatorname@", "\\operatornamewithlimits"],
          props: {
            numArgs: 1
          },
          handler: (t, e) => {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "operatorname",
              mode: r.mode,
              body: z0(s),
              alwaysHandleSupSub: n === "\\operatornamewithlimits",
              limits: !1,
              parentIsSupSub: !1
            };
          },
          htmlBuilder: wn,
          mathmlBuilder: (t, e) => {
            let r = P0(t.body, e.withFont("mathrm")), n = !0;
            for (let c = 0; c < r.length; c++) {
              const h = r[c];
              if (!(h instanceof B.SpaceNode)) if (h instanceof B.MathNode)
                switch (h.type) {
                  case "mi":
                  case "mn":
                  case "ms":
                  case "mspace":
                  case "mtext":
                    break;
                  case "mo": {
                    const m = h.children[0];
                    h.children.length === 1 && m instanceof B.TextNode ? m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                    break;
                  }
                  default:
                    n = !1;
                }
              else
                n = !1;
            }
            if (n) {
              const c = r.map((h) => h.toText()).join("");
              r = [new B.TextNode(c)];
            }
            const s = new B.MathNode("mi", r);
            s.setAttribute("mathvariant", "normal");
            const a = new B.MathNode("mo", [G0("⁡", "text")]);
            return t.parentIsSupSub ? new B.MathNode("mrow", [s, a]) : B.newDocumentFragment([s, a]);
          }
        }), d("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), Re({
          type: "ordgroup",
          htmlBuilder(t, e) {
            return t.semisimple ? v.makeFragment(A0(t.body, e, !1)) : v.makeSpan(["mord"], A0(t.body, e, !0), e);
          },
          mathmlBuilder(t, e) {
            return Se(t.body, e, !0);
          }
        }), q({
          type: "overline",
          names: ["\\overline"],
          props: {
            numArgs: 1
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            const n = e[0];
            return {
              type: "overline",
              mode: r.mode,
              body: n
            };
          },
          htmlBuilder(t, e) {
            const r = s0(t.body, e.havingCrampedStyle()), n = v.makeLineSpan("overline-line", e), s = e.fontMetrics().defaultRuleThickness, a = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r
              }, {
                type: "kern",
                size: 3 * s
              }, {
                type: "elem",
                elem: n
              }, {
                type: "kern",
                size: s
              }]
            }, e);
            return v.makeSpan(["mord", "overline"], [a], e);
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mo", [new B.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            const n = new B.MathNode("mover", [u0(t.body, e), r]);
            return n.setAttribute("accent", "true"), n;
          }
        }), q({
          type: "phantom",
          names: ["\\phantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[0];
            return {
              type: "phantom",
              mode: r.mode,
              body: z0(n)
            };
          },
          htmlBuilder: (t, e) => {
            const r = A0(t.body, e.withPhantom(), !1);
            return v.makeFragment(r);
          },
          mathmlBuilder: (t, e) => {
            const r = P0(t.body, e);
            return new B.MathNode("mphantom", r);
          }
        }), q({
          type: "hphantom",
          names: ["\\hphantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[0];
            return {
              type: "hphantom",
              mode: r.mode,
              body: n
            };
          },
          htmlBuilder: (t, e) => {
            let r = v.makeSpan([], [s0(t.body, e.withPhantom())]);
            if (r.height = 0, r.depth = 0, r.children)
              for (let n = 0; n < r.children.length; n++)
                r.children[n].height = 0, r.children[n].depth = 0;
            return r = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r
              }]
            }, e), v.makeSpan(["mord"], [r], e);
          },
          mathmlBuilder: (t, e) => {
            const r = P0(z0(t.body), e), n = new B.MathNode("mphantom", r), s = new B.MathNode("mpadded", [n]);
            return s.setAttribute("height", "0px"), s.setAttribute("depth", "0px"), s;
          }
        }), q({
          type: "vphantom",
          names: ["\\vphantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              parser: r
            } = t;
            const n = e[0];
            return {
              type: "vphantom",
              mode: r.mode,
              body: n
            };
          },
          htmlBuilder: (t, e) => {
            const r = v.makeSpan(["inner"], [s0(t.body, e.withPhantom())]), n = v.makeSpan(["fix"], []);
            return v.makeSpan(["mord", "rlap"], [r, n], e);
          },
          mathmlBuilder: (t, e) => {
            const r = P0(z0(t.body), e), n = new B.MathNode("mphantom", r), s = new B.MathNode("mpadded", [n]);
            return s.setAttribute("width", "0px"), s;
          }
        }), q({
          type: "raisebox",
          names: ["\\raisebox"],
          props: {
            numArgs: 2,
            argTypes: ["size", "hbox"],
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            const n = $(e[0], "size").value, s = e[1];
            return {
              type: "raisebox",
              mode: r.mode,
              dy: n,
              body: s
            };
          },
          htmlBuilder(t, e) {
            const r = s0(t.body, e), n = f0(t.dy, e);
            return v.makeVList({
              positionType: "shift",
              positionData: -n,
              children: [{
                type: "elem",
                elem: r
              }]
            }, e);
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mpadded", [u0(t.body, e)]), n = t.dy.number + t.dy.unit;
            return r.setAttribute("voffset", n), r;
          }
        }), q({
          type: "internal",
          names: ["\\relax"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler(t) {
            let {
              parser: e
            } = t;
            return {
              type: "internal",
              mode: e.mode
            };
          }
        }), q({
          type: "rule",
          names: ["\\rule"],
          props: {
            numArgs: 2,
            numOptionalArgs: 1,
            argTypes: ["size", "size", "size"]
          },
          handler(t, e, r) {
            let {
              parser: n
            } = t;
            const s = r[0], a = $(e[0], "size"), c = $(e[1], "size");
            return {
              type: "rule",
              mode: n.mode,
              shift: s && $(s, "size").value,
              width: a.value,
              height: c.value
            };
          },
          htmlBuilder(t, e) {
            const r = v.makeSpan(["mord", "rule"], [], e), n = f0(t.width, e), s = f0(t.height, e), a = t.shift ? f0(t.shift, e) : 0;
            return r.style.borderRightWidth = E(n), r.style.borderTopWidth = E(s), r.style.bottom = E(a), r.width = n, r.height = s + a, r.depth = -a, r.maxFontSize = s * 1.125 * e.sizeMultiplier, r;
          },
          mathmlBuilder(t, e) {
            const r = f0(t.width, e), n = f0(t.height, e), s = t.shift ? f0(t.shift, e) : 0, a = e.color && e.getColor() || "black", c = new B.MathNode("mspace");
            c.setAttribute("mathbackground", a), c.setAttribute("width", E(r)), c.setAttribute("height", E(n));
            const h = new B.MathNode("mpadded", [c]);
            return s >= 0 ? h.setAttribute("height", E(s)) : (h.setAttribute("height", E(s)), h.setAttribute("depth", E(-s))), h.setAttribute("voffset", E(s)), h;
          }
        });
        function vn(t, e, r) {
          const n = A0(t, e, !1), s = e.sizeMultiplier / r.sizeMultiplier;
          for (let a = 0; a < n.length; a++) {
            const c = n[a].classes.indexOf("sizing");
            c < 0 ? Array.prototype.push.apply(n[a].classes, e.sizingClasses(r)) : n[a].classes[c + 1] === "reset-size" + e.size && (n[a].classes[c + 1] = "reset-size" + r.size), n[a].height *= s, n[a].depth *= s;
          }
          return v.makeFragment(n);
        }
        const kn = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
        q({
          type: "sizing",
          names: kn,
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: (t, e) => {
            let {
              breakOnTokenText: r,
              funcName: n,
              parser: s
            } = t;
            const a = s.parseExpression(!1, r);
            return {
              type: "sizing",
              mode: s.mode,
              // Figure out what size to use based on the list of functions above
              size: kn.indexOf(n) + 1,
              body: a
            };
          },
          htmlBuilder: (t, e) => {
            const r = e.havingSize(t.size);
            return vn(t.body, r, e);
          },
          mathmlBuilder: (t, e) => {
            const r = e.havingSize(t.size), n = P0(t.body, r), s = new B.MathNode("mstyle", n);
            return s.setAttribute("mathsize", E(r.sizeMultiplier)), s;
          }
        }), q({
          type: "smash",
          names: ["\\smash"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1,
            allowedInText: !0
          },
          handler: (t, e, r) => {
            let {
              parser: n
            } = t, s = !1, a = !1;
            const c = r[0] && $(r[0], "ordgroup");
            if (c) {
              let m = "";
              for (let p = 0; p < c.body.length; ++p)
                if (m = c.body[p].text, m === "t")
                  s = !0;
                else if (m === "b")
                  a = !0;
                else {
                  s = !1, a = !1;
                  break;
                }
            } else
              s = !0, a = !0;
            const h = e[0];
            return {
              type: "smash",
              mode: n.mode,
              body: h,
              smashHeight: s,
              smashDepth: a
            };
          },
          htmlBuilder: (t, e) => {
            const r = v.makeSpan([], [s0(t.body, e)]);
            if (!t.smashHeight && !t.smashDepth)
              return r;
            if (t.smashHeight && (r.height = 0, r.children))
              for (let s = 0; s < r.children.length; s++)
                r.children[s].height = 0;
            if (t.smashDepth && (r.depth = 0, r.children))
              for (let s = 0; s < r.children.length; s++)
                r.children[s].depth = 0;
            const n = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r
              }]
            }, e);
            return v.makeSpan(["mord"], [n], e);
          },
          mathmlBuilder: (t, e) => {
            const r = new B.MathNode("mpadded", [u0(t.body, e)]);
            return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r;
          }
        }), q({
          type: "sqrt",
          names: ["\\sqrt"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1
          },
          handler(t, e, r) {
            let {
              parser: n
            } = t;
            const s = r[0], a = e[0];
            return {
              type: "sqrt",
              mode: n.mode,
              body: a,
              index: s
            };
          },
          htmlBuilder(t, e) {
            let r = s0(t.body, e.havingCrampedStyle());
            r.height === 0 && (r.height = e.fontMetrics().xHeight), r = v.wrapFragment(r, e);
            const s = e.fontMetrics().defaultRuleThickness;
            let a = s;
            e.style.id < F.TEXT.id && (a = e.fontMetrics().xHeight);
            let c = s + a / 4;
            const h = r.height + r.depth + c + s, {
              span: m,
              ruleWidth: p,
              advanceWidth: y
            } = fe.sqrtImage(h, e), x = m.height - p;
            x > r.height + r.depth + c && (c = (c + x - r.height - r.depth) / 2);
            const k = m.height - r.height - c - p;
            r.style.paddingLeft = E(y);
            const C = v.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r,
                wrapperClasses: ["svg-align"]
              }, {
                type: "kern",
                size: -(r.height + k)
              }, {
                type: "elem",
                elem: m
              }, {
                type: "kern",
                size: p
              }]
            }, e);
            if (t.index) {
              const L = e.havingStyle(F.SCRIPTSCRIPT), _ = s0(t.index, L, e), Q = 0.6 * (C.height - C.depth), Y = v.makeVList({
                positionType: "shift",
                positionData: -Q,
                children: [{
                  type: "elem",
                  elem: _
                }]
              }, e), r0 = v.makeSpan(["root"], [Y]);
              return v.makeSpan(["mord", "sqrt"], [r0, C], e);
            } else
              return v.makeSpan(["mord", "sqrt"], [C], e);
          },
          mathmlBuilder(t, e) {
            const {
              body: r,
              index: n
            } = t;
            return n ? new B.MathNode("mroot", [u0(r, e), u0(n, e)]) : new B.MathNode("msqrt", [u0(r, e)]);
          }
        });
        const Sn = {
          display: F.DISPLAY,
          text: F.TEXT,
          script: F.SCRIPT,
          scriptscript: F.SCRIPTSCRIPT
        };
        q({
          type: "styling",
          names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler(t, e) {
            let {
              breakOnTokenText: r,
              funcName: n,
              parser: s
            } = t;
            const a = s.parseExpression(!0, r), c = n.slice(1, n.length - 5);
            return {
              type: "styling",
              mode: s.mode,
              // Figure out what style to use by pulling out the style from
              // the function name
              style: c,
              body: a
            };
          },
          htmlBuilder(t, e) {
            const r = Sn[t.style], n = e.havingStyle(r).withFont("");
            return vn(t.body, n, e);
          },
          mathmlBuilder(t, e) {
            const r = Sn[t.style], n = e.havingStyle(r), s = P0(t.body, n), a = new B.MathNode("mstyle", s), h = {
              display: ["0", "true"],
              text: ["0", "false"],
              script: ["1", "false"],
              scriptscript: ["2", "false"]
            }[t.style];
            return a.setAttribute("scriptlevel", h[0]), a.setAttribute("displaystyle", h[1]), a;
          }
        });
        const Ys = function(t, e) {
          const r = t.base;
          return r ? r.type === "op" ? r.limits && (e.style.size === F.DISPLAY.size || r.alwaysHandleSupSub) ? _e : null : r.type === "operatorname" ? r.alwaysHandleSupSub && (e.style.size === F.DISPLAY.size || r.limits) ? wn : null : r.type === "accent" ? O.isCharacterBox(r.base) ? er : null : r.type === "horizBrace" && !t.sub === r.isOver ? gn : null : null;
        };
        Re({
          type: "supsub",
          htmlBuilder(t, e) {
            const r = Ys(t, e);
            if (r)
              return r(t, e);
            const {
              base: n,
              sup: s,
              sub: a
            } = t, c = s0(n, e);
            let h, m;
            const p = e.fontMetrics();
            let y = 0, x = 0;
            const k = n && O.isCharacterBox(n);
            if (s) {
              const i0 = e.havingStyle(e.style.sup());
              h = s0(s, i0, e), k || (y = c.height - i0.fontMetrics().supDrop * i0.sizeMultiplier / e.sizeMultiplier);
            }
            if (a) {
              const i0 = e.havingStyle(e.style.sub());
              m = s0(a, i0, e), k || (x = c.depth + i0.fontMetrics().subDrop * i0.sizeMultiplier / e.sizeMultiplier);
            }
            let C;
            e.style === F.DISPLAY ? C = p.sup1 : e.style.cramped ? C = p.sup3 : C = p.sup2;
            const L = e.sizeMultiplier, _ = E(0.5 / p.ptPerEm / L);
            let Q = null;
            if (m) {
              const i0 = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
              (c instanceof q0 || i0) && (Q = E(-c.italic));
            }
            let Y;
            if (h && m) {
              y = Math.max(y, C, h.depth + 0.25 * p.xHeight), x = Math.max(x, p.sub2);
              const d0 = 4 * p.defaultRuleThickness;
              if (y - h.depth - (m.height - x) < d0) {
                x = d0 - (y - h.depth) + m.height;
                const C0 = 0.8 * p.xHeight - (y - h.depth);
                C0 > 0 && (y += C0, x -= C0);
              }
              const I0 = [{
                type: "elem",
                elem: m,
                shift: x,
                marginRight: _,
                marginLeft: Q
              }, {
                type: "elem",
                elem: h,
                shift: -y,
                marginRight: _
              }];
              Y = v.makeVList({
                positionType: "individualShift",
                children: I0
              }, e);
            } else if (m) {
              x = Math.max(x, p.sub1, m.height - 0.8 * p.xHeight);
              const i0 = [{
                type: "elem",
                elem: m,
                marginLeft: Q,
                marginRight: _
              }];
              Y = v.makeVList({
                positionType: "shift",
                positionData: x,
                children: i0
              }, e);
            } else if (h)
              y = Math.max(y, C, h.depth + 0.25 * p.xHeight), Y = v.makeVList({
                positionType: "shift",
                positionData: -y,
                children: [{
                  type: "elem",
                  elem: h,
                  marginRight: _
                }]
              }, e);
            else
              throw new Error("supsub must have either sup or sub.");
            const r0 = Xt(c, "right") || "mord";
            return v.makeSpan([r0], [c, v.makeSpan(["msupsub"], [Y])], e);
          },
          mathmlBuilder(t, e) {
            let r = !1, n, s;
            t.base && t.base.type === "horizBrace" && (s = !!t.sup, s === t.base.isOver && (r = !0, n = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = !0);
            const a = [u0(t.base, e)];
            t.sub && a.push(u0(t.sub, e)), t.sup && a.push(u0(t.sup, e));
            let c;
            if (r)
              c = n ? "mover" : "munder";
            else if (t.sub)
              if (t.sup) {
                const h = t.base;
                h && h.type === "op" && h.limits && e.style === F.DISPLAY || h && h.type === "operatorname" && h.alwaysHandleSupSub && (e.style === F.DISPLAY || h.limits) ? c = "munderover" : c = "msubsup";
              } else {
                const h = t.base;
                h && h.type === "op" && h.limits && (e.style === F.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === F.DISPLAY) ? c = "munder" : c = "msub";
              }
            else {
              const h = t.base;
              h && h.type === "op" && h.limits && (e.style === F.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === F.DISPLAY) ? c = "mover" : c = "msup";
            }
            return new B.MathNode(c, a);
          }
        }), Re({
          type: "atom",
          htmlBuilder(t, e) {
            return v.mathsym(t.text, t.mode, e, ["m" + t.family]);
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mo", [G0(t.text, t.mode)]);
            if (t.family === "bin") {
              const n = Jt(t, e);
              n === "bold-italic" && r.setAttribute("mathvariant", n);
            } else t.family === "punct" ? r.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && r.setAttribute("stretchy", "false");
            return r;
          }
        });
        const Mn = {
          mi: "italic",
          mn: "normal",
          mtext: "normal"
        };
        Re({
          type: "mathord",
          htmlBuilder(t, e) {
            return v.makeOrd(t, e, "mathord");
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mi", [G0(t.text, t.mode, e)]), n = Jt(t, e) || "italic";
            return n !== Mn[r.type] && r.setAttribute("mathvariant", n), r;
          }
        }), Re({
          type: "textord",
          htmlBuilder(t, e) {
            return v.makeOrd(t, e, "textord");
          },
          mathmlBuilder(t, e) {
            const r = G0(t.text, t.mode, e), n = Jt(t, e) || "normal";
            let s;
            return t.mode === "text" ? s = new B.MathNode("mtext", [r]) : /[0-9]/.test(t.text) ? s = new B.MathNode("mn", [r]) : t.text === "\\prime" ? s = new B.MathNode("mo", [r]) : s = new B.MathNode("mi", [r]), n !== Mn[s.type] && s.setAttribute("mathvariant", n), s;
          }
        });
        const gr = {
          "\\nobreak": "nobreak",
          "\\allowbreak": "allowbreak"
        }, br = {
          " ": {},
          "\\ ": {},
          "~": {
            className: "nobreak"
          },
          "\\space": {},
          "\\nobreakspace": {
            className: "nobreak"
          }
        };
        Re({
          type: "spacing",
          htmlBuilder(t, e) {
            if (br.hasOwnProperty(t.text)) {
              const r = br[t.text].className || "";
              if (t.mode === "text") {
                const n = v.makeOrd(t, e, "textord");
                return n.classes.push(r), n;
              } else
                return v.makeSpan(["mspace", r], [v.mathsym(t.text, t.mode, e)], e);
            } else {
              if (gr.hasOwnProperty(t.text))
                return v.makeSpan(["mspace", gr[t.text]], [], e);
              throw new w('Unknown type of space "' + t.text + '"');
            }
          },
          mathmlBuilder(t, e) {
            let r;
            if (br.hasOwnProperty(t.text))
              r = new B.MathNode("mtext", [new B.TextNode(" ")]);
            else {
              if (gr.hasOwnProperty(t.text))
                return new B.MathNode("mspace");
              throw new w('Unknown type of space "' + t.text + '"');
            }
            return r;
          }
        });
        const zn = () => {
          const t = new B.MathNode("mtd", []);
          return t.setAttribute("width", "50%"), t;
        };
        Re({
          type: "tag",
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mtable", [new B.MathNode("mtr", [zn(), new B.MathNode("mtd", [Se(t.body, e)]), zn(), new B.MathNode("mtd", [Se(t.tag, e)])])]);
            return r.setAttribute("width", "100%"), r;
          }
        });
        const Tn = {
          "\\text": void 0,
          "\\textrm": "textrm",
          "\\textsf": "textsf",
          "\\texttt": "texttt",
          "\\textnormal": "textrm"
        }, An = {
          "\\textbf": "textbf",
          "\\textmd": "textmd"
        }, Xs = {
          "\\textit": "textit",
          "\\textup": "textup"
        }, Cn = (t, e) => {
          const r = t.font;
          return r ? Tn[r] ? e.withTextFontFamily(Tn[r]) : An[r] ? e.withTextFontWeight(An[r]) : e.withTextFontShape(Xs[r]) : e;
        };
        q({
          type: "text",
          names: [
            // Font families
            "\\text",
            "\\textrm",
            "\\textsf",
            "\\texttt",
            "\\textnormal",
            // Font weights
            "\\textbf",
            "\\textmd",
            // Font Shapes
            "\\textit",
            "\\textup"
          ],
          props: {
            numArgs: 1,
            argTypes: ["text"],
            allowedInArgument: !0,
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r,
              funcName: n
            } = t;
            const s = e[0];
            return {
              type: "text",
              mode: r.mode,
              body: z0(s),
              font: n
            };
          },
          htmlBuilder(t, e) {
            const r = Cn(t, e), n = A0(t.body, r, !0);
            return v.makeSpan(["mord", "text"], n, r);
          },
          mathmlBuilder(t, e) {
            const r = Cn(t, e);
            return Se(t.body, r);
          }
        }), q({
          type: "underline",
          names: ["\\underline"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "underline",
              mode: r.mode,
              body: e[0]
            };
          },
          htmlBuilder(t, e) {
            const r = s0(t.body, e), n = v.makeLineSpan("underline-line", e), s = e.fontMetrics().defaultRuleThickness, a = v.makeVList({
              positionType: "top",
              positionData: r.height,
              children: [{
                type: "kern",
                size: s
              }, {
                type: "elem",
                elem: n
              }, {
                type: "kern",
                size: 3 * s
              }, {
                type: "elem",
                elem: r
              }]
            }, e);
            return v.makeSpan(["mord", "underline"], [a], e);
          },
          mathmlBuilder(t, e) {
            const r = new B.MathNode("mo", [new B.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            const n = new B.MathNode("munder", [u0(t.body, e), r]);
            return n.setAttribute("accentunder", "true"), n;
          }
        }), q({
          type: "vcenter",
          names: ["\\vcenter"],
          props: {
            numArgs: 1,
            argTypes: ["original"],
            // In LaTeX, \vcenter can act only on a box.
            allowedInText: !1
          },
          handler(t, e) {
            let {
              parser: r
            } = t;
            return {
              type: "vcenter",
              mode: r.mode,
              body: e[0]
            };
          },
          htmlBuilder(t, e) {
            const r = s0(t.body, e), n = e.fontMetrics().axisHeight, s = 0.5 * (r.height - n - (r.depth + n));
            return v.makeVList({
              positionType: "shift",
              positionData: s,
              children: [{
                type: "elem",
                elem: r
              }]
            }, e);
          },
          mathmlBuilder(t, e) {
            return new B.MathNode("mpadded", [u0(t.body, e)], ["vcenter"]);
          }
        }), q({
          type: "verb",
          names: ["\\verb"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler(t, e, r) {
            throw new w("\\verb ended by end of line instead of matching delimiter");
          },
          htmlBuilder(t, e) {
            const r = Nn(t), n = [], s = e.havingStyle(e.style.text());
            for (let a = 0; a < r.length; a++) {
              let c = r[a];
              c === "~" && (c = "\\textasciitilde"), n.push(v.makeSymbol(c, "Typewriter-Regular", t.mode, s, ["mord", "texttt"]));
            }
            return v.makeSpan(["mord", "text"].concat(s.sizingClasses(e)), v.tryCombineChars(n), s);
          },
          mathmlBuilder(t, e) {
            const r = new B.TextNode(Nn(t)), n = new B.MathNode("mtext", [r]);
            return n.setAttribute("mathvariant", "monospace"), n;
          }
        });
        const Nn = (t) => t.body.replace(/ /g, t.star ? "␣" : " ");
        var ze = Rr;
        const Bn = `[ \r
	]`, Ks = "\\\\[a-zA-Z@]+", Zs = "\\\\[^\uD800-\uDFFF]", Js = "(" + Ks + ")" + Bn + "*", Qs = `\\\\(
|[ \r	]+
?)[ \r	]*`, yr = "[̀-ͯ]", eo = new RegExp(yr + "+$"), to = "(" + Bn + "+)|" + // whitespace
        (Qs + "|") + // \whitespace
        "([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
        (yr + "*") + // ...plus accents
        "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
        (yr + "*") + // ...plus accents
        "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
        ("|" + Js) + // \macroName + spaces
        ("|" + Zs + ")");
        class En {
          // Category codes. The lexer only supports comment characters (14) for now.
          // MacroExpander additionally distinguishes active (13).
          constructor(e, r) {
            this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = r, this.tokenRegex = new RegExp(to, "g"), this.catcodes = {
              "%": 14,
              // comment character
              "~": 13
              // active character
            };
          }
          setCatcode(e, r) {
            this.catcodes[e] = r;
          }
          /**
           * This function lexes a single token.
           */
          lex() {
            const e = this.input, r = this.tokenRegex.lastIndex;
            if (r === e.length)
              return new V0("EOF", new H0(this, r, r));
            const n = this.tokenRegex.exec(e);
            if (n === null || n.index !== r)
              throw new w("Unexpected character: '" + e[r] + "'", new V0(e[r], new H0(this, r, r + 1)));
            const s = n[6] || n[3] || (n[2] ? "\\ " : " ");
            if (this.catcodes[s] === 14) {
              const a = e.indexOf(`
`, this.tokenRegex.lastIndex);
              return a === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex();
            }
            return new V0(s, new H0(this, r, this.tokenRegex.lastIndex));
          }
        }
        class ro {
          /**
           * Both arguments are optional.  The first argument is an object of
           * built-in mappings which never change.  The second argument is an object
           * of initial (global-level) mappings, which will constantly change
           * according to any global/top-level `set`s done.
           */
          constructor(e, r) {
            e === void 0 && (e = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = e, this.undefStack = [];
          }
          /**
           * Start a new nested group, affecting future local `set`s.
           */
          beginGroup() {
            this.undefStack.push({});
          }
          /**
           * End current nested group, restoring values before the group began.
           */
          endGroup() {
            if (this.undefStack.length === 0)
              throw new w("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
            const e = this.undefStack.pop();
            for (const r in e)
              e.hasOwnProperty(r) && (e[r] == null ? delete this.current[r] : this.current[r] = e[r]);
          }
          /**
           * Ends all currently nested groups (if any), restoring values before the
           * groups began.  Useful in case of an error in the middle of parsing.
           */
          endGroups() {
            for (; this.undefStack.length > 0; )
              this.endGroup();
          }
          /**
           * Detect whether `name` has a definition.  Equivalent to
           * `get(name) != null`.
           */
          has(e) {
            return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
          }
          /**
           * Get the current value of a name, or `undefined` if there is no value.
           *
           * Note: Do not use `if (namespace.get(...))` to detect whether a macro
           * is defined, as the definition may be the empty string which evaluates
           * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
           * `if (namespace.has(...))`.
           */
          get(e) {
            return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
          }
          /**
           * Set the current value of a name, and optionally set it globally too.
           * Local set() sets the current value and (when appropriate) adds an undo
           * operation to the undo stack.  Global set() may change the undo
           * operation at every level, so takes time linear in their number.
           * A value of undefined means to delete existing definitions.
           */
          set(e, r, n) {
            if (n === void 0 && (n = !1), n) {
              for (let s = 0; s < this.undefStack.length; s++)
                delete this.undefStack[s][e];
              this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = r);
            } else {
              const s = this.undefStack[this.undefStack.length - 1];
              s && !s.hasOwnProperty(e) && (s[e] = this.current[e]);
            }
            r == null ? delete this.current[e] : this.current[e] = r;
          }
        }
        var no = on;
        d("\\noexpand", function(t) {
          const e = t.popToken();
          return t.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
            tokens: [e],
            numArgs: 0
          };
        }), d("\\expandafter", function(t) {
          const e = t.popToken();
          return t.expandOnce(!0), {
            tokens: [e],
            numArgs: 0
          };
        }), d("\\@firstoftwo", function(t) {
          return {
            tokens: t.consumeArgs(2)[0],
            numArgs: 0
          };
        }), d("\\@secondoftwo", function(t) {
          return {
            tokens: t.consumeArgs(2)[1],
            numArgs: 0
          };
        }), d("\\@ifnextchar", function(t) {
          const e = t.consumeArgs(3);
          t.consumeSpaces();
          const r = t.future();
          return e[0].length === 1 && e[0][0].text === r.text ? {
            tokens: e[1],
            numArgs: 0
          } : {
            tokens: e[2],
            numArgs: 0
          };
        }), d("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), d("\\TextOrMath", function(t) {
          const e = t.consumeArgs(2);
          return t.mode === "text" ? {
            tokens: e[0],
            numArgs: 0
          } : {
            tokens: e[1],
            numArgs: 0
          };
        });
        const Dn = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15
        };
        d("\\char", function(t) {
          let e = t.popToken(), r, n = "";
          if (e.text === "'")
            r = 8, e = t.popToken();
          else if (e.text === '"')
            r = 16, e = t.popToken();
          else if (e.text === "`")
            if (e = t.popToken(), e.text[0] === "\\")
              n = e.text.charCodeAt(1);
            else {
              if (e.text === "EOF")
                throw new w("\\char` missing argument");
              n = e.text.charCodeAt(0);
            }
          else
            r = 10;
          if (r) {
            if (n = Dn[e.text], n == null || n >= r)
              throw new w("Invalid base-" + r + " digit " + e.text);
            let s;
            for (; (s = Dn[t.future().text]) != null && s < r; )
              n *= r, n += s, t.popToken();
          }
          return "\\@char{" + n + "}";
        });
        const xr = (t, e, r) => {
          let n = t.consumeArg().tokens;
          if (n.length !== 1)
            throw new w("\\newcommand's first argument must be a macro name");
          const s = n[0].text, a = t.isDefined(s);
          if (a && !e)
            throw new w("\\newcommand{" + s + "} attempting to redefine " + (s + "; use \\renewcommand"));
          if (!a && !r)
            throw new w("\\renewcommand{" + s + "} when command " + s + " does not yet exist; use \\newcommand");
          let c = 0;
          if (n = t.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
            let h = "", m = t.expandNextToken();
            for (; m.text !== "]" && m.text !== "EOF"; )
              h += m.text, m = t.expandNextToken();
            if (!h.match(/^\s*[0-9]+\s*$/))
              throw new w("Invalid number of arguments: " + h);
            c = parseInt(h), n = t.consumeArg().tokens;
          }
          return t.macros.set(s, {
            tokens: n,
            numArgs: c
          }), "";
        };
        d("\\newcommand", (t) => xr(t, !1, !0)), d("\\renewcommand", (t) => xr(t, !0, !1)), d("\\providecommand", (t) => xr(t, !0, !0)), d("\\message", (t) => {
          const e = t.consumeArgs(1)[0];
          return console.log(e.reverse().map((r) => r.text).join("")), "";
        }), d("\\errmessage", (t) => {
          const e = t.consumeArgs(1)[0];
          return console.error(e.reverse().map((r) => r.text).join("")), "";
        }), d("\\show", (t) => {
          const e = t.popToken(), r = e.text;
          return console.log(e, t.macros.get(r), ze[r], h0.math[r], h0.text[r]), "";
        }), d("\\bgroup", "{"), d("\\egroup", "}"), d("~", "\\nobreakspace"), d("\\lq", "`"), d("\\rq", "'"), d("\\aa", "\\r a"), d("\\AA", "\\r A"), d("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), d("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), d("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), d("ℬ", "\\mathscr{B}"), d("ℰ", "\\mathscr{E}"), d("ℱ", "\\mathscr{F}"), d("ℋ", "\\mathscr{H}"), d("ℐ", "\\mathscr{I}"), d("ℒ", "\\mathscr{L}"), d("ℳ", "\\mathscr{M}"), d("ℛ", "\\mathscr{R}"), d("ℭ", "\\mathfrak{C}"), d("ℌ", "\\mathfrak{H}"), d("ℨ", "\\mathfrak{Z}"), d("\\Bbbk", "\\Bbb{k}"), d("·", "\\cdotp"), d("\\llap", "\\mathllap{\\textrm{#1}}"), d("\\rlap", "\\mathrlap{\\textrm{#1}}"), d("\\clap", "\\mathclap{\\textrm{#1}}"), d("\\mathstrut", "\\vphantom{(}"), d("\\underbar", "\\underline{\\text{#1}}"), d("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), d("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), d("\\ne", "\\neq"), d("≠", "\\neq"), d("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), d("∉", "\\notin"), d("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), d("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), d("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), d("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), d("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), d("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), d("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), d("⟂", "\\perp"), d("‼", "\\mathclose{!\\mkern-0.8mu!}"), d("∌", "\\notni"), d("⌜", "\\ulcorner"), d("⌝", "\\urcorner"), d("⌞", "\\llcorner"), d("⌟", "\\lrcorner"), d("©", "\\copyright"), d("®", "\\textregistered"), d("️", "\\textregistered"), d("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), d("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), d("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), d("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), d("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), d("⋮", "\\vdots"), d("\\varGamma", "\\mathit{\\Gamma}"), d("\\varDelta", "\\mathit{\\Delta}"), d("\\varTheta", "\\mathit{\\Theta}"), d("\\varLambda", "\\mathit{\\Lambda}"), d("\\varXi", "\\mathit{\\Xi}"), d("\\varPi", "\\mathit{\\Pi}"), d("\\varSigma", "\\mathit{\\Sigma}"), d("\\varUpsilon", "\\mathit{\\Upsilon}"), d("\\varPhi", "\\mathit{\\Phi}"), d("\\varPsi", "\\mathit{\\Psi}"), d("\\varOmega", "\\mathit{\\Omega}"), d("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), d("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), d("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), d("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), d("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), d("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
        const Rn = {
          ",": "\\dotsc",
          "\\not": "\\dotsb",
          // \keybin@ checks for the following:
          "+": "\\dotsb",
          "=": "\\dotsb",
          "<": "\\dotsb",
          ">": "\\dotsb",
          "-": "\\dotsb",
          "*": "\\dotsb",
          ":": "\\dotsb",
          // Symbols whose definition starts with \DOTSB:
          "\\DOTSB": "\\dotsb",
          "\\coprod": "\\dotsb",
          "\\bigvee": "\\dotsb",
          "\\bigwedge": "\\dotsb",
          "\\biguplus": "\\dotsb",
          "\\bigcap": "\\dotsb",
          "\\bigcup": "\\dotsb",
          "\\prod": "\\dotsb",
          "\\sum": "\\dotsb",
          "\\bigotimes": "\\dotsb",
          "\\bigoplus": "\\dotsb",
          "\\bigodot": "\\dotsb",
          "\\bigsqcup": "\\dotsb",
          "\\And": "\\dotsb",
          "\\longrightarrow": "\\dotsb",
          "\\Longrightarrow": "\\dotsb",
          "\\longleftarrow": "\\dotsb",
          "\\Longleftarrow": "\\dotsb",
          "\\longleftrightarrow": "\\dotsb",
          "\\Longleftrightarrow": "\\dotsb",
          "\\mapsto": "\\dotsb",
          "\\longmapsto": "\\dotsb",
          "\\hookrightarrow": "\\dotsb",
          "\\doteq": "\\dotsb",
          // Symbols whose definition starts with \mathbin:
          "\\mathbin": "\\dotsb",
          // Symbols whose definition starts with \mathrel:
          "\\mathrel": "\\dotsb",
          "\\relbar": "\\dotsb",
          "\\Relbar": "\\dotsb",
          "\\xrightarrow": "\\dotsb",
          "\\xleftarrow": "\\dotsb",
          // Symbols whose definition starts with \DOTSI:
          "\\DOTSI": "\\dotsi",
          "\\int": "\\dotsi",
          "\\oint": "\\dotsi",
          "\\iint": "\\dotsi",
          "\\iiint": "\\dotsi",
          "\\iiiint": "\\dotsi",
          "\\idotsint": "\\dotsi",
          // Symbols whose definition starts with \DOTSX:
          "\\DOTSX": "\\dotsx"
        };
        d("\\dots", function(t) {
          let e = "\\dotso";
          const r = t.expandAfterFuture().text;
          return r in Rn ? e = Rn[r] : (r.slice(0, 4) === "\\not" || r in h0.math && O.contains(["bin", "rel"], h0.math[r].group)) && (e = "\\dotsb"), e;
        });
        const wr = {
          // \rightdelim@ checks for the following:
          ")": !0,
          "]": !0,
          "\\rbrack": !0,
          "\\}": !0,
          "\\rbrace": !0,
          "\\rangle": !0,
          "\\rceil": !0,
          "\\rfloor": !0,
          "\\rgroup": !0,
          "\\rmoustache": !0,
          "\\right": !0,
          "\\bigr": !0,
          "\\biggr": !0,
          "\\Bigr": !0,
          "\\Biggr": !0,
          // \extra@ also tests for the following:
          $: !0,
          // \extrap@ checks for the following:
          ";": !0,
          ".": !0,
          ",": !0
        };
        d("\\dotso", function(t) {
          return t.future().text in wr ? "\\ldots\\," : "\\ldots";
        }), d("\\dotsc", function(t) {
          const e = t.future().text;
          return e in wr && e !== "," ? "\\ldots\\," : "\\ldots";
        }), d("\\cdots", function(t) {
          return t.future().text in wr ? "\\@cdots\\," : "\\@cdots";
        }), d("\\dotsb", "\\cdots"), d("\\dotsm", "\\cdots"), d("\\dotsi", "\\!\\cdots"), d("\\dotsx", "\\ldots\\,"), d("\\DOTSI", "\\relax"), d("\\DOTSB", "\\relax"), d("\\DOTSX", "\\relax"), d("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), d("\\,", "\\tmspace+{3mu}{.1667em}"), d("\\thinspace", "\\,"), d("\\>", "\\mskip{4mu}"), d("\\:", "\\tmspace+{4mu}{.2222em}"), d("\\medspace", "\\:"), d("\\;", "\\tmspace+{5mu}{.2777em}"), d("\\thickspace", "\\;"), d("\\!", "\\tmspace-{3mu}{.1667em}"), d("\\negthinspace", "\\!"), d("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), d("\\negthickspace", "\\tmspace-{5mu}{.277em}"), d("\\enspace", "\\kern.5em "), d("\\enskip", "\\hskip.5em\\relax"), d("\\quad", "\\hskip1em\\relax"), d("\\qquad", "\\hskip2em\\relax"), d("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), d("\\tag@paren", "\\tag@literal{({#1})}"), d("\\tag@literal", (t) => {
          if (t.macros.get("\\df@tag"))
            throw new w("Multiple \\tag");
          return "\\gdef\\df@tag{\\text{#1}}";
        }), d("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), d("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), d("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), d("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), d("\\newline", "\\\\\\relax"), d("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
        const On = E(O0["Main-Regular"][84][1] - 0.7 * O0["Main-Regular"][65][1]);
        d("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + On + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), d("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + On + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), d("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), d("\\@hspace", "\\hskip #1\\relax"), d("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), d("\\ordinarycolon", ":"), d("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), d("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), d("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), d("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), d("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), d("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), d("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), d("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), d("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), d("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), d("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), d("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), d("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), d("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), d("∷", "\\dblcolon"), d("∹", "\\eqcolon"), d("≔", "\\coloneqq"), d("≕", "\\eqqcolon"), d("⩴", "\\Coloneqq"), d("\\ratio", "\\vcentcolon"), d("\\coloncolon", "\\dblcolon"), d("\\colonequals", "\\coloneqq"), d("\\coloncolonequals", "\\Coloneqq"), d("\\equalscolon", "\\eqqcolon"), d("\\equalscoloncolon", "\\Eqqcolon"), d("\\colonminus", "\\coloneq"), d("\\coloncolonminus", "\\Coloneq"), d("\\minuscolon", "\\eqcolon"), d("\\minuscoloncolon", "\\Eqcolon"), d("\\coloncolonapprox", "\\Colonapprox"), d("\\coloncolonsim", "\\Colonsim"), d("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), d("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), d("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), d("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), d("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), d("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), d("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), d("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), d("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), d("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), d("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), d("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), d("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), d("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), d("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), d("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), d("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), d("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), d("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), d("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), d("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), d("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), d("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), d("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), d("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), d("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), d("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), d("\\imath", "\\html@mathml{\\@imath}{ı}"), d("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), d("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), d("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), d("⟦", "\\llbracket"), d("⟧", "\\rrbracket"), d("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), d("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), d("⦃", "\\lBrace"), d("⦄", "\\rBrace"), d("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), d("⦵", "\\minuso"), d("\\darr", "\\downarrow"), d("\\dArr", "\\Downarrow"), d("\\Darr", "\\Downarrow"), d("\\lang", "\\langle"), d("\\rang", "\\rangle"), d("\\uarr", "\\uparrow"), d("\\uArr", "\\Uparrow"), d("\\Uarr", "\\Uparrow"), d("\\N", "\\mathbb{N}"), d("\\R", "\\mathbb{R}"), d("\\Z", "\\mathbb{Z}"), d("\\alef", "\\aleph"), d("\\alefsym", "\\aleph"), d("\\Alpha", "\\mathrm{A}"), d("\\Beta", "\\mathrm{B}"), d("\\bull", "\\bullet"), d("\\Chi", "\\mathrm{X}"), d("\\clubs", "\\clubsuit"), d("\\cnums", "\\mathbb{C}"), d("\\Complex", "\\mathbb{C}"), d("\\Dagger", "\\ddagger"), d("\\diamonds", "\\diamondsuit"), d("\\empty", "\\emptyset"), d("\\Epsilon", "\\mathrm{E}"), d("\\Eta", "\\mathrm{H}"), d("\\exist", "\\exists"), d("\\harr", "\\leftrightarrow"), d("\\hArr", "\\Leftrightarrow"), d("\\Harr", "\\Leftrightarrow"), d("\\hearts", "\\heartsuit"), d("\\image", "\\Im"), d("\\infin", "\\infty"), d("\\Iota", "\\mathrm{I}"), d("\\isin", "\\in"), d("\\Kappa", "\\mathrm{K}"), d("\\larr", "\\leftarrow"), d("\\lArr", "\\Leftarrow"), d("\\Larr", "\\Leftarrow"), d("\\lrarr", "\\leftrightarrow"), d("\\lrArr", "\\Leftrightarrow"), d("\\Lrarr", "\\Leftrightarrow"), d("\\Mu", "\\mathrm{M}"), d("\\natnums", "\\mathbb{N}"), d("\\Nu", "\\mathrm{N}"), d("\\Omicron", "\\mathrm{O}"), d("\\plusmn", "\\pm"), d("\\rarr", "\\rightarrow"), d("\\rArr", "\\Rightarrow"), d("\\Rarr", "\\Rightarrow"), d("\\real", "\\Re"), d("\\reals", "\\mathbb{R}"), d("\\Reals", "\\mathbb{R}"), d("\\Rho", "\\mathrm{P}"), d("\\sdot", "\\cdot"), d("\\sect", "\\S"), d("\\spades", "\\spadesuit"), d("\\sub", "\\subset"), d("\\sube", "\\subseteq"), d("\\supe", "\\supseteq"), d("\\Tau", "\\mathrm{T}"), d("\\thetasym", "\\vartheta"), d("\\weierp", "\\wp"), d("\\Zeta", "\\mathrm{Z}"), d("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), d("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), d("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), d("\\bra", "\\mathinner{\\langle{#1}|}"), d("\\ket", "\\mathinner{|{#1}\\rangle}"), d("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), d("\\Bra", "\\left\\langle#1\\right|"), d("\\Ket", "\\left|#1\\right\\rangle");
        const qn = (t) => (e) => {
          const r = e.consumeArg().tokens, n = e.consumeArg().tokens, s = e.consumeArg().tokens, a = e.consumeArg().tokens, c = e.macros.get("|"), h = e.macros.get("\\|");
          e.macros.beginGroup();
          const m = (x) => (k) => {
            t && (k.macros.set("|", c), s.length && k.macros.set("\\|", h));
            let C = x;
            return !x && s.length && k.future().text === "|" && (k.popToken(), C = !0), {
              tokens: C ? s : n,
              numArgs: 0
            };
          };
          e.macros.set("|", m(!1)), s.length && e.macros.set("\\|", m(!0));
          const p = e.consumeArg().tokens, y = e.expandTokens([
            ...a,
            ...p,
            ...r
            // reversed
          ]);
          return e.macros.endGroup(), {
            tokens: y.reverse(),
            numArgs: 0
          };
        };
        d("\\bra@ket", qn(!1)), d("\\bra@set", qn(!0)), d("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), d("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), d("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), d("\\angln", "{\\angl n}"), d("\\blue", "\\textcolor{##6495ed}{#1}"), d("\\orange", "\\textcolor{##ffa500}{#1}"), d("\\pink", "\\textcolor{##ff00af}{#1}"), d("\\red", "\\textcolor{##df0030}{#1}"), d("\\green", "\\textcolor{##28ae7b}{#1}"), d("\\gray", "\\textcolor{gray}{#1}"), d("\\purple", "\\textcolor{##9d38bd}{#1}"), d("\\blueA", "\\textcolor{##ccfaff}{#1}"), d("\\blueB", "\\textcolor{##80f6ff}{#1}"), d("\\blueC", "\\textcolor{##63d9ea}{#1}"), d("\\blueD", "\\textcolor{##11accd}{#1}"), d("\\blueE", "\\textcolor{##0c7f99}{#1}"), d("\\tealA", "\\textcolor{##94fff5}{#1}"), d("\\tealB", "\\textcolor{##26edd5}{#1}"), d("\\tealC", "\\textcolor{##01d1c1}{#1}"), d("\\tealD", "\\textcolor{##01a995}{#1}"), d("\\tealE", "\\textcolor{##208170}{#1}"), d("\\greenA", "\\textcolor{##b6ffb0}{#1}"), d("\\greenB", "\\textcolor{##8af281}{#1}"), d("\\greenC", "\\textcolor{##74cf70}{#1}"), d("\\greenD", "\\textcolor{##1fab54}{#1}"), d("\\greenE", "\\textcolor{##0d923f}{#1}"), d("\\goldA", "\\textcolor{##ffd0a9}{#1}"), d("\\goldB", "\\textcolor{##ffbb71}{#1}"), d("\\goldC", "\\textcolor{##ff9c39}{#1}"), d("\\goldD", "\\textcolor{##e07d10}{#1}"), d("\\goldE", "\\textcolor{##a75a05}{#1}"), d("\\redA", "\\textcolor{##fca9a9}{#1}"), d("\\redB", "\\textcolor{##ff8482}{#1}"), d("\\redC", "\\textcolor{##f9685d}{#1}"), d("\\redD", "\\textcolor{##e84d39}{#1}"), d("\\redE", "\\textcolor{##bc2612}{#1}"), d("\\maroonA", "\\textcolor{##ffbde0}{#1}"), d("\\maroonB", "\\textcolor{##ff92c6}{#1}"), d("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), d("\\maroonD", "\\textcolor{##ca337c}{#1}"), d("\\maroonE", "\\textcolor{##9e034e}{#1}"), d("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), d("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), d("\\purpleC", "\\textcolor{##aa87ff}{#1}"), d("\\purpleD", "\\textcolor{##7854ab}{#1}"), d("\\purpleE", "\\textcolor{##543b78}{#1}"), d("\\mintA", "\\textcolor{##f5f9e8}{#1}"), d("\\mintB", "\\textcolor{##edf2df}{#1}"), d("\\mintC", "\\textcolor{##e0e5cc}{#1}"), d("\\grayA", "\\textcolor{##f6f7f7}{#1}"), d("\\grayB", "\\textcolor{##f0f1f2}{#1}"), d("\\grayC", "\\textcolor{##e3e5e6}{#1}"), d("\\grayD", "\\textcolor{##d6d8da}{#1}"), d("\\grayE", "\\textcolor{##babec2}{#1}"), d("\\grayF", "\\textcolor{##888d93}{#1}"), d("\\grayG", "\\textcolor{##626569}{#1}"), d("\\grayH", "\\textcolor{##3b3e40}{#1}"), d("\\grayI", "\\textcolor{##21242c}{#1}"), d("\\kaBlue", "\\textcolor{##314453}{#1}"), d("\\kaGreen", "\\textcolor{##71B307}{#1}");
        const In = {
          "^": !0,
          // Parser.js
          _: !0,
          // Parser.js
          "\\limits": !0,
          // Parser.js
          "\\nolimits": !0
          // Parser.js
        };
        class so {
          constructor(e, r, n) {
            this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(e), this.macros = new ro(no, r.macros), this.mode = n, this.stack = [];
          }
          /**
           * Feed a new input string to the same MacroExpander
           * (with existing macros etc.).
           */
          feed(e) {
            this.lexer = new En(e, this.settings);
          }
          /**
           * Switches between "text" and "math" modes.
           */
          switchMode(e) {
            this.mode = e;
          }
          /**
           * Start a new group nesting within all namespaces.
           */
          beginGroup() {
            this.macros.beginGroup();
          }
          /**
           * End current group nesting within all namespaces.
           */
          endGroup() {
            this.macros.endGroup();
          }
          /**
           * Ends all currently nested groups (if any), restoring values before the
           * groups began.  Useful in case of an error in the middle of parsing.
           */
          endGroups() {
            this.macros.endGroups();
          }
          /**
           * Returns the topmost token on the stack, without expanding it.
           * Similar in behavior to TeX's `\futurelet`.
           */
          future() {
            return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
          }
          /**
           * Remove and return the next unexpanded token.
           */
          popToken() {
            return this.future(), this.stack.pop();
          }
          /**
           * Add a given token to the token stack.  In particular, this get be used
           * to put back a token returned from one of the other methods.
           */
          pushToken(e) {
            this.stack.push(e);
          }
          /**
           * Append an array of tokens to the token stack.
           */
          pushTokens(e) {
            this.stack.push(...e);
          }
          /**
           * Find an macro argument without expanding tokens and append the array of
           * tokens to the token stack. Uses Token as a container for the result.
           */
          scanArgument(e) {
            let r, n, s;
            if (e) {
              if (this.consumeSpaces(), this.future().text !== "[")
                return null;
              r = this.popToken(), {
                tokens: s,
                end: n
              } = this.consumeArg(["]"]);
            } else
              ({
                tokens: s,
                start: r,
                end: n
              } = this.consumeArg());
            return this.pushToken(new V0("EOF", n.loc)), this.pushTokens(s), r.range(n, "");
          }
          /**
           * Consume all following space tokens, without expansion.
           */
          consumeSpaces() {
            for (; this.future().text === " "; )
              this.stack.pop();
          }
          /**
           * Consume an argument from the token stream, and return the resulting array
           * of tokens and start/end token.
           */
          consumeArg(e) {
            const r = [], n = e && e.length > 0;
            n || this.consumeSpaces();
            const s = this.future();
            let a, c = 0, h = 0;
            do {
              if (a = this.popToken(), r.push(a), a.text === "{")
                ++c;
              else if (a.text === "}") {
                if (--c, c === -1)
                  throw new w("Extra }", a);
              } else if (a.text === "EOF")
                throw new w("Unexpected end of input in a macro argument, expected '" + (e && n ? e[h] : "}") + "'", a);
              if (e && n)
                if ((c === 0 || c === 1 && e[h] === "{") && a.text === e[h]) {
                  if (++h, h === e.length) {
                    r.splice(-h, h);
                    break;
                  }
                } else
                  h = 0;
            } while (c !== 0 || n);
            return s.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), {
              tokens: r,
              start: s,
              end: a
            };
          }
          /**
           * Consume the specified number of (delimited) arguments from the token
           * stream and return the resulting array of arguments.
           */
          consumeArgs(e, r) {
            if (r) {
              if (r.length !== e + 1)
                throw new w("The length of delimiters doesn't match the number of args!");
              const s = r[0];
              for (let a = 0; a < s.length; a++) {
                const c = this.popToken();
                if (s[a] !== c.text)
                  throw new w("Use of the macro doesn't match its definition", c);
              }
            }
            const n = [];
            for (let s = 0; s < e; s++)
              n.push(this.consumeArg(r && r[s + 1]).tokens);
            return n;
          }
          /**
           * Increment `expansionCount` by the specified amount.
           * Throw an error if it exceeds `maxExpand`.
           */
          countExpansion(e) {
            if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
              throw new w("Too many expansions: infinite loop or need to increase maxExpand setting");
          }
          /**
           * Expand the next token only once if possible.
           *
           * If the token is expanded, the resulting tokens will be pushed onto
           * the stack in reverse order, and the number of such tokens will be
           * returned.  This number might be zero or positive.
           *
           * If not, the return value is `false`, and the next token remains at the
           * top of the stack.
           *
           * In either case, the next token will be on the top of the stack,
           * or the stack will be empty (in case of empty expansion
           * and no other tokens).
           *
           * Used to implement `expandAfterFuture` and `expandNextToken`.
           *
           * If expandableOnly, only expandable tokens are expanded and
           * an undefined control sequence results in an error.
           */
          expandOnce(e) {
            const r = this.popToken(), n = r.text, s = r.noexpand ? null : this._getExpansion(n);
            if (s == null || e && s.unexpandable) {
              if (e && s == null && n[0] === "\\" && !this.isDefined(n))
                throw new w("Undefined control sequence: " + n);
              return this.pushToken(r), !1;
            }
            this.countExpansion(1);
            let a = s.tokens;
            const c = this.consumeArgs(s.numArgs, s.delimiters);
            if (s.numArgs) {
              a = a.slice();
              for (let h = a.length - 1; h >= 0; --h) {
                let m = a[h];
                if (m.text === "#") {
                  if (h === 0)
                    throw new w("Incomplete placeholder at end of macro body", m);
                  if (m = a[--h], m.text === "#")
                    a.splice(h + 1, 1);
                  else if (/^[1-9]$/.test(m.text))
                    a.splice(h, 2, ...c[+m.text - 1]);
                  else
                    throw new w("Not a valid argument number", m);
                }
              }
            }
            return this.pushTokens(a), a.length;
          }
          /**
           * Expand the next token only once (if possible), and return the resulting
           * top token on the stack (without removing anything from the stack).
           * Similar in behavior to TeX's `\expandafter\futurelet`.
           * Equivalent to expandOnce() followed by future().
           */
          expandAfterFuture() {
            return this.expandOnce(), this.future();
          }
          /**
           * Recursively expand first token, then return first non-expandable token.
           */
          expandNextToken() {
            for (; ; )
              if (this.expandOnce() === !1) {
                const e = this.stack.pop();
                return e.treatAsRelax && (e.text = "\\relax"), e;
              }
            throw new Error();
          }
          /**
           * Fully expand the given macro name and return the resulting list of
           * tokens, or return `undefined` if no such macro is defined.
           */
          expandMacro(e) {
            return this.macros.has(e) ? this.expandTokens([new V0(e)]) : void 0;
          }
          /**
           * Fully expand the given token stream and return the resulting list of
           * tokens.  Note that the input tokens are in reverse order, but the
           * output tokens are in forward order.
           */
          expandTokens(e) {
            const r = [], n = this.stack.length;
            for (this.pushTokens(e); this.stack.length > n; )
              if (this.expandOnce(!0) === !1) {
                const s = this.stack.pop();
                s.treatAsRelax && (s.noexpand = !1, s.treatAsRelax = !1), r.push(s);
              }
            return this.countExpansion(r.length), r;
          }
          /**
           * Fully expand the given macro name and return the result as a string,
           * or return `undefined` if no such macro is defined.
           */
          expandMacroAsText(e) {
            const r = this.expandMacro(e);
            return r && r.map((n) => n.text).join("");
          }
          /**
           * Returns the expanded macro as a reversed array of tokens and a macro
           * argument count.  Or returns `null` if no such macro.
           */
          _getExpansion(e) {
            const r = this.macros.get(e);
            if (r == null)
              return r;
            if (e.length === 1) {
              const s = this.lexer.catcodes[e];
              if (s != null && s !== 13)
                return;
            }
            const n = typeof r == "function" ? r(this) : r;
            if (typeof n == "string") {
              let s = 0;
              if (n.indexOf("#") !== -1) {
                const p = n.replace(/##/g, "");
                for (; p.indexOf("#" + (s + 1)) !== -1; )
                  ++s;
              }
              const a = new En(n, this.settings), c = [];
              let h = a.lex();
              for (; h.text !== "EOF"; )
                c.push(h), h = a.lex();
              return c.reverse(), {
                tokens: c,
                numArgs: s
              };
            }
            return n;
          }
          /**
           * Determine whether a command is currently "defined" (has some
           * functionality), meaning that it's a macro (in the current group),
           * a function, a symbol, or one of the special commands listed in
           * `implicitCommands`.
           */
          isDefined(e) {
            return this.macros.has(e) || ze.hasOwnProperty(e) || h0.math.hasOwnProperty(e) || h0.text.hasOwnProperty(e) || In.hasOwnProperty(e);
          }
          /**
           * Determine whether a command is expandable.
           */
          isExpandable(e) {
            const r = this.macros.get(e);
            return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : ze.hasOwnProperty(e) && !ze[e].primitive;
          }
        }
        const Ln = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Lt = Object.freeze({
          "₊": "+",
          "₋": "-",
          "₌": "=",
          "₍": "(",
          "₎": ")",
          "₀": "0",
          "₁": "1",
          "₂": "2",
          "₃": "3",
          "₄": "4",
          "₅": "5",
          "₆": "6",
          "₇": "7",
          "₈": "8",
          "₉": "9",
          "ₐ": "a",
          "ₑ": "e",
          "ₕ": "h",
          "ᵢ": "i",
          "ⱼ": "j",
          "ₖ": "k",
          "ₗ": "l",
          "ₘ": "m",
          "ₙ": "n",
          "ₒ": "o",
          "ₚ": "p",
          "ᵣ": "r",
          "ₛ": "s",
          "ₜ": "t",
          "ᵤ": "u",
          "ᵥ": "v",
          "ₓ": "x",
          "ᵦ": "β",
          "ᵧ": "γ",
          "ᵨ": "ρ",
          "ᵩ": "ϕ",
          "ᵪ": "χ",
          "⁺": "+",
          "⁻": "-",
          "⁼": "=",
          "⁽": "(",
          "⁾": ")",
          "⁰": "0",
          "¹": "1",
          "²": "2",
          "³": "3",
          "⁴": "4",
          "⁵": "5",
          "⁶": "6",
          "⁷": "7",
          "⁸": "8",
          "⁹": "9",
          "ᴬ": "A",
          "ᴮ": "B",
          "ᴰ": "D",
          "ᴱ": "E",
          "ᴳ": "G",
          "ᴴ": "H",
          "ᴵ": "I",
          "ᴶ": "J",
          "ᴷ": "K",
          "ᴸ": "L",
          "ᴹ": "M",
          "ᴺ": "N",
          "ᴼ": "O",
          "ᴾ": "P",
          "ᴿ": "R",
          "ᵀ": "T",
          "ᵁ": "U",
          "ⱽ": "V",
          "ᵂ": "W",
          "ᵃ": "a",
          "ᵇ": "b",
          "ᶜ": "c",
          "ᵈ": "d",
          "ᵉ": "e",
          "ᶠ": "f",
          "ᵍ": "g",
          ʰ: "h",
          "ⁱ": "i",
          ʲ: "j",
          "ᵏ": "k",
          ˡ: "l",
          "ᵐ": "m",
          ⁿ: "n",
          "ᵒ": "o",
          "ᵖ": "p",
          ʳ: "r",
          ˢ: "s",
          "ᵗ": "t",
          "ᵘ": "u",
          "ᵛ": "v",
          ʷ: "w",
          ˣ: "x",
          ʸ: "y",
          "ᶻ": "z",
          "ᵝ": "β",
          "ᵞ": "γ",
          "ᵟ": "δ",
          "ᵠ": "ϕ",
          "ᵡ": "χ",
          "ᶿ": "θ"
        }), vr = {
          "́": {
            text: "\\'",
            math: "\\acute"
          },
          "̀": {
            text: "\\`",
            math: "\\grave"
          },
          "̈": {
            text: '\\"',
            math: "\\ddot"
          },
          "̃": {
            text: "\\~",
            math: "\\tilde"
          },
          "̄": {
            text: "\\=",
            math: "\\bar"
          },
          "̆": {
            text: "\\u",
            math: "\\breve"
          },
          "̌": {
            text: "\\v",
            math: "\\check"
          },
          "̂": {
            text: "\\^",
            math: "\\hat"
          },
          "̇": {
            text: "\\.",
            math: "\\dot"
          },
          "̊": {
            text: "\\r",
            math: "\\mathring"
          },
          "̋": {
            text: "\\H"
          },
          "̧": {
            text: "\\c"
          }
        }, Pn = {
          á: "á",
          à: "à",
          ä: "ä",
          ǟ: "ǟ",
          ã: "ã",
          ā: "ā",
          ă: "ă",
          ắ: "ắ",
          ằ: "ằ",
          ẵ: "ẵ",
          ǎ: "ǎ",
          â: "â",
          ấ: "ấ",
          ầ: "ầ",
          ẫ: "ẫ",
          ȧ: "ȧ",
          ǡ: "ǡ",
          å: "å",
          ǻ: "ǻ",
          ḃ: "ḃ",
          ć: "ć",
          ḉ: "ḉ",
          č: "č",
          ĉ: "ĉ",
          ċ: "ċ",
          ç: "ç",
          ď: "ď",
          ḋ: "ḋ",
          ḑ: "ḑ",
          é: "é",
          è: "è",
          ë: "ë",
          ẽ: "ẽ",
          ē: "ē",
          ḗ: "ḗ",
          ḕ: "ḕ",
          ĕ: "ĕ",
          ḝ: "ḝ",
          ě: "ě",
          ê: "ê",
          ế: "ế",
          ề: "ề",
          ễ: "ễ",
          ė: "ė",
          ȩ: "ȩ",
          ḟ: "ḟ",
          ǵ: "ǵ",
          ḡ: "ḡ",
          ğ: "ğ",
          ǧ: "ǧ",
          ĝ: "ĝ",
          ġ: "ġ",
          ģ: "ģ",
          ḧ: "ḧ",
          ȟ: "ȟ",
          ĥ: "ĥ",
          ḣ: "ḣ",
          ḩ: "ḩ",
          í: "í",
          ì: "ì",
          ï: "ï",
          ḯ: "ḯ",
          ĩ: "ĩ",
          ī: "ī",
          ĭ: "ĭ",
          ǐ: "ǐ",
          î: "î",
          ǰ: "ǰ",
          ĵ: "ĵ",
          ḱ: "ḱ",
          ǩ: "ǩ",
          ķ: "ķ",
          ĺ: "ĺ",
          ľ: "ľ",
          ļ: "ļ",
          ḿ: "ḿ",
          ṁ: "ṁ",
          ń: "ń",
          ǹ: "ǹ",
          ñ: "ñ",
          ň: "ň",
          ṅ: "ṅ",
          ņ: "ņ",
          ó: "ó",
          ò: "ò",
          ö: "ö",
          ȫ: "ȫ",
          õ: "õ",
          ṍ: "ṍ",
          ṏ: "ṏ",
          ȭ: "ȭ",
          ō: "ō",
          ṓ: "ṓ",
          ṑ: "ṑ",
          ŏ: "ŏ",
          ǒ: "ǒ",
          ô: "ô",
          ố: "ố",
          ồ: "ồ",
          ỗ: "ỗ",
          ȯ: "ȯ",
          ȱ: "ȱ",
          ő: "ő",
          ṕ: "ṕ",
          ṗ: "ṗ",
          ŕ: "ŕ",
          ř: "ř",
          ṙ: "ṙ",
          ŗ: "ŗ",
          ś: "ś",
          ṥ: "ṥ",
          š: "š",
          ṧ: "ṧ",
          ŝ: "ŝ",
          ṡ: "ṡ",
          ş: "ş",
          ẗ: "ẗ",
          ť: "ť",
          ṫ: "ṫ",
          ţ: "ţ",
          ú: "ú",
          ù: "ù",
          ü: "ü",
          ǘ: "ǘ",
          ǜ: "ǜ",
          ǖ: "ǖ",
          ǚ: "ǚ",
          ũ: "ũ",
          ṹ: "ṹ",
          ū: "ū",
          ṻ: "ṻ",
          ŭ: "ŭ",
          ǔ: "ǔ",
          û: "û",
          ů: "ů",
          ű: "ű",
          ṽ: "ṽ",
          ẃ: "ẃ",
          ẁ: "ẁ",
          ẅ: "ẅ",
          ŵ: "ŵ",
          ẇ: "ẇ",
          ẘ: "ẘ",
          ẍ: "ẍ",
          ẋ: "ẋ",
          ý: "ý",
          ỳ: "ỳ",
          ÿ: "ÿ",
          ỹ: "ỹ",
          ȳ: "ȳ",
          ŷ: "ŷ",
          ẏ: "ẏ",
          ẙ: "ẙ",
          ź: "ź",
          ž: "ž",
          ẑ: "ẑ",
          ż: "ż",
          Á: "Á",
          À: "À",
          Ä: "Ä",
          Ǟ: "Ǟ",
          Ã: "Ã",
          Ā: "Ā",
          Ă: "Ă",
          Ắ: "Ắ",
          Ằ: "Ằ",
          Ẵ: "Ẵ",
          Ǎ: "Ǎ",
          Â: "Â",
          Ấ: "Ấ",
          Ầ: "Ầ",
          Ẫ: "Ẫ",
          Ȧ: "Ȧ",
          Ǡ: "Ǡ",
          Å: "Å",
          Ǻ: "Ǻ",
          Ḃ: "Ḃ",
          Ć: "Ć",
          Ḉ: "Ḉ",
          Č: "Č",
          Ĉ: "Ĉ",
          Ċ: "Ċ",
          Ç: "Ç",
          Ď: "Ď",
          Ḋ: "Ḋ",
          Ḑ: "Ḑ",
          É: "É",
          È: "È",
          Ë: "Ë",
          Ẽ: "Ẽ",
          Ē: "Ē",
          Ḗ: "Ḗ",
          Ḕ: "Ḕ",
          Ĕ: "Ĕ",
          Ḝ: "Ḝ",
          Ě: "Ě",
          Ê: "Ê",
          Ế: "Ế",
          Ề: "Ề",
          Ễ: "Ễ",
          Ė: "Ė",
          Ȩ: "Ȩ",
          Ḟ: "Ḟ",
          Ǵ: "Ǵ",
          Ḡ: "Ḡ",
          Ğ: "Ğ",
          Ǧ: "Ǧ",
          Ĝ: "Ĝ",
          Ġ: "Ġ",
          Ģ: "Ģ",
          Ḧ: "Ḧ",
          Ȟ: "Ȟ",
          Ĥ: "Ĥ",
          Ḣ: "Ḣ",
          Ḩ: "Ḩ",
          Í: "Í",
          Ì: "Ì",
          Ï: "Ï",
          Ḯ: "Ḯ",
          Ĩ: "Ĩ",
          Ī: "Ī",
          Ĭ: "Ĭ",
          Ǐ: "Ǐ",
          Î: "Î",
          İ: "İ",
          Ĵ: "Ĵ",
          Ḱ: "Ḱ",
          Ǩ: "Ǩ",
          Ķ: "Ķ",
          Ĺ: "Ĺ",
          Ľ: "Ľ",
          Ļ: "Ļ",
          Ḿ: "Ḿ",
          Ṁ: "Ṁ",
          Ń: "Ń",
          Ǹ: "Ǹ",
          Ñ: "Ñ",
          Ň: "Ň",
          Ṅ: "Ṅ",
          Ņ: "Ņ",
          Ó: "Ó",
          Ò: "Ò",
          Ö: "Ö",
          Ȫ: "Ȫ",
          Õ: "Õ",
          Ṍ: "Ṍ",
          Ṏ: "Ṏ",
          Ȭ: "Ȭ",
          Ō: "Ō",
          Ṓ: "Ṓ",
          Ṑ: "Ṑ",
          Ŏ: "Ŏ",
          Ǒ: "Ǒ",
          Ô: "Ô",
          Ố: "Ố",
          Ồ: "Ồ",
          Ỗ: "Ỗ",
          Ȯ: "Ȯ",
          Ȱ: "Ȱ",
          Ő: "Ő",
          Ṕ: "Ṕ",
          Ṗ: "Ṗ",
          Ŕ: "Ŕ",
          Ř: "Ř",
          Ṙ: "Ṙ",
          Ŗ: "Ŗ",
          Ś: "Ś",
          Ṥ: "Ṥ",
          Š: "Š",
          Ṧ: "Ṧ",
          Ŝ: "Ŝ",
          Ṡ: "Ṡ",
          Ş: "Ş",
          Ť: "Ť",
          Ṫ: "Ṫ",
          Ţ: "Ţ",
          Ú: "Ú",
          Ù: "Ù",
          Ü: "Ü",
          Ǘ: "Ǘ",
          Ǜ: "Ǜ",
          Ǖ: "Ǖ",
          Ǚ: "Ǚ",
          Ũ: "Ũ",
          Ṹ: "Ṹ",
          Ū: "Ū",
          Ṻ: "Ṻ",
          Ŭ: "Ŭ",
          Ǔ: "Ǔ",
          Û: "Û",
          Ů: "Ů",
          Ű: "Ű",
          Ṽ: "Ṽ",
          Ẃ: "Ẃ",
          Ẁ: "Ẁ",
          Ẅ: "Ẅ",
          Ŵ: "Ŵ",
          Ẇ: "Ẇ",
          Ẍ: "Ẍ",
          Ẋ: "Ẋ",
          Ý: "Ý",
          Ỳ: "Ỳ",
          Ÿ: "Ÿ",
          Ỹ: "Ỹ",
          Ȳ: "Ȳ",
          Ŷ: "Ŷ",
          Ẏ: "Ẏ",
          Ź: "Ź",
          Ž: "Ž",
          Ẑ: "Ẑ",
          Ż: "Ż",
          ά: "ά",
          ὰ: "ὰ",
          ᾱ: "ᾱ",
          ᾰ: "ᾰ",
          έ: "έ",
          ὲ: "ὲ",
          ή: "ή",
          ὴ: "ὴ",
          ί: "ί",
          ὶ: "ὶ",
          ϊ: "ϊ",
          ΐ: "ΐ",
          ῒ: "ῒ",
          ῑ: "ῑ",
          ῐ: "ῐ",
          ό: "ό",
          ὸ: "ὸ",
          ύ: "ύ",
          ὺ: "ὺ",
          ϋ: "ϋ",
          ΰ: "ΰ",
          ῢ: "ῢ",
          ῡ: "ῡ",
          ῠ: "ῠ",
          ώ: "ώ",
          ὼ: "ὼ",
          Ύ: "Ύ",
          Ὺ: "Ὺ",
          Ϋ: "Ϋ",
          Ῡ: "Ῡ",
          Ῠ: "Ῠ",
          Ώ: "Ώ",
          Ὼ: "Ὼ"
        };
        class Pt {
          constructor(e, r) {
            this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new so(e, r, this.mode), this.settings = r, this.leftrightDepth = 0;
          }
          /**
           * Checks a result to make sure it has the right type, and throws an
           * appropriate error otherwise.
           */
          expect(e, r) {
            if (r === void 0 && (r = !0), this.fetch().text !== e)
              throw new w("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
            r && this.consume();
          }
          /**
           * Discards the current lookahead token, considering it consumed.
           */
          consume() {
            this.nextToken = null;
          }
          /**
           * Return the current lookahead token, or if there isn't one (at the
           * beginning, or if the previous lookahead token was consume()d),
           * fetch the next token as the new lookahead token and return it.
           */
          fetch() {
            return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
          }
          /**
           * Switches between "text" and "math" modes.
           */
          switchMode(e) {
            this.mode = e, this.gullet.switchMode(e);
          }
          /**
           * Main parsing function, which parses an entire input.
           */
          parse() {
            this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
            try {
              const e = this.parseExpression(!1);
              return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
            } finally {
              this.gullet.endGroups();
            }
          }
          /**
           * Fully parse a separate sequence of tokens as a separate job.
           * Tokens should be specified in reverse order, as in a MacroDefinition.
           */
          subparse(e) {
            const r = this.nextToken;
            this.consume(), this.gullet.pushToken(new V0("}")), this.gullet.pushTokens(e);
            const n = this.parseExpression(!1);
            return this.expect("}"), this.nextToken = r, n;
          }
          /**
           * Parses an "expression", which is a list of atoms.
           *
           * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
           *                 happens when functions have higher precedence han infix
           *                 nodes in implicit parses.
           *
           * `breakOnTokenText`: The text of the token that the expression should end
           *                     with, or `null` if something else should end the
           *                     expression.
           */
          parseExpression(e, r) {
            const n = [];
            for (; ; ) {
              this.mode === "math" && this.consumeSpaces();
              const s = this.fetch();
              if (Pt.endOfExpression.indexOf(s.text) !== -1 || r && s.text === r || e && ze[s.text] && ze[s.text].infix)
                break;
              const a = this.parseAtom(r);
              if (a) {
                if (a.type === "internal")
                  continue;
              } else break;
              n.push(a);
            }
            return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
          }
          /**
           * Rewrites infix operators such as \over with corresponding commands such
           * as \frac.
           *
           * There can only be one infix operator per group.  If there's more than one
           * then the expression is ambiguous.  This can be resolved by adding {}.
           */
          handleInfixNodes(e) {
            let r = -1, n;
            for (let s = 0; s < e.length; s++)
              if (e[s].type === "infix") {
                if (r !== -1)
                  throw new w("only one infix operator per group", e[s].token);
                r = s, n = e[s].replaceWith;
              }
            if (r !== -1 && n) {
              let s, a;
              const c = e.slice(0, r), h = e.slice(r + 1);
              c.length === 1 && c[0].type === "ordgroup" ? s = c[0] : s = {
                type: "ordgroup",
                mode: this.mode,
                body: c
              }, h.length === 1 && h[0].type === "ordgroup" ? a = h[0] : a = {
                type: "ordgroup",
                mode: this.mode,
                body: h
              };
              let m;
              return n === "\\\\abovefrac" ? m = this.callFunction(n, [s, e[r], a], []) : m = this.callFunction(n, [s, a], []), [m];
            } else
              return e;
          }
          /**
           * Handle a subscript or superscript with nice errors.
           */
          handleSupSubscript(e) {
            const r = this.fetch(), n = r.text;
            this.consume(), this.consumeSpaces();
            const s = this.parseGroup(e);
            if (!s)
              throw new w("Expected group after '" + n + "'", r);
            return s;
          }
          /**
           * Converts the textual input of an unsupported command into a text node
           * contained within a color node whose color is determined by errorColor
           */
          formatUnsupportedCmd(e) {
            const r = [];
            for (let a = 0; a < e.length; a++)
              r.push({
                type: "textord",
                mode: "text",
                text: e[a]
              });
            const n = {
              type: "text",
              mode: this.mode,
              body: r
            };
            return {
              type: "color",
              mode: this.mode,
              color: this.settings.errorColor,
              body: [n]
            };
          }
          /**
           * Parses a group with optional super/subscripts.
           */
          parseAtom(e) {
            const r = this.parseGroup("atom", e);
            if (this.mode === "text")
              return r;
            let n, s;
            for (; ; ) {
              this.consumeSpaces();
              const a = this.fetch();
              if (a.text === "\\limits" || a.text === "\\nolimits") {
                if (r && r.type === "op") {
                  const c = a.text === "\\limits";
                  r.limits = c, r.alwaysHandleSupSub = !0;
                } else if (r && r.type === "operatorname")
                  r.alwaysHandleSupSub && (r.limits = a.text === "\\limits");
                else
                  throw new w("Limit controls must follow a math operator", a);
                this.consume();
              } else if (a.text === "^") {
                if (n)
                  throw new w("Double superscript", a);
                n = this.handleSupSubscript("superscript");
              } else if (a.text === "_") {
                if (s)
                  throw new w("Double subscript", a);
                s = this.handleSupSubscript("subscript");
              } else if (a.text === "'") {
                if (n)
                  throw new w("Double superscript", a);
                const c = {
                  type: "textord",
                  mode: this.mode,
                  text: "\\prime"
                }, h = [c];
                for (this.consume(); this.fetch().text === "'"; )
                  h.push(c), this.consume();
                this.fetch().text === "^" && h.push(this.handleSupSubscript("superscript")), n = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: h
                };
              } else if (Lt[a.text]) {
                const c = Ln.test(a.text), h = [];
                for (h.push(new V0(Lt[a.text])), this.consume(); ; ) {
                  const p = this.fetch().text;
                  if (!Lt[p] || Ln.test(p) !== c)
                    break;
                  h.unshift(new V0(Lt[p])), this.consume();
                }
                const m = this.subparse(h);
                c ? s = {
                  type: "ordgroup",
                  mode: "math",
                  body: m
                } : n = {
                  type: "ordgroup",
                  mode: "math",
                  body: m
                };
              } else
                break;
            }
            return n || s ? {
              type: "supsub",
              mode: this.mode,
              base: r,
              sup: n,
              sub: s
            } : r;
          }
          /**
           * Parses an entire function, including its base and all of its arguments.
           */
          parseFunction(e, r) {
            const n = this.fetch(), s = n.text, a = ze[s];
            if (!a)
              return null;
            if (this.consume(), r && r !== "atom" && !a.allowedInArgument)
              throw new w("Got function '" + s + "' with no arguments" + (r ? " as " + r : ""), n);
            if (this.mode === "text" && !a.allowedInText)
              throw new w("Can't use function '" + s + "' in text mode", n);
            if (this.mode === "math" && a.allowedInMath === !1)
              throw new w("Can't use function '" + s + "' in math mode", n);
            const {
              args: c,
              optArgs: h
            } = this.parseArguments(s, a);
            return this.callFunction(s, c, h, n, e);
          }
          /**
           * Call a function handler with a suitable context and arguments.
           */
          callFunction(e, r, n, s, a) {
            const c = {
              funcName: e,
              parser: this,
              token: s,
              breakOnTokenText: a
            }, h = ze[e];
            if (h && h.handler)
              return h.handler(c, r, n);
            throw new w("No function handler for " + e);
          }
          /**
           * Parses the arguments of a function or environment
           */
          parseArguments(e, r) {
            const n = r.numArgs + r.numOptionalArgs;
            if (n === 0)
              return {
                args: [],
                optArgs: []
              };
            const s = [], a = [];
            for (let c = 0; c < n; c++) {
              let h = r.argTypes && r.argTypes[c];
              const m = c < r.numOptionalArgs;
              (r.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
              r.type === "sqrt" && c === 1 && a[0] == null) && (h = "primitive");
              const p = this.parseGroupOfType("argument to '" + e + "'", h, m);
              if (m)
                a.push(p);
              else if (p != null)
                s.push(p);
              else
                throw new w("Null argument, please report this as a bug");
            }
            return {
              args: s,
              optArgs: a
            };
          }
          /**
           * Parses a group when the mode is changing.
           */
          parseGroupOfType(e, r, n) {
            switch (r) {
              case "color":
                return this.parseColorGroup(n);
              case "size":
                return this.parseSizeGroup(n);
              case "url":
                return this.parseUrlGroup(n);
              case "math":
              case "text":
                return this.parseArgumentGroup(n, r);
              case "hbox": {
                const s = this.parseArgumentGroup(n, "text");
                return s != null ? {
                  type: "styling",
                  mode: s.mode,
                  body: [s],
                  style: "text"
                  // simulate \textstyle
                } : null;
              }
              case "raw": {
                const s = this.parseStringGroup("raw", n);
                return s != null ? {
                  type: "raw",
                  mode: "text",
                  string: s.text
                } : null;
              }
              case "primitive": {
                if (n)
                  throw new w("A primitive argument cannot be optional");
                const s = this.parseGroup(e);
                if (s == null)
                  throw new w("Expected group as " + e, this.fetch());
                return s;
              }
              case "original":
              case null:
              case void 0:
                return this.parseArgumentGroup(n);
              default:
                throw new w("Unknown group type as " + e, this.fetch());
            }
          }
          /**
           * Discard any space tokens, fetching the next non-space token.
           */
          consumeSpaces() {
            for (; this.fetch().text === " "; )
              this.consume();
          }
          /**
           * Parses a group, essentially returning the string formed by the
           * brace-enclosed tokens plus some position information.
           */
          parseStringGroup(e, r) {
            const n = this.gullet.scanArgument(r);
            if (n == null)
              return null;
            let s = "", a;
            for (; (a = this.fetch()).text !== "EOF"; )
              s += a.text, this.consume();
            return this.consume(), n.text = s, n;
          }
          /**
           * Parses a regex-delimited group: the largest sequence of tokens
           * whose concatenated strings match `regex`. Returns the string
           * formed by the tokens plus some position information.
           */
          parseRegexGroup(e, r) {
            const n = this.fetch();
            let s = n, a = "", c;
            for (; (c = this.fetch()).text !== "EOF" && e.test(a + c.text); )
              s = c, a += s.text, this.consume();
            if (a === "")
              throw new w("Invalid " + r + ": '" + n.text + "'", n);
            return n.range(s, a);
          }
          /**
           * Parses a color description.
           */
          parseColorGroup(e) {
            const r = this.parseStringGroup("color", e);
            if (r == null)
              return null;
            const n = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
            if (!n)
              throw new w("Invalid color: '" + r.text + "'", r);
            let s = n[0];
            return /^[0-9a-f]{6}$/i.test(s) && (s = "#" + s), {
              type: "color-token",
              mode: this.mode,
              color: s
            };
          }
          /**
           * Parses a size specification, consisting of magnitude and unit.
           */
          parseSizeGroup(e) {
            let r, n = !1;
            if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup("size", e), !r)
              return null;
            !e && r.text.length === 0 && (r.text = "0pt", n = !0);
            const s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
            if (!s)
              throw new w("Invalid size: '" + r.text + "'", r);
            const a = {
              number: +(s[1] + s[2]),
              // sign + magnitude, cast to number
              unit: s[3]
            };
            if (!wt(a))
              throw new w("Invalid unit: '" + a.unit + "'", r);
            return {
              type: "size",
              mode: this.mode,
              value: a,
              isBlank: n
            };
          }
          /**
           * Parses an URL, checking escaped letters and allowed protocols,
           * and setting the catcode of % as an active character (as in \hyperref).
           */
          parseUrlGroup(e) {
            this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
            const r = this.parseStringGroup("url", e);
            if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null)
              return null;
            const n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
            return {
              type: "url",
              mode: this.mode,
              url: n
            };
          }
          /**
           * Parses an argument with the mode specified.
           */
          parseArgumentGroup(e, r) {
            const n = this.gullet.scanArgument(e);
            if (n == null)
              return null;
            const s = this.mode;
            r && this.switchMode(r), this.gullet.beginGroup();
            const a = this.parseExpression(!1, "EOF");
            this.expect("EOF"), this.gullet.endGroup();
            const c = {
              type: "ordgroup",
              mode: this.mode,
              loc: n.loc,
              body: a
            };
            return r && this.switchMode(s), c;
          }
          /**
           * Parses an ordinary group, which is either a single nucleus (like "x")
           * or an expression in braces (like "{x+y}") or an implicit group, a group
           * that starts at the current position, and ends right before a higher explicit
           * group ends, or at EOF.
           */
          parseGroup(e, r) {
            const n = this.fetch(), s = n.text;
            let a;
            if (s === "{" || s === "\\begingroup") {
              this.consume();
              const c = s === "{" ? "}" : "\\endgroup";
              this.gullet.beginGroup();
              const h = this.parseExpression(!1, c), m = this.fetch();
              this.expect(c), this.gullet.endGroup(), a = {
                type: "ordgroup",
                mode: this.mode,
                loc: H0.range(n, m),
                body: h,
                // A group formed by \begingroup...\endgroup is a semi-simple group
                // which doesn't affect spacing in math mode, i.e., is transparent.
                // https://tex.stackexchange.com/questions/1930/when-should-one-
                // use-begingroup-instead-of-bgroup
                semisimple: s === "\\begingroup" || void 0
              };
            } else if (a = this.parseFunction(r, e) || this.parseSymbol(), a == null && s[0] === "\\" && !In.hasOwnProperty(s)) {
              if (this.settings.throwOnError)
                throw new w("Undefined control sequence: " + s, n);
              a = this.formatUnsupportedCmd(s), this.consume();
            }
            return a;
          }
          /**
           * Form ligature-like combinations of characters for text mode.
           * This includes inputs like "--", "---", "``" and "''".
           * The result will simply replace multiple textord nodes with a single
           * character in each value by a single textord node having multiple
           * characters in its value.  The representation is still ASCII source.
           * The group will be modified in place.
           */
          formLigatures(e) {
            let r = e.length - 1;
            for (let n = 0; n < r; ++n) {
              const s = e[n], a = s.text;
              a === "-" && e[n + 1].text === "-" && (n + 1 < r && e[n + 2].text === "-" ? (e.splice(n, 3, {
                type: "textord",
                mode: "text",
                loc: H0.range(s, e[n + 2]),
                text: "---"
              }), r -= 2) : (e.splice(n, 2, {
                type: "textord",
                mode: "text",
                loc: H0.range(s, e[n + 1]),
                text: "--"
              }), r -= 1)), (a === "'" || a === "`") && e[n + 1].text === a && (e.splice(n, 2, {
                type: "textord",
                mode: "text",
                loc: H0.range(s, e[n + 1]),
                text: a + a
              }), r -= 1);
            }
          }
          /**
           * Parse a single symbol out of the string. Here, we handle single character
           * symbols and special functions like \verb.
           */
          parseSymbol() {
            const e = this.fetch();
            let r = e.text;
            if (/^\\verb[^a-zA-Z]/.test(r)) {
              this.consume();
              let a = r.slice(5);
              const c = a.charAt(0) === "*";
              if (c && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
                throw new w(`\\verb assertion failed --
                    please report what input caused this bug`);
              return a = a.slice(1, -1), {
                type: "verb",
                mode: "text",
                body: a,
                star: c
              };
            }
            Pn.hasOwnProperty(r[0]) && !h0[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', e), r = Pn[r[0]] + r.slice(1));
            const n = eo.exec(r);
            n && (r = r.substring(0, n.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
            let s;
            if (h0[this.mode][r]) {
              this.settings.strict && this.mode === "math" && tt.indexOf(r) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', e);
              const a = h0[this.mode][r].group, c = H0.range(e);
              let h;
              if (Vt.hasOwnProperty(a)) {
                const m = a;
                h = {
                  type: "atom",
                  mode: this.mode,
                  family: m,
                  loc: c,
                  text: r
                };
              } else
                h = {
                  type: a,
                  mode: this.mode,
                  loc: c,
                  text: r
                };
              s = h;
            } else if (r.charCodeAt(0) >= 128)
              this.settings.strict && (dt(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), e)), s = {
                type: "textord",
                mode: "text",
                loc: H0.range(e),
                text: r
              };
            else
              return null;
            if (this.consume(), n)
              for (let a = 0; a < n[0].length; a++) {
                const c = n[0][a];
                if (!vr[c])
                  throw new w("Unknown accent ' " + c + "'", e);
                const h = vr[c][this.mode] || vr[c].text;
                if (!h)
                  throw new w("Accent " + c + " unsupported in " + this.mode + " mode", e);
                s = {
                  type: "accent",
                  mode: this.mode,
                  loc: H0.range(e),
                  label: h,
                  isStretchy: !1,
                  isShifty: !0,
                  // $FlowFixMe
                  base: s
                };
              }
            return s;
          }
        }
        Pt.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
        var kr = function(t, e) {
          if (!(typeof t == "string" || t instanceof String))
            throw new TypeError("KaTeX can only parse string typed expression");
          const r = new Pt(t, e);
          delete r.gullet.macros.current["\\df@tag"];
          let n = r.parse();
          if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
            if (!e.displayMode)
              throw new w("\\tag works only in display equations");
            n = [{
              type: "tag",
              mode: "text",
              body: n,
              tag: r.subparse([new V0("\\df@tag")])
            }];
          }
          return n;
        };
        let Fn = function(t, e, r) {
          e.textContent = "";
          const n = Sr(t, r).toNode();
          e.appendChild(n);
        };
        typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Fn = function() {
          throw new w("KaTeX doesn't work in quirks mode.");
        });
        const oo = function(t, e) {
          return Sr(t, e).toMarkup();
        }, io = function(t, e) {
          const r = new F0(e);
          return kr(t, r);
        }, Hn = function(t, e, r) {
          if (r.throwOnError || !(t instanceof w))
            throw t;
          const n = v.makeSpan(["katex-error"], [new q0(e)]);
          return n.setAttribute("title", t.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
        }, Sr = function(t, e) {
          const r = new F0(e);
          try {
            const n = kr(t, r);
            return vs(n, t, r);
          } catch (n) {
            return Hn(n, t, r);
          }
        };
        var ao = {
          /**
           * Current KaTeX version
           */
          version: "0.16.10",
          /**
           * Renders the given LaTeX into an HTML+MathML combination, and adds
           * it as a child to the specified DOM node.
           */
          render: Fn,
          /**
           * Renders the given LaTeX into an HTML+MathML combination string,
           * for sending to the client.
           */
          renderToString: oo,
          /**
           * KaTeX error, usually during parsing.
           */
          ParseError: w,
          /**
           * The shema of Settings
           */
          SETTINGS_SCHEMA: e0,
          /**
           * Parses the given LaTeX into KaTeX's internal parse tree structure,
           * without rendering to HTML or MathML.
           *
           * NOTE: This method is not currently recommended for public use.
           * The internal tree representation is unstable and is very likely
           * to change. Use at your own risk.
           */
          __parse: io,
          /**
           * Renders the given LaTeX into an HTML+MathML internal DOM tree
           * representation, without flattening that representation to a string.
           *
           * NOTE: This method is not currently recommended for public use.
           * The internal tree representation is unstable and is very likely
           * to change. Use at your own risk.
           */
          __renderToDomTree: Sr,
          /**
           * Renders the given LaTeX into an HTML internal DOM tree representation,
           * without MathML and without flattening that representation to a string.
           *
           * NOTE: This method is not currently recommended for public use.
           * The internal tree representation is unstable and is very likely
           * to change. Use at your own risk.
           */
          __renderToHTMLTree: function(t, e) {
            const r = new F0(e);
            try {
              const n = kr(t, r);
              return ks(n, t, r);
            } catch (n) {
              return Hn(n, t, r);
            }
          },
          /**
           * extends internal font metrics object with a new object
           * each key in the new object represents a font name
          */
          __setFontMetrics: Ye,
          /**
           * adds a new symbol to builtin symbols table
           */
          __defineSymbol: o,
          /**
           * adds a new function to builtin function list,
           * which directly produce parse tree elements
           * and have their own html/mathml builders
           */
          __defineFunction: q,
          /**
           * adds a new macro to builtin macro list
           */
          __defineMacro: d,
          /**
           * Expose the dom tree node types, which can be useful for type checking nodes.
           *
           * NOTE: This method is not currently recommended for public use.
           * The internal tree representation is unstable and is very likely
           * to change. Use at your own risk.
           */
          __domTree: {
            Span: ve,
            Anchor: re,
            SymbolNode: q0,
            SvgNode: X0,
            PathNode: K0,
            LineNode: Qe
          }
        }, lo = ao;
        return T = T.default, T;
      }()
    );
  });
});
Xn.ParseError;
var wo = Xn.renderToString;
function vo(b, z, N) {
  for (var T = N, D = 0, w = b.length; T < z.length; ) {
    var I = z[T];
    if (D <= 0 && z.slice(T, T + w) === b)
      return T;
    I === "\\" ? T++ : I === "{" ? D++ : I === "}" && D--, T++;
  }
  return -1;
}
function ko(b) {
  return b.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var So = /^\\begin{/;
function Mo(b, z) {
  for (var N, T = [], D = new RegExp("(" + z.map(function(G) {
    return ko(G.left);
  }).join("|") + ")"); N = b.search(D), N !== -1; ) {
    N > 0 && (T.push({
      type: "text",
      data: b.slice(0, N)
    }), b = b.slice(N));
    var w = z.findIndex(function(G) {
      return b.startsWith(G.left);
    });
    if (N = vo(z[w].right, b, z[w].left.length), N === -1)
      break;
    var I = b.slice(0, N + z[w].right.length), P = So.test(I) ? I : b.slice(z[w].left.length, N);
    T.push({
      type: "math",
      data: P,
      rawData: I,
      display: z[w].display
    }), b = b.slice(N + z[w].right.length);
  }
  return b !== "" && T.push({
    type: "text",
    data: b
  }), T;
}
function zo(b, z, N, T) {
  for (var D = Mo(b, z), w = [], I = 0; I < D.length; I++)
    if (D[I].type === "text")
      w.push(D[I].data);
    else {
      var P = D[I].data, G = D[I].display;
      try {
        var n0 = wo(P, { displayMode: G, macros: T });
        w.push(n0);
      } catch (J) {
        if (N)
          throw J;
        w.push(D[I].data);
      }
    }
  return w.join("");
}
bo(`.___Latex___1nfc2_1 ._latex_1nfc2_1 {
  font: inherit
}
`, {});
var To = [
  { left: "$$", right: "$$", display: !0 },
  { left: "\\(", right: "\\)", display: !1 },
  { left: "$", right: "$", display: !1 },
  { left: "\\[", right: "\\]", display: !0 }
];
function Ge(b) {
  var z = b.children, N = b.delimiters, T = N === void 0 ? To : N, D = b.strict, w = D === void 0 ? !1 : D, I = b.macros, P = zo(Array.isArray(z) ? z.join("") : z, T, w, I);
  return ho("span", { className: "__Latex__", dangerouslySetInnerHTML: { __html: P } });
}
function Ao(b) {
  return /* @__PURE__ */ Z.jsxs(
    "svg",
    {
      ...b,
      xmlns: "http://www.w3.org/2000/svg",
      width: b.width ?? 24,
      height: b.height ?? b.width ?? 24,
      viewBox: b.viewBox ?? "0 0 24 24",
      fill: b.fill ?? "none",
      stroke: b.stroke ?? "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ Z.jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
        /* @__PURE__ */ Z.jsx("polyline", { points: "15 3 21 3 21 9" }),
        /* @__PURE__ */ Z.jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
      ]
    }
  );
}
function Kn(b) {
  var z, N, T = "";
  if (typeof b == "string" || typeof b == "number") T += b;
  else if (typeof b == "object") if (Array.isArray(b)) {
    var D = b.length;
    for (z = 0; z < D; z++) b[z] && (N = Kn(b[z])) && (T && (T += " "), T += N);
  } else for (N in b) b[N] && (T && (T += " "), T += N);
  return T;
}
function Co() {
  for (var b, z, N = 0, T = "", D = arguments.length; N < D; N++) (b = arguments[N]) && (z = Kn(b)) && (T && (T += " "), T += z);
  return T;
}
const Ar = "-", No = (b) => {
  const z = Eo(b), {
    conflictingClassGroups: N,
    conflictingClassGroupModifiers: T
  } = b;
  return {
    getClassGroupId: (I) => {
      const P = I.split(Ar);
      return P[0] === "" && P.length !== 1 && P.shift(), Zn(P, z) || Bo(I);
    },
    getConflictingClassGroupIds: (I, P) => {
      const G = N[I] || [];
      return P && T[I] ? [...G, ...T[I]] : G;
    }
  };
}, Zn = (b, z) => {
  var I;
  if (b.length === 0)
    return z.classGroupId;
  const N = b[0], T = z.nextPart.get(N), D = T ? Zn(b.slice(1), T) : void 0;
  if (D)
    return D;
  if (z.validators.length === 0)
    return;
  const w = b.join(Ar);
  return (I = z.validators.find(({
    validator: P
  }) => P(w))) == null ? void 0 : I.classGroupId;
}, Wn = /^\[(.+)\]$/, Bo = (b) => {
  if (Wn.test(b)) {
    const z = Wn.exec(b)[1], N = z == null ? void 0 : z.substring(0, z.indexOf(":"));
    if (N)
      return "arbitrary.." + N;
  }
}, Eo = (b) => {
  const {
    theme: z,
    prefix: N
  } = b, T = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ro(Object.entries(b.classGroups), N).forEach(([w, I]) => {
    Tr(I, T, w, z);
  }), T;
}, Tr = (b, z, N, T) => {
  b.forEach((D) => {
    if (typeof D == "string") {
      const w = D === "" ? z : $n(z, D);
      w.classGroupId = N;
      return;
    }
    if (typeof D == "function") {
      if (Do(D)) {
        Tr(D(T), z, N, T);
        return;
      }
      z.validators.push({
        validator: D,
        classGroupId: N
      });
      return;
    }
    Object.entries(D).forEach(([w, I]) => {
      Tr(I, $n(z, w), N, T);
    });
  });
}, $n = (b, z) => {
  let N = b;
  return z.split(Ar).forEach((T) => {
    N.nextPart.has(T) || N.nextPart.set(T, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), N = N.nextPart.get(T);
  }), N;
}, Do = (b) => b.isThemeGetter, Ro = (b, z) => z ? b.map(([N, T]) => {
  const D = T.map((w) => typeof w == "string" ? z + w : typeof w == "object" ? Object.fromEntries(Object.entries(w).map(([I, P]) => [z + I, P])) : w);
  return [N, D];
}) : b, Oo = (b) => {
  if (b < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let z = 0, N = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  const D = (w, I) => {
    N.set(w, I), z++, z > b && (z = 0, T = N, N = /* @__PURE__ */ new Map());
  };
  return {
    get(w) {
      let I = N.get(w);
      if (I !== void 0)
        return I;
      if ((I = T.get(w)) !== void 0)
        return D(w, I), I;
    },
    set(w, I) {
      N.has(w) ? N.set(w, I) : D(w, I);
    }
  };
}, Jn = "!", qo = (b) => {
  const {
    separator: z,
    experimentalParseClassName: N
  } = b, T = z.length === 1, D = z[0], w = z.length, I = (P) => {
    const G = [];
    let n0 = 0, J = 0, m0;
    for (let X = 0; X < P.length; X++) {
      let O = P[X];
      if (n0 === 0) {
        if (O === D && (T || P.slice(X, X + w) === z)) {
          G.push(P.slice(J, X)), J = X + w;
          continue;
        }
        if (O === "/") {
          m0 = X;
          continue;
        }
      }
      O === "[" ? n0++ : O === "]" && n0--;
    }
    const x0 = G.length === 0 ? P : P.substring(J), S0 = x0.startsWith(Jn), B0 = S0 ? x0.substring(1) : x0, b0 = m0 && m0 > J ? m0 - J : void 0;
    return {
      modifiers: G,
      hasImportantModifier: S0,
      baseClassName: B0,
      maybePostfixModifierPosition: b0
    };
  };
  return N ? (P) => N({
    className: P,
    parseClassName: I
  }) : I;
}, Io = (b) => {
  if (b.length <= 1)
    return b;
  const z = [];
  let N = [];
  return b.forEach((T) => {
    T[0] === "[" ? (z.push(...N.sort(), T), N = []) : N.push(T);
  }), z.push(...N.sort()), z;
}, Lo = (b) => ({
  cache: Oo(b.cacheSize),
  parseClassName: qo(b),
  ...No(b)
}), Po = /\s+/, Fo = (b, z) => {
  const {
    parseClassName: N,
    getClassGroupId: T,
    getConflictingClassGroupIds: D
  } = z, w = [], I = b.trim().split(Po);
  let P = "";
  for (let G = I.length - 1; G >= 0; G -= 1) {
    const n0 = I[G], {
      modifiers: J,
      hasImportantModifier: m0,
      baseClassName: x0,
      maybePostfixModifierPosition: S0
    } = N(n0);
    let B0 = !!S0, b0 = T(B0 ? x0.substring(0, S0) : x0);
    if (!b0) {
      if (!B0) {
        P = n0 + (P.length > 0 ? " " + P : P);
        continue;
      }
      if (b0 = T(x0), !b0) {
        P = n0 + (P.length > 0 ? " " + P : P);
        continue;
      }
      B0 = !1;
    }
    const X = Io(J).join(":"), O = m0 ? X + Jn : X, e0 = O + b0;
    if (w.includes(e0))
      continue;
    w.push(e0);
    const ae = D(b0, B0);
    for (let F0 = 0; F0 < ae.length; ++F0) {
      const R0 = ae[F0];
      w.push(O + R0);
    }
    P = n0 + (P.length > 0 ? " " + P : P);
  }
  return P;
};
function Ho() {
  let b = 0, z, N, T = "";
  for (; b < arguments.length; )
    (z = arguments[b++]) && (N = Qn(z)) && (T && (T += " "), T += N);
  return T;
}
const Qn = (b) => {
  if (typeof b == "string")
    return b;
  let z, N = "";
  for (let T = 0; T < b.length; T++)
    b[T] && (z = Qn(b[T])) && (N && (N += " "), N += z);
  return N;
};
function _o(b, ...z) {
  let N, T, D, w = I;
  function I(G) {
    const n0 = z.reduce((J, m0) => m0(J), b());
    return N = Lo(n0), T = N.cache.get, D = N.cache.set, w = P, P(G);
  }
  function P(G) {
    const n0 = T(G);
    if (n0)
      return n0;
    const J = Fo(G, N);
    return D(G, J), J;
  }
  return function() {
    return w(Ho.apply(null, arguments));
  };
}
const g0 = (b) => {
  const z = (N) => N[b] || [];
  return z.isThemeGetter = !0, z;
}, es = /^\[(?:([a-z-]+):)?(.+)\]$/i, jo = /^\d+\/\d+$/, Go = /* @__PURE__ */ new Set(["px", "full", "screen"]), Vo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $o = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Uo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pe = (b) => Ve(b) || Go.has(b) || jo.test(b), Te = (b) => We(b, "length", ri), Ve = (b) => !!b && !Number.isNaN(Number(b)), Mr = (b) => We(b, "number", Ve), ct = (b) => !!b && Number.isInteger(Number(b)), Xo = (b) => b.endsWith("%") && Ve(b.slice(0, -1)), U = (b) => es.test(b), Ae = (b) => Vo.test(b), Ko = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zo = (b) => We(b, Ko, ts), Jo = (b) => We(b, "position", ts), Qo = /* @__PURE__ */ new Set(["image", "url"]), ei = (b) => We(b, Qo, si), ti = (b) => We(b, "", ni), ut = () => !0, We = (b, z, N) => {
  const T = es.exec(b);
  return T ? T[1] ? typeof z == "string" ? T[1] === z : z.has(T[1]) : N(T[2]) : !1;
}, ri = (b) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wo.test(b) && !$o.test(b)
), ts = () => !1, ni = (b) => Uo.test(b), si = (b) => Yo.test(b), oi = () => {
  const b = g0("colors"), z = g0("spacing"), N = g0("blur"), T = g0("brightness"), D = g0("borderColor"), w = g0("borderRadius"), I = g0("borderSpacing"), P = g0("borderWidth"), G = g0("contrast"), n0 = g0("grayscale"), J = g0("hueRotate"), m0 = g0("invert"), x0 = g0("gap"), S0 = g0("gradientColorStops"), B0 = g0("gradientColorStopPositions"), b0 = g0("inset"), X = g0("margin"), O = g0("opacity"), e0 = g0("padding"), ae = g0("saturate"), F0 = g0("scale"), R0 = g0("sepia"), ge = g0("skew"), le = g0("space"), U0 = g0("translate"), D0 = () => ["auto", "contain", "none"], Y0 = () => ["auto", "hidden", "clip", "visible", "scroll"], N0 = () => ["auto", U, z], t0 = () => [U, z], l0 = () => ["", pe, Te], w0 = () => ["auto", Ve, U], J0 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ce = () => ["solid", "dashed", "dotted", "double", "none"], Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Q0 = () => ["", "0", U], Ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Ve, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ut],
      spacing: [pe, Te],
      blur: ["none", "", Ae, U],
      brightness: F(),
      borderColor: [b],
      borderRadius: ["none", "", "full", Ae, U],
      borderSpacing: t0(),
      borderWidth: l0(),
      contrast: F(),
      grayscale: Q0(),
      hueRotate: F(),
      invert: Q0(),
      gap: t0(),
      gradientColorStops: [b],
      gradientColorStopPositions: [Xo, Te],
      inset: N0(),
      margin: N0(),
      opacity: F(),
      padding: t0(),
      saturate: F(),
      scale: F(),
      sepia: Q0(),
      skew: F(),
      space: t0(),
      translate: t0()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ae]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...J0(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Y0()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Y0()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Y0()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D0()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D0()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D0()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b0]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b0]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b0]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b0]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b0]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b0]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b0]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b0]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b0]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ct, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N0()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Q0()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Q0()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ct, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ut]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ct, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": w0()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": w0()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ut]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ct, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": w0()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": w0()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x0]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x0]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x0]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...be()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...be(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...be(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [e0]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [e0]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [e0]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [e0]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [e0]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [e0]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [e0]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [e0]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [e0]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [X]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [X]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [X]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [X]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [X]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [X]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [X]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [X]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [X]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [le]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [le]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, z]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, z, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, z, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ae]
        }, Ae]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, z, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, z, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, z, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, z, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ae, Te]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ut]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ve, Mr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pe, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [b]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [b]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [O]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", pe, Te]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pe, U]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [b]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: t0()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [O]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...J0(), Jo]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Zo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ei]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [b]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [B0]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [B0]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [B0]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [S0]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S0]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S0]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [w]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [w]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [w]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [w]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [w]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [w]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [w]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [w]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [w]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [w]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [w]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [w]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [w]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [w]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [w]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [P]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [P]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [P]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [P]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [P]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [P]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [P]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [P]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [P]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [O]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [P]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [P]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [O]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ce()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [D]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [D]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [D]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [D]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [D]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [D]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [D]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [D]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [D]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [D]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ce()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pe, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pe, Te]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [b]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: l0()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [b]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [O]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [pe, Te]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [b]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ae, ti]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ut]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ce(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ce()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [N]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [G]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ae, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [n0]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m0]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R0]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [N]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [G]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [n0]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m0]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R0]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [I]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [I]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [I]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [F0]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [F0]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [F0]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ct, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U0]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U0]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ge]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ge]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", b]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [b]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": t0()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": t0()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": t0()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": t0()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": t0()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": t0()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": t0()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": t0()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": t0()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": t0()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": t0()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": t0()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": t0()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": t0()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": t0()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": t0()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": t0()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": t0()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [b, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [pe, Te, Mr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [b, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ii = /* @__PURE__ */ _o(oi);
function Un(...b) {
  return ii(Co(b));
}
function ai(b) {
  return /* @__PURE__ */ Z.jsx(
    "svg",
    {
      ...b,
      xmlns: "http://www.w3.org/2000/svg",
      width: b.width ?? 24,
      height: b.height ?? b.width ?? 24,
      viewBox: b.viewBox ?? "0 0 24 24",
      fill: b.fill ?? "none",
      stroke: b.stroke ?? "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ Z.jsx("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })
    }
  );
}
function li(b) {
  return /* @__PURE__ */ Z.jsxs(
    "svg",
    {
      ...b,
      xmlns: "http://www.w3.org/2000/svg",
      width: b.width ?? 24,
      height: b.height ?? b.width ?? 24,
      viewBox: b.viewBox ?? "0 0 24 24",
      fill: b.fill ?? "none",
      stroke: b.stroke ?? "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ Z.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
        /* @__PURE__ */ Z.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        /* @__PURE__ */ Z.jsx("polyline", { points: "21 15 16 10 5 21" })
      ]
    }
  );
}
function ki({
  className: b,
  value: z,
  onChange: N,
  placeholder: T,
  showLatexHelp: D,
  showInsertButtons: w
}) {
  D === void 0 && (D = !0), w === void 0 && (w = !0);
  const [I, P] = mo("edit"), G = fo(), n0 = (X) => {
    G.current && (G.current.value += X, G.current.focus(), b0({ target: { value: G.current.value } }));
  }, J = () => n0("$\\frac{a}{b}$"), m0 = () => n0("$a^b$"), x0 = () => n0("$\\overline{ab}$"), S0 = () => n0("$\\triangle$"), B0 = () => n0("$\\measuredangle$"), b0 = ({
    target: { value: X }
  }) => {
    N(X);
  };
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      className: Un(
        "group relative flex w-full flex-col rounded-md font-serif shadow-md focus-within:rounded-t-none",
        b
      ),
      children: [
        w && /* @__PURE__ */ Z.jsxs(
          "div",
          {
            className: `absolute left-0 right-0 top-0 z-10 flex flex-row overflow-x-auto rounded-t-md border border-b-0 bg-gray-100 text-sm duration-100 ${I === "edit" ? "group-focus-within:-top-[41px]" : ""}`,
            onClick: () => {
              var X;
              return (X = G.current) == null ? void 0 : X.focus();
            },
            children: [
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg",
                  onClick: J,
                  children: /* @__PURE__ */ Z.jsx(Ge, { children: "$\\frac{a}{b}$" })
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg",
                  onClick: m0,
                  children: /* @__PURE__ */ Z.jsx(Ge, { children: "$a^b$" })
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg",
                  onClick: x0,
                  children: /* @__PURE__ */ Z.jsx(Ge, { children: "$\\overline{ab}$" })
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg",
                  onClick: S0,
                  children: /* @__PURE__ */ Z.jsx(Ge, { children: "$\\triangle$" })
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg",
                  onClick: B0,
                  children: /* @__PURE__ */ Z.jsx(Ge, { children: "$\\measuredangle$" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ Z.jsxs(
          "div",
          {
            className: `flex flex-row z-20 gap-1 rounded-t-md border border-b-0 p-1 bg-gray-100 font-sans ${I === "preview" ? "border-t rounded-t-md" : `${w && "group-focus-within:border-t-0 group-focus-within:rounded-t-none"}`}`,
            children: [
              /* @__PURE__ */ Z.jsxs(
                "button",
                {
                  className: `gap-2 text-xs px-4 py-1 cursor-pointer hover:bg-black/5 rounded-lg flex flex-row items-center justify-center font-medium text-gray-600 duration-100 ${I === "edit" ? "bg-black/5" : ""}`,
                  onClick: () => {
                    var X;
                    P("edit"), (X = G.current) == null || X.focus();
                  },
                  children: [
                    /* @__PURE__ */ Z.jsx(ai, { className: "h-3 w-3" }),
                    /* @__PURE__ */ Z.jsx("span", { children: "Edit" })
                  ]
                }
              ),
              /* @__PURE__ */ Z.jsxs(
                "button",
                {
                  className: `gap-2 text-xs px-4 py-1 cursor-pointer hover:bg-black/5 rounded-lg flex flex-row items-center justify-center font-medium text-gray-600 duration-100 ${I === "preview" ? "bg-black/5" : ""}`,
                  onClick: () => {
                    P("preview");
                  },
                  children: [
                    /* @__PURE__ */ Z.jsx(li, { className: "h-3 w-3" }),
                    /* @__PURE__ */ Z.jsx("span", { children: "Preview" })
                  ]
                }
              )
            ]
          }
        ),
        I === "edit" ? /* @__PURE__ */ Z.jsx(
          "textarea",
          {
            className: Un(
              `z-20 min-h-24 w-full rounded-md rounded-t-none border bg-white p-2 text-sm ${D && "focus:rounded-b-none"} focus:outline-none`,
              b
            ),
            onChange: b0,
            value: z,
            placeholder: T,
            ref: G
          }
        ) : /* @__PURE__ */ Z.jsx("div", { className: "z-20 min-h-24 w-fill rounded-md rounded-t-none border bg-white p-2 text-sm", children: /* @__PURE__ */ Z.jsx(Ge, { children: z }) }),
        D && /* @__PURE__ */ Z.jsx(
          "div",
          {
            className: `absolute bottom-0 left-0 right-0 z-10 rounded-b-md border border-t-0 bg-gray-50 p-1 font-sans text-xs font-medium text-gray-600 duration-100 ${I === "edit" ? "group-focus-within:-bottom-[33px]" : ""}`,
            onClick: () => {
              var X;
              return (X = G.current) == null ? void 0 : X.focus();
            },
            children: /* @__PURE__ */ Z.jsxs(
              "button",
              {
                className: "flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md px-2 py-1 duration-100 hover:bg-black/5 w-full",
                onClick: () => window.open("https://quickref.me/latex.html", "_blank"),
                children: [
                  /* @__PURE__ */ Z.jsx("span", { children: "Inputs are written in LaTeX" }),
                  /* @__PURE__ */ Z.jsx(Ao, { className: "h-3 w-3" })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  Ge as Latex,
  ki as MathEditor
};
//# sourceMappingURL=index.es.js.map
