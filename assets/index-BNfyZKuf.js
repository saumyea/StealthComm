function PE(n, l) {
	for (var o = 0; o < l.length; o++) {
		const i = l[o];
		if (typeof i != "string" && !Array.isArray(i)) {
			for (const c in i)
				if (c !== "default" && !(c in n)) {
					const u = Object.getOwnPropertyDescriptor(i, c);
					u &&
						Object.defineProperty(
							n,
							c,
							u.get ? u : { enumerable: !0, get: () => i[c] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const l = document.createElement("link").relList;
	if (l && l.supports && l.supports("modulepreload")) return;
	for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
		i(c);
	new MutationObserver((c) => {
		for (const u of c)
			if (u.type === "childList")
				for (const d of u.addedNodes)
					d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(c) {
		const u = {};
		return (
			c.integrity && (u.integrity = c.integrity),
			c.referrerPolicy && (u.referrerPolicy = c.referrerPolicy),
			c.crossOrigin === "use-credentials"
				? (u.credentials = "include")
				: c.crossOrigin === "anonymous"
				? (u.credentials = "omit")
				: (u.credentials = "same-origin"),
			u
		);
	}
	function i(c) {
		if (c.ep) return;
		c.ep = !0;
		const u = o(c);
		fetch(c.href, u);
	}
})();
function ny(n) {
	return n &&
		n.__esModule &&
		Object.prototype.hasOwnProperty.call(n, "default")
		? n.default
		: n;
}
var rf = { exports: {} },
	ro = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv;
function LE() {
	if (Vv) return ro;
	Vv = 1;
	var n = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.fragment");
	function o(i, c, u) {
		var d = null;
		if (
			(u !== void 0 && (d = "" + u),
			c.key !== void 0 && (d = "" + c.key),
			"key" in c)
		) {
			u = {};
			for (var m in c) m !== "key" && (u[m] = c[m]);
		} else u = c;
		return (
			(c = u.ref),
			{
				$$typeof: n,
				type: i,
				key: d,
				ref: c !== void 0 ? c : null,
				props: u,
			}
		);
	}
	return (ro.Fragment = l), (ro.jsx = o), (ro.jsxs = o), ro;
}
var Kv;
function UE() {
	return Kv || ((Kv = 1), (rf.exports = LE())), rf.exports;
}
var h = UE(),
	lf = { exports: {} },
	Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qv;
function HE() {
	if (Qv) return Ee;
	Qv = 1;
	var n = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.portal"),
		o = Symbol.for("react.fragment"),
		i = Symbol.for("react.strict_mode"),
		c = Symbol.for("react.profiler"),
		u = Symbol.for("react.consumer"),
		d = Symbol.for("react.context"),
		m = Symbol.for("react.forward_ref"),
		g = Symbol.for("react.suspense"),
		p = Symbol.for("react.memo"),
		y = Symbol.for("react.lazy"),
		x = Symbol.iterator;
	function S(N) {
		return N === null || typeof N != "object"
			? null
			: ((N = (x && N[x]) || N["@@iterator"]),
			  typeof N == "function" ? N : null);
	}
	var E = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		C = Object.assign,
		A = {};
	function R(N, V, ee) {
		(this.props = N),
			(this.context = V),
			(this.refs = A),
			(this.updater = ee || E);
	}
	(R.prototype.isReactComponent = {}),
		(R.prototype.setState = function (N, V) {
			if (typeof N != "object" && typeof N != "function" && N != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables."
				);
			this.updater.enqueueSetState(this, N, V, "setState");
		}),
		(R.prototype.forceUpdate = function (N) {
			this.updater.enqueueForceUpdate(this, N, "forceUpdate");
		});
	function M() {}
	M.prototype = R.prototype;
	function k(N, V, ee) {
		(this.props = N),
			(this.context = V),
			(this.refs = A),
			(this.updater = ee || E);
	}
	var D = (k.prototype = new M());
	(D.constructor = k), C(D, R.prototype), (D.isPureReactComponent = !0);
	var L = Array.isArray,
		_ = { H: null, A: null, T: null, S: null, V: null },
		q = Object.prototype.hasOwnProperty;
	function P(N, V, ee, U, Q, ae) {
		return (
			(ee = ae.ref),
			{
				$$typeof: n,
				type: N,
				key: V,
				ref: ee !== void 0 ? ee : null,
				props: ae,
			}
		);
	}
	function X(N, V) {
		return P(N.type, V, void 0, void 0, void 0, N.props);
	}
	function ne(N) {
		return typeof N == "object" && N !== null && N.$$typeof === n;
	}
	function le(N) {
		var V = { "=": "=0", ":": "=2" };
		return (
			"$" +
			N.replace(/[=:]/g, function (ee) {
				return V[ee];
			})
		);
	}
	var de = /\/+/g;
	function oe(N, V) {
		return typeof N == "object" && N !== null && N.key != null
			? le("" + N.key)
			: V.toString(36);
	}
	function ve() {}
	function me(N) {
		switch (N.status) {
			case "fulfilled":
				return N.value;
			case "rejected":
				throw N.reason;
			default:
				switch (
					(typeof N.status == "string"
						? N.then(ve, ve)
						: ((N.status = "pending"),
						  N.then(
								function (V) {
									N.status === "pending" &&
										((N.status = "fulfilled"),
										(N.value = V));
								},
								function (V) {
									N.status === "pending" &&
										((N.status = "rejected"),
										(N.reason = V));
								}
						  )),
					N.status)
				) {
					case "fulfilled":
						return N.value;
					case "rejected":
						throw N.reason;
				}
		}
		throw N;
	}
	function fe(N, V, ee, U, Q) {
		var ae = typeof N;
		(ae === "undefined" || ae === "boolean") && (N = null);
		var W = !1;
		if (N === null) W = !0;
		else
			switch (ae) {
				case "bigint":
				case "string":
				case "number":
					W = !0;
					break;
				case "object":
					switch (N.$$typeof) {
						case n:
						case l:
							W = !0;
							break;
						case y:
							return (
								(W = N._init), fe(W(N._payload), V, ee, U, Q)
							);
					}
			}
		if (W)
			return (
				(Q = Q(N)),
				(W = U === "" ? "." + oe(N, 0) : U),
				L(Q)
					? ((ee = ""),
					  W != null && (ee = W.replace(de, "$&/") + "/"),
					  fe(Q, V, ee, "", function (pe) {
							return pe;
					  }))
					: Q != null &&
					  (ne(Q) &&
							(Q = X(
								Q,
								ee +
									(Q.key == null || (N && N.key === Q.key)
										? ""
										: ("" + Q.key).replace(de, "$&/") +
										  "/") +
									W
							)),
					  V.push(Q)),
				1
			);
		W = 0;
		var te = U === "" ? "." : U + ":";
		if (L(N))
			for (var re = 0; re < N.length; re++)
				(U = N[re]), (ae = te + oe(U, re)), (W += fe(U, V, ee, ae, Q));
		else if (((re = S(N)), typeof re == "function"))
			for (N = re.call(N), re = 0; !(U = N.next()).done; )
				(U = U.value),
					(ae = te + oe(U, re++)),
					(W += fe(U, V, ee, ae, Q));
		else if (ae === "object") {
			if (typeof N.then == "function") return fe(me(N), V, ee, U, Q);
			throw (
				((V = String(N)),
				Error(
					"Objects are not valid as a React child (found: " +
						(V === "[object Object]"
							? "object with keys {" +
							  Object.keys(N).join(", ") +
							  "}"
							: V) +
						"). If you meant to render a collection of children, use an array instead."
				))
			);
		}
		return W;
	}
	function j(N, V, ee) {
		if (N == null) return N;
		var U = [],
			Q = 0;
		return (
			fe(N, U, "", "", function (ae) {
				return V.call(ee, ae, Q++);
			}),
			U
		);
	}
	function I(N) {
		if (N._status === -1) {
			var V = N._result;
			(V = V()),
				V.then(
					function (ee) {
						(N._status === 0 || N._status === -1) &&
							((N._status = 1), (N._result = ee));
					},
					function (ee) {
						(N._status === 0 || N._status === -1) &&
							((N._status = 2), (N._result = ee));
					}
				),
				N._status === -1 && ((N._status = 0), (N._result = V));
		}
		if (N._status === 1) return N._result.default;
		throw N._result;
	}
	var G =
		typeof reportError == "function"
			? reportError
			: function (N) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var V = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof N == "object" &&
								N !== null &&
								typeof N.message == "string"
									? String(N.message)
									: String(N),
							error: N,
						});
						if (!window.dispatchEvent(V)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", N);
						return;
					}
					console.error(N);
			  };
	function J() {}
	return (
		(Ee.Children = {
			map: j,
			forEach: function (N, V, ee) {
				j(
					N,
					function () {
						V.apply(this, arguments);
					},
					ee
				);
			},
			count: function (N) {
				var V = 0;
				return (
					j(N, function () {
						V++;
					}),
					V
				);
			},
			toArray: function (N) {
				return (
					j(N, function (V) {
						return V;
					}) || []
				);
			},
			only: function (N) {
				if (!ne(N))
					throw Error(
						"React.Children.only expected to receive a single React element child."
					);
				return N;
			},
		}),
		(Ee.Component = R),
		(Ee.Fragment = o),
		(Ee.Profiler = c),
		(Ee.PureComponent = k),
		(Ee.StrictMode = i),
		(Ee.Suspense = g),
		(Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
			_),
		(Ee.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (N) {
				return _.H.useMemoCache(N);
			},
		}),
		(Ee.cache = function (N) {
			return function () {
				return N.apply(null, arguments);
			};
		}),
		(Ee.cloneElement = function (N, V, ee) {
			if (N == null)
				throw Error(
					"The argument must be a React element, but you passed " +
						N +
						"."
				);
			var U = C({}, N.props),
				Q = N.key,
				ae = void 0;
			if (V != null)
				for (W in (V.ref !== void 0 && (ae = void 0),
				V.key !== void 0 && (Q = "" + V.key),
				V))
					!q.call(V, W) ||
						W === "key" ||
						W === "__self" ||
						W === "__source" ||
						(W === "ref" && V.ref === void 0) ||
						(U[W] = V[W]);
			var W = arguments.length - 2;
			if (W === 1) U.children = ee;
			else if (1 < W) {
				for (var te = Array(W), re = 0; re < W; re++)
					te[re] = arguments[re + 2];
				U.children = te;
			}
			return P(N.type, Q, void 0, void 0, ae, U);
		}),
		(Ee.createContext = function (N) {
			return (
				(N = {
					$$typeof: d,
					_currentValue: N,
					_currentValue2: N,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(N.Provider = N),
				(N.Consumer = { $$typeof: u, _context: N }),
				N
			);
		}),
		(Ee.createElement = function (N, V, ee) {
			var U,
				Q = {},
				ae = null;
			if (V != null)
				for (U in (V.key !== void 0 && (ae = "" + V.key), V))
					q.call(V, U) &&
						U !== "key" &&
						U !== "__self" &&
						U !== "__source" &&
						(Q[U] = V[U]);
			var W = arguments.length - 2;
			if (W === 1) Q.children = ee;
			else if (1 < W) {
				for (var te = Array(W), re = 0; re < W; re++)
					te[re] = arguments[re + 2];
				Q.children = te;
			}
			if (N && N.defaultProps)
				for (U in ((W = N.defaultProps), W))
					Q[U] === void 0 && (Q[U] = W[U]);
			return P(N, ae, void 0, void 0, null, Q);
		}),
		(Ee.createRef = function () {
			return { current: null };
		}),
		(Ee.forwardRef = function (N) {
			return { $$typeof: m, render: N };
		}),
		(Ee.isValidElement = ne),
		(Ee.lazy = function (N) {
			return {
				$$typeof: y,
				_payload: { _status: -1, _result: N },
				_init: I,
			};
		}),
		(Ee.memo = function (N, V) {
			return { $$typeof: p, type: N, compare: V === void 0 ? null : V };
		}),
		(Ee.startTransition = function (N) {
			var V = _.T,
				ee = {};
			_.T = ee;
			try {
				var U = N(),
					Q = _.S;
				Q !== null && Q(ee, U),
					typeof U == "object" &&
						U !== null &&
						typeof U.then == "function" &&
						U.then(J, G);
			} catch (ae) {
				G(ae);
			} finally {
				_.T = V;
			}
		}),
		(Ee.unstable_useCacheRefresh = function () {
			return _.H.useCacheRefresh();
		}),
		(Ee.use = function (N) {
			return _.H.use(N);
		}),
		(Ee.useActionState = function (N, V, ee) {
			return _.H.useActionState(N, V, ee);
		}),
		(Ee.useCallback = function (N, V) {
			return _.H.useCallback(N, V);
		}),
		(Ee.useContext = function (N) {
			return _.H.useContext(N);
		}),
		(Ee.useDebugValue = function () {}),
		(Ee.useDeferredValue = function (N, V) {
			return _.H.useDeferredValue(N, V);
		}),
		(Ee.useEffect = function (N, V, ee) {
			var U = _.H;
			if (typeof ee == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React."
				);
			return U.useEffect(N, V);
		}),
		(Ee.useId = function () {
			return _.H.useId();
		}),
		(Ee.useImperativeHandle = function (N, V, ee) {
			return _.H.useImperativeHandle(N, V, ee);
		}),
		(Ee.useInsertionEffect = function (N, V) {
			return _.H.useInsertionEffect(N, V);
		}),
		(Ee.useLayoutEffect = function (N, V) {
			return _.H.useLayoutEffect(N, V);
		}),
		(Ee.useMemo = function (N, V) {
			return _.H.useMemo(N, V);
		}),
		(Ee.useOptimistic = function (N, V) {
			return _.H.useOptimistic(N, V);
		}),
		(Ee.useReducer = function (N, V, ee) {
			return _.H.useReducer(N, V, ee);
		}),
		(Ee.useRef = function (N) {
			return _.H.useRef(N);
		}),
		(Ee.useState = function (N) {
			return _.H.useState(N);
		}),
		(Ee.useSyncExternalStore = function (N, V, ee) {
			return _.H.useSyncExternalStore(N, V, ee);
		}),
		(Ee.useTransition = function () {
			return _.H.useTransition();
		}),
		(Ee.version = "19.1.0"),
		Ee
	);
}
var Zv;
function Kf() {
	return Zv || ((Zv = 1), (lf.exports = HE())), lf.exports;
}
var v = Kf();
const ma = ny(v),
	bo = PE({ __proto__: null, default: ma }, [v]);
var of = { exports: {} },
	lo = {},
	sf = { exports: {} },
	cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Iv;
function kE() {
	return (
		Iv ||
			((Iv = 1),
			(function (n) {
				function l(j, I) {
					var G = j.length;
					j.push(I);
					e: for (; 0 < G; ) {
						var J = (G - 1) >>> 1,
							N = j[J];
						if (0 < c(N, I)) (j[J] = I), (j[G] = N), (G = J);
						else break e;
					}
				}
				function o(j) {
					return j.length === 0 ? null : j[0];
				}
				function i(j) {
					if (j.length === 0) return null;
					var I = j[0],
						G = j.pop();
					if (G !== I) {
						j[0] = G;
						e: for (var J = 0, N = j.length, V = N >>> 1; J < V; ) {
							var ee = 2 * (J + 1) - 1,
								U = j[ee],
								Q = ee + 1,
								ae = j[Q];
							if (0 > c(U, G))
								Q < N && 0 > c(ae, U)
									? ((j[J] = ae), (j[Q] = G), (J = Q))
									: ((j[J] = U), (j[ee] = G), (J = ee));
							else if (Q < N && 0 > c(ae, G))
								(j[J] = ae), (j[Q] = G), (J = Q);
							else break e;
						}
					}
					return I;
				}
				function c(j, I) {
					var G = j.sortIndex - I.sortIndex;
					return G !== 0 ? G : j.id - I.id;
				}
				if (
					((n.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var u = performance;
					n.unstable_now = function () {
						return u.now();
					};
				} else {
					var d = Date,
						m = d.now();
					n.unstable_now = function () {
						return d.now() - m;
					};
				}
				var g = [],
					p = [],
					y = 1,
					x = null,
					S = 3,
					E = !1,
					C = !1,
					A = !1,
					R = !1,
					M = typeof setTimeout == "function" ? setTimeout : null,
					k = typeof clearTimeout == "function" ? clearTimeout : null,
					D = typeof setImmediate < "u" ? setImmediate : null;
				function L(j) {
					for (var I = o(p); I !== null; ) {
						if (I.callback === null) i(p);
						else if (I.startTime <= j)
							i(p), (I.sortIndex = I.expirationTime), l(g, I);
						else break;
						I = o(p);
					}
				}
				function _(j) {
					if (((A = !1), L(j), !C))
						if (o(g) !== null) (C = !0), q || ((q = !0), oe());
						else {
							var I = o(p);
							I !== null && fe(_, I.startTime - j);
						}
				}
				var q = !1,
					P = -1,
					X = 5,
					ne = -1;
				function le() {
					return R ? !0 : !(n.unstable_now() - ne < X);
				}
				function de() {
					if (((R = !1), q)) {
						var j = n.unstable_now();
						ne = j;
						var I = !0;
						try {
							e: {
								(C = !1),
									A && ((A = !1), k(P), (P = -1)),
									(E = !0);
								var G = S;
								try {
									t: {
										for (
											L(j), x = o(g);
											x !== null &&
											!(x.expirationTime > j && le());

										) {
											var J = x.callback;
											if (typeof J == "function") {
												(x.callback = null),
													(S = x.priorityLevel);
												var N = J(
													x.expirationTime <= j
												);
												if (
													((j = n.unstable_now()),
													typeof N == "function")
												) {
													(x.callback = N),
														L(j),
														(I = !0);
													break t;
												}
												x === o(g) && i(g), L(j);
											} else i(g);
											x = o(g);
										}
										if (x !== null) I = !0;
										else {
											var V = o(p);
											V !== null &&
												fe(_, V.startTime - j),
												(I = !1);
										}
									}
									break e;
								} finally {
									(x = null), (S = G), (E = !1);
								}
								I = void 0;
							}
						} finally {
							I ? oe() : (q = !1);
						}
					}
				}
				var oe;
				if (typeof D == "function")
					oe = function () {
						D(de);
					};
				else if (typeof MessageChannel < "u") {
					var ve = new MessageChannel(),
						me = ve.port2;
					(ve.port1.onmessage = de),
						(oe = function () {
							me.postMessage(null);
						});
				} else
					oe = function () {
						M(de, 0);
					};
				function fe(j, I) {
					P = M(function () {
						j(n.unstable_now());
					}, I);
				}
				(n.unstable_IdlePriority = 5),
					(n.unstable_ImmediatePriority = 1),
					(n.unstable_LowPriority = 4),
					(n.unstable_NormalPriority = 3),
					(n.unstable_Profiling = null),
					(n.unstable_UserBlockingPriority = 2),
					(n.unstable_cancelCallback = function (j) {
						j.callback = null;
					}),
					(n.unstable_forceFrameRate = function (j) {
						0 > j || 125 < j
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (X = 0 < j ? Math.floor(1e3 / j) : 5);
					}),
					(n.unstable_getCurrentPriorityLevel = function () {
						return S;
					}),
					(n.unstable_next = function (j) {
						switch (S) {
							case 1:
							case 2:
							case 3:
								var I = 3;
								break;
							default:
								I = S;
						}
						var G = S;
						S = I;
						try {
							return j();
						} finally {
							S = G;
						}
					}),
					(n.unstable_requestPaint = function () {
						R = !0;
					}),
					(n.unstable_runWithPriority = function (j, I) {
						switch (j) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								j = 3;
						}
						var G = S;
						S = j;
						try {
							return I();
						} finally {
							S = G;
						}
					}),
					(n.unstable_scheduleCallback = function (j, I, G) {
						var J = n.unstable_now();
						switch (
							(typeof G == "object" && G !== null
								? ((G = G.delay),
								  (G =
										typeof G == "number" && 0 < G
											? J + G
											: J))
								: (G = J),
							j)
						) {
							case 1:
								var N = -1;
								break;
							case 2:
								N = 250;
								break;
							case 5:
								N = 1073741823;
								break;
							case 4:
								N = 1e4;
								break;
							default:
								N = 5e3;
						}
						return (
							(N = G + N),
							(j = {
								id: y++,
								callback: I,
								priorityLevel: j,
								startTime: G,
								expirationTime: N,
								sortIndex: -1,
							}),
							G > J
								? ((j.sortIndex = G),
								  l(p, j),
								  o(g) === null &&
										j === o(p) &&
										(A ? (k(P), (P = -1)) : (A = !0),
										fe(_, G - J)))
								: ((j.sortIndex = N),
								  l(g, j),
								  C || E || ((C = !0), q || ((q = !0), oe()))),
							j
						);
					}),
					(n.unstable_shouldYield = le),
					(n.unstable_wrapCallback = function (j) {
						var I = S;
						return function () {
							var G = S;
							S = I;
							try {
								return j.apply(this, arguments);
							} finally {
								S = G;
							}
						};
					});
			})(cf)),
		cf
	);
}
var Fv;
function BE() {
	return Fv || ((Fv = 1), (sf.exports = kE())), sf.exports;
}
var uf = { exports: {} },
	vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wv;
function GE() {
	if (Wv) return vt;
	Wv = 1;
	var n = Kf();
	function l(g) {
		var p = "https://react.dev/errors/" + g;
		if (1 < arguments.length) {
			p += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var y = 2; y < arguments.length; y++)
				p += "&args[]=" + encodeURIComponent(arguments[y]);
		}
		return (
			"Minified React error #" +
			g +
			"; visit " +
			p +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function o() {}
	var i = {
			d: {
				f: o,
				r: function () {
					throw Error(l(522));
				},
				D: o,
				C: o,
				L: o,
				m: o,
				X: o,
				S: o,
				M: o,
			},
			p: 0,
			findDOMNode: null,
		},
		c = Symbol.for("react.portal");
	function u(g, p, y) {
		var x =
			3 < arguments.length && arguments[3] !== void 0
				? arguments[3]
				: null;
		return {
			$$typeof: c,
			key: x == null ? null : "" + x,
			children: g,
			containerInfo: p,
			implementation: y,
		};
	}
	var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function m(g, p) {
		if (g === "font") return "";
		if (typeof p == "string") return p === "use-credentials" ? p : "";
	}
	return (
		(vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
		(vt.createPortal = function (g, p) {
			var y =
				2 < arguments.length && arguments[2] !== void 0
					? arguments[2]
					: null;
			if (
				!p ||
				(p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
			)
				throw Error(l(299));
			return u(g, p, null, y);
		}),
		(vt.flushSync = function (g) {
			var p = d.T,
				y = i.p;
			try {
				if (((d.T = null), (i.p = 2), g)) return g();
			} finally {
				(d.T = p), (i.p = y), i.d.f();
			}
		}),
		(vt.preconnect = function (g, p) {
			typeof g == "string" &&
				(p
					? ((p = p.crossOrigin),
					  (p =
							typeof p == "string"
								? p === "use-credentials"
									? p
									: ""
								: void 0))
					: (p = null),
				i.d.C(g, p));
		}),
		(vt.prefetchDNS = function (g) {
			typeof g == "string" && i.d.D(g);
		}),
		(vt.preinit = function (g, p) {
			if (typeof g == "string" && p && typeof p.as == "string") {
				var y = p.as,
					x = m(y, p.crossOrigin),
					S = typeof p.integrity == "string" ? p.integrity : void 0,
					E =
						typeof p.fetchPriority == "string"
							? p.fetchPriority
							: void 0;
				y === "style"
					? i.d.S(
							g,
							typeof p.precedence == "string"
								? p.precedence
								: void 0,
							{ crossOrigin: x, integrity: S, fetchPriority: E }
					  )
					: y === "script" &&
					  i.d.X(g, {
							crossOrigin: x,
							integrity: S,
							fetchPriority: E,
							nonce:
								typeof p.nonce == "string" ? p.nonce : void 0,
					  });
			}
		}),
		(vt.preinitModule = function (g, p) {
			if (typeof g == "string")
				if (typeof p == "object" && p !== null) {
					if (p.as == null || p.as === "script") {
						var y = m(p.as, p.crossOrigin);
						i.d.M(g, {
							crossOrigin: y,
							integrity:
								typeof p.integrity == "string"
									? p.integrity
									: void 0,
							nonce:
								typeof p.nonce == "string" ? p.nonce : void 0,
						});
					}
				} else p == null && i.d.M(g);
		}),
		(vt.preload = function (g, p) {
			if (
				typeof g == "string" &&
				typeof p == "object" &&
				p !== null &&
				typeof p.as == "string"
			) {
				var y = p.as,
					x = m(y, p.crossOrigin);
				i.d.L(g, y, {
					crossOrigin: x,
					integrity:
						typeof p.integrity == "string" ? p.integrity : void 0,
					nonce: typeof p.nonce == "string" ? p.nonce : void 0,
					type: typeof p.type == "string" ? p.type : void 0,
					fetchPriority:
						typeof p.fetchPriority == "string"
							? p.fetchPriority
							: void 0,
					referrerPolicy:
						typeof p.referrerPolicy == "string"
							? p.referrerPolicy
							: void 0,
					imageSrcSet:
						typeof p.imageSrcSet == "string"
							? p.imageSrcSet
							: void 0,
					imageSizes:
						typeof p.imageSizes == "string" ? p.imageSizes : void 0,
					media: typeof p.media == "string" ? p.media : void 0,
				});
			}
		}),
		(vt.preloadModule = function (g, p) {
			if (typeof g == "string")
				if (p) {
					var y = m(p.as, p.crossOrigin);
					i.d.m(g, {
						as:
							typeof p.as == "string" && p.as !== "script"
								? p.as
								: void 0,
						crossOrigin: y,
						integrity:
							typeof p.integrity == "string"
								? p.integrity
								: void 0,
					});
				} else i.d.m(g);
		}),
		(vt.requestFormReset = function (g) {
			i.d.r(g);
		}),
		(vt.unstable_batchedUpdates = function (g, p) {
			return g(p);
		}),
		(vt.useFormState = function (g, p, y) {
			return d.H.useFormState(g, p, y);
		}),
		(vt.useFormStatus = function () {
			return d.H.useHostTransitionStatus();
		}),
		(vt.version = "19.1.0"),
		vt
	);
}
var Jv;
function ay() {
	if (Jv) return uf.exports;
	Jv = 1;
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (l) {
				console.error(l);
			}
	}
	return n(), (uf.exports = GE()), uf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg;
function $E() {
	if (eg) return lo;
	eg = 1;
	var n = BE(),
		l = Kf(),
		o = ay();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var a = 2; a < arguments.length; a++)
				t += "&args[]=" + encodeURIComponent(arguments[a]);
		}
		return (
			"Minified React error #" +
			e +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function c(e) {
		return !(
			!e ||
			(e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
		);
	}
	function u(e) {
		var t = e,
			a = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do
				(t = e),
					(t.flags & 4098) !== 0 && (a = t.return),
					(e = t.return);
			while (e);
		}
		return t.tag === 3 ? a : null;
	}
	function d(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (
				(t === null &&
					((e = e.alternate), e !== null && (t = e.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function m(e) {
		if (u(e) !== e) throw Error(i(188));
	}
	function g(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = u(e)), t === null)) throw Error(i(188));
			return t !== e ? null : e;
		}
		for (var a = e, r = t; ; ) {
			var s = a.return;
			if (s === null) break;
			var f = s.alternate;
			if (f === null) {
				if (((r = s.return), r !== null)) {
					a = r;
					continue;
				}
				break;
			}
			if (s.child === f.child) {
				for (f = s.child; f; ) {
					if (f === a) return m(s), e;
					if (f === r) return m(s), t;
					f = f.sibling;
				}
				throw Error(i(188));
			}
			if (a.return !== r.return) (a = s), (r = f);
			else {
				for (var b = !1, w = s.child; w; ) {
					if (w === a) {
						(b = !0), (a = s), (r = f);
						break;
					}
					if (w === r) {
						(b = !0), (r = s), (a = f);
						break;
					}
					w = w.sibling;
				}
				if (!b) {
					for (w = f.child; w; ) {
						if (w === a) {
							(b = !0), (a = f), (r = s);
							break;
						}
						if (w === r) {
							(b = !0), (r = f), (a = s);
							break;
						}
						w = w.sibling;
					}
					if (!b) throw Error(i(189));
				}
			}
			if (a.alternate !== r) throw Error(i(190));
		}
		if (a.tag !== 3) throw Error(i(188));
		return a.stateNode.current === a ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null; ) {
			if (((t = p(e)), t !== null)) return t;
			e = e.sibling;
		}
		return null;
	}
	var y = Object.assign,
		x = Symbol.for("react.element"),
		S = Symbol.for("react.transitional.element"),
		E = Symbol.for("react.portal"),
		C = Symbol.for("react.fragment"),
		A = Symbol.for("react.strict_mode"),
		R = Symbol.for("react.profiler"),
		M = Symbol.for("react.provider"),
		k = Symbol.for("react.consumer"),
		D = Symbol.for("react.context"),
		L = Symbol.for("react.forward_ref"),
		_ = Symbol.for("react.suspense"),
		q = Symbol.for("react.suspense_list"),
		P = Symbol.for("react.memo"),
		X = Symbol.for("react.lazy"),
		ne = Symbol.for("react.activity"),
		le = Symbol.for("react.memo_cache_sentinel"),
		de = Symbol.iterator;
	function oe(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (de && e[de]) || e["@@iterator"]),
			  typeof e == "function" ? e : null);
	}
	var ve = Symbol.for("react.client.reference");
	function me(e) {
		if (e == null) return null;
		if (typeof e == "function")
			return e.$$typeof === ve ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case C:
				return "Fragment";
			case R:
				return "Profiler";
			case A:
				return "StrictMode";
			case _:
				return "Suspense";
			case q:
				return "SuspenseList";
			case ne:
				return "Activity";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case E:
					return "Portal";
				case D:
					return (e.displayName || "Context") + ".Provider";
				case k:
					return (e._context.displayName || "Context") + ".Consumer";
				case L:
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ""),
							(e =
								e !== ""
									? "ForwardRef(" + e + ")"
									: "ForwardRef")),
						e
					);
				case P:
					return (
						(t = e.displayName || null),
						t !== null ? t : me(e.type) || "Memo"
					);
				case X:
					(t = e._payload), (e = e._init);
					try {
						return me(e(t));
					} catch {}
			}
		return null;
	}
	var fe = Array.isArray,
		j = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		I = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		G = { pending: !1, data: null, method: null, action: null },
		J = [],
		N = -1;
	function V(e) {
		return { current: e };
	}
	function ee(e) {
		0 > N || ((e.current = J[N]), (J[N] = null), N--);
	}
	function U(e, t) {
		N++, (J[N] = e.current), (e.current = t);
	}
	var Q = V(null),
		ae = V(null),
		W = V(null),
		te = V(null);
	function re(e, t) {
		switch ((U(W, t), U(ae, e), U(Q, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? xv(e) : 0;
				break;
			default:
				if (((e = t.tagName), (t = t.namespaceURI)))
					(t = xv(t)), (e = Sv(t, e));
				else
					switch (e) {
						case "svg":
							e = 1;
							break;
						case "math":
							e = 2;
							break;
						default:
							e = 0;
					}
		}
		ee(Q), U(Q, e);
	}
	function pe() {
		ee(Q), ee(ae), ee(W);
	}
	function we(e) {
		e.memoizedState !== null && U(te, e);
		var t = Q.current,
			a = Sv(t, e.type);
		t !== a && (U(ae, e), U(Q, a));
	}
	function Ue(e) {
		ae.current === e && (ee(Q), ee(ae)),
			te.current === e && (ee(te), (Jl._currentValue = G));
	}
	var He = Object.prototype.hasOwnProperty,
		xe = n.unstable_scheduleCallback,
		Xe = n.unstable_cancelCallback,
		Tt = n.unstable_shouldYield,
		$t = n.unstable_requestPaint,
		et = n.unstable_now,
		Ze = n.unstable_getCurrentPriorityLevel,
		tt = n.unstable_ImmediatePriority,
		_o = n.unstable_UserBlockingPriority,
		sn = n.unstable_NormalPriority,
		Do = n.unstable_LowPriority,
		jo = n.unstable_IdlePriority,
		gS = n.log,
		yS = n.unstable_setDisableYieldValue,
		il = null,
		Mt = null;
	function $n(e) {
		if (
			(typeof gS == "function" && yS(e),
			Mt && typeof Mt.setStrictMode == "function")
		)
			try {
				Mt.setStrictMode(il, e);
			} catch {}
	}
	var Ot = Math.clz32 ? Math.clz32 : SS,
		bS = Math.log,
		xS = Math.LN2;
	function SS(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((bS(e) / xS) | 0)) | 0;
	}
	var zo = 256,
		Po = 4194304;
	function Ea(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e;
		}
	}
	function Lo(e, t, a) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var s = 0,
			f = e.suspendedLanes,
			b = e.pingedLanes;
		e = e.warmLanes;
		var w = r & 134217727;
		return (
			w !== 0
				? ((r = w & ~f),
				  r !== 0
						? (s = Ea(r))
						: ((b &= w),
						  b !== 0
								? (s = Ea(b))
								: a || ((a = w & ~e), a !== 0 && (s = Ea(a)))))
				: ((w = r & ~f),
				  w !== 0
						? (s = Ea(w))
						: b !== 0
						? (s = Ea(b))
						: a || ((a = r & ~e), a !== 0 && (s = Ea(a)))),
			s === 0
				? 0
				: t !== 0 &&
				  t !== s &&
				  (t & f) === 0 &&
				  ((f = s & -s),
				  (a = t & -t),
				  f >= a || (f === 32 && (a & 4194048) !== 0))
				? t
				: s
		);
	}
	function sl(e, t) {
		return (
			(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
		);
	}
	function wS(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function am() {
		var e = zo;
		return (zo <<= 1), (zo & 4194048) === 0 && (zo = 256), e;
	}
	function rm() {
		var e = Po;
		return (Po <<= 1), (Po & 62914560) === 0 && (Po = 4194304), e;
	}
	function Ks(e) {
		for (var t = [], a = 0; 31 > a; a++) t.push(e);
		return t;
	}
	function cl(e, t) {
		(e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0),
				(e.pingedLanes = 0),
				(e.warmLanes = 0));
	}
	function ES(e, t, a, r, s, f) {
		var b = e.pendingLanes;
		(e.pendingLanes = a),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= a),
			(e.entangledLanes &= a),
			(e.errorRecoveryDisabledLanes &= a),
			(e.shellSuspendCounter = 0);
		var w = e.entanglements,
			T = e.expirationTimes,
			B = e.hiddenUpdates;
		for (a = b & ~a; 0 < a; ) {
			var K = 31 - Ot(a),
				F = 1 << K;
			(w[K] = 0), (T[K] = -1);
			var $ = B[K];
			if ($ !== null)
				for (B[K] = null, K = 0; K < $.length; K++) {
					var Y = $[K];
					Y !== null && (Y.lane &= -536870913);
				}
			a &= ~F;
		}
		r !== 0 && lm(e, r, 0),
			f !== 0 &&
				s === 0 &&
				e.tag !== 0 &&
				(e.suspendedLanes |= f & ~(b & ~t));
	}
	function lm(e, t, a) {
		(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
		var r = 31 - Ot(t);
		(e.entangledLanes |= t),
			(e.entanglements[r] =
				e.entanglements[r] | 1073741824 | (a & 4194090));
	}
	function om(e, t) {
		var a = (e.entangledLanes |= t);
		for (e = e.entanglements; a; ) {
			var r = 31 - Ot(a),
				s = 1 << r;
			(s & t) | (e[r] & t) && (e[r] |= t), (a &= ~s);
		}
	}
	function Qs(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0;
		}
		return e;
	}
	function Zs(e) {
		return (
			(e &= -e),
			2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function im() {
		var e = I.p;
		return e !== 0
			? e
			: ((e = window.event), e === void 0 ? 32 : Bv(e.type));
	}
	function AS(e, t) {
		var a = I.p;
		try {
			return (I.p = e), t();
		} finally {
			I.p = a;
		}
	}
	var Yn = Math.random().toString(36).slice(2),
		ht = "__reactFiber$" + Yn,
		bt = "__reactProps$" + Yn,
		Wa = "__reactContainer$" + Yn,
		Is = "__reactEvents$" + Yn,
		CS = "__reactListeners$" + Yn,
		RS = "__reactHandles$" + Yn,
		sm = "__reactResources$" + Yn,
		ul = "__reactMarker$" + Yn;
	function Fs(e) {
		delete e[ht], delete e[bt], delete e[Is], delete e[CS], delete e[RS];
	}
	function Ja(e) {
		var t = e[ht];
		if (t) return t;
		for (var a = e.parentNode; a; ) {
			if ((t = a[Wa] || a[ht])) {
				if (
					((a = t.alternate),
					t.child !== null || (a !== null && a.child !== null))
				)
					for (e = Cv(e); e !== null; ) {
						if ((a = e[ht])) return a;
						e = Cv(e);
					}
				return t;
			}
			(e = a), (a = e.parentNode);
		}
		return null;
	}
	function er(e) {
		if ((e = e[ht] || e[Wa])) {
			var t = e.tag;
			if (
				t === 5 ||
				t === 6 ||
				t === 13 ||
				t === 26 ||
				t === 27 ||
				t === 3
			)
				return e;
		}
		return null;
	}
	function fl(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function tr(e) {
		var t = e[sm];
		return (
			t ||
				(t = e[sm] =
					{
						hoistableStyles: new Map(),
						hoistableScripts: new Map(),
					}),
			t
		);
	}
	function it(e) {
		e[ul] = !0;
	}
	var cm = new Set(),
		um = {};
	function Aa(e, t) {
		nr(e, t), nr(e + "Capture", t);
	}
	function nr(e, t) {
		for (um[e] = t, e = 0; e < t.length; e++) cm.add(t[e]);
	}
	var NS = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
		),
		fm = {},
		dm = {};
	function TS(e) {
		return He.call(dm, e)
			? !0
			: He.call(fm, e)
			? !1
			: NS.test(e)
			? (dm[e] = !0)
			: ((fm[e] = !0), !1);
	}
	function Uo(e, t, a) {
		if (TS(t))
			if (a === null) e.removeAttribute(t);
			else {
				switch (typeof a) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, "" + a);
			}
	}
	function Ho(e, t, a) {
		if (a === null) e.removeAttribute(t);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + a);
		}
	}
	function Sn(e, t, a, r) {
		if (r === null) e.removeAttribute(a);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(a);
					return;
			}
			e.setAttributeNS(t, a, "" + r);
		}
	}
	var Ws, mm;
	function ar(e) {
		if (Ws === void 0)
			try {
				throw Error();
			} catch (a) {
				var t = a.stack.trim().match(/\n( *(at )?)/);
				(Ws = (t && t[1]) || ""),
					(mm =
						-1 <
						a.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < a.stack.indexOf("@")
							? "@unknown:0:0"
							: "");
			}
		return (
			`
` +
			Ws +
			e +
			mm
		);
	}
	var Js = !1;
	function ec(e, t) {
		if (!e || Js) return "";
		Js = !0;
		var a = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var F = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(F.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(F, []);
								} catch (Y) {
									var $ = Y;
								}
								Reflect.construct(e, [], F);
							} else {
								try {
									F.call();
								} catch (Y) {
									$ = Y;
								}
								e.call(F.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (Y) {
								$ = Y;
							}
							(F = e()) &&
								typeof F.catch == "function" &&
								F.catch(function () {});
						}
					} catch (Y) {
						if (Y && $ && typeof Y.stack == "string")
							return [Y.stack, $.stack];
					}
					return [null, null];
				},
			};
			r.DetermineComponentFrameRoot.displayName =
				"DetermineComponentFrameRoot";
			var s = Object.getOwnPropertyDescriptor(
				r.DetermineComponentFrameRoot,
				"name"
			);
			s &&
				s.configurable &&
				Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var f = r.DetermineComponentFrameRoot(),
				b = f[0],
				w = f[1];
			if (b && w) {
				var T = b.split(`
`),
					B = w.split(`
`);
				for (
					s = r = 0;
					r < T.length &&
					!T[r].includes("DetermineComponentFrameRoot");

				)
					r++;
				for (
					;
					s < B.length &&
					!B[s].includes("DetermineComponentFrameRoot");

				)
					s++;
				if (r === T.length || s === B.length)
					for (
						r = T.length - 1, s = B.length - 1;
						1 <= r && 0 <= s && T[r] !== B[s];

					)
						s--;
				for (; 1 <= r && 0 <= s; r--, s--)
					if (T[r] !== B[s]) {
						if (r !== 1 || s !== 1)
							do
								if ((r--, s--, 0 > s || T[r] !== B[s])) {
									var K =
										`
` + T[r].replace(" at new ", " at ");
									return (
										e.displayName &&
											K.includes("<anonymous>") &&
											(K = K.replace(
												"<anonymous>",
												e.displayName
											)),
										K
									);
								}
							while (1 <= r && 0 <= s);
						break;
					}
			}
		} finally {
			(Js = !1), (Error.prepareStackTrace = a);
		}
		return (a = e ? e.displayName || e.name : "") ? ar(a) : "";
	}
	function MS(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return ar(e.type);
			case 16:
				return ar("Lazy");
			case 13:
				return ar("Suspense");
			case 19:
				return ar("SuspenseList");
			case 0:
			case 15:
				return ec(e.type, !1);
			case 11:
				return ec(e.type.render, !1);
			case 1:
				return ec(e.type, !0);
			case 31:
				return ar("Activity");
			default:
				return "";
		}
	}
	function hm(e) {
		try {
			var t = "";
			do (t += MS(e)), (e = e.return);
			while (e);
			return t;
		} catch (a) {
			return (
				`
Error generating stack: ` +
				a.message +
				`
` +
				a.stack
			);
		}
	}
	function Yt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return "";
		}
	}
	function pm(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function OS(e) {
		var t = pm(e) ? "checked" : "value",
			a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			r = "" + e[t];
		if (
			!e.hasOwnProperty(t) &&
			typeof a < "u" &&
			typeof a.get == "function" &&
			typeof a.set == "function"
		) {
			var s = a.get,
				f = a.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return s.call(this);
					},
					set: function (b) {
						(r = "" + b), f.call(this, b);
					},
				}),
				Object.defineProperty(e, t, { enumerable: a.enumerable }),
				{
					getValue: function () {
						return r;
					},
					setValue: function (b) {
						r = "" + b;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function ko(e) {
		e._valueTracker || (e._valueTracker = OS(e));
	}
	function vm(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var a = t.getValue(),
			r = "";
		return (
			e && (r = pm(e) ? (e.checked ? "true" : "false") : e.value),
			(e = r),
			e !== a ? (t.setValue(e), !0) : !1
		);
	}
	function Bo(e) {
		if (
			((e = e || (typeof document < "u" ? document : void 0)),
			typeof e > "u")
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var _S = /[\n"\\]/g;
	function qt(e) {
		return e.replace(_S, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function tc(e, t, a, r, s, f, b, w) {
		(e.name = ""),
			b != null &&
			typeof b != "function" &&
			typeof b != "symbol" &&
			typeof b != "boolean"
				? (e.type = b)
				: e.removeAttribute("type"),
			t != null
				? b === "number"
					? ((t === 0 && e.value === "") || e.value != t) &&
					  (e.value = "" + Yt(t))
					: e.value !== "" + Yt(t) && (e.value = "" + Yt(t))
				: (b !== "submit" && b !== "reset") ||
				  e.removeAttribute("value"),
			t != null
				? nc(e, b, Yt(t))
				: a != null
				? nc(e, b, Yt(a))
				: r != null && e.removeAttribute("value"),
			s == null && f != null && (e.defaultChecked = !!f),
			s != null &&
				(e.checked =
					s && typeof s != "function" && typeof s != "symbol"),
			w != null &&
			typeof w != "function" &&
			typeof w != "symbol" &&
			typeof w != "boolean"
				? (e.name = "" + Yt(w))
				: e.removeAttribute("name");
	}
	function gm(e, t, a, r, s, f, b, w) {
		if (
			(f != null &&
				typeof f != "function" &&
				typeof f != "symbol" &&
				typeof f != "boolean" &&
				(e.type = f),
			t != null || a != null)
		) {
			if (!((f !== "submit" && f !== "reset") || t != null)) return;
			(a = a != null ? "" + Yt(a) : ""),
				(t = t != null ? "" + Yt(t) : a),
				w || t === e.value || (e.value = t),
				(e.defaultValue = t);
		}
		(r = r ?? s),
			(r = typeof r != "function" && typeof r != "symbol" && !!r),
			(e.checked = w ? e.checked : !!r),
			(e.defaultChecked = !!r),
			b != null &&
				typeof b != "function" &&
				typeof b != "symbol" &&
				typeof b != "boolean" &&
				(e.name = b);
	}
	function nc(e, t, a) {
		(t === "number" && Bo(e.ownerDocument) === e) ||
			e.defaultValue === "" + a ||
			(e.defaultValue = "" + a);
	}
	function rr(e, t, a, r) {
		if (((e = e.options), t)) {
			t = {};
			for (var s = 0; s < a.length; s++) t["$" + a[s]] = !0;
			for (a = 0; a < e.length; a++)
				(s = t.hasOwnProperty("$" + e[a].value)),
					e[a].selected !== s && (e[a].selected = s),
					s && r && (e[a].defaultSelected = !0);
		} else {
			for (a = "" + Yt(a), t = null, s = 0; s < e.length; s++) {
				if (e[s].value === a) {
					(e[s].selected = !0), r && (e[s].defaultSelected = !0);
					return;
				}
				t !== null || e[s].disabled || (t = e[s]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function ym(e, t, a) {
		if (
			t != null &&
			((t = "" + Yt(t)), t !== e.value && (e.value = t), a == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = a != null ? "" + Yt(a) : "";
	}
	function bm(e, t, a, r) {
		if (t == null) {
			if (r != null) {
				if (a != null) throw Error(i(92));
				if (fe(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				a = r;
			}
			a == null && (a = ""), (t = a);
		}
		(a = Yt(t)),
			(e.defaultValue = a),
			(r = e.textContent),
			r === a && r !== "" && r !== null && (e.value = r);
	}
	function lr(e, t) {
		if (t) {
			var a = e.firstChild;
			if (a && a === e.lastChild && a.nodeType === 3) {
				a.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var DS = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" "
		)
	);
	function xm(e, t, a) {
		var r = t.indexOf("--") === 0;
		a == null || typeof a == "boolean" || a === ""
			? r
				? e.setProperty(t, "")
				: t === "float"
				? (e.cssFloat = "")
				: (e[t] = "")
			: r
			? e.setProperty(t, a)
			: typeof a != "number" || a === 0 || DS.has(t)
			? t === "float"
				? (e.cssFloat = a)
				: (e[t] = ("" + a).trim())
			: (e[t] = a + "px");
	}
	function Sm(e, t, a) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (((e = e.style), a != null)) {
			for (var r in a)
				!a.hasOwnProperty(r) ||
					(t != null && t.hasOwnProperty(r)) ||
					(r.indexOf("--") === 0
						? e.setProperty(r, "")
						: r === "float"
						? (e.cssFloat = "")
						: (e[r] = ""));
			for (var s in t)
				(r = t[s]), t.hasOwnProperty(s) && a[s] !== r && xm(e, s, r);
		} else for (var f in t) t.hasOwnProperty(f) && xm(e, f, t[f]);
	}
	function ac(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var jS = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		zS =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Go(e) {
		return zS.test("" + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	var rc = null;
	function lc(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var or = null,
		ir = null;
	function wm(e) {
		var t = er(e);
		if (t && (e = t.stateNode)) {
			var a = e[bt] || null;
			e: switch (((e = t.stateNode), t.type)) {
				case "input":
					if (
						(tc(
							e,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name
						),
						(t = a.name),
						a.type === "radio" && t != null)
					) {
						for (a = e; a.parentNode; ) a = a.parentNode;
						for (
							a = a.querySelectorAll(
								'input[name="' + qt("" + t) + '"][type="radio"]'
							),
								t = 0;
							t < a.length;
							t++
						) {
							var r = a[t];
							if (r !== e && r.form === e.form) {
								var s = r[bt] || null;
								if (!s) throw Error(i(90));
								tc(
									r,
									s.value,
									s.defaultValue,
									s.defaultValue,
									s.checked,
									s.defaultChecked,
									s.type,
									s.name
								);
							}
						}
						for (t = 0; t < a.length; t++)
							(r = a[t]), r.form === e.form && vm(r);
					}
					break e;
				case "textarea":
					ym(e, a.value, a.defaultValue);
					break e;
				case "select":
					(t = a.value), t != null && rr(e, !!a.multiple, t, !1);
			}
		}
	}
	var oc = !1;
	function Em(e, t, a) {
		if (oc) return e(t, a);
		oc = !0;
		try {
			var r = e(t);
			return r;
		} finally {
			if (
				((oc = !1),
				(or !== null || ir !== null) &&
					(Ri(),
					or && ((t = or), (e = ir), (ir = or = null), wm(t), e)))
			)
				for (t = 0; t < e.length; t++) wm(e[t]);
		}
	}
	function dl(e, t) {
		var a = e.stateNode;
		if (a === null) return null;
		var r = a[bt] || null;
		if (r === null) return null;
		a = r[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) ||
					((e = e.type),
					(r = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !r);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (a && typeof a != "function") throw Error(i(231, t, typeof a));
		return a;
	}
	var wn = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		ic = !1;
	if (wn)
		try {
			var ml = {};
			Object.defineProperty(ml, "passive", {
				get: function () {
					ic = !0;
				},
			}),
				window.addEventListener("test", ml, ml),
				window.removeEventListener("test", ml, ml);
		} catch {
			ic = !1;
		}
	var qn = null,
		sc = null,
		$o = null;
	function Am() {
		if ($o) return $o;
		var e,
			t = sc,
			a = t.length,
			r,
			s = "value" in qn ? qn.value : qn.textContent,
			f = s.length;
		for (e = 0; e < a && t[e] === s[e]; e++);
		var b = a - e;
		for (r = 1; r <= b && t[a - r] === s[f - r]; r++);
		return ($o = s.slice(e, 1 < r ? 1 - r : void 0));
	}
	function Yo(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function qo() {
		return !0;
	}
	function Cm() {
		return !1;
	}
	function xt(e) {
		function t(a, r, s, f, b) {
			(this._reactName = a),
				(this._targetInst = s),
				(this.type = r),
				(this.nativeEvent = f),
				(this.target = b),
				(this.currentTarget = null);
			for (var w in e)
				e.hasOwnProperty(w) &&
					((a = e[w]), (this[w] = a ? a(f) : f[w]));
			return (
				(this.isDefaultPrevented = (
					f.defaultPrevented != null
						? f.defaultPrevented
						: f.returnValue === !1
				)
					? qo
					: Cm),
				(this.isPropagationStopped = Cm),
				this
			);
		}
		return (
			y(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var a = this.nativeEvent;
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != "unknown" &&
							  (a.returnValue = !1),
						(this.isDefaultPrevented = qo));
				},
				stopPropagation: function () {
					var a = this.nativeEvent;
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != "unknown" &&
							  (a.cancelBubble = !0),
						(this.isPropagationStopped = qo));
				},
				persist: function () {},
				isPersistent: qo,
			}),
			t
		);
	}
	var Ca = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Xo = xt(Ca),
		hl = y({}, Ca, { view: 0, detail: 0 }),
		PS = xt(hl),
		cc,
		uc,
		pl,
		Vo = y({}, hl, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: dc,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget;
			},
			movementX: function (e) {
				return "movementX" in e
					? e.movementX
					: (e !== pl &&
							(pl && e.type === "mousemove"
								? ((cc = e.screenX - pl.screenX),
								  (uc = e.screenY - pl.screenY))
								: (uc = cc = 0),
							(pl = e)),
					  cc);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : uc;
			},
		}),
		Rm = xt(Vo),
		LS = y({}, Vo, { dataTransfer: 0 }),
		US = xt(LS),
		HS = y({}, hl, { relatedTarget: 0 }),
		fc = xt(HS),
		kS = y({}, Ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		BS = xt(kS),
		GS = y({}, Ca, {
			clipboardData: function (e) {
				return "clipboardData" in e
					? e.clipboardData
					: window.clipboardData;
			},
		}),
		$S = xt(GS),
		YS = y({}, Ca, { data: 0 }),
		Nm = xt(YS),
		qS = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		XS = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		VS = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function KS(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = VS[e])
			? !!t[e]
			: !1;
	}
	function dc() {
		return KS;
	}
	var QS = y({}, hl, {
			key: function (e) {
				if (e.key) {
					var t = qS[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress"
					? ((e = Yo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
					? XS[e.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: dc,
			charCode: function (e) {
				return e.type === "keypress" ? Yo(e) : 0;
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
			},
			which: function (e) {
				return e.type === "keypress"
					? Yo(e)
					: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
			},
		}),
		ZS = xt(QS),
		IS = y({}, Vo, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Tm = xt(IS),
		FS = y({}, hl, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: dc,
		}),
		WS = xt(FS),
		JS = y({}, Ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		ew = xt(JS),
		tw = y({}, Vo, {
			deltaX: function (e) {
				return "deltaX" in e
					? e.deltaX
					: "wheelDeltaX" in e
					? -e.wheelDeltaX
					: 0;
			},
			deltaY: function (e) {
				return "deltaY" in e
					? e.deltaY
					: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
					? -e.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		nw = xt(tw),
		aw = y({}, Ca, { newState: 0, oldState: 0 }),
		rw = xt(aw),
		lw = [9, 13, 27, 32],
		mc = wn && "CompositionEvent" in window,
		vl = null;
	wn && "documentMode" in document && (vl = document.documentMode);
	var ow = wn && "TextEvent" in window && !vl,
		Mm = wn && (!mc || (vl && 8 < vl && 11 >= vl)),
		Om = " ",
		_m = !1;
	function Dm(e, t) {
		switch (e) {
			case "keyup":
				return lw.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function jm(e) {
		return (
			(e = e.detail), typeof e == "object" && "data" in e ? e.data : null
		);
	}
	var sr = !1;
	function iw(e, t) {
		switch (e) {
			case "compositionend":
				return jm(t);
			case "keypress":
				return t.which !== 32 ? null : ((_m = !0), Om);
			case "textInput":
				return (e = t.data), e === Om && _m ? null : e;
			default:
				return null;
		}
	}
	function sw(e, t) {
		if (sr)
			return e === "compositionend" || (!mc && Dm(e, t))
				? ((e = Am()), ($o = sc = qn = null), (sr = !1), e)
				: null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (
					!(t.ctrlKey || t.altKey || t.metaKey) ||
					(t.ctrlKey && t.altKey)
				) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return Mm && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var cw = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function zm(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!cw[e.type] : t === "textarea";
	}
	function Pm(e, t, a, r) {
		or ? (ir ? ir.push(r) : (ir = [r])) : (or = r),
			(t = Di(t, "onChange")),
			0 < t.length &&
				((a = new Xo("onChange", "change", null, a, r)),
				e.push({ event: a, listeners: t }));
	}
	var gl = null,
		yl = null;
	function uw(e) {
		pv(e, 0);
	}
	function Ko(e) {
		var t = fl(e);
		if (vm(t)) return e;
	}
	function Lm(e, t) {
		if (e === "change") return t;
	}
	var Um = !1;
	if (wn) {
		var hc;
		if (wn) {
			var pc = "oninput" in document;
			if (!pc) {
				var Hm = document.createElement("div");
				Hm.setAttribute("oninput", "return;"),
					(pc = typeof Hm.oninput == "function");
			}
			hc = pc;
		} else hc = !1;
		Um = hc && (!document.documentMode || 9 < document.documentMode);
	}
	function km() {
		gl && (gl.detachEvent("onpropertychange", Bm), (yl = gl = null));
	}
	function Bm(e) {
		if (e.propertyName === "value" && Ko(yl)) {
			var t = [];
			Pm(t, yl, e, lc(e)), Em(uw, t);
		}
	}
	function fw(e, t, a) {
		e === "focusin"
			? (km(), (gl = t), (yl = a), gl.attachEvent("onpropertychange", Bm))
			: e === "focusout" && km();
	}
	function dw(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return Ko(yl);
	}
	function mw(e, t) {
		if (e === "click") return Ko(t);
	}
	function hw(e, t) {
		if (e === "input" || e === "change") return Ko(t);
	}
	function pw(e, t) {
		return (
			(e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
		);
	}
	var _t = typeof Object.is == "function" ? Object.is : pw;
	function bl(e, t) {
		if (_t(e, t)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var a = Object.keys(e),
			r = Object.keys(t);
		if (a.length !== r.length) return !1;
		for (r = 0; r < a.length; r++) {
			var s = a[r];
			if (!He.call(t, s) || !_t(e[s], t[s])) return !1;
		}
		return !0;
	}
	function Gm(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function $m(e, t) {
		var a = Gm(e);
		e = 0;
		for (var r; a; ) {
			if (a.nodeType === 3) {
				if (((r = e + a.textContent.length), e <= t && r >= t))
					return { node: a, offset: t - e };
				e = r;
			}
			e: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling;
						break e;
					}
					a = a.parentNode;
				}
				a = void 0;
			}
			a = Gm(a);
		}
	}
	function Ym(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? Ym(e, t.parentNode)
				: "contains" in e
				? e.contains(t)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function qm(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window;
		for (var t = Bo(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var a = typeof t.contentWindow.location.href == "string";
			} catch {
				a = !1;
			}
			if (a) e = t.contentWindow;
			else break;
			t = Bo(e.document);
		}
		return t;
	}
	function vc(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(e.type === "text" ||
					e.type === "search" ||
					e.type === "tel" ||
					e.type === "url" ||
					e.type === "password")) ||
				t === "textarea" ||
				e.contentEditable === "true")
		);
	}
	var vw = wn && "documentMode" in document && 11 >= document.documentMode,
		cr = null,
		gc = null,
		xl = null,
		yc = !1;
	function Xm(e, t, a) {
		var r =
			a.window === a
				? a.document
				: a.nodeType === 9
				? a
				: a.ownerDocument;
		yc ||
			cr == null ||
			cr !== Bo(r) ||
			((r = cr),
			"selectionStart" in r && vc(r)
				? (r = { start: r.selectionStart, end: r.selectionEnd })
				: ((r = (
						(r.ownerDocument && r.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (r = {
						anchorNode: r.anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset,
				  })),
			(xl && bl(xl, r)) ||
				((xl = r),
				(r = Di(gc, "onSelect")),
				0 < r.length &&
					((t = new Xo("onSelect", "select", null, t, a)),
					e.push({ event: t, listeners: r }),
					(t.target = cr))));
	}
	function Ra(e, t) {
		var a = {};
		return (
			(a[e.toLowerCase()] = t.toLowerCase()),
			(a["Webkit" + e] = "webkit" + t),
			(a["Moz" + e] = "moz" + t),
			a
		);
	}
	var ur = {
			animationend: Ra("Animation", "AnimationEnd"),
			animationiteration: Ra("Animation", "AnimationIteration"),
			animationstart: Ra("Animation", "AnimationStart"),
			transitionrun: Ra("Transition", "TransitionRun"),
			transitionstart: Ra("Transition", "TransitionStart"),
			transitioncancel: Ra("Transition", "TransitionCancel"),
			transitionend: Ra("Transition", "TransitionEnd"),
		},
		bc = {},
		Vm = {};
	wn &&
		((Vm = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete ur.animationend.animation,
			delete ur.animationiteration.animation,
			delete ur.animationstart.animation),
		"TransitionEvent" in window || delete ur.transitionend.transition);
	function Na(e) {
		if (bc[e]) return bc[e];
		if (!ur[e]) return e;
		var t = ur[e],
			a;
		for (a in t) if (t.hasOwnProperty(a) && a in Vm) return (bc[e] = t[a]);
		return e;
	}
	var Km = Na("animationend"),
		Qm = Na("animationiteration"),
		Zm = Na("animationstart"),
		gw = Na("transitionrun"),
		yw = Na("transitionstart"),
		bw = Na("transitioncancel"),
		Im = Na("transitionend"),
		Fm = new Map(),
		xc =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" "
			);
	xc.push("scrollEnd");
	function en(e, t) {
		Fm.set(e, t), Aa(t, [e]);
	}
	var Wm = new WeakMap();
	function Xt(e, t) {
		if (typeof e == "object" && e !== null) {
			var a = Wm.get(e);
			return a !== void 0
				? a
				: ((t = { value: e, source: t, stack: hm(t) }),
				  Wm.set(e, t),
				  t);
		}
		return { value: e, source: t, stack: hm(t) };
	}
	var Vt = [],
		fr = 0,
		Sc = 0;
	function Qo() {
		for (var e = fr, t = (Sc = fr = 0); t < e; ) {
			var a = Vt[t];
			Vt[t++] = null;
			var r = Vt[t];
			Vt[t++] = null;
			var s = Vt[t];
			Vt[t++] = null;
			var f = Vt[t];
			if (((Vt[t++] = null), r !== null && s !== null)) {
				var b = r.pending;
				b === null ? (s.next = s) : ((s.next = b.next), (b.next = s)),
					(r.pending = s);
			}
			f !== 0 && Jm(a, s, f);
		}
	}
	function Zo(e, t, a, r) {
		(Vt[fr++] = e),
			(Vt[fr++] = t),
			(Vt[fr++] = a),
			(Vt[fr++] = r),
			(Sc |= r),
			(e.lanes |= r),
			(e = e.alternate),
			e !== null && (e.lanes |= r);
	}
	function wc(e, t, a, r) {
		return Zo(e, t, a, r), Io(e);
	}
	function dr(e, t) {
		return Zo(e, null, null, t), Io(e);
	}
	function Jm(e, t, a) {
		e.lanes |= a;
		var r = e.alternate;
		r !== null && (r.lanes |= a);
		for (var s = !1, f = e.return; f !== null; )
			(f.childLanes |= a),
				(r = f.alternate),
				r !== null && (r.childLanes |= a),
				f.tag === 22 &&
					((e = f.stateNode),
					e === null || e._visibility & 1 || (s = !0)),
				(e = f),
				(f = f.return);
		return e.tag === 3
			? ((f = e.stateNode),
			  s &&
					t !== null &&
					((s = 31 - Ot(a)),
					(e = f.hiddenUpdates),
					(r = e[s]),
					r === null ? (e[s] = [t]) : r.push(t),
					(t.lane = a | 536870912)),
			  f)
			: null;
	}
	function Io(e) {
		if (50 < Xl) throw ((Xl = 0), (Tu = null), Error(i(185)));
		for (var t = e.return; t !== null; ) (e = t), (t = e.return);
		return e.tag === 3 ? e.stateNode : null;
	}
	var mr = {};
	function xw(e, t, a, r) {
		(this.tag = e),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = r),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function Dt(e, t, a, r) {
		return new xw(e, t, a, r);
	}
	function Ec(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function En(e, t) {
		var a = e.alternate;
		return (
			a === null
				? ((a = Dt(e.tag, t, e.key, e.mode)),
				  (a.elementType = e.elementType),
				  (a.type = e.type),
				  (a.stateNode = e.stateNode),
				  (a.alternate = e),
				  (e.alternate = a))
				: ((a.pendingProps = t),
				  (a.type = e.type),
				  (a.flags = 0),
				  (a.subtreeFlags = 0),
				  (a.deletions = null)),
			(a.flags = e.flags & 65011712),
			(a.childLanes = e.childLanes),
			(a.lanes = e.lanes),
			(a.child = e.child),
			(a.memoizedProps = e.memoizedProps),
			(a.memoizedState = e.memoizedState),
			(a.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(a.dependencies =
				t === null
					? null
					: { lanes: t.lanes, firstContext: t.firstContext }),
			(a.sibling = e.sibling),
			(a.index = e.index),
			(a.ref = e.ref),
			(a.refCleanup = e.refCleanup),
			a
		);
	}
	function eh(e, t) {
		e.flags &= 65011714;
		var a = e.alternate;
		return (
			a === null
				? ((e.childLanes = 0),
				  (e.lanes = t),
				  (e.child = null),
				  (e.subtreeFlags = 0),
				  (e.memoizedProps = null),
				  (e.memoizedState = null),
				  (e.updateQueue = null),
				  (e.dependencies = null),
				  (e.stateNode = null))
				: ((e.childLanes = a.childLanes),
				  (e.lanes = a.lanes),
				  (e.child = a.child),
				  (e.subtreeFlags = 0),
				  (e.deletions = null),
				  (e.memoizedProps = a.memoizedProps),
				  (e.memoizedState = a.memoizedState),
				  (e.updateQueue = a.updateQueue),
				  (e.type = a.type),
				  (t = a.dependencies),
				  (e.dependencies =
						t === null
							? null
							: {
									lanes: t.lanes,
									firstContext: t.firstContext,
							  })),
			e
		);
	}
	function Fo(e, t, a, r, s, f) {
		var b = 0;
		if (((r = e), typeof e == "function")) Ec(e) && (b = 1);
		else if (typeof e == "string")
			b = wE(e, a, Q.current)
				? 26
				: e === "html" || e === "head" || e === "body"
				? 27
				: 5;
		else
			e: switch (e) {
				case ne:
					return (
						(e = Dt(31, a, t, s)),
						(e.elementType = ne),
						(e.lanes = f),
						e
					);
				case C:
					return Ta(a.children, s, f, t);
				case A:
					(b = 8), (s |= 24);
					break;
				case R:
					return (
						(e = Dt(12, a, t, s | 2)),
						(e.elementType = R),
						(e.lanes = f),
						e
					);
				case _:
					return (
						(e = Dt(13, a, t, s)),
						(e.elementType = _),
						(e.lanes = f),
						e
					);
				case q:
					return (
						(e = Dt(19, a, t, s)),
						(e.elementType = q),
						(e.lanes = f),
						e
					);
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case M:
							case D:
								b = 10;
								break e;
							case k:
								b = 9;
								break e;
							case L:
								b = 11;
								break e;
							case P:
								b = 14;
								break e;
							case X:
								(b = 16), (r = null);
								break e;
						}
					(b = 29),
						(a = Error(i(130, e === null ? "null" : typeof e, ""))),
						(r = null);
			}
		return (
			(t = Dt(b, a, t, s)),
			(t.elementType = e),
			(t.type = r),
			(t.lanes = f),
			t
		);
	}
	function Ta(e, t, a, r) {
		return (e = Dt(7, e, r, t)), (e.lanes = a), e;
	}
	function Ac(e, t, a) {
		return (e = Dt(6, e, null, t)), (e.lanes = a), e;
	}
	function Cc(e, t, a) {
		return (
			(t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = a),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	var hr = [],
		pr = 0,
		Wo = null,
		Jo = 0,
		Kt = [],
		Qt = 0,
		Ma = null,
		An = 1,
		Cn = "";
	function Oa(e, t) {
		(hr[pr++] = Jo), (hr[pr++] = Wo), (Wo = e), (Jo = t);
	}
	function th(e, t, a) {
		(Kt[Qt++] = An), (Kt[Qt++] = Cn), (Kt[Qt++] = Ma), (Ma = e);
		var r = An;
		e = Cn;
		var s = 32 - Ot(r) - 1;
		(r &= ~(1 << s)), (a += 1);
		var f = 32 - Ot(t) + s;
		if (30 < f) {
			var b = s - (s % 5);
			(f = (r & ((1 << b) - 1)).toString(32)),
				(r >>= b),
				(s -= b),
				(An = (1 << (32 - Ot(t) + s)) | (a << s) | r),
				(Cn = f + e);
		} else (An = (1 << f) | (a << s) | r), (Cn = e);
	}
	function Rc(e) {
		e.return !== null && (Oa(e, 1), th(e, 1, 0));
	}
	function Nc(e) {
		for (; e === Wo; )
			(Wo = hr[--pr]), (hr[pr] = null), (Jo = hr[--pr]), (hr[pr] = null);
		for (; e === Ma; )
			(Ma = Kt[--Qt]),
				(Kt[Qt] = null),
				(Cn = Kt[--Qt]),
				(Kt[Qt] = null),
				(An = Kt[--Qt]),
				(Kt[Qt] = null);
	}
	var gt = null,
		Ie = null,
		je = !1,
		_a = null,
		cn = !1,
		Tc = Error(i(519));
	function Da(e) {
		var t = Error(i(418, ""));
		throw (El(Xt(t, e)), Tc);
	}
	function nh(e) {
		var t = e.stateNode,
			a = e.type,
			r = e.memoizedProps;
		switch (((t[ht] = e), (t[bt] = r), a)) {
			case "dialog":
				Me("cancel", t), Me("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Me("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < Kl.length; a++) Me(Kl[a], t);
				break;
			case "source":
				Me("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Me("error", t), Me("load", t);
				break;
			case "details":
				Me("toggle", t);
				break;
			case "input":
				Me("invalid", t),
					gm(
						t,
						r.value,
						r.defaultValue,
						r.checked,
						r.defaultChecked,
						r.type,
						r.name,
						!0
					),
					ko(t);
				break;
			case "select":
				Me("invalid", t);
				break;
			case "textarea":
				Me("invalid", t),
					bm(t, r.value, r.defaultValue, r.children),
					ko(t);
		}
		(a = r.children),
			(typeof a != "string" &&
				typeof a != "number" &&
				typeof a != "bigint") ||
			t.textContent === "" + a ||
			r.suppressHydrationWarning === !0 ||
			bv(t.textContent, a)
				? (r.popover != null &&
						(Me("beforetoggle", t), Me("toggle", t)),
				  r.onScroll != null && Me("scroll", t),
				  r.onScrollEnd != null && Me("scrollend", t),
				  r.onClick != null && (t.onclick = ji),
				  (t = !0))
				: (t = !1),
			t || Da(e);
	}
	function ah(e) {
		for (gt = e.return; gt; )
			switch (gt.tag) {
				case 5:
				case 13:
					cn = !1;
					return;
				case 27:
				case 3:
					cn = !0;
					return;
				default:
					gt = gt.return;
			}
	}
	function Sl(e) {
		if (e !== gt) return !1;
		if (!je) return ah(e), (je = !0), !1;
		var t = e.tag,
			a;
		if (
			((a = t !== 3 && t !== 27) &&
				((a = t === 5) &&
					((a = e.type),
					(a =
						!(a !== "form" && a !== "button") ||
						qu(e.type, e.memoizedProps))),
				(a = !a)),
			a && Ie && Da(e),
			ah(e),
			t === 13)
		) {
			if (
				((e = e.memoizedState),
				(e = e !== null ? e.dehydrated : null),
				!e)
			)
				throw Error(i(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((a = e.data), a === "/$")) {
							if (t === 0) {
								Ie = nn(e.nextSibling);
								break e;
							}
							t--;
						} else (a !== "$" && a !== "$!" && a !== "$?") || t++;
					e = e.nextSibling;
				}
				Ie = null;
			}
		} else
			t === 27
				? ((t = Ie),
				  oa(e.type) ? ((e = Qu), (Qu = null), (Ie = e)) : (Ie = t))
				: (Ie = gt ? nn(e.stateNode.nextSibling) : null);
		return !0;
	}
	function wl() {
		(Ie = gt = null), (je = !1);
	}
	function rh() {
		var e = _a;
		return (
			e !== null &&
				(Et === null ? (Et = e) : Et.push.apply(Et, e), (_a = null)),
			e
		);
	}
	function El(e) {
		_a === null ? (_a = [e]) : _a.push(e);
	}
	var Mc = V(null),
		ja = null,
		Rn = null;
	function Xn(e, t, a) {
		U(Mc, t._currentValue), (t._currentValue = a);
	}
	function Nn(e) {
		(e._currentValue = Mc.current), ee(Mc);
	}
	function Oc(e, t, a) {
		for (; e !== null; ) {
			var r = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
					: r !== null &&
					  (r.childLanes & t) !== t &&
					  (r.childLanes |= t),
				e === a)
			)
				break;
			e = e.return;
		}
	}
	function _c(e, t, a, r) {
		var s = e.child;
		for (s !== null && (s.return = e); s !== null; ) {
			var f = s.dependencies;
			if (f !== null) {
				var b = s.child;
				f = f.firstContext;
				e: for (; f !== null; ) {
					var w = f;
					f = s;
					for (var T = 0; T < t.length; T++)
						if (w.context === t[T]) {
							(f.lanes |= a),
								(w = f.alternate),
								w !== null && (w.lanes |= a),
								Oc(f.return, a, e),
								r || (b = null);
							break e;
						}
					f = w.next;
				}
			} else if (s.tag === 18) {
				if (((b = s.return), b === null)) throw Error(i(341));
				(b.lanes |= a),
					(f = b.alternate),
					f !== null && (f.lanes |= a),
					Oc(b, a, e),
					(b = null);
			} else b = s.child;
			if (b !== null) b.return = s;
			else
				for (b = s; b !== null; ) {
					if (b === e) {
						b = null;
						break;
					}
					if (((s = b.sibling), s !== null)) {
						(s.return = b.return), (b = s);
						break;
					}
					b = b.return;
				}
			s = b;
		}
	}
	function Al(e, t, a, r) {
		e = null;
		for (var s = t, f = !1; s !== null; ) {
			if (!f) {
				if ((s.flags & 524288) !== 0) f = !0;
				else if ((s.flags & 262144) !== 0) break;
			}
			if (s.tag === 10) {
				var b = s.alternate;
				if (b === null) throw Error(i(387));
				if (((b = b.memoizedProps), b !== null)) {
					var w = s.type;
					_t(s.pendingProps.value, b.value) ||
						(e !== null ? e.push(w) : (e = [w]));
				}
			} else if (s === te.current) {
				if (((b = s.alternate), b === null)) throw Error(i(387));
				b.memoizedState.memoizedState !==
					s.memoizedState.memoizedState &&
					(e !== null ? e.push(Jl) : (e = [Jl]));
			}
			s = s.return;
		}
		e !== null && _c(t, e, a, r), (t.flags |= 262144);
	}
	function ei(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!_t(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function za(e) {
		(ja = e),
			(Rn = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null);
	}
	function pt(e) {
		return lh(ja, e);
	}
	function ti(e, t) {
		return ja === null && za(e), lh(e, t);
	}
	function lh(e, t) {
		var a = t._currentValue;
		if (((t = { context: t, memoizedValue: a, next: null }), Rn === null)) {
			if (e === null) throw Error(i(308));
			(Rn = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288);
		} else Rn = Rn.next = t;
		return a;
	}
	var Sw =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (a, r) {
									e.push(r);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								e.forEach(function (a) {
									return a();
								});
						};
				  },
		ww = n.unstable_scheduleCallback,
		Ew = n.unstable_NormalPriority,
		rt = {
			$$typeof: D,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Dc() {
		return { controller: new Sw(), data: new Map(), refCount: 0 };
	}
	function Cl(e) {
		e.refCount--,
			e.refCount === 0 &&
				ww(Ew, function () {
					e.controller.abort();
				});
	}
	var Rl = null,
		jc = 0,
		vr = 0,
		gr = null;
	function Aw(e, t) {
		if (Rl === null) {
			var a = (Rl = []);
			(jc = 0),
				(vr = Pu()),
				(gr = {
					status: "pending",
					value: void 0,
					then: function (r) {
						a.push(r);
					},
				});
		}
		return jc++, t.then(oh, oh), t;
	}
	function oh() {
		if (--jc === 0 && Rl !== null) {
			gr !== null && (gr.status = "fulfilled");
			var e = Rl;
			(Rl = null), (vr = 0), (gr = null);
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Cw(e, t) {
		var a = [],
			r = {
				status: "pending",
				value: null,
				reason: null,
				then: function (s) {
					a.push(s);
				},
			};
		return (
			e.then(
				function () {
					(r.status = "fulfilled"), (r.value = t);
					for (var s = 0; s < a.length; s++) (0, a[s])(t);
				},
				function (s) {
					for (
						r.status = "rejected", r.reason = s, s = 0;
						s < a.length;
						s++
					)
						(0, a[s])(void 0);
				}
			),
			r
		);
	}
	var ih = j.S;
	j.S = function (e, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			Aw(e, t),
			ih !== null && ih(e, t);
	};
	var Pa = V(null);
	function zc() {
		var e = Pa.current;
		return e !== null ? e : Ye.pooledCache;
	}
	function ni(e, t) {
		t === null ? U(Pa, Pa.current) : U(Pa, t.pool);
	}
	function sh() {
		var e = zc();
		return e === null ? null : { parent: rt._currentValue, pool: e };
	}
	var Nl = Error(i(460)),
		ch = Error(i(474)),
		ai = Error(i(542)),
		Pc = { then: function () {} };
	function uh(e) {
		return (e = e.status), e === "fulfilled" || e === "rejected";
	}
	function ri() {}
	function fh(e, t, a) {
		switch (
			((a = e[a]),
			a === void 0 ? e.push(t) : a !== t && (t.then(ri, ri), (t = a)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((e = t.reason), mh(e), e);
			default:
				if (typeof t.status == "string") t.then(ri, ri);
				else {
					if (((e = Ye), e !== null && 100 < e.shellSuspendCounter))
						throw Error(i(482));
					(e = t),
						(e.status = "pending"),
						e.then(
							function (r) {
								if (t.status === "pending") {
									var s = t;
									(s.status = "fulfilled"), (s.value = r);
								}
							},
							function (r) {
								if (t.status === "pending") {
									var s = t;
									(s.status = "rejected"), (s.reason = r);
								}
							}
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((e = t.reason), mh(e), e);
				}
				throw ((Tl = t), Nl);
		}
	}
	var Tl = null;
	function dh() {
		if (Tl === null) throw Error(i(459));
		var e = Tl;
		return (Tl = null), e;
	}
	function mh(e) {
		if (e === Nl || e === ai) throw Error(i(483));
	}
	var Vn = !1;
	function Lc(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Uc(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				});
	}
	function Kn(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function Qn(e, t, a) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (((r = r.shared), (Pe & 2) !== 0)) {
			var s = r.pending;
			return (
				s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
				(r.pending = t),
				(t = Io(e)),
				Jm(e, null, a),
				t
			);
		}
		return Zo(e, r, t, a), Io(e);
	}
	function Ml(e, t, a) {
		if (
			((t = t.updateQueue),
			t !== null && ((t = t.shared), (a & 4194048) !== 0))
		) {
			var r = t.lanes;
			(r &= e.pendingLanes), (a |= r), (t.lanes = a), om(e, a);
		}
	}
	function Hc(e, t) {
		var a = e.updateQueue,
			r = e.alternate;
		if (r !== null && ((r = r.updateQueue), a === r)) {
			var s = null,
				f = null;
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var b = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null,
					};
					f === null ? (s = f = b) : (f = f.next = b), (a = a.next);
				} while (a !== null);
				f === null ? (s = f = t) : (f = f.next = t);
			} else s = f = t;
			(a = {
				baseState: r.baseState,
				firstBaseUpdate: s,
				lastBaseUpdate: f,
				shared: r.shared,
				callbacks: r.callbacks,
			}),
				(e.updateQueue = a);
			return;
		}
		(e = a.lastBaseUpdate),
			e === null ? (a.firstBaseUpdate = t) : (e.next = t),
			(a.lastBaseUpdate = t);
	}
	var kc = !1;
	function Ol() {
		if (kc) {
			var e = gr;
			if (e !== null) throw e;
		}
	}
	function _l(e, t, a, r) {
		kc = !1;
		var s = e.updateQueue;
		Vn = !1;
		var f = s.firstBaseUpdate,
			b = s.lastBaseUpdate,
			w = s.shared.pending;
		if (w !== null) {
			s.shared.pending = null;
			var T = w,
				B = T.next;
			(T.next = null), b === null ? (f = B) : (b.next = B), (b = T);
			var K = e.alternate;
			K !== null &&
				((K = K.updateQueue),
				(w = K.lastBaseUpdate),
				w !== b &&
					(w === null ? (K.firstBaseUpdate = B) : (w.next = B),
					(K.lastBaseUpdate = T)));
		}
		if (f !== null) {
			var F = s.baseState;
			(b = 0), (K = B = T = null), (w = f);
			do {
				var $ = w.lane & -536870913,
					Y = $ !== w.lane;
				if (Y ? (Oe & $) === $ : (r & $) === $) {
					$ !== 0 && $ === vr && (kc = !0),
						K !== null &&
							(K = K.next =
								{
									lane: 0,
									tag: w.tag,
									payload: w.payload,
									callback: null,
									next: null,
								});
					e: {
						var be = e,
							ge = w;
						$ = t;
						var Ge = a;
						switch (ge.tag) {
							case 1:
								if (
									((be = ge.payload), typeof be == "function")
								) {
									F = be.call(Ge, F, $);
									break e;
								}
								F = be;
								break e;
							case 3:
								be.flags = (be.flags & -65537) | 128;
							case 0:
								if (
									((be = ge.payload),
									($ =
										typeof be == "function"
											? be.call(Ge, F, $)
											: be),
									$ == null)
								)
									break e;
								F = y({}, F, $);
								break e;
							case 2:
								Vn = !0;
						}
					}
					($ = w.callback),
						$ !== null &&
							((e.flags |= 64),
							Y && (e.flags |= 8192),
							(Y = s.callbacks),
							Y === null ? (s.callbacks = [$]) : Y.push($));
				} else
					(Y = {
						lane: $,
						tag: w.tag,
						payload: w.payload,
						callback: w.callback,
						next: null,
					}),
						K === null ? ((B = K = Y), (T = F)) : (K = K.next = Y),
						(b |= $);
				if (((w = w.next), w === null)) {
					if (((w = s.shared.pending), w === null)) break;
					(Y = w),
						(w = Y.next),
						(Y.next = null),
						(s.lastBaseUpdate = Y),
						(s.shared.pending = null);
				}
			} while (!0);
			K === null && (T = F),
				(s.baseState = T),
				(s.firstBaseUpdate = B),
				(s.lastBaseUpdate = K),
				f === null && (s.shared.lanes = 0),
				(na |= b),
				(e.lanes = b),
				(e.memoizedState = F);
		}
	}
	function hh(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function ph(e, t) {
		var a = e.callbacks;
		if (a !== null)
			for (e.callbacks = null, e = 0; e < a.length; e++) hh(a[e], t);
	}
	var yr = V(null),
		li = V(0);
	function vh(e, t) {
		(e = zn), U(li, e), U(yr, t), (zn = e | t.baseLanes);
	}
	function Bc() {
		U(li, zn), U(yr, yr.current);
	}
	function Gc() {
		(zn = li.current), ee(yr), ee(li);
	}
	var Zn = 0,
		Ce = null,
		ke = null,
		nt = null,
		oi = !1,
		br = !1,
		La = !1,
		ii = 0,
		Dl = 0,
		xr = null,
		Rw = 0;
	function We() {
		throw Error(i(321));
	}
	function $c(e, t) {
		if (t === null) return !1;
		for (var a = 0; a < t.length && a < e.length; a++)
			if (!_t(e[a], t[a])) return !1;
		return !0;
	}
	function Yc(e, t, a, r, s, f) {
		return (
			(Zn = f),
			(Ce = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(j.H = e === null || e.memoizedState === null ? Jh : ep),
			(La = !1),
			(f = a(r, s)),
			(La = !1),
			br && (f = yh(t, a, r, s)),
			gh(e),
			f
		);
	}
	function gh(e) {
		j.H = mi;
		var t = ke !== null && ke.next !== null;
		if (
			((Zn = 0),
			(nt = ke = Ce = null),
			(oi = !1),
			(Dl = 0),
			(xr = null),
			t)
		)
			throw Error(i(300));
		e === null ||
			st ||
			((e = e.dependencies), e !== null && ei(e) && (st = !0));
	}
	function yh(e, t, a, r) {
		Ce = e;
		var s = 0;
		do {
			if ((br && (xr = null), (Dl = 0), (br = !1), 25 <= s))
				throw Error(i(301));
			if (((s += 1), (nt = ke = null), e.updateQueue != null)) {
				var f = e.updateQueue;
				(f.lastEffect = null),
					(f.events = null),
					(f.stores = null),
					f.memoCache != null && (f.memoCache.index = 0);
			}
			(j.H = jw), (f = t(a, r));
		} while (br);
		return f;
	}
	function Nw() {
		var e = j.H,
			t = e.useState()[0];
		return (
			(t = typeof t.then == "function" ? jl(t) : t),
			(e = e.useState()[0]),
			(ke !== null ? ke.memoizedState : null) !== e && (Ce.flags |= 1024),
			t
		);
	}
	function qc() {
		var e = ii !== 0;
		return (ii = 0), e;
	}
	function Xc(e, t, a) {
		(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
	}
	function Vc(e) {
		if (oi) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue;
				t !== null && (t.pending = null), (e = e.next);
			}
			oi = !1;
		}
		(Zn = 0), (nt = ke = Ce = null), (br = !1), (Dl = ii = 0), (xr = null);
	}
	function St() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (
			nt === null ? (Ce.memoizedState = nt = e) : (nt = nt.next = e), nt
		);
	}
	function at() {
		if (ke === null) {
			var e = Ce.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = ke.next;
		var t = nt === null ? Ce.memoizedState : nt.next;
		if (t !== null) (nt = t), (ke = e);
		else {
			if (e === null)
				throw Ce.alternate === null ? Error(i(467)) : Error(i(310));
			(ke = e),
				(e = {
					memoizedState: ke.memoizedState,
					baseState: ke.baseState,
					baseQueue: ke.baseQueue,
					queue: ke.queue,
					next: null,
				}),
				nt === null ? (Ce.memoizedState = nt = e) : (nt = nt.next = e);
		}
		return nt;
	}
	function Kc() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null,
		};
	}
	function jl(e) {
		var t = Dl;
		return (
			(Dl += 1),
			xr === null && (xr = []),
			(e = fh(xr, e, t)),
			(t = Ce),
			(nt === null ? t.memoizedState : nt.next) === null &&
				((t = t.alternate),
				(j.H = t === null || t.memoizedState === null ? Jh : ep)),
			e
		);
	}
	function si(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return jl(e);
			if (e.$$typeof === D) return pt(e);
		}
		throw Error(i(438, String(e)));
	}
	function Qc(e) {
		var t = null,
			a = Ce.updateQueue;
		if ((a !== null && (t = a.memoCache), t == null)) {
			var r = Ce.alternate;
			r !== null &&
				((r = r.updateQueue),
				r !== null &&
					((r = r.memoCache),
					r != null &&
						(t = {
							data: r.data.map(function (s) {
								return s.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			a === null && ((a = Kc()), (Ce.updateQueue = a)),
			(a.memoCache = t),
			(a = t.data[t.index]),
			a === void 0)
		)
			for (a = t.data[t.index] = Array(e), r = 0; r < e; r++) a[r] = le;
		return t.index++, a;
	}
	function Tn(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ci(e) {
		var t = at();
		return Zc(t, ke, e);
	}
	function Zc(e, t, a) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = a;
		var s = e.baseQueue,
			f = r.pending;
		if (f !== null) {
			if (s !== null) {
				var b = s.next;
				(s.next = f.next), (f.next = b);
			}
			(t.baseQueue = s = f), (r.pending = null);
		}
		if (((f = e.baseState), s === null)) e.memoizedState = f;
		else {
			t = s.next;
			var w = (b = null),
				T = null,
				B = t,
				K = !1;
			do {
				var F = B.lane & -536870913;
				if (F !== B.lane ? (Oe & F) === F : (Zn & F) === F) {
					var $ = B.revertLane;
					if ($ === 0)
						T !== null &&
							(T = T.next =
								{
									lane: 0,
									revertLane: 0,
									action: B.action,
									hasEagerState: B.hasEagerState,
									eagerState: B.eagerState,
									next: null,
								}),
							F === vr && (K = !0);
					else if ((Zn & $) === $) {
						(B = B.next), $ === vr && (K = !0);
						continue;
					} else
						(F = {
							lane: 0,
							revertLane: B.revertLane,
							action: B.action,
							hasEagerState: B.hasEagerState,
							eagerState: B.eagerState,
							next: null,
						}),
							T === null
								? ((w = T = F), (b = f))
								: (T = T.next = F),
							(Ce.lanes |= $),
							(na |= $);
					(F = B.action),
						La && a(f, F),
						(f = B.hasEagerState ? B.eagerState : a(f, F));
				} else
					($ = {
						lane: F,
						revertLane: B.revertLane,
						action: B.action,
						hasEagerState: B.hasEagerState,
						eagerState: B.eagerState,
						next: null,
					}),
						T === null ? ((w = T = $), (b = f)) : (T = T.next = $),
						(Ce.lanes |= F),
						(na |= F);
				B = B.next;
			} while (B !== null && B !== t);
			if (
				(T === null ? (b = f) : (T.next = w),
				!_t(f, e.memoizedState) &&
					((st = !0), K && ((a = gr), a !== null)))
			)
				throw a;
			(e.memoizedState = f),
				(e.baseState = b),
				(e.baseQueue = T),
				(r.lastRenderedState = f);
		}
		return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Ic(e) {
		var t = at(),
			a = t.queue;
		if (a === null) throw Error(i(311));
		a.lastRenderedReducer = e;
		var r = a.dispatch,
			s = a.pending,
			f = t.memoizedState;
		if (s !== null) {
			a.pending = null;
			var b = (s = s.next);
			do (f = e(f, b.action)), (b = b.next);
			while (b !== s);
			_t(f, t.memoizedState) || (st = !0),
				(t.memoizedState = f),
				t.baseQueue === null && (t.baseState = f),
				(a.lastRenderedState = f);
		}
		return [f, r];
	}
	function bh(e, t, a) {
		var r = Ce,
			s = at(),
			f = je;
		if (f) {
			if (a === void 0) throw Error(i(407));
			a = a();
		} else a = t();
		var b = !_t((ke || s).memoizedState, a);
		b && ((s.memoizedState = a), (st = !0)), (s = s.queue);
		var w = wh.bind(null, r, s, e);
		if (
			(zl(2048, 8, w, [e]),
			s.getSnapshot !== t ||
				b ||
				(nt !== null && nt.memoizedState.tag & 1))
		) {
			if (
				((r.flags |= 2048),
				Sr(9, ui(), Sh.bind(null, r, s, a, t), null),
				Ye === null)
			)
				throw Error(i(349));
			f || (Zn & 124) !== 0 || xh(r, t, a);
		}
		return a;
	}
	function xh(e, t, a) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: a }),
			(t = Ce.updateQueue),
			t === null
				? ((t = Kc()), (Ce.updateQueue = t), (t.stores = [e]))
				: ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
	}
	function Sh(e, t, a, r) {
		(t.value = a), (t.getSnapshot = r), Eh(t) && Ah(e);
	}
	function wh(e, t, a) {
		return a(function () {
			Eh(t) && Ah(e);
		});
	}
	function Eh(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var a = t();
			return !_t(e, a);
		} catch {
			return !0;
		}
	}
	function Ah(e) {
		var t = dr(e, 2);
		t !== null && Ut(t, e, 2);
	}
	function Fc(e) {
		var t = St();
		if (typeof e == "function") {
			var a = e;
			if (((e = a()), La)) {
				$n(!0);
				try {
					a();
				} finally {
					$n(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Tn,
				lastRenderedState: e,
			}),
			t
		);
	}
	function Ch(e, t, a, r) {
		return (e.baseState = a), Zc(e, ke, typeof r == "function" ? r : Tn);
	}
	function Tw(e, t, a, r, s) {
		if (di(e)) throw Error(i(485));
		if (((e = t.action), e !== null)) {
			var f = {
				payload: s,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (b) {
					f.listeners.push(b);
				},
			};
			j.T !== null ? a(!0) : (f.isTransition = !1),
				r(f),
				(a = t.pending),
				a === null
					? ((f.next = t.pending = f), Rh(t, f))
					: ((f.next = a.next), (t.pending = a.next = f));
		}
	}
	function Rh(e, t) {
		var a = t.action,
			r = t.payload,
			s = e.state;
		if (t.isTransition) {
			var f = j.T,
				b = {};
			j.T = b;
			try {
				var w = a(s, r),
					T = j.S;
				T !== null && T(b, w), Nh(e, t, w);
			} catch (B) {
				Wc(e, t, B);
			} finally {
				j.T = f;
			}
		} else
			try {
				(f = a(s, r)), Nh(e, t, f);
			} catch (B) {
				Wc(e, t, B);
			}
	}
	function Nh(e, t, a) {
		a !== null && typeof a == "object" && typeof a.then == "function"
			? a.then(
					function (r) {
						Th(e, t, r);
					},
					function (r) {
						return Wc(e, t, r);
					}
			  )
			: Th(e, t, a);
	}
	function Th(e, t, a) {
		(t.status = "fulfilled"),
			(t.value = a),
			Mh(t),
			(e.state = a),
			(t = e.pending),
			t !== null &&
				((a = t.next),
				a === t
					? (e.pending = null)
					: ((a = a.next), (t.next = a), Rh(e, a)));
	}
	function Wc(e, t, a) {
		var r = e.pending;
		if (((e.pending = null), r !== null)) {
			r = r.next;
			do (t.status = "rejected"), (t.reason = a), Mh(t), (t = t.next);
			while (t !== r);
		}
		e.action = null;
	}
	function Mh(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Oh(e, t) {
		return t;
	}
	function _h(e, t) {
		if (je) {
			var a = Ye.formState;
			if (a !== null) {
				e: {
					var r = Ce;
					if (je) {
						if (Ie) {
							t: {
								for (var s = Ie, f = cn; s.nodeType !== 8; ) {
									if (!f) {
										s = null;
										break t;
									}
									if (((s = nn(s.nextSibling)), s === null)) {
										s = null;
										break t;
									}
								}
								(f = s.data),
									(s = f === "F!" || f === "F" ? s : null);
							}
							if (s) {
								(Ie = nn(s.nextSibling)), (r = s.data === "F!");
								break e;
							}
						}
						Da(r);
					}
					r = !1;
				}
				r && (t = a[0]);
			}
		}
		return (
			(a = St()),
			(a.memoizedState = a.baseState = t),
			(r = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Oh,
				lastRenderedState: t,
			}),
			(a.queue = r),
			(a = Ih.bind(null, Ce, r)),
			(r.dispatch = a),
			(r = Fc(!1)),
			(f = au.bind(null, Ce, !1, r.queue)),
			(r = St()),
			(s = { state: t, dispatch: null, action: e, pending: null }),
			(r.queue = s),
			(a = Tw.bind(null, Ce, s, f, a)),
			(s.dispatch = a),
			(r.memoizedState = e),
			[t, a, !1]
		);
	}
	function Dh(e) {
		var t = at();
		return jh(t, ke, e);
	}
	function jh(e, t, a) {
		if (
			((t = Zc(e, t, Oh)[0]),
			(e = ci(Tn)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var r = jl(t);
			} catch (b) {
				throw b === Nl ? ai : b;
			}
		else r = t;
		t = at();
		var s = t.queue,
			f = s.dispatch;
		return (
			a !== t.memoizedState &&
				((Ce.flags |= 2048), Sr(9, ui(), Mw.bind(null, s, a), null)),
			[r, f, e]
		);
	}
	function Mw(e, t) {
		e.action = t;
	}
	function zh(e) {
		var t = at(),
			a = ke;
		if (a !== null) return jh(t, a, e);
		at(), (t = t.memoizedState), (a = at());
		var r = a.queue.dispatch;
		return (a.memoizedState = e), [t, r, !1];
	}
	function Sr(e, t, a, r) {
		return (
			(e = { tag: e, create: a, deps: r, inst: t, next: null }),
			(t = Ce.updateQueue),
			t === null && ((t = Kc()), (Ce.updateQueue = t)),
			(a = t.lastEffect),
			a === null
				? (t.lastEffect = e.next = e)
				: ((r = a.next),
				  (a.next = e),
				  (e.next = r),
				  (t.lastEffect = e)),
			e
		);
	}
	function ui() {
		return { destroy: void 0, resource: void 0 };
	}
	function Ph() {
		return at().memoizedState;
	}
	function fi(e, t, a, r) {
		var s = St();
		(r = r === void 0 ? null : r),
			(Ce.flags |= e),
			(s.memoizedState = Sr(1 | t, ui(), a, r));
	}
	function zl(e, t, a, r) {
		var s = at();
		r = r === void 0 ? null : r;
		var f = s.memoizedState.inst;
		ke !== null && r !== null && $c(r, ke.memoizedState.deps)
			? (s.memoizedState = Sr(t, f, a, r))
			: ((Ce.flags |= e), (s.memoizedState = Sr(1 | t, f, a, r)));
	}
	function Lh(e, t) {
		fi(8390656, 8, e, t);
	}
	function Uh(e, t) {
		zl(2048, 8, e, t);
	}
	function Hh(e, t) {
		return zl(4, 2, e, t);
	}
	function kh(e, t) {
		return zl(4, 4, e, t);
	}
	function Bh(e, t) {
		if (typeof t == "function") {
			e = e();
			var a = t(e);
			return function () {
				typeof a == "function" ? a() : t(null);
			};
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function Gh(e, t, a) {
		(a = a != null ? a.concat([e]) : null),
			zl(4, 4, Bh.bind(null, t, e), a);
	}
	function Jc() {}
	function $h(e, t) {
		var a = at();
		t = t === void 0 ? null : t;
		var r = a.memoizedState;
		return t !== null && $c(t, r[1])
			? r[0]
			: ((a.memoizedState = [e, t]), e);
	}
	function Yh(e, t) {
		var a = at();
		t = t === void 0 ? null : t;
		var r = a.memoizedState;
		if (t !== null && $c(t, r[1])) return r[0];
		if (((r = e()), La)) {
			$n(!0);
			try {
				e();
			} finally {
				$n(!1);
			}
		}
		return (a.memoizedState = [r, t]), r;
	}
	function eu(e, t, a) {
		return a === void 0 || (Zn & 1073741824) !== 0
			? (e.memoizedState = t)
			: ((e.memoizedState = a),
			  (e = Vp()),
			  (Ce.lanes |= e),
			  (na |= e),
			  a);
	}
	function qh(e, t, a, r) {
		return _t(a, t)
			? a
			: yr.current !== null
			? ((e = eu(e, a, r)), _t(e, t) || (st = !0), e)
			: (Zn & 42) === 0
			? ((st = !0), (e.memoizedState = a))
			: ((e = Vp()), (Ce.lanes |= e), (na |= e), t);
	}
	function Xh(e, t, a, r, s) {
		var f = I.p;
		I.p = f !== 0 && 8 > f ? f : 8;
		var b = j.T,
			w = {};
		(j.T = w), au(e, !1, t, a);
		try {
			var T = s(),
				B = j.S;
			if (
				(B !== null && B(w, T),
				T !== null &&
					typeof T == "object" &&
					typeof T.then == "function")
			) {
				var K = Cw(T, r);
				Pl(e, t, K, Lt(e));
			} else Pl(e, t, r, Lt(e));
		} catch (F) {
			Pl(
				e,
				t,
				{ then: function () {}, status: "rejected", reason: F },
				Lt()
			);
		} finally {
			(I.p = f), (j.T = b);
		}
	}
	function Ow() {}
	function tu(e, t, a, r) {
		if (e.tag !== 5) throw Error(i(476));
		var s = Vh(e).queue;
		Xh(
			e,
			s,
			t,
			G,
			a === null
				? Ow
				: function () {
						return Kh(e), a(r);
				  }
		);
	}
	function Vh(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: G,
			baseState: G,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Tn,
				lastRenderedState: G,
			},
			next: null,
		};
		var a = {};
		return (
			(t.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Tn,
					lastRenderedState: a,
				},
				next: null,
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		);
	}
	function Kh(e) {
		var t = Vh(e).next.queue;
		Pl(e, t, {}, Lt());
	}
	function nu() {
		return pt(Jl);
	}
	function Qh() {
		return at().memoizedState;
	}
	function Zh() {
		return at().memoizedState;
	}
	function _w(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var a = Lt();
					e = Kn(a);
					var r = Qn(t, e, a);
					r !== null && (Ut(r, t, a), Ml(r, t, a)),
						(t = { cache: Dc() }),
						(e.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function Dw(e, t, a) {
		var r = Lt();
		(a = {
			lane: r,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			di(e)
				? Fh(t, a)
				: ((a = wc(e, t, a, r)),
				  a !== null && (Ut(a, e, r), Wh(a, t, r)));
	}
	function Ih(e, t, a) {
		var r = Lt();
		Pl(e, t, a, r);
	}
	function Pl(e, t, a, r) {
		var s = {
			lane: r,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (di(e)) Fh(t, s);
		else {
			var f = e.alternate;
			if (
				e.lanes === 0 &&
				(f === null || f.lanes === 0) &&
				((f = t.lastRenderedReducer), f !== null)
			)
				try {
					var b = t.lastRenderedState,
						w = f(b, a);
					if (((s.hasEagerState = !0), (s.eagerState = w), _t(w, b)))
						return Zo(e, t, s, 0), Ye === null && Qo(), !1;
				} catch {
				} finally {
				}
			if (((a = wc(e, t, s, r)), a !== null))
				return Ut(a, e, r), Wh(a, t, r), !0;
		}
		return !1;
	}
	function au(e, t, a, r) {
		if (
			((r = {
				lane: 2,
				revertLane: Pu(),
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			di(e))
		) {
			if (t) throw Error(i(479));
		} else (t = wc(e, a, r, 2)), t !== null && Ut(t, e, 2);
	}
	function di(e) {
		var t = e.alternate;
		return e === Ce || (t !== null && t === Ce);
	}
	function Fh(e, t) {
		br = oi = !0;
		var a = e.pending;
		a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(e.pending = t);
	}
	function Wh(e, t, a) {
		if ((a & 4194048) !== 0) {
			var r = t.lanes;
			(r &= e.pendingLanes), (a |= r), (t.lanes = a), om(e, a);
		}
	}
	var mi = {
			readContext: pt,
			use: si,
			useCallback: We,
			useContext: We,
			useEffect: We,
			useImperativeHandle: We,
			useLayoutEffect: We,
			useInsertionEffect: We,
			useMemo: We,
			useReducer: We,
			useRef: We,
			useState: We,
			useDebugValue: We,
			useDeferredValue: We,
			useTransition: We,
			useSyncExternalStore: We,
			useId: We,
			useHostTransitionStatus: We,
			useFormState: We,
			useActionState: We,
			useOptimistic: We,
			useMemoCache: We,
			useCacheRefresh: We,
		},
		Jh = {
			readContext: pt,
			use: si,
			useCallback: function (e, t) {
				return (St().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: pt,
			useEffect: Lh,
			useImperativeHandle: function (e, t, a) {
				(a = a != null ? a.concat([e]) : null),
					fi(4194308, 4, Bh.bind(null, t, e), a);
			},
			useLayoutEffect: function (e, t) {
				return fi(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				fi(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var a = St();
				t = t === void 0 ? null : t;
				var r = e();
				if (La) {
					$n(!0);
					try {
						e();
					} finally {
						$n(!1);
					}
				}
				return (a.memoizedState = [r, t]), r;
			},
			useReducer: function (e, t, a) {
				var r = St();
				if (a !== void 0) {
					var s = a(t);
					if (La) {
						$n(!0);
						try {
							a(t);
						} finally {
							$n(!1);
						}
					}
				} else s = t;
				return (
					(r.memoizedState = r.baseState = s),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: s,
					}),
					(r.queue = e),
					(e = e.dispatch = Dw.bind(null, Ce, e)),
					[r.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = St();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: function (e) {
				e = Fc(e);
				var t = e.queue,
					a = Ih.bind(null, Ce, t);
				return (t.dispatch = a), [e.memoizedState, a];
			},
			useDebugValue: Jc,
			useDeferredValue: function (e, t) {
				var a = St();
				return eu(a, e, t);
			},
			useTransition: function () {
				var e = Fc(!1);
				return (
					(e = Xh.bind(null, Ce, e.queue, !0, !1)),
					(St().memoizedState = e),
					[!1, e]
				);
			},
			useSyncExternalStore: function (e, t, a) {
				var r = Ce,
					s = St();
				if (je) {
					if (a === void 0) throw Error(i(407));
					a = a();
				} else {
					if (((a = t()), Ye === null)) throw Error(i(349));
					(Oe & 124) !== 0 || xh(r, t, a);
				}
				s.memoizedState = a;
				var f = { value: a, getSnapshot: t };
				return (
					(s.queue = f),
					Lh(wh.bind(null, r, f, e), [e]),
					(r.flags |= 2048),
					Sr(9, ui(), Sh.bind(null, r, f, a, t), null),
					a
				);
			},
			useId: function () {
				var e = St(),
					t = Ye.identifierPrefix;
				if (je) {
					var a = Cn,
						r = An;
					(a = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + a),
						(t = "«" + t + "R" + a),
						(a = ii++),
						0 < a && (t += "H" + a.toString(32)),
						(t += "»");
				} else (a = Rw++), (t = "«" + t + "r" + a.toString(32) + "»");
				return (e.memoizedState = t);
			},
			useHostTransitionStatus: nu,
			useFormState: _h,
			useActionState: _h,
			useOptimistic: function (e) {
				var t = St();
				t.memoizedState = t.baseState = e;
				var a = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = a),
					(t = au.bind(null, Ce, !0, a)),
					(a.dispatch = t),
					[e, t]
				);
			},
			useMemoCache: Qc,
			useCacheRefresh: function () {
				return (St().memoizedState = _w.bind(null, Ce));
			},
		},
		ep = {
			readContext: pt,
			use: si,
			useCallback: $h,
			useContext: pt,
			useEffect: Uh,
			useImperativeHandle: Gh,
			useInsertionEffect: Hh,
			useLayoutEffect: kh,
			useMemo: Yh,
			useReducer: ci,
			useRef: Ph,
			useState: function () {
				return ci(Tn);
			},
			useDebugValue: Jc,
			useDeferredValue: function (e, t) {
				var a = at();
				return qh(a, ke.memoizedState, e, t);
			},
			useTransition: function () {
				var e = ci(Tn)[0],
					t = at().memoizedState;
				return [typeof e == "boolean" ? e : jl(e), t];
			},
			useSyncExternalStore: bh,
			useId: Qh,
			useHostTransitionStatus: nu,
			useFormState: Dh,
			useActionState: Dh,
			useOptimistic: function (e, t) {
				var a = at();
				return Ch(a, ke, e, t);
			},
			useMemoCache: Qc,
			useCacheRefresh: Zh,
		},
		jw = {
			readContext: pt,
			use: si,
			useCallback: $h,
			useContext: pt,
			useEffect: Uh,
			useImperativeHandle: Gh,
			useInsertionEffect: Hh,
			useLayoutEffect: kh,
			useMemo: Yh,
			useReducer: Ic,
			useRef: Ph,
			useState: function () {
				return Ic(Tn);
			},
			useDebugValue: Jc,
			useDeferredValue: function (e, t) {
				var a = at();
				return ke === null
					? eu(a, e, t)
					: qh(a, ke.memoizedState, e, t);
			},
			useTransition: function () {
				var e = Ic(Tn)[0],
					t = at().memoizedState;
				return [typeof e == "boolean" ? e : jl(e), t];
			},
			useSyncExternalStore: bh,
			useId: Qh,
			useHostTransitionStatus: nu,
			useFormState: zh,
			useActionState: zh,
			useOptimistic: function (e, t) {
				var a = at();
				return ke !== null
					? Ch(a, ke, e, t)
					: ((a.baseState = e), [e, a.queue.dispatch]);
			},
			useMemoCache: Qc,
			useCacheRefresh: Zh,
		},
		wr = null,
		Ll = 0;
	function hi(e) {
		var t = Ll;
		return (Ll += 1), wr === null && (wr = []), fh(wr, e, t);
	}
	function Ul(e, t) {
		(t = t.props.ref), (e.ref = t !== void 0 ? t : null);
	}
	function pi(e, t) {
		throw t.$$typeof === x
			? Error(i(525))
			: ((e = Object.prototype.toString.call(t)),
			  Error(
					i(
						31,
						e === "[object Object]"
							? "object with keys {" +
									Object.keys(t).join(", ") +
									"}"
							: e
					)
			  ));
	}
	function tp(e) {
		var t = e._init;
		return t(e._payload);
	}
	function np(e) {
		function t(z, O) {
			if (e) {
				var H = z.deletions;
				H === null ? ((z.deletions = [O]), (z.flags |= 16)) : H.push(O);
			}
		}
		function a(z, O) {
			if (!e) return null;
			for (; O !== null; ) t(z, O), (O = O.sibling);
			return null;
		}
		function r(z) {
			for (var O = new Map(); z !== null; )
				z.key !== null ? O.set(z.key, z) : O.set(z.index, z),
					(z = z.sibling);
			return O;
		}
		function s(z, O) {
			return (z = En(z, O)), (z.index = 0), (z.sibling = null), z;
		}
		function f(z, O, H) {
			return (
				(z.index = H),
				e
					? ((H = z.alternate),
					  H !== null
							? ((H = H.index),
							  H < O ? ((z.flags |= 67108866), O) : H)
							: ((z.flags |= 67108866), O))
					: ((z.flags |= 1048576), O)
			);
		}
		function b(z) {
			return e && z.alternate === null && (z.flags |= 67108866), z;
		}
		function w(z, O, H, Z) {
			return O === null || O.tag !== 6
				? ((O = Ac(H, z.mode, Z)), (O.return = z), O)
				: ((O = s(O, H)), (O.return = z), O);
		}
		function T(z, O, H, Z) {
			var se = H.type;
			return se === C
				? K(z, O, H.props.children, Z, H.key)
				: O !== null &&
				  (O.elementType === se ||
						(typeof se == "object" &&
							se !== null &&
							se.$$typeof === X &&
							tp(se) === O.type))
				? ((O = s(O, H.props)), Ul(O, H), (O.return = z), O)
				: ((O = Fo(H.type, H.key, H.props, null, z.mode, Z)),
				  Ul(O, H),
				  (O.return = z),
				  O);
		}
		function B(z, O, H, Z) {
			return O === null ||
				O.tag !== 4 ||
				O.stateNode.containerInfo !== H.containerInfo ||
				O.stateNode.implementation !== H.implementation
				? ((O = Cc(H, z.mode, Z)), (O.return = z), O)
				: ((O = s(O, H.children || [])), (O.return = z), O);
		}
		function K(z, O, H, Z, se) {
			return O === null || O.tag !== 7
				? ((O = Ta(H, z.mode, Z, se)), (O.return = z), O)
				: ((O = s(O, H)), (O.return = z), O);
		}
		function F(z, O, H) {
			if (
				(typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
			)
				return (O = Ac("" + O, z.mode, H)), (O.return = z), O;
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case S:
						return (
							(H = Fo(O.type, O.key, O.props, null, z.mode, H)),
							Ul(H, O),
							(H.return = z),
							H
						);
					case E:
						return (O = Cc(O, z.mode, H)), (O.return = z), O;
					case X:
						var Z = O._init;
						return (O = Z(O._payload)), F(z, O, H);
				}
				if (fe(O) || oe(O))
					return (O = Ta(O, z.mode, H, null)), (O.return = z), O;
				if (typeof O.then == "function") return F(z, hi(O), H);
				if (O.$$typeof === D) return F(z, ti(z, O), H);
				pi(z, O);
			}
			return null;
		}
		function $(z, O, H, Z) {
			var se = O !== null ? O.key : null;
			if (
				(typeof H == "string" && H !== "") ||
				typeof H == "number" ||
				typeof H == "bigint"
			)
				return se !== null ? null : w(z, O, "" + H, Z);
			if (typeof H == "object" && H !== null) {
				switch (H.$$typeof) {
					case S:
						return H.key === se ? T(z, O, H, Z) : null;
					case E:
						return H.key === se ? B(z, O, H, Z) : null;
					case X:
						return (
							(se = H._init), (H = se(H._payload)), $(z, O, H, Z)
						);
				}
				if (fe(H) || oe(H))
					return se !== null ? null : K(z, O, H, Z, null);
				if (typeof H.then == "function") return $(z, O, hi(H), Z);
				if (H.$$typeof === D) return $(z, O, ti(z, H), Z);
				pi(z, H);
			}
			return null;
		}
		function Y(z, O, H, Z, se) {
			if (
				(typeof Z == "string" && Z !== "") ||
				typeof Z == "number" ||
				typeof Z == "bigint"
			)
				return (z = z.get(H) || null), w(O, z, "" + Z, se);
			if (typeof Z == "object" && Z !== null) {
				switch (Z.$$typeof) {
					case S:
						return (
							(z = z.get(Z.key === null ? H : Z.key) || null),
							T(O, z, Z, se)
						);
					case E:
						return (
							(z = z.get(Z.key === null ? H : Z.key) || null),
							B(O, z, Z, se)
						);
					case X:
						var Ne = Z._init;
						return (Z = Ne(Z._payload)), Y(z, O, H, Z, se);
				}
				if (fe(Z) || oe(Z))
					return (z = z.get(H) || null), K(O, z, Z, se, null);
				if (typeof Z.then == "function") return Y(z, O, H, hi(Z), se);
				if (Z.$$typeof === D) return Y(z, O, H, ti(O, Z), se);
				pi(O, Z);
			}
			return null;
		}
		function be(z, O, H, Z) {
			for (
				var se = null, Ne = null, he = O, ye = (O = 0), ut = null;
				he !== null && ye < H.length;
				ye++
			) {
				he.index > ye ? ((ut = he), (he = null)) : (ut = he.sibling);
				var _e = $(z, he, H[ye], Z);
				if (_e === null) {
					he === null && (he = ut);
					break;
				}
				e && he && _e.alternate === null && t(z, he),
					(O = f(_e, O, ye)),
					Ne === null ? (se = _e) : (Ne.sibling = _e),
					(Ne = _e),
					(he = ut);
			}
			if (ye === H.length) return a(z, he), je && Oa(z, ye), se;
			if (he === null) {
				for (; ye < H.length; ye++)
					(he = F(z, H[ye], Z)),
						he !== null &&
							((O = f(he, O, ye)),
							Ne === null ? (se = he) : (Ne.sibling = he),
							(Ne = he));
				return je && Oa(z, ye), se;
			}
			for (he = r(he); ye < H.length; ye++)
				(ut = Y(he, z, ye, H[ye], Z)),
					ut !== null &&
						(e &&
							ut.alternate !== null &&
							he.delete(ut.key === null ? ye : ut.key),
						(O = f(ut, O, ye)),
						Ne === null ? (se = ut) : (Ne.sibling = ut),
						(Ne = ut));
			return (
				e &&
					he.forEach(function (fa) {
						return t(z, fa);
					}),
				je && Oa(z, ye),
				se
			);
		}
		function ge(z, O, H, Z) {
			if (H == null) throw Error(i(151));
			for (
				var se = null,
					Ne = null,
					he = O,
					ye = (O = 0),
					ut = null,
					_e = H.next();
				he !== null && !_e.done;
				ye++, _e = H.next()
			) {
				he.index > ye ? ((ut = he), (he = null)) : (ut = he.sibling);
				var fa = $(z, he, _e.value, Z);
				if (fa === null) {
					he === null && (he = ut);
					break;
				}
				e && he && fa.alternate === null && t(z, he),
					(O = f(fa, O, ye)),
					Ne === null ? (se = fa) : (Ne.sibling = fa),
					(Ne = fa),
					(he = ut);
			}
			if (_e.done) return a(z, he), je && Oa(z, ye), se;
			if (he === null) {
				for (; !_e.done; ye++, _e = H.next())
					(_e = F(z, _e.value, Z)),
						_e !== null &&
							((O = f(_e, O, ye)),
							Ne === null ? (se = _e) : (Ne.sibling = _e),
							(Ne = _e));
				return je && Oa(z, ye), se;
			}
			for (he = r(he); !_e.done; ye++, _e = H.next())
				(_e = Y(he, z, ye, _e.value, Z)),
					_e !== null &&
						(e &&
							_e.alternate !== null &&
							he.delete(_e.key === null ? ye : _e.key),
						(O = f(_e, O, ye)),
						Ne === null ? (se = _e) : (Ne.sibling = _e),
						(Ne = _e));
			return (
				e &&
					he.forEach(function (zE) {
						return t(z, zE);
					}),
				je && Oa(z, ye),
				se
			);
		}
		function Ge(z, O, H, Z) {
			if (
				(typeof H == "object" &&
					H !== null &&
					H.type === C &&
					H.key === null &&
					(H = H.props.children),
				typeof H == "object" && H !== null)
			) {
				switch (H.$$typeof) {
					case S:
						e: {
							for (var se = H.key; O !== null; ) {
								if (O.key === se) {
									if (((se = H.type), se === C)) {
										if (O.tag === 7) {
											a(z, O.sibling),
												(Z = s(O, H.props.children)),
												(Z.return = z),
												(z = Z);
											break e;
										}
									} else if (
										O.elementType === se ||
										(typeof se == "object" &&
											se !== null &&
											se.$$typeof === X &&
											tp(se) === O.type)
									) {
										a(z, O.sibling),
											(Z = s(O, H.props)),
											Ul(Z, H),
											(Z.return = z),
											(z = Z);
										break e;
									}
									a(z, O);
									break;
								} else t(z, O);
								O = O.sibling;
							}
							H.type === C
								? ((Z = Ta(H.props.children, z.mode, Z, H.key)),
								  (Z.return = z),
								  (z = Z))
								: ((Z = Fo(
										H.type,
										H.key,
										H.props,
										null,
										z.mode,
										Z
								  )),
								  Ul(Z, H),
								  (Z.return = z),
								  (z = Z));
						}
						return b(z);
					case E:
						e: {
							for (se = H.key; O !== null; ) {
								if (O.key === se)
									if (
										O.tag === 4 &&
										O.stateNode.containerInfo ===
											H.containerInfo &&
										O.stateNode.implementation ===
											H.implementation
									) {
										a(z, O.sibling),
											(Z = s(O, H.children || [])),
											(Z.return = z),
											(z = Z);
										break e;
									} else {
										a(z, O);
										break;
									}
								else t(z, O);
								O = O.sibling;
							}
							(Z = Cc(H, z.mode, Z)), (Z.return = z), (z = Z);
						}
						return b(z);
					case X:
						return (
							(se = H._init), (H = se(H._payload)), Ge(z, O, H, Z)
						);
				}
				if (fe(H)) return be(z, O, H, Z);
				if (oe(H)) {
					if (((se = oe(H)), typeof se != "function"))
						throw Error(i(150));
					return (H = se.call(H)), ge(z, O, H, Z);
				}
				if (typeof H.then == "function") return Ge(z, O, hi(H), Z);
				if (H.$$typeof === D) return Ge(z, O, ti(z, H), Z);
				pi(z, H);
			}
			return (typeof H == "string" && H !== "") ||
				typeof H == "number" ||
				typeof H == "bigint"
				? ((H = "" + H),
				  O !== null && O.tag === 6
						? (a(z, O.sibling),
						  (Z = s(O, H)),
						  (Z.return = z),
						  (z = Z))
						: (a(z, O),
						  (Z = Ac(H, z.mode, Z)),
						  (Z.return = z),
						  (z = Z)),
				  b(z))
				: a(z, O);
		}
		return function (z, O, H, Z) {
			try {
				Ll = 0;
				var se = Ge(z, O, H, Z);
				return (wr = null), se;
			} catch (he) {
				if (he === Nl || he === ai) throw he;
				var Ne = Dt(29, he, null, z.mode);
				return (Ne.lanes = Z), (Ne.return = z), Ne;
			} finally {
			}
		};
	}
	var Er = np(!0),
		ap = np(!1),
		Zt = V(null),
		un = null;
	function In(e) {
		var t = e.alternate;
		U(lt, lt.current & 1),
			U(Zt, e),
			un === null &&
				(t === null ||
					yr.current !== null ||
					t.memoizedState !== null) &&
				(un = e);
	}
	function rp(e) {
		if (e.tag === 22) {
			if ((U(lt, lt.current), U(Zt, e), un === null)) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (un = e);
			}
		} else Fn();
	}
	function Fn() {
		U(lt, lt.current), U(Zt, Zt.current);
	}
	function Mn(e) {
		ee(Zt), un === e && (un = null), ee(lt);
	}
	var lt = V(0);
	function vi(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var a = t.memoizedState;
				if (
					a !== null &&
					((a = a.dehydrated), a === null || a.data === "$?" || Ku(a))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function ru(e, t, a, r) {
		(t = e.memoizedState),
			(a = a(r, t)),
			(a = a == null ? t : y({}, t, a)),
			(e.memoizedState = a),
			e.lanes === 0 && (e.updateQueue.baseState = a);
	}
	var lu = {
		enqueueSetState: function (e, t, a) {
			e = e._reactInternals;
			var r = Lt(),
				s = Kn(r);
			(s.payload = t),
				a != null && (s.callback = a),
				(t = Qn(e, s, r)),
				t !== null && (Ut(t, e, r), Ml(t, e, r));
		},
		enqueueReplaceState: function (e, t, a) {
			e = e._reactInternals;
			var r = Lt(),
				s = Kn(r);
			(s.tag = 1),
				(s.payload = t),
				a != null && (s.callback = a),
				(t = Qn(e, s, r)),
				t !== null && (Ut(t, e, r), Ml(t, e, r));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var a = Lt(),
				r = Kn(a);
			(r.tag = 2),
				t != null && (r.callback = t),
				(t = Qn(e, r, a)),
				t !== null && (Ut(t, e, a), Ml(t, e, a));
		},
	};
	function lp(e, t, a, r, s, f, b) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(r, f, b)
				: t.prototype && t.prototype.isPureReactComponent
				? !bl(a, r) || !bl(s, f)
				: !0
		);
	}
	function op(e, t, a, r) {
		(e = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(a, r),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(a, r),
			t.state !== e && lu.enqueueReplaceState(t, t.state, null);
	}
	function Ua(e, t) {
		var a = t;
		if ("ref" in t) {
			a = {};
			for (var r in t) r !== "ref" && (a[r] = t[r]);
		}
		if ((e = e.defaultProps)) {
			a === t && (a = y({}, a));
			for (var s in e) a[s] === void 0 && (a[s] = e[s]);
		}
		return a;
	}
	var gi =
		typeof reportError == "function"
			? reportError
			: function (e) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == "object" &&
								e !== null &&
								typeof e.message == "string"
									? String(e.message)
									: String(e),
							error: e,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", e);
						return;
					}
					console.error(e);
			  };
	function ip(e) {
		gi(e);
	}
	function sp(e) {
		console.error(e);
	}
	function cp(e) {
		gi(e);
	}
	function yi(e, t) {
		try {
			var a = e.onUncaughtError;
			a(t.value, { componentStack: t.stack });
		} catch (r) {
			setTimeout(function () {
				throw r;
			});
		}
	}
	function up(e, t, a) {
		try {
			var r = e.onCaughtError;
			r(a.value, {
				componentStack: a.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (s) {
			setTimeout(function () {
				throw s;
			});
		}
	}
	function ou(e, t, a) {
		return (
			(a = Kn(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				yi(e, t);
			}),
			a
		);
	}
	function fp(e) {
		return (e = Kn(e)), (e.tag = 3), e;
	}
	function dp(e, t, a, r) {
		var s = a.type.getDerivedStateFromError;
		if (typeof s == "function") {
			var f = r.value;
			(e.payload = function () {
				return s(f);
			}),
				(e.callback = function () {
					up(t, a, r);
				});
		}
		var b = a.stateNode;
		b !== null &&
			typeof b.componentDidCatch == "function" &&
			(e.callback = function () {
				up(t, a, r),
					typeof s != "function" &&
						(aa === null ? (aa = new Set([this])) : aa.add(this));
				var w = r.stack;
				this.componentDidCatch(r.value, {
					componentStack: w !== null ? w : "",
				});
			});
	}
	function zw(e, t, a, r, s) {
		if (
			((a.flags |= 32768),
			r !== null && typeof r == "object" && typeof r.then == "function")
		) {
			if (
				((t = a.alternate),
				t !== null && Al(t, a, s, !0),
				(a = Zt.current),
				a !== null)
			) {
				switch (a.tag) {
					case 13:
						return (
							un === null
								? Ou()
								: a.alternate === null && Fe === 0 && (Fe = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = s),
							r === Pc
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
								  t === null
										? (a.updateQueue = new Set([r]))
										: t.add(r),
								  Du(e, r, s)),
							!1
						);
					case 22:
						return (
							(a.flags |= 65536),
							r === Pc
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([r]),
										  }),
										  (a.updateQueue = t))
										: ((a = t.retryQueue),
										  a === null
												? (t.retryQueue = new Set([r]))
												: a.add(r)),
								  Du(e, r, s)),
							!1
						);
				}
				throw Error(i(435, a.tag));
			}
			return Du(e, r, s), Ou(), !1;
		}
		if (je)
			return (
				(t = Zt.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = s),
					  r !== Tc &&
							((e = Error(i(422), { cause: r })), El(Xt(e, a))))
					: (r !== Tc &&
							((t = Error(i(423), { cause: r })), El(Xt(t, a))),
					  (e = e.current.alternate),
					  (e.flags |= 65536),
					  (s &= -s),
					  (e.lanes |= s),
					  (r = Xt(r, a)),
					  (s = ou(e.stateNode, r, s)),
					  Hc(e, s),
					  Fe !== 4 && (Fe = 2)),
				!1
			);
		var f = Error(i(520), { cause: r });
		if (
			((f = Xt(f, a)),
			ql === null ? (ql = [f]) : ql.push(f),
			Fe !== 4 && (Fe = 2),
			t === null)
		)
			return !0;
		(r = Xt(r, a)), (a = t);
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(e = s & -s),
						(a.lanes |= e),
						(e = ou(a.stateNode, r, e)),
						Hc(a, e),
						!1
					);
				case 1:
					if (
						((t = a.type),
						(f = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(f !== null &&
									typeof f.componentDidCatch == "function" &&
									(aa === null || !aa.has(f)))))
					)
						return (
							(a.flags |= 65536),
							(s &= -s),
							(a.lanes |= s),
							(s = fp(s)),
							dp(s, e, a, r),
							Hc(a, s),
							!1
						);
			}
			a = a.return;
		} while (a !== null);
		return !1;
	}
	var mp = Error(i(461)),
		st = !1;
	function ft(e, t, a, r) {
		t.child = e === null ? ap(t, null, a, r) : Er(t, e.child, a, r);
	}
	function hp(e, t, a, r, s) {
		a = a.render;
		var f = t.ref;
		if ("ref" in r) {
			var b = {};
			for (var w in r) w !== "ref" && (b[w] = r[w]);
		} else b = r;
		return (
			za(t),
			(r = Yc(e, t, a, b, f, s)),
			(w = qc()),
			e !== null && !st
				? (Xc(e, t, s), On(e, t, s))
				: (je && w && Rc(t), (t.flags |= 1), ft(e, t, r, s), t.child)
		);
	}
	function pp(e, t, a, r, s) {
		if (e === null) {
			var f = a.type;
			return typeof f == "function" &&
				!Ec(f) &&
				f.defaultProps === void 0 &&
				a.compare === null
				? ((t.tag = 15), (t.type = f), vp(e, t, f, r, s))
				: ((e = Fo(a.type, null, r, t, t.mode, s)),
				  (e.ref = t.ref),
				  (e.return = t),
				  (t.child = e));
		}
		if (((f = e.child), !hu(e, s))) {
			var b = f.memoizedProps;
			if (
				((a = a.compare),
				(a = a !== null ? a : bl),
				a(b, r) && e.ref === t.ref)
			)
				return On(e, t, s);
		}
		return (
			(t.flags |= 1),
			(e = En(f, r)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function vp(e, t, a, r, s) {
		if (e !== null) {
			var f = e.memoizedProps;
			if (bl(f, r) && e.ref === t.ref)
				if (((st = !1), (t.pendingProps = r = f), hu(e, s)))
					(e.flags & 131072) !== 0 && (st = !0);
				else return (t.lanes = e.lanes), On(e, t, s);
		}
		return iu(e, t, a, r, s);
	}
	function gp(e, t, a) {
		var r = t.pendingProps,
			s = r.children,
			f = e !== null ? e.memoizedState : null;
		if (r.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((r = f !== null ? f.baseLanes | a : a), e !== null)) {
					for (s = t.child = e.child, f = 0; s !== null; )
						(f = f | s.lanes | s.childLanes), (s = s.sibling);
					t.childLanes = f & ~r;
				} else (t.childLanes = 0), (t.child = null);
				return yp(e, t, r, a);
			}
			if ((a & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && ni(t, f !== null ? f.cachePool : null),
					f !== null ? vh(t, f) : Bc(),
					rp(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					yp(e, t, f !== null ? f.baseLanes | a : a, a)
				);
		} else
			f !== null
				? (ni(t, f.cachePool), vh(t, f), Fn(), (t.memoizedState = null))
				: (e !== null && ni(t, null), Bc(), Fn());
		return ft(e, t, s, a), t.child;
	}
	function yp(e, t, a, r) {
		var s = zc();
		return (
			(s = s === null ? null : { parent: rt._currentValue, pool: s }),
			(t.memoizedState = { baseLanes: a, cachePool: s }),
			e !== null && ni(t, null),
			Bc(),
			rp(t),
			e !== null && Al(e, t, r, !0),
			null
		);
	}
	function bi(e, t) {
		var a = t.ref;
		if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof a != "function" && typeof a != "object")
				throw Error(i(284));
			(e === null || e.ref !== a) && (t.flags |= 4194816);
		}
	}
	function iu(e, t, a, r, s) {
		return (
			za(t),
			(a = Yc(e, t, a, r, void 0, s)),
			(r = qc()),
			e !== null && !st
				? (Xc(e, t, s), On(e, t, s))
				: (je && r && Rc(t), (t.flags |= 1), ft(e, t, a, s), t.child)
		);
	}
	function bp(e, t, a, r, s, f) {
		return (
			za(t),
			(t.updateQueue = null),
			(a = yh(t, r, a, s)),
			gh(e),
			(r = qc()),
			e !== null && !st
				? (Xc(e, t, f), On(e, t, f))
				: (je && r && Rc(t), (t.flags |= 1), ft(e, t, a, f), t.child)
		);
	}
	function xp(e, t, a, r, s) {
		if ((za(t), t.stateNode === null)) {
			var f = mr,
				b = a.contextType;
			typeof b == "object" && b !== null && (f = pt(b)),
				(f = new a(r, f)),
				(t.memoizedState =
					f.state !== null && f.state !== void 0 ? f.state : null),
				(f.updater = lu),
				(t.stateNode = f),
				(f._reactInternals = t),
				(f = t.stateNode),
				(f.props = r),
				(f.state = t.memoizedState),
				(f.refs = {}),
				Lc(t),
				(b = a.contextType),
				(f.context = typeof b == "object" && b !== null ? pt(b) : mr),
				(f.state = t.memoizedState),
				(b = a.getDerivedStateFromProps),
				typeof b == "function" &&
					(ru(t, a, b, r), (f.state = t.memoizedState)),
				typeof a.getDerivedStateFromProps == "function" ||
					typeof f.getSnapshotBeforeUpdate == "function" ||
					(typeof f.UNSAFE_componentWillMount != "function" &&
						typeof f.componentWillMount != "function") ||
					((b = f.state),
					typeof f.componentWillMount == "function" &&
						f.componentWillMount(),
					typeof f.UNSAFE_componentWillMount == "function" &&
						f.UNSAFE_componentWillMount(),
					b !== f.state && lu.enqueueReplaceState(f, f.state, null),
					_l(t, r, f, s),
					Ol(),
					(f.state = t.memoizedState)),
				typeof f.componentDidMount == "function" &&
					(t.flags |= 4194308),
				(r = !0);
		} else if (e === null) {
			f = t.stateNode;
			var w = t.memoizedProps,
				T = Ua(a, w);
			f.props = T;
			var B = f.context,
				K = a.contextType;
			(b = mr), typeof K == "object" && K !== null && (b = pt(K));
			var F = a.getDerivedStateFromProps;
			(K =
				typeof F == "function" ||
				typeof f.getSnapshotBeforeUpdate == "function"),
				(w = t.pendingProps !== w),
				K ||
					(typeof f.UNSAFE_componentWillReceiveProps != "function" &&
						typeof f.componentWillReceiveProps != "function") ||
					((w || B !== b) && op(t, f, r, b)),
				(Vn = !1);
			var $ = t.memoizedState;
			(f.state = $),
				_l(t, r, f, s),
				Ol(),
				(B = t.memoizedState),
				w || $ !== B || Vn
					? (typeof F == "function" &&
							(ru(t, a, F, r), (B = t.memoizedState)),
					  (T = Vn || lp(t, a, T, r, $, B, b))
							? (K ||
									(typeof f.UNSAFE_componentWillMount !=
										"function" &&
										typeof f.componentWillMount !=
											"function") ||
									(typeof f.componentWillMount ==
										"function" && f.componentWillMount(),
									typeof f.UNSAFE_componentWillMount ==
										"function" &&
										f.UNSAFE_componentWillMount()),
							  typeof f.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof f.componentDidMount == "function" &&
									(t.flags |= 4194308),
							  (t.memoizedProps = r),
							  (t.memoizedState = B)),
					  (f.props = r),
					  (f.state = B),
					  (f.context = b),
					  (r = T))
					: (typeof f.componentDidMount == "function" &&
							(t.flags |= 4194308),
					  (r = !1));
		} else {
			(f = t.stateNode),
				Uc(e, t),
				(b = t.memoizedProps),
				(K = Ua(a, b)),
				(f.props = K),
				(F = t.pendingProps),
				($ = f.context),
				(B = a.contextType),
				(T = mr),
				typeof B == "object" && B !== null && (T = pt(B)),
				(w = a.getDerivedStateFromProps),
				(B =
					typeof w == "function" ||
					typeof f.getSnapshotBeforeUpdate == "function") ||
					(typeof f.UNSAFE_componentWillReceiveProps != "function" &&
						typeof f.componentWillReceiveProps != "function") ||
					((b !== F || $ !== T) && op(t, f, r, T)),
				(Vn = !1),
				($ = t.memoizedState),
				(f.state = $),
				_l(t, r, f, s),
				Ol();
			var Y = t.memoizedState;
			b !== F ||
			$ !== Y ||
			Vn ||
			(e !== null && e.dependencies !== null && ei(e.dependencies))
				? (typeof w == "function" &&
						(ru(t, a, w, r), (Y = t.memoizedState)),
				  (K =
						Vn ||
						lp(t, a, K, r, $, Y, T) ||
						(e !== null &&
							e.dependencies !== null &&
							ei(e.dependencies)))
						? (B ||
								(typeof f.UNSAFE_componentWillUpdate !=
									"function" &&
									typeof f.componentWillUpdate !=
										"function") ||
								(typeof f.componentWillUpdate == "function" &&
									f.componentWillUpdate(r, Y, T),
								typeof f.UNSAFE_componentWillUpdate ==
									"function" &&
									f.UNSAFE_componentWillUpdate(r, Y, T)),
						  typeof f.componentDidUpdate == "function" &&
								(t.flags |= 4),
						  typeof f.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof f.componentDidUpdate != "function" ||
								(b === e.memoizedProps &&
									$ === e.memoizedState) ||
								(t.flags |= 4),
						  typeof f.getSnapshotBeforeUpdate != "function" ||
								(b === e.memoizedProps &&
									$ === e.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = r),
						  (t.memoizedState = Y)),
				  (f.props = r),
				  (f.state = Y),
				  (f.context = T),
				  (r = K))
				: (typeof f.componentDidUpdate != "function" ||
						(b === e.memoizedProps && $ === e.memoizedState) ||
						(t.flags |= 4),
				  typeof f.getSnapshotBeforeUpdate != "function" ||
						(b === e.memoizedProps && $ === e.memoizedState) ||
						(t.flags |= 1024),
				  (r = !1));
		}
		return (
			(f = r),
			bi(e, t),
			(r = (t.flags & 128) !== 0),
			f || r
				? ((f = t.stateNode),
				  (a =
						r && typeof a.getDerivedStateFromError != "function"
							? null
							: f.render()),
				  (t.flags |= 1),
				  e !== null && r
						? ((t.child = Er(t, e.child, null, s)),
						  (t.child = Er(t, null, a, s)))
						: ft(e, t, a, s),
				  (t.memoizedState = f.state),
				  (e = t.child))
				: (e = On(e, t, s)),
			e
		);
	}
	function Sp(e, t, a, r) {
		return wl(), (t.flags |= 256), ft(e, t, a, r), t.child;
	}
	var su = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function cu(e) {
		return { baseLanes: e, cachePool: sh() };
	}
	function uu(e, t, a) {
		return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= It), e;
	}
	function wp(e, t, a) {
		var r = t.pendingProps,
			s = !1,
			f = (t.flags & 128) !== 0,
			b;
		if (
			((b = f) ||
				(b =
					e !== null && e.memoizedState === null
						? !1
						: (lt.current & 2) !== 0),
			b && ((s = !0), (t.flags &= -129)),
			(b = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (je) {
				if ((s ? In(t) : Fn(), je)) {
					var w = Ie,
						T;
					if ((T = w)) {
						e: {
							for (T = w, w = cn; T.nodeType !== 8; ) {
								if (!w) {
									w = null;
									break e;
								}
								if (((T = nn(T.nextSibling)), T === null)) {
									w = null;
									break e;
								}
							}
							w = T;
						}
						w !== null
							? ((t.memoizedState = {
									dehydrated: w,
									treeContext:
										Ma !== null
											? { id: An, overflow: Cn }
											: null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (T = Dt(18, null, null, 0)),
							  (T.stateNode = w),
							  (T.return = t),
							  (t.child = T),
							  (gt = t),
							  (Ie = null),
							  (T = !0))
							: (T = !1);
					}
					T || Da(t);
				}
				if (
					((w = t.memoizedState),
					w !== null && ((w = w.dehydrated), w !== null))
				)
					return Ku(w) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Mn(t);
			}
			return (
				(w = r.children),
				(r = r.fallback),
				s
					? (Fn(),
					  (s = t.mode),
					  (w = xi({ mode: "hidden", children: w }, s)),
					  (r = Ta(r, s, a, null)),
					  (w.return = t),
					  (r.return = t),
					  (w.sibling = r),
					  (t.child = w),
					  (s = t.child),
					  (s.memoizedState = cu(a)),
					  (s.childLanes = uu(e, b, a)),
					  (t.memoizedState = su),
					  r)
					: (In(t), fu(t, w))
			);
		}
		if (
			((T = e.memoizedState),
			T !== null && ((w = T.dehydrated), w !== null))
		) {
			if (f)
				t.flags & 256
					? (In(t), (t.flags &= -257), (t = du(e, t, a)))
					: t.memoizedState !== null
					? (Fn(), (t.child = e.child), (t.flags |= 128), (t = null))
					: (Fn(),
					  (s = r.fallback),
					  (w = t.mode),
					  (r = xi({ mode: "visible", children: r.children }, w)),
					  (s = Ta(s, w, a, null)),
					  (s.flags |= 2),
					  (r.return = t),
					  (s.return = t),
					  (r.sibling = s),
					  (t.child = r),
					  Er(t, e.child, null, a),
					  (r = t.child),
					  (r.memoizedState = cu(a)),
					  (r.childLanes = uu(e, b, a)),
					  (t.memoizedState = su),
					  (t = s));
			else if ((In(t), Ku(w))) {
				if (((b = w.nextSibling && w.nextSibling.dataset), b))
					var B = b.dgst;
				(b = B),
					(r = Error(i(419))),
					(r.stack = ""),
					(r.digest = b),
					El({ value: r, source: null, stack: null }),
					(t = du(e, t, a));
			} else if (
				(st || Al(e, t, a, !1), (b = (a & e.childLanes) !== 0), st || b)
			) {
				if (
					((b = Ye),
					b !== null &&
						((r = a & -a),
						(r = (r & 42) !== 0 ? 1 : Qs(r)),
						(r = (r & (b.suspendedLanes | a)) !== 0 ? 0 : r),
						r !== 0 && r !== T.retryLane))
				)
					throw ((T.retryLane = r), dr(e, r), Ut(b, e, r), mp);
				w.data === "$?" || Ou(), (t = du(e, t, a));
			} else
				w.data === "$?"
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = T.treeContext),
					  (Ie = nn(w.nextSibling)),
					  (gt = t),
					  (je = !0),
					  (_a = null),
					  (cn = !1),
					  e !== null &&
							((Kt[Qt++] = An),
							(Kt[Qt++] = Cn),
							(Kt[Qt++] = Ma),
							(An = e.id),
							(Cn = e.overflow),
							(Ma = t)),
					  (t = fu(t, r.children)),
					  (t.flags |= 4096));
			return t;
		}
		return s
			? (Fn(),
			  (s = r.fallback),
			  (w = t.mode),
			  (T = e.child),
			  (B = T.sibling),
			  (r = En(T, { mode: "hidden", children: r.children })),
			  (r.subtreeFlags = T.subtreeFlags & 65011712),
			  B !== null
					? (s = En(B, s))
					: ((s = Ta(s, w, a, null)), (s.flags |= 2)),
			  (s.return = t),
			  (r.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  (r = s),
			  (s = t.child),
			  (w = e.child.memoizedState),
			  w === null
					? (w = cu(a))
					: ((T = w.cachePool),
					  T !== null
							? ((B = rt._currentValue),
							  (T = T.parent !== B ? { parent: B, pool: B } : T))
							: (T = sh()),
					  (w = { baseLanes: w.baseLanes | a, cachePool: T })),
			  (s.memoizedState = w),
			  (s.childLanes = uu(e, b, a)),
			  (t.memoizedState = su),
			  r)
			: (In(t),
			  (a = e.child),
			  (e = a.sibling),
			  (a = En(a, { mode: "visible", children: r.children })),
			  (a.return = t),
			  (a.sibling = null),
			  e !== null &&
					((b = t.deletions),
					b === null
						? ((t.deletions = [e]), (t.flags |= 16))
						: b.push(e)),
			  (t.child = a),
			  (t.memoizedState = null),
			  a);
	}
	function fu(e, t) {
		return (
			(t = xi({ mode: "visible", children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		);
	}
	function xi(e, t) {
		return (
			(e = Dt(22, e, null, t)),
			(e.lanes = 0),
			(e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			e
		);
	}
	function du(e, t, a) {
		return (
			Er(t, e.child, null, a),
			(e = fu(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function Ep(e, t, a) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Oc(e.return, t, a);
	}
	function mu(e, t, a, r, s) {
		var f = e.memoizedState;
		f === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: r,
					tail: a,
					tailMode: s,
			  })
			: ((f.isBackwards = t),
			  (f.rendering = null),
			  (f.renderingStartTime = 0),
			  (f.last = r),
			  (f.tail = a),
			  (f.tailMode = s));
	}
	function Ap(e, t, a) {
		var r = t.pendingProps,
			s = r.revealOrder,
			f = r.tail;
		if ((ft(e, t, r.children, a), (r = lt.current), (r & 2) !== 0))
			(r = (r & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && (e.flags & 128) !== 0)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Ep(e, a, t);
					else if (e.tag === 19) Ep(e, a, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			r &= 1;
		}
		switch ((U(lt, r), s)) {
			case "forwards":
				for (a = t.child, s = null; a !== null; )
					(e = a.alternate),
						e !== null && vi(e) === null && (s = a),
						(a = a.sibling);
				(a = s),
					a === null
						? ((s = t.child), (t.child = null))
						: ((s = a.sibling), (a.sibling = null)),
					mu(t, !1, s, a, f);
				break;
			case "backwards":
				for (a = null, s = t.child, t.child = null; s !== null; ) {
					if (((e = s.alternate), e !== null && vi(e) === null)) {
						t.child = s;
						break;
					}
					(e = s.sibling), (s.sibling = a), (a = s), (s = e);
				}
				mu(t, !0, a, null, f);
				break;
			case "together":
				mu(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function On(e, t, a) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(na |= t.lanes),
			(a & t.childLanes) === 0)
		)
			if (e !== null) {
				if ((Al(e, t, a, !1), (a & t.childLanes) === 0)) return null;
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (
				e = t.child,
					a = En(e, e.pendingProps),
					t.child = a,
					a.return = t;
				e.sibling !== null;

			)
				(e = e.sibling),
					(a = a.sibling = En(e, e.pendingProps)),
					(a.return = t);
			a.sibling = null;
		}
		return t.child;
	}
	function hu(e, t) {
		return (e.lanes & t) !== 0
			? !0
			: ((e = e.dependencies), !!(e !== null && ei(e)));
	}
	function Pw(e, t, a) {
		switch (t.tag) {
			case 3:
				re(t, t.stateNode.containerInfo),
					Xn(t, rt, e.memoizedState.cache),
					wl();
				break;
			case 27:
			case 5:
				we(t);
				break;
			case 4:
				re(t, t.stateNode.containerInfo);
				break;
			case 10:
				Xn(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null)
					return r.dehydrated !== null
						? (In(t), (t.flags |= 128), null)
						: (a & t.child.childLanes) !== 0
						? wp(e, t, a)
						: (In(t),
						  (e = On(e, t, a)),
						  e !== null ? e.sibling : null);
				In(t);
				break;
			case 19:
				var s = (e.flags & 128) !== 0;
				if (
					((r = (a & t.childLanes) !== 0),
					r || (Al(e, t, a, !1), (r = (a & t.childLanes) !== 0)),
					s)
				) {
					if (r) return Ap(e, t, a);
					t.flags |= 128;
				}
				if (
					((s = t.memoizedState),
					s !== null &&
						((s.rendering = null),
						(s.tail = null),
						(s.lastEffect = null)),
					U(lt, lt.current),
					r)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), gp(e, t, a);
			case 24:
				Xn(t, rt, e.memoizedState.cache);
		}
		return On(e, t, a);
	}
	function Cp(e, t, a) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) st = !0;
			else {
				if (!hu(e, a) && (t.flags & 128) === 0)
					return (st = !1), Pw(e, t, a);
				st = (e.flags & 131072) !== 0;
			}
		else (st = !1), je && (t.flags & 1048576) !== 0 && th(t, Jo, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps;
					var r = t.elementType,
						s = r._init;
					if (
						((r = s(r._payload)),
						(t.type = r),
						typeof r == "function")
					)
						Ec(r)
							? ((e = Ua(r, e)),
							  (t.tag = 1),
							  (t = xp(null, t, r, e, a)))
							: ((t.tag = 0), (t = iu(null, t, r, e, a)));
					else {
						if (r != null) {
							if (((s = r.$$typeof), s === L)) {
								(t.tag = 11), (t = hp(null, t, r, e, a));
								break e;
							} else if (s === P) {
								(t.tag = 14), (t = pp(null, t, r, e, a));
								break e;
							}
						}
						throw ((t = me(r) || r), Error(i(306, t, "")));
					}
				}
				return t;
			case 0:
				return iu(e, t, t.type, t.pendingProps, a);
			case 1:
				return (
					(r = t.type), (s = Ua(r, t.pendingProps)), xp(e, t, r, s, a)
				);
			case 3:
				e: {
					if ((re(t, t.stateNode.containerInfo), e === null))
						throw Error(i(387));
					r = t.pendingProps;
					var f = t.memoizedState;
					(s = f.element), Uc(e, t), _l(t, r, null, a);
					var b = t.memoizedState;
					if (
						((r = b.cache),
						Xn(t, rt, r),
						r !== f.cache && _c(t, [rt], a, !0),
						Ol(),
						(r = b.element),
						f.isDehydrated)
					)
						if (
							((f = {
								element: r,
								isDehydrated: !1,
								cache: b.cache,
							}),
							(t.updateQueue.baseState = f),
							(t.memoizedState = f),
							t.flags & 256)
						) {
							t = Sp(e, t, r, a);
							break e;
						} else if (r !== s) {
							(s = Xt(Error(i(424)), t)),
								El(s),
								(t = Sp(e, t, r, a));
							break e;
						} else {
							switch (
								((e = t.stateNode.containerInfo), e.nodeType)
							) {
								case 9:
									e = e.body;
									break;
								default:
									e =
										e.nodeName === "HTML"
											? e.ownerDocument.body
											: e;
							}
							for (
								Ie = nn(e.firstChild),
									gt = t,
									je = !0,
									_a = null,
									cn = !0,
									a = ap(t, null, r, a),
									t.child = a;
								a;

							)
								(a.flags = (a.flags & -3) | 4096),
									(a = a.sibling);
						}
					else {
						if ((wl(), r === s)) {
							t = On(e, t, a);
							break e;
						}
						ft(e, t, r, a);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					bi(e, t),
					e === null
						? (a = Mv(t.type, null, t.pendingProps, null))
							? (t.memoizedState = a)
							: je ||
							  ((a = t.type),
							  (e = t.pendingProps),
							  (r = zi(W.current).createElement(a)),
							  (r[ht] = t),
							  (r[bt] = e),
							  mt(r, a, e),
							  it(r),
							  (t.stateNode = r))
						: (t.memoizedState = Mv(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState
						  )),
					null
				);
			case 27:
				return (
					we(t),
					e === null &&
						je &&
						((r = t.stateNode =
							Rv(t.type, t.pendingProps, W.current)),
						(gt = t),
						(cn = !0),
						(s = Ie),
						oa(t.type)
							? ((Qu = s), (Ie = nn(r.firstChild)))
							: (Ie = s)),
					ft(e, t, t.pendingProps.children, a),
					bi(e, t),
					e === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					e === null &&
						je &&
						((s = r = Ie) &&
							((r = cE(r, t.type, t.pendingProps, cn)),
							r !== null
								? ((t.stateNode = r),
								  (gt = t),
								  (Ie = nn(r.firstChild)),
								  (cn = !1),
								  (s = !0))
								: (s = !1)),
						s || Da(t)),
					we(t),
					(s = t.type),
					(f = t.pendingProps),
					(b = e !== null ? e.memoizedProps : null),
					(r = f.children),
					qu(s, f)
						? (r = null)
						: b !== null && qu(s, b) && (t.flags |= 32),
					t.memoizedState !== null &&
						((s = Yc(e, t, Nw, null, null, a)),
						(Jl._currentValue = s)),
					bi(e, t),
					ft(e, t, r, a),
					t.child
				);
			case 6:
				return (
					e === null &&
						je &&
						((e = a = Ie) &&
							((a = uE(a, t.pendingProps, cn)),
							a !== null
								? ((t.stateNode = a),
								  (gt = t),
								  (Ie = null),
								  (e = !0))
								: (e = !1)),
						e || Da(t)),
					null
				);
			case 13:
				return wp(e, t, a);
			case 4:
				return (
					re(t, t.stateNode.containerInfo),
					(r = t.pendingProps),
					e === null ? (t.child = Er(t, null, r, a)) : ft(e, t, r, a),
					t.child
				);
			case 11:
				return hp(e, t, t.type, t.pendingProps, a);
			case 7:
				return ft(e, t, t.pendingProps, a), t.child;
			case 8:
				return ft(e, t, t.pendingProps.children, a), t.child;
			case 12:
				return ft(e, t, t.pendingProps.children, a), t.child;
			case 10:
				return (
					(r = t.pendingProps),
					Xn(t, t.type, r.value),
					ft(e, t, r.children, a),
					t.child
				);
			case 9:
				return (
					(s = t.type._context),
					(r = t.pendingProps.children),
					za(t),
					(s = pt(s)),
					(r = r(s)),
					(t.flags |= 1),
					ft(e, t, r, a),
					t.child
				);
			case 14:
				return pp(e, t, t.type, t.pendingProps, a);
			case 15:
				return vp(e, t, t.type, t.pendingProps, a);
			case 19:
				return Ap(e, t, a);
			case 31:
				return (
					(r = t.pendingProps),
					(a = t.mode),
					(r = { mode: r.mode, children: r.children }),
					e === null
						? ((a = xi(r, a)),
						  (a.ref = t.ref),
						  (t.child = a),
						  (a.return = t),
						  (t = a))
						: ((a = En(e.child, r)),
						  (a.ref = t.ref),
						  (t.child = a),
						  (a.return = t),
						  (t = a)),
					t
				);
			case 22:
				return gp(e, t, a);
			case 24:
				return (
					za(t),
					(r = pt(rt)),
					e === null
						? ((s = zc()),
						  s === null &&
								((s = Ye),
								(f = Dc()),
								(s.pooledCache = f),
								f.refCount++,
								f !== null && (s.pooledCacheLanes |= a),
								(s = f)),
						  (t.memoizedState = { parent: r, cache: s }),
						  Lc(t),
						  Xn(t, rt, s))
						: ((e.lanes & a) !== 0 &&
								(Uc(e, t), _l(t, null, null, a), Ol()),
						  (s = e.memoizedState),
						  (f = t.memoizedState),
						  s.parent !== r
								? ((s = { parent: r, cache: r }),
								  (t.memoizedState = s),
								  t.lanes === 0 &&
										(t.memoizedState =
											t.updateQueue.baseState =
												s),
								  Xn(t, rt, r))
								: ((r = f.cache),
								  Xn(t, rt, r),
								  r !== s.cache && _c(t, [rt], a, !0))),
					ft(e, t, t.pendingProps.children, a),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function _n(e) {
		e.flags |= 4;
	}
	function Rp(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			e.flags &= -16777217;
		else if (((e.flags |= 16777216), !zv(t))) {
			if (
				((t = Zt.current),
				t !== null &&
					((Oe & 4194048) === Oe
						? un !== null
						: ((Oe & 62914560) !== Oe && (Oe & 536870912) === 0) ||
						  t !== un))
			)
				throw ((Tl = Pc), ch);
			e.flags |= 8192;
		}
	}
	function Si(e, t) {
		t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? rm() : 536870912),
				(e.lanes |= t),
				(Nr |= t));
	}
	function Hl(e, t) {
		if (!je)
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var a = null; t !== null; )
						t.alternate !== null && (a = t), (t = t.sibling);
					a === null ? (e.tail = null) : (a.sibling = null);
					break;
				case "collapsed":
					a = e.tail;
					for (var r = null; a !== null; )
						a.alternate !== null && (r = a), (a = a.sibling);
					r === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (r.sibling = null);
			}
	}
	function Ke(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			a = 0,
			r = 0;
		if (t)
			for (var s = e.child; s !== null; )
				(a |= s.lanes | s.childLanes),
					(r |= s.subtreeFlags & 65011712),
					(r |= s.flags & 65011712),
					(s.return = e),
					(s = s.sibling);
		else
			for (s = e.child; s !== null; )
				(a |= s.lanes | s.childLanes),
					(r |= s.subtreeFlags),
					(r |= s.flags),
					(s.return = e),
					(s = s.sibling);
		return (e.subtreeFlags |= r), (e.childLanes = a), t;
	}
	function Lw(e, t, a) {
		var r = t.pendingProps;
		switch ((Nc(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ke(t), null;
			case 1:
				return Ke(t), null;
			case 3:
				return (
					(a = t.stateNode),
					(r = null),
					e !== null && (r = e.memoizedState.cache),
					t.memoizedState.cache !== r && (t.flags |= 2048),
					Nn(rt),
					pe(),
					a.pendingContext &&
						((a.context = a.pendingContext),
						(a.pendingContext = null)),
					(e === null || e.child === null) &&
						(Sl(t)
							? _n(t)
							: e === null ||
							  (e.memoizedState.isDehydrated &&
									(t.flags & 256) === 0) ||
							  ((t.flags |= 1024), rh())),
					Ke(t),
					null
				);
			case 26:
				return (
					(a = t.memoizedState),
					e === null
						? (_n(t),
						  a !== null
								? (Ke(t), Rp(t, a))
								: (Ke(t), (t.flags &= -16777217)))
						: a
						? a !== e.memoizedState
							? (_n(t), Ke(t), Rp(t, a))
							: (Ke(t), (t.flags &= -16777217))
						: (e.memoizedProps !== r && _n(t),
						  Ke(t),
						  (t.flags &= -16777217)),
					null
				);
			case 27:
				Ue(t), (a = W.current);
				var s = t.type;
				if (e !== null && t.stateNode != null)
					e.memoizedProps !== r && _n(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Ke(t), null;
					}
					(e = Q.current),
						Sl(t)
							? nh(t)
							: ((e = Rv(s, r, a)), (t.stateNode = e), _n(t));
				}
				return Ke(t), null;
			case 5:
				if ((Ue(t), (a = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== r && _n(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Ke(t), null;
					}
					if (((e = Q.current), Sl(t))) nh(t);
					else {
						switch (((s = zi(W.current)), e)) {
							case 1:
								e = s.createElementNS(
									"http://www.w3.org/2000/svg",
									a
								);
								break;
							case 2:
								e = s.createElementNS(
									"http://www.w3.org/1998/Math/MathML",
									a
								);
								break;
							default:
								switch (a) {
									case "svg":
										e = s.createElementNS(
											"http://www.w3.org/2000/svg",
											a
										);
										break;
									case "math":
										e = s.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											a
										);
										break;
									case "script":
										(e = s.createElement("div")),
											(e.innerHTML = "<script></script>"),
											(e = e.removeChild(e.firstChild));
										break;
									case "select":
										(e =
											typeof r.is == "string"
												? s.createElement("select", {
														is: r.is,
												  })
												: s.createElement("select")),
											r.multiple
												? (e.multiple = !0)
												: r.size && (e.size = r.size);
										break;
									default:
										e =
											typeof r.is == "string"
												? s.createElement(a, {
														is: r.is,
												  })
												: s.createElement(a);
								}
						}
						(e[ht] = t), (e[bt] = r);
						e: for (s = t.child; s !== null; ) {
							if (s.tag === 5 || s.tag === 6)
								e.appendChild(s.stateNode);
							else if (
								s.tag !== 4 &&
								s.tag !== 27 &&
								s.child !== null
							) {
								(s.child.return = s), (s = s.child);
								continue;
							}
							if (s === t) break e;
							for (; s.sibling === null; ) {
								if (s.return === null || s.return === t)
									break e;
								s = s.return;
							}
							(s.sibling.return = s.return), (s = s.sibling);
						}
						t.stateNode = e;
						e: switch ((mt(e, a, r), a)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!r.autoFocus;
								break e;
							case "img":
								e = !0;
								break e;
							default:
								e = !1;
						}
						e && _n(t);
					}
				}
				return Ke(t), (t.flags &= -16777217), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && _n(t);
				else {
					if (typeof r != "string" && t.stateNode === null)
						throw Error(i(166));
					if (((e = W.current), Sl(t))) {
						if (
							((e = t.stateNode),
							(a = t.memoizedProps),
							(r = null),
							(s = gt),
							s !== null)
						)
							switch (s.tag) {
								case 27:
								case 5:
									r = s.memoizedProps;
							}
						(e[ht] = t),
							(e = !!(
								e.nodeValue === a ||
								(r !== null &&
									r.suppressHydrationWarning === !0) ||
								bv(e.nodeValue, a)
							)),
							e || Da(t);
					} else
						(e = zi(e).createTextNode(r)),
							(e[ht] = t),
							(t.stateNode = e);
				}
				return Ke(t), null;
			case 13:
				if (
					((r = t.memoizedState),
					e === null ||
						(e.memoizedState !== null &&
							e.memoizedState.dehydrated !== null))
				) {
					if (((s = Sl(t)), r !== null && r.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(i(318));
							if (
								((s = t.memoizedState),
								(s = s !== null ? s.dehydrated : null),
								!s)
							)
								throw Error(i(317));
							s[ht] = t;
						} else
							wl(),
								(t.flags & 128) === 0 &&
									(t.memoizedState = null),
								(t.flags |= 4);
						Ke(t), (s = !1);
					} else
						(s = rh()),
							e !== null &&
								e.memoizedState !== null &&
								(e.memoizedState.hydrationErrors = s),
							(s = !0);
					if (!s) return t.flags & 256 ? (Mn(t), t) : (Mn(t), null);
				}
				if ((Mn(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
				if (
					((a = r !== null),
					(e = e !== null && e.memoizedState !== null),
					a)
				) {
					(r = t.child),
						(s = null),
						r.alternate !== null &&
							r.alternate.memoizedState !== null &&
							r.alternate.memoizedState.cachePool !== null &&
							(s = r.alternate.memoizedState.cachePool.pool);
					var f = null;
					r.memoizedState !== null &&
						r.memoizedState.cachePool !== null &&
						(f = r.memoizedState.cachePool.pool),
						f !== s && (r.flags |= 2048);
				}
				return (
					a !== e && a && (t.child.flags |= 8192),
					Si(t, t.updateQueue),
					Ke(t),
					null
				);
			case 4:
				return (
					pe(),
					e === null && ku(t.stateNode.containerInfo),
					Ke(t),
					null
				);
			case 10:
				return Nn(t.type), Ke(t), null;
			case 19:
				if ((ee(lt), (s = t.memoizedState), s === null))
					return Ke(t), null;
				if (
					((r = (t.flags & 128) !== 0), (f = s.rendering), f === null)
				)
					if (r) Hl(s, !1);
					else {
						if (Fe !== 0 || (e !== null && (e.flags & 128) !== 0))
							for (e = t.child; e !== null; ) {
								if (((f = vi(e)), f !== null)) {
									for (
										t.flags |= 128,
											Hl(s, !1),
											e = f.updateQueue,
											t.updateQueue = e,
											Si(t, e),
											t.subtreeFlags = 0,
											e = a,
											a = t.child;
										a !== null;

									)
										eh(a, e), (a = a.sibling);
									return U(lt, (lt.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						s.tail !== null &&
							et() > Ai &&
							((t.flags |= 128),
							(r = !0),
							Hl(s, !1),
							(t.lanes = 4194304));
					}
				else {
					if (!r)
						if (((e = vi(f)), e !== null)) {
							if (
								((t.flags |= 128),
								(r = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								Si(t, e),
								Hl(s, !0),
								s.tail === null &&
									s.tailMode === "hidden" &&
									!f.alternate &&
									!je)
							)
								return Ke(t), null;
						} else
							2 * et() - s.renderingStartTime > Ai &&
								a !== 536870912 &&
								((t.flags |= 128),
								(r = !0),
								Hl(s, !1),
								(t.lanes = 4194304));
					s.isBackwards
						? ((f.sibling = t.child), (t.child = f))
						: ((e = s.last),
						  e !== null ? (e.sibling = f) : (t.child = f),
						  (s.last = f));
				}
				return s.tail !== null
					? ((t = s.tail),
					  (s.rendering = t),
					  (s.tail = t.sibling),
					  (s.renderingStartTime = et()),
					  (t.sibling = null),
					  (e = lt.current),
					  U(lt, r ? (e & 1) | 2 : e & 1),
					  t)
					: (Ke(t), null);
			case 22:
			case 23:
				return (
					Mn(t),
					Gc(),
					(r = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== r && (t.flags |= 8192)
						: r && (t.flags |= 8192),
					r
						? (a & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: Ke(t),
					(a = t.updateQueue),
					a !== null && Si(t, a.retryQueue),
					(a = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					(r = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(r = t.memoizedState.cachePool.pool),
					r !== a && (t.flags |= 2048),
					e !== null && ee(Pa),
					null
				);
			case 24:
				return (
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Nn(rt),
					Ke(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(i(156, t.tag));
	}
	function Uw(e, t) {
		switch ((Nc(t), t.tag)) {
			case 1:
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					Nn(rt),
					pe(),
					(e = t.flags),
					(e & 65536) !== 0 && (e & 128) === 0
						? ((t.flags = (e & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return Ue(t), null;
			case 13:
				if (
					(Mn(t),
					(e = t.memoizedState),
					e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(i(340));
					wl();
				}
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return ee(lt), null;
			case 4:
				return pe(), null;
			case 10:
				return Nn(t.type), null;
			case 22:
			case 23:
				return (
					Mn(t),
					Gc(),
					e !== null && ee(Pa),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 24:
				return Nn(rt), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Np(e, t) {
		switch ((Nc(t), t.tag)) {
			case 3:
				Nn(rt), pe();
				break;
			case 26:
			case 27:
			case 5:
				Ue(t);
				break;
			case 4:
				pe();
				break;
			case 13:
				Mn(t);
				break;
			case 19:
				ee(lt);
				break;
			case 10:
				Nn(t.type);
				break;
			case 22:
			case 23:
				Mn(t), Gc(), e !== null && ee(Pa);
				break;
			case 24:
				Nn(rt);
		}
	}
	function kl(e, t) {
		try {
			var a = t.updateQueue,
				r = a !== null ? a.lastEffect : null;
			if (r !== null) {
				var s = r.next;
				a = s;
				do {
					if ((a.tag & e) === e) {
						r = void 0;
						var f = a.create,
							b = a.inst;
						(r = f()), (b.destroy = r);
					}
					a = a.next;
				} while (a !== s);
			}
		} catch (w) {
			$e(t, t.return, w);
		}
	}
	function Wn(e, t, a) {
		try {
			var r = t.updateQueue,
				s = r !== null ? r.lastEffect : null;
			if (s !== null) {
				var f = s.next;
				r = f;
				do {
					if ((r.tag & e) === e) {
						var b = r.inst,
							w = b.destroy;
						if (w !== void 0) {
							(b.destroy = void 0), (s = t);
							var T = a,
								B = w;
							try {
								B();
							} catch (K) {
								$e(s, T, K);
							}
						}
					}
					r = r.next;
				} while (r !== f);
			}
		} catch (K) {
			$e(t, t.return, K);
		}
	}
	function Tp(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var a = e.stateNode;
			try {
				ph(t, a);
			} catch (r) {
				$e(e, e.return, r);
			}
		}
	}
	function Mp(e, t, a) {
		(a.props = Ua(e.type, e.memoizedProps)), (a.state = e.memoizedState);
		try {
			a.componentWillUnmount();
		} catch (r) {
			$e(e, t, r);
		}
	}
	function Bl(e, t) {
		try {
			var a = e.ref;
			if (a !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default:
						r = e.stateNode;
				}
				typeof a == "function"
					? (e.refCleanup = a(r))
					: (a.current = r);
			}
		} catch (s) {
			$e(e, t, s);
		}
	}
	function fn(e, t) {
		var a = e.ref,
			r = e.refCleanup;
		if (a !== null)
			if (typeof r == "function")
				try {
					r();
				} catch (s) {
					$e(e, t, s);
				} finally {
					(e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null);
				}
			else if (typeof a == "function")
				try {
					a(null);
				} catch (s) {
					$e(e, t, s);
				}
			else a.current = null;
	}
	function Op(e) {
		var t = e.type,
			a = e.memoizedProps,
			r = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					a.autoFocus && r.focus();
					break e;
				case "img":
					a.src ? (r.src = a.src) : a.srcSet && (r.srcset = a.srcSet);
			}
		} catch (s) {
			$e(e, e.return, s);
		}
	}
	function pu(e, t, a) {
		try {
			var r = e.stateNode;
			rE(r, e.type, a, t), (r[bt] = t);
		} catch (s) {
			$e(e, e.return, s);
		}
	}
	function _p(e) {
		return (
			e.tag === 5 ||
			e.tag === 3 ||
			e.tag === 26 ||
			(e.tag === 27 && oa(e.type)) ||
			e.tag === 4
		);
	}
	function vu(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || _p(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

			) {
				if (
					(e.tag === 27 && oa(e.type)) ||
					e.flags & 2 ||
					e.child === null ||
					e.tag === 4
				)
					continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function gu(e, t, a) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode),
				t
					? (a.nodeType === 9
							? a.body
							: a.nodeName === "HTML"
							? a.ownerDocument.body
							: a
					  ).insertBefore(e, t)
					: ((t =
							a.nodeType === 9
								? a.body
								: a.nodeName === "HTML"
								? a.ownerDocument.body
								: a),
					  t.appendChild(e),
					  (a = a._reactRootContainer),
					  a != null || t.onclick !== null || (t.onclick = ji));
		else if (
			r !== 4 &&
			(r === 27 && oa(e.type) && ((a = e.stateNode), (t = null)),
			(e = e.child),
			e !== null)
		)
			for (gu(e, t, a), e = e.sibling; e !== null; )
				gu(e, t, a), (e = e.sibling);
	}
	function wi(e, t, a) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
		else if (
			r !== 4 &&
			(r === 27 && oa(e.type) && (a = e.stateNode),
			(e = e.child),
			e !== null)
		)
			for (wi(e, t, a), e = e.sibling; e !== null; )
				wi(e, t, a), (e = e.sibling);
	}
	function Dp(e) {
		var t = e.stateNode,
			a = e.memoizedProps;
		try {
			for (var r = e.type, s = t.attributes; s.length; )
				t.removeAttributeNode(s[0]);
			mt(t, r, a), (t[ht] = e), (t[bt] = a);
		} catch (f) {
			$e(e, e.return, f);
		}
	}
	var Dn = !1,
		Je = !1,
		yu = !1,
		jp = typeof WeakSet == "function" ? WeakSet : Set,
		ct = null;
	function Hw(e, t) {
		if (((e = e.containerInfo), ($u = Bi), (e = qm(e)), vc(e))) {
			if ("selectionStart" in e)
				var a = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					a = ((a = e.ownerDocument) && a.defaultView) || window;
					var r = a.getSelection && a.getSelection();
					if (r && r.rangeCount !== 0) {
						a = r.anchorNode;
						var s = r.anchorOffset,
							f = r.focusNode;
						r = r.focusOffset;
						try {
							a.nodeType, f.nodeType;
						} catch {
							a = null;
							break e;
						}
						var b = 0,
							w = -1,
							T = -1,
							B = 0,
							K = 0,
							F = e,
							$ = null;
						t: for (;;) {
							for (
								var Y;
								F !== a ||
									(s !== 0 && F.nodeType !== 3) ||
									(w = b + s),
									F !== f ||
										(r !== 0 && F.nodeType !== 3) ||
										(T = b + r),
									F.nodeType === 3 &&
										(b += F.nodeValue.length),
									(Y = F.firstChild) !== null;

							)
								($ = F), (F = Y);
							for (;;) {
								if (F === e) break t;
								if (
									($ === a && ++B === s && (w = b),
									$ === f && ++K === r && (T = b),
									(Y = F.nextSibling) !== null)
								)
									break;
								(F = $), ($ = F.parentNode);
							}
							F = Y;
						}
						a = w === -1 || T === -1 ? null : { start: w, end: T };
					} else a = null;
				}
			a = a || { start: 0, end: 0 };
		} else a = null;
		for (
			Yu = { focusedElem: e, selectionRange: a }, Bi = !1, ct = t;
			ct !== null;

		)
			if (
				((t = ct),
				(e = t.child),
				(t.subtreeFlags & 1024) !== 0 && e !== null)
			)
				(e.return = t), (ct = e);
			else
				for (; ct !== null; ) {
					switch (
						((t = ct), (f = t.alternate), (e = t.flags), t.tag)
					) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && f !== null) {
								(e = void 0),
									(a = t),
									(s = f.memoizedProps),
									(f = f.memoizedState),
									(r = a.stateNode);
								try {
									var be = Ua(
										a.type,
										s,
										a.elementType === a.type
									);
									(e = r.getSnapshotBeforeUpdate(be, f)),
										(r.__reactInternalSnapshotBeforeUpdate =
											e);
								} catch (ge) {
									$e(a, a.return, ge);
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (
									((e = t.stateNode.containerInfo),
									(a = e.nodeType),
									a === 9)
								)
									Vu(e);
								else if (a === 1)
									switch (e.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Vu(e);
											break;
										default:
											e.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(i(163));
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (ct = e);
						break;
					}
					ct = t.return;
				}
	}
	function zp(e, t, a) {
		var r = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				Jn(e, a), r & 4 && kl(5, a);
				break;
			case 1:
				if ((Jn(e, a), r & 4))
					if (((e = a.stateNode), t === null))
						try {
							e.componentDidMount();
						} catch (b) {
							$e(a, a.return, b);
						}
					else {
						var s = Ua(a.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(
								s,
								t,
								e.__reactInternalSnapshotBeforeUpdate
							);
						} catch (b) {
							$e(a, a.return, b);
						}
					}
				r & 64 && Tp(a), r & 512 && Bl(a, a.return);
				break;
			case 3:
				if ((Jn(e, a), r & 64 && ((e = a.updateQueue), e !== null))) {
					if (((t = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								t = a.child.stateNode;
								break;
							case 1:
								t = a.child.stateNode;
						}
					try {
						ph(e, t);
					} catch (b) {
						$e(a, a.return, b);
					}
				}
				break;
			case 27:
				t === null && r & 4 && Dp(a);
			case 26:
			case 5:
				Jn(e, a),
					t === null && r & 4 && Op(a),
					r & 512 && Bl(a, a.return);
				break;
			case 12:
				Jn(e, a);
				break;
			case 13:
				Jn(e, a),
					r & 4 && Up(e, a),
					r & 64 &&
						((e = a.memoizedState),
						e !== null &&
							((e = e.dehydrated),
							e !== null && ((a = Kw.bind(null, a)), fE(e, a))));
				break;
			case 22:
				if (((r = a.memoizedState !== null || Dn), !r)) {
					(t = (t !== null && t.memoizedState !== null) || Je),
						(s = Dn);
					var f = Je;
					(Dn = r),
						(Je = t) && !f
							? ea(e, a, (a.subtreeFlags & 8772) !== 0)
							: Jn(e, a),
						(Dn = s),
						(Je = f);
				}
				break;
			case 30:
				break;
			default:
				Jn(e, a);
		}
	}
	function Pp(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), Pp(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && Fs(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	var Ve = null,
		wt = !1;
	function jn(e, t, a) {
		for (a = a.child; a !== null; ) Lp(e, t, a), (a = a.sibling);
	}
	function Lp(e, t, a) {
		if (Mt && typeof Mt.onCommitFiberUnmount == "function")
			try {
				Mt.onCommitFiberUnmount(il, a);
			} catch {}
		switch (a.tag) {
			case 26:
				Je || fn(a, t),
					jn(e, t, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode &&
						  ((a = a.stateNode), a.parentNode.removeChild(a));
				break;
			case 27:
				Je || fn(a, t);
				var r = Ve,
					s = wt;
				oa(a.type) && ((Ve = a.stateNode), (wt = !1)),
					jn(e, t, a),
					Zl(a.stateNode),
					(Ve = r),
					(wt = s);
				break;
			case 5:
				Je || fn(a, t);
			case 6:
				if (
					((r = Ve),
					(s = wt),
					(Ve = null),
					jn(e, t, a),
					(Ve = r),
					(wt = s),
					Ve !== null)
				)
					if (wt)
						try {
							(Ve.nodeType === 9
								? Ve.body
								: Ve.nodeName === "HTML"
								? Ve.ownerDocument.body
								: Ve
							).removeChild(a.stateNode);
						} catch (f) {
							$e(a, t, f);
						}
					else
						try {
							Ve.removeChild(a.stateNode);
						} catch (f) {
							$e(a, t, f);
						}
				break;
			case 18:
				Ve !== null &&
					(wt
						? ((e = Ve),
						  Av(
								e.nodeType === 9
									? e.body
									: e.nodeName === "HTML"
									? e.ownerDocument.body
									: e,
								a.stateNode
						  ),
						  ao(e))
						: Av(Ve, a.stateNode));
				break;
			case 4:
				(r = Ve),
					(s = wt),
					(Ve = a.stateNode.containerInfo),
					(wt = !0),
					jn(e, t, a),
					(Ve = r),
					(wt = s);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Je || Wn(2, a, t), Je || Wn(4, a, t), jn(e, t, a);
				break;
			case 1:
				Je ||
					(fn(a, t),
					(r = a.stateNode),
					typeof r.componentWillUnmount == "function" && Mp(a, t, r)),
					jn(e, t, a);
				break;
			case 21:
				jn(e, t, a);
				break;
			case 22:
				(Je = (r = Je) || a.memoizedState !== null),
					jn(e, t, a),
					(Je = r);
				break;
			default:
				jn(e, t, a);
		}
	}
	function Up(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				ao(e);
			} catch (a) {
				$e(t, t.return, a);
			}
	}
	function kw(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new jp()), t;
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new jp()),
					t
				);
			default:
				throw Error(i(435, e.tag));
		}
	}
	function bu(e, t) {
		var a = kw(e);
		t.forEach(function (r) {
			var s = Qw.bind(null, e, r);
			a.has(r) || (a.add(r), r.then(s, s));
		});
	}
	function jt(e, t) {
		var a = t.deletions;
		if (a !== null)
			for (var r = 0; r < a.length; r++) {
				var s = a[r],
					f = e,
					b = t,
					w = b;
				e: for (; w !== null; ) {
					switch (w.tag) {
						case 27:
							if (oa(w.type)) {
								(Ve = w.stateNode), (wt = !1);
								break e;
							}
							break;
						case 5:
							(Ve = w.stateNode), (wt = !1);
							break e;
						case 3:
						case 4:
							(Ve = w.stateNode.containerInfo), (wt = !0);
							break e;
					}
					w = w.return;
				}
				if (Ve === null) throw Error(i(160));
				Lp(f, b, s),
					(Ve = null),
					(wt = !1),
					(f = s.alternate),
					f !== null && (f.return = null),
					(s.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) Hp(t, e), (t = t.sibling);
	}
	var tn = null;
	function Hp(e, t) {
		var a = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				jt(t, e),
					zt(e),
					r & 4 && (Wn(3, e, e.return), kl(3, e), Wn(5, e, e.return));
				break;
			case 1:
				jt(t, e),
					zt(e),
					r & 512 && (Je || a === null || fn(a, a.return)),
					r & 64 &&
						Dn &&
						((e = e.updateQueue),
						e !== null &&
							((r = e.callbacks),
							r !== null &&
								((a = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks =
									a === null ? r : a.concat(r)))));
				break;
			case 26:
				var s = tn;
				if (
					(jt(t, e),
					zt(e),
					r & 512 && (Je || a === null || fn(a, a.return)),
					r & 4)
				) {
					var f = a !== null ? a.memoizedState : null;
					if (((r = e.memoizedState), a === null))
						if (r === null)
							if (e.stateNode === null) {
								e: {
									(r = e.type),
										(a = e.memoizedProps),
										(s = s.ownerDocument || s);
									t: switch (r) {
										case "title":
											(f =
												s.getElementsByTagName(
													"title"
												)[0]),
												(!f ||
													f[ul] ||
													f[ht] ||
													f.namespaceURI ===
														"http://www.w3.org/2000/svg" ||
													f.hasAttribute(
														"itemprop"
													)) &&
													((f = s.createElement(r)),
													s.head.insertBefore(
														f,
														s.querySelector(
															"head > title"
														)
													)),
												mt(f, r, a),
												(f[ht] = e),
												it(f),
												(r = f);
											break e;
										case "link":
											var b = Dv("link", "href", s).get(
												r + (a.href || "")
											);
											if (b) {
												for (
													var w = 0;
													w < b.length;
													w++
												)
													if (
														((f = b[w]),
														f.getAttribute(
															"href"
														) ===
															(a.href == null ||
															a.href === ""
																? null
																: a.href) &&
															f.getAttribute(
																"rel"
															) ===
																(a.rel == null
																	? null
																	: a.rel) &&
															f.getAttribute(
																"title"
															) ===
																(a.title == null
																	? null
																	: a.title) &&
															f.getAttribute(
																"crossorigin"
															) ===
																(a.crossOrigin ==
																null
																	? null
																	: a.crossOrigin))
													) {
														b.splice(w, 1);
														break t;
													}
											}
											(f = s.createElement(r)),
												mt(f, r, a),
												s.head.appendChild(f);
											break;
										case "meta":
											if (
												(b = Dv(
													"meta",
													"content",
													s
												).get(r + (a.content || "")))
											) {
												for (w = 0; w < b.length; w++)
													if (
														((f = b[w]),
														f.getAttribute(
															"content"
														) ===
															(a.content == null
																? null
																: "" +
																  a.content) &&
															f.getAttribute(
																"name"
															) ===
																(a.name == null
																	? null
																	: a.name) &&
															f.getAttribute(
																"property"
															) ===
																(a.property ==
																null
																	? null
																	: a.property) &&
															f.getAttribute(
																"http-equiv"
															) ===
																(a.httpEquiv ==
																null
																	? null
																	: a.httpEquiv) &&
															f.getAttribute(
																"charset"
															) ===
																(a.charSet ==
																null
																	? null
																	: a.charSet))
													) {
														b.splice(w, 1);
														break t;
													}
											}
											(f = s.createElement(r)),
												mt(f, r, a),
												s.head.appendChild(f);
											break;
										default:
											throw Error(i(468, r));
									}
									(f[ht] = e), it(f), (r = f);
								}
								e.stateNode = r;
							} else jv(s, e.type, e.stateNode);
						else e.stateNode = _v(s, r, e.memoizedProps);
					else
						f !== r
							? (f === null
									? a.stateNode !== null &&
									  ((a = a.stateNode),
									  a.parentNode.removeChild(a))
									: f.count--,
							  r === null
									? jv(s, e.type, e.stateNode)
									: _v(s, r, e.memoizedProps))
							: r === null &&
							  e.stateNode !== null &&
							  pu(e, e.memoizedProps, a.memoizedProps);
				}
				break;
			case 27:
				jt(t, e),
					zt(e),
					r & 512 && (Je || a === null || fn(a, a.return)),
					a !== null &&
						r & 4 &&
						pu(e, e.memoizedProps, a.memoizedProps);
				break;
			case 5:
				if (
					(jt(t, e),
					zt(e),
					r & 512 && (Je || a === null || fn(a, a.return)),
					e.flags & 32)
				) {
					s = e.stateNode;
					try {
						lr(s, "");
					} catch (Y) {
						$e(e, e.return, Y);
					}
				}
				r & 4 &&
					e.stateNode != null &&
					((s = e.memoizedProps),
					pu(e, s, a !== null ? a.memoizedProps : s)),
					r & 1024 && (yu = !0);
				break;
			case 6:
				if ((jt(t, e), zt(e), r & 4)) {
					if (e.stateNode === null) throw Error(i(162));
					(r = e.memoizedProps), (a = e.stateNode);
					try {
						a.nodeValue = r;
					} catch (Y) {
						$e(e, e.return, Y);
					}
				}
				break;
			case 3:
				if (
					((Ui = null),
					(s = tn),
					(tn = Pi(t.containerInfo)),
					jt(t, e),
					(tn = s),
					zt(e),
					r & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						ao(t.containerInfo);
					} catch (Y) {
						$e(e, e.return, Y);
					}
				yu && ((yu = !1), kp(e));
				break;
			case 4:
				(r = tn),
					(tn = Pi(e.stateNode.containerInfo)),
					jt(t, e),
					zt(e),
					(tn = r);
				break;
			case 12:
				jt(t, e), zt(e);
				break;
			case 13:
				jt(t, e),
					zt(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(Cu = et()),
					r & 4 &&
						((r = e.updateQueue),
						r !== null && ((e.updateQueue = null), bu(e, r)));
				break;
			case 22:
				s = e.memoizedState !== null;
				var T = a !== null && a.memoizedState !== null,
					B = Dn,
					K = Je;
				if (
					((Dn = B || s),
					(Je = K || T),
					jt(t, e),
					(Je = K),
					(Dn = B),
					zt(e),
					r & 8192)
				)
					e: for (
						t = e.stateNode,
							t._visibility = s
								? t._visibility & -2
								: t._visibility | 1,
							s && (a === null || T || Dn || Je || Ha(e)),
							a = null,
							t = e;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (a === null) {
								T = a = t;
								try {
									if (((f = T.stateNode), s))
										(b = f.style),
											typeof b.setProperty == "function"
												? b.setProperty(
														"display",
														"none",
														"important"
												  )
												: (b.display = "none");
									else {
										w = T.stateNode;
										var F = T.memoizedProps.style,
											$ =
												F != null &&
												F.hasOwnProperty("display")
													? F.display
													: null;
										w.style.display =
											$ == null || typeof $ == "boolean"
												? ""
												: ("" + $).trim();
									}
								} catch (Y) {
									$e(T, T.return, Y);
								}
							}
						} else if (t.tag === 6) {
							if (a === null) {
								T = t;
								try {
									T.stateNode.nodeValue = s
										? ""
										: T.memoizedProps;
								} catch (Y) {
									$e(T, T.return, Y);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break e;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e;
							a === t && (a = null), (t = t.return);
						}
						a === t && (a = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				r & 4 &&
					((r = e.updateQueue),
					r !== null &&
						((a = r.retryQueue),
						a !== null && ((r.retryQueue = null), bu(e, a))));
				break;
			case 19:
				jt(t, e),
					zt(e),
					r & 4 &&
						((r = e.updateQueue),
						r !== null && ((e.updateQueue = null), bu(e, r)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				jt(t, e), zt(e);
		}
	}
	function zt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var a, r = e.return; r !== null; ) {
					if (_p(r)) {
						a = r;
						break;
					}
					r = r.return;
				}
				if (a == null) throw Error(i(160));
				switch (a.tag) {
					case 27:
						var s = a.stateNode,
							f = vu(e);
						wi(e, f, s);
						break;
					case 5:
						var b = a.stateNode;
						a.flags & 32 && (lr(b, ""), (a.flags &= -33));
						var w = vu(e);
						wi(e, w, b);
						break;
					case 3:
					case 4:
						var T = a.stateNode.containerInfo,
							B = vu(e);
						gu(e, B, T);
						break;
					default:
						throw Error(i(161));
				}
			} catch (K) {
				$e(e, e.return, K);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function kp(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e;
				kp(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling);
			}
	}
	function Jn(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; )
				zp(e, t.alternate, t), (t = t.sibling);
	}
	function Ha(e) {
		for (e = e.child; e !== null; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Wn(4, t, t.return), Ha(t);
					break;
				case 1:
					fn(t, t.return);
					var a = t.stateNode;
					typeof a.componentWillUnmount == "function" &&
						Mp(t, t.return, a),
						Ha(t);
					break;
				case 27:
					Zl(t.stateNode);
				case 26:
				case 5:
					fn(t, t.return), Ha(t);
					break;
				case 22:
					t.memoizedState === null && Ha(t);
					break;
				case 30:
					Ha(t);
					break;
				default:
					Ha(t);
			}
			e = e.sibling;
		}
	}
	function ea(e, t, a) {
		for (
			a = a && (t.subtreeFlags & 8772) !== 0, t = t.child;
			t !== null;

		) {
			var r = t.alternate,
				s = e,
				f = t,
				b = f.flags;
			switch (f.tag) {
				case 0:
				case 11:
				case 15:
					ea(s, f, a), kl(4, f);
					break;
				case 1:
					if (
						(ea(s, f, a),
						(r = f),
						(s = r.stateNode),
						typeof s.componentDidMount == "function")
					)
						try {
							s.componentDidMount();
						} catch (B) {
							$e(r, r.return, B);
						}
					if (((r = f), (s = r.updateQueue), s !== null)) {
						var w = r.stateNode;
						try {
							var T = s.shared.hiddenCallbacks;
							if (T !== null)
								for (
									s.shared.hiddenCallbacks = null, s = 0;
									s < T.length;
									s++
								)
									hh(T[s], w);
						} catch (B) {
							$e(r, r.return, B);
						}
					}
					a && b & 64 && Tp(f), Bl(f, f.return);
					break;
				case 27:
					Dp(f);
				case 26:
				case 5:
					ea(s, f, a),
						a && r === null && b & 4 && Op(f),
						Bl(f, f.return);
					break;
				case 12:
					ea(s, f, a);
					break;
				case 13:
					ea(s, f, a), a && b & 4 && Up(s, f);
					break;
				case 22:
					f.memoizedState === null && ea(s, f, a), Bl(f, f.return);
					break;
				case 30:
					break;
				default:
					ea(s, f, a);
			}
			t = t.sibling;
		}
	}
	function xu(e, t) {
		var a = null;
		e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(a = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== a && (e != null && e.refCount++, a != null && Cl(a));
	}
	function Su(e, t) {
		(e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && Cl(e));
	}
	function dn(e, t, a, r) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Bp(e, t, a, r), (t = t.sibling);
	}
	function Bp(e, t, a, r) {
		var s = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				dn(e, t, a, r), s & 2048 && kl(9, t);
				break;
			case 1:
				dn(e, t, a, r);
				break;
			case 3:
				dn(e, t, a, r),
					s & 2048 &&
						((e = null),
						t.alternate !== null &&
							(e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && Cl(e)));
				break;
			case 12:
				if (s & 2048) {
					dn(e, t, a, r), (e = t.stateNode);
					try {
						var f = t.memoizedProps,
							b = f.id,
							w = f.onPostCommit;
						typeof w == "function" &&
							w(
								b,
								t.alternate === null ? "mount" : "update",
								e.passiveEffectDuration,
								-0
							);
					} catch (T) {
						$e(t, t.return, T);
					}
				} else dn(e, t, a, r);
				break;
			case 13:
				dn(e, t, a, r);
				break;
			case 23:
				break;
			case 22:
				(f = t.stateNode),
					(b = t.alternate),
					t.memoizedState !== null
						? f._visibility & 2
							? dn(e, t, a, r)
							: Gl(e, t)
						: f._visibility & 2
						? dn(e, t, a, r)
						: ((f._visibility |= 2),
						  Ar(e, t, a, r, (t.subtreeFlags & 10256) !== 0)),
					s & 2048 && xu(b, t);
				break;
			case 24:
				dn(e, t, a, r), s & 2048 && Su(t.alternate, t);
				break;
			default:
				dn(e, t, a, r);
		}
	}
	function Ar(e, t, a, r, s) {
		for (
			s = s && (t.subtreeFlags & 10256) !== 0, t = t.child;
			t !== null;

		) {
			var f = e,
				b = t,
				w = a,
				T = r,
				B = b.flags;
			switch (b.tag) {
				case 0:
				case 11:
				case 15:
					Ar(f, b, w, T, s), kl(8, b);
					break;
				case 23:
					break;
				case 22:
					var K = b.stateNode;
					b.memoizedState !== null
						? K._visibility & 2
							? Ar(f, b, w, T, s)
							: Gl(f, b)
						: ((K._visibility |= 2), Ar(f, b, w, T, s)),
						s && B & 2048 && xu(b.alternate, b);
					break;
				case 24:
					Ar(f, b, w, T, s), s && B & 2048 && Su(b.alternate, b);
					break;
				default:
					Ar(f, b, w, T, s);
			}
			t = t.sibling;
		}
	}
	function Gl(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var a = e,
					r = t,
					s = r.flags;
				switch (r.tag) {
					case 22:
						Gl(a, r), s & 2048 && xu(r.alternate, r);
						break;
					case 24:
						Gl(a, r), s & 2048 && Su(r.alternate, r);
						break;
					default:
						Gl(a, r);
				}
				t = t.sibling;
			}
	}
	var $l = 8192;
	function Cr(e) {
		if (e.subtreeFlags & $l)
			for (e = e.child; e !== null; ) Gp(e), (e = e.sibling);
	}
	function Gp(e) {
		switch (e.tag) {
			case 26:
				Cr(e),
					e.flags & $l &&
						e.memoizedState !== null &&
						AE(tn, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Cr(e);
				break;
			case 3:
			case 4:
				var t = tn;
				(tn = Pi(e.stateNode.containerInfo)), Cr(e), (tn = t);
				break;
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = $l), ($l = 16777216), Cr(e), ($l = t))
						: Cr(e));
				break;
			default:
				Cr(e);
		}
	}
	function $p(e) {
		var t = e.alternate;
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null;
			do (t = e.sibling), (e.sibling = null), (e = t);
			while (e !== null);
		}
	}
	function Yl(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var r = t[a];
					(ct = r), qp(r, e);
				}
			$p(e);
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) Yp(e), (e = e.sibling);
	}
	function Yp(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Yl(e), e.flags & 2048 && Wn(9, e, e.return);
				break;
			case 3:
				Yl(e);
				break;
			case 12:
				Yl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null &&
				t._visibility & 2 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -3), Ei(e))
					: Yl(e);
				break;
			default:
				Yl(e);
		}
	}
	function Ei(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var r = t[a];
					(ct = r), qp(r, e);
				}
			$p(e);
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					Wn(8, t, t.return), Ei(t);
					break;
				case 22:
					(a = t.stateNode),
						a._visibility & 2 && ((a._visibility &= -3), Ei(t));
					break;
				default:
					Ei(t);
			}
			e = e.sibling;
		}
	}
	function qp(e, t) {
		for (; ct !== null; ) {
			var a = ct;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Wn(8, a, t);
					break;
				case 23:
				case 22:
					if (
						a.memoizedState !== null &&
						a.memoizedState.cachePool !== null
					) {
						var r = a.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24:
					Cl(a.memoizedState.cache);
			}
			if (((r = a.child), r !== null)) (r.return = a), (ct = r);
			else
				e: for (a = e; ct !== null; ) {
					r = ct;
					var s = r.sibling,
						f = r.return;
					if ((Pp(r), r === a)) {
						ct = null;
						break e;
					}
					if (s !== null) {
						(s.return = f), (ct = s);
						break e;
					}
					ct = f;
				}
		}
	}
	var Bw = {
			getCacheForType: function (e) {
				var t = pt(rt),
					a = t.data.get(e);
				return a === void 0 && ((a = e()), t.data.set(e, a)), a;
			},
		},
		Gw = typeof WeakMap == "function" ? WeakMap : Map,
		Pe = 0,
		Ye = null,
		Te = null,
		Oe = 0,
		Le = 0,
		Pt = null,
		ta = !1,
		Rr = !1,
		wu = !1,
		zn = 0,
		Fe = 0,
		na = 0,
		ka = 0,
		Eu = 0,
		It = 0,
		Nr = 0,
		ql = null,
		Et = null,
		Au = !1,
		Cu = 0,
		Ai = 1 / 0,
		Ci = null,
		aa = null,
		dt = 0,
		ra = null,
		Tr = null,
		Mr = 0,
		Ru = 0,
		Nu = null,
		Xp = null,
		Xl = 0,
		Tu = null;
	function Lt() {
		if ((Pe & 2) !== 0 && Oe !== 0) return Oe & -Oe;
		if (j.T !== null) {
			var e = vr;
			return e !== 0 ? e : Pu();
		}
		return im();
	}
	function Vp() {
		It === 0 && (It = (Oe & 536870912) === 0 || je ? am() : 536870912);
		var e = Zt.current;
		return e !== null && (e.flags |= 32), It;
	}
	function Ut(e, t, a) {
		((e === Ye && (Le === 2 || Le === 9)) ||
			e.cancelPendingCommit !== null) &&
			(Or(e, 0), la(e, Oe, It, !1)),
			cl(e, a),
			((Pe & 2) === 0 || e !== Ye) &&
				(e === Ye &&
					((Pe & 2) === 0 && (ka |= a),
					Fe === 4 && la(e, Oe, It, !1)),
				mn(e));
	}
	function Kp(e, t, a) {
		if ((Pe & 6) !== 0) throw Error(i(327));
		var r =
				(!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) ||
				sl(e, t),
			s = r ? qw(e, t) : _u(e, t, !0),
			f = r;
		do {
			if (s === 0) {
				Rr && !r && la(e, t, 0, !1);
				break;
			} else {
				if (((a = e.current.alternate), f && !$w(a))) {
					(s = _u(e, t, !1)), (f = !1);
					continue;
				}
				if (s === 2) {
					if (((f = t), e.errorRecoveryDisabledLanes & f)) var b = 0;
					else
						(b = e.pendingLanes & -536870913),
							(b = b !== 0 ? b : b & 536870912 ? 536870912 : 0);
					if (b !== 0) {
						t = b;
						e: {
							var w = e;
							s = ql;
							var T = w.current.memoizedState.isDehydrated;
							if (
								(T && (Or(w, b).flags |= 256),
								(b = _u(w, b, !1)),
								b !== 2)
							) {
								if (wu && !T) {
									(w.errorRecoveryDisabledLanes |= f),
										(ka |= f),
										(s = 4);
									break e;
								}
								(f = Et),
									(Et = s),
									f !== null &&
										(Et === null
											? (Et = f)
											: Et.push.apply(Et, f));
							}
							s = b;
						}
						if (((f = !1), s !== 2)) continue;
					}
				}
				if (s === 1) {
					Or(e, 0), la(e, t, 0, !0);
					break;
				}
				e: {
					switch (((r = e), (f = s), f)) {
						case 0:
						case 1:
							throw Error(i(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							la(r, t, It, !ta);
							break e;
						case 2:
							Et = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(i(329));
					}
					if (
						(t & 62914560) === t &&
						((s = Cu + 300 - et()), 10 < s)
					) {
						if ((la(r, t, It, !ta), Lo(r, 0, !0) !== 0)) break e;
						r.timeoutHandle = wv(
							Qp.bind(
								null,
								r,
								a,
								Et,
								Ci,
								Au,
								t,
								It,
								ka,
								Nr,
								ta,
								f,
								2,
								-0,
								0
							),
							s
						);
						break e;
					}
					Qp(r, a, Et, Ci, Au, t, It, ka, Nr, ta, f, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		mn(e);
	}
	function Qp(e, t, a, r, s, f, b, w, T, B, K, F, $, Y) {
		if (
			((e.timeoutHandle = -1),
			(F = t.subtreeFlags),
			(F & 8192 || (F & 16785408) === 16785408) &&
				((Wl = { stylesheets: null, count: 0, unsuspend: EE }),
				Gp(t),
				(F = CE()),
				F !== null))
		) {
			(e.cancelPendingCommit = F(
				tv.bind(null, e, t, f, a, r, s, b, w, T, K, 1, $, Y)
			)),
				la(e, f, b, !B);
			return;
		}
		tv(e, t, f, a, r, s, b, w, T);
	}
	function $w(e) {
		for (var t = e; ; ) {
			var a = t.tag;
			if (
				(a === 0 || a === 11 || a === 15) &&
				t.flags & 16384 &&
				((a = t.updateQueue),
				a !== null && ((a = a.stores), a !== null))
			)
				for (var r = 0; r < a.length; r++) {
					var s = a[r],
						f = s.getSnapshot;
					s = s.value;
					try {
						if (!_t(f(), s)) return !1;
					} catch {
						return !1;
					}
				}
			if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
				(a.return = t), (t = a);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function la(e, t, a, r) {
		(t &= ~Eu),
			(t &= ~ka),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			r && (e.warmLanes |= t),
			(r = e.expirationTimes);
		for (var s = t; 0 < s; ) {
			var f = 31 - Ot(s),
				b = 1 << f;
			(r[f] = -1), (s &= ~b);
		}
		a !== 0 && lm(e, a, t);
	}
	function Ri() {
		return (Pe & 6) === 0 ? (Vl(0), !1) : !0;
	}
	function Mu() {
		if (Te !== null) {
			if (Le === 0) var e = Te.return;
			else
				(e = Te),
					(Rn = ja = null),
					Vc(e),
					(wr = null),
					(Ll = 0),
					(e = Te);
			for (; e !== null; ) Np(e.alternate, e), (e = e.return);
			Te = null;
		}
	}
	function Or(e, t) {
		var a = e.timeoutHandle;
		a !== -1 && ((e.timeoutHandle = -1), oE(a)),
			(a = e.cancelPendingCommit),
			a !== null && ((e.cancelPendingCommit = null), a()),
			Mu(),
			(Ye = e),
			(Te = a = En(e.current, null)),
			(Oe = t),
			(Le = 0),
			(Pt = null),
			(ta = !1),
			(Rr = sl(e, t)),
			(wu = !1),
			(Nr = It = Eu = ka = na = Fe = 0),
			(Et = ql = null),
			(Au = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0)
			for (e = e.entanglements, r &= t; 0 < r; ) {
				var s = 31 - Ot(r),
					f = 1 << s;
				(t |= e[s]), (r &= ~f);
			}
		return (zn = t), Qo(), a;
	}
	function Zp(e, t) {
		(Ce = null),
			(j.H = mi),
			t === Nl || t === ai
				? ((t = dh()), (Le = 3))
				: t === ch
				? ((t = dh()), (Le = 4))
				: (Le =
						t === mp
							? 8
							: t !== null &&
							  typeof t == "object" &&
							  typeof t.then == "function"
							? 6
							: 1),
			(Pt = t),
			Te === null && ((Fe = 1), yi(e, Xt(t, e.current)));
	}
	function Ip() {
		var e = j.H;
		return (j.H = mi), e === null ? mi : e;
	}
	function Fp() {
		var e = j.A;
		return (j.A = Bw), e;
	}
	function Ou() {
		(Fe = 4),
			ta || ((Oe & 4194048) !== Oe && Zt.current !== null) || (Rr = !0),
			((na & 134217727) === 0 && (ka & 134217727) === 0) ||
				Ye === null ||
				la(Ye, Oe, It, !1);
	}
	function _u(e, t, a) {
		var r = Pe;
		Pe |= 2;
		var s = Ip(),
			f = Fp();
		(Ye !== e || Oe !== t) && ((Ci = null), Or(e, t)), (t = !1);
		var b = Fe;
		e: do
			try {
				if (Le !== 0 && Te !== null) {
					var w = Te,
						T = Pt;
					switch (Le) {
						case 8:
							Mu(), (b = 6);
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							Zt.current === null && (t = !0);
							var B = Le;
							if (
								((Le = 0), (Pt = null), _r(e, w, T, B), a && Rr)
							) {
								b = 0;
								break e;
							}
							break;
						default:
							(B = Le), (Le = 0), (Pt = null), _r(e, w, T, B);
					}
				}
				Yw(), (b = Fe);
				break;
			} catch (K) {
				Zp(e, K);
			}
		while (!0);
		return (
			t && e.shellSuspendCounter++,
			(Rn = ja = null),
			(Pe = r),
			(j.H = s),
			(j.A = f),
			Te === null && ((Ye = null), (Oe = 0), Qo()),
			b
		);
	}
	function Yw() {
		for (; Te !== null; ) Wp(Te);
	}
	function qw(e, t) {
		var a = Pe;
		Pe |= 2;
		var r = Ip(),
			s = Fp();
		Ye !== e || Oe !== t
			? ((Ci = null), (Ai = et() + 500), Or(e, t))
			: (Rr = sl(e, t));
		e: do
			try {
				if (Le !== 0 && Te !== null) {
					t = Te;
					var f = Pt;
					t: switch (Le) {
						case 1:
							(Le = 0), (Pt = null), _r(e, t, f, 1);
							break;
						case 2:
						case 9:
							if (uh(f)) {
								(Le = 0), (Pt = null), Jp(t);
								break;
							}
							(t = function () {
								(Le !== 2 && Le !== 9) || Ye !== e || (Le = 7),
									mn(e);
							}),
								f.then(t, t);
							break e;
						case 3:
							Le = 7;
							break e;
						case 4:
							Le = 5;
							break e;
						case 7:
							uh(f)
								? ((Le = 0), (Pt = null), Jp(t))
								: ((Le = 0), (Pt = null), _r(e, t, f, 7));
							break;
						case 5:
							var b = null;
							switch (Te.tag) {
								case 26:
									b = Te.memoizedState;
								case 5:
								case 27:
									var w = Te;
									if (!b || zv(b)) {
										(Le = 0), (Pt = null);
										var T = w.sibling;
										if (T !== null) Te = T;
										else {
											var B = w.return;
											B !== null
												? ((Te = B), Ni(B))
												: (Te = null);
										}
										break t;
									}
							}
							(Le = 0), (Pt = null), _r(e, t, f, 5);
							break;
						case 6:
							(Le = 0), (Pt = null), _r(e, t, f, 6);
							break;
						case 8:
							Mu(), (Fe = 6);
							break e;
						default:
							throw Error(i(462));
					}
				}
				Xw();
				break;
			} catch (K) {
				Zp(e, K);
			}
		while (!0);
		return (
			(Rn = ja = null),
			(j.H = r),
			(j.A = s),
			(Pe = a),
			Te !== null ? 0 : ((Ye = null), (Oe = 0), Qo(), Fe)
		);
	}
	function Xw() {
		for (; Te !== null && !Tt(); ) Wp(Te);
	}
	function Wp(e) {
		var t = Cp(e.alternate, e, zn);
		(e.memoizedProps = e.pendingProps), t === null ? Ni(e) : (Te = t);
	}
	function Jp(e) {
		var t = e,
			a = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = bp(a, t, t.pendingProps, t.type, void 0, Oe);
				break;
			case 11:
				t = bp(a, t, t.pendingProps, t.type.render, t.ref, Oe);
				break;
			case 5:
				Vc(t);
			default:
				Np(a, t), (t = Te = eh(t, zn)), (t = Cp(a, t, zn));
		}
		(e.memoizedProps = e.pendingProps), t === null ? Ni(e) : (Te = t);
	}
	function _r(e, t, a, r) {
		(Rn = ja = null), Vc(t), (wr = null), (Ll = 0);
		var s = t.return;
		try {
			if (zw(e, s, t, a, Oe)) {
				(Fe = 1), yi(e, Xt(a, e.current)), (Te = null);
				return;
			}
		} catch (f) {
			if (s !== null) throw ((Te = s), f);
			(Fe = 1), yi(e, Xt(a, e.current)), (Te = null);
			return;
		}
		t.flags & 32768
			? (je || r === 1
					? (e = !0)
					: Rr || (Oe & 536870912) !== 0
					? (e = !1)
					: ((ta = e = !0),
					  (r === 2 || r === 9 || r === 3 || r === 6) &&
							((r = Zt.current),
							r !== null && r.tag === 13 && (r.flags |= 16384))),
			  ev(t, e))
			: Ni(t);
	}
	function Ni(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				ev(t, ta);
				return;
			}
			e = t.return;
			var a = Lw(t.alternate, t, zn);
			if (a !== null) {
				Te = a;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				Te = t;
				return;
			}
			Te = t = e;
		} while (t !== null);
		Fe === 0 && (Fe = 5);
	}
	function ev(e, t) {
		do {
			var a = Uw(e.alternate, e);
			if (a !== null) {
				(a.flags &= 32767), (Te = a);
				return;
			}
			if (
				((a = e.return),
				a !== null &&
					((a.flags |= 32768),
					(a.subtreeFlags = 0),
					(a.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				Te = e;
				return;
			}
			Te = e = a;
		} while (e !== null);
		(Fe = 6), (Te = null);
	}
	function tv(e, t, a, r, s, f, b, w, T) {
		e.cancelPendingCommit = null;
		do Ti();
		while (dt !== 0);
		if ((Pe & 6) !== 0) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (
				((f = t.lanes | t.childLanes),
				(f |= Sc),
				ES(e, a, f, b, w, T),
				e === Ye && ((Te = Ye = null), (Oe = 0)),
				(Tr = t),
				(ra = e),
				(Mr = a),
				(Ru = f),
				(Nu = s),
				(Xp = r),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((e.callbackNode = null),
					  (e.callbackPriority = 0),
					  Zw(sn, function () {
							return ov(), null;
					  }))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(r = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || r)
			) {
				(r = j.T),
					(j.T = null),
					(s = I.p),
					(I.p = 2),
					(b = Pe),
					(Pe |= 4);
				try {
					Hw(e, t, a);
				} finally {
					(Pe = b), (I.p = s), (j.T = r);
				}
			}
			(dt = 1), nv(), av(), rv();
		}
	}
	function nv() {
		if (dt === 1) {
			dt = 0;
			var e = ra,
				t = Tr,
				a = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || a) {
				(a = j.T), (j.T = null);
				var r = I.p;
				I.p = 2;
				var s = Pe;
				Pe |= 4;
				try {
					Hp(t, e);
					var f = Yu,
						b = qm(e.containerInfo),
						w = f.focusedElem,
						T = f.selectionRange;
					if (
						b !== w &&
						w &&
						w.ownerDocument &&
						Ym(w.ownerDocument.documentElement, w)
					) {
						if (T !== null && vc(w)) {
							var B = T.start,
								K = T.end;
							if (
								(K === void 0 && (K = B), "selectionStart" in w)
							)
								(w.selectionStart = B),
									(w.selectionEnd = Math.min(
										K,
										w.value.length
									));
							else {
								var F = w.ownerDocument || document,
									$ = (F && F.defaultView) || window;
								if ($.getSelection) {
									var Y = $.getSelection(),
										be = w.textContent.length,
										ge = Math.min(T.start, be),
										Ge =
											T.end === void 0
												? ge
												: Math.min(T.end, be);
									!Y.extend &&
										ge > Ge &&
										((b = Ge), (Ge = ge), (ge = b));
									var z = $m(w, ge),
										O = $m(w, Ge);
									if (
										z &&
										O &&
										(Y.rangeCount !== 1 ||
											Y.anchorNode !== z.node ||
											Y.anchorOffset !== z.offset ||
											Y.focusNode !== O.node ||
											Y.focusOffset !== O.offset)
									) {
										var H = F.createRange();
										H.setStart(z.node, z.offset),
											Y.removeAllRanges(),
											ge > Ge
												? (Y.addRange(H),
												  Y.extend(O.node, O.offset))
												: (H.setEnd(O.node, O.offset),
												  Y.addRange(H));
									}
								}
							}
						}
						for (F = [], Y = w; (Y = Y.parentNode); )
							Y.nodeType === 1 &&
								F.push({
									element: Y,
									left: Y.scrollLeft,
									top: Y.scrollTop,
								});
						for (
							typeof w.focus == "function" && w.focus(), w = 0;
							w < F.length;
							w++
						) {
							var Z = F[w];
							(Z.element.scrollLeft = Z.left),
								(Z.element.scrollTop = Z.top);
						}
					}
					(Bi = !!$u), (Yu = $u = null);
				} finally {
					(Pe = s), (I.p = r), (j.T = a);
				}
			}
			(e.current = t), (dt = 2);
		}
	}
	function av() {
		if (dt === 2) {
			dt = 0;
			var e = ra,
				t = Tr,
				a = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || a) {
				(a = j.T), (j.T = null);
				var r = I.p;
				I.p = 2;
				var s = Pe;
				Pe |= 4;
				try {
					zp(e, t.alternate, t);
				} finally {
					(Pe = s), (I.p = r), (j.T = a);
				}
			}
			dt = 3;
		}
	}
	function rv() {
		if (dt === 4 || dt === 3) {
			(dt = 0), $t();
			var e = ra,
				t = Tr,
				a = Mr,
				r = Xp;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (dt = 5)
				: ((dt = 0), (Tr = ra = null), lv(e, e.pendingLanes));
			var s = e.pendingLanes;
			if (
				(s === 0 && (aa = null),
				Zs(a),
				(t = t.stateNode),
				Mt && typeof Mt.onCommitFiberRoot == "function")
			)
				try {
					Mt.onCommitFiberRoot(
						il,
						t,
						void 0,
						(t.current.flags & 128) === 128
					);
				} catch {}
			if (r !== null) {
				(t = j.T), (s = I.p), (I.p = 2), (j.T = null);
				try {
					for (
						var f = e.onRecoverableError, b = 0;
						b < r.length;
						b++
					) {
						var w = r[b];
						f(w.value, { componentStack: w.stack });
					}
				} finally {
					(j.T = t), (I.p = s);
				}
			}
			(Mr & 3) !== 0 && Ti(),
				mn(e),
				(s = e.pendingLanes),
				(a & 4194090) !== 0 && (s & 42) !== 0
					? e === Tu
						? Xl++
						: ((Xl = 0), (Tu = e))
					: (Xl = 0),
				Vl(0);
		}
	}
	function lv(e, t) {
		(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), Cl(t)));
	}
	function Ti(e) {
		return nv(), av(), rv(), ov();
	}
	function ov() {
		if (dt !== 5) return !1;
		var e = ra,
			t = Ru;
		Ru = 0;
		var a = Zs(Mr),
			r = j.T,
			s = I.p;
		try {
			(I.p = 32 > a ? 32 : a), (j.T = null), (a = Nu), (Nu = null);
			var f = ra,
				b = Mr;
			if (((dt = 0), (Tr = ra = null), (Mr = 0), (Pe & 6) !== 0))
				throw Error(i(331));
			var w = Pe;
			if (
				((Pe |= 4),
				Yp(f.current),
				Bp(f, f.current, b, a),
				(Pe = w),
				Vl(0, !1),
				Mt && typeof Mt.onPostCommitFiberRoot == "function")
			)
				try {
					Mt.onPostCommitFiberRoot(il, f);
				} catch {}
			return !0;
		} finally {
			(I.p = s), (j.T = r), lv(e, t);
		}
	}
	function iv(e, t, a) {
		(t = Xt(a, t)),
			(t = ou(e.stateNode, t, 2)),
			(e = Qn(e, t, 2)),
			e !== null && (cl(e, 2), mn(e));
	}
	function $e(e, t, a) {
		if (e.tag === 3) iv(e, e, a);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					iv(t, e, a);
					break;
				} else if (t.tag === 1) {
					var r = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof r.componentDidCatch == "function" &&
							(aa === null || !aa.has(r)))
					) {
						(e = Xt(a, e)),
							(a = fp(2)),
							(r = Qn(t, a, 2)),
							r !== null && (dp(a, r, t, e), cl(r, 2), mn(r));
						break;
					}
				}
				t = t.return;
			}
	}
	function Du(e, t, a) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Gw();
			var s = new Set();
			r.set(t, s);
		} else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
		s.has(a) ||
			((wu = !0), s.add(a), (e = Vw.bind(null, e, t, a)), t.then(e, e));
	}
	function Vw(e, t, a) {
		var r = e.pingCache;
		r !== null && r.delete(t),
			(e.pingedLanes |= e.suspendedLanes & a),
			(e.warmLanes &= ~a),
			Ye === e &&
				(Oe & a) === a &&
				(Fe === 4 ||
				(Fe === 3 && (Oe & 62914560) === Oe && 300 > et() - Cu)
					? (Pe & 2) === 0 && Or(e, 0)
					: (Eu |= a),
				Nr === Oe && (Nr = 0)),
			mn(e);
	}
	function sv(e, t) {
		t === 0 && (t = rm()), (e = dr(e, t)), e !== null && (cl(e, t), mn(e));
	}
	function Kw(e) {
		var t = e.memoizedState,
			a = 0;
		t !== null && (a = t.retryLane), sv(e, a);
	}
	function Qw(e, t) {
		var a = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode,
					s = e.memoizedState;
				s !== null && (a = s.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default:
				throw Error(i(314));
		}
		r !== null && r.delete(t), sv(e, a);
	}
	function Zw(e, t) {
		return xe(e, t);
	}
	var Mi = null,
		Dr = null,
		ju = !1,
		Oi = !1,
		zu = !1,
		Ba = 0;
	function mn(e) {
		e !== Dr &&
			e.next === null &&
			(Dr === null ? (Mi = Dr = e) : (Dr = Dr.next = e)),
			(Oi = !0),
			ju || ((ju = !0), Fw());
	}
	function Vl(e, t) {
		if (!zu && Oi) {
			zu = !0;
			do
				for (var a = !1, r = Mi; r !== null; ) {
					if (e !== 0) {
						var s = r.pendingLanes;
						if (s === 0) var f = 0;
						else {
							var b = r.suspendedLanes,
								w = r.pingedLanes;
							(f = (1 << (31 - Ot(42 | e) + 1)) - 1),
								(f &= s & ~(b & ~w)),
								(f =
									f & 201326741
										? (f & 201326741) | 1
										: f
										? f | 2
										: 0);
						}
						f !== 0 && ((a = !0), dv(r, f));
					} else
						(f = Oe),
							(f = Lo(
								r,
								r === Ye ? f : 0,
								r.cancelPendingCommit !== null ||
									r.timeoutHandle !== -1
							)),
							(f & 3) === 0 || sl(r, f) || ((a = !0), dv(r, f));
					r = r.next;
				}
			while (a);
			zu = !1;
		}
	}
	function Iw() {
		cv();
	}
	function cv() {
		Oi = ju = !1;
		var e = 0;
		Ba !== 0 && (lE() && (e = Ba), (Ba = 0));
		for (var t = et(), a = null, r = Mi; r !== null; ) {
			var s = r.next,
				f = uv(r, t);
			f === 0
				? ((r.next = null),
				  a === null ? (Mi = s) : (a.next = s),
				  s === null && (Dr = a))
				: ((a = r), (e !== 0 || (f & 3) !== 0) && (Oi = !0)),
				(r = s);
		}
		Vl(e);
	}
	function uv(e, t) {
		for (
			var a = e.suspendedLanes,
				r = e.pingedLanes,
				s = e.expirationTimes,
				f = e.pendingLanes & -62914561;
			0 < f;

		) {
			var b = 31 - Ot(f),
				w = 1 << b,
				T = s[b];
			T === -1
				? ((w & a) === 0 || (w & r) !== 0) && (s[b] = wS(w, t))
				: T <= t && (e.expiredLanes |= w),
				(f &= ~w);
		}
		if (
			((t = Ye),
			(a = Oe),
			(a = Lo(
				e,
				e === t ? a : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			(r = e.callbackNode),
			a === 0 ||
				(e === t && (Le === 2 || Le === 9)) ||
				e.cancelPendingCommit !== null)
		)
			return (
				r !== null && r !== null && Xe(r),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if ((a & 3) === 0 || sl(e, a)) {
			if (((t = a & -a), t === e.callbackPriority)) return t;
			switch ((r !== null && Xe(r), Zs(a))) {
				case 2:
				case 8:
					a = _o;
					break;
				case 32:
					a = sn;
					break;
				case 268435456:
					a = jo;
					break;
				default:
					a = sn;
			}
			return (
				(r = fv.bind(null, e)),
				(a = xe(a, r)),
				(e.callbackPriority = t),
				(e.callbackNode = a),
				t
			);
		}
		return (
			r !== null && r !== null && Xe(r),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function fv(e, t) {
		if (dt !== 0 && dt !== 5)
			return (e.callbackNode = null), (e.callbackPriority = 0), null;
		var a = e.callbackNode;
		if (Ti() && e.callbackNode !== a) return null;
		var r = Oe;
		return (
			(r = Lo(
				e,
				e === Ye ? r : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			r === 0
				? null
				: (Kp(e, r, t),
				  uv(e, et()),
				  e.callbackNode != null && e.callbackNode === a
						? fv.bind(null, e)
						: null)
		);
	}
	function dv(e, t) {
		if (Ti()) return null;
		Kp(e, t, !0);
	}
	function Fw() {
		iE(function () {
			(Pe & 6) !== 0 ? xe(tt, Iw) : cv();
		});
	}
	function Pu() {
		return Ba === 0 && (Ba = am()), Ba;
	}
	function mv(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean"
			? null
			: typeof e == "function"
			? e
			: Go("" + e);
	}
	function hv(e, t) {
		var a = t.ownerDocument.createElement("input");
		return (
			(a.name = t.name),
			(a.value = t.value),
			e.id && a.setAttribute("form", e.id),
			t.parentNode.insertBefore(a, t),
			(e = new FormData(e)),
			a.parentNode.removeChild(a),
			e
		);
	}
	function Ww(e, t, a, r, s) {
		if (t === "submit" && a && a.stateNode === s) {
			var f = mv((s[bt] || null).action),
				b = r.submitter;
			b &&
				((t = (t = b[bt] || null)
					? mv(t.formAction)
					: b.getAttribute("formAction")),
				t !== null && ((f = t), (b = null)));
			var w = new Xo("action", "action", null, r, s);
			e.push({
				event: w,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (r.defaultPrevented) {
								if (Ba !== 0) {
									var T = b ? hv(s, b) : new FormData(s);
									tu(
										a,
										{
											pending: !0,
											data: T,
											method: s.method,
											action: f,
										},
										null,
										T
									);
								}
							} else
								typeof f == "function" &&
									(w.preventDefault(),
									(T = b ? hv(s, b) : new FormData(s)),
									tu(
										a,
										{
											pending: !0,
											data: T,
											method: s.method,
											action: f,
										},
										f,
										T
									));
						},
						currentTarget: s,
					},
				],
			});
		}
	}
	for (var Lu = 0; Lu < xc.length; Lu++) {
		var Uu = xc[Lu],
			Jw = Uu.toLowerCase(),
			eE = Uu[0].toUpperCase() + Uu.slice(1);
		en(Jw, "on" + eE);
	}
	en(Km, "onAnimationEnd"),
		en(Qm, "onAnimationIteration"),
		en(Zm, "onAnimationStart"),
		en("dblclick", "onDoubleClick"),
		en("focusin", "onFocus"),
		en("focusout", "onBlur"),
		en(gw, "onTransitionRun"),
		en(yw, "onTransitionStart"),
		en(bw, "onTransitionCancel"),
		en(Im, "onTransitionEnd"),
		nr("onMouseEnter", ["mouseout", "mouseover"]),
		nr("onMouseLeave", ["mouseout", "mouseover"]),
		nr("onPointerEnter", ["pointerout", "pointerover"]),
		nr("onPointerLeave", ["pointerout", "pointerover"]),
		Aa(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" "
			)
		),
		Aa(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" "
			)
		),
		Aa("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste",
		]),
		Aa(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		Aa(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		Aa(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(
				" "
			)
		);
	var Kl =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" "
			),
		tE = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(Kl)
		);
	function pv(e, t) {
		t = (t & 4) !== 0;
		for (var a = 0; a < e.length; a++) {
			var r = e[a],
				s = r.event;
			r = r.listeners;
			e: {
				var f = void 0;
				if (t)
					for (var b = r.length - 1; 0 <= b; b--) {
						var w = r[b],
							T = w.instance,
							B = w.currentTarget;
						if (
							((w = w.listener),
							T !== f && s.isPropagationStopped())
						)
							break e;
						(f = w), (s.currentTarget = B);
						try {
							f(s);
						} catch (K) {
							gi(K);
						}
						(s.currentTarget = null), (f = T);
					}
				else
					for (b = 0; b < r.length; b++) {
						if (
							((w = r[b]),
							(T = w.instance),
							(B = w.currentTarget),
							(w = w.listener),
							T !== f && s.isPropagationStopped())
						)
							break e;
						(f = w), (s.currentTarget = B);
						try {
							f(s);
						} catch (K) {
							gi(K);
						}
						(s.currentTarget = null), (f = T);
					}
			}
		}
	}
	function Me(e, t) {
		var a = t[Is];
		a === void 0 && (a = t[Is] = new Set());
		var r = e + "__bubble";
		a.has(r) || (vv(t, e, 2, !1), a.add(r));
	}
	function Hu(e, t, a) {
		var r = 0;
		t && (r |= 4), vv(a, e, r, t);
	}
	var _i = "_reactListening" + Math.random().toString(36).slice(2);
	function ku(e) {
		if (!e[_i]) {
			(e[_i] = !0),
				cm.forEach(function (a) {
					a !== "selectionchange" &&
						(tE.has(a) || Hu(a, !1, e), Hu(a, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[_i] || ((t[_i] = !0), Hu("selectionchange", !1, t));
		}
	}
	function vv(e, t, a, r) {
		switch (Bv(t)) {
			case 2:
				var s = TE;
				break;
			case 8:
				s = ME;
				break;
			default:
				s = Ju;
		}
		(a = s.bind(null, t, a, e)),
			(s = void 0),
			!ic ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(s = !0),
			r
				? s !== void 0
					? e.addEventListener(t, a, { capture: !0, passive: s })
					: e.addEventListener(t, a, !0)
				: s !== void 0
				? e.addEventListener(t, a, { passive: s })
				: e.addEventListener(t, a, !1);
	}
	function Bu(e, t, a, r, s) {
		var f = r;
		if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
			e: for (;;) {
				if (r === null) return;
				var b = r.tag;
				if (b === 3 || b === 4) {
					var w = r.stateNode.containerInfo;
					if (w === s) break;
					if (b === 4)
						for (b = r.return; b !== null; ) {
							var T = b.tag;
							if (
								(T === 3 || T === 4) &&
								b.stateNode.containerInfo === s
							)
								return;
							b = b.return;
						}
					for (; w !== null; ) {
						if (((b = Ja(w)), b === null)) return;
						if (
							((T = b.tag),
							T === 5 || T === 6 || T === 26 || T === 27)
						) {
							r = f = b;
							continue e;
						}
						w = w.parentNode;
					}
				}
				r = r.return;
			}
		Em(function () {
			var B = f,
				K = lc(a),
				F = [];
			e: {
				var $ = Fm.get(e);
				if ($ !== void 0) {
					var Y = Xo,
						be = e;
					switch (e) {
						case "keypress":
							if (Yo(a) === 0) break e;
						case "keydown":
						case "keyup":
							Y = ZS;
							break;
						case "focusin":
							(be = "focus"), (Y = fc);
							break;
						case "focusout":
							(be = "blur"), (Y = fc);
							break;
						case "beforeblur":
						case "afterblur":
							Y = fc;
							break;
						case "click":
							if (a.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							Y = Rm;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							Y = US;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							Y = WS;
							break;
						case Km:
						case Qm:
						case Zm:
							Y = BS;
							break;
						case Im:
							Y = ew;
							break;
						case "scroll":
						case "scrollend":
							Y = PS;
							break;
						case "wheel":
							Y = nw;
							break;
						case "copy":
						case "cut":
						case "paste":
							Y = $S;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							Y = Tm;
							break;
						case "toggle":
						case "beforetoggle":
							Y = rw;
					}
					var ge = (t & 4) !== 0,
						Ge = !ge && (e === "scroll" || e === "scrollend"),
						z = ge ? ($ !== null ? $ + "Capture" : null) : $;
					ge = [];
					for (var O = B, H; O !== null; ) {
						var Z = O;
						if (
							((H = Z.stateNode),
							(Z = Z.tag),
							(Z !== 5 && Z !== 26 && Z !== 27) ||
								H === null ||
								z === null ||
								((Z = dl(O, z)),
								Z != null && ge.push(Ql(O, Z, H))),
							Ge)
						)
							break;
						O = O.return;
					}
					0 < ge.length &&
						(($ = new Y($, be, null, a, K)),
						F.push({ event: $, listeners: ge }));
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (
						(($ = e === "mouseover" || e === "pointerover"),
						(Y = e === "mouseout" || e === "pointerout"),
						$ &&
							a !== rc &&
							(be = a.relatedTarget || a.fromElement) &&
							(Ja(be) || be[Wa]))
					)
						break e;
					if (
						(Y || $) &&
						(($ =
							K.window === K
								? K
								: ($ = K.ownerDocument)
								? $.defaultView || $.parentWindow
								: window),
						Y
							? ((be = a.relatedTarget || a.toElement),
							  (Y = B),
							  (be = be ? Ja(be) : null),
							  be !== null &&
									((Ge = u(be)),
									(ge = be.tag),
									be !== Ge ||
										(ge !== 5 && ge !== 27 && ge !== 6)) &&
									(be = null))
							: ((Y = null), (be = B)),
						Y !== be)
					) {
						if (
							((ge = Rm),
							(Z = "onMouseLeave"),
							(z = "onMouseEnter"),
							(O = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((ge = Tm),
								(Z = "onPointerLeave"),
								(z = "onPointerEnter"),
								(O = "pointer")),
							(Ge = Y == null ? $ : fl(Y)),
							(H = be == null ? $ : fl(be)),
							($ = new ge(Z, O + "leave", Y, a, K)),
							($.target = Ge),
							($.relatedTarget = H),
							(Z = null),
							Ja(K) === B &&
								((ge = new ge(z, O + "enter", be, a, K)),
								(ge.target = H),
								(ge.relatedTarget = Ge),
								(Z = ge)),
							(Ge = Z),
							Y && be)
						)
							t: {
								for (
									ge = Y, z = be, O = 0, H = ge;
									H;
									H = jr(H)
								)
									O++;
								for (H = 0, Z = z; Z; Z = jr(Z)) H++;
								for (; 0 < O - H; ) (ge = jr(ge)), O--;
								for (; 0 < H - O; ) (z = jr(z)), H--;
								for (; O--; ) {
									if (
										ge === z ||
										(z !== null && ge === z.alternate)
									)
										break t;
									(ge = jr(ge)), (z = jr(z));
								}
								ge = null;
							}
						else ge = null;
						Y !== null && gv(F, $, Y, ge, !1),
							be !== null && Ge !== null && gv(F, Ge, be, ge, !0);
					}
				}
				e: {
					if (
						(($ = B ? fl(B) : window),
						(Y = $.nodeName && $.nodeName.toLowerCase()),
						Y === "select" || (Y === "input" && $.type === "file"))
					)
						var se = Lm;
					else if (zm($))
						if (Um) se = hw;
						else {
							se = dw;
							var Ne = fw;
						}
					else
						(Y = $.nodeName),
							!Y ||
							Y.toLowerCase() !== "input" ||
							($.type !== "checkbox" && $.type !== "radio")
								? B && ac(B.elementType) && (se = Lm)
								: (se = mw);
					if (se && (se = se(e, B))) {
						Pm(F, se, a, K);
						break e;
					}
					Ne && Ne(e, $, B),
						e === "focusout" &&
							B &&
							$.type === "number" &&
							B.memoizedProps.value != null &&
							nc($, "number", $.value);
				}
				switch (((Ne = B ? fl(B) : window), e)) {
					case "focusin":
						(zm(Ne) || Ne.contentEditable === "true") &&
							((cr = Ne), (gc = B), (xl = null));
						break;
					case "focusout":
						xl = gc = cr = null;
						break;
					case "mousedown":
						yc = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(yc = !1), Xm(F, a, K);
						break;
					case "selectionchange":
						if (vw) break;
					case "keydown":
					case "keyup":
						Xm(F, a, K);
				}
				var he;
				if (mc)
					e: {
						switch (e) {
							case "compositionstart":
								var ye = "onCompositionStart";
								break e;
							case "compositionend":
								ye = "onCompositionEnd";
								break e;
							case "compositionupdate":
								ye = "onCompositionUpdate";
								break e;
						}
						ye = void 0;
					}
				else
					sr
						? Dm(e, a) && (ye = "onCompositionEnd")
						: e === "keydown" &&
						  a.keyCode === 229 &&
						  (ye = "onCompositionStart");
				ye &&
					(Mm &&
						a.locale !== "ko" &&
						(sr || ye !== "onCompositionStart"
							? ye === "onCompositionEnd" && sr && (he = Am())
							: ((qn = K),
							  (sc = "value" in qn ? qn.value : qn.textContent),
							  (sr = !0))),
					(Ne = Di(B, ye)),
					0 < Ne.length &&
						((ye = new Nm(ye, e, null, a, K)),
						F.push({ event: ye, listeners: Ne }),
						he
							? (ye.data = he)
							: ((he = jm(a)), he !== null && (ye.data = he)))),
					(he = ow ? iw(e, a) : sw(e, a)) &&
						((ye = Di(B, "onBeforeInput")),
						0 < ye.length &&
							((Ne = new Nm(
								"onBeforeInput",
								"beforeinput",
								null,
								a,
								K
							)),
							F.push({ event: Ne, listeners: ye }),
							(Ne.data = he))),
					Ww(F, e, B, a, K);
			}
			pv(F, t);
		});
	}
	function Ql(e, t, a) {
		return { instance: e, listener: t, currentTarget: a };
	}
	function Di(e, t) {
		for (var a = t + "Capture", r = []; e !== null; ) {
			var s = e,
				f = s.stateNode;
			if (
				((s = s.tag),
				(s !== 5 && s !== 26 && s !== 27) ||
					f === null ||
					((s = dl(e, a)),
					s != null && r.unshift(Ql(e, s, f)),
					(s = dl(e, t)),
					s != null && r.push(Ql(e, s, f))),
				e.tag === 3)
			)
				return r;
			e = e.return;
		}
		return [];
	}
	function jr(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function gv(e, t, a, r, s) {
		for (var f = t._reactName, b = []; a !== null && a !== r; ) {
			var w = a,
				T = w.alternate,
				B = w.stateNode;
			if (((w = w.tag), T !== null && T === r)) break;
			(w !== 5 && w !== 26 && w !== 27) ||
				B === null ||
				((T = B),
				s
					? ((B = dl(a, f)), B != null && b.unshift(Ql(a, B, T)))
					: s || ((B = dl(a, f)), B != null && b.push(Ql(a, B, T)))),
				(a = a.return);
		}
		b.length !== 0 && e.push({ event: t, listeners: b });
	}
	var nE = /\r\n?/g,
		aE = /\u0000|\uFFFD/g;
	function yv(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				nE,
				`
`
			)
			.replace(aE, "");
	}
	function bv(e, t) {
		return (t = yv(t)), yv(e) === t;
	}
	function ji() {}
	function Be(e, t, a, r, s, f) {
		switch (a) {
			case "children":
				typeof r == "string"
					? t === "body" || (t === "textarea" && r === "") || lr(e, r)
					: (typeof r == "number" || typeof r == "bigint") &&
					  t !== "body" &&
					  lr(e, "" + r);
				break;
			case "className":
				Ho(e, "class", r);
				break;
			case "tabIndex":
				Ho(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Ho(e, a, r);
				break;
			case "style":
				Sm(e, r, f);
				break;
			case "data":
				if (t !== "object") {
					Ho(e, "data", r);
					break;
				}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || a !== "href")) {
					e.removeAttribute(a);
					break;
				}
				if (
					r == null ||
					typeof r == "function" ||
					typeof r == "symbol" ||
					typeof r == "boolean"
				) {
					e.removeAttribute(a);
					break;
				}
				(r = Go("" + r)), e.setAttribute(a, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof f == "function" &&
						(a === "formAction"
							? (t !== "input" &&
									Be(e, t, "name", s.name, s, null),
							  Be(e, t, "formEncType", s.formEncType, s, null),
							  Be(e, t, "formMethod", s.formMethod, s, null),
							  Be(e, t, "formTarget", s.formTarget, s, null))
							: (Be(e, t, "encType", s.encType, s, null),
							  Be(e, t, "method", s.method, s, null),
							  Be(e, t, "target", s.target, s, null)));
				if (
					r == null ||
					typeof r == "symbol" ||
					typeof r == "boolean"
				) {
					e.removeAttribute(a);
					break;
				}
				(r = Go("" + r)), e.setAttribute(a, r);
				break;
			case "onClick":
				r != null && (e.onclick = ji);
				break;
			case "onScroll":
				r != null && Me("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Me("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r))
						throw Error(i(61));
					if (((a = r.__html), a != null)) {
						if (s.children != null) throw Error(i(60));
						e.innerHTML = a;
					}
				}
				break;
			case "multiple":
				e.multiple =
					r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					r == null ||
					typeof r == "function" ||
					typeof r == "boolean" ||
					typeof r == "symbol"
				) {
					e.removeAttribute("xlink:href");
					break;
				}
				(a = Go("" + r)),
					e.setAttributeNS(
						"http://www.w3.org/1999/xlink",
						"xlink:href",
						a
					);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol"
					? e.setAttribute(a, "" + r)
					: e.removeAttribute(a);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol"
					? e.setAttribute(a, "")
					: e.removeAttribute(a);
				break;
			case "capture":
			case "download":
				r === !0
					? e.setAttribute(a, "")
					: r !== !1 &&
					  r != null &&
					  typeof r != "function" &&
					  typeof r != "symbol"
					? e.setAttribute(a, r)
					: e.removeAttribute(a);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null &&
				typeof r != "function" &&
				typeof r != "symbol" &&
				!isNaN(r) &&
				1 <= r
					? e.setAttribute(a, r)
					: e.removeAttribute(a);
				break;
			case "rowSpan":
			case "start":
				r == null ||
				typeof r == "function" ||
				typeof r == "symbol" ||
				isNaN(r)
					? e.removeAttribute(a)
					: e.setAttribute(a, r);
				break;
			case "popover":
				Me("beforetoggle", e), Me("toggle", e), Uo(e, "popover", r);
				break;
			case "xlinkActuate":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Sn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Uo(e, "is", r);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < a.length) ||
					(a[0] !== "o" && a[0] !== "O") ||
					(a[1] !== "n" && a[1] !== "N")) &&
					((a = jS.get(a) || a), Uo(e, a, r));
		}
	}
	function Gu(e, t, a, r, s, f) {
		switch (a) {
			case "style":
				Sm(e, r, f);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r))
						throw Error(i(61));
					if (((a = r.__html), a != null)) {
						if (s.children != null) throw Error(i(60));
						e.innerHTML = a;
					}
				}
				break;
			case "children":
				typeof r == "string"
					? lr(e, r)
					: (typeof r == "number" || typeof r == "bigint") &&
					  lr(e, "" + r);
				break;
			case "onScroll":
				r != null && Me("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Me("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = ji);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!um.hasOwnProperty(a))
					e: {
						if (
							a[0] === "o" &&
							a[1] === "n" &&
							((s = a.endsWith("Capture")),
							(t = a.slice(2, s ? a.length - 7 : void 0)),
							(f = e[bt] || null),
							(f = f != null ? f[a] : null),
							typeof f == "function" &&
								e.removeEventListener(t, f, s),
							typeof r == "function")
						) {
							typeof f != "function" &&
								f !== null &&
								(a in e
									? (e[a] = null)
									: e.hasAttribute(a) &&
									  e.removeAttribute(a)),
								e.addEventListener(t, r, s);
							break e;
						}
						a in e
							? (e[a] = r)
							: r === !0
							? e.setAttribute(a, "")
							: Uo(e, a, r);
					}
		}
	}
	function mt(e, t, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				Me("error", e), Me("load", e);
				var r = !1,
					s = !1,
					f;
				for (f in a)
					if (a.hasOwnProperty(f)) {
						var b = a[f];
						if (b != null)
							switch (f) {
								case "src":
									r = !0;
									break;
								case "srcSet":
									s = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(i(137, t));
								default:
									Be(e, t, f, b, a, null);
							}
					}
				s && Be(e, t, "srcSet", a.srcSet, a, null),
					r && Be(e, t, "src", a.src, a, null);
				return;
			case "input":
				Me("invalid", e);
				var w = (f = b = s = null),
					T = null,
					B = null;
				for (r in a)
					if (a.hasOwnProperty(r)) {
						var K = a[r];
						if (K != null)
							switch (r) {
								case "name":
									s = K;
									break;
								case "type":
									b = K;
									break;
								case "checked":
									T = K;
									break;
								case "defaultChecked":
									B = K;
									break;
								case "value":
									f = K;
									break;
								case "defaultValue":
									w = K;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (K != null) throw Error(i(137, t));
									break;
								default:
									Be(e, t, r, K, a, null);
							}
					}
				gm(e, f, w, T, B, b, s, !1), ko(e);
				return;
			case "select":
				Me("invalid", e), (r = b = f = null);
				for (s in a)
					if (a.hasOwnProperty(s) && ((w = a[s]), w != null))
						switch (s) {
							case "value":
								f = w;
								break;
							case "defaultValue":
								b = w;
								break;
							case "multiple":
								r = w;
							default:
								Be(e, t, s, w, a, null);
						}
				(t = f),
					(a = b),
					(e.multiple = !!r),
					t != null
						? rr(e, !!r, t, !1)
						: a != null && rr(e, !!r, a, !0);
				return;
			case "textarea":
				Me("invalid", e), (f = s = r = null);
				for (b in a)
					if (a.hasOwnProperty(b) && ((w = a[b]), w != null))
						switch (b) {
							case "value":
								r = w;
								break;
							case "defaultValue":
								s = w;
								break;
							case "children":
								f = w;
								break;
							case "dangerouslySetInnerHTML":
								if (w != null) throw Error(i(91));
								break;
							default:
								Be(e, t, b, w, a, null);
						}
				bm(e, r, s, f), ko(e);
				return;
			case "option":
				for (T in a)
					if (a.hasOwnProperty(T) && ((r = a[T]), r != null))
						switch (T) {
							case "selected":
								e.selected =
									r &&
									typeof r != "function" &&
									typeof r != "symbol";
								break;
							default:
								Be(e, t, T, r, a, null);
						}
				return;
			case "dialog":
				Me("beforetoggle", e),
					Me("toggle", e),
					Me("cancel", e),
					Me("close", e);
				break;
			case "iframe":
			case "object":
				Me("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Kl.length; r++) Me(Kl[r], e);
				break;
			case "image":
				Me("error", e), Me("load", e);
				break;
			case "details":
				Me("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				Me("error", e), Me("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (B in a)
					if (a.hasOwnProperty(B) && ((r = a[B]), r != null))
						switch (B) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(i(137, t));
							default:
								Be(e, t, B, r, a, null);
						}
				return;
			default:
				if (ac(t)) {
					for (K in a)
						a.hasOwnProperty(K) &&
							((r = a[K]),
							r !== void 0 && Gu(e, t, K, r, a, void 0));
					return;
				}
		}
		for (w in a)
			a.hasOwnProperty(w) &&
				((r = a[w]), r != null && Be(e, t, w, r, a, null));
	}
	function rE(e, t, a, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var s = null,
					f = null,
					b = null,
					w = null,
					T = null,
					B = null,
					K = null;
				for (Y in a) {
					var F = a[Y];
					if (a.hasOwnProperty(Y) && F != null)
						switch (Y) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								T = F;
							default:
								r.hasOwnProperty(Y) || Be(e, t, Y, null, r, F);
						}
				}
				for (var $ in r) {
					var Y = r[$];
					if (
						((F = a[$]),
						r.hasOwnProperty($) && (Y != null || F != null))
					)
						switch ($) {
							case "type":
								f = Y;
								break;
							case "name":
								s = Y;
								break;
							case "checked":
								B = Y;
								break;
							case "defaultChecked":
								K = Y;
								break;
							case "value":
								b = Y;
								break;
							case "defaultValue":
								w = Y;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (Y != null) throw Error(i(137, t));
								break;
							default:
								Y !== F && Be(e, t, $, Y, r, F);
						}
				}
				tc(e, b, w, T, B, K, f, s);
				return;
			case "select":
				Y = b = w = $ = null;
				for (f in a)
					if (((T = a[f]), a.hasOwnProperty(f) && T != null))
						switch (f) {
							case "value":
								break;
							case "multiple":
								Y = T;
							default:
								r.hasOwnProperty(f) || Be(e, t, f, null, r, T);
						}
				for (s in r)
					if (
						((f = r[s]),
						(T = a[s]),
						r.hasOwnProperty(s) && (f != null || T != null))
					)
						switch (s) {
							case "value":
								$ = f;
								break;
							case "defaultValue":
								w = f;
								break;
							case "multiple":
								b = f;
							default:
								f !== T && Be(e, t, s, f, r, T);
						}
				(t = w),
					(a = b),
					(r = Y),
					$ != null
						? rr(e, !!a, $, !1)
						: !!r != !!a &&
						  (t != null
								? rr(e, !!a, t, !0)
								: rr(e, !!a, a ? [] : "", !1));
				return;
			case "textarea":
				Y = $ = null;
				for (w in a)
					if (
						((s = a[w]),
						a.hasOwnProperty(w) &&
							s != null &&
							!r.hasOwnProperty(w))
					)
						switch (w) {
							case "value":
								break;
							case "children":
								break;
							default:
								Be(e, t, w, null, r, s);
						}
				for (b in r)
					if (
						((s = r[b]),
						(f = a[b]),
						r.hasOwnProperty(b) && (s != null || f != null))
					)
						switch (b) {
							case "value":
								$ = s;
								break;
							case "defaultValue":
								Y = s;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (s != null) throw Error(i(91));
								break;
							default:
								s !== f && Be(e, t, b, s, r, f);
						}
				ym(e, $, Y);
				return;
			case "option":
				for (var be in a)
					if (
						(($ = a[be]),
						a.hasOwnProperty(be) &&
							$ != null &&
							!r.hasOwnProperty(be))
					)
						switch (be) {
							case "selected":
								e.selected = !1;
								break;
							default:
								Be(e, t, be, null, r, $);
						}
				for (T in r)
					if (
						(($ = r[T]),
						(Y = a[T]),
						r.hasOwnProperty(T) &&
							$ !== Y &&
							($ != null || Y != null))
					)
						switch (T) {
							case "selected":
								e.selected =
									$ &&
									typeof $ != "function" &&
									typeof $ != "symbol";
								break;
							default:
								Be(e, t, T, $, r, Y);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var ge in a)
					($ = a[ge]),
						a.hasOwnProperty(ge) &&
							$ != null &&
							!r.hasOwnProperty(ge) &&
							Be(e, t, ge, null, r, $);
				for (B in r)
					if (
						(($ = r[B]),
						(Y = a[B]),
						r.hasOwnProperty(B) &&
							$ !== Y &&
							($ != null || Y != null))
					)
						switch (B) {
							case "children":
							case "dangerouslySetInnerHTML":
								if ($ != null) throw Error(i(137, t));
								break;
							default:
								Be(e, t, B, $, r, Y);
						}
				return;
			default:
				if (ac(t)) {
					for (var Ge in a)
						($ = a[Ge]),
							a.hasOwnProperty(Ge) &&
								$ !== void 0 &&
								!r.hasOwnProperty(Ge) &&
								Gu(e, t, Ge, void 0, r, $);
					for (K in r)
						($ = r[K]),
							(Y = a[K]),
							!r.hasOwnProperty(K) ||
								$ === Y ||
								($ === void 0 && Y === void 0) ||
								Gu(e, t, K, $, r, Y);
					return;
				}
		}
		for (var z in a)
			($ = a[z]),
				a.hasOwnProperty(z) &&
					$ != null &&
					!r.hasOwnProperty(z) &&
					Be(e, t, z, null, r, $);
		for (F in r)
			($ = r[F]),
				(Y = a[F]),
				!r.hasOwnProperty(F) ||
					$ === Y ||
					($ == null && Y == null) ||
					Be(e, t, F, $, r, Y);
	}
	var $u = null,
		Yu = null;
	function zi(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function xv(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Sv(e, t) {
		if (e === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function qu(e, t) {
		return (
			e === "textarea" ||
			e === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var Xu = null;
	function lE() {
		var e = window.event;
		return e && e.type === "popstate"
			? e === Xu
				? !1
				: ((Xu = e), !0)
			: ((Xu = null), !1);
	}
	var wv = typeof setTimeout == "function" ? setTimeout : void 0,
		oE = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Ev = typeof Promise == "function" ? Promise : void 0,
		iE =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Ev < "u"
				? function (e) {
						return Ev.resolve(null).then(e).catch(sE);
				  }
				: wv;
	function sE(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function oa(e) {
		return e === "head";
	}
	function Av(e, t) {
		var a = t,
			r = 0,
			s = 0;
		do {
			var f = a.nextSibling;
			if ((e.removeChild(a), f && f.nodeType === 8))
				if (((a = f.data), a === "/$")) {
					if (0 < r && 8 > r) {
						a = r;
						var b = e.ownerDocument;
						if (
							(a & 1 && Zl(b.documentElement),
							a & 2 && Zl(b.body),
							a & 4)
						)
							for (a = b.head, Zl(a), b = a.firstChild; b; ) {
								var w = b.nextSibling,
									T = b.nodeName;
								b[ul] ||
									T === "SCRIPT" ||
									T === "STYLE" ||
									(T === "LINK" &&
										b.rel.toLowerCase() === "stylesheet") ||
									a.removeChild(b),
									(b = w);
							}
					}
					if (s === 0) {
						e.removeChild(f), ao(t);
						return;
					}
					s--;
				} else
					a === "$" || a === "$?" || a === "$!"
						? s++
						: (r = a.charCodeAt(0) - 48);
			else r = 0;
			a = f;
		} while (a);
		ao(t);
	}
	function Vu(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var a = t;
			switch (((t = t.nextSibling), a.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Vu(a), Fs(a);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (a.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(a);
		}
	}
	function cE(e, t, a, r) {
		for (; e.nodeType === 1; ) {
			var s = a;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
					break;
			} else if (r) {
				if (!e[ul])
					switch (t) {
						case "meta":
							if (!e.hasAttribute("itemprop")) break;
							return e;
						case "link":
							if (
								((f = e.getAttribute("rel")),
								f === "stylesheet" &&
									e.hasAttribute("data-precedence"))
							)
								break;
							if (
								f !== s.rel ||
								e.getAttribute("href") !==
									(s.href == null || s.href === ""
										? null
										: s.href) ||
								e.getAttribute("crossorigin") !==
									(s.crossOrigin == null
										? null
										: s.crossOrigin) ||
								e.getAttribute("title") !==
									(s.title == null ? null : s.title)
							)
								break;
							return e;
						case "style":
							if (e.hasAttribute("data-precedence")) break;
							return e;
						case "script":
							if (
								((f = e.getAttribute("src")),
								(f !== (s.src == null ? null : s.src) ||
									e.getAttribute("type") !==
										(s.type == null ? null : s.type) ||
									e.getAttribute("crossorigin") !==
										(s.crossOrigin == null
											? null
											: s.crossOrigin)) &&
									f &&
									e.hasAttribute("async") &&
									!e.hasAttribute("itemprop"))
							)
								break;
							return e;
						default:
							return e;
					}
			} else if (t === "input" && e.type === "hidden") {
				var f = s.name == null ? null : "" + s.name;
				if (s.type === "hidden" && e.getAttribute("name") === f)
					return e;
			} else return e;
			if (((e = nn(e.nextSibling)), e === null)) break;
		}
		return null;
	}
	function uE(e, t, a) {
		if (t === "") return null;
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 ||
					e.nodeName !== "INPUT" ||
					e.type !== "hidden") &&
					!a) ||
				((e = nn(e.nextSibling)), e === null)
			)
				return null;
		return e;
	}
	function Ku(e) {
		return (
			e.data === "$!" ||
			(e.data === "$?" && e.ownerDocument.readyState === "complete")
		);
	}
	function fE(e, t) {
		var a = e.ownerDocument;
		if (e.data !== "$?" || a.readyState === "complete") t();
		else {
			var r = function () {
				t(), a.removeEventListener("DOMContentLoaded", r);
			};
			a.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
		}
	}
	function nn(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = e.data),
					t === "$" ||
						t === "$!" ||
						t === "$?" ||
						t === "F!" ||
						t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	var Qu = null;
	function Cv(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var a = e.data;
				if (a === "$" || a === "$!" || a === "$?") {
					if (t === 0) return e;
					t--;
				} else a === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Rv(e, t, a) {
		switch (((t = zi(a)), e)) {
			case "html":
				if (((e = t.documentElement), !e)) throw Error(i(452));
				return e;
			case "head":
				if (((e = t.head), !e)) throw Error(i(453));
				return e;
			case "body":
				if (((e = t.body), !e)) throw Error(i(454));
				return e;
			default:
				throw Error(i(451));
		}
	}
	function Zl(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
		Fs(e);
	}
	var Ft = new Map(),
		Nv = new Set();
	function Pi(e) {
		return typeof e.getRootNode == "function"
			? e.getRootNode()
			: e.nodeType === 9
			? e
			: e.ownerDocument;
	}
	var Pn = I.d;
	I.d = { f: dE, r: mE, D: hE, C: pE, L: vE, m: gE, X: bE, S: yE, M: xE };
	function dE() {
		var e = Pn.f(),
			t = Ri();
		return e || t;
	}
	function mE(e) {
		var t = er(e);
		t !== null && t.tag === 5 && t.type === "form" ? Kh(t) : Pn.r(e);
	}
	var zr = typeof document > "u" ? null : document;
	function Tv(e, t, a) {
		var r = zr;
		if (r && typeof t == "string" && t) {
			var s = qt(t);
			(s = 'link[rel="' + e + '"][href="' + s + '"]'),
				typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
				Nv.has(s) ||
					(Nv.add(s),
					(e = { rel: e, crossOrigin: a, href: t }),
					r.querySelector(s) === null &&
						((t = r.createElement("link")),
						mt(t, "link", e),
						it(t),
						r.head.appendChild(t)));
		}
	}
	function hE(e) {
		Pn.D(e), Tv("dns-prefetch", e, null);
	}
	function pE(e, t) {
		Pn.C(e, t), Tv("preconnect", e, t);
	}
	function vE(e, t, a) {
		Pn.L(e, t, a);
		var r = zr;
		if (r && e && t) {
			var s = 'link[rel="preload"][as="' + qt(t) + '"]';
			t === "image" && a && a.imageSrcSet
				? ((s += '[imagesrcset="' + qt(a.imageSrcSet) + '"]'),
				  typeof a.imageSizes == "string" &&
						(s += '[imagesizes="' + qt(a.imageSizes) + '"]'))
				: (s += '[href="' + qt(e) + '"]');
			var f = s;
			switch (t) {
				case "style":
					f = Pr(e);
					break;
				case "script":
					f = Lr(e);
			}
			Ft.has(f) ||
				((e = y(
					{
						rel: "preload",
						href: t === "image" && a && a.imageSrcSet ? void 0 : e,
						as: t,
					},
					a
				)),
				Ft.set(f, e),
				r.querySelector(s) !== null ||
					(t === "style" && r.querySelector(Il(f))) ||
					(t === "script" && r.querySelector(Fl(f))) ||
					((t = r.createElement("link")),
					mt(t, "link", e),
					it(t),
					r.head.appendChild(t)));
		}
	}
	function gE(e, t) {
		Pn.m(e, t);
		var a = zr;
		if (a && e) {
			var r = t && typeof t.as == "string" ? t.as : "script",
				s =
					'link[rel="modulepreload"][as="' +
					qt(r) +
					'"][href="' +
					qt(e) +
					'"]',
				f = s;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					f = Lr(e);
			}
			if (
				!Ft.has(f) &&
				((e = y({ rel: "modulepreload", href: e }, t)),
				Ft.set(f, e),
				a.querySelector(s) === null)
			) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (a.querySelector(Fl(f))) return;
				}
				(r = a.createElement("link")),
					mt(r, "link", e),
					it(r),
					a.head.appendChild(r);
			}
		}
	}
	function yE(e, t, a) {
		Pn.S(e, t, a);
		var r = zr;
		if (r && e) {
			var s = tr(r).hoistableStyles,
				f = Pr(e);
			t = t || "default";
			var b = s.get(f);
			if (!b) {
				var w = { loading: 0, preload: null };
				if ((b = r.querySelector(Il(f)))) w.loading = 5;
				else {
					(e = y(
						{ rel: "stylesheet", href: e, "data-precedence": t },
						a
					)),
						(a = Ft.get(f)) && Zu(e, a);
					var T = (b = r.createElement("link"));
					it(T),
						mt(T, "link", e),
						(T._p = new Promise(function (B, K) {
							(T.onload = B), (T.onerror = K);
						})),
						T.addEventListener("load", function () {
							w.loading |= 1;
						}),
						T.addEventListener("error", function () {
							w.loading |= 2;
						}),
						(w.loading |= 4),
						Li(b, t, r);
				}
				(b = { type: "stylesheet", instance: b, count: 1, state: w }),
					s.set(f, b);
			}
		}
	}
	function bE(e, t) {
		Pn.X(e, t);
		var a = zr;
		if (a && e) {
			var r = tr(a).hoistableScripts,
				s = Lr(e),
				f = r.get(s);
			f ||
				((f = a.querySelector(Fl(s))),
				f ||
					((e = y({ src: e, async: !0 }, t)),
					(t = Ft.get(s)) && Iu(e, t),
					(f = a.createElement("script")),
					it(f),
					mt(f, "link", e),
					a.head.appendChild(f)),
				(f = { type: "script", instance: f, count: 1, state: null }),
				r.set(s, f));
		}
	}
	function xE(e, t) {
		Pn.M(e, t);
		var a = zr;
		if (a && e) {
			var r = tr(a).hoistableScripts,
				s = Lr(e),
				f = r.get(s);
			f ||
				((f = a.querySelector(Fl(s))),
				f ||
					((e = y({ src: e, async: !0, type: "module" }, t)),
					(t = Ft.get(s)) && Iu(e, t),
					(f = a.createElement("script")),
					it(f),
					mt(f, "link", e),
					a.head.appendChild(f)),
				(f = { type: "script", instance: f, count: 1, state: null }),
				r.set(s, f));
		}
	}
	function Mv(e, t, a, r) {
		var s = (s = W.current) ? Pi(s) : null;
		if (!s) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof a.precedence == "string" &&
					typeof a.href == "string"
					? ((t = Pr(a.href)),
					  (a = tr(s).hoistableStyles),
					  (r = a.get(t)),
					  r ||
							((r = {
								type: "style",
								instance: null,
								count: 0,
								state: null,
							}),
							a.set(t, r)),
					  r)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					a.rel === "stylesheet" &&
					typeof a.href == "string" &&
					typeof a.precedence == "string"
				) {
					e = Pr(a.href);
					var f = tr(s).hoistableStyles,
						b = f.get(e);
					if (
						(b ||
							((s = s.ownerDocument || s),
							(b = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							f.set(e, b),
							(f = s.querySelector(Il(e))) &&
								!f._p &&
								((b.instance = f), (b.state.loading = 5)),
							Ft.has(e) ||
								((a = {
									rel: "preload",
									as: "style",
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy,
								}),
								Ft.set(e, a),
								f || SE(s, e, a, b.state))),
						t && r === null)
					)
						throw Error(i(528, ""));
					return b;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script":
				return (
					(t = a.async),
					(a = a.src),
					typeof a == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = Lr(a)),
						  (a = tr(s).hoistableScripts),
						  (r = a.get(t)),
						  r ||
								((r = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								a.set(t, r)),
						  r)
						: {
								type: "void",
								instance: null,
								count: 0,
								state: null,
						  }
				);
			default:
				throw Error(i(444, e));
		}
	}
	function Pr(e) {
		return 'href="' + qt(e) + '"';
	}
	function Il(e) {
		return 'link[rel="stylesheet"][' + e + "]";
	}
	function Ov(e) {
		return y({}, e, { "data-precedence": e.precedence, precedence: null });
	}
	function SE(e, t, a, r) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (r.loading = 1)
			: ((t = e.createElement("link")),
			  (r.preload = t),
			  t.addEventListener("load", function () {
					return (r.loading |= 1);
			  }),
			  t.addEventListener("error", function () {
					return (r.loading |= 2);
			  }),
			  mt(t, "link", a),
			  it(t),
			  e.head.appendChild(t));
	}
	function Lr(e) {
		return '[src="' + qt(e) + '"]';
	}
	function Fl(e) {
		return "script[async]" + e;
	}
	function _v(e, t, a) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var r = e.querySelector(
						'style[data-href~="' + qt(a.href) + '"]'
					);
					if (r) return (t.instance = r), it(r), r;
					var s = y({}, a, {
						"data-href": a.href,
						"data-precedence": a.precedence,
						href: null,
						precedence: null,
					});
					return (
						(r = (e.ownerDocument || e).createElement("style")),
						it(r),
						mt(r, "style", s),
						Li(r, a.precedence, e),
						(t.instance = r)
					);
				case "stylesheet":
					s = Pr(a.href);
					var f = e.querySelector(Il(s));
					if (f)
						return (
							(t.state.loading |= 4), (t.instance = f), it(f), f
						);
					(r = Ov(a)),
						(s = Ft.get(s)) && Zu(r, s),
						(f = (e.ownerDocument || e).createElement("link")),
						it(f);
					var b = f;
					return (
						(b._p = new Promise(function (w, T) {
							(b.onload = w), (b.onerror = T);
						})),
						mt(f, "link", r),
						(t.state.loading |= 4),
						Li(f, a.precedence, e),
						(t.instance = f)
					);
				case "script":
					return (
						(f = Lr(a.src)),
						(s = e.querySelector(Fl(f)))
							? ((t.instance = s), it(s), s)
							: ((r = a),
							  (s = Ft.get(f)) && ((r = y({}, a)), Iu(r, s)),
							  (e = e.ownerDocument || e),
							  (s = e.createElement("script")),
							  it(s),
							  mt(s, "link", r),
							  e.head.appendChild(s),
							  (t.instance = s))
					);
				case "void":
					return null;
				default:
					throw Error(i(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((r = t.instance),
				(t.state.loading |= 4),
				Li(r, a.precedence, e));
		return t.instance;
	}
	function Li(e, t, a) {
		for (
			var r = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				s = r.length ? r[r.length - 1] : null,
				f = s,
				b = 0;
			b < r.length;
			b++
		) {
			var w = r[b];
			if (w.dataset.precedence === t) f = w;
			else if (f !== s) break;
		}
		f
			? f.parentNode.insertBefore(e, f.nextSibling)
			: ((t = a.nodeType === 9 ? a.head : a),
			  t.insertBefore(e, t.firstChild));
	}
	function Zu(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title);
	}
	function Iu(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity);
	}
	var Ui = null;
	function Dv(e, t, a) {
		if (Ui === null) {
			var r = new Map(),
				s = (Ui = new Map());
			s.set(a, r);
		} else (s = Ui), (r = s.get(a)), r || ((r = new Map()), s.set(a, r));
		if (r.has(e)) return r;
		for (
			r.set(e, null), a = a.getElementsByTagName(e), s = 0;
			s < a.length;
			s++
		) {
			var f = a[s];
			if (
				!(
					f[ul] ||
					f[ht] ||
					(e === "link" && f.getAttribute("rel") === "stylesheet")
				) &&
				f.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var b = f.getAttribute(t) || "";
				b = e + b;
				var w = r.get(b);
				w ? w.push(f) : r.set(b, [f]);
			}
		}
		return r;
	}
	function jv(e, t, a) {
		(e = e.ownerDocument || e),
			e.head.insertBefore(
				a,
				t === "title" ? e.querySelector("head > title") : null
			);
	}
	function wE(e, t, a) {
		if (a === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(e = t.disabled),
							typeof t.precedence == "string" && e == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function zv(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
	}
	var Wl = null;
	function EE() {}
	function AE(e, t, a) {
		if (Wl === null) throw Error(i(475));
		var r = Wl;
		if (
			t.type === "stylesheet" &&
			(typeof a.media != "string" ||
				matchMedia(a.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var s = Pr(a.href),
					f = e.querySelector(Il(s));
				if (f) {
					(e = f._p),
						e !== null &&
							typeof e == "object" &&
							typeof e.then == "function" &&
							(r.count++, (r = Hi.bind(r)), e.then(r, r)),
						(t.state.loading |= 4),
						(t.instance = f),
						it(f);
					return;
				}
				(f = e.ownerDocument || e),
					(a = Ov(a)),
					(s = Ft.get(s)) && Zu(a, s),
					(f = f.createElement("link")),
					it(f);
				var b = f;
				(b._p = new Promise(function (w, T) {
					(b.onload = w), (b.onerror = T);
				})),
					mt(f, "link", a),
					(t.instance = f);
			}
			r.stylesheets === null && (r.stylesheets = new Map()),
				r.stylesheets.set(t, e),
				(e = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(r.count++,
					(t = Hi.bind(r)),
					e.addEventListener("load", t),
					e.addEventListener("error", t));
		}
	}
	function CE() {
		if (Wl === null) throw Error(i(475));
		var e = Wl;
		return (
			e.stylesheets && e.count === 0 && Fu(e, e.stylesheets),
			0 < e.count
				? function (t) {
						var a = setTimeout(function () {
							if (
								(e.stylesheets && Fu(e, e.stylesheets),
								e.unsuspend)
							) {
								var r = e.unsuspend;
								(e.unsuspend = null), r();
							}
						}, 6e4);
						return (
							(e.unsuspend = t),
							function () {
								(e.unsuspend = null), clearTimeout(a);
							}
						);
				  }
				: null
		);
	}
	function Hi() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) Fu(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				(this.unsuspend = null), e();
			}
		}
	}
	var ki = null;
	function Fu(e, t) {
		(e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(ki = new Map()),
				t.forEach(RE, e),
				(ki = null),
				Hi.call(e));
	}
	function RE(e, t) {
		if (!(t.state.loading & 4)) {
			var a = ki.get(e);
			if (a) var r = a.get(null);
			else {
				(a = new Map()), ki.set(e, a);
				for (
					var s = e.querySelectorAll(
							"link[data-precedence],style[data-precedence]"
						),
						f = 0;
					f < s.length;
					f++
				) {
					var b = s[f];
					(b.nodeName === "LINK" ||
						b.getAttribute("media") !== "not all") &&
						(a.set(b.dataset.precedence, b), (r = b));
				}
				r && a.set(null, r);
			}
			(s = t.instance),
				(b = s.getAttribute("data-precedence")),
				(f = a.get(b) || r),
				f === r && a.set(null, s),
				a.set(b, s),
				this.count++,
				(r = Hi.bind(this)),
				s.addEventListener("load", r),
				s.addEventListener("error", r),
				f
					? f.parentNode.insertBefore(s, f.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
					  e.insertBefore(s, e.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var Jl = {
		$$typeof: D,
		Provider: null,
		Consumer: null,
		_currentValue: G,
		_currentValue2: G,
		_threadCount: 0,
	};
	function NE(e, t, a, r, s, f, b, w) {
		(this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Ks(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Ks(0)),
			(this.hiddenUpdates = Ks(null)),
			(this.identifierPrefix = r),
			(this.onUncaughtError = s),
			(this.onCaughtError = f),
			(this.onRecoverableError = b),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = w),
			(this.incompleteTransitions = new Map());
	}
	function Pv(e, t, a, r, s, f, b, w, T, B, K, F) {
		return (
			(e = new NE(e, t, a, b, w, T, B, F)),
			(t = 1),
			f === !0 && (t |= 24),
			(f = Dt(3, null, null, t)),
			(e.current = f),
			(f.stateNode = e),
			(t = Dc()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(f.memoizedState = { element: r, isDehydrated: a, cache: t }),
			Lc(f),
			e
		);
	}
	function Lv(e) {
		return e ? ((e = mr), e) : mr;
	}
	function Uv(e, t, a, r, s, f) {
		(s = Lv(s)),
			r.context === null ? (r.context = s) : (r.pendingContext = s),
			(r = Kn(t)),
			(r.payload = { element: a }),
			(f = f === void 0 ? null : f),
			f !== null && (r.callback = f),
			(a = Qn(e, r, t)),
			a !== null && (Ut(a, e, t), Ml(a, e, t));
	}
	function Hv(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var a = e.retryLane;
			e.retryLane = a !== 0 && a < t ? a : t;
		}
	}
	function Wu(e, t) {
		Hv(e, t), (e = e.alternate) && Hv(e, t);
	}
	function kv(e) {
		if (e.tag === 13) {
			var t = dr(e, 67108864);
			t !== null && Ut(t, e, 67108864), Wu(e, 67108864);
		}
	}
	var Bi = !0;
	function TE(e, t, a, r) {
		var s = j.T;
		j.T = null;
		var f = I.p;
		try {
			(I.p = 2), Ju(e, t, a, r);
		} finally {
			(I.p = f), (j.T = s);
		}
	}
	function ME(e, t, a, r) {
		var s = j.T;
		j.T = null;
		var f = I.p;
		try {
			(I.p = 8), Ju(e, t, a, r);
		} finally {
			(I.p = f), (j.T = s);
		}
	}
	function Ju(e, t, a, r) {
		if (Bi) {
			var s = ef(r);
			if (s === null) Bu(e, t, r, Gi, a), Gv(e, r);
			else if (_E(s, e, t, a, r)) r.stopPropagation();
			else if ((Gv(e, r), t & 4 && -1 < OE.indexOf(e))) {
				for (; s !== null; ) {
					var f = er(s);
					if (f !== null)
						switch (f.tag) {
							case 3:
								if (
									((f = f.stateNode),
									f.current.memoizedState.isDehydrated)
								) {
									var b = Ea(f.pendingLanes);
									if (b !== 0) {
										var w = f;
										for (
											w.pendingLanes |= 2,
												w.entangledLanes |= 2;
											b;

										) {
											var T = 1 << (31 - Ot(b));
											(w.entanglements[1] |= T),
												(b &= ~T);
										}
										mn(f),
											(Pe & 6) === 0 &&
												((Ai = et() + 500), Vl(0));
									}
								}
								break;
							case 13:
								(w = dr(f, 2)),
									w !== null && Ut(w, f, 2),
									Ri(),
									Wu(f, 2);
						}
					if (
						((f = ef(r)), f === null && Bu(e, t, r, Gi, a), f === s)
					)
						break;
					s = f;
				}
				s !== null && r.stopPropagation();
			} else Bu(e, t, r, null, a);
		}
	}
	function ef(e) {
		return (e = lc(e)), tf(e);
	}
	var Gi = null;
	function tf(e) {
		if (((Gi = null), (e = Ja(e)), e !== null)) {
			var t = u(e);
			if (t === null) e = null;
			else {
				var a = t.tag;
				if (a === 13) {
					if (((e = d(t)), e !== null)) return e;
					e = null;
				} else if (a === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return (Gi = e), null;
	}
	function Bv(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Ze()) {
					case tt:
						return 2;
					case _o:
						return 8;
					case sn:
					case Do:
						return 32;
					case jo:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var nf = !1,
		ia = null,
		sa = null,
		ca = null,
		eo = new Map(),
		to = new Map(),
		ua = [],
		OE =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" "
			);
	function Gv(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				ia = null;
				break;
			case "dragenter":
			case "dragleave":
				sa = null;
				break;
			case "mouseover":
			case "mouseout":
				ca = null;
				break;
			case "pointerover":
			case "pointerout":
				eo.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				to.delete(t.pointerId);
		}
	}
	function no(e, t, a, r, s, f) {
		return e === null || e.nativeEvent !== f
			? ((e = {
					blockedOn: t,
					domEventName: a,
					eventSystemFlags: r,
					nativeEvent: f,
					targetContainers: [s],
			  }),
			  t !== null && ((t = er(t)), t !== null && kv(t)),
			  e)
			: ((e.eventSystemFlags |= r),
			  (t = e.targetContainers),
			  s !== null && t.indexOf(s) === -1 && t.push(s),
			  e);
	}
	function _E(e, t, a, r, s) {
		switch (t) {
			case "focusin":
				return (ia = no(ia, e, t, a, r, s)), !0;
			case "dragenter":
				return (sa = no(sa, e, t, a, r, s)), !0;
			case "mouseover":
				return (ca = no(ca, e, t, a, r, s)), !0;
			case "pointerover":
				var f = s.pointerId;
				return eo.set(f, no(eo.get(f) || null, e, t, a, r, s)), !0;
			case "gotpointercapture":
				return (
					(f = s.pointerId),
					to.set(f, no(to.get(f) || null, e, t, a, r, s)),
					!0
				);
		}
		return !1;
	}
	function $v(e) {
		var t = Ja(e.target);
		if (t !== null) {
			var a = u(t);
			if (a !== null) {
				if (((t = a.tag), t === 13)) {
					if (((t = d(a)), t !== null)) {
						(e.blockedOn = t),
							AS(e.priority, function () {
								if (a.tag === 13) {
									var r = Lt();
									r = Qs(r);
									var s = dr(a, r);
									s !== null && Ut(s, a, r), Wu(a, r);
								}
							});
						return;
					}
				} else if (
					t === 3 &&
					a.stateNode.current.memoizedState.isDehydrated
				) {
					e.blockedOn =
						a.tag === 3 ? a.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function $i(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var a = ef(e.nativeEvent);
			if (a === null) {
				a = e.nativeEvent;
				var r = new a.constructor(a.type, a);
				(rc = r), a.target.dispatchEvent(r), (rc = null);
			} else
				return (t = er(a)), t !== null && kv(t), (e.blockedOn = a), !1;
			t.shift();
		}
		return !0;
	}
	function Yv(e, t, a) {
		$i(e) && a.delete(t);
	}
	function DE() {
		(nf = !1),
			ia !== null && $i(ia) && (ia = null),
			sa !== null && $i(sa) && (sa = null),
			ca !== null && $i(ca) && (ca = null),
			eo.forEach(Yv),
			to.forEach(Yv);
	}
	function Yi(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			nf ||
				((nf = !0),
				n.unstable_scheduleCallback(n.unstable_NormalPriority, DE)));
	}
	var qi = null;
	function qv(e) {
		qi !== e &&
			((qi = e),
			n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
				qi === e && (qi = null);
				for (var t = 0; t < e.length; t += 3) {
					var a = e[t],
						r = e[t + 1],
						s = e[t + 2];
					if (typeof r != "function") {
						if (tf(r || a) === null) continue;
						break;
					}
					var f = er(a);
					f !== null &&
						(e.splice(t, 3),
						(t -= 3),
						tu(
							f,
							{
								pending: !0,
								data: s,
								method: a.method,
								action: r,
							},
							r,
							s
						));
				}
			}));
	}
	function ao(e) {
		function t(T) {
			return Yi(T, e);
		}
		ia !== null && Yi(ia, e),
			sa !== null && Yi(sa, e),
			ca !== null && Yi(ca, e),
			eo.forEach(t),
			to.forEach(t);
		for (var a = 0; a < ua.length; a++) {
			var r = ua[a];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < ua.length && ((a = ua[0]), a.blockedOn === null); )
			$v(a), a.blockedOn === null && ua.shift();
		if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
			for (r = 0; r < a.length; r += 3) {
				var s = a[r],
					f = a[r + 1],
					b = s[bt] || null;
				if (typeof f == "function") b || qv(a);
				else if (b) {
					var w = null;
					if (f && f.hasAttribute("formAction")) {
						if (((s = f), (b = f[bt] || null))) w = b.formAction;
						else if (tf(s) !== null) continue;
					} else w = b.action;
					typeof w == "function"
						? (a[r + 1] = w)
						: (a.splice(r, 3), (r -= 3)),
						qv(a);
				}
			}
	}
	function af(e) {
		this._internalRoot = e;
	}
	(Xi.prototype.render = af.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(i(409));
			var a = t.current,
				r = Lt();
			Uv(a, r, e, t, null, null);
		}),
		(Xi.prototype.unmount = af.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					Uv(e.current, 2, null, e, null, null), Ri(), (t[Wa] = null);
				}
			});
	function Xi(e) {
		this._internalRoot = e;
	}
	Xi.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = im();
			e = { blockedOn: null, target: e, priority: t };
			for (
				var a = 0;
				a < ua.length && t !== 0 && t < ua[a].priority;
				a++
			);
			ua.splice(a, 0, e), a === 0 && $v(e);
		}
	};
	var Xv = l.version;
	if (Xv !== "19.1.0") throw Error(i(527, Xv, "19.1.0"));
	I.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == "function"
				? Error(i(188))
				: ((e = Object.keys(e).join(",")), Error(i(268, e)));
		return (
			(e = g(t)),
			(e = e !== null ? p(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		);
	};
	var jE = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: j,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Vi.isDisabled && Vi.supportsFiber)
			try {
				(il = Vi.inject(jE)), (Mt = Vi);
			} catch {}
	}
	return (
		(lo.createRoot = function (e, t) {
			if (!c(e)) throw Error(i(299));
			var a = !1,
				r = "",
				s = ip,
				f = sp,
				b = cp,
				w = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (a = !0),
					t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
					t.onCaughtError !== void 0 && (f = t.onCaughtError),
					t.onRecoverableError !== void 0 &&
						(b = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(w = t.unstable_transitionCallbacks)),
				(t = Pv(e, 1, !1, null, null, a, r, s, f, b, w, null)),
				(e[Wa] = t.current),
				ku(e),
				new af(t)
			);
		}),
		(lo.hydrateRoot = function (e, t, a) {
			if (!c(e)) throw Error(i(299));
			var r = !1,
				s = "",
				f = ip,
				b = sp,
				w = cp,
				T = null,
				B = null;
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (r = !0),
					a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
					a.onCaughtError !== void 0 && (b = a.onCaughtError),
					a.onRecoverableError !== void 0 &&
						(w = a.onRecoverableError),
					a.unstable_transitionCallbacks !== void 0 &&
						(T = a.unstable_transitionCallbacks),
					a.formState !== void 0 && (B = a.formState)),
				(t = Pv(e, 1, !0, t, a ?? null, r, s, f, b, w, T, B)),
				(t.context = Lv(null)),
				(a = t.current),
				(r = Lt()),
				(r = Qs(r)),
				(s = Kn(r)),
				(s.callback = null),
				Qn(a, s, r),
				(a = r),
				(t.current.lanes = a),
				cl(t, a),
				mn(t),
				(e[Wa] = t.current),
				ku(e),
				new Xi(t)
			);
		}),
		(lo.version = "19.1.0"),
		lo
	);
}
var tg;
function YE() {
	if (tg) return of.exports;
	tg = 1;
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (l) {
				console.error(l);
			}
	}
	return n(), (of.exports = $E()), of.exports;
}
var qE = YE();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XE = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
	VE = (n) =>
		n.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, i) =>
			i ? i.toUpperCase() : o.toLowerCase()
		),
	ng = (n) => {
		const l = VE(n);
		return l.charAt(0).toUpperCase() + l.slice(1);
	},
	ry = (...n) =>
		n
			.filter((l, o, i) => !!l && l.trim() !== "" && i.indexOf(l) === o)
			.join(" ")
			.trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var KE = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QE = v.forwardRef(
	(
		{
			color: n = "currentColor",
			size: l = 24,
			strokeWidth: o = 2,
			absoluteStrokeWidth: i,
			className: c = "",
			children: u,
			iconNode: d,
			...m
		},
		g
	) =>
		v.createElement(
			"svg",
			{
				ref: g,
				...KE,
				width: l,
				height: l,
				stroke: n,
				strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
				className: ry("lucide", c),
				...m,
			},
			[
				...d.map(([p, y]) => v.createElement(p, y)),
				...(Array.isArray(u) ? u : [u]),
			]
		)
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xo = (n, l) => {
	const o = v.forwardRef(({ className: i, ...c }, u) =>
		v.createElement(QE, {
			ref: u,
			iconNode: l,
			className: ry(`lucide-${XE(ng(n))}`, `lucide-${n}`, i),
			...c,
		})
	);
	return (o.displayName = ng(n)), o;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZE = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
	Ki = xo("check", ZE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IE = [
		[
			"rect",
			{
				width: "14",
				height: "14",
				x: "8",
				y: "8",
				rx: "2",
				ry: "2",
				key: "17jyea",
			},
		],
		[
			"path",
			{
				d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
				key: "zix9uf",
			},
		],
	],
	Qi = xo("copy", IE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FE = [
		["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
		["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
		["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
		["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
		["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
		["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
	],
	WE = xo("grip-vertical", FE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JE = [
		[
			"path",
			{
				d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
				key: "1xuzuj",
			},
		],
		["path", { d: "M9 10h6", key: "9gxzsh" }],
		["path", { d: "M12 7v6", key: "lw1j43" }],
		["path", { d: "M9 17h6", key: "r8uit2" }],
	],
	e1 = xo("message-square-diff", JE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t1 = [
		[
			"path",
			{
				d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
				key: "117uat",
			},
		],
		["path", { d: "M6 12h16", key: "s4cdu5" }],
	],
	n1 = xo("send-horizontal", t1),
	{
		createElement: Wr,
		createContext: a1,
		forwardRef: ly,
		useCallback: At,
		useContext: oy,
		useEffect: Xa,
		useImperativeHandle: iy,
		useLayoutEffect: r1,
		useMemo: l1,
		useRef: Ct,
		useState: Xr,
	} = bo,
	ag = bo[`useId${Math.random()}`.slice(0, 5)],
	o1 = r1,
	Ms = a1(null);
Ms.displayName = "PanelGroupContext";
const Va = o1,
	i1 = typeof ag == "function" ? ag : () => null;
let s1 = 0;
function Qf(n = null) {
	const l = i1(),
		o = Ct(n || l || null);
	return o.current === null && (o.current = "" + s1++), n ?? o.current;
}
function sy({
	children: n,
	className: l = "",
	collapsedSize: o,
	collapsible: i,
	defaultSize: c,
	forwardedRef: u,
	id: d,
	maxSize: m,
	minSize: g,
	onCollapse: p,
	onExpand: y,
	onResize: x,
	order: S,
	style: E,
	tagName: C = "div",
	...A
}) {
	const R = oy(Ms);
	if (R === null)
		throw Error(
			"Panel components must be rendered within a PanelGroup container"
		);
	const {
			collapsePanel: M,
			expandPanel: k,
			getPanelSize: D,
			getPanelStyle: L,
			groupId: _,
			isPanelCollapsed: q,
			reevaluatePanelConstraints: P,
			registerPanel: X,
			resizePanel: ne,
			unregisterPanel: le,
		} = R,
		de = Qf(d),
		oe = Ct({
			callbacks: { onCollapse: p, onExpand: y, onResize: x },
			constraints: {
				collapsedSize: o,
				collapsible: i,
				defaultSize: c,
				maxSize: m,
				minSize: g,
			},
			id: de,
			idIsFromProps: d !== void 0,
			order: S,
		});
	Ct({ didLogMissingDefaultSizeWarning: !1 }),
		Va(() => {
			const { callbacks: me, constraints: fe } = oe.current,
				j = { ...fe };
			(oe.current.id = de),
				(oe.current.idIsFromProps = d !== void 0),
				(oe.current.order = S),
				(me.onCollapse = p),
				(me.onExpand = y),
				(me.onResize = x),
				(fe.collapsedSize = o),
				(fe.collapsible = i),
				(fe.defaultSize = c),
				(fe.maxSize = m),
				(fe.minSize = g),
				(j.collapsedSize !== fe.collapsedSize ||
					j.collapsible !== fe.collapsible ||
					j.maxSize !== fe.maxSize ||
					j.minSize !== fe.minSize) &&
					P(oe.current, j);
		}),
		Va(() => {
			const me = oe.current;
			return (
				X(me),
				() => {
					le(me);
				}
			);
		}, [S, de, X, le]),
		iy(
			u,
			() => ({
				collapse: () => {
					M(oe.current);
				},
				expand: (me) => {
					k(oe.current, me);
				},
				getId() {
					return de;
				},
				getSize() {
					return D(oe.current);
				},
				isCollapsed() {
					return q(oe.current);
				},
				isExpanded() {
					return !q(oe.current);
				},
				resize: (me) => {
					ne(oe.current, me);
				},
			}),
			[M, k, D, q, de, ne]
		);
	const ve = L(oe.current, c);
	return Wr(C, {
		...A,
		children: n,
		className: l,
		id: d,
		style: { ...ve, ...E },
		"data-panel": "",
		"data-panel-collapsible": i || void 0,
		"data-panel-group-id": _,
		"data-panel-id": de,
		"data-panel-size": parseFloat("" + ve.flexGrow).toFixed(1),
	});
}
const cy = ly((n, l) => Wr(sy, { ...n, forwardedRef: l }));
sy.displayName = "Panel";
cy.displayName = "forwardRef(Panel)";
let Of = null,
	Ya = null;
function c1(n, l) {
	if (l) {
		const o = (l & hy) !== 0,
			i = (l & py) !== 0,
			c = (l & vy) !== 0,
			u = (l & gy) !== 0;
		if (o) return c ? "se-resize" : u ? "ne-resize" : "e-resize";
		if (i) return c ? "sw-resize" : u ? "nw-resize" : "w-resize";
		if (c) return "s-resize";
		if (u) return "n-resize";
	}
	switch (n) {
		case "horizontal":
			return "ew-resize";
		case "intersection":
			return "move";
		case "vertical":
			return "ns-resize";
	}
}
function u1() {
	Ya !== null && (document.head.removeChild(Ya), (Of = null), (Ya = null));
}
function ff(n, l) {
	const o = c1(n, l);
	Of !== o &&
		((Of = o),
		Ya === null &&
			((Ya = document.createElement("style")),
			document.head.appendChild(Ya)),
		(Ya.innerHTML = `*{cursor: ${o}!important;}`));
}
function uy(n) {
	return n.type === "keydown";
}
function fy(n) {
	return n.type.startsWith("pointer");
}
function dy(n) {
	return n.type.startsWith("mouse");
}
function Os(n) {
	if (fy(n)) {
		if (n.isPrimary) return { x: n.clientX, y: n.clientY };
	} else if (dy(n)) return { x: n.clientX, y: n.clientY };
	return { x: 1 / 0, y: 1 / 0 };
}
function f1() {
	if (typeof matchMedia == "function")
		return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function d1(n, l, o) {
	return (
		n.x < l.x + l.width &&
		n.x + n.width > l.x &&
		n.y < l.y + l.height &&
		n.y + n.height > l.y
	);
}
function m1(n, l) {
	if (n === l) throw new Error("Cannot compare node with itself");
	const o = { a: og(n), b: og(l) };
	let i;
	for (; o.a.at(-1) === o.b.at(-1); )
		(n = o.a.pop()), (l = o.b.pop()), (i = n);
	Ae(
		i,
		"Stacking order can only be calculated for elements with a common ancestor"
	);
	const c = { a: lg(rg(o.a)), b: lg(rg(o.b)) };
	if (c.a === c.b) {
		const u = i.childNodes,
			d = { a: o.a.at(-1), b: o.b.at(-1) };
		let m = u.length;
		for (; m--; ) {
			const g = u[m];
			if (g === d.a) return 1;
			if (g === d.b) return -1;
		}
	}
	return Math.sign(c.a - c.b);
}
const h1 =
	/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function p1(n) {
	var l;
	const o = getComputedStyle(
		(l = my(n)) !== null && l !== void 0 ? l : n
	).display;
	return o === "flex" || o === "inline-flex";
}
function v1(n) {
	const l = getComputedStyle(n);
	return !!(
		l.position === "fixed" ||
		(l.zIndex !== "auto" && (l.position !== "static" || p1(n))) ||
		+l.opacity < 1 ||
		("transform" in l && l.transform !== "none") ||
		("webkitTransform" in l && l.webkitTransform !== "none") ||
		("mixBlendMode" in l && l.mixBlendMode !== "normal") ||
		("filter" in l && l.filter !== "none") ||
		("webkitFilter" in l && l.webkitFilter !== "none") ||
		("isolation" in l && l.isolation === "isolate") ||
		h1.test(l.willChange) ||
		l.webkitOverflowScrolling === "touch"
	);
}
function rg(n) {
	let l = n.length;
	for (; l--; ) {
		const o = n[l];
		if ((Ae(o, "Missing node"), v1(o))) return o;
	}
	return null;
}
function lg(n) {
	return (n && Number(getComputedStyle(n).zIndex)) || 0;
}
function og(n) {
	const l = [];
	for (; n; ) l.push(n), (n = my(n));
	return l;
}
function my(n) {
	const { parentNode: l } = n;
	return l && l instanceof ShadowRoot ? l.host : l;
}
const hy = 1,
	py = 2,
	vy = 4,
	gy = 8,
	g1 = f1() === "coarse";
let an = [],
	Vr = !1,
	ga = new Map(),
	_s = new Map();
const mo = new Set();
function y1(n, l, o, i, c) {
	var u;
	const { ownerDocument: d } = l,
		m = {
			direction: o,
			element: l,
			hitAreaMargins: i,
			setResizeHandlerState: c,
		},
		g = (u = ga.get(d)) !== null && u !== void 0 ? u : 0;
	return (
		ga.set(d, g + 1),
		mo.add(m),
		ps(),
		function () {
			var y;
			_s.delete(n), mo.delete(m);
			const x = (y = ga.get(d)) !== null && y !== void 0 ? y : 1;
			if (
				(ga.set(d, x - 1),
				ps(),
				x === 1 && ga.delete(d),
				an.includes(m))
			) {
				const S = an.indexOf(m);
				S >= 0 && an.splice(S, 1), If(), c("up", !0, null);
			}
		}
	);
}
function ig(n) {
	const { target: l } = n,
		{ x: o, y: i } = Os(n);
	(Vr = !0),
		Zf({ target: l, x: o, y: i }),
		ps(),
		an.length > 0 &&
			(vs("down", n), n.preventDefault(), n.stopPropagation());
}
function oo(n) {
	const { x: l, y: o } = Os(n);
	if ((Vr && n.buttons === 0 && ((Vr = !1), vs("up", n)), !Vr)) {
		const { target: i } = n;
		Zf({ target: i, x: l, y: o });
	}
	vs("move", n), If(), an.length > 0 && n.preventDefault();
}
function Ur(n) {
	const { target: l } = n,
		{ x: o, y: i } = Os(n);
	_s.clear(),
		(Vr = !1),
		an.length > 0 && n.preventDefault(),
		vs("up", n),
		Zf({ target: l, x: o, y: i }),
		If(),
		ps();
}
function Zf({ target: n, x: l, y: o }) {
	an.splice(0);
	let i = null;
	(n instanceof HTMLElement || n instanceof SVGElement) && (i = n),
		mo.forEach((c) => {
			const { element: u, hitAreaMargins: d } = c,
				m = u.getBoundingClientRect(),
				{ bottom: g, left: p, right: y, top: x } = m,
				S = g1 ? d.coarse : d.fine;
			if (l >= p - S && l <= y + S && o >= x - S && o <= g + S) {
				if (
					i !== null &&
					document.contains(i) &&
					u !== i &&
					!u.contains(i) &&
					!i.contains(u) &&
					m1(i, u) > 0
				) {
					let C = i,
						A = !1;
					for (; C && !C.contains(u); ) {
						if (d1(C.getBoundingClientRect(), m)) {
							A = !0;
							break;
						}
						C = C.parentElement;
					}
					if (A) return;
				}
				an.push(c);
			}
		});
}
function df(n, l) {
	_s.set(n, l);
}
function If() {
	let n = !1,
		l = !1;
	an.forEach((i) => {
		const { direction: c } = i;
		c === "horizontal" ? (n = !0) : (l = !0);
	});
	let o = 0;
	_s.forEach((i) => {
		o |= i;
	}),
		n && l
			? ff("intersection", o)
			: n
			? ff("horizontal", o)
			: l
			? ff("vertical", o)
			: u1();
}
function ps() {
	ga.forEach((n, l) => {
		const { body: o } = l;
		o.removeEventListener("contextmenu", Ur),
			o.removeEventListener("pointerdown", ig),
			o.removeEventListener("pointerleave", oo),
			o.removeEventListener("pointermove", oo);
	}),
		window.removeEventListener("pointerup", Ur),
		window.removeEventListener("pointercancel", Ur),
		mo.size > 0 &&
			(Vr
				? (an.length > 0 &&
						ga.forEach((n, l) => {
							const { body: o } = l;
							n > 0 &&
								(o.addEventListener("contextmenu", Ur),
								o.addEventListener("pointerleave", oo),
								o.addEventListener("pointermove", oo));
						}),
				  window.addEventListener("pointerup", Ur),
				  window.addEventListener("pointercancel", Ur))
				: ga.forEach((n, l) => {
						const { body: o } = l;
						n > 0 &&
							(o.addEventListener("pointerdown", ig, {
								capture: !0,
							}),
							o.addEventListener("pointermove", oo));
				  }));
}
function vs(n, l) {
	mo.forEach((o) => {
		const { setResizeHandlerState: i } = o,
			c = an.includes(o);
		i(n, c, l);
	});
}
function b1() {
	const [n, l] = Xr(0);
	return At(() => l((o) => o + 1), []);
}
function Ae(n, l) {
	if (!n) throw (console.error(l), Error(l));
}
const Ff = 10;
function Ka(n, l, o = Ff) {
	return n.toFixed(o) === l.toFixed(o) ? 0 : n > l ? 1 : -1;
}
function Un(n, l, o = Ff) {
	return Ka(n, l, o) === 0;
}
function Ht(n, l, o) {
	return Ka(n, l, o) === 0;
}
function x1(n, l, o) {
	if (n.length !== l.length) return !1;
	for (let i = 0; i < n.length; i++) {
		const c = n[i],
			u = l[i];
		if (!Ht(c, u, o)) return !1;
	}
	return !0;
}
function qr({ panelConstraints: n, panelIndex: l, size: o }) {
	const i = n[l];
	Ae(i != null, `Panel constraints not found for index ${l}`);
	let {
		collapsedSize: c = 0,
		collapsible: u,
		maxSize: d = 100,
		minSize: m = 0,
	} = i;
	if (Ka(o, m) < 0)
		if (u) {
			const g = (c + m) / 2;
			Ka(o, g) < 0 ? (o = c) : (o = m);
		} else o = m;
	return (o = Math.min(d, o)), (o = parseFloat(o.toFixed(Ff))), o;
}
function so({
	delta: n,
	initialLayout: l,
	panelConstraints: o,
	pivotIndices: i,
	prevLayout: c,
	trigger: u,
}) {
	if (Ht(n, 0)) return l;
	const d = [...l],
		[m, g] = i;
	Ae(m != null, "Invalid first pivot index"),
		Ae(g != null, "Invalid second pivot index");
	let p = 0;
	if (u === "keyboard") {
		{
			const x = n < 0 ? g : m,
				S = o[x];
			Ae(S, `Panel constraints not found for index ${x}`);
			const { collapsedSize: E = 0, collapsible: C, minSize: A = 0 } = S;
			if (C) {
				const R = l[x];
				if (
					(Ae(
						R != null,
						`Previous layout not found for panel index ${x}`
					),
					Ht(R, E))
				) {
					const M = A - R;
					Ka(M, Math.abs(n)) > 0 && (n = n < 0 ? 0 - M : M);
				}
			}
		}
		{
			const x = n < 0 ? m : g,
				S = o[x];
			Ae(S, `No panel constraints found for index ${x}`);
			const { collapsedSize: E = 0, collapsible: C, minSize: A = 0 } = S;
			if (C) {
				const R = l[x];
				if (
					(Ae(
						R != null,
						`Previous layout not found for panel index ${x}`
					),
					Ht(R, A))
				) {
					const M = R - E;
					Ka(M, Math.abs(n)) > 0 && (n = n < 0 ? 0 - M : M);
				}
			}
		}
	}
	{
		const x = n < 0 ? 1 : -1;
		let S = n < 0 ? g : m,
			E = 0;
		for (;;) {
			const A = l[S];
			Ae(A != null, `Previous layout not found for panel index ${S}`);
			const M = qr({ panelConstraints: o, panelIndex: S, size: 100 }) - A;
			if (((E += M), (S += x), S < 0 || S >= o.length)) break;
		}
		const C = Math.min(Math.abs(n), Math.abs(E));
		n = n < 0 ? 0 - C : C;
	}
	{
		let S = n < 0 ? m : g;
		for (; S >= 0 && S < o.length; ) {
			const E = Math.abs(n) - Math.abs(p),
				C = l[S];
			Ae(C != null, `Previous layout not found for panel index ${S}`);
			const A = C - E,
				R = qr({ panelConstraints: o, panelIndex: S, size: A });
			if (
				!Ht(C, R) &&
				((p += C - R),
				(d[S] = R),
				p
					.toPrecision(3)
					.localeCompare(Math.abs(n).toPrecision(3), void 0, {
						numeric: !0,
					}) >= 0)
			)
				break;
			n < 0 ? S-- : S++;
		}
	}
	if (x1(c, d)) return c;
	{
		const x = n < 0 ? g : m,
			S = l[x];
		Ae(S != null, `Previous layout not found for panel index ${x}`);
		const E = S + p,
			C = qr({ panelConstraints: o, panelIndex: x, size: E });
		if (((d[x] = C), !Ht(C, E))) {
			let A = E - C,
				M = n < 0 ? g : m;
			for (; M >= 0 && M < o.length; ) {
				const k = d[M];
				Ae(k != null, `Previous layout not found for panel index ${M}`);
				const D = k + A,
					L = qr({ panelConstraints: o, panelIndex: M, size: D });
				if ((Ht(k, L) || ((A -= L - k), (d[M] = L)), Ht(A, 0))) break;
				n > 0 ? M-- : M++;
			}
		}
	}
	const y = d.reduce((x, S) => S + x, 0);
	return Ht(y, 100) ? d : c;
}
function S1({ layout: n, panelsArray: l, pivotIndices: o }) {
	let i = 0,
		c = 100,
		u = 0,
		d = 0;
	const m = o[0];
	Ae(m != null, "No pivot index found"),
		l.forEach((x, S) => {
			const { constraints: E } = x,
				{ maxSize: C = 100, minSize: A = 0 } = E;
			S === m ? ((i = A), (c = C)) : ((u += A), (d += C));
		});
	const g = Math.min(c, 100 - u),
		p = Math.max(i, 100 - d),
		y = n[m];
	return { valueMax: g, valueMin: p, valueNow: y };
}
function ho(n, l = document) {
	return Array.from(
		l.querySelectorAll(
			`[data-panel-resize-handle-id][data-panel-group-id="${n}"]`
		)
	);
}
function yy(n, l, o = document) {
	const c = ho(n, o).findIndex(
		(u) => u.getAttribute("data-panel-resize-handle-id") === l
	);
	return c ?? null;
}
function by(n, l, o) {
	const i = yy(n, l, o);
	return i != null ? [i, i + 1] : [-1, -1];
}
function xy(n, l = document) {
	var o;
	if (
		l instanceof HTMLElement &&
		(l == null || (o = l.dataset) === null || o === void 0
			? void 0
			: o.panelGroupId) == n
	)
		return l;
	const i = l.querySelector(`[data-panel-group][data-panel-group-id="${n}"]`);
	return i || null;
}
function Ds(n, l = document) {
	const o = l.querySelector(`[data-panel-resize-handle-id="${n}"]`);
	return o || null;
}
function w1(n, l, o, i = document) {
	var c, u, d, m;
	const g = Ds(l, i),
		p = ho(n, i),
		y = g ? p.indexOf(g) : -1,
		x =
			(c = (u = o[y]) === null || u === void 0 ? void 0 : u.id) !==
				null && c !== void 0
				? c
				: null,
		S =
			(d = (m = o[y + 1]) === null || m === void 0 ? void 0 : m.id) !==
				null && d !== void 0
				? d
				: null;
	return [x, S];
}
function E1({
	committedValuesRef: n,
	eagerValuesRef: l,
	groupId: o,
	layout: i,
	panelDataArray: c,
	panelGroupElement: u,
	setLayout: d,
}) {
	Ct({ didWarnAboutMissingResizeHandle: !1 }),
		Va(() => {
			if (!u) return;
			const m = ho(o, u);
			for (let g = 0; g < c.length - 1; g++) {
				const {
						valueMax: p,
						valueMin: y,
						valueNow: x,
					} = S1({
						layout: i,
						panelsArray: c,
						pivotIndices: [g, g + 1],
					}),
					S = m[g];
				if (S != null) {
					const E = c[g];
					Ae(E, `No panel data found for index "${g}"`),
						S.setAttribute("aria-controls", E.id),
						S.setAttribute("aria-valuemax", "" + Math.round(p)),
						S.setAttribute("aria-valuemin", "" + Math.round(y)),
						S.setAttribute(
							"aria-valuenow",
							x != null ? "" + Math.round(x) : ""
						);
				}
			}
			return () => {
				m.forEach((g, p) => {
					g.removeAttribute("aria-controls"),
						g.removeAttribute("aria-valuemax"),
						g.removeAttribute("aria-valuemin"),
						g.removeAttribute("aria-valuenow");
				});
			};
		}, [o, i, c, u]),
		Xa(() => {
			if (!u) return;
			const m = l.current;
			Ae(m, "Eager values not found");
			const { panelDataArray: g } = m,
				p = xy(o, u);
			Ae(p != null, `No group found for id "${o}"`);
			const y = ho(o, u);
			Ae(y, `No resize handles found for group id "${o}"`);
			const x = y.map((S) => {
				const E = S.getAttribute("data-panel-resize-handle-id");
				Ae(E, "Resize handle element has no handle id attribute");
				const [C, A] = w1(o, E, g, u);
				if (C == null || A == null) return () => {};
				const R = (M) => {
					if (!M.defaultPrevented)
						switch (M.key) {
							case "Enter": {
								M.preventDefault();
								const k = g.findIndex((D) => D.id === C);
								if (k >= 0) {
									const D = g[k];
									Ae(D, `No panel data found for index ${k}`);
									const L = i[k],
										{
											collapsedSize: _ = 0,
											collapsible: q,
											minSize: P = 0,
										} = D.constraints;
									if (L != null && q) {
										const X = so({
											delta: Ht(L, _) ? P - _ : _ - L,
											initialLayout: i,
											panelConstraints: g.map(
												(ne) => ne.constraints
											),
											pivotIndices: by(o, E, u),
											prevLayout: i,
											trigger: "keyboard",
										});
										i !== X && d(X);
									}
								}
								break;
							}
						}
				};
				return (
					S.addEventListener("keydown", R),
					() => {
						S.removeEventListener("keydown", R);
					}
				);
			});
			return () => {
				x.forEach((S) => S());
			};
		}, [u, n, l, o, i, c, d]);
}
function sg(n, l) {
	if (n.length !== l.length) return !1;
	for (let o = 0; o < n.length; o++) if (n[o] !== l[o]) return !1;
	return !0;
}
function Sy(n, l) {
	const o = n === "horizontal",
		{ x: i, y: c } = Os(l);
	return o ? i : c;
}
function A1(n, l, o, i, c) {
	const u = o === "horizontal",
		d = Ds(l, c);
	Ae(d, `No resize handle element found for id "${l}"`);
	const m = d.getAttribute("data-panel-group-id");
	Ae(m, "Resize handle element has no group id attribute");
	let { initialCursorPosition: g } = i;
	const p = Sy(o, n),
		y = xy(m, c);
	Ae(y, `No group element found for id "${m}"`);
	const x = y.getBoundingClientRect(),
		S = u ? x.width : x.height;
	return ((p - g) / S) * 100;
}
function C1(n, l, o, i, c, u) {
	if (uy(n)) {
		const d = o === "horizontal";
		let m = 0;
		n.shiftKey ? (m = 100) : c != null ? (m = c) : (m = 10);
		let g = 0;
		switch (n.key) {
			case "ArrowDown":
				g = d ? 0 : m;
				break;
			case "ArrowLeft":
				g = d ? -m : 0;
				break;
			case "ArrowRight":
				g = d ? m : 0;
				break;
			case "ArrowUp":
				g = d ? 0 : -m;
				break;
			case "End":
				g = 100;
				break;
			case "Home":
				g = -100;
				break;
		}
		return g;
	} else return i == null ? 0 : A1(n, l, o, i, u);
}
function R1({ panelDataArray: n }) {
	const l = Array(n.length),
		o = n.map((u) => u.constraints);
	let i = 0,
		c = 100;
	for (let u = 0; u < n.length; u++) {
		const d = o[u];
		Ae(d, `Panel constraints not found for index ${u}`);
		const { defaultSize: m } = d;
		m != null && (i++, (l[u] = m), (c -= m));
	}
	for (let u = 0; u < n.length; u++) {
		const d = o[u];
		Ae(d, `Panel constraints not found for index ${u}`);
		const { defaultSize: m } = d;
		if (m != null) continue;
		const g = n.length - i,
			p = c / g;
		i++, (l[u] = p), (c -= p);
	}
	return l;
}
function Hr(n, l, o) {
	l.forEach((i, c) => {
		const u = n[c];
		Ae(u, `Panel data not found for index ${c}`);
		const { callbacks: d, constraints: m, id: g } = u,
			{ collapsedSize: p = 0, collapsible: y } = m,
			x = o[g];
		if (x == null || i !== x) {
			o[g] = i;
			const { onCollapse: S, onExpand: E, onResize: C } = d;
			C && C(i, x),
				y &&
					(S || E) &&
					(E && (x == null || Un(x, p)) && !Un(i, p) && E(),
					S && (x == null || !Un(x, p)) && Un(i, p) && S());
		}
	});
}
function Zi(n, l) {
	if (n.length !== l.length) return !1;
	for (let o = 0; o < n.length; o++) if (n[o] != l[o]) return !1;
	return !0;
}
function N1({
	defaultSize: n,
	dragState: l,
	layout: o,
	panelData: i,
	panelIndex: c,
	precision: u = 3,
}) {
	const d = o[c];
	let m;
	return (
		d == null
			? (m = n != null ? n.toPrecision(u) : "1")
			: i.length === 1
			? (m = "1")
			: (m = d.toPrecision(u)),
		{
			flexBasis: 0,
			flexGrow: m,
			flexShrink: 1,
			overflow: "hidden",
			pointerEvents: l !== null ? "none" : void 0,
		}
	);
}
function T1(n, l = 10) {
	let o = null;
	return (...c) => {
		o !== null && clearTimeout(o),
			(o = setTimeout(() => {
				n(...c);
			}, l));
	};
}
function cg(n) {
	try {
		if (typeof localStorage < "u")
			(n.getItem = (l) => localStorage.getItem(l)),
				(n.setItem = (l, o) => {
					localStorage.setItem(l, o);
				});
		else throw new Error("localStorage not supported in this environment");
	} catch (l) {
		console.error(l), (n.getItem = () => null), (n.setItem = () => {});
	}
}
function wy(n) {
	return `react-resizable-panels:${n}`;
}
function Ey(n) {
	return n
		.map((l) => {
			const { constraints: o, id: i, idIsFromProps: c, order: u } = l;
			return c ? i : u ? `${u}:${JSON.stringify(o)}` : JSON.stringify(o);
		})
		.sort((l, o) => l.localeCompare(o))
		.join(",");
}
function Ay(n, l) {
	try {
		const o = wy(n),
			i = l.getItem(o);
		if (i) {
			const c = JSON.parse(i);
			if (typeof c == "object" && c != null) return c;
		}
	} catch {}
	return null;
}
function M1(n, l, o) {
	var i, c;
	const u = (i = Ay(n, o)) !== null && i !== void 0 ? i : {},
		d = Ey(l);
	return (c = u[d]) !== null && c !== void 0 ? c : null;
}
function O1(n, l, o, i, c) {
	var u;
	const d = wy(n),
		m = Ey(l),
		g = (u = Ay(n, c)) !== null && u !== void 0 ? u : {};
	g[m] = { expandToSizes: Object.fromEntries(o.entries()), layout: i };
	try {
		c.setItem(d, JSON.stringify(g));
	} catch (p) {
		console.error(p);
	}
}
function ug({ layout: n, panelConstraints: l }) {
	const o = [...n],
		i = o.reduce((u, d) => u + d, 0);
	if (o.length !== l.length)
		throw Error(
			`Invalid ${l.length} panel layout: ${o
				.map((u) => `${u}%`)
				.join(", ")}`
		);
	if (!Ht(i, 100) && o.length > 0)
		for (let u = 0; u < l.length; u++) {
			const d = o[u];
			Ae(d != null, `No layout data found for index ${u}`);
			const m = (100 / i) * d;
			o[u] = m;
		}
	let c = 0;
	for (let u = 0; u < l.length; u++) {
		const d = o[u];
		Ae(d != null, `No layout data found for index ${u}`);
		const m = qr({ panelConstraints: l, panelIndex: u, size: d });
		d != m && ((c += d - m), (o[u] = m));
	}
	if (!Ht(c, 0))
		for (let u = 0; u < l.length; u++) {
			const d = o[u];
			Ae(d != null, `No layout data found for index ${u}`);
			const m = d + c,
				g = qr({ panelConstraints: l, panelIndex: u, size: m });
			if (d !== g && ((c -= g - d), (o[u] = g), Ht(c, 0))) break;
		}
	return o;
}
const _1 = 100,
	co = {
		getItem: (n) => (cg(co), co.getItem(n)),
		setItem: (n, l) => {
			cg(co), co.setItem(n, l);
		},
	},
	fg = {};
function Cy({
	autoSaveId: n = null,
	children: l,
	className: o = "",
	direction: i,
	forwardedRef: c,
	id: u = null,
	onLayout: d = null,
	keyboardResizeBy: m = null,
	storage: g = co,
	style: p,
	tagName: y = "div",
	...x
}) {
	const S = Qf(u),
		E = Ct(null),
		[C, A] = Xr(null),
		[R, M] = Xr([]),
		k = b1(),
		D = Ct({}),
		L = Ct(new Map()),
		_ = Ct(0),
		q = Ct({
			autoSaveId: n,
			direction: i,
			dragState: C,
			id: S,
			keyboardResizeBy: m,
			onLayout: d,
			storage: g,
		}),
		P = Ct({ layout: R, panelDataArray: [], panelDataArrayChanged: !1 });
	Ct({
		didLogIdAndOrderWarning: !1,
		didLogPanelConstraintsWarning: !1,
		prevPanelIds: [],
	}),
		iy(
			c,
			() => ({
				getId: () => q.current.id,
				getLayout: () => {
					const { layout: U } = P.current;
					return U;
				},
				setLayout: (U) => {
					const { onLayout: Q } = q.current,
						{ layout: ae, panelDataArray: W } = P.current,
						te = ug({
							layout: U,
							panelConstraints: W.map((re) => re.constraints),
						});
					sg(ae, te) ||
						(M(te),
						(P.current.layout = te),
						Q && Q(te),
						Hr(W, te, D.current));
				},
			}),
			[]
		),
		Va(() => {
			(q.current.autoSaveId = n),
				(q.current.direction = i),
				(q.current.dragState = C),
				(q.current.id = S),
				(q.current.onLayout = d),
				(q.current.storage = g);
		}),
		E1({
			committedValuesRef: q,
			eagerValuesRef: P,
			groupId: S,
			layout: R,
			panelDataArray: P.current.panelDataArray,
			setLayout: M,
			panelGroupElement: E.current,
		}),
		Xa(() => {
			const { panelDataArray: U } = P.current;
			if (n) {
				if (R.length === 0 || R.length !== U.length) return;
				let Q = fg[n];
				Q == null && ((Q = T1(O1, _1)), (fg[n] = Q));
				const ae = [...U],
					W = new Map(L.current);
				Q(n, ae, W, R, g);
			}
		}, [n, R, g]),
		Xa(() => {});
	const X = At((U) => {
			const { onLayout: Q } = q.current,
				{ layout: ae, panelDataArray: W } = P.current;
			if (U.constraints.collapsible) {
				const te = W.map((Ue) => Ue.constraints),
					{
						collapsedSize: re = 0,
						panelSize: pe,
						pivotIndices: we,
					} = Ga(W, U, ae);
				if (
					(Ae(pe != null, `Panel size not found for panel "${U.id}"`),
					!Un(pe, re))
				) {
					L.current.set(U.id, pe);
					const He = Yr(W, U) === W.length - 1 ? pe - re : re - pe,
						xe = so({
							delta: He,
							initialLayout: ae,
							panelConstraints: te,
							pivotIndices: we,
							prevLayout: ae,
							trigger: "imperative-api",
						});
					Zi(ae, xe) ||
						(M(xe),
						(P.current.layout = xe),
						Q && Q(xe),
						Hr(W, xe, D.current));
				}
			}
		}, []),
		ne = At((U, Q) => {
			const { onLayout: ae } = q.current,
				{ layout: W, panelDataArray: te } = P.current;
			if (U.constraints.collapsible) {
				const re = te.map((Xe) => Xe.constraints),
					{
						collapsedSize: pe = 0,
						panelSize: we = 0,
						minSize: Ue = 0,
						pivotIndices: He,
					} = Ga(te, U, W),
					xe = Q ?? Ue;
				if (Un(we, pe)) {
					const Xe = L.current.get(U.id),
						Tt = Xe != null && Xe >= xe ? Xe : xe,
						et = Yr(te, U) === te.length - 1 ? we - Tt : Tt - we,
						Ze = so({
							delta: et,
							initialLayout: W,
							panelConstraints: re,
							pivotIndices: He,
							prevLayout: W,
							trigger: "imperative-api",
						});
					Zi(W, Ze) ||
						(M(Ze),
						(P.current.layout = Ze),
						ae && ae(Ze),
						Hr(te, Ze, D.current));
				}
			}
		}, []),
		le = At((U) => {
			const { layout: Q, panelDataArray: ae } = P.current,
				{ panelSize: W } = Ga(ae, U, Q);
			return Ae(W != null, `Panel size not found for panel "${U.id}"`), W;
		}, []),
		de = At(
			(U, Q) => {
				const { panelDataArray: ae } = P.current,
					W = Yr(ae, U);
				return N1({
					defaultSize: Q,
					dragState: C,
					layout: R,
					panelData: ae,
					panelIndex: W,
				});
			},
			[C, R]
		),
		oe = At((U) => {
			const { layout: Q, panelDataArray: ae } = P.current,
				{
					collapsedSize: W = 0,
					collapsible: te,
					panelSize: re,
				} = Ga(ae, U, Q);
			return (
				Ae(re != null, `Panel size not found for panel "${U.id}"`),
				te === !0 && Un(re, W)
			);
		}, []),
		ve = At((U) => {
			const { layout: Q, panelDataArray: ae } = P.current,
				{
					collapsedSize: W = 0,
					collapsible: te,
					panelSize: re,
				} = Ga(ae, U, Q);
			return (
				Ae(re != null, `Panel size not found for panel "${U.id}"`),
				!te || Ka(re, W) > 0
			);
		}, []),
		me = At(
			(U) => {
				const { panelDataArray: Q } = P.current;
				Q.push(U),
					Q.sort((ae, W) => {
						const te = ae.order,
							re = W.order;
						return te == null && re == null
							? 0
							: te == null
							? -1
							: re == null
							? 1
							: te - re;
					}),
					(P.current.panelDataArrayChanged = !0),
					k();
			},
			[k]
		);
	Va(() => {
		if (P.current.panelDataArrayChanged) {
			P.current.panelDataArrayChanged = !1;
			const { autoSaveId: U, onLayout: Q, storage: ae } = q.current,
				{ layout: W, panelDataArray: te } = P.current;
			let re = null;
			if (U) {
				const we = M1(U, te, ae);
				we &&
					((L.current = new Map(Object.entries(we.expandToSizes))),
					(re = we.layout));
			}
			re == null && (re = R1({ panelDataArray: te }));
			const pe = ug({
				layout: re,
				panelConstraints: te.map((we) => we.constraints),
			});
			sg(W, pe) ||
				(M(pe),
				(P.current.layout = pe),
				Q && Q(pe),
				Hr(te, pe, D.current));
		}
	}),
		Va(() => {
			const U = P.current;
			return () => {
				U.layout = [];
			};
		}, []);
	const fe = At((U) => {
			let Q = !1;
			const ae = E.current;
			return (
				ae &&
					window
						.getComputedStyle(ae, null)
						.getPropertyValue("direction") === "rtl" &&
					(Q = !0),
				function (te) {
					te.preventDefault();
					const re = E.current;
					if (!re) return () => null;
					const {
							direction: pe,
							dragState: we,
							id: Ue,
							keyboardResizeBy: He,
							onLayout: xe,
						} = q.current,
						{ layout: Xe, panelDataArray: Tt } = P.current,
						{ initialLayout: $t } = we ?? {},
						et = by(Ue, U, re);
					let Ze = C1(te, U, pe, we, He, re);
					const tt = pe === "horizontal";
					tt && Q && (Ze = -Ze);
					const _o = Tt.map((jo) => jo.constraints),
						sn = so({
							delta: Ze,
							initialLayout: $t ?? Xe,
							panelConstraints: _o,
							pivotIndices: et,
							prevLayout: Xe,
							trigger: uy(te) ? "keyboard" : "mouse-or-touch",
						}),
						Do = !Zi(Xe, sn);
					(fy(te) || dy(te)) &&
						_.current != Ze &&
						((_.current = Ze),
						!Do && Ze !== 0
							? tt
								? df(U, Ze < 0 ? hy : py)
								: df(U, Ze < 0 ? vy : gy)
							: df(U, 0)),
						Do &&
							(M(sn),
							(P.current.layout = sn),
							xe && xe(sn),
							Hr(Tt, sn, D.current));
				}
			);
		}, []),
		j = At((U, Q) => {
			const { onLayout: ae } = q.current,
				{ layout: W, panelDataArray: te } = P.current,
				re = te.map((Xe) => Xe.constraints),
				{ panelSize: pe, pivotIndices: we } = Ga(te, U, W);
			Ae(pe != null, `Panel size not found for panel "${U.id}"`);
			const He = Yr(te, U) === te.length - 1 ? pe - Q : Q - pe,
				xe = so({
					delta: He,
					initialLayout: W,
					panelConstraints: re,
					pivotIndices: we,
					prevLayout: W,
					trigger: "imperative-api",
				});
			Zi(W, xe) ||
				(M(xe),
				(P.current.layout = xe),
				ae && ae(xe),
				Hr(te, xe, D.current));
		}, []),
		I = At(
			(U, Q) => {
				const { layout: ae, panelDataArray: W } = P.current,
					{ collapsedSize: te = 0, collapsible: re } = Q,
					{
						collapsedSize: pe = 0,
						collapsible: we,
						maxSize: Ue = 100,
						minSize: He = 0,
					} = U.constraints,
					{ panelSize: xe } = Ga(W, U, ae);
				xe != null &&
					(re && we && Un(xe, te)
						? Un(te, pe) || j(U, pe)
						: xe < He
						? j(U, He)
						: xe > Ue && j(U, Ue));
			},
			[j]
		),
		G = At((U, Q) => {
			const { direction: ae } = q.current,
				{ layout: W } = P.current;
			if (!E.current) return;
			const te = Ds(U, E.current);
			Ae(te, `Drag handle element not found for id "${U}"`);
			const re = Sy(ae, Q);
			A({
				dragHandleId: U,
				dragHandleRect: te.getBoundingClientRect(),
				initialCursorPosition: re,
				initialLayout: W,
			});
		}, []),
		J = At(() => {
			A(null);
		}, []),
		N = At(
			(U) => {
				const { panelDataArray: Q } = P.current,
					ae = Yr(Q, U);
				ae >= 0 &&
					(Q.splice(ae, 1),
					delete D.current[U.id],
					(P.current.panelDataArrayChanged = !0),
					k());
			},
			[k]
		),
		V = l1(
			() => ({
				collapsePanel: X,
				direction: i,
				dragState: C,
				expandPanel: ne,
				getPanelSize: le,
				getPanelStyle: de,
				groupId: S,
				isPanelCollapsed: oe,
				isPanelExpanded: ve,
				reevaluatePanelConstraints: I,
				registerPanel: me,
				registerResizeHandle: fe,
				resizePanel: j,
				startDragging: G,
				stopDragging: J,
				unregisterPanel: N,
				panelGroupElement: E.current,
			}),
			[X, C, i, ne, le, de, S, oe, ve, I, me, fe, j, G, J, N]
		),
		ee = {
			display: "flex",
			flexDirection: i === "horizontal" ? "row" : "column",
			height: "100%",
			overflow: "hidden",
			width: "100%",
		};
	return Wr(
		Ms.Provider,
		{ value: V },
		Wr(y, {
			...x,
			children: l,
			className: o,
			id: u,
			ref: E,
			style: { ...ee, ...p },
			"data-panel-group": "",
			"data-panel-group-direction": i,
			"data-panel-group-id": S,
		})
	);
}
const Ry = ly((n, l) => Wr(Cy, { ...n, forwardedRef: l }));
Cy.displayName = "PanelGroup";
Ry.displayName = "forwardRef(PanelGroup)";
function Yr(n, l) {
	return n.findIndex((o) => o === l || o.id === l.id);
}
function Ga(n, l, o) {
	const i = Yr(n, l),
		u = i === n.length - 1 ? [i - 1, i] : [i, i + 1],
		d = o[i];
	return { ...l.constraints, panelSize: d, pivotIndices: u };
}
function D1({
	disabled: n,
	handleId: l,
	resizeHandler: o,
	panelGroupElement: i,
}) {
	Xa(() => {
		if (n || o == null || i == null) return;
		const c = Ds(l, i);
		if (c == null) return;
		const u = (d) => {
			if (!d.defaultPrevented)
				switch (d.key) {
					case "ArrowDown":
					case "ArrowLeft":
					case "ArrowRight":
					case "ArrowUp":
					case "End":
					case "Home": {
						d.preventDefault(), o(d);
						break;
					}
					case "F6": {
						d.preventDefault();
						const m = c.getAttribute("data-panel-group-id");
						Ae(m, `No group element found for id "${m}"`);
						const g = ho(m, i),
							p = yy(m, l, i);
						Ae(p !== null, `No resize element found for id "${l}"`);
						const y = d.shiftKey
							? p > 0
								? p - 1
								: g.length - 1
							: p + 1 < g.length
							? p + 1
							: 0;
						g[y].focus();
						break;
					}
				}
		};
		return (
			c.addEventListener("keydown", u),
			() => {
				c.removeEventListener("keydown", u);
			}
		);
	}, [i, n, l, o]);
}
function Ny({
	children: n = null,
	className: l = "",
	disabled: o = !1,
	hitAreaMargins: i,
	id: c,
	onBlur: u,
	onDragging: d,
	onFocus: m,
	style: g = {},
	tabIndex: p = 0,
	tagName: y = "div",
	...x
}) {
	var S, E;
	const C = Ct(null),
		A = Ct({ onDragging: d });
	Xa(() => {
		A.current.onDragging = d;
	});
	const R = oy(Ms);
	if (R === null)
		throw Error(
			"PanelResizeHandle components must be rendered within a PanelGroup container"
		);
	const {
			direction: M,
			groupId: k,
			registerResizeHandle: D,
			startDragging: L,
			stopDragging: _,
			panelGroupElement: q,
		} = R,
		P = Qf(c),
		[X, ne] = Xr("inactive"),
		[le, de] = Xr(!1),
		[oe, ve] = Xr(null),
		me = Ct({ state: X });
	Va(() => {
		me.current.state = X;
	}),
		Xa(() => {
			if (o) ve(null);
			else {
				const G = D(P);
				ve(() => G);
			}
		}, [o, P, D]);
	const fe =
			(S = i == null ? void 0 : i.coarse) !== null && S !== void 0
				? S
				: 15,
		j = (E = i == null ? void 0 : i.fine) !== null && E !== void 0 ? E : 5;
	return (
		Xa(() => {
			if (o || oe == null) return;
			const G = C.current;
			return (
				Ae(G, "Element ref not attached"),
				y1(P, G, M, { coarse: fe, fine: j }, (N, V, ee) => {
					if (V)
						switch (N) {
							case "down": {
								ne("drag"),
									Ae(
										ee,
										'Expected event to be defined for "down" action'
									),
									L(P, ee);
								const { onDragging: U } = A.current;
								U && U(!0);
								break;
							}
							case "move": {
								const { state: U } = me.current;
								U !== "drag" && ne("hover"),
									Ae(
										ee,
										'Expected event to be defined for "move" action'
									),
									oe(ee);
								break;
							}
							case "up": {
								ne("hover"), _();
								const { onDragging: U } = A.current;
								U && U(!1);
								break;
							}
						}
					else ne("inactive");
				})
			);
		}, [fe, M, o, j, D, P, oe, L, _]),
		D1({
			disabled: o,
			handleId: P,
			resizeHandler: oe,
			panelGroupElement: q,
		}),
		Wr(y, {
			...x,
			children: n,
			className: l,
			id: c,
			onBlur: () => {
				de(!1), u == null || u();
			},
			onFocus: () => {
				de(!0), m == null || m();
			},
			ref: C,
			role: "separator",
			style: { ...{ touchAction: "none", userSelect: "none" }, ...g },
			tabIndex: p,
			"data-panel-group-direction": M,
			"data-panel-group-id": k,
			"data-resize-handle": "",
			"data-resize-handle-active":
				X === "drag" ? "pointer" : le ? "keyboard" : void 0,
			"data-resize-handle-state": X,
			"data-panel-resize-handle-enabled": !o,
			"data-panel-resize-handle-id": P,
		})
	);
}
Ny.displayName = "PanelResizeHandle";
function Ty(n) {
	var l,
		o,
		i = "";
	if (typeof n == "string" || typeof n == "number") i += n;
	else if (typeof n == "object")
		if (Array.isArray(n)) {
			var c = n.length;
			for (l = 0; l < c; l++)
				n[l] && (o = Ty(n[l])) && (i && (i += " "), (i += o));
		} else for (o in n) n[o] && (i && (i += " "), (i += o));
	return i;
}
function My() {
	for (var n, l, o = 0, i = "", c = arguments.length; o < c; o++)
		(n = arguments[o]) && (l = Ty(n)) && (i && (i += " "), (i += l));
	return i;
}
const Wf = "-",
	j1 = (n) => {
		const l = P1(n),
			{ conflictingClassGroups: o, conflictingClassGroupModifiers: i } =
				n;
		return {
			getClassGroupId: (d) => {
				const m = d.split(Wf);
				return (
					m[0] === "" && m.length !== 1 && m.shift(),
					Oy(m, l) || z1(d)
				);
			},
			getConflictingClassGroupIds: (d, m) => {
				const g = o[d] || [];
				return m && i[d] ? [...g, ...i[d]] : g;
			},
		};
	},
	Oy = (n, l) => {
		var d;
		if (n.length === 0) return l.classGroupId;
		const o = n[0],
			i = l.nextPart.get(o),
			c = i ? Oy(n.slice(1), i) : void 0;
		if (c) return c;
		if (l.validators.length === 0) return;
		const u = n.join(Wf);
		return (d = l.validators.find(({ validator: m }) => m(u))) == null
			? void 0
			: d.classGroupId;
	},
	dg = /^\[(.+)\]$/,
	z1 = (n) => {
		if (dg.test(n)) {
			const l = dg.exec(n)[1],
				o = l == null ? void 0 : l.substring(0, l.indexOf(":"));
			if (o) return "arbitrary.." + o;
		}
	},
	P1 = (n) => {
		const { theme: l, classGroups: o } = n,
			i = { nextPart: new Map(), validators: [] };
		for (const c in o) _f(o[c], i, c, l);
		return i;
	},
	_f = (n, l, o, i) => {
		n.forEach((c) => {
			if (typeof c == "string") {
				const u = c === "" ? l : mg(l, c);
				u.classGroupId = o;
				return;
			}
			if (typeof c == "function") {
				if (L1(c)) {
					_f(c(i), l, o, i);
					return;
				}
				l.validators.push({ validator: c, classGroupId: o });
				return;
			}
			Object.entries(c).forEach(([u, d]) => {
				_f(d, mg(l, u), o, i);
			});
		});
	},
	mg = (n, l) => {
		let o = n;
		return (
			l.split(Wf).forEach((i) => {
				o.nextPart.has(i) ||
					o.nextPart.set(i, { nextPart: new Map(), validators: [] }),
					(o = o.nextPart.get(i));
			}),
			o
		);
	},
	L1 = (n) => n.isThemeGetter,
	U1 = (n) => {
		if (n < 1) return { get: () => {}, set: () => {} };
		let l = 0,
			o = new Map(),
			i = new Map();
		const c = (u, d) => {
			o.set(u, d), l++, l > n && ((l = 0), (i = o), (o = new Map()));
		};
		return {
			get(u) {
				let d = o.get(u);
				if (d !== void 0) return d;
				if ((d = i.get(u)) !== void 0) return c(u, d), d;
			},
			set(u, d) {
				o.has(u) ? o.set(u, d) : c(u, d);
			},
		};
	},
	Df = "!",
	jf = ":",
	H1 = jf.length,
	k1 = (n) => {
		const { prefix: l, experimentalParseClassName: o } = n;
		let i = (c) => {
			const u = [];
			let d = 0,
				m = 0,
				g = 0,
				p;
			for (let C = 0; C < c.length; C++) {
				let A = c[C];
				if (d === 0 && m === 0) {
					if (A === jf) {
						u.push(c.slice(g, C)), (g = C + H1);
						continue;
					}
					if (A === "/") {
						p = C;
						continue;
					}
				}
				A === "["
					? d++
					: A === "]"
					? d--
					: A === "("
					? m++
					: A === ")" && m--;
			}
			const y = u.length === 0 ? c : c.substring(g),
				x = B1(y),
				S = x !== y,
				E = p && p > g ? p - g : void 0;
			return {
				modifiers: u,
				hasImportantModifier: S,
				baseClassName: x,
				maybePostfixModifierPosition: E,
			};
		};
		if (l) {
			const c = l + jf,
				u = i;
			i = (d) =>
				d.startsWith(c)
					? u(d.substring(c.length))
					: {
							isExternal: !0,
							modifiers: [],
							hasImportantModifier: !1,
							baseClassName: d,
							maybePostfixModifierPosition: void 0,
					  };
		}
		if (o) {
			const c = i;
			i = (u) => o({ className: u, parseClassName: c });
		}
		return i;
	},
	B1 = (n) =>
		n.endsWith(Df)
			? n.substring(0, n.length - 1)
			: n.startsWith(Df)
			? n.substring(1)
			: n,
	G1 = (n) => {
		const l = Object.fromEntries(
			n.orderSensitiveModifiers.map((i) => [i, !0])
		);
		return (i) => {
			if (i.length <= 1) return i;
			const c = [];
			let u = [];
			return (
				i.forEach((d) => {
					d[0] === "[" || l[d]
						? (c.push(...u.sort(), d), (u = []))
						: u.push(d);
				}),
				c.push(...u.sort()),
				c
			);
		};
	},
	$1 = (n) => ({
		cache: U1(n.cacheSize),
		parseClassName: k1(n),
		sortModifiers: G1(n),
		...j1(n),
	}),
	Y1 = /\s+/,
	q1 = (n, l) => {
		const {
				parseClassName: o,
				getClassGroupId: i,
				getConflictingClassGroupIds: c,
				sortModifiers: u,
			} = l,
			d = [],
			m = n.trim().split(Y1);
		let g = "";
		for (let p = m.length - 1; p >= 0; p -= 1) {
			const y = m[p],
				{
					isExternal: x,
					modifiers: S,
					hasImportantModifier: E,
					baseClassName: C,
					maybePostfixModifierPosition: A,
				} = o(y);
			if (x) {
				g = y + (g.length > 0 ? " " + g : g);
				continue;
			}
			let R = !!A,
				M = i(R ? C.substring(0, A) : C);
			if (!M) {
				if (!R) {
					g = y + (g.length > 0 ? " " + g : g);
					continue;
				}
				if (((M = i(C)), !M)) {
					g = y + (g.length > 0 ? " " + g : g);
					continue;
				}
				R = !1;
			}
			const k = u(S).join(":"),
				D = E ? k + Df : k,
				L = D + M;
			if (d.includes(L)) continue;
			d.push(L);
			const _ = c(M, R);
			for (let q = 0; q < _.length; ++q) {
				const P = _[q];
				d.push(D + P);
			}
			g = y + (g.length > 0 ? " " + g : g);
		}
		return g;
	};
function X1() {
	let n = 0,
		l,
		o,
		i = "";
	for (; n < arguments.length; )
		(l = arguments[n++]) && (o = _y(l)) && (i && (i += " "), (i += o));
	return i;
}
const _y = (n) => {
	if (typeof n == "string") return n;
	let l,
		o = "";
	for (let i = 0; i < n.length; i++)
		n[i] && (l = _y(n[i])) && (o && (o += " "), (o += l));
	return o;
};
function V1(n, ...l) {
	let o,
		i,
		c,
		u = d;
	function d(g) {
		const p = l.reduce((y, x) => x(y), n());
		return (o = $1(p)), (i = o.cache.get), (c = o.cache.set), (u = m), m(g);
	}
	function m(g) {
		const p = i(g);
		if (p) return p;
		const y = q1(g, o);
		return c(g, y), y;
	}
	return function () {
		return u(X1.apply(null, arguments));
	};
}
const ot = (n) => {
		const l = (o) => o[n] || [];
		return (l.isThemeGetter = !0), l;
	},
	Dy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
	jy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
	K1 = /^\d+\/\d+$/,
	Q1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Z1 =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	I1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	F1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	W1 =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	kr = (n) => K1.test(n),
	Re = (n) => !!n && !Number.isNaN(Number(n)),
	da = (n) => !!n && Number.isInteger(Number(n)),
	mf = (n) => n.endsWith("%") && Re(n.slice(0, -1)),
	Ln = (n) => Q1.test(n),
	J1 = () => !0,
	eA = (n) => Z1.test(n) && !I1.test(n),
	zy = () => !1,
	tA = (n) => F1.test(n),
	nA = (n) => W1.test(n),
	aA = (n) => !ce(n) && !ue(n),
	rA = (n) => al(n, Uy, zy),
	ce = (n) => Dy.test(n),
	$a = (n) => al(n, Hy, eA),
	hf = (n) => al(n, cA, Re),
	hg = (n) => al(n, Py, zy),
	lA = (n) => al(n, Ly, nA),
	Ii = (n) => al(n, ky, tA),
	ue = (n) => jy.test(n),
	io = (n) => rl(n, Hy),
	oA = (n) => rl(n, uA),
	pg = (n) => rl(n, Py),
	iA = (n) => rl(n, Uy),
	sA = (n) => rl(n, Ly),
	Fi = (n) => rl(n, ky, !0),
	al = (n, l, o) => {
		const i = Dy.exec(n);
		return i ? (i[1] ? l(i[1]) : o(i[2])) : !1;
	},
	rl = (n, l, o = !1) => {
		const i = jy.exec(n);
		return i ? (i[1] ? l(i[1]) : o) : !1;
	},
	Py = (n) => n === "position" || n === "percentage",
	Ly = (n) => n === "image" || n === "url",
	Uy = (n) => n === "length" || n === "size" || n === "bg-size",
	Hy = (n) => n === "length",
	cA = (n) => n === "number",
	uA = (n) => n === "family-name",
	ky = (n) => n === "shadow",
	fA = () => {
		const n = ot("color"),
			l = ot("font"),
			o = ot("text"),
			i = ot("font-weight"),
			c = ot("tracking"),
			u = ot("leading"),
			d = ot("breakpoint"),
			m = ot("container"),
			g = ot("spacing"),
			p = ot("radius"),
			y = ot("shadow"),
			x = ot("inset-shadow"),
			S = ot("text-shadow"),
			E = ot("drop-shadow"),
			C = ot("blur"),
			A = ot("perspective"),
			R = ot("aspect"),
			M = ot("ease"),
			k = ot("animate"),
			D = () => [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			],
			L = () => [
				"center",
				"top",
				"bottom",
				"left",
				"right",
				"top-left",
				"left-top",
				"top-right",
				"right-top",
				"bottom-right",
				"right-bottom",
				"bottom-left",
				"left-bottom",
			],
			_ = () => [...L(), ue, ce],
			q = () => ["auto", "hidden", "clip", "visible", "scroll"],
			P = () => ["auto", "contain", "none"],
			X = () => [ue, ce, g],
			ne = () => [kr, "full", "auto", ...X()],
			le = () => [da, "none", "subgrid", ue, ce],
			de = () => ["auto", { span: ["full", da, ue, ce] }, da, ue, ce],
			oe = () => [da, "auto", ue, ce],
			ve = () => ["auto", "min", "max", "fr", ue, ce],
			me = () => [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
				"baseline",
				"center-safe",
				"end-safe",
			],
			fe = () => [
				"start",
				"end",
				"center",
				"stretch",
				"center-safe",
				"end-safe",
			],
			j = () => ["auto", ...X()],
			I = () => [
				kr,
				"auto",
				"full",
				"dvw",
				"dvh",
				"lvw",
				"lvh",
				"svw",
				"svh",
				"min",
				"max",
				"fit",
				...X(),
			],
			G = () => [n, ue, ce],
			J = () => [...L(), pg, hg, { position: [ue, ce] }],
			N = () => [
				"no-repeat",
				{ repeat: ["", "x", "y", "space", "round"] },
			],
			V = () => ["auto", "cover", "contain", iA, rA, { size: [ue, ce] }],
			ee = () => [mf, io, $a],
			U = () => ["", "none", "full", p, ue, ce],
			Q = () => ["", Re, io, $a],
			ae = () => ["solid", "dashed", "dotted", "double"],
			W = () => [
				"normal",
				"multiply",
				"screen",
				"overlay",
				"darken",
				"lighten",
				"color-dodge",
				"color-burn",
				"hard-light",
				"soft-light",
				"difference",
				"exclusion",
				"hue",
				"saturation",
				"color",
				"luminosity",
			],
			te = () => [Re, mf, pg, hg],
			re = () => ["", "none", C, ue, ce],
			pe = () => ["none", Re, ue, ce],
			we = () => ["none", Re, ue, ce],
			Ue = () => [Re, ue, ce],
			He = () => [kr, "full", ...X()];
		return {
			cacheSize: 500,
			theme: {
				animate: ["spin", "ping", "pulse", "bounce"],
				aspect: ["video"],
				blur: [Ln],
				breakpoint: [Ln],
				color: [J1],
				container: [Ln],
				"drop-shadow": [Ln],
				ease: ["in", "out", "in-out"],
				font: [aA],
				"font-weight": [
					"thin",
					"extralight",
					"light",
					"normal",
					"medium",
					"semibold",
					"bold",
					"extrabold",
					"black",
				],
				"inset-shadow": [Ln],
				leading: [
					"none",
					"tight",
					"snug",
					"normal",
					"relaxed",
					"loose",
				],
				perspective: [
					"dramatic",
					"near",
					"normal",
					"midrange",
					"distant",
					"none",
				],
				radius: [Ln],
				shadow: [Ln],
				spacing: ["px", Re],
				text: [Ln],
				"text-shadow": [Ln],
				tracking: [
					"tighter",
					"tight",
					"normal",
					"wide",
					"wider",
					"widest",
				],
			},
			classGroups: {
				aspect: [{ aspect: ["auto", "square", kr, ce, ue, R] }],
				container: ["container"],
				columns: [{ columns: [Re, ce, ue, m] }],
				"break-after": [{ "break-after": D() }],
				"break-before": [{ "break-before": D() }],
				"break-inside": [
					{
						"break-inside": [
							"auto",
							"avoid",
							"avoid-page",
							"avoid-column",
						],
					},
				],
				"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
				box: [{ box: ["border", "content"] }],
				display: [
					"block",
					"inline-block",
					"inline",
					"flex",
					"inline-flex",
					"table",
					"inline-table",
					"table-caption",
					"table-cell",
					"table-column",
					"table-column-group",
					"table-footer-group",
					"table-header-group",
					"table-row-group",
					"table-row",
					"flow-root",
					"grid",
					"inline-grid",
					"contents",
					"list-item",
					"hidden",
				],
				sr: ["sr-only", "not-sr-only"],
				float: [{ float: ["right", "left", "none", "start", "end"] }],
				clear: [
					{
						clear: [
							"left",
							"right",
							"both",
							"none",
							"start",
							"end",
						],
					},
				],
				isolation: ["isolate", "isolation-auto"],
				"object-fit": [
					{
						object: [
							"contain",
							"cover",
							"fill",
							"none",
							"scale-down",
						],
					},
				],
				"object-position": [{ object: _() }],
				overflow: [{ overflow: q() }],
				"overflow-x": [{ "overflow-x": q() }],
				"overflow-y": [{ "overflow-y": q() }],
				overscroll: [{ overscroll: P() }],
				"overscroll-x": [{ "overscroll-x": P() }],
				"overscroll-y": [{ "overscroll-y": P() }],
				position: ["static", "fixed", "absolute", "relative", "sticky"],
				inset: [{ inset: ne() }],
				"inset-x": [{ "inset-x": ne() }],
				"inset-y": [{ "inset-y": ne() }],
				start: [{ start: ne() }],
				end: [{ end: ne() }],
				top: [{ top: ne() }],
				right: [{ right: ne() }],
				bottom: [{ bottom: ne() }],
				left: [{ left: ne() }],
				visibility: ["visible", "invisible", "collapse"],
				z: [{ z: [da, "auto", ue, ce] }],
				basis: [{ basis: [kr, "full", "auto", m, ...X()] }],
				"flex-direction": [
					{ flex: ["row", "row-reverse", "col", "col-reverse"] },
				],
				"flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
				flex: [{ flex: [Re, kr, "auto", "initial", "none", ce] }],
				grow: [{ grow: ["", Re, ue, ce] }],
				shrink: [{ shrink: ["", Re, ue, ce] }],
				order: [{ order: [da, "first", "last", "none", ue, ce] }],
				"grid-cols": [{ "grid-cols": le() }],
				"col-start-end": [{ col: de() }],
				"col-start": [{ "col-start": oe() }],
				"col-end": [{ "col-end": oe() }],
				"grid-rows": [{ "grid-rows": le() }],
				"row-start-end": [{ row: de() }],
				"row-start": [{ "row-start": oe() }],
				"row-end": [{ "row-end": oe() }],
				"grid-flow": [
					{
						"grid-flow": [
							"row",
							"col",
							"dense",
							"row-dense",
							"col-dense",
						],
					},
				],
				"auto-cols": [{ "auto-cols": ve() }],
				"auto-rows": [{ "auto-rows": ve() }],
				gap: [{ gap: X() }],
				"gap-x": [{ "gap-x": X() }],
				"gap-y": [{ "gap-y": X() }],
				"justify-content": [{ justify: [...me(), "normal"] }],
				"justify-items": [{ "justify-items": [...fe(), "normal"] }],
				"justify-self": [{ "justify-self": ["auto", ...fe()] }],
				"align-content": [{ content: ["normal", ...me()] }],
				"align-items": [
					{ items: [...fe(), { baseline: ["", "last"] }] },
				],
				"align-self": [
					{ self: ["auto", ...fe(), { baseline: ["", "last"] }] },
				],
				"place-content": [{ "place-content": me() }],
				"place-items": [{ "place-items": [...fe(), "baseline"] }],
				"place-self": [{ "place-self": ["auto", ...fe()] }],
				p: [{ p: X() }],
				px: [{ px: X() }],
				py: [{ py: X() }],
				ps: [{ ps: X() }],
				pe: [{ pe: X() }],
				pt: [{ pt: X() }],
				pr: [{ pr: X() }],
				pb: [{ pb: X() }],
				pl: [{ pl: X() }],
				m: [{ m: j() }],
				mx: [{ mx: j() }],
				my: [{ my: j() }],
				ms: [{ ms: j() }],
				me: [{ me: j() }],
				mt: [{ mt: j() }],
				mr: [{ mr: j() }],
				mb: [{ mb: j() }],
				ml: [{ ml: j() }],
				"space-x": [{ "space-x": X() }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": X() }],
				"space-y-reverse": ["space-y-reverse"],
				size: [{ size: I() }],
				w: [{ w: [m, "screen", ...I()] }],
				"min-w": [{ "min-w": [m, "screen", "none", ...I()] }],
				"max-w": [
					{
						"max-w": [
							m,
							"screen",
							"none",
							"prose",
							{ screen: [d] },
							...I(),
						],
					},
				],
				h: [{ h: ["screen", ...I()] }],
				"min-h": [{ "min-h": ["screen", "none", ...I()] }],
				"max-h": [{ "max-h": ["screen", ...I()] }],
				"font-size": [{ text: ["base", o, io, $a] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [{ font: [i, ue, hf] }],
				"font-stretch": [
					{
						"font-stretch": [
							"ultra-condensed",
							"extra-condensed",
							"condensed",
							"semi-condensed",
							"normal",
							"semi-expanded",
							"expanded",
							"extra-expanded",
							"ultra-expanded",
							mf,
							ce,
						],
					},
				],
				"font-family": [{ font: [oA, ce, l] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [{ tracking: [c, ue, ce] }],
				"line-clamp": [{ "line-clamp": [Re, "none", ue, hf] }],
				leading: [{ leading: [u, ...X()] }],
				"list-image": [{ "list-image": ["none", ue, ce] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"list-style-type": [
					{ list: ["disc", "decimal", "none", ue, ce] },
				],
				"text-alignment": [
					{
						text: [
							"left",
							"center",
							"right",
							"justify",
							"start",
							"end",
						],
					},
				],
				"placeholder-color": [{ placeholder: G() }],
				"text-color": [{ text: G() }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline",
				],
				"text-decoration-style": [{ decoration: [...ae(), "wavy"] }],
				"text-decoration-thickness": [
					{ decoration: [Re, "from-font", "auto", ue, $a] },
				],
				"text-decoration-color": [{ decoration: G() }],
				"underline-offset": [
					{ "underline-offset": [Re, "auto", ue, ce] },
				],
				"text-transform": [
					"uppercase",
					"lowercase",
					"capitalize",
					"normal-case",
				],
				"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
				"text-wrap": [
					{ text: ["wrap", "nowrap", "balance", "pretty"] },
				],
				indent: [{ indent: X() }],
				"vertical-align": [
					{
						align: [
							"baseline",
							"top",
							"middle",
							"bottom",
							"text-top",
							"text-bottom",
							"sub",
							"super",
							ue,
							ce,
						],
					},
				],
				whitespace: [
					{
						whitespace: [
							"normal",
							"nowrap",
							"pre",
							"pre-line",
							"pre-wrap",
							"break-spaces",
						],
					},
				],
				break: [{ break: ["normal", "words", "all", "keep"] }],
				wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
				hyphens: [{ hyphens: ["none", "manual", "auto"] }],
				content: [{ content: ["none", ue, ce] }],
				"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
				"bg-clip": [
					{ "bg-clip": ["border", "padding", "content", "text"] },
				],
				"bg-origin": [
					{ "bg-origin": ["border", "padding", "content"] },
				],
				"bg-position": [{ bg: J() }],
				"bg-repeat": [{ bg: N() }],
				"bg-size": [{ bg: V() }],
				"bg-image": [
					{
						bg: [
							"none",
							{
								linear: [
									{
										to: [
											"t",
											"tr",
											"r",
											"br",
											"b",
											"bl",
											"l",
											"tl",
										],
									},
									da,
									ue,
									ce,
								],
								radial: ["", ue, ce],
								conic: [da, ue, ce],
							},
							sA,
							lA,
						],
					},
				],
				"bg-color": [{ bg: G() }],
				"gradient-from-pos": [{ from: ee() }],
				"gradient-via-pos": [{ via: ee() }],
				"gradient-to-pos": [{ to: ee() }],
				"gradient-from": [{ from: G() }],
				"gradient-via": [{ via: G() }],
				"gradient-to": [{ to: G() }],
				rounded: [{ rounded: U() }],
				"rounded-s": [{ "rounded-s": U() }],
				"rounded-e": [{ "rounded-e": U() }],
				"rounded-t": [{ "rounded-t": U() }],
				"rounded-r": [{ "rounded-r": U() }],
				"rounded-b": [{ "rounded-b": U() }],
				"rounded-l": [{ "rounded-l": U() }],
				"rounded-ss": [{ "rounded-ss": U() }],
				"rounded-se": [{ "rounded-se": U() }],
				"rounded-ee": [{ "rounded-ee": U() }],
				"rounded-es": [{ "rounded-es": U() }],
				"rounded-tl": [{ "rounded-tl": U() }],
				"rounded-tr": [{ "rounded-tr": U() }],
				"rounded-br": [{ "rounded-br": U() }],
				"rounded-bl": [{ "rounded-bl": U() }],
				"border-w": [{ border: Q() }],
				"border-w-x": [{ "border-x": Q() }],
				"border-w-y": [{ "border-y": Q() }],
				"border-w-s": [{ "border-s": Q() }],
				"border-w-e": [{ "border-e": Q() }],
				"border-w-t": [{ "border-t": Q() }],
				"border-w-r": [{ "border-r": Q() }],
				"border-w-b": [{ "border-b": Q() }],
				"border-w-l": [{ "border-l": Q() }],
				"divide-x": [{ "divide-x": Q() }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": Q() }],
				"divide-y-reverse": ["divide-y-reverse"],
				"border-style": [{ border: [...ae(), "hidden", "none"] }],
				"divide-style": [{ divide: [...ae(), "hidden", "none"] }],
				"border-color": [{ border: G() }],
				"border-color-x": [{ "border-x": G() }],
				"border-color-y": [{ "border-y": G() }],
				"border-color-s": [{ "border-s": G() }],
				"border-color-e": [{ "border-e": G() }],
				"border-color-t": [{ "border-t": G() }],
				"border-color-r": [{ "border-r": G() }],
				"border-color-b": [{ "border-b": G() }],
				"border-color-l": [{ "border-l": G() }],
				"divide-color": [{ divide: G() }],
				"outline-style": [{ outline: [...ae(), "none", "hidden"] }],
				"outline-offset": [{ "outline-offset": [Re, ue, ce] }],
				"outline-w": [{ outline: ["", Re, io, $a] }],
				"outline-color": [{ outline: G() }],
				shadow: [{ shadow: ["", "none", y, Fi, Ii] }],
				"shadow-color": [{ shadow: G() }],
				"inset-shadow": [{ "inset-shadow": ["none", x, Fi, Ii] }],
				"inset-shadow-color": [{ "inset-shadow": G() }],
				"ring-w": [{ ring: Q() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: G() }],
				"ring-offset-w": [{ "ring-offset": [Re, $a] }],
				"ring-offset-color": [{ "ring-offset": G() }],
				"inset-ring-w": [{ "inset-ring": Q() }],
				"inset-ring-color": [{ "inset-ring": G() }],
				"text-shadow": [{ "text-shadow": ["none", S, Fi, Ii] }],
				"text-shadow-color": [{ "text-shadow": G() }],
				opacity: [{ opacity: [Re, ue, ce] }],
				"mix-blend": [
					{ "mix-blend": [...W(), "plus-darker", "plus-lighter"] },
				],
				"bg-blend": [{ "bg-blend": W() }],
				"mask-clip": [
					{
						"mask-clip": [
							"border",
							"padding",
							"content",
							"fill",
							"stroke",
							"view",
						],
					},
					"mask-no-clip",
				],
				"mask-composite": [
					{ mask: ["add", "subtract", "intersect", "exclude"] },
				],
				"mask-image-linear-pos": [{ "mask-linear": [Re] }],
				"mask-image-linear-from-pos": [{ "mask-linear-from": te() }],
				"mask-image-linear-to-pos": [{ "mask-linear-to": te() }],
				"mask-image-linear-from-color": [{ "mask-linear-from": G() }],
				"mask-image-linear-to-color": [{ "mask-linear-to": G() }],
				"mask-image-t-from-pos": [{ "mask-t-from": te() }],
				"mask-image-t-to-pos": [{ "mask-t-to": te() }],
				"mask-image-t-from-color": [{ "mask-t-from": G() }],
				"mask-image-t-to-color": [{ "mask-t-to": G() }],
				"mask-image-r-from-pos": [{ "mask-r-from": te() }],
				"mask-image-r-to-pos": [{ "mask-r-to": te() }],
				"mask-image-r-from-color": [{ "mask-r-from": G() }],
				"mask-image-r-to-color": [{ "mask-r-to": G() }],
				"mask-image-b-from-pos": [{ "mask-b-from": te() }],
				"mask-image-b-to-pos": [{ "mask-b-to": te() }],
				"mask-image-b-from-color": [{ "mask-b-from": G() }],
				"mask-image-b-to-color": [{ "mask-b-to": G() }],
				"mask-image-l-from-pos": [{ "mask-l-from": te() }],
				"mask-image-l-to-pos": [{ "mask-l-to": te() }],
				"mask-image-l-from-color": [{ "mask-l-from": G() }],
				"mask-image-l-to-color": [{ "mask-l-to": G() }],
				"mask-image-x-from-pos": [{ "mask-x-from": te() }],
				"mask-image-x-to-pos": [{ "mask-x-to": te() }],
				"mask-image-x-from-color": [{ "mask-x-from": G() }],
				"mask-image-x-to-color": [{ "mask-x-to": G() }],
				"mask-image-y-from-pos": [{ "mask-y-from": te() }],
				"mask-image-y-to-pos": [{ "mask-y-to": te() }],
				"mask-image-y-from-color": [{ "mask-y-from": G() }],
				"mask-image-y-to-color": [{ "mask-y-to": G() }],
				"mask-image-radial": [{ "mask-radial": [ue, ce] }],
				"mask-image-radial-from-pos": [{ "mask-radial-from": te() }],
				"mask-image-radial-to-pos": [{ "mask-radial-to": te() }],
				"mask-image-radial-from-color": [{ "mask-radial-from": G() }],
				"mask-image-radial-to-color": [{ "mask-radial-to": G() }],
				"mask-image-radial-shape": [
					{ "mask-radial": ["circle", "ellipse"] },
				],
				"mask-image-radial-size": [
					{
						"mask-radial": [
							{
								closest: ["side", "corner"],
								farthest: ["side", "corner"],
							},
						],
					},
				],
				"mask-image-radial-pos": [{ "mask-radial-at": L() }],
				"mask-image-conic-pos": [{ "mask-conic": [Re] }],
				"mask-image-conic-from-pos": [{ "mask-conic-from": te() }],
				"mask-image-conic-to-pos": [{ "mask-conic-to": te() }],
				"mask-image-conic-from-color": [{ "mask-conic-from": G() }],
				"mask-image-conic-to-color": [{ "mask-conic-to": G() }],
				"mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
				"mask-origin": [
					{
						"mask-origin": [
							"border",
							"padding",
							"content",
							"fill",
							"stroke",
							"view",
						],
					},
				],
				"mask-position": [{ mask: J() }],
				"mask-repeat": [{ mask: N() }],
				"mask-size": [{ mask: V() }],
				"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
				"mask-image": [{ mask: ["none", ue, ce] }],
				filter: [{ filter: ["", "none", ue, ce] }],
				blur: [{ blur: re() }],
				brightness: [{ brightness: [Re, ue, ce] }],
				contrast: [{ contrast: [Re, ue, ce] }],
				"drop-shadow": [{ "drop-shadow": ["", "none", E, Fi, Ii] }],
				"drop-shadow-color": [{ "drop-shadow": G() }],
				grayscale: [{ grayscale: ["", Re, ue, ce] }],
				"hue-rotate": [{ "hue-rotate": [Re, ue, ce] }],
				invert: [{ invert: ["", Re, ue, ce] }],
				saturate: [{ saturate: [Re, ue, ce] }],
				sepia: [{ sepia: ["", Re, ue, ce] }],
				"backdrop-filter": [
					{ "backdrop-filter": ["", "none", ue, ce] },
				],
				"backdrop-blur": [{ "backdrop-blur": re() }],
				"backdrop-brightness": [
					{ "backdrop-brightness": [Re, ue, ce] },
				],
				"backdrop-contrast": [{ "backdrop-contrast": [Re, ue, ce] }],
				"backdrop-grayscale": [
					{ "backdrop-grayscale": ["", Re, ue, ce] },
				],
				"backdrop-hue-rotate": [
					{ "backdrop-hue-rotate": [Re, ue, ce] },
				],
				"backdrop-invert": [{ "backdrop-invert": ["", Re, ue, ce] }],
				"backdrop-opacity": [{ "backdrop-opacity": [Re, ue, ce] }],
				"backdrop-saturate": [{ "backdrop-saturate": [Re, ue, ce] }],
				"backdrop-sepia": [{ "backdrop-sepia": ["", Re, ue, ce] }],
				"border-collapse": [{ border: ["collapse", "separate"] }],
				"border-spacing": [{ "border-spacing": X() }],
				"border-spacing-x": [{ "border-spacing-x": X() }],
				"border-spacing-y": [{ "border-spacing-y": X() }],
				"table-layout": [{ table: ["auto", "fixed"] }],
				caption: [{ caption: ["top", "bottom"] }],
				transition: [
					{
						transition: [
							"",
							"all",
							"colors",
							"opacity",
							"shadow",
							"transform",
							"none",
							ue,
							ce,
						],
					},
				],
				"transition-behavior": [{ transition: ["normal", "discrete"] }],
				duration: [{ duration: [Re, "initial", ue, ce] }],
				ease: [{ ease: ["linear", "initial", M, ue, ce] }],
				delay: [{ delay: [Re, ue, ce] }],
				animate: [{ animate: ["none", k, ue, ce] }],
				backface: [{ backface: ["hidden", "visible"] }],
				perspective: [{ perspective: [A, ue, ce] }],
				"perspective-origin": [{ "perspective-origin": _() }],
				rotate: [{ rotate: pe() }],
				"rotate-x": [{ "rotate-x": pe() }],
				"rotate-y": [{ "rotate-y": pe() }],
				"rotate-z": [{ "rotate-z": pe() }],
				scale: [{ scale: we() }],
				"scale-x": [{ "scale-x": we() }],
				"scale-y": [{ "scale-y": we() }],
				"scale-z": [{ "scale-z": we() }],
				"scale-3d": ["scale-3d"],
				skew: [{ skew: Ue() }],
				"skew-x": [{ "skew-x": Ue() }],
				"skew-y": [{ "skew-y": Ue() }],
				transform: [{ transform: [ue, ce, "", "none", "gpu", "cpu"] }],
				"transform-origin": [{ origin: _() }],
				"transform-style": [{ transform: ["3d", "flat"] }],
				translate: [{ translate: He() }],
				"translate-x": [{ "translate-x": He() }],
				"translate-y": [{ "translate-y": He() }],
				"translate-z": [{ "translate-z": He() }],
				"translate-none": ["translate-none"],
				accent: [{ accent: G() }],
				appearance: [{ appearance: ["none", "auto"] }],
				"caret-color": [{ caret: G() }],
				"color-scheme": [
					{
						scheme: [
							"normal",
							"dark",
							"light",
							"light-dark",
							"only-dark",
							"only-light",
						],
					},
				],
				cursor: [
					{
						cursor: [
							"auto",
							"default",
							"pointer",
							"wait",
							"text",
							"move",
							"help",
							"not-allowed",
							"none",
							"context-menu",
							"progress",
							"cell",
							"crosshair",
							"vertical-text",
							"alias",
							"copy",
							"no-drop",
							"grab",
							"grabbing",
							"all-scroll",
							"col-resize",
							"row-resize",
							"n-resize",
							"e-resize",
							"s-resize",
							"w-resize",
							"ne-resize",
							"nw-resize",
							"se-resize",
							"sw-resize",
							"ew-resize",
							"ns-resize",
							"nesw-resize",
							"nwse-resize",
							"zoom-in",
							"zoom-out",
							ue,
							ce,
						],
					},
				],
				"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
				"pointer-events": [{ "pointer-events": ["auto", "none"] }],
				resize: [{ resize: ["none", "", "y", "x"] }],
				"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
				"scroll-m": [{ "scroll-m": X() }],
				"scroll-mx": [{ "scroll-mx": X() }],
				"scroll-my": [{ "scroll-my": X() }],
				"scroll-ms": [{ "scroll-ms": X() }],
				"scroll-me": [{ "scroll-me": X() }],
				"scroll-mt": [{ "scroll-mt": X() }],
				"scroll-mr": [{ "scroll-mr": X() }],
				"scroll-mb": [{ "scroll-mb": X() }],
				"scroll-ml": [{ "scroll-ml": X() }],
				"scroll-p": [{ "scroll-p": X() }],
				"scroll-px": [{ "scroll-px": X() }],
				"scroll-py": [{ "scroll-py": X() }],
				"scroll-ps": [{ "scroll-ps": X() }],
				"scroll-pe": [{ "scroll-pe": X() }],
				"scroll-pt": [{ "scroll-pt": X() }],
				"scroll-pr": [{ "scroll-pr": X() }],
				"scroll-pb": [{ "scroll-pb": X() }],
				"scroll-pl": [{ "scroll-pl": X() }],
				"snap-align": [
					{ snap: ["start", "end", "center", "align-none"] },
				],
				"snap-stop": [{ snap: ["normal", "always"] }],
				"snap-type": [{ snap: ["none", "x", "y", "both"] }],
				"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
				touch: [{ touch: ["auto", "none", "manipulation"] }],
				"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
				"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
				"touch-pz": ["touch-pinch-zoom"],
				select: [{ select: ["none", "text", "all", "auto"] }],
				"will-change": [
					{
						"will-change": [
							"auto",
							"scroll",
							"contents",
							"transform",
							ue,
							ce,
						],
					},
				],
				fill: [{ fill: ["none", ...G()] }],
				"stroke-w": [{ stroke: [Re, io, $a, hf] }],
				stroke: [{ stroke: ["none", ...G()] }],
				"forced-color-adjust": [
					{ "forced-color-adjust": ["auto", "none"] },
				],
			},
			conflictingClassGroups: {
				overflow: ["overflow-x", "overflow-y"],
				overscroll: ["overscroll-x", "overscroll-y"],
				inset: [
					"inset-x",
					"inset-y",
					"start",
					"end",
					"top",
					"right",
					"bottom",
					"left",
				],
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
				"fvn-normal": [
					"fvn-ordinal",
					"fvn-slashed-zero",
					"fvn-figure",
					"fvn-spacing",
					"fvn-fraction",
				],
				"fvn-ordinal": ["fvn-normal"],
				"fvn-slashed-zero": ["fvn-normal"],
				"fvn-figure": ["fvn-normal"],
				"fvn-spacing": ["fvn-normal"],
				"fvn-fraction": ["fvn-normal"],
				"line-clamp": ["display", "overflow"],
				rounded: [
					"rounded-s",
					"rounded-e",
					"rounded-t",
					"rounded-r",
					"rounded-b",
					"rounded-l",
					"rounded-ss",
					"rounded-se",
					"rounded-ee",
					"rounded-es",
					"rounded-tl",
					"rounded-tr",
					"rounded-br",
					"rounded-bl",
				],
				"rounded-s": ["rounded-ss", "rounded-es"],
				"rounded-e": ["rounded-se", "rounded-ee"],
				"rounded-t": ["rounded-tl", "rounded-tr"],
				"rounded-r": ["rounded-tr", "rounded-br"],
				"rounded-b": ["rounded-br", "rounded-bl"],
				"rounded-l": ["rounded-tl", "rounded-bl"],
				"border-spacing": ["border-spacing-x", "border-spacing-y"],
				"border-w": [
					"border-w-x",
					"border-w-y",
					"border-w-s",
					"border-w-e",
					"border-w-t",
					"border-w-r",
					"border-w-b",
					"border-w-l",
				],
				"border-w-x": ["border-w-r", "border-w-l"],
				"border-w-y": ["border-w-t", "border-w-b"],
				"border-color": [
					"border-color-x",
					"border-color-y",
					"border-color-s",
					"border-color-e",
					"border-color-t",
					"border-color-r",
					"border-color-b",
					"border-color-l",
				],
				"border-color-x": ["border-color-r", "border-color-l"],
				"border-color-y": ["border-color-t", "border-color-b"],
				translate: ["translate-x", "translate-y", "translate-none"],
				"translate-none": [
					"translate",
					"translate-x",
					"translate-y",
					"translate-z",
				],
				"scroll-m": [
					"scroll-mx",
					"scroll-my",
					"scroll-ms",
					"scroll-me",
					"scroll-mt",
					"scroll-mr",
					"scroll-mb",
					"scroll-ml",
				],
				"scroll-mx": ["scroll-mr", "scroll-ml"],
				"scroll-my": ["scroll-mt", "scroll-mb"],
				"scroll-p": [
					"scroll-px",
					"scroll-py",
					"scroll-ps",
					"scroll-pe",
					"scroll-pt",
					"scroll-pr",
					"scroll-pb",
					"scroll-pl",
				],
				"scroll-px": ["scroll-pr", "scroll-pl"],
				"scroll-py": ["scroll-pt", "scroll-pb"],
				touch: ["touch-x", "touch-y", "touch-pz"],
				"touch-x": ["touch"],
				"touch-y": ["touch"],
				"touch-pz": ["touch"],
			},
			conflictingClassGroupModifiers: { "font-size": ["leading"] },
			orderSensitiveModifiers: [
				"*",
				"**",
				"after",
				"backdrop",
				"before",
				"details-content",
				"file",
				"first-letter",
				"first-line",
				"marker",
				"placeholder",
				"selection",
			],
		};
	},
	dA = V1(fA);
function De(...n) {
	return dA(My(n));
}
function mA({ className: n, ...l }) {
	return h.jsx(Ry, {
		"data-slot": "resizable-panel-group",
		className: De(
			"flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
			n
		),
		...l,
	});
}
function vg({ ...n }) {
	return h.jsx(cy, { "data-slot": "resizable-panel", ...n });
}
function hA({ withHandle: n, className: l, ...o }) {
	return h.jsx(Ny, {
		"data-slot": "resizable-handle",
		className: De(
			"bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
			l
		),
		...o,
		children:
			n &&
			h.jsx("div", {
				className:
					"bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
				children: h.jsx(WE, { className: "size-2.5" }),
			}),
	});
}
function gg(n, l) {
	if (typeof n == "function") return n(l);
	n != null && (n.current = l);
}
function Jf(...n) {
	return (l) => {
		let o = !1;
		const i = n.map((c) => {
			const u = gg(c, l);
			return !o && typeof u == "function" && (o = !0), u;
		});
		if (o)
			return () => {
				for (let c = 0; c < i.length; c++) {
					const u = i[c];
					typeof u == "function" ? u() : gg(n[c], null);
				}
			};
	};
}
function Se(...n) {
	return v.useCallback(Jf(...n), n);
}
function vn(n) {
	const l = vA(n),
		o = v.forwardRef((i, c) => {
			const { children: u, ...d } = i,
				m = v.Children.toArray(u),
				g = m.find(gA);
			if (g) {
				const p = g.props.children,
					y = m.map((x) =>
						x === g
							? v.Children.count(p) > 1
								? v.Children.only(null)
								: v.isValidElement(p)
								? p.props.children
								: null
							: x
					);
				return h.jsx(l, {
					...d,
					ref: c,
					children: v.isValidElement(p)
						? v.cloneElement(p, void 0, y)
						: null,
				});
			}
			return h.jsx(l, { ...d, ref: c, children: u });
		});
	return (o.displayName = `${n}.Slot`), o;
}
var pA = vn("Slot");
function vA(n) {
	const l = v.forwardRef((o, i) => {
		const { children: c, ...u } = o;
		if (v.isValidElement(c)) {
			const d = bA(c),
				m = yA(u, c.props);
			return (
				c.type !== v.Fragment && (m.ref = i ? Jf(i, d) : d),
				v.cloneElement(c, m)
			);
		}
		return v.Children.count(c) > 1 ? v.Children.only(null) : null;
	});
	return (l.displayName = `${n}.SlotClone`), l;
}
var By = Symbol("radix.slottable");
function Gy(n) {
	const l = ({ children: o }) => h.jsx(h.Fragment, { children: o });
	return (l.displayName = `${n}.Slottable`), (l.__radixId = By), l;
}
function gA(n) {
	return (
		v.isValidElement(n) &&
		typeof n.type == "function" &&
		"__radixId" in n.type &&
		n.type.__radixId === By
	);
}
function yA(n, l) {
	const o = { ...l };
	for (const i in l) {
		const c = n[i],
			u = l[i];
		/^on[A-Z]/.test(i)
			? c && u
				? (o[i] = (...m) => {
						u(...m), c(...m);
				  })
				: c && (o[i] = c)
			: i === "style"
			? (o[i] = { ...c, ...u })
			: i === "className" && (o[i] = [c, u].filter(Boolean).join(" "));
	}
	return { ...n, ...o };
}
function bA(n) {
	var i, c;
	let l =
			(i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
				? void 0
				: i.get,
		o = l && "isReactWarning" in l && l.isReactWarning;
	return o
		? n.ref
		: ((l =
				(c = Object.getOwnPropertyDescriptor(n, "ref")) == null
					? void 0
					: c.get),
		  (o = l && "isReactWarning" in l && l.isReactWarning),
		  o ? n.props.ref : n.props.ref || n.ref);
}
const yg = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
	bg = My,
	xA = (n, l) => (o) => {
		var i;
		if ((l == null ? void 0 : l.variants) == null)
			return bg(
				n,
				o == null ? void 0 : o.class,
				o == null ? void 0 : o.className
			);
		const { variants: c, defaultVariants: u } = l,
			d = Object.keys(c).map((p) => {
				const y = o == null ? void 0 : o[p],
					x = u == null ? void 0 : u[p];
				if (y === null) return null;
				const S = yg(y) || yg(x);
				return c[p][S];
			}),
			m =
				o &&
				Object.entries(o).reduce((p, y) => {
					let [x, S] = y;
					return S === void 0 || (p[x] = S), p;
				}, {}),
			g =
				l == null || (i = l.compoundVariants) === null || i === void 0
					? void 0
					: i.reduce((p, y) => {
							let { class: x, className: S, ...E } = y;
							return Object.entries(E).every((C) => {
								let [A, R] = C;
								return Array.isArray(R)
									? R.includes({ ...u, ...m }[A])
									: { ...u, ...m }[A] === R;
							})
								? [...p, x, S]
								: p;
					  }, []);
		return bg(
			n,
			d,
			g,
			o == null ? void 0 : o.class,
			o == null ? void 0 : o.className
		);
	},
	ed = xA(
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
		{
			variants: {
				variant: {
					default:
						"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
					destructive:
						"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
					outline:
						"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
					secondary:
						"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
					ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
					link: "text-primary underline-offset-4 hover:underline",
				},
				size: {
					default: "h-9 px-4 py-2 has-[>svg]:px-3",
					sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
					lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
					icon: "size-9",
				},
			},
			defaultVariants: { variant: "default", size: "default" },
		}
	);
function Bt({ className: n, variant: l, size: o, asChild: i = !1, ...c }) {
	const u = i ? pA : "button";
	return h.jsx(u, {
		"data-slot": "button",
		className: De(ed({ variant: l, size: o, className: n })),
		...c,
	});
}
function ie(n, l, { checkForDefaultPrevented: o = !0 } = {}) {
	return function (c) {
		if ((n == null || n(c), o === !1 || !c.defaultPrevented))
			return l == null ? void 0 : l(c);
	};
}
function SA(n, l) {
	const o = v.createContext(l),
		i = (u) => {
			const { children: d, ...m } = u,
				g = v.useMemo(() => m, Object.values(m));
			return h.jsx(o.Provider, { value: g, children: d });
		};
	i.displayName = n + "Provider";
	function c(u) {
		const d = v.useContext(o);
		if (d) return d;
		if (l !== void 0) return l;
		throw new Error(`\`${u}\` must be used within \`${n}\``);
	}
	return [i, c];
}
function Rt(n, l = []) {
	let o = [];
	function i(u, d) {
		const m = v.createContext(d),
			g = o.length;
		o = [...o, d];
		const p = (x) => {
			var M;
			const { scope: S, children: E, ...C } = x,
				A =
					((M = S == null ? void 0 : S[n]) == null ? void 0 : M[g]) ||
					m,
				R = v.useMemo(() => C, Object.values(C));
			return h.jsx(A.Provider, { value: R, children: E });
		};
		p.displayName = u + "Provider";
		function y(x, S) {
			var A;
			const E =
					((A = S == null ? void 0 : S[n]) == null ? void 0 : A[g]) ||
					m,
				C = v.useContext(E);
			if (C) return C;
			if (d !== void 0) return d;
			throw new Error(`\`${x}\` must be used within \`${u}\``);
		}
		return [p, y];
	}
	const c = () => {
		const u = o.map((d) => v.createContext(d));
		return function (m) {
			const g = (m == null ? void 0 : m[n]) || u;
			return v.useMemo(
				() => ({ [`__scope${n}`]: { ...m, [n]: g } }),
				[m, g]
			);
		};
	};
	return (c.scopeName = n), [i, wA(c, ...l)];
}
function wA(...n) {
	const l = n[0];
	if (n.length === 1) return l;
	const o = () => {
		const i = n.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
		return function (u) {
			const d = i.reduce((m, { useScope: g, scopeName: p }) => {
				const x = g(u)[`__scope${p}`];
				return { ...m, ...x };
			}, {});
			return v.useMemo(() => ({ [`__scope${l.scopeName}`]: d }), [d]);
		};
	};
	return (o.scopeName = l.scopeName), o;
}
function ze(n) {
	const l = v.useRef(n);
	return (
		v.useEffect(() => {
			l.current = n;
		}),
		v.useMemo(
			() =>
				(...o) => {
					var i;
					return (i = l.current) == null ? void 0 : i.call(l, ...o);
				},
			[]
		)
	);
}
function td({ prop: n, defaultProp: l, onChange: o = () => {} }) {
	const [i, c] = EA({ defaultProp: l, onChange: o }),
		u = n !== void 0,
		d = u ? n : i,
		m = ze(o),
		g = v.useCallback(
			(p) => {
				if (u) {
					const x = typeof p == "function" ? p(n) : p;
					x !== n && m(x);
				} else c(p);
			},
			[u, n, c, m]
		);
	return [d, g];
}
function EA({ defaultProp: n, onChange: l }) {
	const o = v.useState(n),
		[i] = o,
		c = v.useRef(i),
		u = ze(l);
	return (
		v.useEffect(() => {
			c.current !== i && (u(i), (c.current = i));
		}, [i, c, u]),
		o
	);
}
function AA(n) {
	const l = v.useRef({ value: n, previous: n });
	return v.useMemo(
		() => (
			l.current.value !== n &&
				((l.current.previous = l.current.value), (l.current.value = n)),
			l.current.previous
		),
		[n]
	);
}
var Qe =
	globalThis != null && globalThis.document ? v.useLayoutEffect : () => {};
function js(n) {
	const [l, o] = v.useState(void 0);
	return (
		Qe(() => {
			if (n) {
				o({ width: n.offsetWidth, height: n.offsetHeight });
				const i = new ResizeObserver((c) => {
					if (!Array.isArray(c) || !c.length) return;
					const u = c[0];
					let d, m;
					if ("borderBoxSize" in u) {
						const g = u.borderBoxSize,
							p = Array.isArray(g) ? g[0] : g;
						(d = p.inlineSize), (m = p.blockSize);
					} else (d = n.offsetWidth), (m = n.offsetHeight);
					o({ width: d, height: m });
				});
				return (
					i.observe(n, { box: "border-box" }), () => i.unobserve(n)
				);
			} else o(void 0);
		}, [n]),
		l
	);
}
var So = ay();
const nd = ny(So);
var CA = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"span",
		"svg",
		"ul",
	],
	qe = CA.reduce((n, l) => {
		const o = vn(`Primitive.${l}`),
			i = v.forwardRef((c, u) => {
				const { asChild: d, ...m } = c,
					g = d ? o : l;
				return (
					typeof window < "u" &&
						(window[Symbol.for("radix-ui")] = !0),
					h.jsx(g, { ...m, ref: u })
				);
			});
		return (i.displayName = `Primitive.${l}`), { ...n, [l]: i };
	}, {});
function RA(n, l) {
	n && So.flushSync(() => n.dispatchEvent(l));
}
var ad = "Switch",
	[NA, XO] = Rt(ad),
	[TA, MA] = NA(ad),
	$y = v.forwardRef((n, l) => {
		const {
				__scopeSwitch: o,
				name: i,
				checked: c,
				defaultChecked: u,
				required: d,
				disabled: m,
				value: g = "on",
				onCheckedChange: p,
				form: y,
				...x
			} = n,
			[S, E] = v.useState(null),
			C = Se(l, (D) => E(D)),
			A = v.useRef(!1),
			R = S ? y || !!S.closest("form") : !0,
			[M = !1, k] = td({ prop: c, defaultProp: u, onChange: p });
		return h.jsxs(TA, {
			scope: o,
			checked: M,
			disabled: m,
			children: [
				h.jsx(qe.button, {
					type: "button",
					role: "switch",
					"aria-checked": M,
					"aria-required": d,
					"data-state": Xy(M),
					"data-disabled": m ? "" : void 0,
					disabled: m,
					value: g,
					...x,
					ref: C,
					onClick: ie(n.onClick, (D) => {
						k((L) => !L),
							R &&
								((A.current = D.isPropagationStopped()),
								A.current || D.stopPropagation());
					}),
				}),
				R &&
					h.jsx(OA, {
						control: S,
						bubbles: !A.current,
						name: i,
						value: g,
						checked: M,
						required: d,
						disabled: m,
						form: y,
						style: { transform: "translateX(-100%)" },
					}),
			],
		});
	});
$y.displayName = ad;
var Yy = "SwitchThumb",
	qy = v.forwardRef((n, l) => {
		const { __scopeSwitch: o, ...i } = n,
			c = MA(Yy, o);
		return h.jsx(qe.span, {
			"data-state": Xy(c.checked),
			"data-disabled": c.disabled ? "" : void 0,
			...i,
			ref: l,
		});
	});
qy.displayName = Yy;
var OA = (n) => {
	const { control: l, checked: o, bubbles: i = !0, ...c } = n,
		u = v.useRef(null),
		d = AA(o),
		m = js(l);
	return (
		v.useEffect(() => {
			const g = u.current,
				p = window.HTMLInputElement.prototype,
				x = Object.getOwnPropertyDescriptor(p, "checked").set;
			if (d !== o && x) {
				const S = new Event("click", { bubbles: i });
				x.call(g, o), g.dispatchEvent(S);
			}
		}, [d, o, i]),
		h.jsx("input", {
			type: "checkbox",
			"aria-hidden": !0,
			defaultChecked: o,
			...c,
			tabIndex: -1,
			ref: u,
			style: {
				...n.style,
				...m,
				position: "absolute",
				pointerEvents: "none",
				opacity: 0,
				margin: 0,
			},
		})
	);
};
function Xy(n) {
	return n ? "checked" : "unchecked";
}
var _A = $y,
	DA = qy;
function jA({ className: n, ...l }) {
	return h.jsx(_A, {
		"data-slot": "switch",
		className: De(
			"peer inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full border border-transparent transition-colors shadow-sm outline-none",
			"data-[state=checked]:bg-neutral-900 dark:data-[state=checked]:bg-neutral-100",
			"data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-700",
			"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			"disabled:cursor-not-allowed disabled:opacity-50",
			n
		),
		...l,
		children: h.jsx(DA, {
			"data-slot": "switch-thumb",
			className: De(
				"pointer-events-none block size-4 rounded-full bg-white shadow transition-transform",
				"data-[state=checked]:translate-x-4",
				"data-[state=unchecked]:translate-x-0",
				"dark:bg-neutral-900"
			),
		}),
	});
}
function rd({ asText: n = !1 }) {
	const [l, o] = v.useState(() => {
		const c = localStorage.getItem("theme");
		return (
			c === "dark" ||
			(!c && window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	});
	v.useEffect(() => {
		l
			? (document.documentElement.classList.add("dark"),
			  localStorage.setItem("theme", "dark"))
			: (document.documentElement.classList.remove("dark"),
			  localStorage.setItem("theme", "light"));
	}, [l]);
	const i = () => o((c) => !c);
	return h.jsx("div", {
		className: "flex items-center gap-2",
		children: n
			? h.jsx("span", {
					onClick: i,
					className: "underline text-sm cursor-pointer p-2",
					children: l
						? "Switch to Light Theme"
						: "Switch to Dark Theme",
			  })
			: h.jsx(jA, {
					checked: l,
					onCheckedChange: o,
					className: "cursor-pointer",
			  }),
	});
}
function ld(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n);
	v.useEffect(() => {
		const i = (c) => {
			c.key === "Escape" && o(c);
		};
		return (
			l.addEventListener("keydown", i, { capture: !0 }),
			() => l.removeEventListener("keydown", i, { capture: !0 })
		);
	}, [o, l]);
}
var zA = "DismissableLayer",
	zf = "dismissableLayer.update",
	PA = "dismissableLayer.pointerDownOutside",
	LA = "dismissableLayer.focusOutside",
	xg,
	Vy = v.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	od = v.forwardRef((n, l) => {
		const {
				disableOutsidePointerEvents: o = !1,
				onEscapeKeyDown: i,
				onPointerDownOutside: c,
				onFocusOutside: u,
				onInteractOutside: d,
				onDismiss: m,
				...g
			} = n,
			p = v.useContext(Vy),
			[y, x] = v.useState(null),
			S =
				(y == null ? void 0 : y.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, E] = v.useState({}),
			C = Se(l, (P) => x(P)),
			A = Array.from(p.layers),
			[R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
			M = A.indexOf(R),
			k = y ? A.indexOf(y) : -1,
			D = p.layersWithOutsidePointerEventsDisabled.size > 0,
			L = k >= M,
			_ = kA((P) => {
				const X = P.target,
					ne = [...p.branches].some((le) => le.contains(X));
				!L ||
					ne ||
					(c == null || c(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S),
			q = BA((P) => {
				const X = P.target;
				[...p.branches].some((le) => le.contains(X)) ||
					(u == null || u(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S);
		return (
			ld((P) => {
				k === p.layers.size - 1 &&
					(i == null || i(P),
					!P.defaultPrevented && m && (P.preventDefault(), m()));
			}, S),
			v.useEffect(() => {
				if (y)
					return (
						o &&
							(p.layersWithOutsidePointerEventsDisabled.size ===
								0 &&
								((xg = S.body.style.pointerEvents),
								(S.body.style.pointerEvents = "none")),
							p.layersWithOutsidePointerEventsDisabled.add(y)),
						p.layers.add(y),
						Sg(),
						() => {
							o &&
								p.layersWithOutsidePointerEventsDisabled
									.size === 1 &&
								(S.body.style.pointerEvents = xg);
						}
					);
			}, [y, S, o, p]),
			v.useEffect(
				() => () => {
					y &&
						(p.layers.delete(y),
						p.layersWithOutsidePointerEventsDisabled.delete(y),
						Sg());
				},
				[y, p]
			),
			v.useEffect(() => {
				const P = () => E({});
				return (
					document.addEventListener(zf, P),
					() => document.removeEventListener(zf, P)
				);
			}, []),
			h.jsx(qe.div, {
				...g,
				ref: C,
				style: {
					pointerEvents: D ? (L ? "auto" : "none") : void 0,
					...n.style,
				},
				onFocusCapture: ie(n.onFocusCapture, q.onFocusCapture),
				onBlurCapture: ie(n.onBlurCapture, q.onBlurCapture),
				onPointerDownCapture: ie(
					n.onPointerDownCapture,
					_.onPointerDownCapture
				),
			})
		);
	});
od.displayName = zA;
var UA = "DismissableLayerBranch",
	HA = v.forwardRef((n, l) => {
		const o = v.useContext(Vy),
			i = v.useRef(null),
			c = Se(l, i);
		return (
			v.useEffect(() => {
				const u = i.current;
				if (u)
					return (
						o.branches.add(u),
						() => {
							o.branches.delete(u);
						}
					);
			}, [o.branches]),
			h.jsx(qe.div, { ...n, ref: c })
		);
	});
HA.displayName = UA;
function kA(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1),
		c = v.useRef(() => {});
	return (
		v.useEffect(() => {
			const u = (m) => {
					if (m.target && !i.current) {
						let g = function () {
							Ky(PA, o, p, { discrete: !0 });
						};
						const p = { originalEvent: m };
						m.pointerType === "touch"
							? (l.removeEventListener("click", c.current),
							  (c.current = g),
							  l.addEventListener("click", c.current, {
									once: !0,
							  }))
							: g();
					} else l.removeEventListener("click", c.current);
					i.current = !1;
				},
				d = window.setTimeout(() => {
					l.addEventListener("pointerdown", u);
				}, 0);
			return () => {
				window.clearTimeout(d),
					l.removeEventListener("pointerdown", u),
					l.removeEventListener("click", c.current);
			};
		}, [l, o]),
		{ onPointerDownCapture: () => (i.current = !0) }
	);
}
function BA(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1);
	return (
		v.useEffect(() => {
			const c = (u) => {
				u.target &&
					!i.current &&
					Ky(LA, o, { originalEvent: u }, { discrete: !1 });
			};
			return (
				l.addEventListener("focusin", c),
				() => l.removeEventListener("focusin", c)
			);
		}, [l, o]),
		{
			onFocusCapture: () => (i.current = !0),
			onBlurCapture: () => (i.current = !1),
		}
	);
}
function Sg() {
	const n = new CustomEvent(zf);
	document.dispatchEvent(n);
}
function Ky(n, l, o, { discrete: i }) {
	const c = o.originalEvent.target,
		u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
	l && c.addEventListener(n, l, { once: !0 }),
		i ? RA(c, u) : c.dispatchEvent(u);
}
var GA = bo[" useId ".trim().toString()] || (() => {}),
	$A = 0;
function Kr(n) {
	const [l, o] = v.useState(GA());
	return (
		Qe(() => {
			o((i) => i ?? String($A++));
		}, [n]),
		n || (l ? `radix-${l}` : "")
	);
}
const YA = ["top", "right", "bottom", "left"],
	ba = Math.min,
	kt = Math.max,
	gs = Math.round,
	Wi = Math.floor,
	pn = (n) => ({ x: n, y: n }),
	qA = { left: "right", right: "left", bottom: "top", top: "bottom" },
	XA = { start: "end", end: "start" };
function Pf(n, l, o) {
	return kt(n, ba(l, o));
}
function Hn(n, l) {
	return typeof n == "function" ? n(l) : n;
}
function kn(n) {
	return n.split("-")[0];
}
function ll(n) {
	return n.split("-")[1];
}
function id(n) {
	return n === "x" ? "y" : "x";
}
function sd(n) {
	return n === "y" ? "height" : "width";
}
function xa(n) {
	return ["top", "bottom"].includes(kn(n)) ? "y" : "x";
}
function cd(n) {
	return id(xa(n));
}
function VA(n, l, o) {
	o === void 0 && (o = !1);
	const i = ll(n),
		c = cd(n),
		u = sd(c);
	let d =
		c === "x"
			? i === (o ? "end" : "start")
				? "right"
				: "left"
			: i === "start"
			? "bottom"
			: "top";
	return l.reference[u] > l.floating[u] && (d = ys(d)), [d, ys(d)];
}
function KA(n) {
	const l = ys(n);
	return [Lf(n), l, Lf(l)];
}
function Lf(n) {
	return n.replace(/start|end/g, (l) => XA[l]);
}
function QA(n, l, o) {
	const i = ["left", "right"],
		c = ["right", "left"],
		u = ["top", "bottom"],
		d = ["bottom", "top"];
	switch (n) {
		case "top":
		case "bottom":
			return o ? (l ? c : i) : l ? i : c;
		case "left":
		case "right":
			return l ? u : d;
		default:
			return [];
	}
}
function ZA(n, l, o, i) {
	const c = ll(n);
	let u = QA(kn(n), o === "start", i);
	return (
		c && ((u = u.map((d) => d + "-" + c)), l && (u = u.concat(u.map(Lf)))),
		u
	);
}
function ys(n) {
	return n.replace(/left|right|bottom|top/g, (l) => qA[l]);
}
function IA(n) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Qy(n) {
	return typeof n != "number"
		? IA(n)
		: { top: n, right: n, bottom: n, left: n };
}
function bs(n) {
	const { x: l, y: o, width: i, height: c } = n;
	return {
		width: i,
		height: c,
		top: o,
		left: l,
		right: l + i,
		bottom: o + c,
		x: l,
		y: o,
	};
}
function wg(n, l, o) {
	let { reference: i, floating: c } = n;
	const u = xa(l),
		d = cd(l),
		m = sd(d),
		g = kn(l),
		p = u === "y",
		y = i.x + i.width / 2 - c.width / 2,
		x = i.y + i.height / 2 - c.height / 2,
		S = i[m] / 2 - c[m] / 2;
	let E;
	switch (g) {
		case "top":
			E = { x: y, y: i.y - c.height };
			break;
		case "bottom":
			E = { x: y, y: i.y + i.height };
			break;
		case "right":
			E = { x: i.x + i.width, y: x };
			break;
		case "left":
			E = { x: i.x - c.width, y: x };
			break;
		default:
			E = { x: i.x, y: i.y };
	}
	switch (ll(l)) {
		case "start":
			E[d] -= S * (o && p ? -1 : 1);
			break;
		case "end":
			E[d] += S * (o && p ? -1 : 1);
			break;
	}
	return E;
}
const FA = async (n, l, o) => {
	const {
			placement: i = "bottom",
			strategy: c = "absolute",
			middleware: u = [],
			platform: d,
		} = o,
		m = u.filter(Boolean),
		g = await (d.isRTL == null ? void 0 : d.isRTL(l));
	let p = await d.getElementRects({ reference: n, floating: l, strategy: c }),
		{ x: y, y: x } = wg(p, i, g),
		S = i,
		E = {},
		C = 0;
	for (let A = 0; A < m.length; A++) {
		const { name: R, fn: M } = m[A],
			{
				x: k,
				y: D,
				data: L,
				reset: _,
			} = await M({
				x: y,
				y: x,
				initialPlacement: i,
				placement: S,
				strategy: c,
				middlewareData: E,
				rects: p,
				platform: d,
				elements: { reference: n, floating: l },
			});
		(y = k ?? y),
			(x = D ?? x),
			(E = { ...E, [R]: { ...E[R], ...L } }),
			_ &&
				C <= 50 &&
				(C++,
				typeof _ == "object" &&
					(_.placement && (S = _.placement),
					_.rects &&
						(p =
							_.rects === !0
								? await d.getElementRects({
										reference: n,
										floating: l,
										strategy: c,
								  })
								: _.rects),
					({ x: y, y: x } = wg(p, S, g))),
				(A = -1));
	}
	return { x: y, y: x, placement: S, strategy: c, middlewareData: E };
};
async function po(n, l) {
	var o;
	l === void 0 && (l = {});
	const { x: i, y: c, platform: u, rects: d, elements: m, strategy: g } = n,
		{
			boundary: p = "clippingAncestors",
			rootBoundary: y = "viewport",
			elementContext: x = "floating",
			altBoundary: S = !1,
			padding: E = 0,
		} = Hn(l, n),
		C = Qy(E),
		R = m[S ? (x === "floating" ? "reference" : "floating") : x],
		M = bs(
			await u.getClippingRect({
				element:
					(o = await (u.isElement == null
						? void 0
						: u.isElement(R))) == null || o
						? R
						: R.contextElement ||
						  (await (u.getDocumentElement == null
								? void 0
								: u.getDocumentElement(m.floating))),
				boundary: p,
				rootBoundary: y,
				strategy: g,
			})
		),
		k =
			x === "floating"
				? {
						x: i,
						y: c,
						width: d.floating.width,
						height: d.floating.height,
				  }
				: d.reference,
		D = await (u.getOffsetParent == null
			? void 0
			: u.getOffsetParent(m.floating)),
		L = (await (u.isElement == null ? void 0 : u.isElement(D)))
			? (await (u.getScale == null ? void 0 : u.getScale(D))) || {
					x: 1,
					y: 1,
			  }
			: { x: 1, y: 1 },
		_ = bs(
			u.convertOffsetParentRelativeRectToViewportRelativeRect
				? await u.convertOffsetParentRelativeRectToViewportRelativeRect(
						{ elements: m, rect: k, offsetParent: D, strategy: g }
				  )
				: k
		);
	return {
		top: (M.top - _.top + C.top) / L.y,
		bottom: (_.bottom - M.bottom + C.bottom) / L.y,
		left: (M.left - _.left + C.left) / L.x,
		right: (_.right - M.right + C.right) / L.x,
	};
}
const WA = (n) => ({
		name: "arrow",
		options: n,
		async fn(l) {
			const {
					x: o,
					y: i,
					placement: c,
					rects: u,
					platform: d,
					elements: m,
					middlewareData: g,
				} = l,
				{ element: p, padding: y = 0 } = Hn(n, l) || {};
			if (p == null) return {};
			const x = Qy(y),
				S = { x: o, y: i },
				E = cd(c),
				C = sd(E),
				A = await d.getDimensions(p),
				R = E === "y",
				M = R ? "top" : "left",
				k = R ? "bottom" : "right",
				D = R ? "clientHeight" : "clientWidth",
				L = u.reference[C] + u.reference[E] - S[E] - u.floating[C],
				_ = S[E] - u.reference[E],
				q = await (d.getOffsetParent == null
					? void 0
					: d.getOffsetParent(p));
			let P = q ? q[D] : 0;
			(!P || !(await (d.isElement == null ? void 0 : d.isElement(q)))) &&
				(P = m.floating[D] || u.floating[C]);
			const X = L / 2 - _ / 2,
				ne = P / 2 - A[C] / 2 - 1,
				le = ba(x[M], ne),
				de = ba(x[k], ne),
				oe = le,
				ve = P - A[C] - de,
				me = P / 2 - A[C] / 2 + X,
				fe = Pf(oe, me, ve),
				j =
					!g.arrow &&
					ll(c) != null &&
					me !== fe &&
					u.reference[C] / 2 - (me < oe ? le : de) - A[C] / 2 < 0,
				I = j ? (me < oe ? me - oe : me - ve) : 0;
			return {
				[E]: S[E] + I,
				data: {
					[E]: fe,
					centerOffset: me - fe - I,
					...(j && { alignmentOffset: I }),
				},
				reset: j,
			};
		},
	}),
	JA = function (n) {
		return (
			n === void 0 && (n = {}),
			{
				name: "flip",
				options: n,
				async fn(l) {
					var o, i;
					const {
							placement: c,
							middlewareData: u,
							rects: d,
							initialPlacement: m,
							platform: g,
							elements: p,
						} = l,
						{
							mainAxis: y = !0,
							crossAxis: x = !0,
							fallbackPlacements: S,
							fallbackStrategy: E = "bestFit",
							fallbackAxisSideDirection: C = "none",
							flipAlignment: A = !0,
							...R
						} = Hn(n, l);
					if ((o = u.arrow) != null && o.alignmentOffset) return {};
					const M = kn(c),
						k = xa(m),
						D = kn(m) === m,
						L = await (g.isRTL == null
							? void 0
							: g.isRTL(p.floating)),
						_ = S || (D || !A ? [ys(m)] : KA(m)),
						q = C !== "none";
					!S && q && _.push(...ZA(m, A, C, L));
					const P = [m, ..._],
						X = await po(l, R),
						ne = [];
					let le =
						((i = u.flip) == null ? void 0 : i.overflows) || [];
					if ((y && ne.push(X[M]), x)) {
						const me = VA(c, d, L);
						ne.push(X[me[0]], X[me[1]]);
					}
					if (
						((le = [...le, { placement: c, overflows: ne }]),
						!ne.every((me) => me <= 0))
					) {
						var de, oe;
						const me =
								(((de = u.flip) == null ? void 0 : de.index) ||
									0) + 1,
							fe = P[me];
						if (fe)
							return {
								data: { index: me, overflows: le },
								reset: { placement: fe },
							};
						let j =
							(oe = le
								.filter((I) => I.overflows[0] <= 0)
								.sort(
									(I, G) => I.overflows[1] - G.overflows[1]
								)[0]) == null
								? void 0
								: oe.placement;
						if (!j)
							switch (E) {
								case "bestFit": {
									var ve;
									const I =
										(ve = le
											.filter((G) => {
												if (q) {
													const J = xa(G.placement);
													return J === k || J === "y";
												}
												return !0;
											})
											.map((G) => [
												G.placement,
												G.overflows
													.filter((J) => J > 0)
													.reduce((J, N) => J + N, 0),
											])
											.sort((G, J) => G[1] - J[1])[0]) ==
										null
											? void 0
											: ve[0];
									I && (j = I);
									break;
								}
								case "initialPlacement":
									j = m;
									break;
							}
						if (c !== j) return { reset: { placement: j } };
					}
					return {};
				},
			}
		);
	};
function Eg(n, l) {
	return {
		top: n.top - l.height,
		right: n.right - l.width,
		bottom: n.bottom - l.height,
		left: n.left - l.width,
	};
}
function Ag(n) {
	return YA.some((l) => n[l] >= 0);
}
const eC = function (n) {
	return (
		n === void 0 && (n = {}),
		{
			name: "hide",
			options: n,
			async fn(l) {
				const { rects: o } = l,
					{ strategy: i = "referenceHidden", ...c } = Hn(n, l);
				switch (i) {
					case "referenceHidden": {
						const u = await po(l, {
								...c,
								elementContext: "reference",
							}),
							d = Eg(u, o.reference);
						return {
							data: {
								referenceHiddenOffsets: d,
								referenceHidden: Ag(d),
							},
						};
					}
					case "escaped": {
						const u = await po(l, { ...c, altBoundary: !0 }),
							d = Eg(u, o.floating);
						return { data: { escapedOffsets: d, escaped: Ag(d) } };
					}
					default:
						return {};
				}
			},
		}
	);
};
async function tC(n, l) {
	const { placement: o, platform: i, elements: c } = n,
		u = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)),
		d = kn(o),
		m = ll(o),
		g = xa(o) === "y",
		p = ["left", "top"].includes(d) ? -1 : 1,
		y = u && g ? -1 : 1,
		x = Hn(l, n);
	let {
		mainAxis: S,
		crossAxis: E,
		alignmentAxis: C,
	} = typeof x == "number"
		? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
		: {
				mainAxis: x.mainAxis || 0,
				crossAxis: x.crossAxis || 0,
				alignmentAxis: x.alignmentAxis,
		  };
	return (
		m && typeof C == "number" && (E = m === "end" ? C * -1 : C),
		g ? { x: E * y, y: S * p } : { x: S * p, y: E * y }
	);
}
const nC = function (n) {
		return (
			n === void 0 && (n = 0),
			{
				name: "offset",
				options: n,
				async fn(l) {
					var o, i;
					const { x: c, y: u, placement: d, middlewareData: m } = l,
						g = await tC(l, n);
					return d ===
						((o = m.offset) == null ? void 0 : o.placement) &&
						(i = m.arrow) != null &&
						i.alignmentOffset
						? {}
						: {
								x: c + g.x,
								y: u + g.y,
								data: { ...g, placement: d },
						  };
				},
			}
		);
	},
	aC = function (n) {
		return (
			n === void 0 && (n = {}),
			{
				name: "shift",
				options: n,
				async fn(l) {
					const { x: o, y: i, placement: c } = l,
						{
							mainAxis: u = !0,
							crossAxis: d = !1,
							limiter: m = {
								fn: (R) => {
									let { x: M, y: k } = R;
									return { x: M, y: k };
								},
							},
							...g
						} = Hn(n, l),
						p = { x: o, y: i },
						y = await po(l, g),
						x = xa(kn(c)),
						S = id(x);
					let E = p[S],
						C = p[x];
					if (u) {
						const R = S === "y" ? "top" : "left",
							M = S === "y" ? "bottom" : "right",
							k = E + y[R],
							D = E - y[M];
						E = Pf(k, E, D);
					}
					if (d) {
						const R = x === "y" ? "top" : "left",
							M = x === "y" ? "bottom" : "right",
							k = C + y[R],
							D = C - y[M];
						C = Pf(k, C, D);
					}
					const A = m.fn({ ...l, [S]: E, [x]: C });
					return {
						...A,
						data: {
							x: A.x - o,
							y: A.y - i,
							enabled: { [S]: u, [x]: d },
						},
					};
				},
			}
		);
	},
	rC = function (n) {
		return (
			n === void 0 && (n = {}),
			{
				options: n,
				fn(l) {
					const {
							x: o,
							y: i,
							placement: c,
							rects: u,
							middlewareData: d,
						} = l,
						{
							offset: m = 0,
							mainAxis: g = !0,
							crossAxis: p = !0,
						} = Hn(n, l),
						y = { x: o, y: i },
						x = xa(c),
						S = id(x);
					let E = y[S],
						C = y[x];
					const A = Hn(m, l),
						R =
							typeof A == "number"
								? { mainAxis: A, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...A };
					if (g) {
						const D = S === "y" ? "height" : "width",
							L = u.reference[S] - u.floating[D] + R.mainAxis,
							_ = u.reference[S] + u.reference[D] - R.mainAxis;
						E < L ? (E = L) : E > _ && (E = _);
					}
					if (p) {
						var M, k;
						const D = S === "y" ? "width" : "height",
							L = ["top", "left"].includes(kn(c)),
							_ =
								u.reference[x] -
								u.floating[D] +
								((L &&
									((M = d.offset) == null ? void 0 : M[x])) ||
									0) +
								(L ? 0 : R.crossAxis),
							q =
								u.reference[x] +
								u.reference[D] +
								(L
									? 0
									: ((k = d.offset) == null
											? void 0
											: k[x]) || 0) -
								(L ? R.crossAxis : 0);
						C < _ ? (C = _) : C > q && (C = q);
					}
					return { [S]: E, [x]: C };
				},
			}
		);
	},
	lC = function (n) {
		return (
			n === void 0 && (n = {}),
			{
				name: "size",
				options: n,
				async fn(l) {
					var o, i;
					const {
							placement: c,
							rects: u,
							platform: d,
							elements: m,
						} = l,
						{ apply: g = () => {}, ...p } = Hn(n, l),
						y = await po(l, p),
						x = kn(c),
						S = ll(c),
						E = xa(c) === "y",
						{ width: C, height: A } = u.floating;
					let R, M;
					x === "top" || x === "bottom"
						? ((R = x),
						  (M =
								S ===
								((await (d.isRTL == null
									? void 0
									: d.isRTL(m.floating)))
									? "start"
									: "end")
									? "left"
									: "right"))
						: ((M = x), (R = S === "end" ? "top" : "bottom"));
					const k = A - y.top - y.bottom,
						D = C - y.left - y.right,
						L = ba(A - y[R], k),
						_ = ba(C - y[M], D),
						q = !l.middlewareData.shift;
					let P = L,
						X = _;
					if (
						((o = l.middlewareData.shift) != null &&
							o.enabled.x &&
							(X = D),
						(i = l.middlewareData.shift) != null &&
							i.enabled.y &&
							(P = k),
						q && !S)
					) {
						const le = kt(y.left, 0),
							de = kt(y.right, 0),
							oe = kt(y.top, 0),
							ve = kt(y.bottom, 0);
						E
							? (X =
									C -
									2 *
										(le !== 0 || de !== 0
											? le + de
											: kt(y.left, y.right)))
							: (P =
									A -
									2 *
										(oe !== 0 || ve !== 0
											? oe + ve
											: kt(y.top, y.bottom)));
					}
					await g({ ...l, availableWidth: X, availableHeight: P });
					const ne = await d.getDimensions(m.floating);
					return C !== ne.width || A !== ne.height
						? { reset: { rects: !0 } }
						: {};
				},
			}
		);
	};
function zs() {
	return typeof window < "u";
}
function ol(n) {
	return Zy(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Gt(n) {
	var l;
	return (
		(n == null || (l = n.ownerDocument) == null ? void 0 : l.defaultView) ||
		window
	);
}
function yn(n) {
	var l;
	return (l = (Zy(n) ? n.ownerDocument : n.document) || window.document) ==
		null
		? void 0
		: l.documentElement;
}
function Zy(n) {
	return zs() ? n instanceof Node || n instanceof Gt(n).Node : !1;
}
function rn(n) {
	return zs() ? n instanceof Element || n instanceof Gt(n).Element : !1;
}
function gn(n) {
	return zs()
		? n instanceof HTMLElement || n instanceof Gt(n).HTMLElement
		: !1;
}
function Cg(n) {
	return !zs() || typeof ShadowRoot > "u"
		? !1
		: n instanceof ShadowRoot || n instanceof Gt(n).ShadowRoot;
}
function wo(n) {
	const { overflow: l, overflowX: o, overflowY: i, display: c } = ln(n);
	return (
		/auto|scroll|overlay|hidden|clip/.test(l + i + o) &&
		!["inline", "contents"].includes(c)
	);
}
function oC(n) {
	return ["table", "td", "th"].includes(ol(n));
}
function Ps(n) {
	return [":popover-open", ":modal"].some((l) => {
		try {
			return n.matches(l);
		} catch {
			return !1;
		}
	});
}
function ud(n) {
	const l = fd(),
		o = rn(n) ? ln(n) : n;
	return (
		["transform", "translate", "scale", "rotate", "perspective"].some((i) =>
			o[i] ? o[i] !== "none" : !1
		) ||
		(o.containerType ? o.containerType !== "normal" : !1) ||
		(!l && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
		(!l && (o.filter ? o.filter !== "none" : !1)) ||
		[
			"transform",
			"translate",
			"scale",
			"rotate",
			"perspective",
			"filter",
		].some((i) => (o.willChange || "").includes(i)) ||
		["paint", "layout", "strict", "content"].some((i) =>
			(o.contain || "").includes(i)
		)
	);
}
function iC(n) {
	let l = Sa(n);
	for (; gn(l) && !Jr(l); ) {
		if (ud(l)) return l;
		if (Ps(l)) return null;
		l = Sa(l);
	}
	return null;
}
function fd() {
	return typeof CSS > "u" || !CSS.supports
		? !1
		: CSS.supports("-webkit-backdrop-filter", "none");
}
function Jr(n) {
	return ["html", "body", "#document"].includes(ol(n));
}
function ln(n) {
	return Gt(n).getComputedStyle(n);
}
function Ls(n) {
	return rn(n)
		? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
		: { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Sa(n) {
	if (ol(n) === "html") return n;
	const l = n.assignedSlot || n.parentNode || (Cg(n) && n.host) || yn(n);
	return Cg(l) ? l.host : l;
}
function Iy(n) {
	const l = Sa(n);
	return Jr(l)
		? n.ownerDocument
			? n.ownerDocument.body
			: n.body
		: gn(l) && wo(l)
		? l
		: Iy(l);
}
function vo(n, l, o) {
	var i;
	l === void 0 && (l = []), o === void 0 && (o = !0);
	const c = Iy(n),
		u = c === ((i = n.ownerDocument) == null ? void 0 : i.body),
		d = Gt(c);
	if (u) {
		const m = Uf(d);
		return l.concat(
			d,
			d.visualViewport || [],
			wo(c) ? c : [],
			m && o ? vo(m) : []
		);
	}
	return l.concat(c, vo(c, [], o));
}
function Uf(n) {
	return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Fy(n) {
	const l = ln(n);
	let o = parseFloat(l.width) || 0,
		i = parseFloat(l.height) || 0;
	const c = gn(n),
		u = c ? n.offsetWidth : o,
		d = c ? n.offsetHeight : i,
		m = gs(o) !== u || gs(i) !== d;
	return m && ((o = u), (i = d)), { width: o, height: i, $: m };
}
function dd(n) {
	return rn(n) ? n : n.contextElement;
}
function Qr(n) {
	const l = dd(n);
	if (!gn(l)) return pn(1);
	const o = l.getBoundingClientRect(),
		{ width: i, height: c, $: u } = Fy(l);
	let d = (u ? gs(o.width) : o.width) / i,
		m = (u ? gs(o.height) : o.height) / c;
	return (
		(!d || !Number.isFinite(d)) && (d = 1),
		(!m || !Number.isFinite(m)) && (m = 1),
		{ x: d, y: m }
	);
}
const sC = pn(0);
function Wy(n) {
	const l = Gt(n);
	return !fd() || !l.visualViewport
		? sC
		: { x: l.visualViewport.offsetLeft, y: l.visualViewport.offsetTop };
}
function cC(n, l, o) {
	return l === void 0 && (l = !1), !o || (l && o !== Gt(n)) ? !1 : l;
}
function Qa(n, l, o, i) {
	l === void 0 && (l = !1), o === void 0 && (o = !1);
	const c = n.getBoundingClientRect(),
		u = dd(n);
	let d = pn(1);
	l && (i ? rn(i) && (d = Qr(i)) : (d = Qr(n)));
	const m = cC(u, o, i) ? Wy(u) : pn(0);
	let g = (c.left + m.x) / d.x,
		p = (c.top + m.y) / d.y,
		y = c.width / d.x,
		x = c.height / d.y;
	if (u) {
		const S = Gt(u),
			E = i && rn(i) ? Gt(i) : i;
		let C = S,
			A = Uf(C);
		for (; A && i && E !== C; ) {
			const R = Qr(A),
				M = A.getBoundingClientRect(),
				k = ln(A),
				D = M.left + (A.clientLeft + parseFloat(k.paddingLeft)) * R.x,
				L = M.top + (A.clientTop + parseFloat(k.paddingTop)) * R.y;
			(g *= R.x),
				(p *= R.y),
				(y *= R.x),
				(x *= R.y),
				(g += D),
				(p += L),
				(C = Gt(A)),
				(A = Uf(C));
		}
	}
	return bs({ width: y, height: x, x: g, y: p });
}
function md(n, l) {
	const o = Ls(n).scrollLeft;
	return l ? l.left + o : Qa(yn(n)).left + o;
}
function Jy(n, l, o) {
	o === void 0 && (o = !1);
	const i = n.getBoundingClientRect(),
		c = i.left + l.scrollLeft - (o ? 0 : md(n, i)),
		u = i.top + l.scrollTop;
	return { x: c, y: u };
}
function uC(n) {
	let { elements: l, rect: o, offsetParent: i, strategy: c } = n;
	const u = c === "fixed",
		d = yn(i),
		m = l ? Ps(l.floating) : !1;
	if (i === d || (m && u)) return o;
	let g = { scrollLeft: 0, scrollTop: 0 },
		p = pn(1);
	const y = pn(0),
		x = gn(i);
	if (
		(x || (!x && !u)) &&
		((ol(i) !== "body" || wo(d)) && (g = Ls(i)), gn(i))
	) {
		const E = Qa(i);
		(p = Qr(i)), (y.x = E.x + i.clientLeft), (y.y = E.y + i.clientTop);
	}
	const S = d && !x && !u ? Jy(d, g, !0) : pn(0);
	return {
		width: o.width * p.x,
		height: o.height * p.y,
		x: o.x * p.x - g.scrollLeft * p.x + y.x + S.x,
		y: o.y * p.y - g.scrollTop * p.y + y.y + S.y,
	};
}
function fC(n) {
	return Array.from(n.getClientRects());
}
function dC(n) {
	const l = yn(n),
		o = Ls(n),
		i = n.ownerDocument.body,
		c = kt(l.scrollWidth, l.clientWidth, i.scrollWidth, i.clientWidth),
		u = kt(l.scrollHeight, l.clientHeight, i.scrollHeight, i.clientHeight);
	let d = -o.scrollLeft + md(n);
	const m = -o.scrollTop;
	return (
		ln(i).direction === "rtl" &&
			(d += kt(l.clientWidth, i.clientWidth) - c),
		{ width: c, height: u, x: d, y: m }
	);
}
function mC(n, l) {
	const o = Gt(n),
		i = yn(n),
		c = o.visualViewport;
	let u = i.clientWidth,
		d = i.clientHeight,
		m = 0,
		g = 0;
	if (c) {
		(u = c.width), (d = c.height);
		const p = fd();
		(!p || (p && l === "fixed")) && ((m = c.offsetLeft), (g = c.offsetTop));
	}
	return { width: u, height: d, x: m, y: g };
}
function hC(n, l) {
	const o = Qa(n, !0, l === "fixed"),
		i = o.top + n.clientTop,
		c = o.left + n.clientLeft,
		u = gn(n) ? Qr(n) : pn(1),
		d = n.clientWidth * u.x,
		m = n.clientHeight * u.y,
		g = c * u.x,
		p = i * u.y;
	return { width: d, height: m, x: g, y: p };
}
function Rg(n, l, o) {
	let i;
	if (l === "viewport") i = mC(n, o);
	else if (l === "document") i = dC(yn(n));
	else if (rn(l)) i = hC(l, o);
	else {
		const c = Wy(n);
		i = { x: l.x - c.x, y: l.y - c.y, width: l.width, height: l.height };
	}
	return bs(i);
}
function eb(n, l) {
	const o = Sa(n);
	return o === l || !rn(o) || Jr(o)
		? !1
		: ln(o).position === "fixed" || eb(o, l);
}
function pC(n, l) {
	const o = l.get(n);
	if (o) return o;
	let i = vo(n, [], !1).filter((m) => rn(m) && ol(m) !== "body"),
		c = null;
	const u = ln(n).position === "fixed";
	let d = u ? Sa(n) : n;
	for (; rn(d) && !Jr(d); ) {
		const m = ln(d),
			g = ud(d);
		!g && m.position === "fixed" && (c = null),
			(
				u
					? !g && !c
					: (!g &&
							m.position === "static" &&
							!!c &&
							["absolute", "fixed"].includes(c.position)) ||
					  (wo(d) && !g && eb(n, d))
			)
				? (i = i.filter((y) => y !== d))
				: (c = m),
			(d = Sa(d));
	}
	return l.set(n, i), i;
}
function vC(n) {
	let { element: l, boundary: o, rootBoundary: i, strategy: c } = n;
	const d = [
			...(o === "clippingAncestors"
				? Ps(l)
					? []
					: pC(l, this._c)
				: [].concat(o)),
			i,
		],
		m = d[0],
		g = d.reduce((p, y) => {
			const x = Rg(l, y, c);
			return (
				(p.top = kt(x.top, p.top)),
				(p.right = ba(x.right, p.right)),
				(p.bottom = ba(x.bottom, p.bottom)),
				(p.left = kt(x.left, p.left)),
				p
			);
		}, Rg(l, m, c));
	return {
		width: g.right - g.left,
		height: g.bottom - g.top,
		x: g.left,
		y: g.top,
	};
}
function gC(n) {
	const { width: l, height: o } = Fy(n);
	return { width: l, height: o };
}
function yC(n, l, o) {
	const i = gn(l),
		c = yn(l),
		u = o === "fixed",
		d = Qa(n, !0, u, l);
	let m = { scrollLeft: 0, scrollTop: 0 };
	const g = pn(0);
	if (i || (!i && !u))
		if (((ol(l) !== "body" || wo(c)) && (m = Ls(l)), i)) {
			const S = Qa(l, !0, u, l);
			(g.x = S.x + l.clientLeft), (g.y = S.y + l.clientTop);
		} else c && (g.x = md(c));
	const p = c && !i && !u ? Jy(c, m) : pn(0),
		y = d.left + m.scrollLeft - g.x - p.x,
		x = d.top + m.scrollTop - g.y - p.y;
	return { x: y, y: x, width: d.width, height: d.height };
}
function pf(n) {
	return ln(n).position === "static";
}
function Ng(n, l) {
	if (!gn(n) || ln(n).position === "fixed") return null;
	if (l) return l(n);
	let o = n.offsetParent;
	return yn(n) === o && (o = o.ownerDocument.body), o;
}
function tb(n, l) {
	const o = Gt(n);
	if (Ps(n)) return o;
	if (!gn(n)) {
		let c = Sa(n);
		for (; c && !Jr(c); ) {
			if (rn(c) && !pf(c)) return c;
			c = Sa(c);
		}
		return o;
	}
	let i = Ng(n, l);
	for (; i && oC(i) && pf(i); ) i = Ng(i, l);
	return i && Jr(i) && pf(i) && !ud(i) ? o : i || iC(n) || o;
}
const bC = async function (n) {
	const l = this.getOffsetParent || tb,
		o = this.getDimensions,
		i = await o(n.floating);
	return {
		reference: yC(n.reference, await l(n.floating), n.strategy),
		floating: { x: 0, y: 0, width: i.width, height: i.height },
	};
};
function xC(n) {
	return ln(n).direction === "rtl";
}
const SC = {
	convertOffsetParentRelativeRectToViewportRelativeRect: uC,
	getDocumentElement: yn,
	getClippingRect: vC,
	getOffsetParent: tb,
	getElementRects: bC,
	getClientRects: fC,
	getDimensions: gC,
	getScale: Qr,
	isElement: rn,
	isRTL: xC,
};
function nb(n, l) {
	return (
		n.x === l.x &&
		n.y === l.y &&
		n.width === l.width &&
		n.height === l.height
	);
}
function wC(n, l) {
	let o = null,
		i;
	const c = yn(n);
	function u() {
		var m;
		clearTimeout(i), (m = o) == null || m.disconnect(), (o = null);
	}
	function d(m, g) {
		m === void 0 && (m = !1), g === void 0 && (g = 1), u();
		const p = n.getBoundingClientRect(),
			{ left: y, top: x, width: S, height: E } = p;
		if ((m || l(), !S || !E)) return;
		const C = Wi(x),
			A = Wi(c.clientWidth - (y + S)),
			R = Wi(c.clientHeight - (x + E)),
			M = Wi(y),
			D = {
				rootMargin: -C + "px " + -A + "px " + -R + "px " + -M + "px",
				threshold: kt(0, ba(1, g)) || 1,
			};
		let L = !0;
		function _(q) {
			const P = q[0].intersectionRatio;
			if (P !== g) {
				if (!L) return d();
				P
					? d(!1, P)
					: (i = setTimeout(() => {
							d(!1, 1e-7);
					  }, 1e3));
			}
			P === 1 && !nb(p, n.getBoundingClientRect()) && d(), (L = !1);
		}
		try {
			o = new IntersectionObserver(_, { ...D, root: c.ownerDocument });
		} catch {
			o = new IntersectionObserver(_, D);
		}
		o.observe(n);
	}
	return d(!0), u;
}
function hd(n, l, o, i) {
	i === void 0 && (i = {});
	const {
			ancestorScroll: c = !0,
			ancestorResize: u = !0,
			elementResize: d = typeof ResizeObserver == "function",
			layoutShift: m = typeof IntersectionObserver == "function",
			animationFrame: g = !1,
		} = i,
		p = dd(n),
		y = c || u ? [...(p ? vo(p) : []), ...vo(l)] : [];
	y.forEach((M) => {
		c && M.addEventListener("scroll", o, { passive: !0 }),
			u && M.addEventListener("resize", o);
	});
	const x = p && m ? wC(p, o) : null;
	let S = -1,
		E = null;
	d &&
		((E = new ResizeObserver((M) => {
			let [k] = M;
			k &&
				k.target === p &&
				E &&
				(E.unobserve(l),
				cancelAnimationFrame(S),
				(S = requestAnimationFrame(() => {
					var D;
					(D = E) == null || D.observe(l);
				}))),
				o();
		})),
		p && !g && E.observe(p),
		E.observe(l));
	let C,
		A = g ? Qa(n) : null;
	g && R();
	function R() {
		const M = Qa(n);
		A && !nb(A, M) && o(), (A = M), (C = requestAnimationFrame(R));
	}
	return (
		o(),
		() => {
			var M;
			y.forEach((k) => {
				c && k.removeEventListener("scroll", o),
					u && k.removeEventListener("resize", o);
			}),
				x == null || x(),
				(M = E) == null || M.disconnect(),
				(E = null),
				g && cancelAnimationFrame(C);
		}
	);
}
const EC = nC,
	AC = aC,
	CC = JA,
	RC = lC,
	NC = eC,
	Tg = WA,
	TC = rC,
	MC = (n, l, o) => {
		const i = new Map(),
			c = { platform: SC, ...o },
			u = { ...c.platform, _c: i };
		return FA(n, l, { ...c, platform: u });
	};
var cs = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function xs(n, l) {
	if (n === l) return !0;
	if (typeof n != typeof l) return !1;
	if (typeof n == "function" && n.toString() === l.toString()) return !0;
	let o, i, c;
	if (n && l && typeof n == "object") {
		if (Array.isArray(n)) {
			if (((o = n.length), o !== l.length)) return !1;
			for (i = o; i-- !== 0; ) if (!xs(n[i], l[i])) return !1;
			return !0;
		}
		if (((c = Object.keys(n)), (o = c.length), o !== Object.keys(l).length))
			return !1;
		for (i = o; i-- !== 0; )
			if (!{}.hasOwnProperty.call(l, c[i])) return !1;
		for (i = o; i-- !== 0; ) {
			const u = c[i];
			if (!(u === "_owner" && n.$$typeof) && !xs(n[u], l[u])) return !1;
		}
		return !0;
	}
	return n !== n && l !== l;
}
function ab(n) {
	return typeof window > "u"
		? 1
		: (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mg(n, l) {
	const o = ab(n);
	return Math.round(l * o) / o;
}
function vf(n) {
	const l = v.useRef(n);
	return (
		cs(() => {
			l.current = n;
		}),
		l
	);
}
function pd(n) {
	n === void 0 && (n = {});
	const {
			placement: l = "bottom",
			strategy: o = "absolute",
			middleware: i = [],
			platform: c,
			elements: { reference: u, floating: d } = {},
			transform: m = !0,
			whileElementsMounted: g,
			open: p,
		} = n,
		[y, x] = v.useState({
			x: 0,
			y: 0,
			strategy: o,
			placement: l,
			middlewareData: {},
			isPositioned: !1,
		}),
		[S, E] = v.useState(i);
	xs(S, i) || E(i);
	const [C, A] = v.useState(null),
		[R, M] = v.useState(null),
		k = v.useCallback((G) => {
			G !== q.current && ((q.current = G), A(G));
		}, []),
		D = v.useCallback((G) => {
			G !== P.current && ((P.current = G), M(G));
		}, []),
		L = u || C,
		_ = d || R,
		q = v.useRef(null),
		P = v.useRef(null),
		X = v.useRef(y),
		ne = g != null,
		le = vf(g),
		de = vf(c),
		oe = vf(p),
		ve = v.useCallback(() => {
			if (!q.current || !P.current) return;
			const G = { placement: l, strategy: o, middleware: S };
			de.current && (G.platform = de.current),
				MC(q.current, P.current, G).then((J) => {
					const N = { ...J, isPositioned: oe.current !== !1 };
					me.current &&
						!xs(X.current, N) &&
						((X.current = N),
						So.flushSync(() => {
							x(N);
						}));
				});
		}, [S, l, o, de, oe]);
	cs(() => {
		p === !1 &&
			X.current.isPositioned &&
			((X.current.isPositioned = !1),
			x((G) => ({ ...G, isPositioned: !1 })));
	}, [p]);
	const me = v.useRef(!1);
	cs(
		() => (
			(me.current = !0),
			() => {
				me.current = !1;
			}
		),
		[]
	),
		cs(() => {
			if ((L && (q.current = L), _ && (P.current = _), L && _)) {
				if (le.current) return le.current(L, _, ve);
				ve();
			}
		}, [L, _, ve, le, ne]);
	const fe = v.useMemo(
			() => ({
				reference: q,
				floating: P,
				setReference: k,
				setFloating: D,
			}),
			[k, D]
		),
		j = v.useMemo(() => ({ reference: L, floating: _ }), [L, _]),
		I = v.useMemo(() => {
			const G = { position: o, left: 0, top: 0 };
			if (!j.floating) return G;
			const J = Mg(j.floating, y.x),
				N = Mg(j.floating, y.y);
			return m
				? {
						...G,
						transform: "translate(" + J + "px, " + N + "px)",
						...(ab(j.floating) >= 1.5 && {
							willChange: "transform",
						}),
				  }
				: { position: o, left: J, top: N };
		}, [o, m, j.floating, y.x, y.y]);
	return v.useMemo(
		() => ({ ...y, update: ve, refs: fe, elements: j, floatingStyles: I }),
		[y, ve, fe, j, I]
	);
}
const OC = (n) => {
		function l(o) {
			return {}.hasOwnProperty.call(o, "current");
		}
		return {
			name: "arrow",
			options: n,
			fn(o) {
				const { element: i, padding: c } =
					typeof n == "function" ? n(o) : n;
				return i && l(i)
					? i.current != null
						? Tg({ element: i.current, padding: c }).fn(o)
						: {}
					: i
					? Tg({ element: i, padding: c }).fn(o)
					: {};
			},
		};
	},
	vd = (n, l) => ({ ...EC(n), options: [n, l] }),
	gd = (n, l) => ({ ...AC(n), options: [n, l] }),
	yd = (n, l) => ({ ...TC(n), options: [n, l] }),
	bd = (n, l) => ({ ...CC(n), options: [n, l] }),
	xd = (n, l) => ({ ...RC(n), options: [n, l] }),
	Sd = (n, l) => ({ ...NC(n), options: [n, l] }),
	wd = (n, l) => ({ ...OC(n), options: [n, l] });
var _C = "Arrow",
	rb = v.forwardRef((n, l) => {
		const { children: o, width: i = 10, height: c = 5, ...u } = n;
		return h.jsx(qe.svg, {
			...u,
			ref: l,
			width: i,
			height: c,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: n.asChild
				? o
				: h.jsx("polygon", { points: "0,0 30,0 15,10" }),
		});
	});
rb.displayName = _C;
var DC = rb,
	Ed = "Popper",
	[lb, ob] = Rt(Ed),
	[jC, ib] = lb(Ed),
	sb = (n) => {
		const { __scopePopper: l, children: o } = n,
			[i, c] = v.useState(null);
		return h.jsx(jC, {
			scope: l,
			anchor: i,
			onAnchorChange: c,
			children: o,
		});
	};
sb.displayName = Ed;
var cb = "PopperAnchor",
	ub = v.forwardRef((n, l) => {
		const { __scopePopper: o, virtualRef: i, ...c } = n,
			u = ib(cb, o),
			d = v.useRef(null),
			m = Se(l, d);
		return (
			v.useEffect(() => {
				u.onAnchorChange((i == null ? void 0 : i.current) || d.current);
			}),
			i ? null : h.jsx(qe.div, { ...c, ref: m })
		);
	});
ub.displayName = cb;
var Ad = "PopperContent",
	[zC, PC] = lb(Ad),
	fb = v.forwardRef((n, l) => {
		var te, re, pe, we, Ue, He;
		const {
				__scopePopper: o,
				side: i = "bottom",
				sideOffset: c = 0,
				align: u = "center",
				alignOffset: d = 0,
				arrowPadding: m = 0,
				avoidCollisions: g = !0,
				collisionBoundary: p = [],
				collisionPadding: y = 0,
				sticky: x = "partial",
				hideWhenDetached: S = !1,
				updatePositionStrategy: E = "optimized",
				onPlaced: C,
				...A
			} = n,
			R = ib(Ad, o),
			[M, k] = v.useState(null),
			D = Se(l, (xe) => k(xe)),
			[L, _] = v.useState(null),
			q = js(L),
			P = (q == null ? void 0 : q.width) ?? 0,
			X = (q == null ? void 0 : q.height) ?? 0,
			ne = i + (u !== "center" ? "-" + u : ""),
			le =
				typeof y == "number"
					? y
					: { top: 0, right: 0, bottom: 0, left: 0, ...y },
			de = Array.isArray(p) ? p : [p],
			oe = de.length > 0,
			ve = { padding: le, boundary: de.filter(UC), altBoundary: oe },
			{
				refs: me,
				floatingStyles: fe,
				placement: j,
				isPositioned: I,
				middlewareData: G,
			} = pd({
				strategy: "fixed",
				placement: ne,
				whileElementsMounted: (...xe) =>
					hd(...xe, { animationFrame: E === "always" }),
				elements: { reference: R.anchor },
				middleware: [
					vd({ mainAxis: c + X, alignmentAxis: d }),
					g &&
						gd({
							mainAxis: !0,
							crossAxis: !1,
							limiter: x === "partial" ? yd() : void 0,
							...ve,
						}),
					g && bd({ ...ve }),
					xd({
						...ve,
						apply: ({
							elements: xe,
							rects: Xe,
							availableWidth: Tt,
							availableHeight: $t,
						}) => {
							const { width: et, height: Ze } = Xe.reference,
								tt = xe.floating.style;
							tt.setProperty(
								"--radix-popper-available-width",
								`${Tt}px`
							),
								tt.setProperty(
									"--radix-popper-available-height",
									`${$t}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-width",
									`${et}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-height",
									`${Ze}px`
								);
						},
					}),
					L && wd({ element: L, padding: m }),
					HC({ arrowWidth: P, arrowHeight: X }),
					S && Sd({ strategy: "referenceHidden", ...ve }),
				],
			}),
			[J, N] = hb(j),
			V = ze(C);
		Qe(() => {
			I && (V == null || V());
		}, [I, V]);
		const ee = (te = G.arrow) == null ? void 0 : te.x,
			U = (re = G.arrow) == null ? void 0 : re.y,
			Q = ((pe = G.arrow) == null ? void 0 : pe.centerOffset) !== 0,
			[ae, W] = v.useState();
		return (
			Qe(() => {
				M && W(window.getComputedStyle(M).zIndex);
			}, [M]),
			h.jsx("div", {
				ref: me.setFloating,
				"data-radix-popper-content-wrapper": "",
				style: {
					...fe,
					transform: I ? fe.transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: ae,
					"--radix-popper-transform-origin": [
						(we = G.transformOrigin) == null ? void 0 : we.x,
						(Ue = G.transformOrigin) == null ? void 0 : Ue.y,
					].join(" "),
					...(((He = G.hide) == null
						? void 0
						: He.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none",
					}),
				},
				dir: n.dir,
				children: h.jsx(zC, {
					scope: o,
					placedSide: J,
					onArrowChange: _,
					arrowX: ee,
					arrowY: U,
					shouldHideArrow: Q,
					children: h.jsx(qe.div, {
						"data-side": J,
						"data-align": N,
						...A,
						ref: D,
						style: { ...A.style, animation: I ? void 0 : "none" },
					}),
				}),
			})
		);
	});
fb.displayName = Ad;
var db = "PopperArrow",
	LC = { top: "bottom", right: "left", bottom: "top", left: "right" },
	mb = v.forwardRef(function (l, o) {
		const { __scopePopper: i, ...c } = l,
			u = PC(db, i),
			d = LC[u.placedSide];
		return h.jsx("span", {
			ref: u.onArrowChange,
			style: {
				position: "absolute",
				left: u.arrowX,
				top: u.arrowY,
				[d]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0",
				}[u.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[u.placedSide],
				visibility: u.shouldHideArrow ? "hidden" : void 0,
			},
			children: h.jsx(DC, {
				...c,
				ref: o,
				style: { ...c.style, display: "block" },
			}),
		});
	});
mb.displayName = db;
function UC(n) {
	return n !== null;
}
var HC = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(l) {
		var R, M, k;
		const { placement: o, rects: i, middlewareData: c } = l,
			d = ((R = c.arrow) == null ? void 0 : R.centerOffset) !== 0,
			m = d ? 0 : n.arrowWidth,
			g = d ? 0 : n.arrowHeight,
			[p, y] = hb(o),
			x = { start: "0%", center: "50%", end: "100%" }[y],
			S = (((M = c.arrow) == null ? void 0 : M.x) ?? 0) + m / 2,
			E = (((k = c.arrow) == null ? void 0 : k.y) ?? 0) + g / 2;
		let C = "",
			A = "";
		return (
			p === "bottom"
				? ((C = d ? x : `${S}px`), (A = `${-g}px`))
				: p === "top"
				? ((C = d ? x : `${S}px`), (A = `${i.floating.height + g}px`))
				: p === "right"
				? ((C = `${-g}px`), (A = d ? x : `${E}px`))
				: p === "left" &&
				  ((C = `${i.floating.width + g}px`), (A = d ? x : `${E}px`)),
			{ data: { x: C, y: A } }
		);
	},
});
function hb(n) {
	const [l, o = "center"] = n.split("-");
	return [l, o];
}
var kC = sb,
	BC = ub,
	GC = fb,
	$C = mb,
	YC = "Portal",
	Cd = v.forwardRef((n, l) => {
		var m;
		const { container: o, ...i } = n,
			[c, u] = v.useState(!1);
		Qe(() => u(!0), []);
		const d =
			o ||
			(c &&
				((m = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: m.body));
		return d ? nd.createPortal(h.jsx(qe.div, { ...i, ref: l }), d) : null;
	});
Cd.displayName = YC;
function qC(n, l) {
	return v.useReducer((o, i) => l[o][i] ?? o, n);
}
var bn = (n) => {
	const { present: l, children: o } = n,
		i = XC(l),
		c =
			typeof o == "function"
				? o({ present: i.isPresent })
				: v.Children.only(o),
		u = Se(i.ref, VC(c));
	return typeof o == "function" || i.isPresent
		? v.cloneElement(c, { ref: u })
		: null;
};
bn.displayName = "Presence";
function XC(n) {
	const [l, o] = v.useState(),
		i = v.useRef({}),
		c = v.useRef(n),
		u = v.useRef("none"),
		d = n ? "mounted" : "unmounted",
		[m, g] = qC(d, {
			mounted: {
				UNMOUNT: "unmounted",
				ANIMATION_OUT: "unmountSuspended",
			},
			unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
			unmounted: { MOUNT: "mounted" },
		});
	return (
		v.useEffect(() => {
			const p = Ji(i.current);
			u.current = m === "mounted" ? p : "none";
		}, [m]),
		Qe(() => {
			const p = i.current,
				y = c.current;
			if (y !== n) {
				const S = u.current,
					E = Ji(p);
				n
					? g("MOUNT")
					: E === "none" ||
					  (p == null ? void 0 : p.display) === "none"
					? g("UNMOUNT")
					: g(y && S !== E ? "ANIMATION_OUT" : "UNMOUNT"),
					(c.current = n);
			}
		}, [n, g]),
		Qe(() => {
			if (l) {
				let p;
				const y = l.ownerDocument.defaultView ?? window,
					x = (E) => {
						const A = Ji(i.current).includes(E.animationName);
						if (
							E.target === l &&
							A &&
							(g("ANIMATION_END"), !c.current)
						) {
							const R = l.style.animationFillMode;
							(l.style.animationFillMode = "forwards"),
								(p = y.setTimeout(() => {
									l.style.animationFillMode === "forwards" &&
										(l.style.animationFillMode = R);
								}));
						}
					},
					S = (E) => {
						E.target === l && (u.current = Ji(i.current));
					};
				return (
					l.addEventListener("animationstart", S),
					l.addEventListener("animationcancel", x),
					l.addEventListener("animationend", x),
					() => {
						y.clearTimeout(p),
							l.removeEventListener("animationstart", S),
							l.removeEventListener("animationcancel", x),
							l.removeEventListener("animationend", x);
					}
				);
			} else g("ANIMATION_END");
		}, [l, g]),
		{
			isPresent: ["mounted", "unmountSuspended"].includes(m),
			ref: v.useCallback((p) => {
				p && (i.current = getComputedStyle(p)), o(p);
			}, []),
		}
	);
}
function Ji(n) {
	return (n == null ? void 0 : n.animationName) || "none";
}
function VC(n) {
	var i, c;
	let l =
			(i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
				? void 0
				: i.get,
		o = l && "isReactWarning" in l && l.isReactWarning;
	return o
		? n.ref
		: ((l =
				(c = Object.getOwnPropertyDescriptor(n, "ref")) == null
					? void 0
					: c.get),
		  (o = l && "isReactWarning" in l && l.isReactWarning),
		  o ? n.props.ref : n.props.ref || n.ref);
}
var KC = "VisuallyHidden",
	pb = v.forwardRef((n, l) =>
		h.jsx(qe.span, {
			...n,
			ref: l,
			style: {
				position: "absolute",
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
				...n.style,
			},
		})
	);
pb.displayName = KC;
var QC = pb,
	[Us, VO] = Rt("Tooltip", [ob]),
	Hs = ob(),
	vb = "TooltipProvider",
	ZC = 700,
	Hf = "tooltip.open",
	[IC, Rd] = Us(vb),
	gb = (n) => {
		const {
				__scopeTooltip: l,
				delayDuration: o = ZC,
				skipDelayDuration: i = 300,
				disableHoverableContent: c = !1,
				children: u,
			} = n,
			d = v.useRef(!0),
			m = v.useRef(!1),
			g = v.useRef(0);
		return (
			v.useEffect(() => {
				const p = g.current;
				return () => window.clearTimeout(p);
			}, []),
			h.jsx(IC, {
				scope: l,
				isOpenDelayedRef: d,
				delayDuration: o,
				onOpen: v.useCallback(() => {
					window.clearTimeout(g.current), (d.current = !1);
				}, []),
				onClose: v.useCallback(() => {
					window.clearTimeout(g.current),
						(g.current = window.setTimeout(
							() => (d.current = !0),
							i
						));
				}, [i]),
				isPointerInTransitRef: m,
				onPointerInTransitChange: v.useCallback((p) => {
					m.current = p;
				}, []),
				disableHoverableContent: c,
				children: u,
			})
		);
	};
gb.displayName = vb;
var ks = "Tooltip",
	[FC, Eo] = Us(ks),
	yb = (n) => {
		const {
				__scopeTooltip: l,
				children: o,
				open: i,
				defaultOpen: c = !1,
				onOpenChange: u,
				disableHoverableContent: d,
				delayDuration: m,
			} = n,
			g = Rd(ks, n.__scopeTooltip),
			p = Hs(l),
			[y, x] = v.useState(null),
			S = Kr(),
			E = v.useRef(0),
			C = d ?? g.disableHoverableContent,
			A = m ?? g.delayDuration,
			R = v.useRef(!1),
			[M = !1, k] = td({
				prop: i,
				defaultProp: c,
				onChange: (P) => {
					P
						? (g.onOpen(),
						  document.dispatchEvent(new CustomEvent(Hf)))
						: g.onClose(),
						u == null || u(P);
				},
			}),
			D = v.useMemo(
				() =>
					M
						? R.current
							? "delayed-open"
							: "instant-open"
						: "closed",
				[M]
			),
			L = v.useCallback(() => {
				window.clearTimeout(E.current),
					(E.current = 0),
					(R.current = !1),
					k(!0);
			}, [k]),
			_ = v.useCallback(() => {
				window.clearTimeout(E.current), (E.current = 0), k(!1);
			}, [k]),
			q = v.useCallback(() => {
				window.clearTimeout(E.current),
					(E.current = window.setTimeout(() => {
						(R.current = !0), k(!0), (E.current = 0);
					}, A));
			}, [A, k]);
		return (
			v.useEffect(
				() => () => {
					E.current &&
						(window.clearTimeout(E.current), (E.current = 0));
				},
				[]
			),
			h.jsx(kC, {
				...p,
				children: h.jsx(FC, {
					scope: l,
					contentId: S,
					open: M,
					stateAttribute: D,
					trigger: y,
					onTriggerChange: x,
					onTriggerEnter: v.useCallback(() => {
						g.isOpenDelayedRef.current ? q() : L();
					}, [g.isOpenDelayedRef, q, L]),
					onTriggerLeave: v.useCallback(() => {
						C
							? _()
							: (window.clearTimeout(E.current), (E.current = 0));
					}, [_, C]),
					onOpen: L,
					onClose: _,
					disableHoverableContent: C,
					children: o,
				}),
			})
		);
	};
yb.displayName = ks;
var kf = "TooltipTrigger",
	bb = v.forwardRef((n, l) => {
		const { __scopeTooltip: o, ...i } = n,
			c = Eo(kf, o),
			u = Rd(kf, o),
			d = Hs(o),
			m = v.useRef(null),
			g = Se(l, m, c.onTriggerChange),
			p = v.useRef(!1),
			y = v.useRef(!1),
			x = v.useCallback(() => (p.current = !1), []);
		return (
			v.useEffect(
				() => () => document.removeEventListener("pointerup", x),
				[x]
			),
			h.jsx(BC, {
				asChild: !0,
				...d,
				children: h.jsx(qe.button, {
					"aria-describedby": c.open ? c.contentId : void 0,
					"data-state": c.stateAttribute,
					...i,
					ref: g,
					onPointerMove: ie(n.onPointerMove, (S) => {
						S.pointerType !== "touch" &&
							!y.current &&
							!u.isPointerInTransitRef.current &&
							(c.onTriggerEnter(), (y.current = !0));
					}),
					onPointerLeave: ie(n.onPointerLeave, () => {
						c.onTriggerLeave(), (y.current = !1);
					}),
					onPointerDown: ie(n.onPointerDown, () => {
						c.open && c.onClose(),
							(p.current = !0),
							document.addEventListener("pointerup", x, {
								once: !0,
							});
					}),
					onFocus: ie(n.onFocus, () => {
						p.current || c.onOpen();
					}),
					onBlur: ie(n.onBlur, c.onClose),
					onClick: ie(n.onClick, c.onClose),
				}),
			})
		);
	});
bb.displayName = kf;
var Nd = "TooltipPortal",
	[WC, JC] = Us(Nd, { forceMount: void 0 }),
	xb = (n) => {
		const {
				__scopeTooltip: l,
				forceMount: o,
				children: i,
				container: c,
			} = n,
			u = Eo(Nd, l);
		return h.jsx(WC, {
			scope: l,
			forceMount: o,
			children: h.jsx(bn, {
				present: o || u.open,
				children: h.jsx(Cd, { asChild: !0, container: c, children: i }),
			}),
		});
	};
xb.displayName = Nd;
var el = "TooltipContent",
	Sb = v.forwardRef((n, l) => {
		const o = JC(el, n.__scopeTooltip),
			{ forceMount: i = o.forceMount, side: c = "top", ...u } = n,
			d = Eo(el, n.__scopeTooltip);
		return h.jsx(bn, {
			present: i || d.open,
			children: d.disableHoverableContent
				? h.jsx(wb, { side: c, ...u, ref: l })
				: h.jsx(eR, { side: c, ...u, ref: l }),
		});
	}),
	eR = v.forwardRef((n, l) => {
		const o = Eo(el, n.__scopeTooltip),
			i = Rd(el, n.__scopeTooltip),
			c = v.useRef(null),
			u = Se(l, c),
			[d, m] = v.useState(null),
			{ trigger: g, onClose: p } = o,
			y = c.current,
			{ onPointerInTransitChange: x } = i,
			S = v.useCallback(() => {
				m(null), x(!1);
			}, [x]),
			E = v.useCallback(
				(C, A) => {
					const R = C.currentTarget,
						M = { x: C.clientX, y: C.clientY },
						k = rR(M, R.getBoundingClientRect()),
						D = lR(M, k),
						L = oR(A.getBoundingClientRect()),
						_ = sR([...D, ...L]);
					m(_), x(!0);
				},
				[x]
			);
		return (
			v.useEffect(() => () => S(), [S]),
			v.useEffect(() => {
				if (g && y) {
					const C = (R) => E(R, y),
						A = (R) => E(R, g);
					return (
						g.addEventListener("pointerleave", C),
						y.addEventListener("pointerleave", A),
						() => {
							g.removeEventListener("pointerleave", C),
								y.removeEventListener("pointerleave", A);
						}
					);
				}
			}, [g, y, E, S]),
			v.useEffect(() => {
				if (d) {
					const C = (A) => {
						const R = A.target,
							M = { x: A.clientX, y: A.clientY },
							k =
								(g == null ? void 0 : g.contains(R)) ||
								(y == null ? void 0 : y.contains(R)),
							D = !iR(M, d);
						k ? S() : D && (S(), p());
					};
					return (
						document.addEventListener("pointermove", C),
						() => document.removeEventListener("pointermove", C)
					);
				}
			}, [g, y, d, p, S]),
			h.jsx(wb, { ...n, ref: u })
		);
	}),
	[tR, nR] = Us(ks, { isInside: !1 }),
	aR = Gy("TooltipContent"),
	wb = v.forwardRef((n, l) => {
		const {
				__scopeTooltip: o,
				children: i,
				"aria-label": c,
				onEscapeKeyDown: u,
				onPointerDownOutside: d,
				...m
			} = n,
			g = Eo(el, o),
			p = Hs(o),
			{ onClose: y } = g;
		return (
			v.useEffect(
				() => (
					document.addEventListener(Hf, y),
					() => document.removeEventListener(Hf, y)
				),
				[y]
			),
			v.useEffect(() => {
				if (g.trigger) {
					const x = (S) => {
						const E = S.target;
						E != null && E.contains(g.trigger) && y();
					};
					return (
						window.addEventListener("scroll", x, { capture: !0 }),
						() =>
							window.removeEventListener("scroll", x, {
								capture: !0,
							})
					);
				}
			}, [g.trigger, y]),
			h.jsx(od, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: u,
				onPointerDownOutside: d,
				onFocusOutside: (x) => x.preventDefault(),
				onDismiss: y,
				children: h.jsxs(GC, {
					"data-state": g.stateAttribute,
					...p,
					...m,
					ref: l,
					style: {
						...m.style,
						"--radix-tooltip-content-transform-origin":
							"var(--radix-popper-transform-origin)",
						"--radix-tooltip-content-available-width":
							"var(--radix-popper-available-width)",
						"--radix-tooltip-content-available-height":
							"var(--radix-popper-available-height)",
						"--radix-tooltip-trigger-width":
							"var(--radix-popper-anchor-width)",
						"--radix-tooltip-trigger-height":
							"var(--radix-popper-anchor-height)",
					},
					children: [
						h.jsx(aR, { children: i }),
						h.jsx(tR, {
							scope: o,
							isInside: !0,
							children: h.jsx(QC, {
								id: g.contentId,
								role: "tooltip",
								children: c || i,
							}),
						}),
					],
				}),
			})
		);
	});
Sb.displayName = el;
var Eb = "TooltipArrow",
	Ab = v.forwardRef((n, l) => {
		const { __scopeTooltip: o, ...i } = n,
			c = Hs(o);
		return nR(Eb, o).isInside ? null : h.jsx($C, { ...c, ...i, ref: l });
	});
Ab.displayName = Eb;
function rR(n, l) {
	const o = Math.abs(l.top - n.y),
		i = Math.abs(l.bottom - n.y),
		c = Math.abs(l.right - n.x),
		u = Math.abs(l.left - n.x);
	switch (Math.min(o, i, c, u)) {
		case u:
			return "left";
		case c:
			return "right";
		case o:
			return "top";
		case i:
			return "bottom";
		default:
			throw new Error("unreachable");
	}
}
function lR(n, l, o = 5) {
	const i = [];
	switch (l) {
		case "top":
			i.push({ x: n.x - o, y: n.y + o }, { x: n.x + o, y: n.y + o });
			break;
		case "bottom":
			i.push({ x: n.x - o, y: n.y - o }, { x: n.x + o, y: n.y - o });
			break;
		case "left":
			i.push({ x: n.x + o, y: n.y - o }, { x: n.x + o, y: n.y + o });
			break;
		case "right":
			i.push({ x: n.x - o, y: n.y - o }, { x: n.x - o, y: n.y + o });
			break;
	}
	return i;
}
function oR(n) {
	const { top: l, right: o, bottom: i, left: c } = n;
	return [
		{ x: c, y: l },
		{ x: o, y: l },
		{ x: o, y: i },
		{ x: c, y: i },
	];
}
function iR(n, l) {
	const { x: o, y: i } = n;
	let c = !1;
	for (let u = 0, d = l.length - 1; u < l.length; d = u++) {
		const m = l[u].x,
			g = l[u].y,
			p = l[d].x,
			y = l[d].y;
		g > i != y > i && o < ((p - m) * (i - g)) / (y - g) + m && (c = !c);
	}
	return c;
}
function sR(n) {
	const l = n.slice();
	return (
		l.sort((o, i) =>
			o.x < i.x ? -1 : o.x > i.x ? 1 : o.y < i.y ? -1 : o.y > i.y ? 1 : 0
		),
		cR(l)
	);
}
function cR(n) {
	if (n.length <= 1) return n.slice();
	const l = [];
	for (let i = 0; i < n.length; i++) {
		const c = n[i];
		for (; l.length >= 2; ) {
			const u = l[l.length - 1],
				d = l[l.length - 2];
			if ((u.x - d.x) * (c.y - d.y) >= (u.y - d.y) * (c.x - d.x)) l.pop();
			else break;
		}
		l.push(c);
	}
	l.pop();
	const o = [];
	for (let i = n.length - 1; i >= 0; i--) {
		const c = n[i];
		for (; o.length >= 2; ) {
			const u = o[o.length - 1],
				d = o[o.length - 2];
			if ((u.x - d.x) * (c.y - d.y) >= (u.y - d.y) * (c.x - d.x)) o.pop();
			else break;
		}
		o.push(c);
	}
	return (
		o.pop(),
		l.length === 1 &&
		o.length === 1 &&
		l[0].x === o[0].x &&
		l[0].y === o[0].y
			? l
			: l.concat(o)
	);
}
var uR = gb,
	fR = yb,
	dR = bb,
	mR = xb,
	hR = Sb,
	pR = Ab;
function Cb({ delayDuration: n = 0, ...l }) {
	return h.jsx(uR, {
		"data-slot": "tooltip-provider",
		delayDuration: n,
		...l,
	});
}
function us({ ...n }) {
	return h.jsx(Cb, { children: h.jsx(fR, { "data-slot": "tooltip", ...n }) });
}
function fs({ ...n }) {
	return h.jsx(dR, { "data-slot": "tooltip-trigger", ...n });
}
function ds({ className: n, sideOffset: l = 0, children: o, ...i }) {
	return h.jsx(mR, {
		children: h.jsxs(hR, {
			"data-slot": "tooltip-content",
			sideOffset: l,
			className: De(
				"bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
				n
			),
			...i,
			children: [
				o,
				h.jsx(pR, {
					className:
						"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
				}),
			],
		}),
	});
}
var Td = "Avatar",
	[vR, KO] = Rt(Td),
	[gR, Rb] = vR(Td),
	Nb = v.forwardRef((n, l) => {
		const { __scopeAvatar: o, ...i } = n,
			[c, u] = v.useState("idle");
		return h.jsx(gR, {
			scope: o,
			imageLoadingStatus: c,
			onImageLoadingStatusChange: u,
			children: h.jsx(qe.span, { ...i, ref: l }),
		});
	});
Nb.displayName = Td;
var Tb = "AvatarImage",
	Mb = v.forwardRef((n, l) => {
		const {
				__scopeAvatar: o,
				src: i,
				onLoadingStatusChange: c = () => {},
				...u
			} = n,
			d = Rb(Tb, o),
			m = yR(i, u),
			g = ze((p) => {
				c(p), d.onImageLoadingStatusChange(p);
			});
		return (
			Qe(() => {
				m !== "idle" && g(m);
			}, [m, g]),
			m === "loaded" ? h.jsx(qe.img, { ...u, ref: l, src: i }) : null
		);
	});
Mb.displayName = Tb;
var Ob = "AvatarFallback",
	_b = v.forwardRef((n, l) => {
		const { __scopeAvatar: o, delayMs: i, ...c } = n,
			u = Rb(Ob, o),
			[d, m] = v.useState(i === void 0);
		return (
			v.useEffect(() => {
				if (i !== void 0) {
					const g = window.setTimeout(() => m(!0), i);
					return () => window.clearTimeout(g);
				}
			}, [i]),
			d && u.imageLoadingStatus !== "loaded"
				? h.jsx(qe.span, { ...c, ref: l })
				: null
		);
	});
_b.displayName = Ob;
function Og(n, l) {
	return n
		? l
			? (n.src !== l && (n.src = l),
			  n.complete && n.naturalWidth > 0 ? "loaded" : "loading")
			: "error"
		: "idle";
}
function yR(n, { referrerPolicy: l, crossOrigin: o }) {
	const i = xR(),
		c = v.useRef(null),
		u = i
			? (c.current || (c.current = new window.Image()), c.current)
			: null,
		[d, m] = v.useState(() => Og(u, n));
	return (
		Qe(() => {
			m(Og(u, n));
		}, [u, n]),
		Qe(() => {
			const g = (x) => () => {
				m(x);
			};
			if (!u) return;
			const p = g("loaded"),
				y = g("error");
			return (
				u.addEventListener("load", p),
				u.addEventListener("error", y),
				l && (u.referrerPolicy = l),
				typeof o == "string" && (u.crossOrigin = o),
				() => {
					u.removeEventListener("load", p),
						u.removeEventListener("error", y);
				}
			);
		}, [u, o, l]),
		d
	);
}
function bR() {
	return () => {};
}
function xR() {
	return v.useSyncExternalStore(
		bR,
		() => !0,
		() => !1
	);
}
var SR = Nb,
	wR = Mb,
	ER = _b;
function Md({ className: n, ...l }) {
	return h.jsx(SR, {
		"data-slot": "avatar",
		className: De(
			"relative flex size-8 shrink-0 overflow-hidden rounded-full",
			n
		),
		...l,
	});
}
function Od({ className: n, ...l }) {
	return h.jsx(wR, {
		"data-slot": "avatar-image",
		className: De("aspect-square size-full", n),
		...l,
	});
}
function _d({ className: n, ...l }) {
	return h.jsx(ER, {
		"data-slot": "avatar-fallback",
		className: De(
			"bg-muted flex size-full items-center justify-center rounded-full",
			n
		),
		...l,
	});
}
var AR = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul",
	],
	Bn = AR.reduce((n, l) => {
		const o = vn(`Primitive.${l}`),
			i = v.forwardRef((c, u) => {
				const { asChild: d, ...m } = c,
					g = d ? o : l;
				return (
					typeof window < "u" &&
						(window[Symbol.for("radix-ui")] = !0),
					h.jsx(g, { ...m, ref: u })
				);
			});
		return (i.displayName = `Primitive.${l}`), { ...n, [l]: i };
	}, {});
function CR(n, l) {
	n && So.flushSync(() => n.dispatchEvent(l));
}
var RR = "DismissableLayer",
	Bf = "dismissableLayer.update",
	NR = "dismissableLayer.pointerDownOutside",
	TR = "dismissableLayer.focusOutside",
	_g,
	Db = v.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	jb = v.forwardRef((n, l) => {
		const {
				disableOutsidePointerEvents: o = !1,
				onEscapeKeyDown: i,
				onPointerDownOutside: c,
				onFocusOutside: u,
				onInteractOutside: d,
				onDismiss: m,
				...g
			} = n,
			p = v.useContext(Db),
			[y, x] = v.useState(null),
			S =
				(y == null ? void 0 : y.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, E] = v.useState({}),
			C = Se(l, (P) => x(P)),
			A = Array.from(p.layers),
			[R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
			M = A.indexOf(R),
			k = y ? A.indexOf(y) : -1,
			D = p.layersWithOutsidePointerEventsDisabled.size > 0,
			L = k >= M,
			_ = _R((P) => {
				const X = P.target,
					ne = [...p.branches].some((le) => le.contains(X));
				!L ||
					ne ||
					(c == null || c(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S),
			q = DR((P) => {
				const X = P.target;
				[...p.branches].some((le) => le.contains(X)) ||
					(u == null || u(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S);
		return (
			ld((P) => {
				k === p.layers.size - 1 &&
					(i == null || i(P),
					!P.defaultPrevented && m && (P.preventDefault(), m()));
			}, S),
			v.useEffect(() => {
				if (y)
					return (
						o &&
							(p.layersWithOutsidePointerEventsDisabled.size ===
								0 &&
								((_g = S.body.style.pointerEvents),
								(S.body.style.pointerEvents = "none")),
							p.layersWithOutsidePointerEventsDisabled.add(y)),
						p.layers.add(y),
						Dg(),
						() => {
							o &&
								p.layersWithOutsidePointerEventsDisabled
									.size === 1 &&
								(S.body.style.pointerEvents = _g);
						}
					);
			}, [y, S, o, p]),
			v.useEffect(
				() => () => {
					y &&
						(p.layers.delete(y),
						p.layersWithOutsidePointerEventsDisabled.delete(y),
						Dg());
				},
				[y, p]
			),
			v.useEffect(() => {
				const P = () => E({});
				return (
					document.addEventListener(Bf, P),
					() => document.removeEventListener(Bf, P)
				);
			}, []),
			h.jsx(Bn.div, {
				...g,
				ref: C,
				style: {
					pointerEvents: D ? (L ? "auto" : "none") : void 0,
					...n.style,
				},
				onFocusCapture: ie(n.onFocusCapture, q.onFocusCapture),
				onBlurCapture: ie(n.onBlurCapture, q.onBlurCapture),
				onPointerDownCapture: ie(
					n.onPointerDownCapture,
					_.onPointerDownCapture
				),
			})
		);
	});
jb.displayName = RR;
var MR = "DismissableLayerBranch",
	OR = v.forwardRef((n, l) => {
		const o = v.useContext(Db),
			i = v.useRef(null),
			c = Se(l, i);
		return (
			v.useEffect(() => {
				const u = i.current;
				if (u)
					return (
						o.branches.add(u),
						() => {
							o.branches.delete(u);
						}
					);
			}, [o.branches]),
			h.jsx(Bn.div, { ...n, ref: c })
		);
	});
OR.displayName = MR;
function _R(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1),
		c = v.useRef(() => {});
	return (
		v.useEffect(() => {
			const u = (m) => {
					if (m.target && !i.current) {
						let g = function () {
							zb(NR, o, p, { discrete: !0 });
						};
						const p = { originalEvent: m };
						m.pointerType === "touch"
							? (l.removeEventListener("click", c.current),
							  (c.current = g),
							  l.addEventListener("click", c.current, {
									once: !0,
							  }))
							: g();
					} else l.removeEventListener("click", c.current);
					i.current = !1;
				},
				d = window.setTimeout(() => {
					l.addEventListener("pointerdown", u);
				}, 0);
			return () => {
				window.clearTimeout(d),
					l.removeEventListener("pointerdown", u),
					l.removeEventListener("click", c.current);
			};
		}, [l, o]),
		{ onPointerDownCapture: () => (i.current = !0) }
	);
}
function DR(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1);
	return (
		v.useEffect(() => {
			const c = (u) => {
				u.target &&
					!i.current &&
					zb(TR, o, { originalEvent: u }, { discrete: !1 });
			};
			return (
				l.addEventListener("focusin", c),
				() => l.removeEventListener("focusin", c)
			);
		}, [l, o]),
		{
			onFocusCapture: () => (i.current = !0),
			onBlurCapture: () => (i.current = !1),
		}
	);
}
function Dg() {
	const n = new CustomEvent(Bf);
	document.dispatchEvent(n);
}
function zb(n, l, o, { discrete: i }) {
	const c = o.originalEvent.target,
		u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
	l && c.addEventListener(n, l, { once: !0 }),
		i ? CR(c, u) : c.dispatchEvent(u);
}
var gf = 0;
function Dd() {
	v.useEffect(() => {
		const n = document.querySelectorAll("[data-radix-focus-guard]");
		return (
			document.body.insertAdjacentElement("afterbegin", n[0] ?? jg()),
			document.body.insertAdjacentElement("beforeend", n[1] ?? jg()),
			gf++,
			() => {
				gf === 1 &&
					document
						.querySelectorAll("[data-radix-focus-guard]")
						.forEach((l) => l.remove()),
					gf--;
			}
		);
	}, []);
}
function jg() {
	const n = document.createElement("span");
	return (
		n.setAttribute("data-radix-focus-guard", ""),
		(n.tabIndex = 0),
		(n.style.outline = "none"),
		(n.style.opacity = "0"),
		(n.style.position = "fixed"),
		(n.style.pointerEvents = "none"),
		n
	);
}
var yf = "focusScope.autoFocusOnMount",
	bf = "focusScope.autoFocusOnUnmount",
	zg = { bubbles: !1, cancelable: !0 },
	jR = "FocusScope",
	Pb = v.forwardRef((n, l) => {
		const {
				loop: o = !1,
				trapped: i = !1,
				onMountAutoFocus: c,
				onUnmountAutoFocus: u,
				...d
			} = n,
			[m, g] = v.useState(null),
			p = ze(c),
			y = ze(u),
			x = v.useRef(null),
			S = Se(l, (A) => g(A)),
			E = v.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				},
			}).current;
		v.useEffect(() => {
			if (i) {
				let A = function (D) {
						if (E.paused || !m) return;
						const L = D.target;
						m.contains(L)
							? (x.current = L)
							: ha(x.current, { select: !0 });
					},
					R = function (D) {
						if (E.paused || !m) return;
						const L = D.relatedTarget;
						L !== null &&
							(m.contains(L) || ha(x.current, { select: !0 }));
					},
					M = function (D) {
						if (document.activeElement === document.body)
							for (const _ of D)
								_.removedNodes.length > 0 && ha(m);
					};
				document.addEventListener("focusin", A),
					document.addEventListener("focusout", R);
				const k = new MutationObserver(M);
				return (
					m && k.observe(m, { childList: !0, subtree: !0 }),
					() => {
						document.removeEventListener("focusin", A),
							document.removeEventListener("focusout", R),
							k.disconnect();
					}
				);
			}
		}, [i, m, E.paused]),
			v.useEffect(() => {
				if (m) {
					Lg.add(E);
					const A = document.activeElement;
					if (!m.contains(A)) {
						const M = new CustomEvent(yf, zg);
						m.addEventListener(yf, p),
							m.dispatchEvent(M),
							M.defaultPrevented ||
								(zR(kR(Lb(m)), { select: !0 }),
								document.activeElement === A && ha(m));
					}
					return () => {
						m.removeEventListener(yf, p),
							setTimeout(() => {
								const M = new CustomEvent(bf, zg);
								m.addEventListener(bf, y),
									m.dispatchEvent(M),
									M.defaultPrevented ||
										ha(A ?? document.body, { select: !0 }),
									m.removeEventListener(bf, y),
									Lg.remove(E);
							}, 0);
					};
				}
			}, [m, p, y, E]);
		const C = v.useCallback(
			(A) => {
				if ((!o && !i) || E.paused) return;
				const R =
						A.key === "Tab" &&
						!A.altKey &&
						!A.ctrlKey &&
						!A.metaKey,
					M = document.activeElement;
				if (R && M) {
					const k = A.currentTarget,
						[D, L] = PR(k);
					D && L
						? !A.shiftKey && M === L
							? (A.preventDefault(), o && ha(D, { select: !0 }))
							: A.shiftKey &&
							  M === D &&
							  (A.preventDefault(), o && ha(L, { select: !0 }))
						: M === k && A.preventDefault();
				}
			},
			[o, i, E.paused]
		);
		return h.jsx(Bn.div, { tabIndex: -1, ...d, ref: S, onKeyDown: C });
	});
Pb.displayName = jR;
function zR(n, { select: l = !1 } = {}) {
	const o = document.activeElement;
	for (const i of n)
		if ((ha(i, { select: l }), document.activeElement !== o)) return;
}
function PR(n) {
	const l = Lb(n),
		o = Pg(l, n),
		i = Pg(l.reverse(), n);
	return [o, i];
}
function Lb(n) {
	const l = [],
		o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (i) => {
				const c = i.tagName === "INPUT" && i.type === "hidden";
				return i.disabled || i.hidden || c
					? NodeFilter.FILTER_SKIP
					: i.tabIndex >= 0
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	for (; o.nextNode(); ) l.push(o.currentNode);
	return l;
}
function Pg(n, l) {
	for (const o of n) if (!LR(o, { upTo: l })) return o;
}
function LR(n, { upTo: l }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n; ) {
		if (l !== void 0 && n === l) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function UR(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function ha(n, { select: l = !1 } = {}) {
	if (n && n.focus) {
		const o = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== o && UR(n) && l && n.select();
	}
}
var Lg = HR();
function HR() {
	let n = [];
	return {
		add(l) {
			const o = n[0];
			l !== o && (o == null || o.pause()), (n = Ug(n, l)), n.unshift(l);
		},
		remove(l) {
			var o;
			(n = Ug(n, l)), (o = n[0]) == null || o.resume();
		},
	};
}
function Ug(n, l) {
	const o = [...n],
		i = o.indexOf(l);
	return i !== -1 && o.splice(i, 1), o;
}
function kR(n) {
	return n.filter((l) => l.tagName !== "A");
}
var BR = "Arrow",
	Ub = v.forwardRef((n, l) => {
		const { children: o, width: i = 10, height: c = 5, ...u } = n;
		return h.jsx(Bn.svg, {
			...u,
			ref: l,
			width: i,
			height: c,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: n.asChild
				? o
				: h.jsx("polygon", { points: "0,0 30,0 15,10" }),
		});
	});
Ub.displayName = BR;
var GR = Ub,
	jd = "Popper",
	[Hb, kb] = Rt(jd),
	[$R, Bb] = Hb(jd),
	Gb = (n) => {
		const { __scopePopper: l, children: o } = n,
			[i, c] = v.useState(null);
		return h.jsx($R, {
			scope: l,
			anchor: i,
			onAnchorChange: c,
			children: o,
		});
	};
Gb.displayName = jd;
var $b = "PopperAnchor",
	Yb = v.forwardRef((n, l) => {
		const { __scopePopper: o, virtualRef: i, ...c } = n,
			u = Bb($b, o),
			d = v.useRef(null),
			m = Se(l, d);
		return (
			v.useEffect(() => {
				u.onAnchorChange((i == null ? void 0 : i.current) || d.current);
			}),
			i ? null : h.jsx(Bn.div, { ...c, ref: m })
		);
	});
Yb.displayName = $b;
var zd = "PopperContent",
	[YR, qR] = Hb(zd),
	qb = v.forwardRef((n, l) => {
		var te, re, pe, we, Ue, He;
		const {
				__scopePopper: o,
				side: i = "bottom",
				sideOffset: c = 0,
				align: u = "center",
				alignOffset: d = 0,
				arrowPadding: m = 0,
				avoidCollisions: g = !0,
				collisionBoundary: p = [],
				collisionPadding: y = 0,
				sticky: x = "partial",
				hideWhenDetached: S = !1,
				updatePositionStrategy: E = "optimized",
				onPlaced: C,
				...A
			} = n,
			R = Bb(zd, o),
			[M, k] = v.useState(null),
			D = Se(l, (xe) => k(xe)),
			[L, _] = v.useState(null),
			q = js(L),
			P = (q == null ? void 0 : q.width) ?? 0,
			X = (q == null ? void 0 : q.height) ?? 0,
			ne = i + (u !== "center" ? "-" + u : ""),
			le =
				typeof y == "number"
					? y
					: { top: 0, right: 0, bottom: 0, left: 0, ...y },
			de = Array.isArray(p) ? p : [p],
			oe = de.length > 0,
			ve = { padding: le, boundary: de.filter(VR), altBoundary: oe },
			{
				refs: me,
				floatingStyles: fe,
				placement: j,
				isPositioned: I,
				middlewareData: G,
			} = pd({
				strategy: "fixed",
				placement: ne,
				whileElementsMounted: (...xe) =>
					hd(...xe, { animationFrame: E === "always" }),
				elements: { reference: R.anchor },
				middleware: [
					vd({ mainAxis: c + X, alignmentAxis: d }),
					g &&
						gd({
							mainAxis: !0,
							crossAxis: !1,
							limiter: x === "partial" ? yd() : void 0,
							...ve,
						}),
					g && bd({ ...ve }),
					xd({
						...ve,
						apply: ({
							elements: xe,
							rects: Xe,
							availableWidth: Tt,
							availableHeight: $t,
						}) => {
							const { width: et, height: Ze } = Xe.reference,
								tt = xe.floating.style;
							tt.setProperty(
								"--radix-popper-available-width",
								`${Tt}px`
							),
								tt.setProperty(
									"--radix-popper-available-height",
									`${$t}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-width",
									`${et}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-height",
									`${Ze}px`
								);
						},
					}),
					L && wd({ element: L, padding: m }),
					KR({ arrowWidth: P, arrowHeight: X }),
					S && Sd({ strategy: "referenceHidden", ...ve }),
				],
			}),
			[J, N] = Kb(j),
			V = ze(C);
		Qe(() => {
			I && (V == null || V());
		}, [I, V]);
		const ee = (te = G.arrow) == null ? void 0 : te.x,
			U = (re = G.arrow) == null ? void 0 : re.y,
			Q = ((pe = G.arrow) == null ? void 0 : pe.centerOffset) !== 0,
			[ae, W] = v.useState();
		return (
			Qe(() => {
				M && W(window.getComputedStyle(M).zIndex);
			}, [M]),
			h.jsx("div", {
				ref: me.setFloating,
				"data-radix-popper-content-wrapper": "",
				style: {
					...fe,
					transform: I ? fe.transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: ae,
					"--radix-popper-transform-origin": [
						(we = G.transformOrigin) == null ? void 0 : we.x,
						(Ue = G.transformOrigin) == null ? void 0 : Ue.y,
					].join(" "),
					...(((He = G.hide) == null
						? void 0
						: He.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none",
					}),
				},
				dir: n.dir,
				children: h.jsx(YR, {
					scope: o,
					placedSide: J,
					onArrowChange: _,
					arrowX: ee,
					arrowY: U,
					shouldHideArrow: Q,
					children: h.jsx(Bn.div, {
						"data-side": J,
						"data-align": N,
						...A,
						ref: D,
						style: { ...A.style, animation: I ? void 0 : "none" },
					}),
				}),
			})
		);
	});
qb.displayName = zd;
var Xb = "PopperArrow",
	XR = { top: "bottom", right: "left", bottom: "top", left: "right" },
	Vb = v.forwardRef(function (l, o) {
		const { __scopePopper: i, ...c } = l,
			u = qR(Xb, i),
			d = XR[u.placedSide];
		return h.jsx("span", {
			ref: u.onArrowChange,
			style: {
				position: "absolute",
				left: u.arrowX,
				top: u.arrowY,
				[d]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0",
				}[u.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[u.placedSide],
				visibility: u.shouldHideArrow ? "hidden" : void 0,
			},
			children: h.jsx(GR, {
				...c,
				ref: o,
				style: { ...c.style, display: "block" },
			}),
		});
	});
Vb.displayName = Xb;
function VR(n) {
	return n !== null;
}
var KR = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(l) {
		var R, M, k;
		const { placement: o, rects: i, middlewareData: c } = l,
			d = ((R = c.arrow) == null ? void 0 : R.centerOffset) !== 0,
			m = d ? 0 : n.arrowWidth,
			g = d ? 0 : n.arrowHeight,
			[p, y] = Kb(o),
			x = { start: "0%", center: "50%", end: "100%" }[y],
			S = (((M = c.arrow) == null ? void 0 : M.x) ?? 0) + m / 2,
			E = (((k = c.arrow) == null ? void 0 : k.y) ?? 0) + g / 2;
		let C = "",
			A = "";
		return (
			p === "bottom"
				? ((C = d ? x : `${S}px`), (A = `${-g}px`))
				: p === "top"
				? ((C = d ? x : `${S}px`), (A = `${i.floating.height + g}px`))
				: p === "right"
				? ((C = `${-g}px`), (A = d ? x : `${E}px`))
				: p === "left" &&
				  ((C = `${i.floating.width + g}px`), (A = d ? x : `${E}px`)),
			{ data: { x: C, y: A } }
		);
	},
});
function Kb(n) {
	const [l, o = "center"] = n.split("-");
	return [l, o];
}
var QR = Gb,
	Qb = Yb,
	ZR = qb,
	IR = Vb,
	FR = "Portal",
	Zb = v.forwardRef((n, l) => {
		var m;
		const { container: o, ...i } = n,
			[c, u] = v.useState(!1);
		Qe(() => u(!0), []);
		const d =
			o ||
			(c &&
				((m = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: m.body));
		return d ? nd.createPortal(h.jsx(Bn.div, { ...i, ref: l }), d) : null;
	});
Zb.displayName = FR;
function WR(n, l) {
	return v.useReducer((o, i) => l[o][i] ?? o, n);
}
var Pd = (n) => {
	const { present: l, children: o } = n,
		i = JR(l),
		c =
			typeof o == "function"
				? o({ present: i.isPresent })
				: v.Children.only(o),
		u = Se(i.ref, eN(c));
	return typeof o == "function" || i.isPresent
		? v.cloneElement(c, { ref: u })
		: null;
};
Pd.displayName = "Presence";
function JR(n) {
	const [l, o] = v.useState(),
		i = v.useRef(null),
		c = v.useRef(n),
		u = v.useRef("none"),
		d = n ? "mounted" : "unmounted",
		[m, g] = WR(d, {
			mounted: {
				UNMOUNT: "unmounted",
				ANIMATION_OUT: "unmountSuspended",
			},
			unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
			unmounted: { MOUNT: "mounted" },
		});
	return (
		v.useEffect(() => {
			const p = es(i.current);
			u.current = m === "mounted" ? p : "none";
		}, [m]),
		Qe(() => {
			const p = i.current,
				y = c.current;
			if (y !== n) {
				const S = u.current,
					E = es(p);
				n
					? g("MOUNT")
					: E === "none" ||
					  (p == null ? void 0 : p.display) === "none"
					? g("UNMOUNT")
					: g(y && S !== E ? "ANIMATION_OUT" : "UNMOUNT"),
					(c.current = n);
			}
		}, [n, g]),
		Qe(() => {
			if (l) {
				let p;
				const y = l.ownerDocument.defaultView ?? window,
					x = (E) => {
						const A = es(i.current).includes(E.animationName);
						if (
							E.target === l &&
							A &&
							(g("ANIMATION_END"), !c.current)
						) {
							const R = l.style.animationFillMode;
							(l.style.animationFillMode = "forwards"),
								(p = y.setTimeout(() => {
									l.style.animationFillMode === "forwards" &&
										(l.style.animationFillMode = R);
								}));
						}
					},
					S = (E) => {
						E.target === l && (u.current = es(i.current));
					};
				return (
					l.addEventListener("animationstart", S),
					l.addEventListener("animationcancel", x),
					l.addEventListener("animationend", x),
					() => {
						y.clearTimeout(p),
							l.removeEventListener("animationstart", S),
							l.removeEventListener("animationcancel", x),
							l.removeEventListener("animationend", x);
					}
				);
			} else g("ANIMATION_END");
		}, [l, g]),
		{
			isPresent: ["mounted", "unmountSuspended"].includes(m),
			ref: v.useCallback((p) => {
				(i.current = p ? getComputedStyle(p) : null), o(p);
			}, []),
		}
	);
}
function es(n) {
	return (n == null ? void 0 : n.animationName) || "none";
}
function eN(n) {
	var i, c;
	let l =
			(i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
				? void 0
				: i.get,
		o = l && "isReactWarning" in l && l.isReactWarning;
	return o
		? n.ref
		: ((l =
				(c = Object.getOwnPropertyDescriptor(n, "ref")) == null
					? void 0
					: c.get),
		  (o = l && "isReactWarning" in l && l.isReactWarning),
		  o ? n.props.ref : n.props.ref || n.ref);
}
var tN = bo[" useInsertionEffect ".trim().toString()] || Qe;
function nN({ prop: n, defaultProp: l, onChange: o = () => {}, caller: i }) {
	const [c, u, d] = aN({ defaultProp: l, onChange: o }),
		m = n !== void 0,
		g = m ? n : c;
	{
		const y = v.useRef(n !== void 0);
		v.useEffect(() => {
			const x = y.current;
			x !== m &&
				console.warn(
					`${i} is changing from ${
						x ? "controlled" : "uncontrolled"
					} to ${
						m ? "controlled" : "uncontrolled"
					}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
				),
				(y.current = m);
		}, [m, i]);
	}
	const p = v.useCallback(
		(y) => {
			var x;
			if (m) {
				const S = rN(y) ? y(n) : y;
				S !== n && ((x = d.current) == null || x.call(d, S));
			} else u(y);
		},
		[m, n, u, d]
	);
	return [g, p];
}
function aN({ defaultProp: n, onChange: l }) {
	const [o, i] = v.useState(n),
		c = v.useRef(o),
		u = v.useRef(l);
	return (
		tN(() => {
			u.current = l;
		}, [l]),
		v.useEffect(() => {
			var d;
			c.current !== o &&
				((d = u.current) == null || d.call(u, o), (c.current = o));
		}, [o, c]),
		[o, i, u]
	);
}
function rN(n) {
	return typeof n == "function";
}
var lN = function (n) {
		if (typeof document > "u") return null;
		var l = Array.isArray(n) ? n[0] : n;
		return l.ownerDocument.body;
	},
	Br = new WeakMap(),
	ts = new WeakMap(),
	ns = {},
	xf = 0,
	Ib = function (n) {
		return n && (n.host || Ib(n.parentNode));
	},
	oN = function (n, l) {
		return l
			.map(function (o) {
				if (n.contains(o)) return o;
				var i = Ib(o);
				return i && n.contains(i)
					? i
					: (console.error(
							"aria-hidden",
							o,
							"in not contained inside",
							n,
							". Doing nothing"
					  ),
					  null);
			})
			.filter(function (o) {
				return !!o;
			});
	},
	iN = function (n, l, o, i) {
		var c = oN(l, Array.isArray(n) ? n : [n]);
		ns[o] || (ns[o] = new WeakMap());
		var u = ns[o],
			d = [],
			m = new Set(),
			g = new Set(c),
			p = function (x) {
				!x || m.has(x) || (m.add(x), p(x.parentNode));
			};
		c.forEach(p);
		var y = function (x) {
			!x ||
				g.has(x) ||
				Array.prototype.forEach.call(x.children, function (S) {
					if (m.has(S)) y(S);
					else
						try {
							var E = S.getAttribute(i),
								C = E !== null && E !== "false",
								A = (Br.get(S) || 0) + 1,
								R = (u.get(S) || 0) + 1;
							Br.set(S, A),
								u.set(S, R),
								d.push(S),
								A === 1 && C && ts.set(S, !0),
								R === 1 && S.setAttribute(o, "true"),
								C || S.setAttribute(i, "true");
						} catch (M) {
							console.error(
								"aria-hidden: cannot operate on ",
								S,
								M
							);
						}
				});
		};
		return (
			y(l),
			m.clear(),
			xf++,
			function () {
				d.forEach(function (x) {
					var S = Br.get(x) - 1,
						E = u.get(x) - 1;
					Br.set(x, S),
						u.set(x, E),
						S || (ts.has(x) || x.removeAttribute(i), ts.delete(x)),
						E || x.removeAttribute(o);
				}),
					xf--,
					xf ||
						((Br = new WeakMap()),
						(Br = new WeakMap()),
						(ts = new WeakMap()),
						(ns = {}));
			}
		);
	},
	Ld = function (n, l, o) {
		o === void 0 && (o = "data-aria-hidden");
		var i = Array.from(Array.isArray(n) ? n : [n]),
			c = lN(n);
		return c
			? (i.push.apply(i, Array.from(c.querySelectorAll("[aria-live]"))),
			  iN(i, c, o, "aria-hidden"))
			: function () {
					return null;
			  };
	},
	hn = function () {
		return (
			(hn =
				Object.assign ||
				function (l) {
					for (var o, i = 1, c = arguments.length; i < c; i++) {
						o = arguments[i];
						for (var u in o)
							Object.prototype.hasOwnProperty.call(o, u) &&
								(l[u] = o[u]);
					}
					return l;
				}),
			hn.apply(this, arguments)
		);
	};
function Fb(n, l) {
	var o = {};
	for (var i in n)
		Object.prototype.hasOwnProperty.call(n, i) &&
			l.indexOf(i) < 0 &&
			(o[i] = n[i]);
	if (n != null && typeof Object.getOwnPropertySymbols == "function")
		for (var c = 0, i = Object.getOwnPropertySymbols(n); c < i.length; c++)
			l.indexOf(i[c]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(n, i[c]) &&
				(o[i[c]] = n[i[c]]);
	return o;
}
function sN(n, l, o) {
	if (o || arguments.length === 2)
		for (var i = 0, c = l.length, u; i < c; i++)
			(u || !(i in l)) &&
				(u || (u = Array.prototype.slice.call(l, 0, i)), (u[i] = l[i]));
	return n.concat(u || Array.prototype.slice.call(l));
}
var ms = "right-scroll-bar-position",
	hs = "width-before-scroll-bar",
	cN = "with-scroll-bars-hidden",
	uN = "--removed-body-scroll-bar-size";
function Sf(n, l) {
	return typeof n == "function" ? n(l) : n && (n.current = l), n;
}
function fN(n, l) {
	var o = v.useState(function () {
		return {
			value: n,
			callback: l,
			facade: {
				get current() {
					return o.value;
				},
				set current(i) {
					var c = o.value;
					c !== i && ((o.value = i), o.callback(i, c));
				},
			},
		};
	})[0];
	return (o.callback = l), o.facade;
}
var dN = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
	Hg = new WeakMap();
function mN(n, l) {
	var o = fN(null, function (i) {
		return n.forEach(function (c) {
			return Sf(c, i);
		});
	});
	return (
		dN(
			function () {
				var i = Hg.get(o);
				if (i) {
					var c = new Set(i),
						u = new Set(n),
						d = o.current;
					c.forEach(function (m) {
						u.has(m) || Sf(m, null);
					}),
						u.forEach(function (m) {
							c.has(m) || Sf(m, d);
						});
				}
				Hg.set(o, n);
			},
			[n]
		),
		o
	);
}
function hN(n) {
	return n;
}
function pN(n, l) {
	l === void 0 && (l = hN);
	var o = [],
		i = !1,
		c = {
			read: function () {
				if (i)
					throw new Error(
						"Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
					);
				return o.length ? o[o.length - 1] : n;
			},
			useMedium: function (u) {
				var d = l(u, i);
				return (
					o.push(d),
					function () {
						o = o.filter(function (m) {
							return m !== d;
						});
					}
				);
			},
			assignSyncMedium: function (u) {
				for (i = !0; o.length; ) {
					var d = o;
					(o = []), d.forEach(u);
				}
				o = {
					push: function (m) {
						return u(m);
					},
					filter: function () {
						return o;
					},
				};
			},
			assignMedium: function (u) {
				i = !0;
				var d = [];
				if (o.length) {
					var m = o;
					(o = []), m.forEach(u), (d = o);
				}
				var g = function () {
						var y = d;
						(d = []), y.forEach(u);
					},
					p = function () {
						return Promise.resolve().then(g);
					};
				p(),
					(o = {
						push: function (y) {
							d.push(y), p();
						},
						filter: function (y) {
							return (d = d.filter(y)), o;
						},
					});
			},
		};
	return c;
}
function vN(n) {
	n === void 0 && (n = {});
	var l = pN(null);
	return (l.options = hn({ async: !0, ssr: !1 }, n)), l;
}
var Wb = function (n) {
	var l = n.sideCar,
		o = Fb(n, ["sideCar"]);
	if (!l)
		throw new Error(
			"Sidecar: please provide `sideCar` property to import the right car"
		);
	var i = l.read();
	if (!i) throw new Error("Sidecar medium not found");
	return v.createElement(i, hn({}, o));
};
Wb.isSideCarExport = !0;
function gN(n, l) {
	return n.useMedium(l), Wb;
}
var Jb = vN(),
	wf = function () {},
	Bs = v.forwardRef(function (n, l) {
		var o = v.useRef(null),
			i = v.useState({
				onScrollCapture: wf,
				onWheelCapture: wf,
				onTouchMoveCapture: wf,
			}),
			c = i[0],
			u = i[1],
			d = n.forwardProps,
			m = n.children,
			g = n.className,
			p = n.removeScrollBar,
			y = n.enabled,
			x = n.shards,
			S = n.sideCar,
			E = n.noIsolation,
			C = n.inert,
			A = n.allowPinchZoom,
			R = n.as,
			M = R === void 0 ? "div" : R,
			k = n.gapMode,
			D = Fb(n, [
				"forwardProps",
				"children",
				"className",
				"removeScrollBar",
				"enabled",
				"shards",
				"sideCar",
				"noIsolation",
				"inert",
				"allowPinchZoom",
				"as",
				"gapMode",
			]),
			L = S,
			_ = mN([o, l]),
			q = hn(hn({}, D), c);
		return v.createElement(
			v.Fragment,
			null,
			y &&
				v.createElement(L, {
					sideCar: Jb,
					removeScrollBar: p,
					shards: x,
					noIsolation: E,
					inert: C,
					setCallbacks: u,
					allowPinchZoom: !!A,
					lockRef: o,
					gapMode: k,
				}),
			d
				? v.cloneElement(v.Children.only(m), hn(hn({}, q), { ref: _ }))
				: v.createElement(M, hn({}, q, { className: g, ref: _ }), m)
		);
	});
Bs.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Bs.classNames = { fullWidth: hs, zeroRight: ms };
var yN = function () {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function bN() {
	if (!document) return null;
	var n = document.createElement("style");
	n.type = "text/css";
	var l = yN();
	return l && n.setAttribute("nonce", l), n;
}
function xN(n, l) {
	n.styleSheet
		? (n.styleSheet.cssText = l)
		: n.appendChild(document.createTextNode(l));
}
function SN(n) {
	var l = document.head || document.getElementsByTagName("head")[0];
	l.appendChild(n);
}
var wN = function () {
		var n = 0,
			l = null;
		return {
			add: function (o) {
				n == 0 && (l = bN()) && (xN(l, o), SN(l)), n++;
			},
			remove: function () {
				n--,
					!n &&
						l &&
						(l.parentNode && l.parentNode.removeChild(l),
						(l = null));
			},
		};
	},
	EN = function () {
		var n = wN();
		return function (l, o) {
			v.useEffect(
				function () {
					return (
						n.add(l),
						function () {
							n.remove();
						}
					);
				},
				[l && o]
			);
		};
	},
	ex = function () {
		var n = EN(),
			l = function (o) {
				var i = o.styles,
					c = o.dynamic;
				return n(i, c), null;
			};
		return l;
	},
	AN = { left: 0, top: 0, right: 0, gap: 0 },
	Ef = function (n) {
		return parseInt(n || "", 10) || 0;
	},
	CN = function (n) {
		var l = window.getComputedStyle(document.body),
			o = l[n === "padding" ? "paddingLeft" : "marginLeft"],
			i = l[n === "padding" ? "paddingTop" : "marginTop"],
			c = l[n === "padding" ? "paddingRight" : "marginRight"];
		return [Ef(o), Ef(i), Ef(c)];
	},
	RN = function (n) {
		if ((n === void 0 && (n = "margin"), typeof window > "u")) return AN;
		var l = CN(n),
			o = document.documentElement.clientWidth,
			i = window.innerWidth;
		return {
			left: l[0],
			top: l[1],
			right: l[2],
			gap: Math.max(0, i - o + l[2] - l[0]),
		};
	},
	NN = ex(),
	Zr = "data-scroll-locked",
	TN = function (n, l, o, i) {
		var c = n.left,
			u = n.top,
			d = n.right,
			m = n.gap;
		return (
			o === void 0 && (o = "margin"),
			`
  .`
				.concat(
					cN,
					` {
   overflow: hidden `
				)
				.concat(
					i,
					`;
   padding-right: `
				)
				.concat(m, "px ")
				.concat(
					i,
					`;
  }
  body[`
				)
				.concat(
					Zr,
					`] {
    overflow: hidden `
				)
				.concat(
					i,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						l && "position: relative ".concat(i, ";"),
						o === "margin" &&
							`
    padding-left: `
								.concat(
									c,
									`px;
    padding-top: `
								)
								.concat(
									u,
									`px;
    padding-right: `
								)
								.concat(
									d,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `
								)
								.concat(m, "px ")
								.concat(
									i,
									`;
    `
								),
						o === "padding" &&
							"padding-right: ".concat(m, "px ").concat(i, ";"),
					]
						.filter(Boolean)
						.join(""),
					`
  }
  
  .`
				)
				.concat(
					ms,
					` {
    right: `
				)
				.concat(m, "px ")
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(
					hs,
					` {
    margin-right: `
				)
				.concat(m, "px ")
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(ms, " .")
				.concat(
					ms,
					` {
    right: 0 `
				)
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(hs, " .")
				.concat(
					hs,
					` {
    margin-right: 0 `
				)
				.concat(
					i,
					`;
  }
  
  body[`
				)
				.concat(
					Zr,
					`] {
    `
				)
				.concat(uN, ": ")
				.concat(
					m,
					`px;
  }
`
				)
		);
	},
	kg = function () {
		var n = parseInt(document.body.getAttribute(Zr) || "0", 10);
		return isFinite(n) ? n : 0;
	},
	MN = function () {
		v.useEffect(function () {
			return (
				document.body.setAttribute(Zr, (kg() + 1).toString()),
				function () {
					var n = kg() - 1;
					n <= 0
						? document.body.removeAttribute(Zr)
						: document.body.setAttribute(Zr, n.toString());
				}
			);
		}, []);
	},
	ON = function (n) {
		var l = n.noRelative,
			o = n.noImportant,
			i = n.gapMode,
			c = i === void 0 ? "margin" : i;
		MN();
		var u = v.useMemo(
			function () {
				return RN(c);
			},
			[c]
		);
		return v.createElement(NN, {
			styles: TN(u, !l, c, o ? "" : "!important"),
		});
	},
	Gf = !1;
if (typeof window < "u")
	try {
		var as = Object.defineProperty({}, "passive", {
			get: function () {
				return (Gf = !0), !0;
			},
		});
		window.addEventListener("test", as, as),
			window.removeEventListener("test", as, as);
	} catch {
		Gf = !1;
	}
var Gr = Gf ? { passive: !1 } : !1,
	_N = function (n) {
		return n.tagName === "TEXTAREA";
	},
	tx = function (n, l) {
		if (!(n instanceof Element)) return !1;
		var o = window.getComputedStyle(n);
		return (
			o[l] !== "hidden" &&
			!(o.overflowY === o.overflowX && !_N(n) && o[l] === "visible")
		);
	},
	DN = function (n) {
		return tx(n, "overflowY");
	},
	jN = function (n) {
		return tx(n, "overflowX");
	},
	Bg = function (n, l) {
		var o = l.ownerDocument,
			i = l;
		do {
			typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
			var c = nx(n, i);
			if (c) {
				var u = ax(n, i),
					d = u[1],
					m = u[2];
				if (d > m) return !0;
			}
			i = i.parentNode;
		} while (i && i !== o.body);
		return !1;
	},
	zN = function (n) {
		var l = n.scrollTop,
			o = n.scrollHeight,
			i = n.clientHeight;
		return [l, o, i];
	},
	PN = function (n) {
		var l = n.scrollLeft,
			o = n.scrollWidth,
			i = n.clientWidth;
		return [l, o, i];
	},
	nx = function (n, l) {
		return n === "v" ? DN(l) : jN(l);
	},
	ax = function (n, l) {
		return n === "v" ? zN(l) : PN(l);
	},
	LN = function (n, l) {
		return n === "h" && l === "rtl" ? -1 : 1;
	},
	UN = function (n, l, o, i, c) {
		var u = LN(n, window.getComputedStyle(l).direction),
			d = u * i,
			m = o.target,
			g = l.contains(m),
			p = !1,
			y = d > 0,
			x = 0,
			S = 0;
		do {
			var E = ax(n, m),
				C = E[0],
				A = E[1],
				R = E[2],
				M = A - R - u * C;
			(C || M) && nx(n, m) && ((x += M), (S += C)),
				m instanceof ShadowRoot ? (m = m.host) : (m = m.parentNode);
		} while (
			(!g && m !== document.body) ||
			(g && (l.contains(m) || l === m))
		);
		return (
			((y && Math.abs(x) < 1) || (!y && Math.abs(S) < 1)) && (p = !0), p
		);
	},
	rs = function (n) {
		return "changedTouches" in n
			? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
			: [0, 0];
	},
	Gg = function (n) {
		return [n.deltaX, n.deltaY];
	},
	$g = function (n) {
		return n && "current" in n ? n.current : n;
	},
	HN = function (n, l) {
		return n[0] === l[0] && n[1] === l[1];
	},
	kN = function (n) {
		return `
  .block-interactivity-`
			.concat(
				n,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				n,
				` {pointer-events: all;}
`
			);
	},
	BN = 0,
	$r = [];
function GN(n) {
	var l = v.useRef([]),
		o = v.useRef([0, 0]),
		i = v.useRef(),
		c = v.useState(BN++)[0],
		u = v.useState(ex)[0],
		d = v.useRef(n);
	v.useEffect(
		function () {
			d.current = n;
		},
		[n]
	),
		v.useEffect(
			function () {
				if (n.inert) {
					document.body.classList.add(
						"block-interactivity-".concat(c)
					);
					var A = sN(
						[n.lockRef.current],
						(n.shards || []).map($g),
						!0
					).filter(Boolean);
					return (
						A.forEach(function (R) {
							return R.classList.add(
								"allow-interactivity-".concat(c)
							);
						}),
						function () {
							document.body.classList.remove(
								"block-interactivity-".concat(c)
							),
								A.forEach(function (R) {
									return R.classList.remove(
										"allow-interactivity-".concat(c)
									);
								});
						}
					);
				}
			},
			[n.inert, n.lockRef.current, n.shards]
		);
	var m = v.useCallback(function (A, R) {
			if (
				("touches" in A && A.touches.length === 2) ||
				(A.type === "wheel" && A.ctrlKey)
			)
				return !d.current.allowPinchZoom;
			var M = rs(A),
				k = o.current,
				D = "deltaX" in A ? A.deltaX : k[0] - M[0],
				L = "deltaY" in A ? A.deltaY : k[1] - M[1],
				_,
				q = A.target,
				P = Math.abs(D) > Math.abs(L) ? "h" : "v";
			if ("touches" in A && P === "h" && q.type === "range") return !1;
			var X = Bg(P, q);
			if (!X) return !0;
			if (
				(X ? (_ = P) : ((_ = P === "v" ? "h" : "v"), (X = Bg(P, q))),
				!X)
			)
				return !1;
			if (
				(!i.current &&
					"changedTouches" in A &&
					(D || L) &&
					(i.current = _),
				!_)
			)
				return !0;
			var ne = i.current || _;
			return UN(ne, R, A, ne === "h" ? D : L);
		}, []),
		g = v.useCallback(function (A) {
			var R = A;
			if (!(!$r.length || $r[$r.length - 1] !== u)) {
				var M = "deltaY" in R ? Gg(R) : rs(R),
					k = l.current.filter(function (_) {
						return (
							_.name === R.type &&
							(_.target === R.target ||
								R.target === _.shadowParent) &&
							HN(_.delta, M)
						);
					})[0];
				if (k && k.should) {
					R.cancelable && R.preventDefault();
					return;
				}
				if (!k) {
					var D = (d.current.shards || [])
							.map($g)
							.filter(Boolean)
							.filter(function (_) {
								return _.contains(R.target);
							}),
						L = D.length > 0 ? m(R, D[0]) : !d.current.noIsolation;
					L && R.cancelable && R.preventDefault();
				}
			}
		}, []),
		p = v.useCallback(function (A, R, M, k) {
			var D = {
				name: A,
				delta: R,
				target: M,
				should: k,
				shadowParent: $N(M),
			};
			l.current.push(D),
				setTimeout(function () {
					l.current = l.current.filter(function (L) {
						return L !== D;
					});
				}, 1);
		}, []),
		y = v.useCallback(function (A) {
			(o.current = rs(A)), (i.current = void 0);
		}, []),
		x = v.useCallback(function (A) {
			p(A.type, Gg(A), A.target, m(A, n.lockRef.current));
		}, []),
		S = v.useCallback(function (A) {
			p(A.type, rs(A), A.target, m(A, n.lockRef.current));
		}, []);
	v.useEffect(function () {
		return (
			$r.push(u),
			n.setCallbacks({
				onScrollCapture: x,
				onWheelCapture: x,
				onTouchMoveCapture: S,
			}),
			document.addEventListener("wheel", g, Gr),
			document.addEventListener("touchmove", g, Gr),
			document.addEventListener("touchstart", y, Gr),
			function () {
				($r = $r.filter(function (A) {
					return A !== u;
				})),
					document.removeEventListener("wheel", g, Gr),
					document.removeEventListener("touchmove", g, Gr),
					document.removeEventListener("touchstart", y, Gr);
			}
		);
	}, []);
	var E = n.removeScrollBar,
		C = n.inert;
	return v.createElement(
		v.Fragment,
		null,
		C ? v.createElement(u, { styles: kN(c) }) : null,
		E ? v.createElement(ON, { gapMode: n.gapMode }) : null
	);
}
function $N(n) {
	for (var l = null; n !== null; )
		n instanceof ShadowRoot && ((l = n.host), (n = n.host)),
			(n = n.parentNode);
	return l;
}
const YN = gN(Jb, GN);
var Gs = v.forwardRef(function (n, l) {
	return v.createElement(Bs, hn({}, n, { ref: l, sideCar: YN }));
});
Gs.classNames = Bs.classNames;
var $s = "Popover",
	[rx, QO] = Rt($s, [kb]),
	Ao = kb(),
	[qN, wa] = rx($s),
	lx = (n) => {
		const {
				__scopePopover: l,
				children: o,
				open: i,
				defaultOpen: c,
				onOpenChange: u,
				modal: d = !1,
			} = n,
			m = Ao(l),
			g = v.useRef(null),
			[p, y] = v.useState(!1),
			[x, S] = nN({
				prop: i,
				defaultProp: c ?? !1,
				onChange: u,
				caller: $s,
			});
		return h.jsx(QR, {
			...m,
			children: h.jsx(qN, {
				scope: l,
				contentId: Kr(),
				triggerRef: g,
				open: x,
				onOpenChange: S,
				onOpenToggle: v.useCallback(() => S((E) => !E), [S]),
				hasCustomAnchor: p,
				onCustomAnchorAdd: v.useCallback(() => y(!0), []),
				onCustomAnchorRemove: v.useCallback(() => y(!1), []),
				modal: d,
				children: o,
			}),
		});
	};
lx.displayName = $s;
var ox = "PopoverAnchor",
	XN = v.forwardRef((n, l) => {
		const { __scopePopover: o, ...i } = n,
			c = wa(ox, o),
			u = Ao(o),
			{ onCustomAnchorAdd: d, onCustomAnchorRemove: m } = c;
		return (
			v.useEffect(() => (d(), () => m()), [d, m]),
			h.jsx(Qb, { ...u, ...i, ref: l })
		);
	});
XN.displayName = ox;
var ix = "PopoverTrigger",
	sx = v.forwardRef((n, l) => {
		const { __scopePopover: o, ...i } = n,
			c = wa(ix, o),
			u = Ao(o),
			d = Se(l, c.triggerRef),
			m = h.jsx(Bn.button, {
				type: "button",
				"aria-haspopup": "dialog",
				"aria-expanded": c.open,
				"aria-controls": c.contentId,
				"data-state": mx(c.open),
				...i,
				ref: d,
				onClick: ie(n.onClick, c.onOpenToggle),
			});
		return c.hasCustomAnchor
			? m
			: h.jsx(Qb, { asChild: !0, ...u, children: m });
	});
sx.displayName = ix;
var Ud = "PopoverPortal",
	[VN, KN] = rx(Ud, { forceMount: void 0 }),
	cx = (n) => {
		const {
				__scopePopover: l,
				forceMount: o,
				children: i,
				container: c,
			} = n,
			u = wa(Ud, l);
		return h.jsx(VN, {
			scope: l,
			forceMount: o,
			children: h.jsx(Pd, {
				present: o || u.open,
				children: h.jsx(Zb, { asChild: !0, container: c, children: i }),
			}),
		});
	};
cx.displayName = Ud;
var tl = "PopoverContent",
	ux = v.forwardRef((n, l) => {
		const o = KN(tl, n.__scopePopover),
			{ forceMount: i = o.forceMount, ...c } = n,
			u = wa(tl, n.__scopePopover);
		return h.jsx(Pd, {
			present: i || u.open,
			children: u.modal
				? h.jsx(ZN, { ...c, ref: l })
				: h.jsx(IN, { ...c, ref: l }),
		});
	});
ux.displayName = tl;
var QN = vn("PopoverContent.RemoveScroll"),
	ZN = v.forwardRef((n, l) => {
		const o = wa(tl, n.__scopePopover),
			i = v.useRef(null),
			c = Se(l, i),
			u = v.useRef(!1);
		return (
			v.useEffect(() => {
				const d = i.current;
				if (d) return Ld(d);
			}, []),
			h.jsx(Gs, {
				as: QN,
				allowPinchZoom: !0,
				children: h.jsx(fx, {
					...n,
					ref: c,
					trapFocus: o.open,
					disableOutsidePointerEvents: !0,
					onCloseAutoFocus: ie(n.onCloseAutoFocus, (d) => {
						var m;
						d.preventDefault(),
							u.current ||
								(m = o.triggerRef.current) == null ||
								m.focus();
					}),
					onPointerDownOutside: ie(
						n.onPointerDownOutside,
						(d) => {
							const m = d.detail.originalEvent,
								g = m.button === 0 && m.ctrlKey === !0,
								p = m.button === 2 || g;
							u.current = p;
						},
						{ checkForDefaultPrevented: !1 }
					),
					onFocusOutside: ie(
						n.onFocusOutside,
						(d) => d.preventDefault(),
						{ checkForDefaultPrevented: !1 }
					),
				}),
			})
		);
	}),
	IN = v.forwardRef((n, l) => {
		const o = wa(tl, n.__scopePopover),
			i = v.useRef(!1),
			c = v.useRef(!1);
		return h.jsx(fx, {
			...n,
			ref: l,
			trapFocus: !1,
			disableOutsidePointerEvents: !1,
			onCloseAutoFocus: (u) => {
				var d, m;
				(d = n.onCloseAutoFocus) == null || d.call(n, u),
					u.defaultPrevented ||
						(i.current ||
							(m = o.triggerRef.current) == null ||
							m.focus(),
						u.preventDefault()),
					(i.current = !1),
					(c.current = !1);
			},
			onInteractOutside: (u) => {
				var g, p;
				(g = n.onInteractOutside) == null || g.call(n, u),
					u.defaultPrevented ||
						((i.current = !0),
						u.detail.originalEvent.type === "pointerdown" &&
							(c.current = !0));
				const d = u.target;
				((p = o.triggerRef.current) == null ? void 0 : p.contains(d)) &&
					u.preventDefault(),
					u.detail.originalEvent.type === "focusin" &&
						c.current &&
						u.preventDefault();
			},
		});
	}),
	fx = v.forwardRef((n, l) => {
		const {
				__scopePopover: o,
				trapFocus: i,
				onOpenAutoFocus: c,
				onCloseAutoFocus: u,
				disableOutsidePointerEvents: d,
				onEscapeKeyDown: m,
				onPointerDownOutside: g,
				onFocusOutside: p,
				onInteractOutside: y,
				...x
			} = n,
			S = wa(tl, o),
			E = Ao(o);
		return (
			Dd(),
			h.jsx(Pb, {
				asChild: !0,
				loop: !0,
				trapped: i,
				onMountAutoFocus: c,
				onUnmountAutoFocus: u,
				children: h.jsx(jb, {
					asChild: !0,
					disableOutsidePointerEvents: d,
					onInteractOutside: y,
					onEscapeKeyDown: m,
					onPointerDownOutside: g,
					onFocusOutside: p,
					onDismiss: () => S.onOpenChange(!1),
					children: h.jsx(ZR, {
						"data-state": mx(S.open),
						role: "dialog",
						id: S.contentId,
						...E,
						...x,
						ref: l,
						style: {
							...x.style,
							"--radix-popover-content-transform-origin":
								"var(--radix-popper-transform-origin)",
							"--radix-popover-content-available-width":
								"var(--radix-popper-available-width)",
							"--radix-popover-content-available-height":
								"var(--radix-popper-available-height)",
							"--radix-popover-trigger-width":
								"var(--radix-popper-anchor-width)",
							"--radix-popover-trigger-height":
								"var(--radix-popper-anchor-height)",
						},
					}),
				}),
			})
		);
	}),
	dx = "PopoverClose",
	FN = v.forwardRef((n, l) => {
		const { __scopePopover: o, ...i } = n,
			c = wa(dx, o);
		return h.jsx(Bn.button, {
			type: "button",
			...i,
			ref: l,
			onClick: ie(n.onClick, () => c.onOpenChange(!1)),
		});
	});
FN.displayName = dx;
var WN = "PopoverArrow",
	JN = v.forwardRef((n, l) => {
		const { __scopePopover: o, ...i } = n,
			c = Ao(o);
		return h.jsx(IR, { ...c, ...i, ref: l });
	});
JN.displayName = WN;
function mx(n) {
	return n ? "open" : "closed";
}
var eT = lx,
	tT = sx,
	nT = cx,
	aT = ux;
function hx({ ...n }) {
	return h.jsx(eT, { "data-slot": "popover", ...n });
}
function px({ ...n }) {
	return h.jsx(tT, { "data-slot": "popover-trigger", ...n });
}
function vx({ className: n, align: l = "center", sideOffset: o = 4, ...i }) {
	return h.jsx(nT, {
		children: h.jsx(aT, {
			"data-slot": "popover-content",
			align: l,
			sideOffset: o,
			className: De(
				"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
				n
			),
			...i,
		}),
	});
}
function rT({ setIsSyncOpen: n }) {
	var m;
	const [l, o] = v.useState(""),
		[i, c] = v.useState(""),
		u = async () => {
			const g = await window.electron.get_my_details();
			console.log(g), o(g);
		},
		d = async () => {
			const g = await window.electron.get_ip();
			c(g);
		};
	return (
		v.useEffect(() => {
			u(), d();
		}, []),
		h.jsx(Cb, {
			children: h.jsxs("div", {
				className:
					"flex items-center justify-between p-3 border-b border-border",
				children: [
					h.jsxs("div", {
						className: "flex items-center gap-3",
						children: [
							h.jsxs(hx, {
								children: [
									h.jsxs(us, {
										children: [
											h.jsx(fs, {
												asChild: !0,
												children: h.jsx(px, {
													asChild: !0,
													children: h.jsxs(Md, {
														className:
															"h-10 w-10 cursor-pointer",
														children: [
															h.jsx(Od, {
																src: `https://api.dicebear.com/6.x/initials/svg?seed=${
																	(l == null
																		? void 0
																		: l.UserName) ||
																	""
																}`,
																alt:
																	(l == null
																		? void 0
																		: l.UserName) ||
																	"",
															}),
															h.jsx(_d, {
																children:
																	((m =
																		l ==
																		null
																			? void 0
																			: l.UserName) ==
																	null
																		? void 0
																		: m[0]) ||
																	"?",
															}),
														],
													}),
												}),
											}),
											h.jsx(ds, {
												side: "bottom",
												children: "Profile",
											}),
										],
									}),
									h.jsx(vx, {
										side: "bottom",
										align: "start",
										sideOffset: 4,
										alignOffset: 8,
										className:
											"w-fit px-3 py-2 bg-gray-200 dark:bg-neutral-700",
										children: h.jsxs("div", {
											className: "flex flex-col px-0",
											children: [
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"User Name:",
														}),
														" ",
														l.UserName,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"Private Key:",
														}),
														" ",
														l.PrivateKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"Public Key:",
														}),
														" ",
														l.PublicKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"Address:",
														}),
														" ",
														l.Address,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"View Private Key:",
														}),
														" ",
														l.ViewPrivateKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"View Public Key:",
														}),
														" ",
														l.ViewPublicKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"Spend Private Key:",
														}),
														" ",
														l.SpendPrivateKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"Spend Public Key:",
														}),
														" ",
														l.SpendPublicKey,
													],
												}),
												h.jsxs("div", {
													className: "py-2",
													children: [
														h.jsx("strong", {
															children:
																"IP Address:",
														}),
														" ",
														i,
													],
												}),
											],
										}),
									}),
								],
							}),
							h.jsx("div", {
								className: "text-2xl font-semibold",
								children: "Chats",
							}),
						],
					}),
					h.jsxs("div", {
						className: "flex items-center gap-2 ",
						children: [
							h.jsxs(us, {
								children: [
									h.jsx(fs, {
										asChild: !0,
										children: h.jsx("div", {
											className:
												"hover:bg-[var(--hover-bg)] rounded-md shadow hover:shadow-md",
											children: h.jsx(Bt, {
												size: "icon",
												variant: "ghost",
												onClick: () => n(!0),
												className: "cursor-pointer",
												children: h.jsx(e1, {
													className: "!w-6 !h-6",
												}),
											}),
										}),
									}),
									h.jsx(ds, {
										side: "bottom",
										children: "New Chat",
									}),
								],
							}),
							h.jsxs(us, {
								children: [
									h.jsx(fs, {
										asChild: !0,
										children: h.jsx("div", {
											className:
												"hover:bg-[var(--hover-bg)] rounded-md shadow hover:shadow-md",
											children: h.jsx(rd, {}),
										}),
									}),
									h.jsx(ds, {
										side: "bottom",
										children: "Change Theme",
									}),
								],
							}),
						],
					}),
				],
			}),
		})
	);
}
function ya({ className: n, type: l, ...o }) {
	return h.jsx("input", {
		type: l,
		"data-slot": "input",
		className: De(
			"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
			"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
			n
		),
		...o,
	});
}
function Co({ className: n, ...l }) {
	return h.jsx("div", {
		"data-slot": "card",
		className: De(
			"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
			n
		),
		...l,
	});
}
function Ro({ className: n, ...l }) {
	return h.jsx("div", {
		"data-slot": "card-content",
		className: De("px-6", n),
		...l,
	});
}
function lT({ name: n, lastMessage: l, time: o, selected: i }) {
	return h.jsx(Co, {
		className:
			"cursor-pointer transition hover:bg p-0 border-0 border-b border-border",
		children: h.jsxs(Ro, {
			className:
				"px-3 py-4 flex items-start justify-between rounded-md shadow transition-shadow " +
				(i
					? "bg-[var(--hover-bg)] shadow-md"
					: "hover:bg-[var(--hover-bg)] hover:shadow-md"),
			children: [
				h.jsxs("div", {
					className: "flex items-start gap-3",
					children: [
						h.jsxs(Md, {
							className: "h-9 w-9",
							children: [
								h.jsx(Od, {
									src: `https://api.dicebear.com/6.x/initials/svg?seed=${n}`,
									alt: n,
								}),
								h.jsx(_d, {
									children: n == null ? void 0 : n[0],
								}),
							],
						}),
						h.jsxs("div", {
							children: [
								h.jsx("div", {
									className: "font-large",
									children: n,
								}),
								h.jsx("div", {
									className:
										"text-sm text-muted-foreground truncate max-w-[180px]",
									children: l,
								}),
							],
						}),
					],
				}),
				h.jsx("span", {
					className:
						"text-xs text-muted-foreground whitespace-nowrap mt-1",
					children: o,
				}),
			],
		}),
	});
}
var oT = v.createContext(void 0);
function Hd(n) {
	const l = v.useContext(oT);
	return n || l || "ltr";
}
function iT(n, [l, o]) {
	return Math.min(o, Math.max(l, n));
}
function sT(n, l) {
	return v.useReducer((o, i) => l[o][i] ?? o, n);
}
var kd = "ScrollArea",
	[gx, ZO] = Rt(kd),
	[cT, Jt] = gx(kd),
	yx = v.forwardRef((n, l) => {
		const {
				__scopeScrollArea: o,
				type: i = "hover",
				dir: c,
				scrollHideDelay: u = 600,
				...d
			} = n,
			[m, g] = v.useState(null),
			[p, y] = v.useState(null),
			[x, S] = v.useState(null),
			[E, C] = v.useState(null),
			[A, R] = v.useState(null),
			[M, k] = v.useState(0),
			[D, L] = v.useState(0),
			[_, q] = v.useState(!1),
			[P, X] = v.useState(!1),
			ne = Se(l, (de) => g(de)),
			le = Hd(c);
		return h.jsx(cT, {
			scope: o,
			type: i,
			dir: le,
			scrollHideDelay: u,
			scrollArea: m,
			viewport: p,
			onViewportChange: y,
			content: x,
			onContentChange: S,
			scrollbarX: E,
			onScrollbarXChange: C,
			scrollbarXEnabled: _,
			onScrollbarXEnabledChange: q,
			scrollbarY: A,
			onScrollbarYChange: R,
			scrollbarYEnabled: P,
			onScrollbarYEnabledChange: X,
			onCornerWidthChange: k,
			onCornerHeightChange: L,
			children: h.jsx(qe.div, {
				dir: le,
				...d,
				ref: ne,
				style: {
					position: "relative",
					"--radix-scroll-area-corner-width": M + "px",
					"--radix-scroll-area-corner-height": D + "px",
					...n.style,
				},
			}),
		});
	});
yx.displayName = kd;
var bx = "ScrollAreaViewport",
	xx = v.forwardRef((n, l) => {
		const { __scopeScrollArea: o, children: i, nonce: c, ...u } = n,
			d = Jt(bx, o),
			m = v.useRef(null),
			g = Se(l, m, d.onViewportChange);
		return h.jsxs(h.Fragment, {
			children: [
				h.jsx("style", {
					dangerouslySetInnerHTML: {
						__html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
					},
					nonce: c,
				}),
				h.jsx(qe.div, {
					"data-radix-scroll-area-viewport": "",
					...u,
					ref: g,
					style: {
						overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
						overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
						...n.style,
					},
					children: h.jsx("div", {
						ref: d.onContentChange,
						style: { minWidth: "100%", display: "table" },
						children: i,
					}),
				}),
			],
		});
	});
xx.displayName = bx;
var xn = "ScrollAreaScrollbar",
	Sx = v.forwardRef((n, l) => {
		const { forceMount: o, ...i } = n,
			c = Jt(xn, n.__scopeScrollArea),
			{ onScrollbarXEnabledChange: u, onScrollbarYEnabledChange: d } = c,
			m = n.orientation === "horizontal";
		return (
			v.useEffect(
				() => (
					m ? u(!0) : d(!0),
					() => {
						m ? u(!1) : d(!1);
					}
				),
				[m, u, d]
			),
			c.type === "hover"
				? h.jsx(uT, { ...i, ref: l, forceMount: o })
				: c.type === "scroll"
				? h.jsx(fT, { ...i, ref: l, forceMount: o })
				: c.type === "auto"
				? h.jsx(wx, { ...i, ref: l, forceMount: o })
				: c.type === "always"
				? h.jsx(Bd, { ...i, ref: l })
				: null
		);
	});
Sx.displayName = xn;
var uT = v.forwardRef((n, l) => {
		const { forceMount: o, ...i } = n,
			c = Jt(xn, n.__scopeScrollArea),
			[u, d] = v.useState(!1);
		return (
			v.useEffect(() => {
				const m = c.scrollArea;
				let g = 0;
				if (m) {
					const p = () => {
							window.clearTimeout(g), d(!0);
						},
						y = () => {
							g = window.setTimeout(
								() => d(!1),
								c.scrollHideDelay
							);
						};
					return (
						m.addEventListener("pointerenter", p),
						m.addEventListener("pointerleave", y),
						() => {
							window.clearTimeout(g),
								m.removeEventListener("pointerenter", p),
								m.removeEventListener("pointerleave", y);
						}
					);
				}
			}, [c.scrollArea, c.scrollHideDelay]),
			h.jsx(bn, {
				present: o || u,
				children: h.jsx(wx, {
					"data-state": u ? "visible" : "hidden",
					...i,
					ref: l,
				}),
			})
		);
	}),
	fT = v.forwardRef((n, l) => {
		const { forceMount: o, ...i } = n,
			c = Jt(xn, n.__scopeScrollArea),
			u = n.orientation === "horizontal",
			d = qs(() => g("SCROLL_END"), 100),
			[m, g] = sT("hidden", {
				hidden: { SCROLL: "scrolling" },
				scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
				interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
				idle: {
					HIDE: "hidden",
					SCROLL: "scrolling",
					POINTER_ENTER: "interacting",
				},
			});
		return (
			v.useEffect(() => {
				if (m === "idle") {
					const p = window.setTimeout(
						() => g("HIDE"),
						c.scrollHideDelay
					);
					return () => window.clearTimeout(p);
				}
			}, [m, c.scrollHideDelay, g]),
			v.useEffect(() => {
				const p = c.viewport,
					y = u ? "scrollLeft" : "scrollTop";
				if (p) {
					let x = p[y];
					const S = () => {
						const E = p[y];
						x !== E && (g("SCROLL"), d()), (x = E);
					};
					return (
						p.addEventListener("scroll", S),
						() => p.removeEventListener("scroll", S)
					);
				}
			}, [c.viewport, u, g, d]),
			h.jsx(bn, {
				present: o || m !== "hidden",
				children: h.jsx(Bd, {
					"data-state": m === "hidden" ? "hidden" : "visible",
					...i,
					ref: l,
					onPointerEnter: ie(n.onPointerEnter, () =>
						g("POINTER_ENTER")
					),
					onPointerLeave: ie(n.onPointerLeave, () =>
						g("POINTER_LEAVE")
					),
				}),
			})
		);
	}),
	wx = v.forwardRef((n, l) => {
		const o = Jt(xn, n.__scopeScrollArea),
			{ forceMount: i, ...c } = n,
			[u, d] = v.useState(!1),
			m = n.orientation === "horizontal",
			g = qs(() => {
				if (o.viewport) {
					const p = o.viewport.offsetWidth < o.viewport.scrollWidth,
						y = o.viewport.offsetHeight < o.viewport.scrollHeight;
					d(m ? p : y);
				}
			}, 10);
		return (
			nl(o.viewport, g),
			nl(o.content, g),
			h.jsx(bn, {
				present: i || u,
				children: h.jsx(Bd, {
					"data-state": u ? "visible" : "hidden",
					...c,
					ref: l,
				}),
			})
		);
	}),
	Bd = v.forwardRef((n, l) => {
		const { orientation: o = "vertical", ...i } = n,
			c = Jt(xn, n.__scopeScrollArea),
			u = v.useRef(null),
			d = v.useRef(0),
			[m, g] = v.useState({
				content: 0,
				viewport: 0,
				scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
			}),
			p = Nx(m.viewport, m.content),
			y = {
				...i,
				sizes: m,
				onSizesChange: g,
				hasThumb: p > 0 && p < 1,
				onThumbChange: (S) => (u.current = S),
				onThumbPointerUp: () => (d.current = 0),
				onThumbPointerDown: (S) => (d.current = S),
			};
		function x(S, E) {
			return gT(S, d.current, m, E);
		}
		return o === "horizontal"
			? h.jsx(dT, {
					...y,
					ref: l,
					onThumbPositionChange: () => {
						if (c.viewport && u.current) {
							const S = c.viewport.scrollLeft,
								E = Yg(S, m, c.dir);
							u.current.style.transform = `translate3d(${E}px, 0, 0)`;
						}
					},
					onWheelScroll: (S) => {
						c.viewport && (c.viewport.scrollLeft = S);
					},
					onDragScroll: (S) => {
						c.viewport && (c.viewport.scrollLeft = x(S, c.dir));
					},
			  })
			: o === "vertical"
			? h.jsx(mT, {
					...y,
					ref: l,
					onThumbPositionChange: () => {
						if (c.viewport && u.current) {
							const S = c.viewport.scrollTop,
								E = Yg(S, m);
							u.current.style.transform = `translate3d(0, ${E}px, 0)`;
						}
					},
					onWheelScroll: (S) => {
						c.viewport && (c.viewport.scrollTop = S);
					},
					onDragScroll: (S) => {
						c.viewport && (c.viewport.scrollTop = x(S));
					},
			  })
			: null;
	}),
	dT = v.forwardRef((n, l) => {
		const { sizes: o, onSizesChange: i, ...c } = n,
			u = Jt(xn, n.__scopeScrollArea),
			[d, m] = v.useState(),
			g = v.useRef(null),
			p = Se(l, g, u.onScrollbarXChange);
		return (
			v.useEffect(() => {
				g.current && m(getComputedStyle(g.current));
			}, [g]),
			h.jsx(Ax, {
				"data-orientation": "horizontal",
				...c,
				ref: p,
				sizes: o,
				style: {
					bottom: 0,
					left:
						u.dir === "rtl"
							? "var(--radix-scroll-area-corner-width)"
							: 0,
					right:
						u.dir === "ltr"
							? "var(--radix-scroll-area-corner-width)"
							: 0,
					"--radix-scroll-area-thumb-width": Ys(o) + "px",
					...n.style,
				},
				onThumbPointerDown: (y) => n.onThumbPointerDown(y.x),
				onDragScroll: (y) => n.onDragScroll(y.x),
				onWheelScroll: (y, x) => {
					if (u.viewport) {
						const S = u.viewport.scrollLeft + y.deltaX;
						n.onWheelScroll(S), Mx(S, x) && y.preventDefault();
					}
				},
				onResize: () => {
					g.current &&
						u.viewport &&
						d &&
						i({
							content: u.viewport.scrollWidth,
							viewport: u.viewport.offsetWidth,
							scrollbar: {
								size: g.current.clientWidth,
								paddingStart: ws(d.paddingLeft),
								paddingEnd: ws(d.paddingRight),
							},
						});
				},
			})
		);
	}),
	mT = v.forwardRef((n, l) => {
		const { sizes: o, onSizesChange: i, ...c } = n,
			u = Jt(xn, n.__scopeScrollArea),
			[d, m] = v.useState(),
			g = v.useRef(null),
			p = Se(l, g, u.onScrollbarYChange);
		return (
			v.useEffect(() => {
				g.current && m(getComputedStyle(g.current));
			}, [g]),
			h.jsx(Ax, {
				"data-orientation": "vertical",
				...c,
				ref: p,
				sizes: o,
				style: {
					top: 0,
					right: u.dir === "ltr" ? 0 : void 0,
					left: u.dir === "rtl" ? 0 : void 0,
					bottom: "var(--radix-scroll-area-corner-height)",
					"--radix-scroll-area-thumb-height": Ys(o) + "px",
					...n.style,
				},
				onThumbPointerDown: (y) => n.onThumbPointerDown(y.y),
				onDragScroll: (y) => n.onDragScroll(y.y),
				onWheelScroll: (y, x) => {
					if (u.viewport) {
						const S = u.viewport.scrollTop + y.deltaY;
						n.onWheelScroll(S), Mx(S, x) && y.preventDefault();
					}
				},
				onResize: () => {
					g.current &&
						u.viewport &&
						d &&
						i({
							content: u.viewport.scrollHeight,
							viewport: u.viewport.offsetHeight,
							scrollbar: {
								size: g.current.clientHeight,
								paddingStart: ws(d.paddingTop),
								paddingEnd: ws(d.paddingBottom),
							},
						});
				},
			})
		);
	}),
	[hT, Ex] = gx(xn),
	Ax = v.forwardRef((n, l) => {
		const {
				__scopeScrollArea: o,
				sizes: i,
				hasThumb: c,
				onThumbChange: u,
				onThumbPointerUp: d,
				onThumbPointerDown: m,
				onThumbPositionChange: g,
				onDragScroll: p,
				onWheelScroll: y,
				onResize: x,
				...S
			} = n,
			E = Jt(xn, o),
			[C, A] = v.useState(null),
			R = Se(l, (ne) => A(ne)),
			M = v.useRef(null),
			k = v.useRef(""),
			D = E.viewport,
			L = i.content - i.viewport,
			_ = ze(y),
			q = ze(g),
			P = qs(x, 10);
		function X(ne) {
			if (M.current) {
				const le = ne.clientX - M.current.left,
					de = ne.clientY - M.current.top;
				p({ x: le, y: de });
			}
		}
		return (
			v.useEffect(() => {
				const ne = (le) => {
					const de = le.target;
					(C == null ? void 0 : C.contains(de)) && _(le, L);
				};
				return (
					document.addEventListener("wheel", ne, { passive: !1 }),
					() =>
						document.removeEventListener("wheel", ne, {
							passive: !1,
						})
				);
			}, [D, C, L, _]),
			v.useEffect(q, [i, q]),
			nl(C, P),
			nl(E.content, P),
			h.jsx(hT, {
				scope: o,
				scrollbar: C,
				hasThumb: c,
				onThumbChange: ze(u),
				onThumbPointerUp: ze(d),
				onThumbPositionChange: q,
				onThumbPointerDown: ze(m),
				children: h.jsx(qe.div, {
					...S,
					ref: R,
					style: { position: "absolute", ...S.style },
					onPointerDown: ie(n.onPointerDown, (ne) => {
						ne.button === 0 &&
							(ne.target.setPointerCapture(ne.pointerId),
							(M.current = C.getBoundingClientRect()),
							(k.current = document.body.style.webkitUserSelect),
							(document.body.style.webkitUserSelect = "none"),
							E.viewport &&
								(E.viewport.style.scrollBehavior = "auto"),
							X(ne));
					}),
					onPointerMove: ie(n.onPointerMove, X),
					onPointerUp: ie(n.onPointerUp, (ne) => {
						const le = ne.target;
						le.hasPointerCapture(ne.pointerId) &&
							le.releasePointerCapture(ne.pointerId),
							(document.body.style.webkitUserSelect = k.current),
							E.viewport &&
								(E.viewport.style.scrollBehavior = ""),
							(M.current = null);
					}),
				}),
			})
		);
	}),
	Ss = "ScrollAreaThumb",
	Cx = v.forwardRef((n, l) => {
		const { forceMount: o, ...i } = n,
			c = Ex(Ss, n.__scopeScrollArea);
		return h.jsx(bn, {
			present: o || c.hasThumb,
			children: h.jsx(pT, { ref: l, ...i }),
		});
	}),
	pT = v.forwardRef((n, l) => {
		const { __scopeScrollArea: o, style: i, ...c } = n,
			u = Jt(Ss, o),
			d = Ex(Ss, o),
			{ onThumbPositionChange: m } = d,
			g = Se(l, (x) => d.onThumbChange(x)),
			p = v.useRef(void 0),
			y = qs(() => {
				p.current && (p.current(), (p.current = void 0));
			}, 100);
		return (
			v.useEffect(() => {
				const x = u.viewport;
				if (x) {
					const S = () => {
						if ((y(), !p.current)) {
							const E = yT(x, m);
							(p.current = E), m();
						}
					};
					return (
						m(),
						x.addEventListener("scroll", S),
						() => x.removeEventListener("scroll", S)
					);
				}
			}, [u.viewport, y, m]),
			h.jsx(qe.div, {
				"data-state": d.hasThumb ? "visible" : "hidden",
				...c,
				ref: g,
				style: {
					width: "var(--radix-scroll-area-thumb-width)",
					height: "var(--radix-scroll-area-thumb-height)",
					...i,
				},
				onPointerDownCapture: ie(n.onPointerDownCapture, (x) => {
					const E = x.target.getBoundingClientRect(),
						C = x.clientX - E.left,
						A = x.clientY - E.top;
					d.onThumbPointerDown({ x: C, y: A });
				}),
				onPointerUp: ie(n.onPointerUp, d.onThumbPointerUp),
			})
		);
	});
Cx.displayName = Ss;
var Gd = "ScrollAreaCorner",
	Rx = v.forwardRef((n, l) => {
		const o = Jt(Gd, n.__scopeScrollArea),
			i = !!(o.scrollbarX && o.scrollbarY);
		return o.type !== "scroll" && i ? h.jsx(vT, { ...n, ref: l }) : null;
	});
Rx.displayName = Gd;
var vT = v.forwardRef((n, l) => {
	const { __scopeScrollArea: o, ...i } = n,
		c = Jt(Gd, o),
		[u, d] = v.useState(0),
		[m, g] = v.useState(0),
		p = !!(u && m);
	return (
		nl(c.scrollbarX, () => {
			var x;
			const y =
				((x = c.scrollbarX) == null ? void 0 : x.offsetHeight) || 0;
			c.onCornerHeightChange(y), g(y);
		}),
		nl(c.scrollbarY, () => {
			var x;
			const y =
				((x = c.scrollbarY) == null ? void 0 : x.offsetWidth) || 0;
			c.onCornerWidthChange(y), d(y);
		}),
		p
			? h.jsx(qe.div, {
					...i,
					ref: l,
					style: {
						width: u,
						height: m,
						position: "absolute",
						right: c.dir === "ltr" ? 0 : void 0,
						left: c.dir === "rtl" ? 0 : void 0,
						bottom: 0,
						...n.style,
					},
			  })
			: null
	);
});
function ws(n) {
	return n ? parseInt(n, 10) : 0;
}
function Nx(n, l) {
	const o = n / l;
	return isNaN(o) ? 0 : o;
}
function Ys(n) {
	const l = Nx(n.viewport, n.content),
		o = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
		i = (n.scrollbar.size - o) * l;
	return Math.max(i, 18);
}
function gT(n, l, o, i = "ltr") {
	const c = Ys(o),
		u = c / 2,
		d = l || u,
		m = c - d,
		g = o.scrollbar.paddingStart + d,
		p = o.scrollbar.size - o.scrollbar.paddingEnd - m,
		y = o.content - o.viewport,
		x = i === "ltr" ? [0, y] : [y * -1, 0];
	return Tx([g, p], x)(n);
}
function Yg(n, l, o = "ltr") {
	const i = Ys(l),
		c = l.scrollbar.paddingStart + l.scrollbar.paddingEnd,
		u = l.scrollbar.size - c,
		d = l.content - l.viewport,
		m = u - i,
		g = o === "ltr" ? [0, d] : [d * -1, 0],
		p = iT(n, g);
	return Tx([0, d], [0, m])(p);
}
function Tx(n, l) {
	return (o) => {
		if (n[0] === n[1] || l[0] === l[1]) return l[0];
		const i = (l[1] - l[0]) / (n[1] - n[0]);
		return l[0] + i * (o - n[0]);
	};
}
function Mx(n, l) {
	return n > 0 && n < l;
}
var yT = (n, l = () => {}) => {
	let o = { left: n.scrollLeft, top: n.scrollTop },
		i = 0;
	return (
		(function c() {
			const u = { left: n.scrollLeft, top: n.scrollTop },
				d = o.left !== u.left,
				m = o.top !== u.top;
			(d || m) && l(), (o = u), (i = window.requestAnimationFrame(c));
		})(),
		() => window.cancelAnimationFrame(i)
	);
};
function qs(n, l) {
	const o = ze(n),
		i = v.useRef(0);
	return (
		v.useEffect(() => () => window.clearTimeout(i.current), []),
		v.useCallback(() => {
			window.clearTimeout(i.current),
				(i.current = window.setTimeout(o, l));
		}, [o, l])
	);
}
function nl(n, l) {
	const o = ze(l);
	Qe(() => {
		let i = 0;
		if (n) {
			const c = new ResizeObserver(() => {
				cancelAnimationFrame(i), (i = window.requestAnimationFrame(o));
			});
			return (
				c.observe(n),
				() => {
					window.cancelAnimationFrame(i), c.unobserve(n);
				}
			);
		}
	}, [n, o]);
}
var bT = yx,
	xT = xx,
	ST = Rx;
function Ox({ className: n, children: l, ...o }) {
	return h.jsxs(bT, {
		"data-slot": "scroll-area",
		className: De("relative", n),
		...o,
		children: [
			h.jsx(xT, {
				"data-slot": "scroll-area-viewport",
				className:
					"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
				children: l,
			}),
			h.jsx($d, {}),
			h.jsx(ST, {}),
		],
	});
}
function $d({ className: n, orientation: l = "vertical", ...o }) {
	return h.jsx(Sx, {
		"data-slot": "scroll-area-scrollbar",
		orientation: l,
		className: De(
			"flex touch-none p-px transition-colors select-none",
			l === "vertical" && "h-full w-2.5 border-l border-l-transparent",
			l === "horizontal" &&
				"h-2.5 flex-col border-t border-t-transparent",
			n
		),
		...o,
		children: h.jsx(Cx, {
			"data-slot": "scroll-area-thumb",
			className: "bg-border relative flex-1 rounded-full",
		}),
	});
}
function wT({ onSelectChat: n, setIsSyncOpen: l, users: o }) {
	const [i, c] = v.useState(null),
		[u, d] = v.useState(""),
		m = o.filter((p) => p.Name.toLowerCase().includes(u.toLowerCase()));
	function g(p) {
		return p
			? new Date(p).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
			  })
			: null;
	}
	return h.jsxs("div", {
		className: "h-screen flex flex-col bg-muted",
		children: [
			h.jsx(rT, { setIsSyncOpen: l }),
			h.jsx("div", {
				className: "p-3",
				children: h.jsx(ya, {
					placeholder: "Search chats...",
					className: "border-b border-border",
					value: u,
					onChange: (p) => d(p.target.value),
				}),
			}),
			h.jsxs(Ox, {
				className: "h-full px-2 pb-2",
				children: [
					h.jsx("div", {
						className: "space-y-2 pb-6",
						children: m.map((p) =>
							h.jsx(
								"div",
								{
									onClick: () => {
										console.log("clicked"), n(p), c(p.ID);
									},
									className: "cursor-pointer",
									children: h.jsx(lT, {
										name: p.Name,
										lastMessage: p.LastMessage,
										time: g(p.LastMessageTime),
										selected: i === p.ID,
									}),
								},
								p.ID
							)
						),
					}),
					h.jsx($d, { orientation: "vertical" }),
				],
			}),
		],
	});
}
var ET = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul",
	],
	AT = ET.reduce((n, l) => {
		const o = vn(`Primitive.${l}`),
			i = v.forwardRef((c, u) => {
				const { asChild: d, ...m } = c,
					g = d ? o : l;
				return (
					typeof window < "u" &&
						(window[Symbol.for("radix-ui")] = !0),
					h.jsx(g, { ...m, ref: u })
				);
			});
		return (i.displayName = `Primitive.${l}`), { ...n, [l]: i };
	}, {});
function _x(n) {
	const l = n + "CollectionProvider",
		[o, i] = Rt(l),
		[c, u] = o(l, { collectionRef: { current: null }, itemMap: new Map() }),
		d = (A) => {
			const { scope: R, children: M } = A,
				k = ma.useRef(null),
				D = ma.useRef(new Map()).current;
			return h.jsx(c, {
				scope: R,
				itemMap: D,
				collectionRef: k,
				children: M,
			});
		};
	d.displayName = l;
	const m = n + "CollectionSlot",
		g = vn(m),
		p = ma.forwardRef((A, R) => {
			const { scope: M, children: k } = A,
				D = u(m, M),
				L = Se(R, D.collectionRef);
			return h.jsx(g, { ref: L, children: k });
		});
	p.displayName = m;
	const y = n + "CollectionItemSlot",
		x = "data-radix-collection-item",
		S = vn(y),
		E = ma.forwardRef((A, R) => {
			const { scope: M, children: k, ...D } = A,
				L = ma.useRef(null),
				_ = Se(R, L),
				q = u(y, M);
			return (
				ma.useEffect(
					() => (
						q.itemMap.set(L, { ref: L, ...D }),
						() => void q.itemMap.delete(L)
					)
				),
				h.jsx(S, { [x]: "", ref: _, children: k })
			);
		});
	E.displayName = y;
	function C(A) {
		const R = u(n + "CollectionConsumer", A);
		return ma.useCallback(() => {
			const k = R.collectionRef.current;
			if (!k) return [];
			const D = Array.from(k.querySelectorAll(`[${x}]`));
			return Array.from(R.itemMap.values()).sort(
				(q, P) => D.indexOf(q.ref.current) - D.indexOf(P.ref.current)
			);
		}, [R.collectionRef, R.itemMap]);
	}
	return [{ Provider: d, Slot: p, ItemSlot: E }, C, i];
}
var CT = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul",
	],
	Nt = CT.reduce((n, l) => {
		const o = vn(`Primitive.${l}`),
			i = v.forwardRef((c, u) => {
				const { asChild: d, ...m } = c,
					g = d ? o : l;
				return (
					typeof window < "u" &&
						(window[Symbol.for("radix-ui")] = !0),
					h.jsx(g, { ...m, ref: u })
				);
			});
		return (i.displayName = `Primitive.${l}`), { ...n, [l]: i };
	}, {});
function Dx(n, l) {
	n && So.flushSync(() => n.dispatchEvent(l));
}
var RT = "DismissableLayer",
	$f = "dismissableLayer.update",
	NT = "dismissableLayer.pointerDownOutside",
	TT = "dismissableLayer.focusOutside",
	qg,
	jx = v.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	zx = v.forwardRef((n, l) => {
		const {
				disableOutsidePointerEvents: o = !1,
				onEscapeKeyDown: i,
				onPointerDownOutside: c,
				onFocusOutside: u,
				onInteractOutside: d,
				onDismiss: m,
				...g
			} = n,
			p = v.useContext(jx),
			[y, x] = v.useState(null),
			S =
				(y == null ? void 0 : y.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, E] = v.useState({}),
			C = Se(l, (P) => x(P)),
			A = Array.from(p.layers),
			[R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
			M = A.indexOf(R),
			k = y ? A.indexOf(y) : -1,
			D = p.layersWithOutsidePointerEventsDisabled.size > 0,
			L = k >= M,
			_ = _T((P) => {
				const X = P.target,
					ne = [...p.branches].some((le) => le.contains(X));
				!L ||
					ne ||
					(c == null || c(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S),
			q = DT((P) => {
				const X = P.target;
				[...p.branches].some((le) => le.contains(X)) ||
					(u == null || u(P),
					d == null || d(P),
					P.defaultPrevented || m == null || m());
			}, S);
		return (
			ld((P) => {
				k === p.layers.size - 1 &&
					(i == null || i(P),
					!P.defaultPrevented && m && (P.preventDefault(), m()));
			}, S),
			v.useEffect(() => {
				if (y)
					return (
						o &&
							(p.layersWithOutsidePointerEventsDisabled.size ===
								0 &&
								((qg = S.body.style.pointerEvents),
								(S.body.style.pointerEvents = "none")),
							p.layersWithOutsidePointerEventsDisabled.add(y)),
						p.layers.add(y),
						Xg(),
						() => {
							o &&
								p.layersWithOutsidePointerEventsDisabled
									.size === 1 &&
								(S.body.style.pointerEvents = qg);
						}
					);
			}, [y, S, o, p]),
			v.useEffect(
				() => () => {
					y &&
						(p.layers.delete(y),
						p.layersWithOutsidePointerEventsDisabled.delete(y),
						Xg());
				},
				[y, p]
			),
			v.useEffect(() => {
				const P = () => E({});
				return (
					document.addEventListener($f, P),
					() => document.removeEventListener($f, P)
				);
			}, []),
			h.jsx(Nt.div, {
				...g,
				ref: C,
				style: {
					pointerEvents: D ? (L ? "auto" : "none") : void 0,
					...n.style,
				},
				onFocusCapture: ie(n.onFocusCapture, q.onFocusCapture),
				onBlurCapture: ie(n.onBlurCapture, q.onBlurCapture),
				onPointerDownCapture: ie(
					n.onPointerDownCapture,
					_.onPointerDownCapture
				),
			})
		);
	});
zx.displayName = RT;
var MT = "DismissableLayerBranch",
	OT = v.forwardRef((n, l) => {
		const o = v.useContext(jx),
			i = v.useRef(null),
			c = Se(l, i);
		return (
			v.useEffect(() => {
				const u = i.current;
				if (u)
					return (
						o.branches.add(u),
						() => {
							o.branches.delete(u);
						}
					);
			}, [o.branches]),
			h.jsx(Nt.div, { ...n, ref: c })
		);
	});
OT.displayName = MT;
function _T(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1),
		c = v.useRef(() => {});
	return (
		v.useEffect(() => {
			const u = (m) => {
					if (m.target && !i.current) {
						let g = function () {
							Px(NT, o, p, { discrete: !0 });
						};
						const p = { originalEvent: m };
						m.pointerType === "touch"
							? (l.removeEventListener("click", c.current),
							  (c.current = g),
							  l.addEventListener("click", c.current, {
									once: !0,
							  }))
							: g();
					} else l.removeEventListener("click", c.current);
					i.current = !1;
				},
				d = window.setTimeout(() => {
					l.addEventListener("pointerdown", u);
				}, 0);
			return () => {
				window.clearTimeout(d),
					l.removeEventListener("pointerdown", u),
					l.removeEventListener("click", c.current);
			};
		}, [l, o]),
		{ onPointerDownCapture: () => (i.current = !0) }
	);
}
function DT(n, l = globalThis == null ? void 0 : globalThis.document) {
	const o = ze(n),
		i = v.useRef(!1);
	return (
		v.useEffect(() => {
			const c = (u) => {
				u.target &&
					!i.current &&
					Px(TT, o, { originalEvent: u }, { discrete: !1 });
			};
			return (
				l.addEventListener("focusin", c),
				() => l.removeEventListener("focusin", c)
			);
		}, [l, o]),
		{
			onFocusCapture: () => (i.current = !0),
			onBlurCapture: () => (i.current = !1),
		}
	);
}
function Xg() {
	const n = new CustomEvent($f);
	document.dispatchEvent(n);
}
function Px(n, l, o, { discrete: i }) {
	const c = o.originalEvent.target,
		u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
	l && c.addEventListener(n, l, { once: !0 }),
		i ? Dx(c, u) : c.dispatchEvent(u);
}
var Af = "focusScope.autoFocusOnMount",
	Cf = "focusScope.autoFocusOnUnmount",
	Vg = { bubbles: !1, cancelable: !0 },
	jT = "FocusScope",
	Lx = v.forwardRef((n, l) => {
		const {
				loop: o = !1,
				trapped: i = !1,
				onMountAutoFocus: c,
				onUnmountAutoFocus: u,
				...d
			} = n,
			[m, g] = v.useState(null),
			p = ze(c),
			y = ze(u),
			x = v.useRef(null),
			S = Se(l, (A) => g(A)),
			E = v.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				},
			}).current;
		v.useEffect(() => {
			if (i) {
				let A = function (D) {
						if (E.paused || !m) return;
						const L = D.target;
						m.contains(L)
							? (x.current = L)
							: pa(x.current, { select: !0 });
					},
					R = function (D) {
						if (E.paused || !m) return;
						const L = D.relatedTarget;
						L !== null &&
							(m.contains(L) || pa(x.current, { select: !0 }));
					},
					M = function (D) {
						if (document.activeElement === document.body)
							for (const _ of D)
								_.removedNodes.length > 0 && pa(m);
					};
				document.addEventListener("focusin", A),
					document.addEventListener("focusout", R);
				const k = new MutationObserver(M);
				return (
					m && k.observe(m, { childList: !0, subtree: !0 }),
					() => {
						document.removeEventListener("focusin", A),
							document.removeEventListener("focusout", R),
							k.disconnect();
					}
				);
			}
		}, [i, m, E.paused]),
			v.useEffect(() => {
				if (m) {
					Qg.add(E);
					const A = document.activeElement;
					if (!m.contains(A)) {
						const M = new CustomEvent(Af, Vg);
						m.addEventListener(Af, p),
							m.dispatchEvent(M),
							M.defaultPrevented ||
								(zT(kT(Ux(m)), { select: !0 }),
								document.activeElement === A && pa(m));
					}
					return () => {
						m.removeEventListener(Af, p),
							setTimeout(() => {
								const M = new CustomEvent(Cf, Vg);
								m.addEventListener(Cf, y),
									m.dispatchEvent(M),
									M.defaultPrevented ||
										pa(A ?? document.body, { select: !0 }),
									m.removeEventListener(Cf, y),
									Qg.remove(E);
							}, 0);
					};
				}
			}, [m, p, y, E]);
		const C = v.useCallback(
			(A) => {
				if ((!o && !i) || E.paused) return;
				const R =
						A.key === "Tab" &&
						!A.altKey &&
						!A.ctrlKey &&
						!A.metaKey,
					M = document.activeElement;
				if (R && M) {
					const k = A.currentTarget,
						[D, L] = PT(k);
					D && L
						? !A.shiftKey && M === L
							? (A.preventDefault(), o && pa(D, { select: !0 }))
							: A.shiftKey &&
							  M === D &&
							  (A.preventDefault(), o && pa(L, { select: !0 }))
						: M === k && A.preventDefault();
				}
			},
			[o, i, E.paused]
		);
		return h.jsx(Nt.div, { tabIndex: -1, ...d, ref: S, onKeyDown: C });
	});
Lx.displayName = jT;
function zT(n, { select: l = !1 } = {}) {
	const o = document.activeElement;
	for (const i of n)
		if ((pa(i, { select: l }), document.activeElement !== o)) return;
}
function PT(n) {
	const l = Ux(n),
		o = Kg(l, n),
		i = Kg(l.reverse(), n);
	return [o, i];
}
function Ux(n) {
	const l = [],
		o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (i) => {
				const c = i.tagName === "INPUT" && i.type === "hidden";
				return i.disabled || i.hidden || c
					? NodeFilter.FILTER_SKIP
					: i.tabIndex >= 0
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	for (; o.nextNode(); ) l.push(o.currentNode);
	return l;
}
function Kg(n, l) {
	for (const o of n) if (!LT(o, { upTo: l })) return o;
}
function LT(n, { upTo: l }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n; ) {
		if (l !== void 0 && n === l) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function UT(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function pa(n, { select: l = !1 } = {}) {
	if (n && n.focus) {
		const o = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== o && UT(n) && l && n.select();
	}
}
var Qg = HT();
function HT() {
	let n = [];
	return {
		add(l) {
			const o = n[0];
			l !== o && (o == null || o.pause()), (n = Zg(n, l)), n.unshift(l);
		},
		remove(l) {
			var o;
			(n = Zg(n, l)), (o = n[0]) == null || o.resume();
		},
	};
}
function Zg(n, l) {
	const o = [...n],
		i = o.indexOf(l);
	return i !== -1 && o.splice(i, 1), o;
}
function kT(n) {
	return n.filter((l) => l.tagName !== "A");
}
var BT = "Arrow",
	Hx = v.forwardRef((n, l) => {
		const { children: o, width: i = 10, height: c = 5, ...u } = n;
		return h.jsx(Nt.svg, {
			...u,
			ref: l,
			width: i,
			height: c,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: n.asChild
				? o
				: h.jsx("polygon", { points: "0,0 30,0 15,10" }),
		});
	});
Hx.displayName = BT;
var GT = Hx,
	Yd = "Popper",
	[kx, Bx] = Rt(Yd),
	[$T, Gx] = kx(Yd),
	$x = (n) => {
		const { __scopePopper: l, children: o } = n,
			[i, c] = v.useState(null);
		return h.jsx($T, {
			scope: l,
			anchor: i,
			onAnchorChange: c,
			children: o,
		});
	};
$x.displayName = Yd;
var Yx = "PopperAnchor",
	qx = v.forwardRef((n, l) => {
		const { __scopePopper: o, virtualRef: i, ...c } = n,
			u = Gx(Yx, o),
			d = v.useRef(null),
			m = Se(l, d);
		return (
			v.useEffect(() => {
				u.onAnchorChange((i == null ? void 0 : i.current) || d.current);
			}),
			i ? null : h.jsx(Nt.div, { ...c, ref: m })
		);
	});
qx.displayName = Yx;
var qd = "PopperContent",
	[YT, qT] = kx(qd),
	Xx = v.forwardRef((n, l) => {
		var te, re, pe, we, Ue, He;
		const {
				__scopePopper: o,
				side: i = "bottom",
				sideOffset: c = 0,
				align: u = "center",
				alignOffset: d = 0,
				arrowPadding: m = 0,
				avoidCollisions: g = !0,
				collisionBoundary: p = [],
				collisionPadding: y = 0,
				sticky: x = "partial",
				hideWhenDetached: S = !1,
				updatePositionStrategy: E = "optimized",
				onPlaced: C,
				...A
			} = n,
			R = Gx(qd, o),
			[M, k] = v.useState(null),
			D = Se(l, (xe) => k(xe)),
			[L, _] = v.useState(null),
			q = js(L),
			P = (q == null ? void 0 : q.width) ?? 0,
			X = (q == null ? void 0 : q.height) ?? 0,
			ne = i + (u !== "center" ? "-" + u : ""),
			le =
				typeof y == "number"
					? y
					: { top: 0, right: 0, bottom: 0, left: 0, ...y },
			de = Array.isArray(p) ? p : [p],
			oe = de.length > 0,
			ve = { padding: le, boundary: de.filter(VT), altBoundary: oe },
			{
				refs: me,
				floatingStyles: fe,
				placement: j,
				isPositioned: I,
				middlewareData: G,
			} = pd({
				strategy: "fixed",
				placement: ne,
				whileElementsMounted: (...xe) =>
					hd(...xe, { animationFrame: E === "always" }),
				elements: { reference: R.anchor },
				middleware: [
					vd({ mainAxis: c + X, alignmentAxis: d }),
					g &&
						gd({
							mainAxis: !0,
							crossAxis: !1,
							limiter: x === "partial" ? yd() : void 0,
							...ve,
						}),
					g && bd({ ...ve }),
					xd({
						...ve,
						apply: ({
							elements: xe,
							rects: Xe,
							availableWidth: Tt,
							availableHeight: $t,
						}) => {
							const { width: et, height: Ze } = Xe.reference,
								tt = xe.floating.style;
							tt.setProperty(
								"--radix-popper-available-width",
								`${Tt}px`
							),
								tt.setProperty(
									"--radix-popper-available-height",
									`${$t}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-width",
									`${et}px`
								),
								tt.setProperty(
									"--radix-popper-anchor-height",
									`${Ze}px`
								);
						},
					}),
					L && wd({ element: L, padding: m }),
					KT({ arrowWidth: P, arrowHeight: X }),
					S && Sd({ strategy: "referenceHidden", ...ve }),
				],
			}),
			[J, N] = Qx(j),
			V = ze(C);
		Qe(() => {
			I && (V == null || V());
		}, [I, V]);
		const ee = (te = G.arrow) == null ? void 0 : te.x,
			U = (re = G.arrow) == null ? void 0 : re.y,
			Q = ((pe = G.arrow) == null ? void 0 : pe.centerOffset) !== 0,
			[ae, W] = v.useState();
		return (
			Qe(() => {
				M && W(window.getComputedStyle(M).zIndex);
			}, [M]),
			h.jsx("div", {
				ref: me.setFloating,
				"data-radix-popper-content-wrapper": "",
				style: {
					...fe,
					transform: I ? fe.transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: ae,
					"--radix-popper-transform-origin": [
						(we = G.transformOrigin) == null ? void 0 : we.x,
						(Ue = G.transformOrigin) == null ? void 0 : Ue.y,
					].join(" "),
					...(((He = G.hide) == null
						? void 0
						: He.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none",
					}),
				},
				dir: n.dir,
				children: h.jsx(YT, {
					scope: o,
					placedSide: J,
					onArrowChange: _,
					arrowX: ee,
					arrowY: U,
					shouldHideArrow: Q,
					children: h.jsx(Nt.div, {
						"data-side": J,
						"data-align": N,
						...A,
						ref: D,
						style: { ...A.style, animation: I ? void 0 : "none" },
					}),
				}),
			})
		);
	});
Xx.displayName = qd;
var Vx = "PopperArrow",
	XT = { top: "bottom", right: "left", bottom: "top", left: "right" },
	Kx = v.forwardRef(function (l, o) {
		const { __scopePopper: i, ...c } = l,
			u = qT(Vx, i),
			d = XT[u.placedSide];
		return h.jsx("span", {
			ref: u.onArrowChange,
			style: {
				position: "absolute",
				left: u.arrowX,
				top: u.arrowY,
				[d]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0",
				}[u.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[u.placedSide],
				visibility: u.shouldHideArrow ? "hidden" : void 0,
			},
			children: h.jsx(GT, {
				...c,
				ref: o,
				style: { ...c.style, display: "block" },
			}),
		});
	});
Kx.displayName = Vx;
function VT(n) {
	return n !== null;
}
var KT = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(l) {
		var R, M, k;
		const { placement: o, rects: i, middlewareData: c } = l,
			d = ((R = c.arrow) == null ? void 0 : R.centerOffset) !== 0,
			m = d ? 0 : n.arrowWidth,
			g = d ? 0 : n.arrowHeight,
			[p, y] = Qx(o),
			x = { start: "0%", center: "50%", end: "100%" }[y],
			S = (((M = c.arrow) == null ? void 0 : M.x) ?? 0) + m / 2,
			E = (((k = c.arrow) == null ? void 0 : k.y) ?? 0) + g / 2;
		let C = "",
			A = "";
		return (
			p === "bottom"
				? ((C = d ? x : `${S}px`), (A = `${-g}px`))
				: p === "top"
				? ((C = d ? x : `${S}px`), (A = `${i.floating.height + g}px`))
				: p === "right"
				? ((C = `${-g}px`), (A = d ? x : `${E}px`))
				: p === "left" &&
				  ((C = `${i.floating.width + g}px`), (A = d ? x : `${E}px`)),
			{ data: { x: C, y: A } }
		);
	},
});
function Qx(n) {
	const [l, o = "center"] = n.split("-");
	return [l, o];
}
var QT = $x,
	ZT = qx,
	IT = Xx,
	FT = Kx,
	WT = "Portal",
	Zx = v.forwardRef((n, l) => {
		var m;
		const { container: o, ...i } = n,
			[c, u] = v.useState(!1);
		Qe(() => u(!0), []);
		const d =
			o ||
			(c &&
				((m = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: m.body));
		return d ? nd.createPortal(h.jsx(Nt.div, { ...i, ref: l }), d) : null;
	});
Zx.displayName = WT;
function JT(n, l) {
	return v.useReducer((o, i) => l[o][i] ?? o, n);
}
var No = (n) => {
	const { present: l, children: o } = n,
		i = eM(l),
		c =
			typeof o == "function"
				? o({ present: i.isPresent })
				: v.Children.only(o),
		u = Se(i.ref, tM(c));
	return typeof o == "function" || i.isPresent
		? v.cloneElement(c, { ref: u })
		: null;
};
No.displayName = "Presence";
function eM(n) {
	const [l, o] = v.useState(),
		i = v.useRef(null),
		c = v.useRef(n),
		u = v.useRef("none"),
		d = n ? "mounted" : "unmounted",
		[m, g] = JT(d, {
			mounted: {
				UNMOUNT: "unmounted",
				ANIMATION_OUT: "unmountSuspended",
			},
			unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
			unmounted: { MOUNT: "mounted" },
		});
	return (
		v.useEffect(() => {
			const p = ls(i.current);
			u.current = m === "mounted" ? p : "none";
		}, [m]),
		Qe(() => {
			const p = i.current,
				y = c.current;
			if (y !== n) {
				const S = u.current,
					E = ls(p);
				n
					? g("MOUNT")
					: E === "none" ||
					  (p == null ? void 0 : p.display) === "none"
					? g("UNMOUNT")
					: g(y && S !== E ? "ANIMATION_OUT" : "UNMOUNT"),
					(c.current = n);
			}
		}, [n, g]),
		Qe(() => {
			if (l) {
				let p;
				const y = l.ownerDocument.defaultView ?? window,
					x = (E) => {
						const A = ls(i.current).includes(E.animationName);
						if (
							E.target === l &&
							A &&
							(g("ANIMATION_END"), !c.current)
						) {
							const R = l.style.animationFillMode;
							(l.style.animationFillMode = "forwards"),
								(p = y.setTimeout(() => {
									l.style.animationFillMode === "forwards" &&
										(l.style.animationFillMode = R);
								}));
						}
					},
					S = (E) => {
						E.target === l && (u.current = ls(i.current));
					};
				return (
					l.addEventListener("animationstart", S),
					l.addEventListener("animationcancel", x),
					l.addEventListener("animationend", x),
					() => {
						y.clearTimeout(p),
							l.removeEventListener("animationstart", S),
							l.removeEventListener("animationcancel", x),
							l.removeEventListener("animationend", x);
					}
				);
			} else g("ANIMATION_END");
		}, [l, g]),
		{
			isPresent: ["mounted", "unmountSuspended"].includes(m),
			ref: v.useCallback((p) => {
				(i.current = p ? getComputedStyle(p) : null), o(p);
			}, []),
		}
	);
}
function ls(n) {
	return (n == null ? void 0 : n.animationName) || "none";
}
function tM(n) {
	var i, c;
	let l =
			(i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
				? void 0
				: i.get,
		o = l && "isReactWarning" in l && l.isReactWarning;
	return o
		? n.ref
		: ((l =
				(c = Object.getOwnPropertyDescriptor(n, "ref")) == null
					? void 0
					: c.get),
		  (o = l && "isReactWarning" in l && l.isReactWarning),
		  o ? n.props.ref : n.props.ref || n.ref);
}
var nM = bo[" useInsertionEffect ".trim().toString()] || Qe;
function aM({ prop: n, defaultProp: l, onChange: o = () => {}, caller: i }) {
	const [c, u, d] = rM({ defaultProp: l, onChange: o }),
		m = n !== void 0,
		g = m ? n : c;
	{
		const y = v.useRef(n !== void 0);
		v.useEffect(() => {
			const x = y.current;
			x !== m &&
				console.warn(
					`${i} is changing from ${
						x ? "controlled" : "uncontrolled"
					} to ${
						m ? "controlled" : "uncontrolled"
					}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
				),
				(y.current = m);
		}, [m, i]);
	}
	const p = v.useCallback(
		(y) => {
			var x;
			if (m) {
				const S = lM(y) ? y(n) : y;
				S !== n && ((x = d.current) == null || x.call(d, S));
			} else u(y);
		},
		[m, n, u, d]
	);
	return [g, p];
}
function rM({ defaultProp: n, onChange: l }) {
	const [o, i] = v.useState(n),
		c = v.useRef(o),
		u = v.useRef(l);
	return (
		nM(() => {
			u.current = l;
		}, [l]),
		v.useEffect(() => {
			var d;
			c.current !== o &&
				((d = u.current) == null || d.call(u, o), (c.current = o));
		}, [o, c]),
		[o, i, u]
	);
}
function lM(n) {
	return typeof n == "function";
}
var Rf = "rovingFocusGroup.onEntryFocus",
	oM = { bubbles: !1, cancelable: !0 },
	To = "RovingFocusGroup",
	[Yf, Ix, iM] = _x(To),
	[sM, Fx] = Rt(To, [iM]),
	[cM, uM] = sM(To),
	Wx = v.forwardRef((n, l) =>
		h.jsx(Yf.Provider, {
			scope: n.__scopeRovingFocusGroup,
			children: h.jsx(Yf.Slot, {
				scope: n.__scopeRovingFocusGroup,
				children: h.jsx(fM, { ...n, ref: l }),
			}),
		})
	);
Wx.displayName = To;
var fM = v.forwardRef((n, l) => {
		const {
				__scopeRovingFocusGroup: o,
				orientation: i,
				loop: c = !1,
				dir: u,
				currentTabStopId: d,
				defaultCurrentTabStopId: m,
				onCurrentTabStopIdChange: g,
				onEntryFocus: p,
				preventScrollOnEntryFocus: y = !1,
				...x
			} = n,
			S = v.useRef(null),
			E = Se(l, S),
			C = Hd(u),
			[A, R] = aM({
				prop: d,
				defaultProp: m ?? null,
				onChange: g,
				caller: To,
			}),
			[M, k] = v.useState(!1),
			D = ze(p),
			L = Ix(o),
			_ = v.useRef(!1),
			[q, P] = v.useState(0);
		return (
			v.useEffect(() => {
				const X = S.current;
				if (X)
					return (
						X.addEventListener(Rf, D),
						() => X.removeEventListener(Rf, D)
					);
			}, [D]),
			h.jsx(cM, {
				scope: o,
				orientation: i,
				dir: C,
				loop: c,
				currentTabStopId: A,
				onItemFocus: v.useCallback((X) => R(X), [R]),
				onItemShiftTab: v.useCallback(() => k(!0), []),
				onFocusableItemAdd: v.useCallback(() => P((X) => X + 1), []),
				onFocusableItemRemove: v.useCallback(() => P((X) => X - 1), []),
				children: h.jsx(Nt.div, {
					tabIndex: M || q === 0 ? -1 : 0,
					"data-orientation": i,
					...x,
					ref: E,
					style: { outline: "none", ...n.style },
					onMouseDown: ie(n.onMouseDown, () => {
						_.current = !0;
					}),
					onFocus: ie(n.onFocus, (X) => {
						const ne = !_.current;
						if (X.target === X.currentTarget && ne && !M) {
							const le = new CustomEvent(Rf, oM);
							if (
								(X.currentTarget.dispatchEvent(le),
								!le.defaultPrevented)
							) {
								const de = L().filter((j) => j.focusable),
									oe = de.find((j) => j.active),
									ve = de.find((j) => j.id === A),
									fe = [oe, ve, ...de]
										.filter(Boolean)
										.map((j) => j.ref.current);
								t0(fe, y);
							}
						}
						_.current = !1;
					}),
					onBlur: ie(n.onBlur, () => k(!1)),
				}),
			})
		);
	}),
	Jx = "RovingFocusGroupItem",
	e0 = v.forwardRef((n, l) => {
		const {
				__scopeRovingFocusGroup: o,
				focusable: i = !0,
				active: c = !1,
				tabStopId: u,
				children: d,
				...m
			} = n,
			g = Kr(),
			p = u || g,
			y = uM(Jx, o),
			x = y.currentTabStopId === p,
			S = Ix(o),
			{
				onFocusableItemAdd: E,
				onFocusableItemRemove: C,
				currentTabStopId: A,
			} = y;
		return (
			v.useEffect(() => {
				if (i) return E(), () => C();
			}, [i, E, C]),
			h.jsx(Yf.ItemSlot, {
				scope: o,
				id: p,
				focusable: i,
				active: c,
				children: h.jsx(Nt.span, {
					tabIndex: x ? 0 : -1,
					"data-orientation": y.orientation,
					...m,
					ref: l,
					onMouseDown: ie(n.onMouseDown, (R) => {
						i ? y.onItemFocus(p) : R.preventDefault();
					}),
					onFocus: ie(n.onFocus, () => y.onItemFocus(p)),
					onKeyDown: ie(n.onKeyDown, (R) => {
						if (R.key === "Tab" && R.shiftKey) {
							y.onItemShiftTab();
							return;
						}
						if (R.target !== R.currentTarget) return;
						const M = hM(R, y.orientation, y.dir);
						if (M !== void 0) {
							if (
								R.metaKey ||
								R.ctrlKey ||
								R.altKey ||
								R.shiftKey
							)
								return;
							R.preventDefault();
							let D = S()
								.filter((L) => L.focusable)
								.map((L) => L.ref.current);
							if (M === "last") D.reverse();
							else if (M === "prev" || M === "next") {
								M === "prev" && D.reverse();
								const L = D.indexOf(R.currentTarget);
								D = y.loop ? pM(D, L + 1) : D.slice(L + 1);
							}
							setTimeout(() => t0(D));
						}
					}),
					children:
						typeof d == "function"
							? d({ isCurrentTabStop: x, hasTabStop: A != null })
							: d,
				}),
			})
		);
	});
e0.displayName = Jx;
var dM = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last",
};
function mM(n, l) {
	return l !== "rtl"
		? n
		: n === "ArrowLeft"
		? "ArrowRight"
		: n === "ArrowRight"
		? "ArrowLeft"
		: n;
}
function hM(n, l, o) {
	const i = mM(n.key, o);
	if (
		!(l === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
		!(l === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
	)
		return dM[i];
}
function t0(n, l = !1) {
	const o = document.activeElement;
	for (const i of n)
		if (
			i === o ||
			(i.focus({ preventScroll: l }), document.activeElement !== o)
		)
			return;
}
function pM(n, l) {
	return n.map((o, i) => n[(l + i) % n.length]);
}
var vM = Wx,
	gM = e0,
	qf = ["Enter", " "],
	yM = ["ArrowDown", "PageUp", "Home"],
	n0 = ["ArrowUp", "PageDown", "End"],
	bM = [...yM, ...n0],
	xM = { ltr: [...qf, "ArrowRight"], rtl: [...qf, "ArrowLeft"] },
	SM = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
	Mo = "Menu",
	[go, wM, EM] = _x(Mo),
	[Ia, a0] = Rt(Mo, [EM, Bx, Fx]),
	Xs = Bx(),
	r0 = Fx(),
	[AM, Fa] = Ia(Mo),
	[CM, Oo] = Ia(Mo),
	l0 = (n) => {
		const {
				__scopeMenu: l,
				open: o = !1,
				children: i,
				dir: c,
				onOpenChange: u,
				modal: d = !0,
			} = n,
			m = Xs(l),
			[g, p] = v.useState(null),
			y = v.useRef(!1),
			x = ze(u),
			S = Hd(c);
		return (
			v.useEffect(() => {
				const E = () => {
						(y.current = !0),
							document.addEventListener("pointerdown", C, {
								capture: !0,
								once: !0,
							}),
							document.addEventListener("pointermove", C, {
								capture: !0,
								once: !0,
							});
					},
					C = () => (y.current = !1);
				return (
					document.addEventListener("keydown", E, { capture: !0 }),
					() => {
						document.removeEventListener("keydown", E, {
							capture: !0,
						}),
							document.removeEventListener("pointerdown", C, {
								capture: !0,
							}),
							document.removeEventListener("pointermove", C, {
								capture: !0,
							});
					}
				);
			}, []),
			h.jsx(QT, {
				...m,
				children: h.jsx(AM, {
					scope: l,
					open: o,
					onOpenChange: x,
					content: g,
					onContentChange: p,
					children: h.jsx(CM, {
						scope: l,
						onClose: v.useCallback(() => x(!1), [x]),
						isUsingKeyboardRef: y,
						dir: S,
						modal: d,
						children: i,
					}),
				}),
			})
		);
	};
l0.displayName = Mo;
var RM = "MenuAnchor",
	Xd = v.forwardRef((n, l) => {
		const { __scopeMenu: o, ...i } = n,
			c = Xs(o);
		return h.jsx(ZT, { ...c, ...i, ref: l });
	});
Xd.displayName = RM;
var Vd = "MenuPortal",
	[NM, o0] = Ia(Vd, { forceMount: void 0 }),
	i0 = (n) => {
		const { __scopeMenu: l, forceMount: o, children: i, container: c } = n,
			u = Fa(Vd, l);
		return h.jsx(NM, {
			scope: l,
			forceMount: o,
			children: h.jsx(No, {
				present: o || u.open,
				children: h.jsx(Zx, { asChild: !0, container: c, children: i }),
			}),
		});
	};
i0.displayName = Vd;
var Wt = "MenuContent",
	[TM, Kd] = Ia(Wt),
	s0 = v.forwardRef((n, l) => {
		const o = o0(Wt, n.__scopeMenu),
			{ forceMount: i = o.forceMount, ...c } = n,
			u = Fa(Wt, n.__scopeMenu),
			d = Oo(Wt, n.__scopeMenu);
		return h.jsx(go.Provider, {
			scope: n.__scopeMenu,
			children: h.jsx(No, {
				present: i || u.open,
				children: h.jsx(go.Slot, {
					scope: n.__scopeMenu,
					children: d.modal
						? h.jsx(MM, { ...c, ref: l })
						: h.jsx(OM, { ...c, ref: l }),
				}),
			}),
		});
	}),
	MM = v.forwardRef((n, l) => {
		const o = Fa(Wt, n.__scopeMenu),
			i = v.useRef(null),
			c = Se(l, i);
		return (
			v.useEffect(() => {
				const u = i.current;
				if (u) return Ld(u);
			}, []),
			h.jsx(Qd, {
				...n,
				ref: c,
				trapFocus: o.open,
				disableOutsidePointerEvents: o.open,
				disableOutsideScroll: !0,
				onFocusOutside: ie(
					n.onFocusOutside,
					(u) => u.preventDefault(),
					{ checkForDefaultPrevented: !1 }
				),
				onDismiss: () => o.onOpenChange(!1),
			})
		);
	}),
	OM = v.forwardRef((n, l) => {
		const o = Fa(Wt, n.__scopeMenu);
		return h.jsx(Qd, {
			...n,
			ref: l,
			trapFocus: !1,
			disableOutsidePointerEvents: !1,
			disableOutsideScroll: !1,
			onDismiss: () => o.onOpenChange(!1),
		});
	}),
	_M = vn("MenuContent.ScrollLock"),
	Qd = v.forwardRef((n, l) => {
		const {
				__scopeMenu: o,
				loop: i = !1,
				trapFocus: c,
				onOpenAutoFocus: u,
				onCloseAutoFocus: d,
				disableOutsidePointerEvents: m,
				onEntryFocus: g,
				onEscapeKeyDown: p,
				onPointerDownOutside: y,
				onFocusOutside: x,
				onInteractOutside: S,
				onDismiss: E,
				disableOutsideScroll: C,
				...A
			} = n,
			R = Fa(Wt, o),
			M = Oo(Wt, o),
			k = Xs(o),
			D = r0(o),
			L = wM(o),
			[_, q] = v.useState(null),
			P = v.useRef(null),
			X = Se(l, P, R.onContentChange),
			ne = v.useRef(0),
			le = v.useRef(""),
			de = v.useRef(0),
			oe = v.useRef(null),
			ve = v.useRef("right"),
			me = v.useRef(0),
			fe = C ? Gs : v.Fragment,
			j = C ? { as: _M, allowPinchZoom: !0 } : void 0,
			I = (J) => {
				var te, re;
				const N = le.current + J,
					V = L().filter((pe) => !pe.disabled),
					ee = document.activeElement,
					U =
						(te = V.find((pe) => pe.ref.current === ee)) == null
							? void 0
							: te.textValue,
					Q = V.map((pe) => pe.textValue),
					ae = YM(Q, N, U),
					W =
						(re = V.find((pe) => pe.textValue === ae)) == null
							? void 0
							: re.ref.current;
				(function pe(we) {
					(le.current = we),
						window.clearTimeout(ne.current),
						we !== "" &&
							(ne.current = window.setTimeout(() => pe(""), 1e3));
				})(N),
					W && setTimeout(() => W.focus());
			};
		v.useEffect(() => () => window.clearTimeout(ne.current), []), Dd();
		const G = v.useCallback((J) => {
			var V, ee;
			return (
				ve.current === ((V = oe.current) == null ? void 0 : V.side) &&
				XM(J, (ee = oe.current) == null ? void 0 : ee.area)
			);
		}, []);
		return h.jsx(TM, {
			scope: o,
			searchRef: le,
			onItemEnter: v.useCallback(
				(J) => {
					G(J) && J.preventDefault();
				},
				[G]
			),
			onItemLeave: v.useCallback(
				(J) => {
					var N;
					G(J) || ((N = P.current) == null || N.focus(), q(null));
				},
				[G]
			),
			onTriggerLeave: v.useCallback(
				(J) => {
					G(J) && J.preventDefault();
				},
				[G]
			),
			pointerGraceTimerRef: de,
			onPointerGraceIntentChange: v.useCallback((J) => {
				oe.current = J;
			}, []),
			children: h.jsx(fe, {
				...j,
				children: h.jsx(Lx, {
					asChild: !0,
					trapped: c,
					onMountAutoFocus: ie(u, (J) => {
						var N;
						J.preventDefault(),
							(N = P.current) == null ||
								N.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: d,
					children: h.jsx(zx, {
						asChild: !0,
						disableOutsidePointerEvents: m,
						onEscapeKeyDown: p,
						onPointerDownOutside: y,
						onFocusOutside: x,
						onInteractOutside: S,
						onDismiss: E,
						children: h.jsx(vM, {
							asChild: !0,
							...D,
							dir: M.dir,
							orientation: "vertical",
							loop: i,
							currentTabStopId: _,
							onCurrentTabStopIdChange: q,
							onEntryFocus: ie(g, (J) => {
								M.isUsingKeyboardRef.current ||
									J.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: h.jsx(IT, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": A0(R.open),
								"data-radix-menu-content": "",
								dir: M.dir,
								...k,
								...A,
								ref: X,
								style: { outline: "none", ...A.style },
								onKeyDown: ie(A.onKeyDown, (J) => {
									const V =
											J.target.closest(
												"[data-radix-menu-content]"
											) === J.currentTarget,
										ee = J.ctrlKey || J.altKey || J.metaKey,
										U = J.key.length === 1;
									V &&
										(J.key === "Tab" && J.preventDefault(),
										!ee && U && I(J.key));
									const Q = P.current;
									if (J.target !== Q || !bM.includes(J.key))
										return;
									J.preventDefault();
									const W = L()
										.filter((te) => !te.disabled)
										.map((te) => te.ref.current);
									n0.includes(J.key) && W.reverse(), GM(W);
								}),
								onBlur: ie(n.onBlur, (J) => {
									J.currentTarget.contains(J.target) ||
										(window.clearTimeout(ne.current),
										(le.current = ""));
								}),
								onPointerMove: ie(
									n.onPointerMove,
									yo((J) => {
										const N = J.target,
											V = me.current !== J.clientX;
										if (J.currentTarget.contains(N) && V) {
											const ee =
												J.clientX > me.current
													? "right"
													: "left";
											(ve.current = ee),
												(me.current = J.clientX);
										}
									})
								),
							}),
						}),
					}),
				}),
			}),
		});
	});
s0.displayName = Wt;
var DM = "MenuGroup",
	Zd = v.forwardRef((n, l) => {
		const { __scopeMenu: o, ...i } = n;
		return h.jsx(Nt.div, { role: "group", ...i, ref: l });
	});
Zd.displayName = DM;
var jM = "MenuLabel",
	c0 = v.forwardRef((n, l) => {
		const { __scopeMenu: o, ...i } = n;
		return h.jsx(Nt.div, { ...i, ref: l });
	});
c0.displayName = jM;
var Es = "MenuItem",
	Ig = "menu.itemSelect",
	Vs = v.forwardRef((n, l) => {
		const { disabled: o = !1, onSelect: i, ...c } = n,
			u = v.useRef(null),
			d = Oo(Es, n.__scopeMenu),
			m = Kd(Es, n.__scopeMenu),
			g = Se(l, u),
			p = v.useRef(!1),
			y = () => {
				const x = u.current;
				if (!o && x) {
					const S = new CustomEvent(Ig, {
						bubbles: !0,
						cancelable: !0,
					});
					x.addEventListener(Ig, (E) => (i == null ? void 0 : i(E)), {
						once: !0,
					}),
						Dx(x, S),
						S.defaultPrevented ? (p.current = !1) : d.onClose();
				}
			};
		return h.jsx(u0, {
			...c,
			ref: g,
			disabled: o,
			onClick: ie(n.onClick, y),
			onPointerDown: (x) => {
				var S;
				(S = n.onPointerDown) == null || S.call(n, x), (p.current = !0);
			},
			onPointerUp: ie(n.onPointerUp, (x) => {
				var S;
				p.current || (S = x.currentTarget) == null || S.click();
			}),
			onKeyDown: ie(n.onKeyDown, (x) => {
				const S = m.searchRef.current !== "";
				o ||
					(S && x.key === " ") ||
					(qf.includes(x.key) &&
						(x.currentTarget.click(), x.preventDefault()));
			}),
		});
	});
Vs.displayName = Es;
var u0 = v.forwardRef((n, l) => {
		const { __scopeMenu: o, disabled: i = !1, textValue: c, ...u } = n,
			d = Kd(Es, o),
			m = r0(o),
			g = v.useRef(null),
			p = Se(l, g),
			[y, x] = v.useState(!1),
			[S, E] = v.useState("");
		return (
			v.useEffect(() => {
				const C = g.current;
				C && E((C.textContent ?? "").trim());
			}, [u.children]),
			h.jsx(go.ItemSlot, {
				scope: o,
				disabled: i,
				textValue: c ?? S,
				children: h.jsx(gM, {
					asChild: !0,
					...m,
					focusable: !i,
					children: h.jsx(Nt.div, {
						role: "menuitem",
						"data-highlighted": y ? "" : void 0,
						"aria-disabled": i || void 0,
						"data-disabled": i ? "" : void 0,
						...u,
						ref: p,
						onPointerMove: ie(
							n.onPointerMove,
							yo((C) => {
								i
									? d.onItemLeave(C)
									: (d.onItemEnter(C),
									  C.defaultPrevented ||
											C.currentTarget.focus({
												preventScroll: !0,
											}));
							})
						),
						onPointerLeave: ie(
							n.onPointerLeave,
							yo((C) => d.onItemLeave(C))
						),
						onFocus: ie(n.onFocus, () => x(!0)),
						onBlur: ie(n.onBlur, () => x(!1)),
					}),
				}),
			})
		);
	}),
	zM = "MenuCheckboxItem",
	f0 = v.forwardRef((n, l) => {
		const { checked: o = !1, onCheckedChange: i, ...c } = n;
		return h.jsx(v0, {
			scope: n.__scopeMenu,
			checked: o,
			children: h.jsx(Vs, {
				role: "menuitemcheckbox",
				"aria-checked": As(o) ? "mixed" : o,
				...c,
				ref: l,
				"data-state": Fd(o),
				onSelect: ie(
					c.onSelect,
					() => (i == null ? void 0 : i(As(o) ? !0 : !o)),
					{ checkForDefaultPrevented: !1 }
				),
			}),
		});
	});
f0.displayName = zM;
var d0 = "MenuRadioGroup",
	[PM, LM] = Ia(d0, { value: void 0, onValueChange: () => {} }),
	m0 = v.forwardRef((n, l) => {
		const { value: o, onValueChange: i, ...c } = n,
			u = ze(i);
		return h.jsx(PM, {
			scope: n.__scopeMenu,
			value: o,
			onValueChange: u,
			children: h.jsx(Zd, { ...c, ref: l }),
		});
	});
m0.displayName = d0;
var h0 = "MenuRadioItem",
	p0 = v.forwardRef((n, l) => {
		const { value: o, ...i } = n,
			c = LM(h0, n.__scopeMenu),
			u = o === c.value;
		return h.jsx(v0, {
			scope: n.__scopeMenu,
			checked: u,
			children: h.jsx(Vs, {
				role: "menuitemradio",
				"aria-checked": u,
				...i,
				ref: l,
				"data-state": Fd(u),
				onSelect: ie(
					i.onSelect,
					() => {
						var d;
						return (d = c.onValueChange) == null
							? void 0
							: d.call(c, o);
					},
					{ checkForDefaultPrevented: !1 }
				),
			}),
		});
	});
p0.displayName = h0;
var Id = "MenuItemIndicator",
	[v0, UM] = Ia(Id, { checked: !1 }),
	g0 = v.forwardRef((n, l) => {
		const { __scopeMenu: o, forceMount: i, ...c } = n,
			u = UM(Id, o);
		return h.jsx(No, {
			present: i || As(u.checked) || u.checked === !0,
			children: h.jsx(Nt.span, {
				...c,
				ref: l,
				"data-state": Fd(u.checked),
			}),
		});
	});
g0.displayName = Id;
var HM = "MenuSeparator",
	y0 = v.forwardRef((n, l) => {
		const { __scopeMenu: o, ...i } = n;
		return h.jsx(Nt.div, {
			role: "separator",
			"aria-orientation": "horizontal",
			...i,
			ref: l,
		});
	});
y0.displayName = HM;
var kM = "MenuArrow",
	b0 = v.forwardRef((n, l) => {
		const { __scopeMenu: o, ...i } = n,
			c = Xs(o);
		return h.jsx(FT, { ...c, ...i, ref: l });
	});
b0.displayName = kM;
var BM = "MenuSub",
	[IO, x0] = Ia(BM),
	uo = "MenuSubTrigger",
	S0 = v.forwardRef((n, l) => {
		const o = Fa(uo, n.__scopeMenu),
			i = Oo(uo, n.__scopeMenu),
			c = x0(uo, n.__scopeMenu),
			u = Kd(uo, n.__scopeMenu),
			d = v.useRef(null),
			{ pointerGraceTimerRef: m, onPointerGraceIntentChange: g } = u,
			p = { __scopeMenu: n.__scopeMenu },
			y = v.useCallback(() => {
				d.current && window.clearTimeout(d.current), (d.current = null);
			}, []);
		return (
			v.useEffect(() => y, [y]),
			v.useEffect(() => {
				const x = m.current;
				return () => {
					window.clearTimeout(x), g(null);
				};
			}, [m, g]),
			h.jsx(Xd, {
				asChild: !0,
				...p,
				children: h.jsx(u0, {
					id: c.triggerId,
					"aria-haspopup": "menu",
					"aria-expanded": o.open,
					"aria-controls": c.contentId,
					"data-state": A0(o.open),
					...n,
					ref: Jf(l, c.onTriggerChange),
					onClick: (x) => {
						var S;
						(S = n.onClick) == null || S.call(n, x),
							!(n.disabled || x.defaultPrevented) &&
								(x.currentTarget.focus(),
								o.open || o.onOpenChange(!0));
					},
					onPointerMove: ie(
						n.onPointerMove,
						yo((x) => {
							u.onItemEnter(x),
								!x.defaultPrevented &&
									!n.disabled &&
									!o.open &&
									!d.current &&
									(u.onPointerGraceIntentChange(null),
									(d.current = window.setTimeout(() => {
										o.onOpenChange(!0), y();
									}, 100)));
						})
					),
					onPointerLeave: ie(
						n.onPointerLeave,
						yo((x) => {
							var E, C;
							y();
							const S =
								(E = o.content) == null
									? void 0
									: E.getBoundingClientRect();
							if (S) {
								const A =
										(C = o.content) == null
											? void 0
											: C.dataset.side,
									R = A === "right",
									M = R ? -5 : 5,
									k = S[R ? "left" : "right"],
									D = S[R ? "right" : "left"];
								u.onPointerGraceIntentChange({
									area: [
										{ x: x.clientX + M, y: x.clientY },
										{ x: k, y: S.top },
										{ x: D, y: S.top },
										{ x: D, y: S.bottom },
										{ x: k, y: S.bottom },
									],
									side: A,
								}),
									window.clearTimeout(m.current),
									(m.current = window.setTimeout(
										() =>
											u.onPointerGraceIntentChange(null),
										300
									));
							} else {
								if ((u.onTriggerLeave(x), x.defaultPrevented))
									return;
								u.onPointerGraceIntentChange(null);
							}
						})
					),
					onKeyDown: ie(n.onKeyDown, (x) => {
						var E;
						const S = u.searchRef.current !== "";
						n.disabled ||
							(S && x.key === " ") ||
							(xM[i.dir].includes(x.key) &&
								(o.onOpenChange(!0),
								(E = o.content) == null || E.focus(),
								x.preventDefault()));
					}),
				}),
			})
		);
	});
S0.displayName = uo;
var w0 = "MenuSubContent",
	E0 = v.forwardRef((n, l) => {
		const o = o0(Wt, n.__scopeMenu),
			{ forceMount: i = o.forceMount, ...c } = n,
			u = Fa(Wt, n.__scopeMenu),
			d = Oo(Wt, n.__scopeMenu),
			m = x0(w0, n.__scopeMenu),
			g = v.useRef(null),
			p = Se(l, g);
		return h.jsx(go.Provider, {
			scope: n.__scopeMenu,
			children: h.jsx(No, {
				present: i || u.open,
				children: h.jsx(go.Slot, {
					scope: n.__scopeMenu,
					children: h.jsx(Qd, {
						id: m.contentId,
						"aria-labelledby": m.triggerId,
						...c,
						ref: p,
						align: "start",
						side: d.dir === "rtl" ? "left" : "right",
						disableOutsidePointerEvents: !1,
						disableOutsideScroll: !1,
						trapFocus: !1,
						onOpenAutoFocus: (y) => {
							var x;
							d.isUsingKeyboardRef.current &&
								((x = g.current) == null || x.focus()),
								y.preventDefault();
						},
						onCloseAutoFocus: (y) => y.preventDefault(),
						onFocusOutside: ie(n.onFocusOutside, (y) => {
							y.target !== m.trigger && u.onOpenChange(!1);
						}),
						onEscapeKeyDown: ie(n.onEscapeKeyDown, (y) => {
							d.onClose(), y.preventDefault();
						}),
						onKeyDown: ie(n.onKeyDown, (y) => {
							var E;
							const x = y.currentTarget.contains(y.target),
								S = SM[d.dir].includes(y.key);
							x &&
								S &&
								(u.onOpenChange(!1),
								(E = m.trigger) == null || E.focus(),
								y.preventDefault());
						}),
					}),
				}),
			}),
		});
	});
E0.displayName = w0;
function A0(n) {
	return n ? "open" : "closed";
}
function As(n) {
	return n === "indeterminate";
}
function Fd(n) {
	return As(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
function GM(n) {
	const l = document.activeElement;
	for (const o of n)
		if (o === l || (o.focus(), document.activeElement !== l)) return;
}
function $M(n, l) {
	return n.map((o, i) => n[(l + i) % n.length]);
}
function YM(n, l, o) {
	const c = l.length > 1 && Array.from(l).every((p) => p === l[0]) ? l[0] : l,
		u = o ? n.indexOf(o) : -1;
	let d = $M(n, Math.max(u, 0));
	c.length === 1 && (d = d.filter((p) => p !== o));
	const g = d.find((p) => p.toLowerCase().startsWith(c.toLowerCase()));
	return g !== o ? g : void 0;
}
function qM(n, l) {
	const { x: o, y: i } = n;
	let c = !1;
	for (let u = 0, d = l.length - 1; u < l.length; d = u++) {
		const m = l[u],
			g = l[d],
			p = m.x,
			y = m.y,
			x = g.x,
			S = g.y;
		y > i != S > i && o < ((x - p) * (i - y)) / (S - y) + p && (c = !c);
	}
	return c;
}
function XM(n, l) {
	if (!l) return !1;
	const o = { x: n.clientX, y: n.clientY };
	return qM(o, l);
}
function yo(n) {
	return (l) => (l.pointerType === "mouse" ? n(l) : void 0);
}
var VM = l0,
	KM = Xd,
	QM = i0,
	ZM = s0,
	IM = Zd,
	FM = c0,
	WM = Vs,
	JM = f0,
	e2 = m0,
	t2 = p0,
	n2 = g0,
	a2 = y0,
	r2 = b0,
	l2 = S0,
	o2 = E0,
	Wd = "ContextMenu",
	[i2, FO] = Rt(Wd, [a0]),
	yt = a0(),
	[s2, C0] = i2(Wd),
	R0 = (n) => {
		const {
				__scopeContextMenu: l,
				children: o,
				onOpenChange: i,
				dir: c,
				modal: u = !0,
			} = n,
			[d, m] = v.useState(!1),
			g = yt(l),
			p = ze(i),
			y = v.useCallback(
				(x) => {
					m(x), p(x);
				},
				[p]
			);
		return h.jsx(s2, {
			scope: l,
			open: d,
			onOpenChange: y,
			modal: u,
			children: h.jsx(VM, {
				...g,
				dir: c,
				open: d,
				onOpenChange: y,
				modal: u,
				children: o,
			}),
		});
	};
R0.displayName = Wd;
var N0 = "ContextMenuTrigger",
	T0 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, disabled: i = !1, ...c } = n,
			u = C0(N0, o),
			d = yt(o),
			m = v.useRef({ x: 0, y: 0 }),
			g = v.useRef({
				getBoundingClientRect: () =>
					DOMRect.fromRect({ width: 0, height: 0, ...m.current }),
			}),
			p = v.useRef(0),
			y = v.useCallback(() => window.clearTimeout(p.current), []),
			x = (S) => {
				(m.current = { x: S.clientX, y: S.clientY }),
					u.onOpenChange(!0);
			};
		return (
			v.useEffect(() => y, [y]),
			v.useEffect(() => void (i && y()), [i, y]),
			h.jsxs(h.Fragment, {
				children: [
					h.jsx(KM, { ...d, virtualRef: g }),
					h.jsx(AT.span, {
						"data-state": u.open ? "open" : "closed",
						"data-disabled": i ? "" : void 0,
						...c,
						ref: l,
						style: { WebkitTouchCallout: "none", ...n.style },
						onContextMenu: i
							? n.onContextMenu
							: ie(n.onContextMenu, (S) => {
									y(), x(S), S.preventDefault();
							  }),
						onPointerDown: i
							? n.onPointerDown
							: ie(
									n.onPointerDown,
									os((S) => {
										y(),
											(p.current = window.setTimeout(
												() => x(S),
												700
											));
									})
							  ),
						onPointerMove: i
							? n.onPointerMove
							: ie(n.onPointerMove, os(y)),
						onPointerCancel: i
							? n.onPointerCancel
							: ie(n.onPointerCancel, os(y)),
						onPointerUp: i
							? n.onPointerUp
							: ie(n.onPointerUp, os(y)),
					}),
				],
			})
		);
	});
T0.displayName = N0;
var c2 = "ContextMenuPortal",
	M0 = (n) => {
		const { __scopeContextMenu: l, ...o } = n,
			i = yt(l);
		return h.jsx(QM, { ...i, ...o });
	};
M0.displayName = c2;
var O0 = "ContextMenuContent",
	_0 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = C0(O0, o),
			u = yt(o),
			d = v.useRef(!1);
		return h.jsx(ZM, {
			...u,
			...i,
			ref: l,
			side: "right",
			sideOffset: 2,
			align: "start",
			onCloseAutoFocus: (m) => {
				var g;
				(g = n.onCloseAutoFocus) == null || g.call(n, m),
					!m.defaultPrevented && d.current && m.preventDefault(),
					(d.current = !1);
			},
			onInteractOutside: (m) => {
				var g;
				(g = n.onInteractOutside) == null || g.call(n, m),
					!m.defaultPrevented && !c.modal && (d.current = !0);
			},
			style: {
				...n.style,
				"--radix-context-menu-content-transform-origin":
					"var(--radix-popper-transform-origin)",
				"--radix-context-menu-content-available-width":
					"var(--radix-popper-available-width)",
				"--radix-context-menu-content-available-height":
					"var(--radix-popper-available-height)",
				"--radix-context-menu-trigger-width":
					"var(--radix-popper-anchor-width)",
				"--radix-context-menu-trigger-height":
					"var(--radix-popper-anchor-height)",
			},
		});
	});
_0.displayName = O0;
var u2 = "ContextMenuGroup",
	f2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(IM, { ...c, ...i, ref: l });
	});
f2.displayName = u2;
var d2 = "ContextMenuLabel",
	D0 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(FM, { ...c, ...i, ref: l });
	});
D0.displayName = d2;
var m2 = "ContextMenuItem",
	j0 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(WM, { ...c, ...i, ref: l });
	});
j0.displayName = m2;
var h2 = "ContextMenuCheckboxItem",
	p2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(JM, { ...c, ...i, ref: l });
	});
p2.displayName = h2;
var v2 = "ContextMenuRadioGroup",
	g2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(e2, { ...c, ...i, ref: l });
	});
g2.displayName = v2;
var y2 = "ContextMenuRadioItem",
	b2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(t2, { ...c, ...i, ref: l });
	});
b2.displayName = y2;
var x2 = "ContextMenuItemIndicator",
	S2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(n2, { ...c, ...i, ref: l });
	});
S2.displayName = x2;
var w2 = "ContextMenuSeparator",
	z0 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(a2, { ...c, ...i, ref: l });
	});
z0.displayName = w2;
var E2 = "ContextMenuArrow",
	A2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(r2, { ...c, ...i, ref: l });
	});
A2.displayName = E2;
var C2 = "ContextMenuSubTrigger",
	R2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(l2, { ...c, ...i, ref: l });
	});
R2.displayName = C2;
var N2 = "ContextMenuSubContent",
	T2 = v.forwardRef((n, l) => {
		const { __scopeContextMenu: o, ...i } = n,
			c = yt(o);
		return h.jsx(o2, {
			...c,
			...i,
			ref: l,
			style: {
				...n.style,
				"--radix-context-menu-content-transform-origin":
					"var(--radix-popper-transform-origin)",
				"--radix-context-menu-content-available-width":
					"var(--radix-popper-available-width)",
				"--radix-context-menu-content-available-height":
					"var(--radix-popper-available-height)",
				"--radix-context-menu-trigger-width":
					"var(--radix-popper-anchor-width)",
				"--radix-context-menu-trigger-height":
					"var(--radix-popper-anchor-height)",
			},
		});
	});
T2.displayName = N2;
function os(n) {
	return (l) => (l.pointerType !== "mouse" ? n(l) : void 0);
}
var M2 = R0,
	O2 = T0,
	_2 = M0,
	D2 = _0,
	j2 = D0,
	z2 = j0,
	P2 = z0;
function L2({ ...n }) {
	return h.jsx(M2, { "data-slot": "context-menu", ...n });
}
function U2({ ...n }) {
	return h.jsx(O2, { "data-slot": "context-menu-trigger", ...n });
}
function H2({ className: n, ...l }) {
	return h.jsx(_2, {
		children: h.jsx(D2, {
			"data-slot": "context-menu-content",
			className: De(
				"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
				n
			),
			...l,
		}),
	});
}
function is({ className: n, inset: l, variant: o = "default", ...i }) {
	return h.jsx(z2, {
		"data-slot": "context-menu-item",
		"data-inset": l,
		"data-variant": o,
		className: De(
			"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			n
		),
		...i,
	});
}
function ss({ className: n, inset: l, ...o }) {
	return h.jsx(j2, {
		"data-slot": "context-menu-label",
		"data-inset": l,
		className: De(
			"text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
			n
		),
		...o,
	});
}
function Nf({ className: n, ...l }) {
	return h.jsx(P2, {
		"data-slot": "context-menu-separator",
		className: De("bg-border -mx-1 my-1 h-px", n),
		...l,
	});
}
function k2({
	selectedChat: n,
	messages: l,
	setBackendCall: o,
	setSelectedChat: i,
}) {
	var L;
	const [c, u] = v.useState(""),
		[d, m] = v.useState(null),
		g = v.useRef(null),
		p = v.useRef(null),
		[y, x] = v.useState(!1),
		[S, E] = v.useState(null),
		[C, A] = v.useState(!1),
		R = async (_) => {
			const q = await window.electron.get_user_details(_);
			console.log(q), m(q);
		};
	v.useEffect(() => {
		n && R(n.ID);
	}, [n]),
		v.useEffect(() => {
			n && p.current && p.current.focus();
		}, [n, C]);
	const M = async () => {
		if (!n) return;
		const _ = c.trim();
		_ &&
			(x(!0),
			await window.electron.send_message(n.ID, _),
			x(!1),
			u(""),
			o((q) => !q),
			A((q) => !q));
	};
	v.useEffect(() => {
		g.current && g.current.scrollIntoView({ behavior: "smooth" });
	}, [l]);
	function k(_) {
		return _
			? new Date(_).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
			  })
			: null;
	}
	const D = async (_, q) => {
		try {
			await navigator.clipboard.writeText(_),
				E(q),
				setTimeout(() => E(null), 1e3);
		} catch (P) {
			console.error("Failed to copy: ", P);
		}
	};
	return h.jsx("div", {
		className: "flex flex-col h-full bg-background p-2",
		children: n
			? h.jsxs(h.Fragment, {
					children: [
						h.jsx("div", {
							className:
								"flex items-center justify-between border-b border-border pb-4 mb-4",
							children: h.jsx("div", {
								className: "flex items-center gap-3",
								children: h.jsxs(hx, {
									children: [
										h.jsxs(us, {
											children: [
												h.jsx(fs, {
													asChild: !0,
													children: h.jsx(px, {
														asChild: !0,
														children: h.jsxs(Md, {
															className:
																"h-10 w-10 cursor-pointer",
															children: [
																h.jsx(Od, {
																	src: `https://api.dicebear.com/6.x/initials/svg?seed=${n.Name}`,
																	alt: n.Name,
																}),
																h.jsx(_d, {
																	children:
																		(L =
																			n.Name) ==
																		null
																			? void 0
																			: L[0],
																}),
															],
														}),
													}),
												}),
												h.jsxs(ds, {
													side: "bottom",
													children: [
														n.Name,
														"'s Profile",
													],
												}),
											],
										}),
										h.jsxs("div", {
											children: [
												h.jsx("h3", {
													className:
														"text-lg font-medium",
													children: n.Name,
												}),
												n.LastMessageTime
													? h.jsxs("p", {
															className:
																"text-sm text-muted-foreground",
															children: [
																"Last Received at",
																" ",
																k(
																	n.LastMessageTime
																),
															],
													  })
													: null,
											],
										}),
										h.jsx(vx, {
											side: "bottom",
											align: "start",
											sideOffset: 10,
											alignOffset: 8,
											className:
												"w-fit px-3 py-2 bg-gray-200 dark:bg-neutral-700",
											children: h.jsx("div", {
												className: "flex flex-col px-0",
												children: d
													? h.jsxs(h.Fragment, {
															children: [
																h.jsxs("div", {
																	className:
																		"py-2",
																	children: [
																		" ",
																		h.jsx(
																			"strong",
																			{
																				children:
																					"Symmetric Key:",
																			}
																		),
																		" ",
																		d.SymmetricKey,
																		" ",
																	],
																}),
																h.jsxs("div", {
																	className:
																		"py-2",
																	children: [
																		" ",
																		h.jsx(
																			"strong",
																			{
																				children:
																					"View Public Key:",
																			}
																		),
																		" ",
																		d.ViewPublicKey,
																		" ",
																	],
																}),
																h.jsxs("div", {
																	className:
																		"py-2",
																	children: [
																		" ",
																		h.jsx(
																			"strong",
																			{
																				children:
																					"Spend Public Key:",
																			}
																		),
																		" ",
																		d.SpendPublicKey,
																		" ",
																	],
																}),
															],
													  })
													: h.jsx("div", {
															className:
																"text-muted-foreground",
															children:
																"Loading...",
													  }),
											}),
										}),
									],
								}),
							}),
						}),
						h.jsx("div", {
							className:
								"flex-1 overflow-y-auto rounded-lg bg-chat-light dark:bg-chat-dark p-2 space-y-2",
							children: h.jsxs(Ox, {
								className: "h-full w-full px-4",
								children: [
									l.length > 0
										? l.map((_) =>
												h.jsx(
													"div",
													{
														className: `py-3 flex ${
															_.Sent == 1
																? "justify-end"
																: "justify-start"
														}`,
														children: h.jsxs(
															L2,
															{
																children: [
																	h.jsx(U2, {
																		asChild:
																			!0,
																		children:
																			h.jsx(
																				Co,
																				{
																					className: `max-w-[70%] rounded-2xl px-3 py-2 ${
																						_.Sent
																							? "bg-primary text-primary-foreground"
																							: "bg-muted text-foreground"
																					}`,
																					children:
																						h.jsx(
																							Ro,
																							{
																								className:
																									"p-0",
																								children:
																									h.jsxs(
																										"div",
																										{
																											className:
																												"relative flex flex-col",
																											children:
																												[
																													h.jsx(
																														"p",
																														{
																															className:
																																"pr-15 pb-1",
																															children:
																																_.Message,
																														}
																													),
																													h.jsx(
																														"span",
																														{
																															className:
																																"absolute bottom-0 right-0 text-xs text-muted-foreground pr-0 pb-0 opacity-55",
																															children:
																																k(
																																	_.TimeStamp
																																),
																														}
																													),
																												],
																										}
																									),
																							}
																						),
																				}
																			),
																	}),
																	h.jsxs(H2, {
																		className:
																			"w-64 bg-gray-100 dark:bg-neutral-800",
																		children:
																			[
																				h.jsxs(
																					ss,
																					{
																						children:
																							[
																								" ",
																								"CID",
																								" ",
																							],
																					}
																				),
																				h.jsxs(
																					is,
																					{
																						onClick:
																							() =>
																								D(
																									_.Cid,
																									_.Cid +
																										"-cid"
																								),
																						className:
																							"flex items-center justify-between space-x-2",
																						children:
																							[
																								h.jsx(
																									"div",
																									{
																										className:
																											"max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap",
																										children:
																											_.Cid,
																									}
																								),
																								h.jsx(
																									"button",
																									{
																										onClick:
																											(
																												q
																											) => {
																												q.stopPropagation(),
																													D(
																														_.Cid,
																														_.Cid +
																															"-cid"
																													);
																											},
																										className:
																											"hover:text-primary transition-all duration-200 cursor-pointer",
																										children:
																											S ===
																											_.Cid +
																												"-cid"
																												? h.jsx(
																														Ki,
																														{
																															className:
																																"h-4 w-4 text-green-500",
																														}
																												  )
																												: h.jsx(
																														Qi,
																														{
																															className:
																																"h-4 w-4",
																														}
																												  ),
																									}
																								),
																							],
																					}
																				),
																				h.jsx(
																					Nf,
																					{}
																				),
																				h.jsx(
																					ss,
																					{
																						children:
																							"RING",
																					}
																				),
																				h.jsxs(
																					is,
																					{
																						className:
																							"flex items-center justify-between space-x-2",
																						children:
																							[
																								h.jsx(
																									"div",
																									{
																										className:
																											"max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap",
																										children:
																											_.Ring,
																									}
																								),
																								h.jsx(
																									"button",
																									{
																										onClick:
																											(
																												q
																											) => {
																												q.stopPropagation(),
																													D(
																														_.Ring,
																														_.Cid +
																															"-ring"
																													);
																											},
																										className:
																											"hover:text-primary transition-all duration-200 cursor-pointer",
																										children:
																											S ===
																											_.Cid +
																												"-ring"
																												? h.jsx(
																														Ki,
																														{
																															className:
																																"h-4 w-4 text-green-500",
																														}
																												  )
																												: h.jsx(
																														Qi,
																														{
																															className:
																																"h-4 w-4",
																														}
																												  ),
																									}
																								),
																							],
																					}
																				),
																				h.jsx(
																					Nf,
																					{}
																				),
																				h.jsx(
																					ss,
																					{
																						children:
																							"SIGNATURE",
																					}
																				),
																				h.jsxs(
																					is,
																					{
																						className:
																							"flex items-center justify-between space-x-2",
																						children:
																							[
																								h.jsx(
																									"div",
																									{
																										className:
																											"max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap",
																										children:
																											_.Signature,
																									}
																								),
																								h.jsx(
																									"button",
																									{
																										onClick:
																											(
																												q
																											) => {
																												q.stopPropagation(),
																													D(
																														_.Signature,
																														_.Cid +
																															"-signature"
																													);
																											},
																										className:
																											"hover:text-primary transition-all duration-200 cursor-pointer",
																										children:
																											S ===
																											_.Cid +
																												"-signature"
																												? h.jsx(
																														Ki,
																														{
																															className:
																																"h-4 w-4 text-green-500",
																														}
																												  )
																												: h.jsx(
																														Qi,
																														{
																															className:
																																"h-4 w-4",
																														}
																												  ),
																									}
																								),
																							],
																					}
																				),
																				h.jsx(
																					Nf,
																					{}
																				),
																				h.jsx(
																					ss,
																					{
																						children:
																							"ENCRYPTED MESSAGE",
																					}
																				),
																				h.jsxs(
																					is,
																					{
																						className:
																							"flex items-center justify-between space-x-2",
																						children:
																							[
																								h.jsx(
																									"div",
																									{
																										className:
																											"max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap",
																										children:
																											_.EncryptedMessage,
																									}
																								),
																								h.jsx(
																									"button",
																									{
																										onClick:
																											(
																												q
																											) => {
																												q.stopPropagation(),
																													D(
																														_.EncryptedMessage,
																														_.Cid +
																															"-encrypted"
																													);
																											},
																										className:
																											"hover:text-primary transition-all duration-200 cursor-pointer",
																										children:
																											S ===
																											_.Cid +
																												"-encrypted"
																												? h.jsx(
																														Ki,
																														{
																															className:
																																"h-4 w-4 text-green-500",
																														}
																												  )
																												: h.jsx(
																														Qi,
																														{
																															className:
																																"h-4 w-4",
																														}
																												  ),
																									}
																								),
																							],
																					}
																				),
																			],
																	}),
																],
															},
															_.Cid
														),
													},
													_.Cid
												)
										  )
										: h.jsx("p", {
												className:
													"text-center text-muted-foreground",
												children: "No messages yet.",
										  }),
									h.jsx("div", { ref: g }),
									h.jsx($d, { orientation: "vertical" }),
								],
							}),
						}),
						h.jsxs("div", {
							className: "mt-4 flex items-center space-x-2",
							children: [
								h.jsx(ya, {
									ref: p,
									type: "text",
									placeholder: "Type a message...",
									className:
										"flex-1 rounded-full border border-border px-4 py-2 bg-input text-foreground",
									disabled: y,
									value: c,
									onChange: (_) => u(_.target.value),
									onKeyDown: (_) => {
										_.key === "Enter" && M();
									},
								}),
								h.jsx(Bt, {
									onClick: M,
									disabled: y,
									className:
										"hover:bg-[var(--hover-bg)] rounded-md shadow hover:shadow-md cursor-pointer",
									children: y
										? h.jsx("div", {
												className:
													"animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full",
										  })
										: h.jsx(n1, {
												className:
													"text-primary hover:text-primary/80 ",
										  }),
								}),
							],
						}),
					],
			  })
			: h.jsx("div", {
					className:
						"relative flex items-center justify-center flex-1 text-muted-foreground text-center overflow-hidden",
					children: h.jsx("img", {
						src: "./assets/login-bg1.jpg",
						alt: "Background",
						className:
							"absolute inset-0 h-full w-full object-cover brightness-[0.9] pointer-events-none select-none",
					}),
			  }),
	});
}
function B2({ setIsSyncOpen: n }) {
	const [l, o] = v.useState(null),
		[i, c] = v.useState(!1),
		[u, d] = v.useState([]),
		[m, g] = v.useState([]),
		p = (C) => {
			o(C);
		},
		y = async () => {
			const C = await window.electron.fetchUsers();
			console.log("Users: "),
				console.log(C),
				l &&
					C.forEach((A) => {
						l.ID == A.ID && o(A);
					}),
				d(C);
		},
		x = async () => {
			const C = await window.electron.fetchMessages(l.ID);
			console.log("fetch messages call"), console.log(C), g(C);
		},
		S = () => {
			console.log("Backend Called"), c((C) => !C);
		},
		E = () => {
			S();
		};
	return (
		v.useEffect(
			() => (
				window.electron.backend_callback(E),
				() => {
					window.electron.remove_backend_callback(E);
				}
			),
			[]
		),
		v.useEffect(() => {
			y();
		}, [i]),
		v.useEffect(() => {
			l && x();
		}, [l, i]),
		h.jsx(h.Fragment, {
			children: h.jsxs(mA, {
				direction: "horizontal",
				className: "flex h-screen w-full overflow-hidden",
				children: [
					h.jsx(vg, {
						order: 1,
						defaultSize: 30,
						minSize: 20,
						maxSize: 40,
						className: "flex flex-col h-full",
						children: h.jsx(wT, {
							onSelectChat: p,
							setIsSyncOpen: n,
							users: u,
						}),
					}),
					h.jsx(hA, { withHandle: !0 }),
					h.jsx(vg, {
						order: 2,
						defaultSize: 70,
						className: "flex flex-col",
						children: h.jsx("div", {
							className: "h-screen flex flex-col",
							children: h.jsx(k2, {
								selectedChat: l,
								messages: m,
								setBackendCall: c,
								setSelectedChat: o,
							}),
						}),
					}),
				],
			}),
		})
	);
}
var G2 = "Label",
	P0 = v.forwardRef((n, l) =>
		h.jsx(qe.label, {
			...n,
			ref: l,
			onMouseDown: (o) => {
				var c;
				o.target.closest("button, input, select, textarea") ||
					((c = n.onMouseDown) == null || c.call(n, o),
					!o.defaultPrevented && o.detail > 1 && o.preventDefault());
			},
		})
	);
P0.displayName = G2;
var $2 = P0;
function Ir({ className: n, ...l }) {
	return h.jsx($2, {
		"data-slot": "label",
		className: De(
			"flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			n
		),
		...l,
	});
}
var Tf = "focusScope.autoFocusOnMount",
	Mf = "focusScope.autoFocusOnUnmount",
	Fg = { bubbles: !1, cancelable: !0 },
	Y2 = "FocusScope",
	L0 = v.forwardRef((n, l) => {
		const {
				loop: o = !1,
				trapped: i = !1,
				onMountAutoFocus: c,
				onUnmountAutoFocus: u,
				...d
			} = n,
			[m, g] = v.useState(null),
			p = ze(c),
			y = ze(u),
			x = v.useRef(null),
			S = Se(l, (A) => g(A)),
			E = v.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				},
			}).current;
		v.useEffect(() => {
			if (i) {
				let A = function (D) {
						if (E.paused || !m) return;
						const L = D.target;
						m.contains(L)
							? (x.current = L)
							: va(x.current, { select: !0 });
					},
					R = function (D) {
						if (E.paused || !m) return;
						const L = D.relatedTarget;
						L !== null &&
							(m.contains(L) || va(x.current, { select: !0 }));
					},
					M = function (D) {
						if (document.activeElement === document.body)
							for (const _ of D)
								_.removedNodes.length > 0 && va(m);
					};
				document.addEventListener("focusin", A),
					document.addEventListener("focusout", R);
				const k = new MutationObserver(M);
				return (
					m && k.observe(m, { childList: !0, subtree: !0 }),
					() => {
						document.removeEventListener("focusin", A),
							document.removeEventListener("focusout", R),
							k.disconnect();
					}
				);
			}
		}, [i, m, E.paused]),
			v.useEffect(() => {
				if (m) {
					Jg.add(E);
					const A = document.activeElement;
					if (!m.contains(A)) {
						const M = new CustomEvent(Tf, Fg);
						m.addEventListener(Tf, p),
							m.dispatchEvent(M),
							M.defaultPrevented ||
								(q2(Z2(U0(m)), { select: !0 }),
								document.activeElement === A && va(m));
					}
					return () => {
						m.removeEventListener(Tf, p),
							setTimeout(() => {
								const M = new CustomEvent(Mf, Fg);
								m.addEventListener(Mf, y),
									m.dispatchEvent(M),
									M.defaultPrevented ||
										va(A ?? document.body, { select: !0 }),
									m.removeEventListener(Mf, y),
									Jg.remove(E);
							}, 0);
					};
				}
			}, [m, p, y, E]);
		const C = v.useCallback(
			(A) => {
				if ((!o && !i) || E.paused) return;
				const R =
						A.key === "Tab" &&
						!A.altKey &&
						!A.ctrlKey &&
						!A.metaKey,
					M = document.activeElement;
				if (R && M) {
					const k = A.currentTarget,
						[D, L] = X2(k);
					D && L
						? !A.shiftKey && M === L
							? (A.preventDefault(), o && va(D, { select: !0 }))
							: A.shiftKey &&
							  M === D &&
							  (A.preventDefault(), o && va(L, { select: !0 }))
						: M === k && A.preventDefault();
				}
			},
			[o, i, E.paused]
		);
		return h.jsx(qe.div, { tabIndex: -1, ...d, ref: S, onKeyDown: C });
	});
L0.displayName = Y2;
function q2(n, { select: l = !1 } = {}) {
	const o = document.activeElement;
	for (const i of n)
		if ((va(i, { select: l }), document.activeElement !== o)) return;
}
function X2(n) {
	const l = U0(n),
		o = Wg(l, n),
		i = Wg(l.reverse(), n);
	return [o, i];
}
function U0(n) {
	const l = [],
		o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (i) => {
				const c = i.tagName === "INPUT" && i.type === "hidden";
				return i.disabled || i.hidden || c
					? NodeFilter.FILTER_SKIP
					: i.tabIndex >= 0
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	for (; o.nextNode(); ) l.push(o.currentNode);
	return l;
}
function Wg(n, l) {
	for (const o of n) if (!V2(o, { upTo: l })) return o;
}
function V2(n, { upTo: l }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n; ) {
		if (l !== void 0 && n === l) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function K2(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function va(n, { select: l = !1 } = {}) {
	if (n && n.focus) {
		const o = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== o && K2(n) && l && n.select();
	}
}
var Jg = Q2();
function Q2() {
	let n = [];
	return {
		add(l) {
			const o = n[0];
			l !== o && (o == null || o.pause()), (n = ey(n, l)), n.unshift(l);
		},
		remove(l) {
			var o;
			(n = ey(n, l)), (o = n[0]) == null || o.resume();
		},
	};
}
function ey(n, l) {
	const o = [...n],
		i = o.indexOf(l);
	return i !== -1 && o.splice(i, 1), o;
}
function Z2(n) {
	return n.filter((l) => l.tagName !== "A");
}
var Jd = "Dialog",
	[H0, k0] = Rt(Jd),
	[I2, on] = H0(Jd),
	B0 = (n) => {
		const {
				__scopeDialog: l,
				children: o,
				open: i,
				defaultOpen: c,
				onOpenChange: u,
				modal: d = !0,
			} = n,
			m = v.useRef(null),
			g = v.useRef(null),
			[p = !1, y] = td({ prop: i, defaultProp: c, onChange: u });
		return h.jsx(I2, {
			scope: l,
			triggerRef: m,
			contentRef: g,
			contentId: Kr(),
			titleId: Kr(),
			descriptionId: Kr(),
			open: p,
			onOpenChange: y,
			onOpenToggle: v.useCallback(() => y((x) => !x), [y]),
			modal: d,
			children: o,
		});
	};
B0.displayName = Jd;
var G0 = "DialogTrigger",
	$0 = v.forwardRef((n, l) => {
		const { __scopeDialog: o, ...i } = n,
			c = on(G0, o),
			u = Se(l, c.triggerRef);
		return h.jsx(qe.button, {
			type: "button",
			"aria-haspopup": "dialog",
			"aria-expanded": c.open,
			"aria-controls": c.contentId,
			"data-state": nm(c.open),
			...i,
			ref: u,
			onClick: ie(n.onClick, c.onOpenToggle),
		});
	});
$0.displayName = G0;
var em = "DialogPortal",
	[F2, Y0] = H0(em, { forceMount: void 0 }),
	q0 = (n) => {
		const {
				__scopeDialog: l,
				forceMount: o,
				children: i,
				container: c,
			} = n,
			u = on(em, l);
		return h.jsx(F2, {
			scope: l,
			forceMount: o,
			children: v.Children.map(i, (d) =>
				h.jsx(bn, {
					present: o || u.open,
					children: h.jsx(Cd, {
						asChild: !0,
						container: c,
						children: d,
					}),
				})
			),
		});
	};
q0.displayName = em;
var Cs = "DialogOverlay",
	X0 = v.forwardRef((n, l) => {
		const o = Y0(Cs, n.__scopeDialog),
			{ forceMount: i = o.forceMount, ...c } = n,
			u = on(Cs, n.__scopeDialog);
		return u.modal
			? h.jsx(bn, {
					present: i || u.open,
					children: h.jsx(J2, { ...c, ref: l }),
			  })
			: null;
	});
X0.displayName = Cs;
var W2 = vn("DialogOverlay.RemoveScroll"),
	J2 = v.forwardRef((n, l) => {
		const { __scopeDialog: o, ...i } = n,
			c = on(Cs, o);
		return h.jsx(Gs, {
			as: W2,
			allowPinchZoom: !0,
			shards: [c.contentRef],
			children: h.jsx(qe.div, {
				"data-state": nm(c.open),
				...i,
				ref: l,
				style: { pointerEvents: "auto", ...i.style },
			}),
		});
	}),
	Za = "DialogContent",
	V0 = v.forwardRef((n, l) => {
		const o = Y0(Za, n.__scopeDialog),
			{ forceMount: i = o.forceMount, ...c } = n,
			u = on(Za, n.__scopeDialog);
		return h.jsx(bn, {
			present: i || u.open,
			children: u.modal
				? h.jsx(eO, { ...c, ref: l })
				: h.jsx(tO, { ...c, ref: l }),
		});
	});
V0.displayName = Za;
var eO = v.forwardRef((n, l) => {
		const o = on(Za, n.__scopeDialog),
			i = v.useRef(null),
			c = Se(l, o.contentRef, i);
		return (
			v.useEffect(() => {
				const u = i.current;
				if (u) return Ld(u);
			}, []),
			h.jsx(K0, {
				...n,
				ref: c,
				trapFocus: o.open,
				disableOutsidePointerEvents: !0,
				onCloseAutoFocus: ie(n.onCloseAutoFocus, (u) => {
					var d;
					u.preventDefault(),
						(d = o.triggerRef.current) == null || d.focus();
				}),
				onPointerDownOutside: ie(n.onPointerDownOutside, (u) => {
					const d = u.detail.originalEvent,
						m = d.button === 0 && d.ctrlKey === !0;
					(d.button === 2 || m) && u.preventDefault();
				}),
				onFocusOutside: ie(n.onFocusOutside, (u) => u.preventDefault()),
			})
		);
	}),
	tO = v.forwardRef((n, l) => {
		const o = on(Za, n.__scopeDialog),
			i = v.useRef(!1),
			c = v.useRef(!1);
		return h.jsx(K0, {
			...n,
			ref: l,
			trapFocus: !1,
			disableOutsidePointerEvents: !1,
			onCloseAutoFocus: (u) => {
				var d, m;
				(d = n.onCloseAutoFocus) == null || d.call(n, u),
					u.defaultPrevented ||
						(i.current ||
							(m = o.triggerRef.current) == null ||
							m.focus(),
						u.preventDefault()),
					(i.current = !1),
					(c.current = !1);
			},
			onInteractOutside: (u) => {
				var g, p;
				(g = n.onInteractOutside) == null || g.call(n, u),
					u.defaultPrevented ||
						((i.current = !0),
						u.detail.originalEvent.type === "pointerdown" &&
							(c.current = !0));
				const d = u.target;
				((p = o.triggerRef.current) == null ? void 0 : p.contains(d)) &&
					u.preventDefault(),
					u.detail.originalEvent.type === "focusin" &&
						c.current &&
						u.preventDefault();
			},
		});
	}),
	K0 = v.forwardRef((n, l) => {
		const {
				__scopeDialog: o,
				trapFocus: i,
				onOpenAutoFocus: c,
				onCloseAutoFocus: u,
				...d
			} = n,
			m = on(Za, o),
			g = v.useRef(null),
			p = Se(l, g);
		return (
			Dd(),
			h.jsxs(h.Fragment, {
				children: [
					h.jsx(L0, {
						asChild: !0,
						loop: !0,
						trapped: i,
						onMountAutoFocus: c,
						onUnmountAutoFocus: u,
						children: h.jsx(od, {
							role: "dialog",
							id: m.contentId,
							"aria-describedby": m.descriptionId,
							"aria-labelledby": m.titleId,
							"data-state": nm(m.open),
							...d,
							ref: p,
							onDismiss: () => m.onOpenChange(!1),
						}),
					}),
					h.jsxs(h.Fragment, {
						children: [
							h.jsx(aO, { titleId: m.titleId }),
							h.jsx(lO, {
								contentRef: g,
								descriptionId: m.descriptionId,
							}),
						],
					}),
				],
			})
		);
	}),
	tm = "DialogTitle",
	Q0 = v.forwardRef((n, l) => {
		const { __scopeDialog: o, ...i } = n,
			c = on(tm, o);
		return h.jsx(qe.h2, { id: c.titleId, ...i, ref: l });
	});
Q0.displayName = tm;
var Z0 = "DialogDescription",
	I0 = v.forwardRef((n, l) => {
		const { __scopeDialog: o, ...i } = n,
			c = on(Z0, o);
		return h.jsx(qe.p, { id: c.descriptionId, ...i, ref: l });
	});
I0.displayName = Z0;
var F0 = "DialogClose",
	W0 = v.forwardRef((n, l) => {
		const { __scopeDialog: o, ...i } = n,
			c = on(F0, o);
		return h.jsx(qe.button, {
			type: "button",
			...i,
			ref: l,
			onClick: ie(n.onClick, () => c.onOpenChange(!1)),
		});
	});
W0.displayName = F0;
function nm(n) {
	return n ? "open" : "closed";
}
var J0 = "DialogTitleWarning",
	[nO, eS] = SA(J0, { contentName: Za, titleName: tm, docsSlug: "dialog" }),
	aO = ({ titleId: n }) => {
		const l = eS(J0),
			o = `\`${l.contentName}\` requires a \`${l.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${l.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${l.docsSlug}`;
		return (
			v.useEffect(() => {
				n && (document.getElementById(n) || console.error(o));
			}, [o, n]),
			null
		);
	},
	rO = "DialogDescriptionWarning",
	lO = ({ contentRef: n, descriptionId: l }) => {
		const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
			eS(rO).contentName
		}}.`;
		return (
			v.useEffect(() => {
				var u;
				const c =
					(u = n.current) == null
						? void 0
						: u.getAttribute("aria-describedby");
				l && c && (document.getElementById(l) || console.warn(i));
			}, [i, n, l]),
			null
		);
	},
	oO = B0,
	iO = $0,
	sO = q0,
	cO = X0,
	uO = V0,
	fO = Q0,
	dO = I0,
	tS = W0,
	nS = "AlertDialog",
	[mO, WO] = Rt(nS, [k0]),
	Gn = k0(),
	aS = (n) => {
		const { __scopeAlertDialog: l, ...o } = n,
			i = Gn(l);
		return h.jsx(oO, { ...i, ...o, modal: !0 });
	};
aS.displayName = nS;
var hO = "AlertDialogTrigger",
	rS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			c = Gn(o);
		return h.jsx(iO, { ...c, ...i, ref: l });
	});
rS.displayName = hO;
var pO = "AlertDialogPortal",
	lS = (n) => {
		const { __scopeAlertDialog: l, ...o } = n,
			i = Gn(l);
		return h.jsx(sO, { ...i, ...o });
	};
lS.displayName = pO;
var vO = "AlertDialogOverlay",
	oS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			c = Gn(o);
		return h.jsx(cO, { ...c, ...i, ref: l });
	});
oS.displayName = vO;
var Fr = "AlertDialogContent",
	[gO, yO] = mO(Fr),
	bO = Gy("AlertDialogContent"),
	iS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, children: i, ...c } = n,
			u = Gn(o),
			d = v.useRef(null),
			m = Se(l, d),
			g = v.useRef(null);
		return h.jsx(nO, {
			contentName: Fr,
			titleName: sS,
			docsSlug: "alert-dialog",
			children: h.jsx(gO, {
				scope: o,
				cancelRef: g,
				children: h.jsxs(uO, {
					role: "alertdialog",
					...u,
					...c,
					ref: m,
					onOpenAutoFocus: ie(c.onOpenAutoFocus, (p) => {
						var y;
						p.preventDefault(),
							(y = g.current) == null ||
								y.focus({ preventScroll: !0 });
					}),
					onPointerDownOutside: (p) => p.preventDefault(),
					onInteractOutside: (p) => p.preventDefault(),
					children: [
						h.jsx(bO, { children: i }),
						h.jsx(SO, { contentRef: d }),
					],
				}),
			}),
		});
	});
iS.displayName = Fr;
var sS = "AlertDialogTitle",
	cS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			c = Gn(o);
		return h.jsx(fO, { ...c, ...i, ref: l });
	});
cS.displayName = sS;
var uS = "AlertDialogDescription",
	fS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			c = Gn(o);
		return h.jsx(dO, { ...c, ...i, ref: l });
	});
fS.displayName = uS;
var xO = "AlertDialogAction",
	dS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			c = Gn(o);
		return h.jsx(tS, { ...c, ...i, ref: l });
	});
dS.displayName = xO;
var mS = "AlertDialogCancel",
	hS = v.forwardRef((n, l) => {
		const { __scopeAlertDialog: o, ...i } = n,
			{ cancelRef: c } = yO(mS, o),
			u = Gn(o),
			d = Se(l, c);
		return h.jsx(tS, { ...u, ...i, ref: d });
	});
hS.displayName = mS;
var SO = ({ contentRef: n }) => {
		const l = `\`${Fr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Fr}\` by passing a \`${uS}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Fr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
		return (
			v.useEffect(() => {
				var i;
				document.getElementById(
					(i = n.current) == null
						? void 0
						: i.getAttribute("aria-describedby")
				) || console.warn(l);
			}, [l, n]),
			null
		);
	},
	wO = aS,
	EO = rS,
	AO = lS,
	CO = oS,
	RO = iS,
	NO = dS,
	TO = hS,
	MO = cS,
	OO = fS;
function Rs({ ...n }) {
	return h.jsx(wO, { "data-slot": "alert-dialog", ...n });
}
function _O({ ...n }) {
	return h.jsx(EO, { "data-slot": "alert-dialog-trigger", ...n });
}
function DO({ ...n }) {
	return h.jsx(AO, { "data-slot": "alert-dialog-portal", ...n });
}
function jO({ className: n, ...l }) {
	return h.jsx(CO, {
		"data-slot": "alert-dialog-overlay",
		className: De(
			"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
			n
		),
		...l,
	});
}
function Ns({ className: n, ...l }) {
	return h.jsxs(DO, {
		children: [
			h.jsx(jO, {}),
			h.jsx(RO, {
				"data-slot": "alert-dialog-content",
				className: De(
					"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
					n
				),
				...l,
			}),
		],
	});
}
function Xf({ className: n, ...l }) {
	return h.jsx("div", {
		"data-slot": "alert-dialog-header",
		className: De("flex flex-col gap-2 text-center sm:text-left", n),
		...l,
	});
}
function Vf({ className: n, ...l }) {
	return h.jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: De(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
			n
		),
		...l,
	});
}
function qa({ className: n, ...l }) {
	return h.jsx(MO, {
		"data-slot": "alert-dialog-title",
		className: De("text-lg font-semibold", n),
		...l,
	});
}
function fo({ className: n, ...l }) {
	return h.jsx(OO, {
		"data-slot": "alert-dialog-description",
		className: De("text-muted-foreground text-sm", n),
		...l,
	});
}
function Ts({ className: n, ...l }) {
	return h.jsx(NO, { className: De(ed(), n), ...l });
}
function pS({ className: n, ...l }) {
	return h.jsx(TO, { className: De(ed({ variant: "outline" }), n), ...l });
}
function zO({ className: n, onRegisterSuccess: l, ...o }) {
	const [i, c] = v.useState(""),
		[u, d] = v.useState(""),
		[m, g] = v.useState(""),
		[p, y] = v.useState(!1),
		[x, S] = v.useState(!1),
		E = v.useRef(null),
		C = async (R) => {
			if ((R.preventDefault(), u !== m)) {
				y(!0);
				return;
			}
			await window.electron.setPassword(i, u), l();
		},
		A = () => {
			d(""), g(""), y(!1), S((R) => !R);
		};
	return (
		v.useEffect(() => {
			E.current.focus();
		}, [x]),
		h.jsx("div", {
			className: De("flex flex-col gap-6", n),
			...o,
			children: h.jsx(Co, {
				className: "overflow-hidden p-0",
				children: h.jsxs(Ro, {
					className: "grid p-0 md:grid-cols-2",
					children: [
						h.jsxs("form", {
							className: "p-6 md:p-8",
							onSubmit: C,
							children: [
								h.jsxs("div", {
									className: "flex flex-col gap-6",
									children: [
										h.jsxs("div", {
											className:
												"flex flex-col items-center text-center",
											children: [
												h.jsx("h1", {
													className:
														"text-2xl font-bold p-2",
													children: "Welcome",
												}),
												h.jsx("p", {
													className:
														"text-muted-foreground text-balance",
													children: "Create Account",
												}),
											],
										}),
										h.jsxs("div", {
											className: "grid gap-3",
											children: [
												h.jsx("div", {
													className:
														"flex items-center",
													children: h.jsx(Ir, {
														htmlFor: "username",
														children: "Username",
													}),
												}),
												h.jsx(ya, {
													id: "username",
													type: "text",
													required: !0,
													value: i,
													onChange: (R) =>
														c(R.target.value),
													className:
														"border border-border",
													autoFocus: !0,
												}),
											],
										}),
										h.jsxs("div", {
											className: "grid gap-3",
											children: [
												h.jsx("div", {
													className:
														"flex items-center",
													children: h.jsx(Ir, {
														htmlFor: "password",
														children: "Password",
													}),
												}),
												h.jsx(ya, {
													id: "password",
													type: "password",
													required: !0,
													value: u,
													onChange: (R) =>
														d(R.target.value),
													className:
														"border border-border",
													ref: E,
												}),
											],
										}),
										h.jsxs("div", {
											className: "grid gap-3",
											children: [
												h.jsx("div", {
													className:
														"flex items-center",
													children: h.jsx(Ir, {
														htmlFor:
															"confirmpassword",
														children:
															"Confirm Password",
													}),
												}),
												h.jsx(ya, {
													id: "confirmpassword",
													type: "password",
													required: !0,
													value: m,
													onChange: (R) =>
														g(R.target.value),
													className:
														"border border-border",
												}),
											],
										}),
										h.jsx(Bt, {
											type: "submit",
											className:
												"w-1/2 border border-border mx-auto hover:bg-[var(--hover-bg)] rounded-md shadow hover:shadow-md cursor-pointer shadow-gray-400 dark:shadow-neutral-900 cursor-pointer",
											children: "Register",
										}),
										h.jsx(Rs, {
											open: p,
											onOpenChange: y,
											children: h.jsxs(Ns, {
												children: [
													h.jsxs(Xf, {
														children: [
															h.jsx(qa, {
																className:
																	"text-center",
																children:
																	"Passwords do not match",
															}),
															h.jsx(fo, {
																className:
																	"text-center",
																children:
																	"Please try again. Your password and confirm password do not match.",
															}),
														],
													}),
													h.jsx(Vf, {
														children: h.jsx(pS, {
															asChild: !0,
															children: h.jsx(
																Bt,
																{
																	onClick: A,
																	variant:
																		"outline",
																	className:
																		"border border-border w-1/2 hover:bg-neutral-200 shadow hover:shadow-md cursor-pointer",
																	children:
																		"OK",
																}
															),
														}),
													}),
												],
											}),
										}),
									],
								}),
								h.jsx("div", {
									className:
										"flex flex-1 flex-col justify-end items-center pt-6 ",
									children: h.jsx(rd, { asText: !0 }),
								}),
							],
						}),
						h.jsx("div", {
							className: "bg-muted relative hidden md:block",
							children: h.jsx("img", {
								src: "./assets/login-bg1.jpg",
								alt: "Image",
								className:
									"absolute inset-0 h-full w-full object-cover brightness-[0.9]",
							}),
						}),
					],
				}),
			}),
		})
	);
}
function PO({ className: n, setIsLoggedIn: l, setShowRegisterPage: o, ...i }) {
	const [c, u] = v.useState(""),
		[d, m] = v.useState(!1),
		[g, p] = v.useState(!1),
		y = v.useRef(null);
	v.useEffect(() => {
		y.current.focus();
	}, [g]);
	const x = async (C) => {
			C.preventDefault(),
				console.log("Typed password:", c),
				(await window.electron.login(c)) ? l(!0) : (m(!0), u(""));
		},
		S = async () => {
			const C = await window.electron.forgot_password();
			console.log("Delete successful:", C);
		},
		E = async () => {
			await S(), o(!0);
		};
	return h.jsx("div", {
		className: De("flex flex-col gap-6 ", n),
		...i,
		children: h.jsx(Co, {
			className: "overflow-hidden p-0 ",
			children: h.jsxs(Ro, {
				className: "grid p-0 md:grid-cols-2",
				children: [
					h.jsxs("form", {
						className: "p-6 md:p-8",
						onSubmit: x,
						children: [
							h.jsxs("div", {
								className: "flex flex-col gap-6",
								children: [
									h.jsxs("div", {
										className:
											"flex flex-col items-center text-center",
										children: [
											h.jsx("h1", {
												className:
													"text-2xl font-bold p-2",
												children: "Welcome back",
											}),
											h.jsx("p", {
												className:
													"text-muted-foreground text-balance",
												children:
													"Login to your StealthComm Account",
											}),
										],
									}),
									h.jsxs("div", {
										className: "grid gap-3",
										children: [
											h.jsx("div", {
												className: "flex items-center",
												children: h.jsx(Ir, {
													htmlFor: "password",
													children: "Password",
												}),
											}),
											h.jsx(ya, {
												id: "password",
												type: "password",
												className:
													"border border-border shadow shadow-gray-300 dark:shadow-neutral-900",
												required: !0,
												value: c,
												onChange: (C) =>
													u(C.target.value),
												ref: y,
											}),
										],
									}),
									h.jsx(Bt, {
										type: "submit",
										className:
											"w-1/2 border border-border mx-auto hover:bg-[var(--hover-bg)] rounded-md shadow-gray-400 dark:shadow-neutral-900 hover:shadow-md cursor-pointer",
										children: "Login",
									}),
									h.jsxs(Rs, {
										children: [
											h.jsx(_O, {
												asChild: !0,
												children: h.jsx(Bt, {
													type: "button",
													className:
														"w-1/2 border border-border mx-auto hover:bg-[var(--hover-bg)] rounded-md shadow-gray-400 dark:shadow-neutral-900 hover:shadow-md cursor-pointer",
													children:
														"Forgot Password?",
												}),
											}),
											h.jsxs(Ns, {
												className:
													"bg-gray-300 dark:bg-neutral-900",
												children: [
													h.jsxs(Xf, {
														children: [
															h.jsx(qa, {
																className:
																	"text-center",
																children:
																	"Delete your account?",
															}),
															h.jsx("p", {
																className:
																	"text-muted-foreground text-sm text-center",
																children:
																	"This will remove all your saved credentials and require re-registration.",
															}),
														],
													}),
													h.jsxs(Vf, {
														children: [
															h.jsx(pS, {
																asChild: !0,
																children: h.jsx(
																	Bt,
																	{
																		onClick:
																			() => {
																				p(
																					(
																						C
																					) =>
																						!C
																				),
																					console.log(
																						"cancel clicked"
																					);
																			},
																		variant:
																			"outline",
																		className:
																			"border border-border w-1/2 hover:bg-neutral-200 shadow hover:shadow-md cursor-pointer",
																		children:
																			"Cancel",
																	}
																),
															}),
															h.jsx(Ts, {
																onClick: E,
																className:
																	"w-1/2 bg-red-700 text-white hover:bg-red-900 mx-auto rounded-md shadow hover:shadow-md transition-colors cursor-pointer",
																children:
																	"Delete Account",
															}),
														],
													}),
												],
											}),
										],
									}),
									h.jsx(Rs, {
										open: d,
										onOpenChange: m,
										children: h.jsxs(Ns, {
											children: [
												h.jsxs(Xf, {
													children: [
														h.jsx(qa, {
															className:
																"text-center",
															children:
																"Invalid Password",
														}),
														h.jsx("p", {
															className:
																"text-center text-muted-foreground text-sm",
															children:
																"Please try again.",
														}),
													],
												}),
												h.jsx(Vf, {
													children: h.jsx(Ts, {
														asChild: !0,
														children: h.jsx(Bt, {
															onClick: () => {
																m(!1),
																	p(
																		(C) =>
																			!C
																	);
															},
															className:
																"w-1/2 border border-border bg-primary text-white hover:bg-[var(--hover-bg)] mx-auto rounded-md shadow hover:shadow-md transition-colors cursor-pointer",
															children: "OK",
														}),
													}),
												}),
											],
										}),
									}),
								],
							}),
							h.jsx("div", {
								className:
									"flex flex-1 flex-col justify-end items-center pt-6 ",
								children: h.jsx(rd, { asText: !0 }),
							}),
						],
					}),
					h.jsx("div", {
						className: "bg-muted relative hidden md:block",
						children: h.jsx("img", {
							src: "./assets/login-bg1.jpg",
							alt: "Image",
							className:
								"absolute inset-0 h-full w-full object-cover brightness-[0.9]",
						}),
					}),
				],
			}),
		}),
	});
}
var LO = "Separator",
	ty = "horizontal",
	UO = ["horizontal", "vertical"],
	vS = v.forwardRef((n, l) => {
		const { decorative: o, orientation: i = ty, ...c } = n,
			u = HO(i) ? i : ty,
			m = o
				? { role: "none" }
				: {
						"aria-orientation": u === "vertical" ? u : void 0,
						role: "separator",
				  };
		return h.jsx(qe.div, { "data-orientation": u, ...m, ...c, ref: l });
	});
vS.displayName = LO;
function HO(n) {
	return UO.includes(n);
}
var kO = vS;
function BO({
	className: n,
	orientation: l = "horizontal",
	decorative: o = !0,
	...i
}) {
	return h.jsx(kO, {
		"data-slot": "separator-root",
		decorative: o,
		orientation: l,
		className: De(
			"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
			n
		),
		...i,
	});
}
function GO({ mnemonic: n, setIsSyncOpen: l, receiverName: o }) {
	const [i, c] = v.useState([]),
		[u, d] = v.useState(null),
		m = (S) => {
			if (!i.includes(S) && i.length < 12) {
				const E = [...i, S];
				c(E);
			}
		},
		g = () => {
			d("select");
		},
		p = async (S) => {
			d("loading"), console.log("Receiver:", o);
			const E = await window.electron.syncUser(i, o, S);
			d(E ? "success" : "failure");
		},
		y = (S) => {
			p(S === "receive");
		},
		x = () => {
			d(null), l(!1);
		};
	return h.jsxs("div", {
		className: "p-6 md:p-8",
		children: [
			h.jsx("h2", {
				className: "text-xl font-semibold mb-4 text-center p-3",
				children: "Select mnemonics in order",
			}),
			h.jsx("div", {
				className: "grid grid-cols-4 gap-4",
				children: n.map((S, E) =>
					h.jsx(
						Bt,
						{
							variant: i.includes(S) ? "secondary" : "default",
							onClick: () => m(S),
							disabled: i.includes(S) || i.length >= 12,
							className: `border border-border hover:bg-[var(--hover-bg)]\r
                 data-[state=active]:bg-[var(--hover-bg)] \r
                 data-[state=active]:text-foreground \r
                 dark:data-[state=active]:bg-neutral-600 shadow hover:shadow-md cursor-pointer`,
							children: S,
						},
						E
					)
				),
			}),
			h.jsx(BO, { className: "my-6 w-full" }),
			h.jsxs("div", {
				className: "w-full",
				children: [
					h.jsx("h3", {
						className: "text-md font-medium text-center mt-4 p-6",
						children: "Selected Sequence:",
					}),
					h.jsx("div", {
						className: "grid grid-cols-6 gap-2 text-center mt-2",
						children: i.map((S, E) =>
							h.jsx(
								"div",
								{
									className: "bg-muted py-2 px-4",
									children: S,
								},
								E
							)
						),
					}),
				],
			}),
			h.jsx("div", {
				className: "flex justify-center mt-6",
				children: h.jsx(Bt, {
					className:
						"mt-6 w-1/2 border border-border mx-auto hover:bg-[var(--hover-bg)] shadow hover:shadow-md cursor-pointer",
					onClick: g,
					disabled: i.length === 0,
					children: "Submit",
				}),
			}),
			h.jsx(Rs, {
				open: !!u,
				children: h.jsxs(Ns, {
					children: [
						u === "select" &&
							h.jsxs(h.Fragment, {
								children: [
									h.jsx(qa, { children: "Choose Action" }),
									h.jsx(fo, {
										children: h.jsxs("div", {
											className:
												"flex justify-center gap-4 mt-4",
											children: [
												h.jsx(Bt, {
													onClick: () => y("send"),
													className:
														"w-1/3 border border-border hover:bg-[var(--hover-bg)] shadow hover:shadow-md cursor-pointer",
													children: "Send",
												}),
												h.jsx(Bt, {
													onClick: () => y("receive"),
													className:
														"w-1/3 border border-border hover:bg-[var(--hover-bg)] shadow hover:shadow-md cursor-pointer",
													children: "Receive",
												}),
											],
										}),
									}),
								],
							}),
						u === "loading" &&
							h.jsxs(h.Fragment, {
								children: [
									h.jsx(qa, { children: "Loading..." }),
									h.jsx(fo, {
										children: h.jsxs("div", {
											className: "text-center mt-4",
											children: [
												h.jsx("p", {
													children:
														"Processing your request...",
												}),
												h.jsx("div", {
													className:
														"mt-4 animate-spin h-6 w-6 border-4 border-t-transparent border-primary rounded-full mx-auto",
												}),
											],
										}),
									}),
								],
							}),
						u === "success" &&
							h.jsxs(h.Fragment, {
								children: [
									h.jsx(qa, {
										className:
											"text-center text-2xl text-green-500",
										children: "Success",
									}),
									h.jsx(fo, {
										children: h.jsx("div", {
											className: "text-center mt-2",
											children:
												"Your request was successfully processed!",
										}),
									}),
									h.jsx(Ts, {
										onClick: x,
										className:
											"mx-auto w-1/3 border border-border hover:bg-[var(--hover-bg)] shadow hover:shadow-md",
										children: "OK",
									}),
								],
							}),
						u === "failure" &&
							h.jsxs(h.Fragment, {
								children: [
									h.jsx(qa, {
										className:
											"text-center text-2xl text-red-600",
										children: "Failure",
									}),
									h.jsx(fo, {
										children: h.jsx("div", {
											className: "text-center mt-2",
											children:
												"Something went wrong. Please try again.",
										}),
									}),
									h.jsx(Ts, {
										onClick: x,
										className:
											"mx-auto w-1/3 border border-border hover:bg-[var(--hover-bg)] shadow hover:shadow-md",
										children: "OK",
									}),
								],
							}),
					],
				}),
			}),
		],
	});
}
function $O({ setMnemonicWords: n, setReceiverName: l, receiverName: o }) {
	const [i, c] = v.useState(""),
		u = async (d) => {
			if ((d.preventDefault(), !i.trim())) {
				alert("Please enter something");
				return;
			}
			const m = await window.electron.createMnemonic(i);
			Array.isArray(m) && m.length === 12 && n(m);
		};
	return h.jsx("form", {
		className: "p-6 md:p-8",
		onSubmit: u,
		children: h.jsxs("div", {
			className: "flex flex-col gap-6",
			children: [
				h.jsxs("div", {
					className: "flex flex-col items-center text-center",
					children: [
						h.jsx("h1", {
							className: "text-2xl font-bold p-2",
							children: "Syncing with a new chat",
						}),
						h.jsx("p", {
							className: "text-muted-foreground text-balance",
							children:
								"Type a random sentence to generate a mnemonic",
						}),
					],
				}),
				h.jsxs("div", {
					className: "grid gap-3",
					children: [
						h.jsx("div", {
							className: "flex items-center",
							children: h.jsx(Ir, {
								htmlFor: "sentence",
								children:
									"Enter user's name you want to sync with",
							}),
						}),
						h.jsx(ya, {
							id: "username",
							type: "text",
							required: !0,
							value: o,
							onChange: (d) => l(d.target.value),
							className: "border border-border",
							autoFocus: !0,
						}),
					],
				}),
				h.jsxs("div", {
					className: "grid gap-3",
					children: [
						h.jsx("div", {
							className: "flex items-center",
							children: h.jsx(Ir, {
								htmlFor: "sentence",
								children: "Enter a sentence",
							}),
						}),
						h.jsx(ya, {
							id: "sentence",
							type: "text",
							required: !0,
							value: i,
							onChange: (d) => c(d.target.value),
							className: "border border-border",
						}),
					],
				}),
				h.jsx(Bt, {
					type: "submit",
					className:
						"w-1/2 border border-border mx-auto hover:bg-[var(--hover-bg)] shadow hover:shadow-md cursor-pointer",
					children: "Submit",
				}),
			],
		}),
	});
}
function YO({ className: n, setIsSyncOpen: l, ...o }) {
	const [i, c] = v.useState([]),
		[u, d] = v.useState("");
	return h.jsx("div", {
		className: De("flex flex-col gap-6", n),
		...o,
		children: h.jsx(Co, {
			className: "overflow-hidden p-0 ",
			children: h.jsx(Ro, {
				className: "grid p-0 md:grid-cols-1",
				children:
					i.length === 12
						? h.jsx(GO, {
								mnemonic: i,
								setIsSyncOpen: l,
								receiverName: u,
						  })
						: h.jsx($O, {
								setMnemonicWords: c,
								setReceiverName: d,
								receiverName: u,
						  }),
			}),
		}),
	});
}
function qO() {
	const [n, l] = v.useState(!1),
		[o, i] = v.useState(!0),
		[c, u] = v.useState(!1),
		d = async () => {
			(await window.electron.checkUser()) && i(!1);
		};
	v.useEffect(() => {
		d();
	}, []);
	const m = () => {
		i(!1), l(!1);
	};
	return h.jsx(h.Fragment, {
		children: c
			? h.jsx("div", {
					className:
						"flex min-h-svh flex-col items-center justify-center bg-gray-300 dark:bg-neutral-900 p-6 md:p-10",
					children: h.jsx("div", {
						className:
							"w-full max-w-sm md:max-w-xl shadow shadow-md",
						children: h.jsx(YO, { setIsSyncOpen: u }),
					}),
			  })
			: n
			? h.jsx(B2, { setIsSyncOpen: u })
			: o
			? h.jsx("div", {
					className:
						"flex min-h-svh flex-col items-center justify-center bg-gray-300 dark:bg-neutral-900 p-6 md:p-10",
					children: h.jsx("div", {
						className: "w-full max-w-sm md:max-w-3xl",
						children: h.jsx(zO, { onRegisterSuccess: m }),
					}),
			  })
			: h.jsx("div", {
					className:
						"flex min-h-svh flex-col items-center justify-center bg-gray-300 dark:bg-neutral-900 p-6 md:p-10",
					children: h.jsx("div", {
						className: "w-full max-w-sm md:max-w-3xl",
						children: h.jsx(PO, {
							setIsLoggedIn: l,
							setShowRegisterPage: i,
						}),
					}),
			  }),
	});
}
qE.createRoot(document.getElementById("root")).render(h.jsx(qO, {}));
