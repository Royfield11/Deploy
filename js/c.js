
(() => {
    var e = {
        5897: (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = n(7294), 
                o = (a(r), a(n(5697))), 
                i = a(n(7815));

            function a(e) {
                return e && e.__esModule ? e : { default: e };
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }

            a(n(2473));
            var u = 1073741823;

            function d(e) {
                var t = [];
                return {
                    on: function (e) {
                        t.push(e);
                    },
                    off: function (e) {
                        t = t.filter(function (t) {
                            return t !== e;
                        });
                    },
                    get: function () {
                        return e;
                    },
                    set: function (n, r) {
                        e = n;
                        t.forEach(function (t) {
                            return t(e, r);
                        });
                    }
                };
            }

            t.default = function (e, t) {
                var n, a, p = "__create-react-context-" + (0, i.default)() + "__", 
                    f = function (e) {
                        function n() {
                            var t, r;
                            c(this, n);
                            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) {
                                i[a] = arguments[a];
                            }
                            return t = r = l(this, e.call.apply(e, [this].concat(i))), 
                                   r.emitter = d(r.props.value), 
                                   l(r, t);
                        }
                        return s(n, e), 
                        n.prototype.getChildContext = function () {
                            var e;
                            return (e = {})[p] = this.emitter, e;
                        }, 
                        n.prototype.componentWillReceiveProps = function (e) {
                            if (this.props.value !== e.value) {
                                var n = this.props.value, 
                                    r = e.value, 
                                    o = void 0; 
                                (i = n) === (a = r) ? 0 !== i || 1 / i == 1 / a : i != i && a != a ? o = 0 : (o = "function" == typeof t ? t(n, r) : u, 0 != (o |= 0) && this.emitter.set(e.value, o));
                            } var i, a;
                        }, 
                        n.prototype.render = function () {
                            return this.props.children;
                        }, 
                        n;
                    }(r.Component);
                f.childContextTypes = ((n = {})[p] = o.default.object.isRequired, n);
                
                var g = function (t) {
                    function n() {
                        var e, r;
                        c(this, n);
                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) {
                            i[a] = arguments[a];
                        }
                        return e = r = l(this, t.call.apply(t, [this].concat(i))), 
                               r.state = { value: r.getValue() }, 
                               r.onUpdate = function (e, t) {
                                    0 != ((0 | r.observedBits) & t) && r.setState({ value: r.getValue() });
                               }, 
                               l(r, e);
                    }
                    return s(n, t), 
                    n.prototype.render = function () {
                        return null; // Placeholder for rendering logic
                    }, 
                    n;
                }(r.Component);
            };
        },

        // Additional module patterns would go here.

    };

})(); 

class MyComponent extends r.Component {
    componentWillReceiveProps(e) {
        var t = e.observedBits;
        this.observedBits = null == t ? u : t;
    }

    componentDidMount() {
        if (this.context[p]) {
            this.context[p].on(this.onUpdate);
        }
        
        var e = this.props.observedBits;
        this.observedBits = null == e ? u : e;
    }

    componentWillUnmount() {
        if (this.context[p]) {
            this.context[p].off(this.onUpdate);
        }
    }

    getValue() {
        return this.context[p] ? this.context[p].get() : e;
    }

    render() {
        return (
            (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value)
        );
    }
}

g.contextTypes = ((a = {})[p] = o.default.object.isRequired, a);
return { Provider: f, Consumer: g };


switch (a) {
    case "P":
        n = t.dateTime({ width: "short" });
        break;
    case "PP":
        n = t.dateTime({ width: "medium" });
        break;
    case "PPP":
        n = t.dateTime({ width: "long" });
        break;
    default:
        n = t.dateTime({ width: "full" });
}

return n.replace("{{date}}", r(a, t)).replace("{{time}}", o(c, t));

},4262: (e, t, n) => {
    "use strict";

    function r(e) {
        var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(),
            e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        t.setUTCFullYear(e.getFullYear());
        return e.getTime() - t.getTime();
    }
    n.d(t, { Z: () => r });
},

9702: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => s });
    var r = n(9013),
        o = n(6979),
        i = n(7032),
        a = n(3882);

    function c(e) {
        (0, a.Z)(1, arguments);
        var t = (0, i.Z)(e),
            n = new Date(0);
        n.setUTCFullYear(t, 0, 4);
        n.setUTCHours(0, 0, 0, 0);
        var r = (0, o.Z)(n);
        return r;
    }

    var l = 6048e5;

    function s(e) {
        (0, a.Z)(1, arguments);
        var t = (0, r.default)(e),
            n = (0, o.Z)(t).getTime() - c(t).getTime();
        return Math.round(n / l) + 1;
    }
},

7032: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => a });
    var r = n(9013),
        o = n(3882),
        i = n(6979);

    function a(e) {
        (0, o.Z)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getUTCFullYear(),
            a = new Date(0);
        a.setUTCFullYear(n + 1, 0, 4);
        a.setUTCHours(0, 0, 0, 0);
        var c = (0, i.Z)(a),
            l = new Date(0);
        l.setUTCFullYear(n, 0, 4);
        l.setUTCHours(0, 0, 0, 0);
        var s = (0, i.Z)(l);
        return t.getTime() >= c.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
    }
},

3324: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => u });
    var r = n(9013),
        o = n(9025),
        i = n(7651),
        a = n(3882),
        c = n(3946);

    function l(e, t) {
        (0, a.Z)(1, arguments);
        var n = t || {},
            r = n.locale,
            l = r && r.options && r.options.firstWeekContainsDate,
            s = null == l ? 1 : (0, c.Z)(l),
            u = null == n.firstWeekContainsDate ? s : (0, c.Z)(n.firstWeekContainsDate),
            d = (0, i.Z)(e, t),
            p = new Date(0);
        p.setUTCFullYear(d, 0, u);
        p.setUTCHours(0, 0, 0, 0);
        var f = (0, o.Z)(p, t);
        return f;
    }

    var s = 6048e5;

    function u(e, t) {
        (0, a.Z)(1, arguments);
        var n = (0, r.default)(e),
            i = (0, o.Z)(n, t).getTime() - l(n, t).getTime();
        return Math.round(i / s) + 1;
    }
},

7651: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => c });
    var r = n(9013),
        o = n(3882),
        i = n(9025),
        a = n(3946);

    function c(e, t) {
        (0, o.Z)(1, arguments);
        var n = (0, r.default)(e),
            c = n.getUTCFullYear(),
            l = t || {},
            s = l.locale,
            u = s && s.options && s.options.firstWeekContainsDate,
            d = null == u ? 1 : (0, a.Z)(u),
            p = null == l.firstWeekContainsDate ? d : (0, a.Z)(l.firstWeekContainsDate);
        if (!(p >= 1 && p <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var f = new Date(0);
        // Further code continues...
f.setUTCFullYear(c + 1, 0, p);
f.setUTCHours(0, 0, 0, 0);
var g = (0, i.Z)(f, t),
    m = new Date(0);
m.setUTCFullYear(c, 0, p);
m.setUTCHours(0, 0, 0, 0);
var h = (0, i.Z)(m, t);
return n.getTime() >= g.getTime() ? c + 1
     : n.getTime() >= h.getTime() ? c 
     : c - 1;
},

5267: (e, t, n) => {
    "use strict";
    n.d(t, { Do: () => a, Iu: () => i, qp: () => c });
    var r = ["D", "DD"],
        o = ["YY", "YYYY"];

    function i(e) {
        return -1 !== r.indexOf(e);
    }

    function a(e) {
        return -1 !== o.indexOf(e);
    }

    function c(e, t, n) {
        if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `"
            + t + "` for formatting years to the input `" + n + "`; see: https://git.io/fxCyr");
        if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `"
            + t + "` for formatting years to the input `" + n + "`; see: https://git.io/fxCyr");
        if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `"
            + t + "` for formatting days of the month to the input `" + n + "`; see: https://git.io/fxCyr");
        if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `"
            + t + "` for formatting days of the month to the input `" + n + "`; see: https://git.io/fxCyr");
    }
},

3882: (e, t, n) => {
    "use strict";
    function r(e, t) {
        if (t.length < e) 
            throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
    }
    n.d(t, { Z: () => r });
},

6979: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => i });
    var r = n(9013),
        o = n(3882);

    function i(e) {
        (0, o.Z)(1, arguments);
        var t = 1,
            n = (0, r.default)(e),
            i = n.getUTCDay(),
            a = (i < t ? 7 : 0) + i - t;
        n.setUTCDate(n.getUTCDate() - a);
        n.setUTCHours(0, 0, 0, 0);
        return n;
    }
},

9025: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => a });
    var r = n(9013),
        o = n(3882),
        i = n(3946);

    function a(e, t) {
        (0, o.Z)(1, arguments);
        var n = t || {},
            a = n.locale,
            c = a && a.options && a.options.weekStartsOn,
            l = null == c ? 0 : (0, i.Z)(c),
            s = null == n.weekStartsOn ? l : (0, i.Z)(n.weekStartsOn);
        if (!(s >= 0 && s <= 6)) 
            throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var u = (0, r.default)(e),
            d = u.getUTCDay(),
            p = (d < s ? 7 : 0) + d - s;
        u.setUTCDate(u.getUTCDate() - p);
        u.setUTCHours(0, 0, 0, 0);
        return u;
    }
},

3946: (e, t, n) => {
    "use strict";
    function r(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
    }
    n.d(t, { Z: () => r });
},

7349: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, { default: () => a });
    var r = n(3946),
        o = n(9013),
        i = n(3882);
        
    function a(e) {
        // Implementation...
    }

    // Additional code can continue here...
function a(e, t) {
    (0, i.Z)(2, arguments);
    var n = (0, o.default)(e), 
        a = (0, r.Z)(t);
    return isNaN(a) ? new Date(NaN) : 
           a ? (n.setDate(n.getDate() + a), n) : n;
},

8343: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => c });
    
    var r = n(3946), 
        o = n(1820), 
        i = n(3882),
        a = 36e5;

    function c(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, r.Z)(t);
        return (0, o.Z)(e, n * a);
    }
},

1820: (e, t, n) => {
    "use strict";
    n.d(t, { Z: () => a });
    
    var r = n(3946),
        o = n(9013),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, o.default)(e).getTime(),
            a = (0, r.Z)(t);
        return new Date(n + a);
    }
},

8545: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => a });

    var r = n(3946),
        o = n(1820),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, r.Z)(t);
        return (0, o.Z)(e, 6e4 * n);
    }
},

1640: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => a });

    var r = n(3946),
        o = n(9013),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, o.default)(e), 
            a = (0, r.Z)(t);
        
        if (isNaN(a)) return new Date(NaN);
        if (!a) return n; 
        
        var c = n.getDate(),
            l = new Date(n.getTime());
        
        l.setMonth(n.getMonth() + a + 1, 0);
        var s = l.getDate();
        
        return c >= s ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), c), n);
    }
},

3500: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => a });

    var r = n(3946),
        o = n(7349),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, r.Z)(t),
            a = 7 * n;
        return (0, o.default)(e, a);
    }
},

1593: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => a });

    var r = n(3946),
        o = n(1640),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, r.Z)(t);
        return (0, o.default)(e, 12 * n);
    }
},

2300: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => c });

    var r = n(4262),
        o = n(9119),
        i = n(3882),
        a = 864e5;

    function c(e, t) {
        (0, i.Z)(2, arguments);
        var n = (0, o.default)(e),
            c = (0, o.default)(t),
            l = n.getTime() - (0, r.Z)(n),
            s = c.getTime() - (0, r.Z)(c);
        return Math.round((l - s) / a);
    }
},

4129: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => i });

    var r = n(9013),
        o = n(3882);

    function i(e, t) {
        (0, o.Z)(2, arguments);
        var n = (0, r.default)(e),
            i = (0, r.default)(t),
            a = n.getFullYear() - i.getFullYear(),
            c = n.getMonth() - i.getMonth();
        return 12 * a + c;
    }
},

2724: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => c });

    var r = n(584),
        o = n(4262),
        i = n(3882),
        a = 6048e5;

    function c(e, t, n) {
        (0, i.Z)(2, arguments);
        var c = (0, r.default)(e, n),
            l = (0, r.default)(t, n),
            s = c.getTime() - (0, o.Z)(c),
            u = l.getTime() - (0, o.Z)(l);
        return Math.round((s - u) / a);
    }
},

1857: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => i });

    var r = n(9013),
        o = n(3882);

    function i(e, t) {
        (0, o.Z)(2, arguments);
        var n = (0, r.default)(e),
            i = (0, r.default)(t);
        return n.getFullYear() - i.getFullYear();
    }
},

3894: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => i });

    var r = n(9013),
        o = n(3882);

    function i(e) {
        (0, o.Z)(1, arguments);
        var t = (0, r.default)(e);
        return t.setHours(23, 59, 59, 999), t;
    }
},

4135: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => i });

    var r = n(9013),
        o = n(3882);

    function i(e) {
        (0, o.Z)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getMonth();
        return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
    }
},

7090: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => a });

    var r = n(9013),
        o = n(3946),
        i = n(3882);

    function a(e, t) {
        (0, i.Z)(1, arguments);
        var n = t || {},
            a = n.locale,
            c = a && a.options && a.options.weekStartsOn,
            l = null == c ? 0 : (0, o.Z)(c),
            s = null == n.weekStartsOn ? l : (0, o.Z)(n.weekStartsOn);
        
        if (!(s >= 0 && s <= 6)) 
            throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        
        var u = (0, r.default)(e),
            d = u.getDay(),
            p = 6 + (d < s ? -7 : 0) - (d - s);
        
        u.setDate(u.getDate() + p);
        u.setHours(23, 59, 59, 999);
        return u;
    }
},

9546: (e, t, n) => {
    "use strict";
    n.r(t);
    n.d(t, { default: () => S });

    var r = n(2274),
        o = n(4958),
        i = n(1218),
        a = n(9013),
        c = n(3882),
        l = 864e5;

    // Further implementation code would follow...
    