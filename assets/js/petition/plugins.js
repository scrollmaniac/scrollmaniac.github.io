! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return it.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando,
                s = e.nodeType,
                l = s ? it.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || it.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: it.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? it.cache : e,
                s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !it.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Ot.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
    }

    function v(e) {
        jt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e),
                a = it._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events) it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = N(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Kt.detach()), Zt[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)
            if (t = pn[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[a] = it._data(r, "olddisplay", E(r.nodeName)))) : (i = At(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var r = un.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += it.css(e, n + St[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + St[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + St[o] + "Width", !0, i))) : (a += it.css(e, "padding" + St[o], !0, i), "padding" !== n && (a += it.css(e, "border" + St[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = en(e),
            a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function _() {
        return setTimeout(function() {
            hn = void 0
        }), hn = it.now()
    }

    function q(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = St[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, i, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && At(e),
            m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = it.css(e, "display"), c = "none" === u ? it._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || it.style(e, r)
            } else u = void 0;
        if (it.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}), o && (m.hidden = !h), h ? it(e).show() : d.done(function() {
                it(e).hide()
            }), d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in f) it.style(e, t, f[t])
            });
            for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = bn.length,
            s = it.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = hn || _(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: it.extend({}, t),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); a > o; o++)
            if (r = bn[o].call(u, e, c, u.opts)) return r;
        return it.map(c, M, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, it.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === In;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function W(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function(t, i) {
            n || Jn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== it.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        K = J.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        rt = "1.11.1",
        it = function(e, t) {
            return new it.fn.init(e, t)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return it.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: J.sort,
        splice: J.splice
    }, it.extend = it.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === it.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !it.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && it.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (q && !r) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = P, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = bt.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(lt, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), (s = l[r]) && s[0] === W && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, l),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = g(b, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? tt.call(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return tt.call(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    return !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && T.find.TAG("*", u),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = x)
                        }
                        i && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = x, A = y), m
                };
            return i ? r(a) : a
        }
        var x, w, T, C, N, E, k, S, A, D, j, L, H, _, q, M, O, F, B, P = "sizzle" + -new Date,
            R = e.document,
            W = 0,
            $ = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = "undefined",
            J = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            Z = G.push,
            et = G.slice,
            tt = G.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
            lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ut = new RegExp("^" + rt + "*," + rt + "*"),
            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            ft = new RegExp(st),
            pt = new RegExp("^" + ot + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + at),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            xt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(G = et.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch (Ct) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : R,
                r = n.defaultView;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, _ = n.documentElement, q = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return _.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && q) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && q ? t.getElementsByClassName(e) : void 0
            }, O = [], M = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = vt.test(F = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", st)
            }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = vt.test(_.compareDocumentPosition), B = t || vt.test(_.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === R && B(R, e) ? -1 : t === n || t.ownerDocument === R && B(R, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === R ? -1 : u[i] === R ? 1 : 0
            }, n) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !q || O && O.test(n) || M && M.test(n))) try {
                var r = F.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), u = c[e] || [], p = u[0] === W && u[1], f = u[0] === W && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [W, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === W) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(lt, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === _
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = ht[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e,
                d = !r && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || k(e, d))(r, t, !q, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (it.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = it.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = ht.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
        };
    gt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function(e) {
            var t, n = it(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? it.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return it.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return it.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return it.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return it.sibling(e.firstChild)
        },
        contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function(e, t) {
        it.fn[e] = function(n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g,
        xt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var r = l.length;
                        ! function o(t) {
                            it.each(t, function(t, n) {
                                var r = it.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && it.each(arguments, function(e, n) {
                        for (var r;
                            (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], i = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, it.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", it.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return it.Deferred(function(n) {
                            it.each(t, function(t, o) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? it.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, it.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : it.Deferred(),
                u = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
            }
        }
    }), it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in it(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function() {
            var e, t, n, r;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), it.acceptData = function(e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), it.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                it.data(this, e, t)
            }) : o ? l(o, e, it.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = it._queueHooks(e, t),
                a = function() {
                    it.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = it.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        St = ["Top", "Right", "Bottom", "Left"],
        At = function(e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        },
        Dt = it.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(it(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        jt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Lt = /^(?:input|select|textarea)$/i,
        Ht = /^key/,
        _t = /^(?:mouse|pointer|contextmenu)|click/,
        qt = /^(?:focusinfocus|focusoutblur)$/,
        Mt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof it === Ct || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = it.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = it.event.special[p] || {}, d = it.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Mt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = it.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) it.event.remove(e, p + t[u], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, f = [r || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !qt.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[p] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(r)) {
                    for (l = u.delegateType || p, qt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) {
                    c = r[a], c && (r[a] = null), it.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    it.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                l = (it._data(this, "events") || {})[e.type] || [],
                u = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[it.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = _t.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function() {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return it.event.remove(this, "._change"), !Lt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }
        }
    }), it.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return it().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
                it.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                it.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ft = / jQuery\d+="(?:null|\d+)"/g,
        Bt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
        Pt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        $t = /<tbody/i,
        zt = /<|&#?\w+;/,
        It = /<(?:script|style|link)/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Vt = /^true\/(.*)/,
        Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = m(ht),
        Qt = Gt.appendChild(ht.createElement("div"));
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, it.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Bt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !l && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Wt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[l] || Yt._default, s.innerHTML = c[1] + o.replace(Rt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Pt.test(o) && p.push(t.createTextNode(Pt.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || $t.test(o) ? "<table>" !== c[1] || $t.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }
    }), it.fn.extend({
        text: function(e) {
            return Dt(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t)
            })
        },
        html: function(e) {
            return Dt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Bt.test(e) || !nt.leadingWhitespace && Pt.test(e) || Yt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = it.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(g(s, "script"), b), i = o.length; u > l; l++) r = s, l !== d && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, it.map(o, x), l = 0; i > l; l++) r = o[l], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Kt, Zt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function(e) {
            return e.currentStyle
        }, tn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r, i;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), it.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + kt + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + kt + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t),
                    l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = S(l, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = S(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }
    }), it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && en(e);
                return D(e, n, r ? j(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }
    }), it.cssHooks.marginRight = k(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = D)
    }), it.fn.extend({
        css: function(e, t) {
            return Dt(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = H.prototype.init, it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [O],
        xn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = vn.exec(t),
                    o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(B, {
            tweener: function(e, t) {
                it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), it.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? it.extend({}, e) : {
                complete: n || !n && t || it.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !it.isFunction(t) && t
            };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
            }, r
        }, it.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = it.isEmptyObject(e),
                    o = it.speed(t, n, r),
                    a = function() {
                        var t = B(this, it.extend({}, e), o);
                        (i || it._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = it.timers,
                        a = it._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && it.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = it._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = it.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function(e, t) {
            var n = it.fn[t];
            it.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, i)
            }
        }), it.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            it.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), it.timers = [], it.fx.tick = function() {
            var e, t = it.timers,
                n = 0;
            for (hn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), hn = void 0
        }, it.fx.timer = function(e) {
            it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function() {
            mn || (mn = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function() {
            clearInterval(mn), mn = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function(e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var wn = /\r/g;
    it.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = it.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)
                        if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, Nn = it.expr.attrHandle,
        En = /^(?:checked|selected)$/i,
        kn = nt.getSetAttribute,
        Sn = nt.input;
    it.fn.extend({
        attr: function(e, t) {
            return Dt(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ct ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Sn && kn || !En.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(kn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Sn && kn || !En.test(n) ? e.setAttribute(!kn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Nn[t] || it.find.attr;
        Nn[t] = Sn && kn || !En.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Nn[t], Nn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nn[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Sn && kn || (it.attrHooks.value = {
        set: function(e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }), kn || (Tn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, it.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function(e, t) {
        it.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(e, t) {
            return Dt(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = it.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
        it.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var jn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = it.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln = it.now(),
        Hn = /\?/,
        _n = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = it.trim(t + "");
        return i && !it.trim(i.replace(_n, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var qn, Mn, On = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zn = {},
        In = {},
        Xn = "*/".concat("*");
    try {
        Mn = location.href
    } catch (Un) {
        Mn = ht.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    qn = $n.exec(Mn.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: Pn.test(qn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, it.ajaxSettings), t) : W(it.ajaxSettings, e)
        },
        ajaxPrefilter: P(zn),
        ajaxTransport: P(In),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, d = it.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event,
                h = it.Deferred(),
                m = it.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bn.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Mn) + "").replace(On, "").replace(Wn, qn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (r = $n.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qn[1] && r[2] === qn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qn[3] || ("http:" === qn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), R(zn, d, t, w), 2 === b) return w;
            l = d.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Hn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(o) ? o.replace(Fn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (u = R(In, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), it._evalUrl = function(e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function(e) {
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) {
                it(this).wrapInner(e.call(this, t))
            } : function() {
                var t = it(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e)
    };
    var Vn = /%20/g,
        Jn = /\[\]$/,
        Yn = /\r?\n/g,
        Gn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Vn, "+")
    }, it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Qn.test(this.nodeName) && !Gn.test(e) && (this.checked || !jt.test(e))
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yn, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Kn = 0,
        Zn = {},
        er = it.ajaxSettings.xhr();
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Kn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function(r, i) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || it.expando + "_" + Ln++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var r = dt.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = it.css(e, "position"),
                d = it(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = it.css(e, "top"), l = it.css(e, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, l]) > -1, u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, it.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(r, "marginTop", !0),
                    left: t.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || ir
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(r) {
            return Dt(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = k(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            it.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Dt(this, function(t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function() {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var or = e.jQuery,
        ar = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
    }, typeof t === Ct && (e.jQuery = e.$ = it), it
});
! function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
}(this, function() {
    "use strict";

    function t(t, e) {
        var i, o = document.createElement(t || "div");
        for (i in e) o[i] = e[i];
        return o
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function i(t, e, i, o) {
        var n = ["opacity", e, ~~(100 * t), i, o].join("-"),
            r = .01 + i / o * 100,
            s = Math.max(1 - (1 - t) / e * (100 - r), t),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return p[n] || (u.insertRule("@" + l + "keyframes " + n + "{0%{opacity:" + s + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + s + "}}", u.cssRules.length), p[n] = 1), n
    }

    function o(t, e) {
        var i, o, n = t.style;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < d.length; o++)
            if (i = d[o] + e, void 0 !== n[i]) return i;
        return void 0 !== n[e] ? e : void 0
    }

    function n(t, e) {
        for (var i in e) t.style[o(t, i) || i] = e[i];
        return t
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) void 0 === t[o] && (t[o] = i[o])
        }
        return t
    }

    function s(t, e) {
        return "string" == typeof t ? t : t[e % t.length]
    }

    function a(t) {
        this.opts = r(t || {}, a.defaults, f)
    }

    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }
        u.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function(t, o) {
            function r() {
                return n(i("group", {
                    coordsize: d + " " + d,
                    coordorigin: -c + " " + -c
                }), {
                    width: d,
                    height: d
                })
            }

            function a(t, a, l) {
                e(u, e(n(r(), {
                    rotation: 360 / o.lines * t + "deg",
                    left: ~~a
                }), e(n(i("roundrect", {
                    arcsize: o.corners
                }), {
                    width: c,
                    height: o.width,
                    left: o.radius,
                    top: -o.width >> 1,
                    filter: l
                }), i("fill", {
                    color: s(o.color, t),
                    opacity: o.opacity
                }), i("stroke", {
                    opacity: 0
                }))))
            }
            var l, c = o.length + o.width,
                d = 2 * c,
                p = 2 * -(o.width + o.length) + "px",
                u = n(r(), {
                    position: "absolute",
                    top: p,
                    left: p
                });
            if (o.shadow)
                for (l = 1; l <= o.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= o.lines; l++) a(l);
            return e(t, u)
        }, a.prototype.opacity = function(t, e, i, o) {
            var n = t.firstChild;
            o = o.shadow && o.lines || 0, n && e + o < n.childNodes.length && (n = n.childNodes[e + o], n = n && n.firstChild, n = n && n.firstChild, n && (n.opacity = i))
        }
    }
    var c, d = ["webkit", "Moz", "ms", "O"],
        p = {},
        u = function() {
            var i = t("style", {
                type: "text/css"
            });
            return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
        }(),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            position: "absolute"
        };
    a.defaults = {}, r(a.prototype, {
        spin: function(e) {
            this.stop();
            var i = this,
                o = i.opts,
                r = i.el = n(t(0, {
                    className: o.className
                }), {
                    position: o.position,
                    width: 0,
                    zIndex: o.zIndex
                });
            if (o.radius + o.length + o.width, n(r, {
                    left: o.left,
                    top: o.top
                }), e && e.insertBefore(r, e.firstChild || null), r.setAttribute("role", "progressbar"), i.lines(r, i.opts), !c) {
                var s, a = 0,
                    l = (o.lines - 1) * (1 - o.direction) / 2,
                    d = o.fps,
                    p = d / o.speed,
                    u = (1 - o.opacity) / (p * o.trail / 100),
                    f = p / o.lines;
                ! function h() {
                    a++;
                    for (var t = 0; t < o.lines; t++) s = Math.max(1 - (a + (o.lines - t) * f) % p * u, o.opacity), i.opacity(r, t * o.direction + l, s, o);
                    i.timeout = i.el && setTimeout(h, ~~(1e3 / d))
                }()
            }
            return i
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        },
        lines: function(o, r) {
            function a(e, i) {
                return n(t(), {
                    position: "absolute",
                    width: r.length + r.width + "px",
                    height: r.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / r.lines * d + r.rotate) + "deg) translate(" + r.radius + "px,0)",
                    borderRadius: (r.corners * r.width >> 1) + "px"
                })
            }
            for (var l, d = 0, p = (r.lines - 1) * (1 - r.direction) / 2; d < r.lines; d++) l = n(t(), {
                position: "absolute",
                top: 1 + ~(r.width / 2) + "px",
                transform: r.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: r.opacity,
                animation: c && i(r.opacity, r.trail, p + d * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
            }), r.shadow && e(l, n(a("#000", "0 0 4px #000"), {
                top: "2px"
            })), e(o, e(l, a(s(r.color, d), "0 0 1px rgba(0,0,0,.1)")));
            return o
        },
        opacity: function(t, e, i) {
            e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
        }
    });
    var h = n(t("group"), {
        behavior: "url(#default#VML)"
    });
    return !o(h, "transform") && h.adj ? l() : c = o(h, "animation"), a
});
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        s = window,
        i = function(i, e) {
            var h = "x" === e ? "Width" : "Height",
                l = "scroll" + h,
                o = "client" + h,
                r = document.body;
            return i === s || i === t || i === r ? Math.max(t[l], r[l]) - (s["inner" + h] || Math.max(t[o], r[o])) : i[l] - i["offset" + h]
        },
        e = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.3",
            init: function(t, e, h) {
                return this._wdw = t === s, this._target = t, this._tween = h, "object" != typeof e && (e = {
                    y: e
                }), this._autoKill = e.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, "max" === e.x ? i(t, "x") : e.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, "max" === e.y ? i(t, "y") : e.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    h = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    l = h - this.yPrev,
                    o = e - this.xPrev;
                this._autoKill && (!this.skipX && (o > 7 || -7 > o) && i(this._target, "x") > e && (this.skipX = !0), !this.skipY && (l > 7 || -7 > l) && i(this._target, "y") > h && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? s.scrollTo(this.skipX ? e : this.x, this.skipY ? h : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        h = e.prototype;
    e.max = i, h.getX = function() {
        return this._wdw ? null != s.pageXOffset ? s.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, h.getY = function() {
        return this._wdw ? null != s.pageYOffset ? s.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, h._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), window._gsDefine && window._gsQueue.pop()();
(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = [].slice,
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals.isSelector,
                    o = i._internals.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    l = [];
                r.version = "1.11.7", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, a, o, h, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration;
                    if (t >= c ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === g && (p = this._rawPrevTime, this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > p || p === n) && p !== t && (i = !0, p > n && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || this._rawPrevTime === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && this._rawPrevTime > 0 && this._rawPrevTime !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === g && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = p = !e || t || this._rawPrevTime === t ? t : n)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = g + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : this._time / g < .5 ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), f === this._time && !i && d === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || l)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || l), 0 === g && this._rawPrevTime === n && p !== n && (this._rawPrevTime = 0)))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, h, _, u, p) {
                    h = h || 0;
                    var c, f, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), _.apply(p || this, u || l)
                        };
                    for (o(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s.call(t, 0))), c = t.length, m = 0; c > m; m++) {
                        f = {};
                        for (d in n) f[d] = n[d];
                        f.delay = g, m === c - 1 && _ && (f.onComplete = y), v[m] = new r(t[m], e, f), g += h
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var _ = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(_(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    u = r.getAllTweens = function(e) {
                        return _(t._rootTimeline, e).concat(_(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = u(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, h, l, _, u, p = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s.call(t, 0)), o(t))
                            for (_ = t.length; --_ > -1;) r.killChildTweensOf(t[_], e);
                        else {
                            n = [];
                            for (l in p)
                                for (h = p[l].target.parentNode; h;) h === t && (n = n.concat(p[l].tweens)), h = h.parentNode;
                            for (u = n.length, _ = 0; u > _; _++) e && n[_].totalTime(n[_].totalDuration()), n[_]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = u(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], a(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals.isSelector,
                    a = i._internals.isArray,
                    o = [],
                    h = window._gsDefine.globals,
                    l = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    _ = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || o)
                    },
                    u = o.slice,
                    p = s.prototype = new e;
                return s.version = "1.11.7", p.constructor = s, p.kill()._gc = !1, p.to = function(t, e, s, r) {
                    var n = s.repeat && h.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, p.from = function(t, e, s, r) {
                    return this.add((s.repeat && h.TweenMax || i).from(t, e, s), r)
                }, p.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && h.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, p.staggerTo = function(t, e, r, a, o, h, _, p) {
                    var c, f = new s({
                        onComplete: h,
                        onCompleteParams: _,
                        onCompleteScope: p,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = u.call(t, 0)), a = a || 0, c = 0; c < t.length; c++) r.startAt && (r.startAt = l(r.startAt)), f.to(t[c], e, l(r), c * a);
                    return this.add(f, o)
                }, p.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, p.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, p.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, p.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, p.add = function(r, n, o, h) {
                    var l, _, u, p, c, f;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (o = o || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) a(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === o ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), l += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, p.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && a(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, p._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, p.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, p.insert = p.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, p.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, p.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, p.addPause = function(t, e, i, s) {
                    return this.call(_, ["{self}", e, i, s], this, t)
                }, p.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, p.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, p._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, p.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, p.stop = function() {
                    return this.paused(!0)
                }, p.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, p.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, p.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        p = this._startTime,
                        c = this._timeScale,
                        f = this._paused;
                    if (t >= _ ? (this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = _ + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (h = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== u && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= u)
                            for (s = this._first; s && (a = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || f);)(s._active || s._startTime <= u && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), h && (this._gc || (p === this._startTime || c !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || o)))
                    }
                }, p._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, p.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, p.getTweensOf = function(t, e) {
                    for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                    return n
                }, p._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, p.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, p._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, p.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, p.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, p._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, p.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, p.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, p.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, p.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = [],
                    a = new i(null, null, 1, 0),
                    o = s.prototype = new t;
                return o.constructor = s, o.kill()._gc = !1, s.version = "1.11.7", o.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, o.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, o.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, o.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, o, h = {
                        ease: a,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) h[r] = i[r];
                    return h.time = this._parseTimeOrLabel(t), s = Math.abs(Number(h.time) - this._time) / this._timeScale || .001, o = new e(this, s, h), h.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && s === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || n)
                    }, o
                }, o.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, o.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, o, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        c = this._time,
                        f = this._totalTime,
                        m = this._startTime,
                        d = this._timeScale,
                        g = this._rawPrevTime,
                        v = this._paused,
                        y = this._cycle;
                    if (t >= u ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > g || g === r) && g !== t && this._first && (l = !0, g > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== c || 0 === p && g !== r && (g > 0 || 0 > t && g >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, 0 === p && g >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (l = !0))) : (0 === p && 0 > g && (l = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (_ = p + this._repeatDelay, this._cycle = this._totalTime / _ >> 0, 0 !== this._cycle && this._cycle === this._totalTime / _ && this._cycle--, this._time = this._totalTime - this._cycle * _, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time))), this._cycle !== y && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & y),
                            w = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            x = this._totalTime,
                            b = this._cycle,
                            P = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = y * p, this._cycle < y ? T = !T : this._totalTime += p, this._time = c, this._rawPrevTime = 0 === p ? g - 1e-4 : g, this._cycle = y, this._locked = !0, c = T ? 0 : p, this.render(c, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), w && (c = T ? p + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = S, this._totalTime = x, this._cycle = b, this._rawPrevTime = P
                    }
                    if (!(this._time !== c && this._first || i || l)) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= c)
                        for (s = this._first; s && (o = s._next, !this._paused || v);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    else
                        for (s = this._last; s && (o = s._prev, !this._paused || v);)(s._active || s._startTime <= c && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), h && (this._locked || this._gc || (m === this._startTime || d !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || n)))
                }, o.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, o.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, o.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, o.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, o.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, o.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, o.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, o.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, o.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, o.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, o.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    o = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            c = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, h) {
                        var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, h ? (y = e[l], T = i[l], w = (T + y) * r * .25 / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - (u - _) * r * .5, m = u + (p - u) * r * .5, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = o(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    l = function(t, s, r, a) {
                        var o, h, l, _, u, p, c = [];
                        if (a)
                            for (t = [a].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return c[0] = new n(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new n(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return c[h] = new n(t[h][s], 0, 0, t[h + 1][s]), c
                    },
                    _ = function(t, n, o, _, u, p) {
                        var c, f, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : a, null == n && (n = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                                if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = l(t, f, r[f], p);
                        for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
                        if (!_) {
                            for (c = x.length; --c > -1;)
                                if (r[f])
                                    for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
                        }
                        for (c = x.length, d = o ? 4 : 1; --c > -1;) f = x[c], m = w[f], h(m, n, o, _, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, a, o, h, l, _, u, p, c, f, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < d + 1) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
                            for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], a = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new n(s, r, a, o) : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a);
                            h.length = c
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
                    },
                    c = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, c[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    f = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.2",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                p = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in p) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = c(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                c = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && (this._l2 = _[++r]) <= e;);
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                    for (l = u.length - 1; l > r && (this._s2 = u[++r]) <= e;);
                                    this._s1 = u[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, w, x, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = _, f.cubicToQuadratic = o, f._autoCSS = !0, f.quadraticToCubic = function(t, e, i) {
                    return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, f._cssRegister = function() {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new f;
                                var l, _, u, p = e.values,
                                    c = p.length - 1,
                                    m = [],
                                    d = {};
                                if (0 > c) return o;
                                for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), m[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = m, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.11.7", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var l, _, u, p, c, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    w = /opacity:([^;]*)/,
                    x = /alpha\(opacity *=.+?\)/i,
                    b = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(t, e) {
                        return e.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    M = Math.PI / 180,
                    X = 180 / Math.PI,
                    I = {},
                    N = document,
                    F = N.createElement("div"),
                    L = N.createElement("img"),
                    E = a._internals = {
                        _specialProps: o
                    },
                    z = navigator.userAgent,
                    Y = function() {
                        var t, e = z.indexOf("Android"),
                            i = N.createElement("div");
                        return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3), c = u && Number(z.substr(z.indexOf("Version/") + 8, 1)) < 6, p = -1 !== z.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    U = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    B = function(t) {
                        window.console && console.log(t)
                    },
                    j = "",
                    V = "",
                    q = function(t, e) {
                        e = e || F;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (V = 3 === s ? "ms" : i[s], j = "-" + V.toLowerCase() + "-", V + t) : null
                    },
                    W = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                    Z = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || W(t, null)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = E.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = C.test(i),
                            u = t,
                            p = F.style,
                            c = 0 > s;
                        if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || N.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(F), o = parseFloat(F[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(F), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = o / s * 100), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return c ? -o : o
                    },
                    G = E.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Z(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Z(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    Q = function(t, e) {
                        var i, s, r = {};
                        if (e = e || W(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, k)] = e[i]);
                        return Y || (r.opacity = U(t)), s = Pe(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    H = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : G(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    te = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = K[e],
                            n = r.length;
                        for (i = i || W(t, null); --n > -1;) s -= parseFloat(Z(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Z(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    ee = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    se = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    re = function(t, e, i, s) {
                        var r, n, a, o, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : X) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ne = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ae = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    oe = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
                    },
                    he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ne) he += "|" + h + "\\b";
                he = new RegExp(he + ")", "gi");
                var le = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(he) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, c, f;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (f = t.replace(D, "|").split("|"), c = 0; c < f.length; c++) f[c] = r(f[c]);
                                return f.join(",")
                            }
                            if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], c = p.length, _ > c--)
                                for (; ++c < _;) p[c] = i ? p[(c - 1) / 2 | 0] : a[c];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (n = t.replace(D, "|").split("|"), p = 0; p < n.length; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; ++p < _;) e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    _e = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ue = (E._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pe = (E._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            c = {},
                            f = i._transform,
                            m = I;
                        for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (s.type <= 1 && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ue(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: c,
                            firstMPT: l,
                            pt: _
                        }
                    }, E.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    ce = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, c, f, g, v, y, T, w, x, P, S, R = i.split(", ").join(",").split(" "),
                            k = s.split(", ").join(",").split(" "),
                            C = R.length,
                            A = l !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = R.length), C !== k.length && (R = (n || "").split(" "), C = R.length), a.plugin = h, a.setRatio = _, u = 0; C > u; u++)
                            if (f = R[u], g = k[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(d, ""), A && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || ne[f] || b.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = oe(f), g = oe(g), w = f.length + g.length > 6, w && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[u]).join("transparent")) : (Y || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," : S, !0), w && (f = f.length < 4 ? 1 : f[3], a.appendXtra("", f, (g.length < 4 ? 1 : g[3]) - f, S, !1)));
                        else if (v = f.match(m)) {
                            if (y = g.match(d), !y || y.length !== v.length) return a;
                            for (c = 0, p = 0; p < v.length; p++) P = v[p], x = f.indexOf(P, c), a.appendXtra(f.substr(c, x - c), Number(P), ie(y[p], P), "", A && "px" === f.substr(x + P.length, 2), 0 === p), c = x + P.length;
                            a["xs" + a.l] += f.substr(c)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; u < a.l; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    fe = 9;
                for (h = pe.prototype, h.l = h.pr = 0; --fe > 0;) h["xn" + fe] = 0, h["xs" + fe] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var me = function(t, e) {
                        e = e || {}, this.p = e.prefix ? q(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    de = E._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; s < n.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new me(n[s], e)
                    },
                    ge = function(t) {
                        if (!o[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            de(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (B("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = me.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return ce(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Z(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    de(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ye = q("transform"),
                    Te = j + "transform",
                    we = q("transformOrigin"),
                    xe = null !== q("perspective"),
                    be = E.Transform = function() {
                        this.skewY = 0
                    },
                    Pe = E.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, c, f, m, d, g, v = i ? t._gsTransform || new be : new be,
                            y = v.scaleX < 0,
                            T = 2e-5,
                            w = 1e5,
                            x = 179.99,
                            b = x * M,
                            P = xe ? parseFloat(Z(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (ye ? r = Z(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (l * w + (0 > l ? -.5 : .5) | 0) / w + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                R = n[9],
                                k = n[10],
                                C = n[12],
                                O = n[13],
                                D = n[14];
                            if (v.zOrigin && (D = -v.zOrigin, C = S * D - n[12], O = R * D - n[13], D = k * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var I, N, F, L, E, z, Y, U = n[0],
                                    B = n[1],
                                    j = n[2],
                                    V = n[3],
                                    q = n[4],
                                    W = n[5],
                                    $ = n[6],
                                    G = n[7],
                                    Q = n[11],
                                    H = Math.atan2($, k),
                                    K = -b > H || H > b;
                                v.rotationX = H * X, H && (L = Math.cos(-H), E = Math.sin(-H), I = q * L + S * E, N = W * L + R * E, F = $ * L + k * E, S = q * -E + S * L, R = W * -E + R * L, k = $ * -E + k * L, Q = G * -E + Q * L, q = I, W = N, $ = F), H = Math.atan2(S, U), v.rotationY = H * X, H && (z = -b > H || H > b, L = Math.cos(-H), E = Math.sin(-H), I = U * L - S * E, N = B * L - R * E, F = j * L - k * E, R = B * E + R * L, k = j * E + k * L, Q = V * E + Q * L, U = I, B = N, j = F), H = Math.atan2(B, W), v.rotation = H * X, H && (Y = -b > H || H > b, L = Math.cos(-H), E = Math.sin(-H), U = U * L + q * E, N = B * L + W * E, W = B * -E + W * L, $ = j * -E + $ * L, B = N), Y && K ? v.rotation = v.rotationX = 0 : Y && z ? v.rotation = v.rotationY = 0 : z && K && (v.rotationY = v.rotationX = 0), v.scaleX = (Math.sqrt(U * U + B * B) * w + .5 | 0) / w, v.scaleY = (Math.sqrt(W * W + R * R) * w + .5 | 0) / w, v.scaleZ = (Math.sqrt($ * $ + k * k) * w + .5 | 0) / w, v.skewX = 0, v.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, v.x = C, v.y = O, v.z = D
                            }
                        } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Z(t, "display", e))) {
                            var J = n.length >= 6,
                                te = J ? n[0] : 1,
                                ee = n[1] || 0,
                                ie = n[2] || 0,
                                se = J ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(te * te + ee * ee), u = Math.sqrt(se * se + ie * ie), p = te || ee ? Math.atan2(ee, te) * X : v.rotation || 0, c = ie || se ? Math.atan2(ie, se) * X + p : v.skewX || 0, f = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(c) > 90 && Math.abs(c) < 270 && (y ? (_ *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), d = (p - v.rotation) % 180, g = (c - v.skewX) % 180, (void 0 === v.skewX || f > T || -T > f || m > T || -T > m || d > -x && x > d && d * w | !1 || g > -x && x > g && g * w | !1) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = c), xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) v[o] < T && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    Se = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * M,
                            n = r + s.skewX * M,
                            a = 1e5,
                            o = (Math.cos(r) * s.scaleX * a | 0) / a,
                            h = (Math.sin(r) * s.scaleX * a | 0) / a,
                            l = (Math.sin(n) * -s.scaleY * a | 0) / a,
                            _ = (Math.cos(n) * s.scaleY * a | 0) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var c, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x,
                                b = s.y;
                            if (null != s.ox && (c = (s.oxp ? d * s.ox * .01 : s.ox) - d / 2, m = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, x += c - (c * o + m * h), b += m - (c * l + m * _)), v ? (c = d / 2, m = g / 2, w += ", Dx=" + (c - (c * o + m * h) + x) + ", Dy=" + (m - (c * l + m * _) + b) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, S, R, k = 8 > f ? 1 : -1;
                                for (c = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), fe = 0; 4 > fe; fe++) S = J[fe], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > fe ? -s.ieOffsetX : -s.ieOffsetY : 2 > fe ? c - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - R * (0 === fe || 2 === fe ? 1 : k))) + "px"
                            }
                        }
                    },
                    Re = E.set3DTransformRatio = function() {
                        var t, e, i, s, r, n, a, o, h, l, _, u, c, f, m, d, g, v, y, T, w, x, b, P = this.data,
                            S = this.t.style,
                            R = P.rotation * M,
                            k = P.scaleX,
                            C = P.scaleY,
                            A = P.scaleZ,
                            O = P.perspective;
                        if (p) {
                            var D = 1e-4;
                            D > k && k > -D && (k = A = 2e-5), D > C && C > -D && (C = A = 2e-5), !O || P.z || P.rotationX || P.rotationY || (O = 0)
                        }
                        if (R || P.skewX) v = Math.cos(R), y = Math.sin(R), t = v, r = y, P.skewX && (R -= P.skewX * M, v = Math.cos(R), y = Math.sin(R), "simple" === P.skewType && (T = Math.tan(P.skewX * M), T = Math.sqrt(1 + T * T), v *= T, y *= T)), e = -y, n = v;
                        else {
                            if (!(P.rotationY || P.rotationX || 1 !== A || O)) return void(S[ye] = "translate3d(" + P.x + "px," + P.y + "px," + P.z + "px)" + (1 !== k || 1 !== C ? " scale(" + k + "," + C + ")" : ""));
                            t = n = 1, e = r = 0
                        }
                        _ = 1, i = s = a = o = h = l = u = c = f = 0, m = O ? -1 / O : 0, d = P.zOrigin, g = 1e5, R = P.rotationY * M, R && (v = Math.cos(R), y = Math.sin(R), h = _ * -y, c = m * -y, i = t * y, a = r * y, _ *= v, m *= v, t *= v, r *= v), R = P.rotationX * M, R && (v = Math.cos(R), y = Math.sin(R), T = e * v + i * y, w = n * v + a * y, x = l * v + _ * y, b = f * v + m * y, i = e * -y + i * v, a = n * -y + a * v, _ = l * -y + _ * v, m = f * -y + m * v, e = T, n = w, l = x, f = b), 1 !== A && (i *= A, a *= A, _ *= A, m *= A), 1 !== C && (e *= C, n *= C, l *= C, f *= C), 1 !== k && (t *= k, r *= k, h *= k, c *= k), d && (u -= d, s = i * u, o = a * u, u = _ * u + d), s = (T = (s += P.x) - (s |= 0)) ? (T * g + (0 > T ? -.5 : .5) | 0) / g + s : s, o = (T = (o += P.y) - (o |= 0)) ? (T * g + (0 > T ? -.5 : .5) | 0) / g + o : o, u = (T = (u += P.z) - (u |= 0)) ? (T * g + (0 > T ? -.5 : .5) | 0) / g + u : u, S[ye] = "matrix3d(" + [(t * g | 0) / g, (r * g | 0) / g, (h * g | 0) / g, (c * g | 0) / g, (e * g | 0) / g, (n * g | 0) / g, (l * g | 0) / g, (f * g | 0) / g, (i * g | 0) / g, (a * g | 0) / g, (_ * g | 0) / g, (m * g | 0) / g, s, o, u, O ? 1 + -u / O : 1].join(",") + ")"
                    },
                    ke = E.set2DTransformRatio = function(t) {
                        var e, i, s, r, n, a = this.data,
                            o = this.t,
                            h = o.style;
                        return a.rotationX || a.rotationY || a.z || a.force3D ? (this.setRatio = Re, void Re.call(this, t)) : void(a.rotation || a.skewX ? (e = a.rotation * M, i = e - a.skewX * M, s = 1e5, r = a.scaleX * s, n = a.scaleY * s, h[ye] = "matrix(" + (Math.cos(e) * r | 0) / s + "," + (Math.sin(e) * r | 0) / s + "," + (Math.sin(i) * -n | 0) / s + "," + (Math.cos(i) * n | 0) / s + "," + a.x + "," + a.y + ")") : h[ye] = "matrix(" + a.scaleX + ",0,0," + a.scaleY + "," + a.x + "," + a.y + ")")
                    };
                de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._transform) return n;
                        var l, _, u, p, c, f, m, d = s._transform = Pe(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = ve.length,
                            T = h,
                            w = {};
                        if ("string" == typeof T.transform && ye) u = g.cssText, g[ye] = T.transform, g.display = "block", l = Pe(t, null, !1), g.cssText = u;
                        else if ("object" == typeof T) {
                            if (l = {
                                    scaleX: se(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                                    scaleY: se(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                                    scaleZ: se(T.scaleZ, d.scaleZ),
                                    x: se(T.x, d.x),
                                    y: se(T.y, d.y),
                                    z: se(T.z, d.z),
                                    perspective: se(T.transformPerspective, d.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            l.rotation = re("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), xe && (l.rotationX = re("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = re("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : re(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : re(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (xe && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = ve[y], p = l[i] - d[i], (p > v || -v > p || null != I[i]) && (f = !0, n = new pe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, (p || xe && c && d.zOrigin) && (ye ? (f = !0, i = we, p = (p || Z(t, i, r, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, xe ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = g[i] = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = g[i] = p) : ee(p + "", d)), f && (s._transformType = c || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), de("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), de("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; h < b.length; h++) this.p.indexOf("border") && (b[h] = q(b[h])), u = _ = Z(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = T / m * 100 + "%", _ = w / d * 100 + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = ce(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: le("0px 0px 0px 0px", !1, !0)
                }), de("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, c = "background-position",
                            m = r || W(t, null),
                            d = this.format((m ? f ? m.getPropertyValue(c + "-x") + " " + m.getPropertyValue(c + "-y") : m.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Z(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), L.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: ee
                }), de("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ee
                }), de("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), de("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), de("transformStyle", {
                    prefix: !0
                }), de("backfaceVisibility", {
                    prefix: !0
                }), de("userSelect", {
                    prefix: !0
                }), de("margin", {
                    parser: _e("marginTop,marginRight,marginBottom,marginLeft")
                }), de("padding", {
                    parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), de("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > f ? (h = t.currentStyle, l = 8 > f ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Z(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), de("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), de("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), de("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", r, !1, "0px") + " " + Z(t, "borderTopStyle", r, !1, "solid") + " " + Z(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
                    }
                }), de("borderWidth", {
                    parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), de("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Ce = function(t) {
                    var e, i = this.t,
                        s = i.filter || Z(this.data, "filter"),
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                de("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Z(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Z(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ce), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ae = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Oe = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ae(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                de("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, c, f = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Oe, a.pr = -11, i = !0, a.b = f, _ = Q(t, r), u = t._gsClassPT) {
                            for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = H(t, _, Q(t), h, p), t.className = f, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var De = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n = this.t.style,
                            a = o.transform.parse;
                        if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? we : o[i].p), Ae(n, i);
                        r && (Ae(n, ye), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (de("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = De, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), fe = h.length; fe--;) ge(h[fe]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = W(t, ""), n = this._overwriteProps;
                    var h, p, f, m, d, g, v, y, T, x = t.style;
                    if (_ && "" === x.zIndex && (h = Z(t, "zIndex", r), ("auto" === h || "" === h) && (x.zIndex = 0)), "string" == typeof e && (m = x.cssText, h = Q(t, r), x.cssText = m + ";" + e, h = H(t, h, Q(t)).difs, !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, ye ? u && (_ = !0, "" === x.zIndex && (v = Z(t, "zIndex", r), ("auto" === v || "" === v) && (x.zIndex = 0)), c && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1, f = p; f && f._next;) f = f._next;
                        y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = T && xe ? Re : ye ? ke : Se, y.data = this._transform || Pe(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, f = m; f && f.pr > p.pr;) f = f._next;
                            (p._prev = f ? f._prev : d) ? p._prev._next = p: m = p, (p._next = f) ? f._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, c, f, m, d, g, v = t.style;
                    for (a in e) c = e[a], h = o[a], h ? i = h.parse(t, c, a, this, i, n, e) : (p = Z(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(c) ? (d || (c = oe(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = ce(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (_ = parseFloat(p), f = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), f = "px") : "left" === a || "top" === a ? (_ = G(t, a, r), f = "px") : (_ = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(y, "")) : (u = parseFloat(c), m = d ? c.substr((u + "").length) || "" : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + _ : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && _ && (_ = $(t, a, _, f), "%" === m ? (_ /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (c || c + "" != "NaN" && null != c) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = ce(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Pe(this._target, r, !0)
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Me = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Me(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(Q(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Me(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Me(t, l, u), o.render(i, !0), Me(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.2.0",
                init: function(t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                version: "0.2.0",
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (a / h | 0) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (a / h | 0) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    c = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    f = u("Back", c("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), c("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), c("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) * .5 + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
            }, !0)
    }),
    function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t;
        if (!e.TweenLite) {
            var i, s, r, n, a, o = function(t) {
                    var i, s = t.split("."),
                        r = e;
                    for (i = 0; i < s.length; i++) r[s[i]] = r = r[s[i]] || {};
                    return r
                },
                h = o("com.greensock"),
                l = 1e-10,
                _ = [].slice,
                u = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                c = {},
                f = function(i, s, r, n) {
                    this.sc = c[i] ? c[i].sc : [], c[i] = this, this.gsClass = null, this.func = r;
                    var a = [];
                    this.check = function(h) {
                        for (var l, _, u, p, m = s.length, d = m; --m > -1;)(l = c[s[m]] || new f(s[m], [])).gsClass ? (a[m] = l.gsClass, d--) : h && l.sc.push(this);
                        if (0 === d && r)
                            for (_ = ("com.greensock." + i).split("."), u = _.pop(), p = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                                    return p
                                }) : "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; m < this.sc.length; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, s) {
                    return new f(t, e, i, s)
                },
                d = h._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = e;
            var g = [0, 0, 1, 1],
                v = [],
                y = d("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
                }, !0),
                T = y.map = {},
                w = y.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? d("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], T[n + "." + o] = T[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s, w(new y(null, null, 1, s), r, "easeOut", !0), w(new y(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), w(new y(null, null, 3, s), r, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
            var x = d("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = x.prototype, r.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var o, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && o.pr < r && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== n || a || n.wake()
            }, r.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
            };
            var b = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b;) b = t[i[s] + "RequestAnimationFrame"], P = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
            d("Ticker", function(t, e) {
                var i, s, r, o, h, l = this,
                    _ = S(),
                    p = e !== !1 && b,
                    c = function(t) {
                        R = S(), l.time = (R - _) / 1e3;
                        var e, n = l.time - h;
                        (!i || n > 0 || t === !0) && (l.frame++, h += n + (n >= o ? .004 : o - n), e = !0), t !== !0 && (r = s(c)), e && l.dispatchEvent("tick")
                    };
                x.call(l), l.time = l.frame = 0, l.tick = function() {
                    c(!0)
                }, l.sleep = function() {
                    null != r && (p && P ? P(r) : clearTimeout(r), s = u, r = null, l === n && (a = !1))
                }, l.wake = function() {
                    null !== r && l.sleep(), s = 0 === i ? u : p && b ? b : function(t) {
                        return setTimeout(t, 1e3 * (h - l.time) + 1 | 0)
                    }, l === n && (a = !0), c(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
                }, l.fps(t), setTimeout(function() {
                    p && (!r || l.frame < 5) && l.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var k = d("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Y) {
                    a || n.wake();
                    var i = this.vars.useFrames ? z : Y;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            n = k.ticker = new h.Ticker, r = k.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var C = function() {
                a && S() - R > 2e3 && n.wake(), setTimeout(C, 2e3)
            };
            C(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, r._enabled = function(t, e) {
                return a || n.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (a || n.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || l, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || n.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var A = d("core.SimpleTimeline", function(t) {
                k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = A.prototype = new k, r.constructor = A, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, r.rawTime = function() {
                return a || n.wake(), this._totalTime
            };
            var O = d("TweenLite", function(e, i, s) {
                    if (k.call(this, i, s), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? E[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : E[h], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = U(n, this, !1), 1 === h && this._siblings[r].length > 1 && B(n, this, null, 1, this._siblings[r])) : (n = a[r--] = O.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === h && this._siblings.length > 1 && B(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                D = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                M = function(t, e) {
                    var i, s = {};
                    for (i in t) L[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            r = O.prototype = new k, r.constructor = O, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, O.version = "1.11.7", O.defaultEase = r._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = n, O.autoSleep = !0, O.selector = t.$ || t.jQuery || function(e) {
                return t.$ ? (O.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
            };
            var X = O._internals = {
                    isArray: p,
                    isSelector: D
                },
                I = O._plugins = {},
                N = O._tweenLookup = {},
                F = 0,
                L = X.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                E = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                z = k._rootFramesTimeline = new A,
                Y = k._rootTimeline = new A;
            Y._startTime = n.time, z._startTime = n.frame, Y._active = z._active = !0, k._updateRoot = function() {
                if (Y.render((n.time - Y._startTime) * Y._timeScale, !1, !1), z.render((n.frame - z._startTime) * z._timeScale, !1, !1), !(n.frame % 120)) {
                    var t, e, i;
                    for (i in N) {
                        for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete N[i]
                    }
                    if (i = Y._first, (!i || i._paused) && O.autoSleep && !z._first && 1 === n._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || n.sleep()
                    }
                }
            }, n.addEventListener("tick", k._updateRoot);
            var U = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (N[n || (t._gsTweenID = n = "t" + F++)] || (N[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = N[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return N[n].tweens
                },
                B = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var _, u = e._startTime + l,
                        p = [],
                        c = 0,
                        f = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || j(e, 0, f), 0 === j(o, _, f) && (p[c++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && u - o._startTime <= 2e-10 || (p[c++] = o)));
                    for (n = c; --n > -1;) o = p[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                j = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * l > n - e ? l : (n += t.totalDuration() / t._timeScale / r) > e + l ? 0 : n - e - l
                };
            r._init = function() {
                var t, e, i, s, r = this.vars,
                    n = this._overwrittenProps,
                    a = this._duration,
                    o = r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, r.startAt), o)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (r.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        i = {};
                        for (s in r) L[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = O.to(this.target, 0, i), r.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = h ? h instanceof y ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new y(h, r.easeParams) : T[h] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, n);
                if (e && O._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && M(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], L[n]) _ && (_ instanceof Array || _.push && p(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (I[n] && (h = new I[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && B(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
            }, r.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (a = this._rawPrevTime, this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > a || a === l) && a !== t && (i = !0, a > l && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || this._rawPrevTime === t ? t : l);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && this._rawPrevTime > 0 && this._rawPrevTime !== l) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === h && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !e || t || this._rawPrevTime === t ? t : l)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / h,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === p ? _ *= _ : 2 === p ? _ *= _ * _ : 3 === p ? _ *= _ * _ * _ : 4 === p && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / h ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v), 0 === h && this._rawPrevTime === l && a !== l && (this._rawPrevTime = 0)))
                }
            }, r._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var i, s, r, n, a, o, h, l;
                if ((p(e) || D(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        h = t || a, l = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                        for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, r._enabled = function(t, e) {
                if (a || n.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = U(s[i], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return k.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function(t, e, i) {
                return new O(t, e, i)
            }, O.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new O(t, e, s)
            }, O.delayedCall = function(t, e, i, s, r) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, O.set = function(t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, s, r, n;
                if ((p(t) || D(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(O.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = U(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = O.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var V = d("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
            }, !0);
            if (r = V.prototype, V.version = "1.10.1", V.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, V.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === V.API && (I[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            V.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new V(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, V.activate([a]), a
                }, i = t._gsQueue) {
                for (s = 0; s < i.length; s++) i[s]();
                for (r in c) c[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            a = !1
        }
    }(window);
var buntsteps = {
    Weiss: {
        "dark-menu": !0,
        "step-1": {
            ".max": {
                x: -50,
                ease: "Back.easeOut",
                forceRedrawSafari: !0
            },
            ".box": {
                x: -300,
                autoAlpha: 0,
                ease: "Back.easeOut",
                forceRedrawSafari: !0
            },
            ".schleife": {
                strokeDashoffset: 186,
                delay: 1
            }
        }
    },
    Orange: {
        "step-0": {
            ".highlight": {
                strokeDashoffset: 98,
                delay: 1
            }
        },
        "step-1": {
            ".male": {
                rotation: 130,
                autoAlpha: 0,
                delay: 1,
                forceRedrawSafari: !0
            },
            ".female": {
                rotation: 130,
                autoAlpha: 0,
                forceRedrawSafari: !0
            }
        },
        "step-2": {
            ".male, .female": {
                duration: .2,
                autoAlpha: 0,
                direction: "to"
            },
            ".blood": {
                y: 250,
                x: -450,
                direction: "to"
            }
        }
    },
    Gelb: {
        "step-0": {
            ".happy_mouth": {
                autoAlpha: 0
            },
            ".berlin": {
                y: -20,
                x: 400,
                autoAlpha: 0,
                ease: "Power2.easeInOut",
                forceRedrawSafari: !0
            },
            ".sir": {
                y: -5,
                x: 230,
                autoAlpha: 0,
                ease: "Power2.easeInOut"
            },
            ".lady": {
                y: -5,
                x: -200,
                autoAlpha: 0,
                ease: "Power2.easeInOut"
            },
            ".nature": {
                y: -20,
                x: -400,
                autoAlpha: 0,
                ease: "Power2.easeInOut"
            }
        },
        "step-1": {
            ".forbidden": {
                autoAlpha: 0
            },
            ".forbidden-max-mask": {
                scale: 1.5,
                transformOrigin: "center",
                forceRedraw: !0
            },
            ".stripes": {
                autoAlpha: 0,
                y: 30,
                delay: .5
            },
            ".sad_mouth": {
                autoAlpha: 0,
                delay: .5
            },
            ".happy_mouth": {
                autoAlpha: 1,
                delay: .5
            },
            ".brauen": {
                y: 5,
                autoAlpha: 0,
                delay: 1
            },
            ".braue_left": {
                x: 5,
                rotation: 18,
                transformOrigin: "center",
                delay: .5,
                forceRedrawSafari: !0
            },
            ".braue_right": {
                x: -5,
                rotation: -18,
                transformOrigin: "center",
                delay: .5
            },
            ".berlin": {
                y: 0,
                x: 0,
                autoAlpha: 1,
                ease: "Power2.easeInOut"
            },
            ".sir": {
                y: 0,
                x: 0,
                autoAlpha: 1,
                ease: "Power2.easeInOut"
            },
            ".lady": {
                y: 0,
                x: 0,
                autoAlpha: 1,
                ease: "Power2.easeInOut"
            },
            ".nature": {
                y: 0,
                x: 0,
                autoAlpha: 1,
                ease: "Power2.easeInOut"
            }
        }
    },
    Gruen: {
        "step-1": {
            ".blood_potion": {
                y: 126,
                duration: 2,
                delay: .3,
                direction: "to"
            },
            ".drop_1": {
                y: 270,
                direction: "to",
                ease: "Power3.easeIn"
            },
            ".drop_2": {
                y: 270,
                direction: "to",
                delay: .3,
                ease: "Power3.easeIn"
            },
            ".drop_3": {
                y: 270,
                direction: "to",
                delay: .7,
                ease: "Power3.easeIn"
            },
            ".drop_4": {
                y: 270,
                direction: "to",
                delay: 1.4,
                ease: "Power3.easeIn"
            }
        }
    },
    Koenigsblau: {
        "step-0": {
            ".stift": {
                rotation: -30
            }
        }
    },
    CTA: {
        "dark-menu": !0
    },
    Formular: {
        "dark-menu": !0
    }
};
var ChangeOrgApiUtils = {
        debugMode: !1,
        lastTimestamp: 0,
        proxy: "",
        addParams: function(t, e) {
            if ("string" == typeof t) {
                var i = [],
                    n = t.split("?");
                "string" == typeof e && (e = this.expandRequest(e)), n.length > 1 && (e = this.extend(this.expandRequest(n.pop()), e || {}));
                for (var s in e) i.push(s + "=" + encodeURIComponent(e[s]));
                return t.split("?").shift() + "?" + i.join("&")
            }
        },
        bind: function(t, e) {
            if ("object" != typeof e && (e = [e]), "string" == typeof t && "object" == typeof e)
                for (var i in e) t = e instanceof Array ? t.replace(new RegExp(":[a-zA-Z0-9_]+"), new String(e[i])) : t.replace(new RegExp(":" + i, "g"), new String(e[i]));
            return t
        },
        expandRequest: function(t, e) {
            for (var i, n = t.split("&"), t = {}, s = 0; s < n.length; s++)
                if (n[0] && (i = n[s].split("="), t[i[0]] = decodeURIComponent(i[1]), e)) {
                    var a = document.createElement("input");
                    a.type = "hidden", a.name = i[0], a.value = t[i[0]], e.appendChild(a)
                }
            return t
        },
        extend: function() {
            for (var t = arguments, e = {}, i = 0; i < t.length; i++)
                if (t[i])
                    for (var n in t[i]) e[n] = t[i][n];
            return e
        },
        getKey: function(t, e) {
            t || (t = ""), e || (e = "");
            var i = this.lastTimestamp ? this.lastTimestamp : (new Date).getTime(),
                n = this.lastTimestamp = (new Date).getTime() + 1;
            return t + (Math.floor(Math.random() * (n - i + 1)) + i).toString() + e
        },
        lamda: function() {}
    },
    ChangeOrgApiException = function(t) {
        return {
            name: "ChangeOrgApiException",
            message: t,
            toString: function() {
                return this.name + ": " + this.message
            }
        }
    },
    ChangeOrgApiClient = function(t) {
        if (this._data = {}, this._getDefaults = function() {
                return {
                    api_key: "",
                    secret: ""
                }
            }, this.getApiKey = function() {
                return this._data.api_key
            }, this.getSecret = function() {
                return this._data.secret
            }, this.setApiKey = function(t) {
                return this._data[api_key] = t, this
            }, this.setSecret = function(t) {
                return this._data[t] = t, this
            }, this._data = this._getDefaults(), "object" == typeof t)
            for (var e in t) this._data[e] = t[e]
    },
    ChangeOrgApiConnection = function(t) {
        if (this._api = "https://api.change.org", this._data = {}, this._connection = null, this._params = {}, this._proxy = "", this._getDefaults = function() {
                return {
                    content_type: "application/x-www-form-urlencoded",
                    endpoint: "",
                    method: "GET",
                    onSuccess: ChangeOrgApiUtils.lambda
                }
            }, this._getEndpoint = function(t) {
                var e = [];
                for (var i in this._params) e.push(i + "=" + encodeURIComponent(this._params[i]));
                return e = (e.length ? "?" : "") + e.join("&"), (t ? "" : this._api) + this._data.endpoint + e
            }, this._getEndpointProxied = function(t) {
                return ChangeOrgApiUtils.addParams(this._proxy, {
                    r: this._getEndpoint(),
                    p: t,
                    m: this._data.method,
                    c: this._data.content_type,
                    d: ChangeOrgApiUtils.debugMode ? "1" : "0"
                })
            }, this._getXmlHttpRequest = function(t) {
                var e = new XMLHttpRequest,
                    i = this;
                return e.onreadystatechange = function() {
                    if (i.getIsDone()) {
                        var e = new ChangeOrgApiResponse(i);
                        t.onSuccess.call(null, e)
                    }
                }, e
            }, this._prepareConnection = function() {
                return this._connection = this._getXmlHttpRequest(this._data), this
            }, this.getConnection = function() {
                return this._connection
            }, this.getContentType = function() {
                return this._data.content_type
            }, this.getEndpoint = function(t) {
                return t ? this._getEndpoint(!0) : this._data.endpoint
            }, this.getHasReceivedHeaders = function() {
                return 2 === this._connection.readyState
            }, this.getIsDone = function() {
                return 4 === this._connection.readyState
            }, this.getIsLoading = function() {
                return 3 === this._connection.readyState
            }, this.getIsOpened = function() {
                return 1 === this._connection.readyState
            }, this.getIsUnsent = function() {
                return 0 === this._connection.readyState
            }, this.getMethod = function() {
                return this._data.method
            }, this.getOnSuccess = function() {
                return this._data.onSuccess
            }, this.getParams = function() {
                return this._params
            }, this.getResponse = function() {
                var t = null;
                try {
                    t = JSON.parse(this._connection.responseText)
                } catch (e) {
                    t = null
                }
                return t
            }, this.getReadyState = function() {
                return this._connection.readyState
            }, this.getStatus = function() {
                return this._connection.status
            }, this.send = function(t) {
                if ((!this._connection || this.getIsUnsent()) && this._prepareConnection(), !this.getIsOpened()) {
                    var e = this._getEndpoint();
                    this._proxy && (e = this._getEndpointProxied(t), this._data.method = "GET"), this._connection.open(this._data.method, e, !0)
                }
                return this._connection.setRequestHeader && this._connection.setRequestHeader("Content-type", this._data.content_type), this._connection.send(t), this
            }, this.setApi = function(t) {
                return this._api = t, this
            }, this.setContentType = function(t) {
                return this._data.content_type = t, this
            }, this.setEndpoint = function(t, e) {
                return this._data.endpoint = t, "object" == typeof e && (this._params = e), this
            }, this.setMethod = function(t) {
                return this._data.method = t.toUpperCase(), this
            }, this.setOnSuccess = function(t) {
                return "function" == typeof t && (this._data.onSuccess = t), this
            }, this.setParams = function(t) {
                return this._params = t, this
            }, this._data = this._getDefaults(), "object" == typeof t)
            for (var e in t) "undefined" != typeof this._data[e] && (this._data[e] = t[e]);
        ChangeOrgApiUtils.proxy && (this._proxy = ChangeOrgApiUtils.proxy)
    },
    ChangeOrgApiRequest = function(t) {
        if (this._authKey = null, this._connection = null, this._data = {}, this._useSignature = !0, this._useAuthKeyInSignature = !0, this._getDefaults = function() {
                return {
                    api_key: "",
                    endpoint: "",
                    timestamp: ""
                }
            }, this.addClient = function() {
                return this._data.api_key = this._client.getApiKey(), this
            }, this.addData = function(t) {
                if ("object" == typeof this._data)
                    for (var e in t) "auth_key" == e ? this.setAuthKey(t[e]) : this._data[e] = t[e];
                return this
            }, this.addSignature = function() {
                try {
                    if (!this.getClient().getSecret() && this.getSignatureRequiredFlag()) this._data.server_sign = 1, this._data.include_auth_key = this.getSignatureAuthKeyRequiredFlag() ? 1 : 0, this._data.include_auth_key && (this._data.auth_key = this._authKey);
                    else if ("undefined" == typeof this._data.rsig || !this._data.rsig.length) {
                        var t = [];
                        for (var e in this._data) "rsig" != e && t.push(e + "=" + encodeURIComponent(this._data[e]));
                        this._data.rsig = CryptoJS.SHA256(t.join("&") + this.getClient().getSecret() + (this._useAuthKeyInSignature === !0 ? this._authKey : ""))
                    }
                } catch (i) {}
                return this
            }, this.addTimestamp = function() {
                return this._data.timestamp = this.newTimestamp(), this
            }, this.buildRequest = function() {
                this.addClient(), this.addTimestamp(), this._useSignature === !0 ? this.addSignature() : "undefined" != typeof this._data.rsig && delete this._data.rsig;
                var t = [];
                for (var e in this._data) t.push(e + "=" + encodeURIComponent(this._data[e]));
                return t.join("&")
            }, this.getAuthKey = function() {
                return this._authKey
            }, this.getClient = function() {
                return this._client
            }, this.getConnection = function(t) {
                return this._connection || (this._connection = new ChangeOrgApiConnection(t)), this._connection
            }, this.getData = function(t) {
                return t ? "undefined" != typeof this._data[t] ? this._data[t] : null : this._data
            }, this.getEndpoint = function() {
                return this._data.endpoint
            }, this.getMethod = function() {
                return this.getConnection().getMethod()
            }, this.getSignatureAuthKeyRequiredFlag = function() {
                return this._useAuthKeyInSignature
            }, this.getSignatureRequiredFlag = function() {
                return this._useSignature
            }, this.getTimestamp = function() {
                return this._data.timestamp
            }, this.newTimestamp = function() {
                return (new Date).toISOString().replace(/(\.[0-9]+)/, "")
            }, this.resetConnection = function() {
                return this._connection = null, this
            }, this.removeSignature = function() {
                return "undefined" != typeof this._data.rsig && delete this._data.rsig, this
            }, this.send = function() {
                var t = this.getConnection();
                return t.setEndpoint(this._data.endpoint), this._doFollowup === !0 && this._setFollowupCallback(), this.getConnection().send(this.buildRequest()), this
            }, this.setAuthKey = function(t) {
                return this._authKey = t, this
            }, this.setClient = function(t) {
                if (!(t instanceof ChangeOrgApiClient)) throw new ChangeOrgApiException("Client must be an instance of ChangeOrgApiClient.");
                return this._client = t, this
            }, this.setData = function(t, e) {
                return this._data[t] = e, this
            }, this.setEndpoint = function(t) {
                return this._data.endpoint = t, this
            }, this.setMethod = function(t) {
                return this.getConnection().setMethod(t), this
            }, this.setOnSuccess = function(t) {
                return this.getConnection().setOnSuccess(t), this
            }, this.setSignatureAuthKeyRequiredFlag = function(t) {
                return this._useAuthKeyInSignature = t, this
            }, this.setSignatureRequiredFlag = function(t) {
                return this._useSignature = t, this
            }, this.setTimestamp = function(t) {
                return this._data.timestamp = t, this
            }, this.unsetData = function(t) {
                return "undefined" != typeof this._data[t] && delete this._data[t], this
            }, "undefined" == typeof CryptoJS) throw new ChangeOrgApiException("ChangeOrgApiRequest cannot initialize because the required library CryptoJS was not found.");
        t && this.setClient(t), this._data = this._getDefaults()
    },
    ChangeOrgApiResponse = function(t) {
        this._data = {}, this.getData = function(t) {
            return t ? "undefined" != typeof this._data[t] ? this._data[t] : null : this._data
        }, this.setData = function(t) {
            try {
                if (t instanceof ChangeOrgApiConnection) this._data = t.getResponse();
                else if ("string" == typeof t) this._data = JSON.parse(t);
                else {
                    if ("object" != typeof t) throw new ChangeOrgApiException("Data format not recognized.");
                    this._data = t
                }
            } catch (e) {
                this._data = {}
            }
            return this
        }, this.setData(t)
    },
    ChangeOrgApiPetition = function(t) {
        this._authorization = null, this._callback = null, this._client = null, this._endpoints = ["/v1/petitions/:petition_id/signatures", "/v1/petitions/:petition_id/signatures", "/v1/petitions/:petition_id/signatures/recent", "/v1/petitions/:petition_id/targets", "/v1/petitions/:petition_id/reasons", "/v1/petitions/:petition_id/updates", "/v1/petitions", "/v1/petitions/:petition_id", "/v1/petitions/get_id"], this._getDefaults = function() {
            return {}
        }, this.addSignature = function(t, e) {
            if ("undefined" == typeof t.auth_key) throw new ChangeOrgApiException("An authorization key is required to sign a petition.");
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("POST").addData(t).setEndpoint(this.getEndpoint(0, t));
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getAuthorization = function() {
            return this._authorization || (this._authorization = new ChangeOrgApiPetitionAuthorization(this._client)), this._authorization
        }, this.getClient = function() {
            return this._client
        }, this.getEndpoint = function(t, e) {
            return "undefined" == typeof this._endpoints[t] ? !1 : ChangeOrgApiUtils.bind(this._endpoints[t], e)
        }, this.get = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(7, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getId = function(t, e) {
            "string" == typeof t && (t = {
                petition_url: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(8, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getPetitions = function(t, e) {
            if ("number" == typeof t) return this.getPetition(t, e);
            "string" == typeof t && (t = {
                petition_ids: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(6, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getRecentSignatures = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(2, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.getSignatures = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(1, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getReasons = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(4, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getTargets = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(3, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getUpdates = function(t, e) {
            ("number" == typeof t || "string" == typeof t) && (t = {
                petition_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(5, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.setCallback = function(t) {
            return this._callback = t, this
        }, this.setClient = function(t) {
            if (!(t instanceof ChangeOrgApiClient)) throw new ChangeOrgApiException("Client must be an instance of ChangeOrgApiClient.");
            return this._client = t, this
        }, t && this.setClient(t)
    },
    ChangeOrgApiPetitionAuthorization = function(t) {
        this._authorizationCallback = ChangeOrgApiUtils.lambda, this._client = null, this._connection = null, this._data = {}, this._doFollowup = !1, this._endpoint = "/v1/petitions/:petition_id/auth_keys", this._petition_id = "", this._getAuthorizationCallback = function() {
            return this._doFollowup === !0 ? this._getFollowupCallback(this._authorizationCallback) : this._authorizationCallback
        }, this._getDefaults = function() {
            return {
                callback_endpoint: "",
                requester_email: "",
                source: "",
                source_description: ""
            }
        }, this._getFollowupCallback = function(t) {
            var e = this;
            return function(i) {
                e.setFollowupFlag(!1), "granted" == i.getData("status") && i.getData("auth_key") ? t.call(t, i) : e.authorize(t)
            }
        }, this.authorize = function(t) {
            this.setCallback(t);
            var e = new ChangeOrgApiRequest(this._client);
            return e.addData(this._data).setMethod("POST").setEndpoint(ChangeOrgApiUtils.bind(this._endpoint, this._petition_id)).setSignatureAuthKeyRequiredFlag(!1).setOnSuccess(this._getAuthorizationCallback()), e.send(), this
        }, this.getCallbackEndpoint = function() {
            return this._data.callback_endpoint
        }, this.getClient = function() {
            return this._client
        }, this.getEndpoint = function(t) {
            return ChangeOrgApiUtils.bind(this._endpoint, t)
        }, this.getFollowupFlag = function() {
            return this._doFollowup
        }, this.getRequesterEmail = function() {
            return this._data.requester_email
        }, this.getSource = function() {
            return this._data.source
        }, this.getSourceDescription = function() {
            return this._data.source_description
        }, this.setCallback = function(t) {
            return "function" == typeof t && (this._authorizationCallback = t), this
        }, this.setCallbackEndpoint = function(t) {
            return this._data.callback_endpoint = t, this
        }, this.setClient = function(t) {
            if (!(t instanceof ChangeOrgApiClient)) throw new ChangeOrgApiException("Client must be an instance of ChangeOrgApiClient.");
            return this._client = t, this
        }, this.setFollowupFlag = function(t) {
            return this._doFollowup = t, this
        }, this.setPetitionId = function(t) {
            return this._petition_id = t, this
        }, this.setRequesterEmail = function(t) {
            return this._data.requester_email = t, this
        }, this.setSource = function(t) {
            return this._data.source = t, this
        }, this.setSourceDescription = function(t) {
            return this._data.source_description = t, this
        }, this._data = this._getDefaults(), t && this.setClient(t)
    },
    ChangeOrgApiOrganization = function(t) {
        this._callback = null, this._client = null, this._endpoints = ["/v1/organizations/:organization_id", "/v1/organizations/:organization_id/petitions", "/v1/organizations/get_id"], this._getDefaults = function() {
            return {}
        }, this.getClient = function() {
            return this._client
        }, this.getEndpoint = function(t, e) {
            return "undefined" == typeof this._endpoints[t] ? !1 : ChangeOrgApiUtils.bind(this._endpoints[t], e)
        }, this.get = function(t, e) {
            "number" == typeof t && (t = {
                organization_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(0, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getId = function(t, e) {
            "string" == typeof t && (t = {
                organization_url: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(2, t)).setSignatureRequiredFlag(!1);
            return e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send(), this
        }, this.getPetitions = function(t, e) {
            "number" == typeof t && (t = {
                organization_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(1, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.setCallback = function(t) {
            return this._callback = t, this
        }, this.setClient = function(t) {
            if (!(t instanceof ChangeOrgApiClient)) throw new ChangeOrgApiException("Client must be an instance of ChangeOrgApiClient.");
            return this._client = t, this
        }, t && this.setClient(t)
    },
    ChangeOrgApiUser = function(t) {
        this._callback = null, this._client = null, this._endpoints = ["/v1/users/:user_id", "/v1/users/:user_id/petitions", "/v1/users/:user_id/signatures/petitions", "/v1/users/get_id"], this._getDefaults = function() {
            return {}
        }, this.getClient = function() {
            return this._client
        }, this.getEndpoint = function(t, e) {
            return "undefined" == typeof this._endpoints[t] ? !1 : ChangeOrgApiUtils.bind(this._endpoints[t], e)
        }, this.get = function(t, e) {
            "number" == typeof t && (t = {
                user_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(0, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.getId = function(t, e) {
            "string" == typeof t && (t = {
                user_url: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(3, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.getPetitions = function(t, e) {
            "number" == typeof t && (t = {
                user_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(1, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.getSignedPetitions = function(t, e) {
            "number" == typeof t && (t = {
                user_id: t
            });
            var i = new ChangeOrgApiRequest(this.getClient()).setMethod("GET").addData(t).setEndpoint(this.getEndpoint(2, t)).setSignatureRequiredFlag(!1);
            e ? i.setOnSuccess(e) : this._callback && i.setOnSuccess(this._callback), i.send()
        }, this.setCallback = function(t) {
            return this._callback = t, this
        }, this.setClient = function(t) {
            if (!(t instanceof ChangeOrgApiClient)) throw new ChangeOrgApiException("Client must be an instance of ChangeOrgApiClient.");
            return this._client = t, this
        }, t && this.setClient(t)
    };
var countries = {
    en: {
        AA: "Arabic Area",
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AN: "Netherlands Antilles",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AZ: "Azerbaijan",
        BA: "Bosnia/Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivia",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BU: "Burma",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos (Keeling) Islands",
        CD: "Congo, The Democratic Republi",
        CF: "Central African Republic",
        CH: "Switzerland",
        CI: "Ivory Coast",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon, United Republic of",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cape Verde",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands (Malvinas)",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia and Sandwich Is",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "China (Hong Kong S.A.R.)",
        HM: "Heard and MacDonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IN: "India",
        IO: "British Indian Ocean Territor",
        IQ: "Iraq",
        IR: "Iran (Islamic Republic of)",
        IS: "Iceland",
        IT: "Italy",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgystan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "Korea, Democratic People s Re",
        KR: "Korea, Republic of",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Lao People s Democratic Repub",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libyan Arab Jamahiriya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldava, Republic of",
        ME: "Montenegro",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "China (Macau S.A.R.)",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NT: "Neutral Zone",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PS: "Palestenian Territories",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen Island",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SP: "Serbia",
        SR: "Suriname",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SY: "Syrian Arab Republic",
        SZ: "Swaziland",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TP: "East Timor",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania, United Republic of",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying",
        US: "United States of America",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Holy See (Vatican City State)",
        VC: "Saint Vincent and the Grenadi",
        VE: "Venezuela",
        VG: "Virgin Islands (British)",
        VI: "Virgin Islands (U.S.)",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna Islands",
        WS: "Samoa",
        YE: "Yemen, Republic of",
        YT: "Mayotte",
        YU: "Yugoslavia",
        ZA: "South Africa",
        ZM: "Zambia",
        ZR: "Zaire",
        ZW: "Zimbabwe"
    },
    de: {
        AA: "Arabien",
        AD: "Andorra",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albanien",
        AM: "Armenien",
        AN: "Netherlands Antilles",
        AO: "Angola",
        AQ: "Antarktis",
        AR: "Argentinien",
        AS: "Amerikanisch-Samoa",
        AT: "Ã–sterreich",
        AU: "Australien",
        AW: "Aruba",
        AZ: "Azerbaijan",
        BA: "Bosnien/Herzegowina",
        BB: "Barbados",
        BD: "Bangladesch",
        BE: "Belgien",
        BF: "Burkina Faso",
        BG: "Bulgarien",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BM: "Bermuda",
        BN: "Brunei Darussalam",
        BO: "Bolivien",
        BR: "Brasilien",
        BS: "Bahamas",
        BT: "Bhutan",
        BU: "Burma",
        BV: "Bouvetinsel",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Kanada",
        CC: "Cocos (Keeling) Islands",
        CF: "Central African Republic",
        CG: "Kongo",
        CH: "Schweiz",
        CI: "ElfenbeinkÃ¼ste",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon, United Republic of",
        CN: "China",
        CO: "Kolumbien",
        CR: "Costa Rica",
        CU: "Kuba",
        CV: "Cape Verde",
        CX: "Christmas Island",
        CY: "Zypern",
        CZ: "Tschechische Republik",
        DE: "Deutschland",
        DJ: "Dschibuti",
        DK: "DÃ¤nemark",
        DM: "Dominica",
        DO: "Dominikanische Republik",
        DZ: "Algerien",
        EC: "Ecuador",
        EE: "Estland",
        EG: "Ã„gypten",
        EH: "Western Sahara",
        ES: "Spanien",
        ET: "Ã„thiopien",
        FI: "Finnland",
        FJ: "Fiji",
        FK: "Falkland Islands (Malvinas)",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "Frankreich",
        GA: "Gabun",
        GB: "Vereinigtes KÃ¶nigreich",
        GD: "Grenada",
        GE: "Georgien",
        GF: "FranzÃ¶sisch-Guyana",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "GrÃ¶nland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Griechenland",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HM: "Heard and MacDonald Islands",
        HN: "Honduras",
        HR: "Kroatien",
        HT: "Haiti",
        HU: "Ungarn",
        ID: "Indonesien",
        IE: "Irland",
        IL: "Israel",
        IN: "Indien",
        IO: "British Indian Ocean Territor",
        IQ: "Irak",
        IR: "Iran (Islamic Republic of)",
        IS: "Island",
        IT: "Italien",
        JM: "Jamaica",
        JO: "Jordanien",
        JP: "Japan",
        KE: "Kenia",
        KG: "Kyrgystan",
        KH: "Cambodia",
        KI: "Kiribati",
        KK: "Kazakhstan",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "Korea, Democratic People s Re",
        KR: "Korea, Republic of",
        KW: "Kuwait",
        KY: "Cayman Islands",
        LA: "Lao People s Democratic Repub",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Litauen",
        LU: "Luxemburg",
        LV: "Lettland",
        LY: "Libyan Arab Jamahiriya",
        MA: "Marokko",
        MC: "Monaco",
        MD: "Moldawien, Republik",
        ME: "Montenegro",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "Makedonien",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolei",
        MO: "Macau",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Niederlande",
        NO: "Norwegen",
        NP: "Nepal",
        NR: "Nauru",
        NT: "Neutral Zone",
        NU: "Niue",
        NZ: "Neuseeland",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "FranzÃ¶sisch-Polynesien",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Polen",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "Reunion",
        RO: "RumÃ¤nien",
        RU: "RuÃŸland",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Schweden",
        SG: "Singapore",
        SH: "Saint Helena",
        SI: "Slowenien",
        SJ: "Svalbard and Jan Mayen Island",
        SK: "Slovakei",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SQ: "Serbien",
        SR: "Surinam",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SY: "Syrian Arab Republic",
        SZ: "Swaziland",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TM: "Turkemistan",
        TN: "Tunesien",
        TO: "Tonga",
        TP: "East Timor",
        TR: "TÃ¼rkei",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan, Province of China",
        TZ: "Tanzania, United Republic of",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "United States Minor Outlying",
        US: "Vereinigte Staaten von Amerik",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Vatikanstadt",
        VC: "Saint Vincent and the Grenadi",
        VE: "Venezuela",
        VG: "Virgin Islands (British)",
        VI: "Virgin Islands (U.S.)",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna Islands",
        WS: "Western Samoa",
        YE: "Yemen, Republic of",
        YU: "Jugoslawien",
        ZA: "SÃ¼dafrika",
        ZM: "Zambia",
        ZR: "Zaire",
        ZW: "Zimbabwe"
    }
};

function drops(t) {
    this.canvas = t.canvas, this.ctx = this.canvas.get(0).getContext("2d"), this.gravity = .1, this.dropWeight = 1, this.dropSpeed = .3, this.dripSpeed = 1, this.count = t.initial || 0, this.amount = t.amount, this.hidden = t.hidden, this.holder = t.holder, this.resize()
}

function drop(t) {
    this.boundary = t.boundary, this.x = t.x || 0, this.y = t.y || 0, this.weight = t.weight, this.gravity = t.gravity, this.isMoving = void 0 !== t.isMoving ? t.isMoving : !0, this.vy = t.vy || 0, this.size = t.size
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), drops.prototype = {
    drawInitialDrops: function() {
        var t = Math.floor(this.count / this.dropsPerRow),
            i = this.count - t * this.dropsPerRow;
        this.xIndex = Math.round(t / this.dropWidth);
        for (var s = 0; i > s; s++) this.addDrop(!0)
    },
    resize: function() {
        this.canvas.attr("height", this.holder.height()), this.canvas.attr("width", this.holder.width()), this.height = this.canvas.height(), this.isRendering = !1, this.objects = [], this.xIndex = 0;
        var t = this.canvas.width() * this.height,
            i = t / this.amount;
        this.dropHeight = 1 > i ? .5 : Math.round(i), this.dropWidth = 1 > i ? 1 : Math.round(i), this.dropsPerRow = Math.ceil(this.height / this.dropHeight), this.ground = [];
        for (var s = 0; s < this.canvas.width() / this.dropWidth; s++) this.ground[s] = 0;
        this.count && this.drawInitialDrops(), this.hidden || this.render()
    },
    drop: function(t) {
        var i = this,
            s = function() {
                clearInterval(i.autoDrop)
            };
        this.storeLocation(t), this.autoDrop = setInterval(this.addDrop.bind(this), 120 / this.dripSpeed), this.addDrop(), $(document).one("mouseup", s)
    },
    storeLocation: function(t) {
        this.mouseX = t.pageX, this.mouseY = t.pageY
    },
    addDrop: function(t) {
        var i = this.height - this.ground[this.xIndex] * this.dropHeight,
            s = {
                x: this.xIndex * this.dropWidth,
                boundary: i,
                weight: this.dropWeight,
                vy: this.dropSpeed,
                gravity: this.gravity,
                size: this.dropHeight
            };
        t && (s.y = i, s.isMoving = !1), this.objects.push(new drop(s)), this.ground[this.xIndex]++, this.ground[this.xIndex] === this.dropsPerRow && this.xIndex++, this.objects.length > this.dropsPerRow && (this.objects = this.objects.slice(this.dropsPerRow)), this.isRendering || this.hidden || this.render()
    },
    render: function() {
        this.isRendering = !1, this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width(), this.canvas.height()), this.ctx.fillStyle = "red", this.count && this.ctx.fillRect(0, 0, this.xIndex * this.dropWidth, this.height);
        for (var t = 0; t < this.objects.length; t++) {
            var i = this.objects[t];
            i.isMoving && i.render(), this.ctx.fillRect(i.x, i.y - i.size, i.size, i.size), i.isMoving && (this.isRendering = !0)
        }
        if (this.canvas.size() > 1) {
            var s = this;
            this.canvas.each(function(t, i) {
                i.getContext("2d").drawImage(s.canvas.get(0), 0, 0)
            }), this.canvas.get(1)
        }
        this.isRendering && requestAnimFrame(this.render.bind(this))
    }
}, drop.prototype = {
    render: function() {
        this.vy += this.gravity * this.weight, this.y = this.y + this.vy, this.y > this.boundary && (this.isMoving = !1, this.y = this.boundary)
    }
};

function FastClick(t, e) {
    "use strict";

    function i(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var n;
    if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, !FastClick.notNeeded(t)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, s = 0, c = o.length; c > s; s++) r[o[s]] = i(r[o[s]], r);
        deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
            var o = Node.prototype.removeEventListener;
            "click" === e ? o.call(t, e, i.hijacked || i, n) : o.call(t, e, i, n)
        }, t.addEventListener = function(e, i, n) {
            var o = Node.prototype.addEventListener;
            "click" === e ? o.call(t, e, i.hijacked || (i.hijacked = function(t) {
                t.propagationStopped || i(t)
            }), n) : o.call(t, e, i, n)
        }), "function" == typeof t.onclick && (n = t.onclick, t.addEventListener("click", function(t) {
            n(t)
        }, !1), t.onclick = null)
    }
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === t.type || t.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(t.className)
}, FastClick.prototype.needsFocus = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
    }
}, FastClick.prototype.sendClick = function(t, e) {
    "use strict";
    var i, n;
    document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
}, FastClick.prototype.determineEventType = function(t) {
    "use strict";
    return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(t) {
    "use strict";
    var e;
    deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
}, FastClick.prototype.updateScrollParent = function(t) {
    "use strict";
    var e, i;
    if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
        i = t;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                e = i, t.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        } while (i)
    }
    e && (e.fastClickLastScrollTop = e.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(t) {
    "use strict";
    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
}, FastClick.prototype.onTouchStart = function(t) {
    "use strict";
    var e, i, n;
    if (t.targetTouches.length > 1) return !0;
    if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], deviceIsIOS) {
        if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
            this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(t) {
    "use strict";
    var e = t.changedTouches[0],
        i = this.touchBoundary;
    return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i ? !0 : !1
}, FastClick.prototype.onTouchMove = function(t) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(t) {
    "use strict";
    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(t) {
    "use strict";
    var e, i, n, o, r, s = this.targetElement;
    if (!this.trackingClick) return !0;
    if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = t.changedTouches[0], s = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || s, s.fastClickScrollParent = this.targetElement.fastClickScrollParent), n = s.tagName.toLowerCase(), "label" === n) {
        if (e = this.findControl(s)) {
            if (this.focus(s), deviceIsAndroid) return !1;
            s = e
        }
    } else if (this.needsFocus(s)) return t.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(s), this.sendClick(s, t), deviceIsIOS && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
    return deviceIsIOS && !deviceIsIOS4 && (o = s.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(s) || (t.preventDefault(), this.sendClick(s, t)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(t) {
    "use strict";
    return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(t) {
    "use strict";
    var e;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var t = this.layer;
    deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(t) {
    "use strict";
    var e, i, n;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return !0;
        if (e = document.querySelector("meta[name=viewport]")) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
    }
    if (deviceIsBlackBerry10 && (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), n[1] >= 10 && n[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
        if (document.documentElement.scrollWidth <= window.outerWidth) return !0
    }
    return "none" === t.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(t, e) {
    "use strict";
    return new FastClick(t, e)
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
! function(t, i, s) {
    function e(t, s) {
        this.wrapper = "string" == typeof t ? i.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var e in s) this.options[e] = s[e];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function o(t, s, e) {
        var o = i.createElement("div"),
            n = i.createElement("div");
        return e === !0 && (o.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), n.className = "iScrollIndicator", "h" == t ? (e === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (e === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", s || (o.style.pointerEvents = "none"), o.appendChild(n), o
    }

    function n(s, e) {
        this.wrapper = "string" == typeof e.el ? i.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = s, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var o in e) this.options[o] = e[o];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(t, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, "MSPointerDown", this), h.addEvent(t, "MSPointerUp", this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(t, "mouseup", this))), this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ, this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) {
            t.setTimeout(i, 1e3 / 60)
        },
        h = function() {
            function e(t) {
                return r === !1 ? !1 : "" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1)
            }
            var o = {},
                n = i.createElement("div").style,
                r = function() {
                    for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], s = 0, e = i.length; e > s; s++)
                        if (t = i[s] + "ransform", t in n) return i[s].substr(0, i[s].length - 1);
                    return !1
                }();
            o.getTime = Date.now || function() {
                return (new Date).getTime()
            }, o.extend = function(t, i) {
                for (var s in i) t[s] = i[s]
            }, o.addEvent = function(t, i, s, e) {
                t.addEventListener(i, s, !!e)
            }, o.removeEvent = function(t, i, s, e) {
                t.removeEventListener(i, s, !!e)
            }, o.momentum = function(t, i, e, o, n, r) {
                var h, a, l = t - i,
                    c = s.abs(l) / e;
                return r = void 0 === r ? 6e-4 : r, h = t + c * c / (2 * r) * (0 > l ? -1 : 1), a = c / r, o > h ? (h = n ? o - n / 2.5 * (c / 8) : o, l = s.abs(h - t), a = l / c) : h > 0 && (h = n ? n / 2.5 * (c / 8) : 0, l = s.abs(t) + h, a = l / c), {
                    destination: s.round(h),
                    duration: a
                }
            };
            var h = e("transform");
            return o.extend(o, {
                hasTransform: h !== !1,
                hasPerspective: e("perspective") in n,
                hasTouch: "ontouchstart" in t,
                hasPointer: navigator.msPointerEnabled,
                hasTransition: e("transition") in n
            }), o.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion), o.extend(o.style = {}, {
                transform: h,
                transitionTimingFunction: e("transitionTimingFunction"),
                transitionDuration: e("transitionDuration"),
                transitionDelay: e("transitionDelay"),
                transformOrigin: e("transformOrigin")
            }), o.hasClass = function(t, i) {
                var s = new RegExp("(^|\\s)" + i + "(\\s|$)");
                return s.test(t.className)
            }, o.addClass = function(t, i) {
                if (!o.hasClass(t, i)) {
                    var s = t.className.split(" ");
                    s.push(i), t.className = s.join(" ")
                }
            }, o.removeClass = function(t, i) {
                if (o.hasClass(t, i)) {
                    var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                    t.className = t.className.replace(s, " ")
                }
            }, o.offset = function(t) {
                for (var i = -t.offsetLeft, s = -t.offsetTop; t = t.offsetParent;) i -= t.offsetLeft, s -= t.offsetTop;
                return {
                    left: i,
                    top: s
                }
            }, o.preventDefaultException = function(t, i) {
                for (var s in i)
                    if (i[s].test(t[s])) return !0;
                return !1
            }, o.extend(o.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), o.extend(o.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(t) {
                        return s.sqrt(1 - --t * t)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(t) {
                        var i = 4;
                        return (t -= 1) * t * ((i + 1) * t + i) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(t) {
                        var i = .22,
                            e = .4;
                        return 0 === t ? 0 : 1 == t ? 1 : e * s.pow(2, -10 * t) * s.sin(2 * (t - i / 4) * s.PI / i) + 1
                    }
                }
            }), o.tap = function(t, s) {
                var e = i.createEvent("Event");
                e.initEvent(s, !0, !0), e.pageX = t.pageX, e.pageY = t.pageY, t.target.dispatchEvent(e)
            }, o.click = function(t) {
                var s, e = t.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(e.tagName) || (s = i.createEvent("MouseEvents"), s.initMouseEvent("click", !0, !0, t.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), s._constructed = !0, e.dispatchEvent(s))
            }, o
        }();
    e.prototype = {
        version: "5.1.1",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (!(1 != h.eventType[t.type] && 0 !== t.button || !this.enabled || this.initiated && h.eventType[t.type] !== this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var i, e = t.touches ? t.touches[0] : t;
                this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var i, e, o, n, r = t.touches ? t.touches[0] : t,
                    a = r.pageX - this.pointX,
                    l = r.pageY - this.pointY,
                    c = h.getTime();
                if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += l, o = s.abs(this.distX), n = s.abs(this.distY), !(c - this.endTime > 300 && 10 > o && 10 > n)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = o > n + this.options.directionLockThreshold ? "h" : n >= o + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        l = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        a = 0
                    }
                    a = this.hasHorizontalScroll ? a : 0, l = this.hasVerticalScroll ? l : 0, i = this.x + a, e = this.y + l, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (e > 0 || e < this.maxScrollY) && (e = this.options.bounce ? this.y + l / 3 : e > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0, this.directionY = l > 0 ? -1 : 0 > l ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, e), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
                }
            }
        },
        _end: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var i, e, o = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
                    n = s.round(this.x),
                    r = s.round(this.y),
                    a = s.abs(n - this.startX),
                    l = s.abs(r - this.startY),
                    c = 0,
                    p = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(n, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > o && 100 > a && 100 > l) return void this._execEvent("flick");
                    if (this.options.momentum && 300 > o && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: n,
                            duration: 0
                        }, e = this.hasVerticalScroll ? h.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        }, n = i.destination, r = e.destination, c = s.max(i.duration, e.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(n, r);
                        this.currentPage = d, c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - d.x), 1e3), s.min(s.abs(r - d.y), 1e3)), 300), n = d.x, r = d.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing
                    }
                    return n != this.x || r != this.y ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = h.ease.quadratic), void this.scrollTo(n, r, c, p)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var i = this.x,
                s = this.y;
            return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? s = 0 : this.y < this.maxScrollY && (s = this.maxScrollY), i == this.x && s == this.y ? !1 : (this.scrollTo(i, s, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(t, i) {
            this._events[t] || (this._events[t] = []), this._events[t].push(i)
        },
        off: function(t, i) {
            if (this._events[t]) {
                var s = this._events[t].indexOf(i);
                s > -1 && this._events[t].splice(s, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var i = 0,
                    s = this._events[t].length;
                if (s)
                    for (; s > i; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, i, s, e) {
            t = this.x + t, i = this.y + i, s = s || 0, this.scrollTo(t, i, s, e)
        },
        scrollTo: function(t, i, s, e) {
            e = e || h.ease.circular, this.isInTransition = this.options.useTransition && s > 0, !s || this.options.useTransition && e.style ? (this._transitionTimingFunction(e.style), this._transitionTime(s), this._translate(t, i)) : this._animate(t, i, s, e.fn)
        },
        scrollToElement: function(t, i, e, o, n) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var r = h.offset(t);
                r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, e === !0 && (e = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= e || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, n)
            }
        },
        _transitionTime: function(t) {
            if (t = t || 0, this.scrollerStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"), this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t)
        },
        _translate: function(t, i) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = s.round(t), i = s.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)
                for (var e = this.indicators.length; e--;) this.indicators[e].updatePosition()
        },
        _initEvents: function(i) {
            var s = i ? h.removeEvent : h.addEvent,
                e = this.options.bindToWrapper ? this.wrapper : t;
            s(t, "orientationchange", this), s(t, "resize", this), this.options.click && s(this.wrapper, "click", this, !0), this.options.disableMouse || (s(this.wrapper, "mousedown", this), s(e, "mousemove", this), s(e, "mousecancel", this), s(e, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (s(this.wrapper, "MSPointerDown", this), s(e, "MSPointerMove", this), s(e, "MSPointerCancel", this), s(e, "MSPointerUp", this)), h.hasTouch && !this.options.disableTouch && (s(this.wrapper, "touchstart", this), s(e, "touchmove", this), s(e, "touchcancel", this), s(e, "touchend", this)), s(this.scroller, "transitionend", this), s(this.scroller, "webkitTransitionEnd", this), s(this.scroller, "oTransitionEnd", this), s(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var i, s, e = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (e = e[h.style.transform].split(")")[0].split(", "), i = +(e[12] || e[4]), s = +(e[13] || e[5])) : (i = +e.left.replace(/[^-\d.]/g, ""), s = +e.top.replace(/[^-\d.]/g, "")), {
                x: i,
                y: s
            }
        },
        _initIndicators: function() {
            function t(t) {
                for (var i = h.indicators.length; i--;) t.call(h.indicators[i])
            }
            var i, s = this.options.interactiveScrollbars,
                e = "string" != typeof this.options.scrollbars,
                r = [],
                h = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (i = {
                el: o("v", s, this.options.scrollbars),
                interactive: s,
                defaultScrollbars: !0,
                customStyle: e,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(i.el), r.push(i)), this.options.scrollX && (i = {
                el: o("h", s, this.options.scrollbars),
                interactive: s,
                defaultScrollbars: !0,
                customStyle: e,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(i.el), r.push(i))), this.options.indicators && (r = r.concat(this.options.indicators));
            for (var a = r.length; a--;) this.indicators.push(new n(this, r[a]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                t(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                t(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                t(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                t(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault(), t.stopPropagation();
                var i, e, o, n, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                        r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                    }, 400), "deltaX" in t) i = -t.deltaX, e = -t.deltaY;
                else if ("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    i = e = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (i *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = e, e = 0), this.options.snap) return o = this.currentPage.pageX, n = this.currentPage.pageY, i > 0 ? o-- : 0 > i && o++, e > 0 ? n-- : 0 > e && n++, void this.goToPage(o, n);
                o = this.x + s.round(this.hasHorizontalScroll ? i : 0), n = this.y + s.round(this.hasVerticalScroll ? e : 0), o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(o, n, 0), this.options.probeType > 1 && this._execEvent("scroll")
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var t, i, e, o, n, r, h = 0,
                    a = 0,
                    l = 0,
                    c = this.options.snapStepX || this.wrapperWidth,
                    p = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (e = s.round(c / 2), o = s.round(p / 2); l > -this.scrollerWidth;) {
                            for (this.pages[h] = [], t = 0, n = 0; n > -this.scrollerHeight;) this.pages[h][t] = {
                                x: s.max(l, this.maxScrollX),
                                y: s.max(n, this.maxScrollY),
                                width: c,
                                height: p,
                                cx: l - e,
                                cy: n - o
                            }, n -= p, t++;
                            l -= c, h++
                        } else
                            for (r = this.options.snap, t = r.length, i = -1; t > h; h++)(0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) && (a = 0, i++), this.pages[a] || (this.pages[a] = []), l = s.max(-r[h].offsetLeft, this.maxScrollX), n = s.max(-r[h].offsetTop, this.maxScrollY), e = l - s.round(r[h].offsetWidth / 2), o = n - s.round(r[h].offsetHeight / 2), this.pages[a][i] = {
                                x: l,
                                y: n,
                                width: r[h].offsetWidth,
                                height: r[h].offsetHeight,
                                cx: e,
                                cy: o
                            }, l > this.maxScrollX && a++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, i) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var e = 0,
                o = this.pages.length,
                n = 0;
            if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); o > e; e++)
                if (t >= this.pages[e][0].cx) {
                    t = this.pages[e][0].x;
                    break
                }
            for (o = this.pages[e].length; o > n; n++)
                if (i >= this.pages[0][n].cy) {
                    i = this.pages[0][n].y;
                    break
                }
            return e == this.currentPage.pageX && (e += this.directionX, 0 > e ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x), n == this.currentPage.pageY && (n += this.directionY, 0 > n ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), i = this.pages[0][n].y), {
                x: t,
                y: i,
                pageX: e,
                pageY: n
            }
        },
        goToPage: function(t, i, e, o) {
            o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : 0 > i && (i = 0);
            var n = this.pages[t][i].x,
                r = this.pages[t][i].y;
            e = void 0 === e ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : e, this.currentPage = {
                x: n,
                y: r,
                pageX: t,
                pageY: i
            }, this.scrollTo(n, r, e, o)
        },
        next: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s++, s >= this.pages.length && this.hasVerticalScroll && (s = 0, e++), this.goToPage(s, e, t, i)
        },
        prev: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s--, 0 > s && this.hasVerticalScroll && (s = 0, e--), this.goToPage(s, e, t, i)
        },
        _initKeys: function() {
            var i, s = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in s) this.options.keyBindings[i] = this.options.keyBindings[i] || s[i];
            h.addEvent(t, "keydown", this), this.on("destroy", function() {
                h.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var i, e = this.options.snap,
                    o = e ? this.currentPage.pageX : this.x,
                    n = e ? this.currentPage.pageY : this.y,
                    r = h.getTime(),
                    a = this.keyTime || 0,
                    l = .25;
                switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this.isInTransition = !1), this.keyAcceleration = 200 > r - a ? s.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o += e ? 1 : this.wrapperWidth : n += e ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= e ? 1 : this.wrapperWidth : n -= e ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        o = e ? this.pages.length - 1 : this.maxScrollX, n = e ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        o = 0, n = 0;
                        break;
                    case this.options.keyBindings.left:
                        o += e ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        n += e ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        o -= e ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        n -= e ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (e) return void this.goToPage(o, n);
                o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, n, 0), this.keyTime = r
            }
        },
        _animate: function(t, i, s, e) {
            function o() {
                var d, u, m, f = h.getTime();
                return f >= p ? (n.isAnimating = !1, n._translate(t, i), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"))) : (f = (f - c) / s, m = e(f), d = (t - a) * m + a, u = (i - l) * m + l, n._translate(d, u), n.isAnimating && r(o), void(3 == n.options.probeType && n._execEvent("scroll")))
            }
            var n = this,
                a = this.x,
                l = this.y,
                c = h.getTime(),
                p = c + s;
            this.isAnimating = !0, o()
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    t._constructed || (t.preventDefault(), t.stopPropagation())
            }
        }
    }, n.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t)
            }
        },
        destroy: function() {
            this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, "MSPointerDown", this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(t, "touchmove", this), h.removeEvent(t, "MSPointerMove", this), h.removeEvent(t, "mousemove", this), h.removeEvent(t, "touchend", this), h.removeEvent(t, "MSPointerUp", this), h.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(i) {
            var s = i.touches ? i.touches[0] : i;
            i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = s.pageX, this.lastPointY = s.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(t, "touchmove", this), this.options.disablePointer || h.addEvent(t, "MSPointerMove", this), this.options.disableMouse || h.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var i, s, e, o, n = t.touches ? t.touches[0] : t,
                r = h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = n.pageX - this.lastPointX, this.lastPointX = n.pageX, s = n.pageY - this.lastPointY, this.lastPointY = n.pageY, e = this.x + i, o = this.y + s, this._pos(e, o), 1 == this.scroller.options.probeType && r - this.startTime > 300 ? (this.startTime = r, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), t.preventDefault(), t.stopPropagation()
        },
        _end: function(i) {
            if (this.initiated) {
                if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), h.removeEvent(t, "touchmove", this), h.removeEvent(t, "MSPointerMove", this), h.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        o = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                    (this.scroller.x != e.x || this.scroller.y != e.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, o, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0, this.indicatorStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[h.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                i = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = s.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = s.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = s.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
        },
        _pos: function(t, i) {
            0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > i ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? s.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i)
        },
        fade: function(t, i) {
            if (!i || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var s = t ? 250 : 500,
                    e = t ? 0 : 300;
                t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = s + "ms", this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t, this.visible = +t
                }.bind(this, t), e)
            }
        }
    }, e.utils = h, "undefined" != typeof module && module.exports ? module.exports = e : t.IScroll = e
}(window, document, Math);
! function(t) {
    t.extend(t, {
        placeholder: {
            browser_supported: function() {
                return void 0 !== this._supported ? this._supported : this._supported = !!("placeholder" in t('<input type="text">')[0])
            },
            shim: function(e) {
                var o = {
                    color: "#888",
                    cls: "placeholder",
                    selector: "input[placeholder], textarea[placeholder]"
                };
                return t.extend(o, e), !this.browser_supported() && t(o.selector)._placeholder_shim(o)
            }
        }
    }), t.extend(t.fn, {
        _placeholder_shim: function(e) {
            function o(e) {
                var o = t(e).offsetParent().offset(),
                    i = t(e).offset();
                return {
                    top: i.top - o.top,
                    left: i.left - o.left,
                    width: t(e).width()
                }
            }

            function i(e) {
                var n = e.data("target");
                "undefined" != typeof n && (e.css(o(n)), t(window).one("resize", function() {
                    i(e)
                }))
            }
            return this.each(function() {
                var n = t(this);
                if (n.is(":visible")) {
                    if (n.data("placeholder")) {
                        var r = n.data("placeholder");
                        return r.css(o(n)), !0
                    }
                    var s = {};
                    n.is("textarea") || "auto" == n.css("height") || (s = {
                        lineHeight: n.css("height"),
                        whiteSpace: "nowrap"
                    });
                    var a = "border-box" === n.css("box-sizing"),
                        d = t("<label />").text(n.attr("placeholder")).addClass(e.cls).css(t.extend({
                            position: "absolute",
                            display: "inline",
                            "float": "none",
                            overflow: "hidden",
                            textAlign: "left",
                            color: e.color,
                            cursor: "text",
                            paddingTop: a ? "0" : n.css("padding-top"),
                            paddingRight: n.css("padding-right"),
                            paddingBottom: a ? "0" : n.css("padding-bottom"),
                            paddingLeft: n.css("padding-left"),
                            fontSize: n.css("font-size"),
                            fontFamily: n.css("font-family"),
                            fontStyle: n.css("font-style"),
                            fontWeight: n.css("font-weight"),
                            textTransform: n.css("text-transform"),
                            backgroundColor: "transparent",
                            zIndex: 99
                        }, s)).css(o(this)).attr("for", this.id).data("target", n).click(function() {
                            t(this).data("target").is(":disabled") || t(this).data("target").focus()
                        }).insertBefore(this);
                    n.data("placeholder", d).keydown(function() {
                        d.hide()
                    }).blur(function() {
                        d[n.val().length ? "hide" : "show"]()
                    }).triggerHandler("blur"), t(window).one("resize", function() {
                        i(d)
                    })
                }
            })
        }
    })
}(jQuery), jQuery(document).add(window).bind("ready load", function() {
    jQuery.placeholder && jQuery.placeholder.shim()
});
! function(e) {
    ScrollMagic = function(t) {
        "use strict";
        var r = "ScrollMagic",
            i = {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2
            },
            o = this,
            s = e.extend({}, i, t),
            a = [],
            l = !1,
            c = 0,
            g = "PAUSED",
            u = !0,
            d = 0,
            f = !1,
            h = !0,
            p = function() {
                if (e.each(s, function(e) {
                        i.hasOwnProperty(e) || (R(2, 'WARNING: Unknown option "' + e + '"'), delete s[e])
                    }), s.container = e(s.container).first(), 0 === s.container.length) return void R(1, "ERROR creating object ScrollMagic: No valid scroll container supplied");
                u = !e.contains(document, s.container.get(0)), d = s.vertical ? s.container.height() : s.container.width(), s.container.on("scroll resize", m);
                try {
                    TweenLite.ticker.addEventListener("tick", w), f = !0
                } catch (t) {
                    s.container.on("scroll resize", w), f = !1
                }
                R(3, "added new " + r + " controller")
            },
            v = function() {
                return s.vertical ? s.container.scrollTop() : s.container.scrollLeft()
            },
            w = function() {
                if (l && h) {
                    var t = e.isArray(l) ? l : a,
                        r = c;
                    c = o.scrollPos();
                    var n = c - r;
                    g = 0 === n ? "PAUSED" : n > 0 ? "FORWARD" : "REVERSE", o.updateScene(t, !0), 0 === t.length && s.loglevel >= 3 && R(3, "updating 0 Scenes (nothing added to controller)"), l = !1
                }
            },
            m = function(e) {
                "resize" == e.type && (d = s.vertical ? s.container.height() : s.container.width()), l = !0
            },
            R = function(e) {
                if (s.loglevel >= e) {
                    var t = "(" + r + ") ->",
                        i = Array.prototype.splice.call(arguments, 1),
                        o = Function.prototype.bind.call(n, window);
                    i.unshift(e, t), o.apply(window, i)
                }
            };
        return this.addScene = function(t) {
            return e.isArray(t) ? e.each(t, function(e, t) {
                o.addScene(t)
            }) : t.parent() != o ? t.addTo(o) : -1 == e.inArray(a, t) && (a.push(t), e.each(s.globalSceneOptions, function(e, r) {
                t[e] && t[e].call(t, r)
            }), R(3, "added Scene (" + a.length + " total)")), o
        }, this.removeScene = function(t) {
            if (e.isArray(t)) e.each(t, function(e, t) {
                o.removeScene(t)
            });
            else {
                var r = e.inArray(t, a);
                r > -1 && (a.splice(r, 1), t.remove(), R(3, "removed Scene (" + a.length + " total)"))
            }
            return o
        }, this.updateScene = function(t, r) {
            return e.isArray(t) ? e.each(t, function(e, n) {
                R(3, "updating Scene " + (e + 1) + "/" + t.length + " (" + a.length + " total)"), o.updateScene(n, r)
            }) : r ? t.update(!0) : (e.isArray(l) || (l = []), -1 == e.inArray(t, l) && l.push(t)), o
        }, this.update = function(e) {
            return m({
                type: "resize"
            }), e && w(), o
        }, this.scrollPos = function(t) {
            return arguments.length ? (e.isFunction(t) || (t = function() {
                return t
            }), v = t, o) : v.call(o)
        }, this.info = function(e) {
            var t = {
                size: d,
                vertical: s.vertical,
                scrollPos: c,
                scrollDirection: g,
                container: s.container,
                isDocument: u
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void R(1, 'ERROR: option "' + e + '" is not available') : t
        }, this.loglevel = function(e) {
            return arguments.length ? (s.loglevel != e && (s.loglevel = e), o) : s.loglevel
        }, this.enabled = function(e) {
            return arguments.length ? (h != e && (h = !!e, o.updateScene(a, !0)), o) : h
        }, this.destroy = function(e) {
            for (; a.length > 0;) {
                var t = a[a.length - 1];
                t.destroy(e)
            }
            return s.container.off("scroll resize", m), f ? TweenLite.ticker.removeEventListener("tick", w) : s.container.off("scroll resize", w), R(3, "destroyed " + r + " (reset: " + (e ? "true" : "false") + ")"), null
        }, p(), o
    }, ScrollScene = function(t) {
        "use strict";
        var r, o, s, a, l = ["onCenter", "onEnter", "onLeave"],
            c = "ScrollScene",
            g = {
                duration: 0,
                offset: 0,
                triggerElement: null,
                triggerHook: l[0],
                reverse: !0,
                tweenChanges: !1,
                loglevel: 2
            },
            u = this,
            d = e.extend({}, g, t),
            f = "BEFORE",
            h = 0,
            p = {
                start: 0,
                end: 0
            },
            v = !0,
            w = function() {
                R(), u.on("change.internal", function(e) {
                    R(), "loglevel" != e.what && "tweenChanges" != e.what && ("reverse" != e.what && null === d.triggerElement && E(), u.update(), ("DURING" !== f && "duration" == e.what || "AFTER" === f && 0 === d.duration) && S())
                }), u.on("progress.internal", function() {
                    y(), S()
                })
            },
            m = function(e) {
                if (d.loglevel >= e) {
                    var t = "(" + c + ") ->",
                        r = Array.prototype.splice.call(arguments, 1),
                        i = Function.prototype.bind.call(n, window);
                    r.unshift(e, t), i.apply(window, r)
                }
            },
            R = function() {
                if (e.each(d, function(e) {
                        g.hasOwnProperty(e) || (m(2, 'WARNING: Unknown option "' + e + '"'), delete d[e])
                    }), d.duration = parseFloat(d.duration), (!e.isNumeric(d.duration) || d.duration < 0) && (m(1, 'ERROR: Invalid value for option "duration":', d.duration), d.duration = g.duration), d.offset = parseFloat(d.offset), e.isNumeric(d.offset) || (m(1, 'ERROR: Invalid value for option "offset":', d.offset), d.offset = g.offset), null !== d.triggerElement && 0 === e(d.triggerElement).length && (m(1, 'ERROR: Element defined in option "triggerElement" was not found:', d.triggerElement), d.triggerElement = g.triggerElement), e.isNumeric(d.triggerHook) || -1 != e.inArray(d.triggerHook, l) || (m(1, 'ERROR: Invalid value for option "triggerHook": ', d.triggerHook), d.triggerHook = g.triggerHook), !e.isNumeric(d.loglevel) || d.loglevel < 0 || d.loglevel > 3) {
                    var t = d.loglevel;
                    d.loglevel = g.loglevel, m(1, 'ERROR: Invalid value for option "loglevel":', t)
                }
                if (o && r && d.triggerElement && d.loglevel >= 2) {
                    var n = o.getTweensOf(e(d.triggerElement)),
                        i = r.info("vertical");
                    e.each(n, function(e, t) {
                        var r = t.vars.css || t.vars,
                            n = i ? void 0 !== r.top || void 0 !== r.bottom : void 0 !== r.left || void 0 !== r.right;
                        return n ? (m(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                    })
                }
            },
            E = function() {
                p = {
                    start: u.triggerOffset()
                }, r && (p.start -= r.info("size") * u.triggerHook()), p.end = p.start + d.duration
            },
            y = function(e) {
                var t = e >= 0 && 1 >= e ? e : h;
                if (o) {
                    if (-1 === o.repeat())
                        if (("DURING" === f || "AFTER" === f && 0 === d.duration) && o.paused()) o.play();
                        else {
                            if ("DURING" === f || o.paused()) return !1;
                            o.pause()
                        } else {
                        if (t == o.progress()) return !1;
                        0 === d.duration ? "AFTER" == f ? o.play() : o.reverse() : d.tweenChanges ? o.tweenTo(t * o.duration()) : o.progress(t).pause()
                    }
                    return !0
                }
                return !1
            },
            S = function(e) {
                if (s && r) {
                    var t = r.info();
                    if (e || "DURING" !== f && ("AFTER" !== f || 0 !== d.duration)) {
                        var n = {
                                position: a.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = s.css("position") != n.position;
                        a.pushFollowers ? "AFTER" === f && 0 === parseFloat(a.spacer.css("padding-top")) ? o = !0 : "BEFORE" === f && 0 === parseFloat(a.spacer.css("padding-bottom")) && (o = !0) : n[t.vertical ? "top" : "left"] = d.duration * h, s.css(n), o && b()
                    } else {
                        "fixed" != s.css("position") && (s.css("position", "fixed"), b());
                        var l = i(a.spacer, !0),
                            c = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(h * d.duration * 10) / 10;
                        l.top -= parseFloat(a.spacer.css("margin-top")), l[t.vertical ? "top" : "left"] += c, s.css({
                            top: l.top,
                            left: l.left
                        })
                    }
                }
            },
            b = function() {
                if (s && r && a.inFlow) {
                    var t = "AFTER" === f,
                        n = "BEFORE" === f,
                        i = "DURING" === f,
                        o = "fixed" == s.css("position"),
                        l = r.info("vertical"),
                        c = a.spacer.children().first(),
                        g = e.inArray(a.spacer.css("display"), ["block", "flex", "list-item", "table", "-webkit-box"]) > -1,
                        u = {};
                    g ? (u["margin-top"] = n || i && o ? s.css("margin-top") : "auto", u["margin-bottom"] = t || i && o ? s.css("margin-bottom") : "auto") : u["margin-top"] = u["margin-bottom"] = "auto", a.relSize.width ? o ? e(window).width() == a.spacer.parent().width() ? s.css("width", "inherit") : s.css("width", a.spacer.width()) : s.css("width", "100%") : (u["min-width"] = c.outerWidth(!0), u.width = o ? u["min-width"] : "auto"), a.relSize.height ? o ? e(window).height() == a.spacer.parent().height() ? s.css("height", "inherit") : s.css("height", a.spacer.height()) : s.css("height", "100%") : (u["min-height"] = c.outerHeight(!g), u.height = o ? u["min-height"] : "auto"), a.pushFollowers && (u["padding" + (l ? "Top" : "Left")] = d.duration * h, u["padding" + (l ? "Bottom" : "Right")] = d.duration * (1 - h)), a.spacer.css(u)
                }
            },
            F = function() {
                r && s && "DURING" === f && (r.info("isDocument") || S())
            },
            A = function() {
                r && s && ("DURING" === f || "AFTER" === f && 0 === d.duration) && (a.relSize.width && e(window).width() != a.spacer.parent().width() || a.relSize.height && e(window).height() != a.spacer.parent().height()) && b()
            };
        return this.parent = function() {
            return r
        }, this.duration = function(e) {
            return arguments.length ? (d.duration != e && (d.duration = e, u.trigger("change", {
                what: "duration",
                newval: e
            })), u) : d.duration
        }, this.offset = function(e) {
            return arguments.length ? (d.offset != e && (d.offset = e, u.trigger("change", {
                what: "offset",
                newval: e
            })), u) : d.offset
        }, this.triggerElement = function(e) {
            return arguments.length ? (d.triggerElement != e && (d.triggerElement = e, u.trigger("change", {
                what: "triggerElement",
                newval: e
            })), u) : d.triggerElement
        }, this.triggerHook = function(t) {
            if (!arguments.length) {
                var r;
                if (e.isNumeric(d.triggerHook)) r = d.triggerHook;
                else switch (d.triggerHook) {
                    case "onCenter":
                        r = .5;
                        break;
                    case "onLeave":
                        r = 0;
                        break;
                    case "onEnter":
                    default:
                        r = 1
                }
                return r
            }
            return d.triggerHook != t && (d.triggerHook = t, u.trigger("change", {
                what: "triggerHook",
                newval: t
            })), u
        }, this.reverse = function(e) {
            return arguments.length ? (d.reverse != e && (d.reverse = e, u.trigger("change", {
                what: "reverse",
                newval: e
            })), u) : d.reverse
        }, this.tweenChanges = function(e) {
            return arguments.length ? (d.tweenChanges != e && (d.tweenChanges = e, u.trigger("change", {
                what: "tweenChanges",
                newval: e
            })), u) : d.tweenChanges
        }, this.loglevel = function(e) {
            return arguments.length ? (d.loglevel != e && (d.loglevel = e, u.trigger("change", {
                what: "loglevel",
                newval: e
            })), u) : d.loglevel
        }, this.state = function() {
            return f
        }, this.startPosition = function() {
            return this.triggerOffset()
        }, this.triggerOffset = function() {
            var t = d.offset;
            if (r) {
                var n = r.info();
                if (null === d.triggerElement) t += n.size * u.triggerHook();
                else {
                    for (var o = e(d.triggerElement).first(), s = i(r.info("container")); o.parent().data("ScrollMagicPinSpacer");) o = o.parent();
                    var a = i(o);
                    n.isDocument || (s.top -= n.scrollPos, s.left -= n.scrollPos), t += n.vertical ? a.top - s.top : a.left - s.left
                }
            }
            return t
        }, this.scrollOffset = function() {
            return p.start
        }, this.update = function(e) {
            if (r)
                if (e)
                    if (r.enabled() && v) {
                        var t, n = r.info("scrollPos");
                        null !== d.triggerElement && E(), t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, u.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n
                        }), u.progress(t)
                    } else s && "fixed" == s.css("position") && S(!0);
            else r.updateScene(u, !1);
            return u
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = f,
                    i = r ? r.info("scrollDirection") : "PAUSED";
                if (0 >= e && "BEFORE" !== f && (e >= h || d.reverse) ? (h = 0, f = "BEFORE", t = !0) : e > 0 && 1 > e && (e >= h || d.reverse) ? (h = e, f = "DURING", t = !0) : e >= 1 && "AFTER" !== f ? (h = 1, f = "AFTER", t = !0) : "DURING" !== f || d.reverse || S(), t) {
                    var o = {
                            progress: h,
                            state: f,
                            scrollDirection: i
                        },
                        s = f != n,
                        a = "BEFORE" === f && 0 === d.duration;
                    s && (("DURING" === f || 0 === d.duration) && u.trigger("enter", o), ("BEFORE" === f || "BEFORE" === n) && u.trigger(a ? "end" : "start", o)), u.trigger("progress", o), s && (("AFTER" === f || "AFTER" === n) && u.trigger(a ? "start" : "end", o), ("DURING" !== f || 0 === d.duration) && u.trigger("leave", o))
                }
                return u
            }
            return h
        }, this.setTween = function(e) {
            o && u.removeTween();
            try {
                o = new TimelineMax({
                    smoothChildTiming: !0
                }).add(e).pause()
            } catch (t) {
                m(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")
            } finally {
                return e.repeat && -1 === e.repeat() && (o.repeat(-1), o.yoyo(e.yoyo())), R(), m(3, "added tween"), y(), u
            }
        }, this.removeTween = function(e) {
            return o && (e && y(0), o.kill(), o = void 0, m(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), u
        }, this.setPin = function(t, r) {
            var n = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (r = e.extend({}, n, r), t = e(t).first(), 0 === t.length) return m(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), u;
            if ("fixed" == t.css("position")) return m(1, "ERROR: Pin does not work with elements that are positioned 'fixed'."), u;
            if (s) {
                if (s === t) return u;
                u.removePin()
            }
            s = t, s.parent().hide();
            var i = "absolute" != s.css("position"),
                o = s.css(["display", "top", "left", "bottom", "right"]),
                l = s.css(["width", "height"]);
            s.parent().show();
            var c = e("<div></div>").addClass(r.spacerClass).css(o).data("ScrollMagicPinSpacer", !0).css({
                position: i ? "relative" : "absolute",
                "margin-left": "auto",
                "margin-right": "auto",
                "box-sizing": "content-box",
                "-moz-box-sizing": "content-box",
                "-webkit-box-sizing": "content-box"
            });
            return !i && r.pushFollowers && (m(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."), r.pushFollowers = !1), a = {
                spacer: c,
                relSize: {
                    width: "%" === l.width.slice(-1),
                    height: "%" === l.height.slice(-1)
                },
                pushFollowers: r.pushFollowers,
                inFlow: i,
                origStyle: s.attr("style")
            }, a.relSize.width && c.css("width", l.width), a.relSize.height && c.css("height", l.height), s.before(c).appendTo(c).css({
                position: i ? "relative" : "absolute",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), e(window).on("scroll resize", F), m(3, "added pin"), S(), u
        }, this.getPin = function() {
            return s
        }, this.removePin = function(t) {
            return s && (t || !r ? (s.insertBefore(a.spacer).attr("style", a.origStyle), a.spacer.remove()) : "DURING" === f && S(!0), e(window).off("scroll resize", F), s = void 0, m(3, "removed pin (reset: " + (t ? "true" : "false") + ")")), u
        }, this.addTo = function(e) {
            return r != e ? (r && r.removeScene(u), r = e, R(), E(), b(), r.info("container").on("resize", A), m(3, "added " + c + " to controller"), e.addScene(u), u.update(), u) : void 0
        }, this.enabled = function(e) {
            return arguments.length ? (v != e && (v = !!e, u.update(!0)), u) : v
        }, this.remove = function() {
            if (r) {
                r.info("container").off("resize", A);
                var e = r;
                r = void 0, m(3, "removed " + c + " from controller"), e.removeScene(u)
            }
            return u
        }, this.destroy = function(e) {
            return this.removeTween(e), this.removePin(e), this.remove(), this.off("start end enter leave progress change update change.internal progress.internal"), m(3, "destroyed " + c + " (reset: " + (e ? "true" : "false") + ")"), null
        }, this.on = function(t, r) {
            if (e.isFunction(r)) {
                var n = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + c + "_$2").replace(/( |^)(\w+)( |$)/g, "$1$2." + c + "$3");
                e(u).on(n, r)
            } else m(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
            return u
        }, this.off = function(t, r) {
            var n = e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + c + "_$2").replace(/( |^)(\w+)( |$)/g, "$1$2." + c + "$3");
            return e(u).off(n, r), u
        }, this.trigger = function(t, r) {
            m(3, "event fired:", t, "->", r);
            var n = {
                type: e.trim(t).toLowerCase(),
                target: u
            };
            return e.isPlainObject(r) && (n = e.extend({}, r, n)), e(u).trigger(n), u
        }, w(), u
    };
    var t = window.console = window.console || {},
        r = ["error", "warn", "log"];
    t.log || (t.log = e.noop), e.each(r, function(e, r) {
        t[r] || (t[r] = t.log)
    });
    var n = function(e) {
            (e > r.length || 0 >= e) && (e = r.length);
            var n = new Date,
                i = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2) + ":" + ("0" + n.getSeconds()).slice(-2) + ":" + ("00" + n.getMilliseconds()).slice(-3),
                o = r[e - 1],
                s = Array.prototype.splice.call(arguments, 1),
                a = Function.prototype.bind.call(t[o], t);
            s.unshift(i), a.apply(t, s)
        },
        i = function(t, r) {
            var n = {
                    top: 0,
                    left: 0
                },
                i = t[0];
            if (i)
                if (i.getBoundingClientRect) {
                    var o = i.getBoundingClientRect();
                    n.top = o.top, n.left = o.left, r || (n.top += e(document).scrollTop(), n.left += e(document).scrollLeft())
                } else n = t.offset() || n, r && (n.top -= e(document).scrollTop(), n.left -= e(document).scrollLeft());
            return n
        }
}(jQuery);
! function(n) {
    if ("object" == typeof exports) n(require("jquery"), require("spin"));
    else if ("function" == typeof define && define.amd) define(["jquery", "spin"], n);
    else {
        if (!window.Spinner) throw new Error("Spin.js not present");
        n(window.jQuery, window.Spinner)
    }
}(function(n, e) {
    n.fn.spin = function(i, s) {
        return this.each(function() {
            var r = n(this),
                t = r.data();
            t.spinner && (t.spinner.stop(), delete t.spinner), i !== !1 && (i = n.extend({
                color: s || r.css("color")
            }, n.fn.spin.presets[i] || i), t.spinner = new e(i).spin(this))
        })
    }, n.fn.spin.presets = {
        tiny: {
            lines: 8,
            length: 2,
            width: 2,
            radius: 3
        },
        small: {
            lines: 8,
            length: 4,
            width: 3,
            radius: 5
        },
        large: {
            lines: 10,
            length: 8,
            width: 4,
            radius: 8
        }
    }
});
window.Modernizr = function(e, t, n) {
        function r(e) {
            m.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }
        var i, a, c, l = "2.8.2",
            s = {},
            u = !0,
            d = t.documentElement,
            f = "modernizr",
            p = t.createElement(f),
            m = p.style,
            h = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            y = {},
            v = [],
            g = v.slice,
            E = function(e, n, r, o) {
                var i, a, c, l, s = t.createElement("div"),
                    u = t.body,
                    p = u || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : f + (r + 1), s.appendChild(c);
                return i = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), s.id = f, (u ? s : p).innerHTML += i, p.appendChild(s), u || (p.style.background = "", p.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(p)), a = n(s, e), u ? s.parentNode.removeChild(s) : (p.parentNode.removeChild(p), d.style.overflow = l), !!a
            },
            b = {}.hasOwnProperty;
        c = o(b, "undefined") || o(b.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return b.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = g.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(g.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(g.call(arguments)))
                };
            return r
        }), y.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : E(["@media (", h.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        };
        for (var C in y) c(y, C) && (a = C.toLowerCase(), s[a] = y[C](), v.push((s[a] ? "" : "no-") + a));
        return s.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) c(e, r) && s.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), s[e] !== n) return s;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof u && u && (d.className += " " + (t ? "" : "no-") + e), s[e] = t
                }
                return s
            }, r(""), p = i = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = g.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e) {
                    var t = v[e[h]];
                    return t || (t = {}, y++, e[h] = y, v[y] = t), t
                }

                function i(e, n, r) {
                    if (n || (n = t), u) return n.createElement(e);
                    r || (r = o(n));
                    var i;
                    return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || p.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || o(e);
                    for (var i = n.frag.cloneNode(), a = 0, c = r(), l = c.length; l > a; a++) i.createElement(c[a]);
                    return i
                }

                function c(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return g.shivMethods ? i(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = o(e);
                    return g.shivCSS && !s && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
                }
                var s, u, d = "3.7.0",
                    f = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    y = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        s = !0, u = !0
                    }
                }();
                var g = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: i,
                    createDocumentFragment: a
                };
                e.html5 = g, l(t)
            }(this, t), s._version = l, s._prefixes = h, s.testStyles = E, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (u ? " js " + v.join(" ") : ""), s
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == y.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function i() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function c() {
            var e = v.shift();
            g = 1, e ? e.t ? m(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : g = 0
        }

        function l(e, n, r, o, i, l, s) {
            function u(t) {
                if (!p && a(d.readyState) && (E.r = p = 1, !g && c(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && m(function() {
                        C.removeChild(d)
                    }, 50);
                    for (var r in N[n]) N[n].hasOwnProperty(r) && N[n][r].onload()
                }
            }
            var s = s || f.errorTimeout,
                d = t.createElement(e),
                p = 0,
                y = 0,
                E = {
                    t: r,
                    s: n,
                    e: i,
                    a: l,
                    x: s
                };
            1 === N[n] && (y = 1, N[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                u.call(this, y)
            }, v.splice(o, 0, E), "img" != e && (y || 2 === N[n] ? (C.insertBefore(d, b ? null : h), m(u, s)) : N[n].push(d))
        }

        function s(e, t, n, r, i) {
            return g = 0, t = t || "j", o(e) ? l("c" == t ? w : j, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: s,
                i: 0
            }, e
        }
        var d, f, p = t.documentElement,
            m = e.setTimeout,
            h = t.getElementsByTagName("script")[0],
            y = {}.toString,
            v = [],
            g = 0,
            E = "MozAppearance" in p.style,
            b = E && !!t.createRange().compareNode,
            C = b ? p : h.parentNode,
            p = e.opera && "[object Opera]" == y.call(e.opera),
            p = !!t.attachEvent && !p,
            j = E ? "object" : p ? "script" : "img",
            w = p ? "script" : j,
            S = Array.isArray || function(e) {
                return "[object Array]" == y.call(e)
            },
            x = [],
            N = {},
            T = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    o = x.length,
                    i = e.pop(),
                    a = e.length,
                    i = {
                        url: i,
                        origUrl: i,
                        prefixes: e
                    };
                for (n = 0; a > n; n++) r = e[n].split("="), (t = T[r.shift()]) && (i = t(i, r));
                for (n = 0; o > n; n++) i = x[n](i);
                return i
            }

            function a(e, o, i, a, c) {
                var l = t(e),
                    s = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, i, a, c) : (N[l.url] ? l.noexec = !0 : N[l.url] = 1, i.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(o) || r(s)) && i.load(function() {
                    u(), o && o(l.origUrl, c, a), s && s(l.origUrl, c, a), N[l.url] = 2
                })))
            }

            function c(e, t) {
                function n(e, n) {
                    if (e) {
                        if (o(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        }), a(e, d, t, 0, s);
                        else if (Object(e) === e)
                            for (l in c = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--c && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), p()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(f[l])), a(e[l], d, t, l, s))
                    } else !n && p()
                }
                var c, l, s = !!e.test,
                    u = e.load || e.both,
                    d = e.callback || i,
                    f = d,
                    p = e.complete || i;
                n(s ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, s, d = this.yepnope.loader;
            if (o(e)) a(e, 0, d, 0);
            else if (S(e))
                for (l = 0; l < e.length; l++) s = e[l], o(s) ? a(s, 0, d, 0) : S(s) ? f(s) : Object(s) === s && c(s, d);
            else Object(e) === e && c(e, d)
        }, f.addPrefix = function(e, t) {
            T[e] = t
        }, f.addFilter = function(e) {
            x.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, l, s) {
            var u, d, p = t.createElement("script"),
                o = o || f.errorTimeout;
            p.src = e;
            for (d in r) p.setAttribute(d, r[d]);
            n = s ? c : n || i, p.onreadystatechange = p.onload = function() {
                !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
            }, m(function() {
                u || (u = 1, n(1))
            }, o), l ? p.onload() : h.parentNode.insertBefore(p, h)
        }, e.yepnope.injectCss = function(e, n, r, o, a, l) {
            var s, o = t.createElement("link"),
                n = l ? c : n || i;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (s in r) o.setAttribute(s, r[s]);
            a || (h.parentNode.insertBefore(o, h), m(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("pointerevents", function() {
        var e, t = document.createElement("x"),
            n = document.documentElement,
            r = window.getComputedStyle;
        return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = r && "auto" === r(t, "").pointerEvents, n.removeChild(t), !!e) : !1
    });
(function() {
    var t, e, n, i, o, r, s, a, u, d, l, h, p, c, m, f, g, v, w, M, y, b, T, E, x, S, D, L, F, A, C, H, q = [].slice;
    g = '<span class="odometer-value"></span>', c = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + g + "</span></span>", i = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + c + "</span></span>", s = '<span class="odometer-formatting-mark"></span>', n = "(,ddd).dd", a = /^\(?([^)]*)\)?(?:(.)(d+))?$/, u = 30, r = 2e3, t = 20, d = 2, o = .5, l = 1e3 / u, e = 1e3 / t, m = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", x = document.createElement("div").style, f = null != x.transition || null != x.webkitTransition || null != x.mozTransition || null != x.oTransition, T = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, h = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, w = function(t) {
        var e;
        return e = document.createElement("div"), e.innerHTML = t, e.children[0]
    }, b = function(t, e) {
        return t.className = t.className.replace(new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), " ")
    }, v = function(t, e) {
        return b(t, e), t.className += " " + e
    }, S = function(t, e) {
        var n;
        return null != document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0), t.dispatchEvent(n)) : void 0
    }, y = function() {
        var t, e;
        return null != (t = null != (e = window.performance) && "function" == typeof e.now ? e.now() : void 0) ? t : +new Date
    }, E = function(t, e) {
        return null == e && (e = 0), e ? (t *= Math.pow(10, e), t += .5, t = Math.floor(t), t /= Math.pow(10, e)) : Math.round(t)
    }, D = function(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }, M = function(t) {
        return t - E(t)
    }, F = !1, (L = function() {
        var t, e, n, i, o;
        if (!F && null != window.jQuery) {
            for (F = !0, i = ["html", "text"], o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(function(t) {
                var e;
                return e = window.jQuery.fn[t], window.jQuery.fn[t] = function(t) {
                    var n;
                    return null == t || null == (null != (n = this[0]) ? n.odometer : void 0) ? e.apply(this, arguments) : this[0].odometer.update(t)
                }
            }(t));
            return o
        }
    })(), setTimeout(L, 0), p = function() {
        function t(e) {
            var n, i, o, s, a, u, h, p, c, m, f = this;
            if (this.options = e, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, p = t.options;
            for (i in p) s = p[i], null == this.options[i] && (this.options[i] = s);
            null == (a = this.options).duration && (a.duration = r), this.MAX_VALUES = this.options.duration / l / d | 0, this.resetFormat(), this.value = this.cleanValue(null != (c = this.options.value) ? c : ""), this.renderInside(), this.render();
            try {
                for (m = ["innerHTML", "innerText", "textContent"], u = 0, h = m.length; h > u; u++) o = m[u], null != this.el[o] && ! function(t) {
                    return Object.defineProperty(f.el, t, {
                        get: function() {
                            var e;
                            return "innerHTML" === t ? f.inside.outerHTML : null != (e = f.inside.innerText) ? e : f.inside.textContent
                        },
                        set: function(t) {
                            return f.update(t)
                        }
                    })
                }(o)
            } catch (g) {
                n = g, this.watchForMutations()
            }
        }
        return t.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, t.prototype.watchForMutations = function() {
            var t, e = this;
            if (null != h) try {
                return null == this.observer && (this.observer = new h(function() {
                    var t;
                    return t = e.el.innerText, e.renderInside(), e.render(e.value), e.update(t)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (n) {
                t = n
            }
        }, t.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, t.prototype.stopWatchingMutations = function() {
            var t;
            return null != (t = this.observer) ? t.disconnect() : void 0
        }, t.prototype.cleanValue = function(t) {
            var e;
            return "string" == typeof t && (t = t.replace(null != (e = this.format.radix) ? e : ".", "<radix>"), t = t.replace(/[.,]/g, ""), t = t.replace("<radix>", "."), t = parseFloat(t, 10) || 0), E(t, this.format.precision)
        }, t.prototype.bindTransitionEnd = function() {
            var t, e, n, i, o, r, s = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, e = !1, o = m.split(" "), r = [], n = 0, i = o.length; i > n; n++) t = o[n], r.push(this.el.addEventListener(t, function() {
                    return e ? !0 : (e = !0, setTimeout(function() {
                        return s.render(), e = !1, S(s.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return r
            }
        }, t.prototype.resetFormat = function() {
            var t, e, i, o, r, s, u, d;
            if (t = null != (u = this.options.format) ? u : n, t || (t = "d"), i = a.exec(t), !i) throw new Error("Odometer: Unparsable digit format");
            return d = i.slice(1, 4), s = d[0], r = d[1], e = d[2], o = (null != e ? e.length : void 0) || 0, this.format = {
                repeating: s,
                radix: r,
                precision: o
            }
        }, t.prototype.render = function(t) {
            var e, n, i, o, r, s, a;
            for (null == t && (t = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", r = this.options.theme, e = this.el.className.split(" "), o = [], s = 0, a = e.length; a > s; s++) n = e[s], n.length && ((i = /^odometer-theme-(.+)$/.exec(n)) ? r = i[1] : /^odometer(-|$)/.test(n) || o.push(n));
            return o.push("odometer"), f || o.push("odometer-no-transitions"), o.push(r ? "odometer-theme-" + r : "odometer-auto-theme"), this.el.className = o.join(" "), this.ribbons = {}, this.formatDigits(t), this.startWatchingMutations()
        }, t.prototype.formatDigits = function(t) {
            var e, n, i, o, r, s, a, u, d, l;
            if (this.digits = [], this.options.formatFunction)
                for (i = this.options.formatFunction(t), d = i.split("").reverse(), r = 0, a = d.length; a > r; r++) n = d[r], n.match(/0-9/) ? (e = this.renderDigit(), e.querySelector(".odometer-value").innerHTML = n, this.digits.push(e), this.insertDigit(e)) : this.addSpacer(n);
            else
                for (o = !this.format.precision || !M(t) || !1, l = t.toString().split("").reverse(), s = 0, u = l.length; u > s; s++) e = l[s], "." === e && (o = !0), this.addDigit(e, o)
        }, t.prototype.update = function(t) {
            var e, n = this;
            return t = this.cleanValue(t), (e = t - this.value) ? (b(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), e > 0 ? v(this.el, "odometer-animating-up") : v(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(t), this.startWatchingMutations(), setTimeout(function() {
                return n.el.offsetHeight, v(n.el, "odometer-animating")
            }, 0), this.value = t) : void 0
        }, t.prototype.renderDigit = function() {
            return w(i)
        }, t.prototype.insertDigit = function(t, e) {
            return null != e ? this.inside.insertBefore(t, e) : this.inside.children.length ? this.inside.insertBefore(t, this.inside.children[0]) : this.inside.appendChild(t)
        }, t.prototype.addSpacer = function(t, e, n) {
            var i;
            return i = w(s), i.innerHTML = t, n && v(i, n), this.insertDigit(i, e)
        }, t.prototype.addDigit = function(t, e) {
            var n, i, o, r;
            if (null == e && (e = !0), "-" === t) return this.addSpacer(t, null, "odometer-negation-mark");
            if ("." === t) return this.addSpacer(null != (r = this.format.radix) ? r : ".", null, "odometer-radix-mark");
            if (e)
                for (o = !1;;) {
                    if (!this.format.repeating.length) {
                        if (o) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), o = !0
                    }
                    if (n = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === n) break;
                    this.addSpacer(n)
                }
            return i = this.renderDigit(), i.querySelector(".odometer-value").innerHTML = t, this.digits.push(i), this.insertDigit(i)
        }, t.prototype.animate = function(t) {
            return f && "count" !== this.options.animation ? this.animateSlide(t) : this.animateCount(t)
        }, t.prototype.animateCount = function(t) {
            var n, i, o, r, s, a = this;
            return (i = +t - this.value) ? (r = o = y(), n = this.value, (s = function() {
                var u, d, l;
                return y() - r > a.options.duration ? (a.value = t, a.render(), void S(a.el, "odometerdone")) : (u = y() - o, u > e && (o = y(), l = u / a.options.duration, d = i * l, n += d, a.render(Math.round(n))), null != T ? T(s) : setTimeout(s, e))
            })()) : void 0
        }, t.prototype.getDigitCount = function() {
            var t, e, n, i, o, r;
            for (i = 1 <= arguments.length ? q.call(arguments, 0) : [], t = o = 0, r = i.length; r > o; t = ++o) n = i[t], i[t] = Math.abs(n);
            return e = Math.max.apply(Math, i), Math.ceil(Math.log(e + 1) / Math.log(10))
        }, t.prototype.getFractionalDigitCount = function() {
            var t, e, n, i, o, r, s;
            for (o = 1 <= arguments.length ? q.call(arguments, 0) : [], e = /^\-?\d*\.(\d*?)0*$/, t = r = 0, s = o.length; s > r; t = ++r) i = o[t], o[t] = i.toString(), n = e.exec(o[t]), o[t] = null == n ? 0 : n[1].length;
            return Math.max.apply(Math, o)
        }, t.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, t.prototype.animateSlide = function(t) {
            var e, n, i, r, s, a, u, d, l, h, p, c, m, f, g, w, M, y, b, T, E, x, S, L, F, A, C;
            if (w = this.value, d = this.getFractionalDigitCount(w, t), d && (t *= Math.pow(10, d), w *= Math.pow(10, d)), i = t - w) {
                for (this.bindTransitionEnd(), r = this.getDigitCount(w, t), s = [], e = 0, p = b = 0; r >= 0 ? r > b : b > r; p = r >= 0 ? ++b : --b) {
                    if (M = D(w / Math.pow(10, r - p - 1)), u = D(t / Math.pow(10, r - p - 1)), a = u - M, Math.abs(a) > this.MAX_VALUES) {
                        for (h = [], c = a / (this.MAX_VALUES + this.MAX_VALUES * e * o), n = M; a > 0 && u > n || 0 > a && n > u;) h.push(Math.round(n)), n += c;
                        h[h.length - 1] !== u && h.push(u), e++
                    } else h = function() {
                        C = [];
                        for (var t = M; u >= M ? u >= t : t >= u; u >= M ? t++ : t--) C.push(t);
                        return C
                    }.apply(this);
                    for (p = T = 0, x = h.length; x > T; p = ++T) l = h[p], h[p] = Math.abs(l % 10);
                    s.push(h)
                }
                for (this.resetDigits(), A = s.reverse(), p = E = 0, S = A.length; S > E; p = ++E)
                    for (h = A[p], this.digits[p] || this.addDigit(" ", p >= d), null == (y = this.ribbons)[p] && (y[p] = this.digits[p].querySelector(".odometer-ribbon-inner")), this.ribbons[p].innerHTML = "", 0 > i && (h = h.reverse()), m = F = 0, L = h.length; L > F; m = ++F) l = h[m], g = document.createElement("div"), g.className = "odometer-value", g.innerHTML = l, this.ribbons[p].appendChild(g), m === h.length - 1 && v(g, "odometer-last-value"), 0 === m && v(g, "odometer-first-value");
                return 0 > M && this.addDigit("-"), f = this.inside.querySelector(".odometer-radix-mark"), null != f && f.parent.removeChild(f), d ? this.addSpacer(this.format.radix, this.digits[d - 1], "odometer-radix-mark") : void 0
            }
        }, t
    }(), p.options = null != (C = window.odometerOptions) ? C : {}, setTimeout(function() {
        var t, e, n, i, o;
        if (window.odometerOptions) {
            i = window.odometerOptions, o = [];
            for (t in i) e = i[t], o.push(null != (n = p.options)[t] ? (n = p.options)[t] : n[t] = e);
            return o
        }
    }, 0), p.init = function() {
        var t, e, n, i, o, r;
        if (null != document.querySelectorAll) {
            for (e = document.querySelectorAll(p.options.selector || ".odometer"), r = [], n = 0, i = e.length; i > n; n++) t = e[n], r.push(t.odometer = new p({
                el: t,
                value: null != (o = t.innerText) ? o : t.textContent
            }));
            return r
        }
    }, null != (null != (H = document.documentElement) ? H.doScroll : void 0) && null != document.createEventObject ? (A = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && p.options.auto !== !1 && p.init(), null != A ? A.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return p.options.auto !== !1 ? p.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return p
    }) : typeof exports === !1 ? module.exports = p : window.Odometer = p
}).call(this);
if (document.all && !window.setTimeout.isPolyfill) {
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(n, t) {
        var i = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(n instanceof Function ? function() {
            n.apply(null, i)
        } : n, t)
    }, window.setTimeout.isPolyfill = !0
}
if (document.all && !window.setInterval.isPolyfill) {
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(n, t) {
        var i = Array.prototype.slice.call(arguments, 2);
        return __nativeSI__(n instanceof Function ? function() {
            n.apply(null, i)
        } : n, t)
    }, window.setInterval.isPolyfill = !0
}
var CryptoJS = CryptoJS || function(t, n) {
    var i = {},
        r = i.lib = {},
        e = function() {},
        s = r.Base = {
            extend: function(t) {
                e.prototype = this;
                var n = new e;
                return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                    n.$super.init.apply(this, arguments)
                }), n.init.prototype = n, n.$super = this, n
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t
            },
            init: function() {},
            mixIn: function(t) {
                for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        o = r.WordArray = s.extend({
            init: function(t, i) {
                t = this.words = t || [], this.sigBytes = i != n ? i : 4 * t.length
            },
            toString: function(t) {
                return (t || c).stringify(this)
            },
            concat: function(t) {
                var n = this.words,
                    i = t.words,
                    r = this.sigBytes;
                if (t = t.sigBytes, this.clamp(), r % 4)
                    for (var e = 0; t > e; e++) n[r + e >>> 2] |= (i[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((r + e) % 4);
                else if (65535 < i.length)
                    for (e = 0; t > e; e += 4) n[r + e >>> 2] = i[e >>> 2];
                else n.push.apply(n, i);
                return this.sigBytes += t, this
            },
            clamp: function() {
                var n = this.words,
                    i = this.sigBytes;
                n[i >>> 2] &= 4294967295 << 32 - 8 * (i % 4), n.length = t.ceil(i / 4)
            },
            clone: function() {
                var t = s.clone.call(this);
                return t.words = this.words.slice(0), t
            },
            random: function(n) {
                for (var i = [], r = 0; n > r; r += 4) i.push(4294967296 * t.random() | 0);
                return new o.init(i, n)
            }
        }),
        a = i.enc = {},
        c = a.Hex = {
            stringify: function(t) {
                var n = t.words;
                t = t.sigBytes;
                for (var i = [], r = 0; t > r; r++) {
                    var e = n[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
                    i.push((e >>> 4).toString(16)), i.push((15 & e).toString(16))
                }
                return i.join("")
            },
            parse: function(t) {
                for (var n = t.length, i = [], r = 0; n > r; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - 4 * (r % 8);
                return new o.init(i, n / 2)
            }
        },
        h = a.Latin1 = {
            stringify: function(t) {
                var n = t.words;
                t = t.sigBytes;
                for (var i = [], r = 0; t > r; r++) i.push(String.fromCharCode(n[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
                return i.join("")
            },
            parse: function(t) {
                for (var n = t.length, i = [], r = 0; n > r; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - 8 * (r % 4);
                return new o.init(i, n)
            }
        },
        u = a.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(h.stringify(t)))
                } catch (n) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(t) {
                return h.parse(unescape(encodeURIComponent(t)))
            }
        },
        f = r.BufferedBlockAlgorithm = s.extend({
            reset: function() {
                this._data = new o.init, this._nDataBytes = 0
            },
            _append: function(t) {
                "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
            },
            _process: function(n) {
                var i = this._data,
                    r = i.words,
                    e = i.sigBytes,
                    s = this.blockSize,
                    a = e / (4 * s),
                    a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0);
                if (n = a * s, e = t.min(4 * n, e), n) {
                    for (var c = 0; n > c; c += s) this._doProcessBlock(r, c);
                    c = r.splice(0, n), i.sigBytes -= e
                }
                return new o.init(c, e)
            },
            clone: function() {
                var t = s.clone.call(this);
                return t._data = this._data.clone(), t
            },
            _minBufferSize: 0
        });
    r.Hasher = f.extend({
        cfg: s.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t), this.reset()
        },
        reset: function() {
            f.reset.call(this), this._doReset()
        },
        update: function(t) {
            return this._append(t), this._process(), this
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(n, i) {
                return new t.init(i).finalize(n)
            }
        },
        _createHmacHelper: function(t) {
            return function(n, i) {
                return new l.HMAC.init(t, i).finalize(n)
            }
        }
    });
    var l = i.algo = {};
    return i
}(Math);
! function(t) {
    for (var n = CryptoJS, i = n.lib, r = i.WordArray, e = i.Hasher, i = n.algo, s = [], o = [], a = function(t) {
            return 4294967296 * (t - (0 | t)) | 0
        }, c = 2, h = 0; 64 > h;) {
        var u;
        t: {
            u = c;
            for (var f = t.sqrt(u), l = 2; f >= l; l++)
                if (!(u % l)) {
                    u = !1;
                    break t
                }
            u = !0
        }
        u && (8 > h && (s[h] = a(t.pow(c, .5))), o[h] = a(t.pow(c, 1 / 3)), h++), c++
    }
    var p = [],
        i = i.SHA256 = e.extend({
            _doReset: function() {
                this._hash = new r.init(s.slice(0))
            },
            _doProcessBlock: function(t, n) {
                for (var i = this._hash.words, r = i[0], e = i[1], s = i[2], a = i[3], c = i[4], h = i[5], u = i[6], f = i[7], l = 0; 64 > l; l++) {
                    if (16 > l) p[l] = 0 | t[n + l];
                    else {
                        var d = p[l - 15],
                            g = p[l - 2];
                        p[l] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + p[l - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + p[l - 16]
                    }
                    d = f + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & h ^ ~c & u) + o[l] + p[l], g = ((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + (r & e ^ r & s ^ e & s), f = u, u = h, h = c, c = a + d | 0, a = s, s = e, e = r, r = d + g | 0
                }
                i[0] = i[0] + r | 0, i[1] = i[1] + e | 0, i[2] = i[2] + s | 0, i[3] = i[3] + a | 0, i[4] = i[4] + c | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + f | 0
            },
            _doFinalize: function() {
                var n = this._data,
                    i = n.words,
                    r = 8 * this._nDataBytes,
                    e = 8 * n.sigBytes;
                return i[e >>> 5] |= 128 << 24 - e % 32, i[(e + 64 >>> 9 << 4) + 14] = t.floor(r / 4294967296), i[(e + 64 >>> 9 << 4) + 15] = r, n.sigBytes = 4 * i.length, this._process(), this._hash
            },
            clone: function() {
                var t = e.clone.call(this);
                return t._hash = this._hash.clone(), t
            }
        });
    n.SHA256 = e._createHelper(i), n.HmacSHA256 = e._createHmacHelper(i)
}(Math);
! function(t) {
    var e, n, r = "0.4.2",
        i = "hasOwnProperty",
        o = /[\.\/]/,
        a = "*",
        s = function() {},
        u = function(t, e) {
            return t - e
        },
        l = {
            n: {}
        },
        c = function(t, r) {
            t = String(t);
            var i, o = n,
                a = Array.prototype.slice.call(arguments, 2),
                s = c.listeners(t),
                l = 0,
                h = [],
                f = {},
                d = [],
                p = e;
            e = t, n = 0;
            for (var g = 0, v = s.length; v > g; g++) "zIndex" in s[g] && (h.push(s[g].zIndex), s[g].zIndex < 0 && (f[s[g].zIndex] = s[g]));
            for (h.sort(u); h[l] < 0;)
                if (i = f[h[l++]], d.push(i.apply(r, a)), n) return n = o, d;
            for (g = 0; v > g; g++)
                if (i = s[g], "zIndex" in i)
                    if (i.zIndex == h[l]) {
                        if (d.push(i.apply(r, a)), n) break;
                        do
                            if (l++, i = f[h[l]], i && d.push(i.apply(r, a)), n) break;
                        while (i)
                    } else f[i.zIndex] = i;
            else if (d.push(i.apply(r, a)), n) break;
            return n = o, e = p, d.length ? d : null
        };
    c._events = l, c.listeners = function(t) {
        var e, n, r, i, s, u, c, h, f = t.split(o),
            d = l,
            p = [d],
            g = [];
        for (i = 0, s = f.length; s > i; i++) {
            for (h = [], u = 0, c = p.length; c > u; u++)
                for (d = p[u].n, n = [d[f[i]], d[a]], r = 2; r--;) e = n[r], e && (h.push(e), g = g.concat(e.f || []));
            p = h
        }
        return g
    }, c.on = function(t, e) {
        if (t = String(t), "function" != typeof e) return function() {};
        for (var n = t.split(o), r = l, i = 0, a = n.length; a > i; i++) r = r.n, r = r.hasOwnProperty(n[i]) && r[n[i]] || (r[n[i]] = {
            n: {}
        });
        for (r.f = r.f || [], i = 0, a = r.f.length; a > i; i++)
            if (r.f[i] == e) return s;
        return r.f.push(e),
            function(t) {
                +t == +t && (e.zIndex = +t)
            }
    }, c.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            c.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, c.stop = function() {
        n = 1
    }, c.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, c.nts = function() {
        return e.split(o)
    }, c.off = c.unbind = function(t, e) {
        if (!t) return void(c._events = l = {
            n: {}
        });
        var n, r, s, u, h, f, d, p = t.split(o),
            g = [l];
        for (u = 0, h = p.length; h > u; u++)
            for (f = 0; f < g.length; f += s.length - 2) {
                if (s = [f, 1], n = g[f].n, p[u] != a) n[p[u]] && s.push(n[p[u]]);
                else
                    for (r in n) n[i](r) && s.push(n[r]);
                g.splice.apply(g, s)
            }
        for (u = 0, h = g.length; h > u; u++)
            for (n = g[u]; n.n;) {
                if (e) {
                    if (n.f) {
                        for (f = 0, d = n.f.length; d > f; f++)
                            if (n.f[f] == e) {
                                n.f.splice(f, 1);
                                break
                            }!n.f.length && delete n.f
                    }
                    for (r in n.n)
                        if (n.n[i](r) && n.n[r].f) {
                            var v = n.n[r].f;
                            for (f = 0, d = v.length; d > f; f++)
                                if (v[f] == e) {
                                    v.splice(f, 1);
                                    break
                                }!v.length && delete n.n[r].f
                        }
                } else {
                    delete n.f;
                    for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f
                }
                n = n.n
            }
    }, c.once = function(t, e) {
        var n = function() {
            return c.unbind(t, n), e.apply(this, arguments)
        };
        return c.on(t, n)
    }, c.version = r, c.toString = function() {
        return "You are running Eve " + r
    }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function() {
        return c
    }) : t.eve = c
}(this),
function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function(t, e) {
    var n = function(e) {
            var n = {},
                r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 16)
                },
                i = Array.isArray || function(t) {
                    return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                },
                o = 0,
                a = "M" + (+new Date).toString(36),
                s = function() {
                    return a + (o++).toString(36)
                },
                u = Date.now || function() {
                    return +new Date
                },
                l = function(t) {
                    var e = this;
                    if (null == t) return e.s;
                    var n = e.s - t;
                    e.b += e.dur * n, e.B += e.dur * n, e.s = t
                },
                c = function(t) {
                    var e = this;
                    return null == t ? e.spd : void(e.spd = t)
                },
                h = function(t) {
                    var e = this;
                    return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                },
                f = function() {
                    var t = this;
                    delete n[t.id], e("mina.stop." + t.id, t)
                },
                d = function() {
                    var t = this;
                    t.pdif || (delete n[t.id], t.pdif = t.get() - t.b)
                },
                p = function() {
                    var t = this;
                    t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                },
                g = function() {
                    var t = 0;
                    for (var o in n)
                        if (n.hasOwnProperty(o)) {
                            var a, s = n[o],
                                u = s.get();
                            if (t++, s.s = (u - s.b) / (s.dur / s.spd), s.s >= 1 && (delete n[o], s.s = 1, t--, function(t) {
                                    setTimeout(function() {
                                        e("mina.finish." + t.id, t)
                                    })
                                }(s)), i(s.start)) {
                                a = [];
                                for (var l = 0, c = s.start.length; c > l; l++) a[l] = +s.start[l] + (s.end[l] - s.start[l]) * s.easing(s.s)
                            } else a = +s.start + (s.end - s.start) * s.easing(s.s);
                            s.set(a)
                        }
                    t && r(g)
                },
                v = function(t, e, i, o, a, u, y) {
                    var m = {
                        id: s(),
                        start: t,
                        end: e,
                        b: i,
                        s: 0,
                        dur: o - i,
                        spd: 1,
                        get: a,
                        set: u,
                        easing: y || v.linear,
                        status: l,
                        speed: c,
                        duration: h,
                        stop: f,
                        pause: d,
                        resume: p
                    };
                    n[m.id] = m;
                    var x, b = 0;
                    for (x in n)
                        if (n.hasOwnProperty(x) && (b++, 2 == b)) break;
                    return 1 == b && r(g), m
                };
            return v.time = u, v.getById = function(t) {
                return n[t] || null
            }, v.linear = function(t) {
                return t
            }, v.easeout = function(t) {
                return Math.pow(t, 1.7)
            }, v.easein = function(t) {
                return Math.pow(t, .48)
            }, v.easeinout = function(t) {
                if (1 == t) return 1;
                if (0 == t) return 0;
                var e = .48 - t / 1.04,
                    n = Math.sqrt(.1734 + e * e),
                    r = n - e,
                    i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                    o = -n - e,
                    a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
                    s = i + a + .5;
                return 3 * (1 - s) * s * s + s * s * s
            }, v.backin = function(t) {
                if (1 == t) return 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, v.backout = function(t) {
                if (0 == t) return 0;
                t -= 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t + e) + 1
            }, v.elastic = function(t) {
                return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
            }, v.bounce = function(t) {
                var e, n = 7.5625,
                    r = 2.75;
                return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
            }, t.mina = v, v
        }("undefined" == typeof e ? function() {} : e),
        r = function() {
            function r(t, e) {
                if (t) {
                    if (t.tagName) return B(t);
                    if (t instanceof b) return t;
                    if (null == e) return t = j.doc.querySelector(t), B(t)
                }
                return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new k(t, e)
            }

            function i(t, e) {
                if (e) {
                    if ("string" == typeof t && (t = i(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(oe, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(ae, e.substring(4)) : t.getAttribute(e);
                    for (var n in e)
                        if (e[q](n)) {
                            var r = L(e[n]);
                            r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(oe, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(ae, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                        }
                } else t = j.doc.createElementNS(ae, t);
                return t
            }

            function o(t, e) {
                return e = L.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || H.call(t).slice(8, -1).toLowerCase() == e
            }

            function a(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor;
                for (var n in t) t[q](n) && (e[n] = a(t[n]));
                return e
            }

            function s(t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    if (t[n] === e) return t.push(t.splice(n, 1)[0])
            }

            function u(t, e, n) {
                function r() {
                    var i = Array.prototype.slice.call(arguments, 0),
                        o = i.join("â€"),
                        a = r.cache = r.cache || {},
                        u = r.count = r.count || [];
                    return a[q](o) ? (s(u, o), n ? n(a[o]) : a[o]) : (u.length >= 1e3 && delete a[u.shift()], u.push(o), a[o] = t.apply(e, i), n ? n(a[o]) : a[o])
                }
                return r
            }

            function l(t, e, n, r, i, o) {
                if (null == i) {
                    var a = t - n,
                        s = e - r;
                    return a || s ? (180 + 180 * z.atan2(-s, -a) / V + 360) % 360 : 0
                }
                return l(t, e, i, o) - l(n, r, i, o)
            }

            function c(t) {
                return t % 360 * V / 180
            }

            function h(t) {
                return 180 * t / V % 360
            }

            function f(t, e, n, r, i, o) {
                return null == e && "[object SVGMatrix]" == H.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
            }

            function d(t) {
                var e = [];
                return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, r) {
                    return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, z.tan(c(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, z.tan(c(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
                }), e
            }

            function p(t, e) {
                var n = ve(t),
                    r = new f;
                if (n)
                    for (var i = 0, o = n.length; o > i; i++) {
                        var a, s, u, l, c, h = n[i],
                            d = h.length,
                            p = L(h[0]).toLowerCase(),
                            g = h[0] != p,
                            v = g ? r.invert() : 0;
                        "t" == p && 2 == d ? r.translate(h[1], 0) : "t" == p && 3 == d ? g ? (a = v.x(0, 0), s = v.y(0, 0), u = v.x(h[1], h[2]), l = v.y(h[1], h[2]), r.translate(u - a, l - s)) : r.translate(h[1], h[2]) : "r" == p ? 2 == d ? (c = c || e, r.rotate(h[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == d && (g ? (u = v.x(h[2], h[3]), l = v.y(h[2], h[3]), r.rotate(h[1], u, l)) : r.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == d || 3 == d ? (c = c || e, r.scale(h[1], h[d - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == d ? g ? (u = v.x(h[2], h[3]), l = v.y(h[2], h[3]), r.scale(h[1], h[1], u, l)) : r.scale(h[1], h[1], h[2], h[3]) : 5 == d && (g ? (u = v.x(h[3], h[4]), l = v.y(h[3], h[4]), r.scale(h[1], h[2], u, l)) : r.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == d && r.add(h[1], h[2], h[3], h[4], h[5], h[6])
                    }
                return r
            }

            function v(t, e) {
                if (null == e) {
                    var n = !0;
                    if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new f;
                    e = d(e)
                } else e = r._.rgTransform.test(e) ? L(e).replace(/\.{3}|\u2026/g, t._.transform || U) : d(e), o(e, "array") && (e = r.path ? r.path.toString.call(e) : L(e)), t._.transform = e;
                var i = p(e, t.getBBox(1));
                return n ? i : void(t.matrix = i)
            }

            function y(t) {
                var e = r._.someDefs;
                if (e && ye(e.ownerDocument.documentElement, e)) return e;
                var n = t.node.ownerSVGElement && B(t.node.ownerSVGElement) || t.node.parentNode && B(t.node.parentNode) || r.select("svg") || r(0, 0),
                    i = n.select("defs"),
                    o = null == i ? !1 : i.node;
                return o || (o = S("defs", n.node).node), r._.someDefs = o, o
            }

            function m(t, e, n) {
                function r(t) {
                    return null == t ? U : t == +t ? t : (i(l, {
                        width: t
                    }), l.getBBox().width)
                }

                function o(t) {
                    return null == t ? U : t == +t ? t : (i(l, {
                        height: t
                    }), l.getBBox().height)
                }

                function a(r, i) {
                    null == e ? u[r] = i(t.attr(r)) : r == e && (u = i(null == n ? t.attr(r) : n))
                }
                var s = y(t),
                    u = {},
                    l = s.querySelector(".svg---mgr");
                switch (l || (l = i("rect"), i(l, {
                    width: 10,
                    height: 10,
                    "class": "svg---mgr"
                }), s.appendChild(l)), t.type) {
                    case "rect":
                        a("rx", r), a("ry", o);
                    case "image":
                        a("width", r), a("height", o);
                    case "text":
                        a("x", r), a("y", o);
                        break;
                    case "circle":
                        a("cx", r), a("cy", o), a("r", r);
                        break;
                    case "ellipse":
                        a("cx", r), a("cy", o), a("rx", r), a("ry", o);
                        break;
                    case "line":
                        a("x1", r), a("x2", r), a("y1", o), a("y2", o);
                        break;
                    case "marker":
                        a("refX", r), a("markerWidth", r), a("refY", o), a("markerHeight", o);
                        break;
                    case "radialGradient":
                        a("fx", r), a("fy", o);
                        break;
                    case "tspan":
                        a("dx", r), a("dy", o);
                        break;
                    default:
                        a(e, r)
                }
                return u
            }

            function x(t) {
                o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                    r.appendChild(t.node)
                }) : r.appendChild(t[e].node);
                var i = r.childNodes;
                for (e = 0; e < i.length; e++) this[n++] = B(i[e]);
                return this
            }

            function b(t) {
                if (t.snap in se) return se[t.snap];
                var e, n = this.id = ie();
                try {
                    e = t.ownerSVGElement
                } catch (r) {}
                if (this.node = t, e && (this.paper = new k(e)), this.type = t.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, t.snap = n, se[n] = this, "g" == this.type) {
                    this.add = x;
                    for (var i in k.prototype) k.prototype[q](i) && (this[i] = k.prototype[i])
                }
            }

            function w(t) {
                for (var e, n = 0, r = t.length; r > n; n++)
                    if (e = e || t[n]) return e
            }

            function C(t) {
                this.node = t
            }

            function S(t, e) {
                var n = i(t);
                e.appendChild(n);
                var r = B(n);
                return r.type = t, r
            }

            function k(t, e) {
                var n, r, o, a = k.prototype;
                if (t && "svg" == t.tagName) {
                    if (t.snap in se) return se[t.snap];
                    n = new b(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(j.doc.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = i("defs"), n.node.appendChild(o)), n.defs = o;
                    for (var s in a) a[q](s) && (n[s] = a[s]);
                    n.paper = n.root = n
                } else n = S("svg", j.doc.body), i(n.node, {
                    height: e,
                    version: 1.1,
                    width: t,
                    xmlns: ae
                });
                return n
            }

            function B(t) {
                return t ? t instanceof b || t instanceof C ? t : "svg" == t.tagName ? new k(t) : new b(t) : t
            }

            function T() {
                return this.selectAll("stop")
            }

            function M(t, e) {
                var n = i("stop"),
                    o = {
                        offset: +e + "%"
                    };
                return t = r.color(t), o["stop-color"] = t.hex, t.opacity < 1 && (o["stop-opacity"] = t.opacity), i(n, o), this.node.appendChild(n), this
            }

            function A() {
                if ("linearGradient" == this.type) {
                    var t = i(this.node, "x1") || 0,
                        e = i(this.node, "x2") || 1,
                        n = i(this.node, "y1") || 0,
                        o = i(this.node, "y2") || 0;
                    return r._.box(t, n, z.abs(e - t), z.abs(o - n))
                }
                var a = this.node.cx || .5,
                    s = this.node.cy || .5,
                    u = this.node.r || 0;
                return r._.box(a - u, s - u, 2 * u, 2 * u)
            }

            function F(t, n) {
                function r(t, e) {
                    for (var n = (e - l) / (t - c), r = c; t > r; r++) s[r].offset = +(+l + n * (r - c)).toFixed(2);
                    c = t, l = e
                }
                var o, a = w(e("snap.util.grad.parse", null, n));
                if (!a) return null;
                a.params.unshift(t), o = "l" == a.type.toLowerCase() ? _.apply(0, a.params) : N.apply(0, a.params), a.type != a.type.toLowerCase() && i(o.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var s = a.stops,
                    u = s.length,
                    l = 0,
                    c = 0;
                u--;
                for (var h = 0; u > h; h++) "offset" in s[h] && r(h, s[h].offset);
                for (s[u].offset = s[u].offset || 100, r(u, s[u].offset), h = 0; u >= h; h++) {
                    var f = s[h];
                    o.addStop(f.color, f.offset)
                }
                return o
            }

            function _(t, e, n, r, o) {
                var a = S("linearGradient", t);
                return a.stops = T, a.addStop = M, a.getBBox = A, null != e && i(a.node, {
                    x1: e,
                    y1: n,
                    x2: r,
                    y2: o
                }), a
            }

            function N(t, e, n, r, o, a) {
                var s = S("radialGradient", t);
                return s.stops = T, s.addStop = M, s.getBBox = A, null != e && i(s.node, {
                    cx: e,
                    cy: n,
                    r: r
                }), null != o && null != a && i(s.node, {
                    fx: o,
                    fy: a
                }), s
            }

            function P(t) {
                return function(n) {
                    if (e.stop(), n instanceof C && 1 == n.node.childNodes.length && ("radialGradient" == n.node.firstChild.tagName || "linearGradient" == n.node.firstChild.tagName || "pattern" == n.node.firstChild.tagName) && (n = n.node.firstChild, y(this).appendChild(n), n = B(n)), n instanceof b)
                        if ("radialGradient" == n.type || "linearGradient" == n.type || "pattern" == n.type) {
                            n.node.id || i(n.node, {
                                id: n.id
                            });
                            var o = ue(n.node.id)
                        } else o = n.attr(t);
                    else if (o = r.color(n), o.error) {
                        var a = F(y(this), n);
                        a ? (a.node.id || i(a.node, {
                            id: a.id
                        }), o = ue(a.node.id)) : o = n
                    } else o = L(o);
                    var s = {};
                    s[t] = o, i(this.node, s), this.node.style[t] = U
                }
            }

            function E(t) {
                for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                    var o = n[r];
                    3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && e.push(1 == o.childNodes.length && 3 == o.firstChild.nodeType ? o.firstChild.nodeValue : E(o))
                }
                return e
            }
            r.version = "0.2.0", r.toString = function() {
                return "Snap v" + this.version
            }, r._ = {};
            var j = {
                win: t,
                doc: t.document
            };
            r._.glob = j;
            var q = "hasOwnProperty",
                L = String,
                R = parseFloat,
                G = parseInt,
                z = Math,
                D = z.max,
                O = z.min,
                I = z.abs,
                V = (z.pow, z.PI),
                U = (z.round, ""),
                X = " ",
                H = Object.prototype.toString,
                Y = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                $ = /^url\(#?([^)]+)\)$/,
                W = "	\n\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029",
                Z = new RegExp("[," + W + "]+"),
                Q = (new RegExp("[" + W + "]", "g"), new RegExp("[" + W + "]*,[" + W + "]*")),
                J = {
                    hs: 1,
                    rg: 1
                },
                K = new RegExp("([a-z])[" + W + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + W + "]*,?[" + W + "]*)+)", "ig"),
                te = new RegExp("([rstm])[" + W + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + W + "]*,?[" + W + "]*)+)", "ig"),
                ee = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + W + "]*,?[" + W + "]*", "ig"),
                ne = 0,
                re = "S" + (+new Date).toString(36),
                ie = function() {
                    return re + (ne++).toString(36)
                },
                oe = "http://www.w3.org/1999/xlink",
                ae = "http://www.w3.org/2000/svg",
                se = {},
                ue = r.url = function(t) {
                    return "url('#" + t + "')"
                };
            r._.$ = i, r._.id = ie, r.format = function() {
                var t = /\{([^\}]+)\}/g,
                    e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    n = function(t, n, r) {
                        var i = r;
                        return n.replace(e, function(t, e, n, r, o) {
                            e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                        }), i = (null == i || i == r ? t : i) + ""
                    };
                return function(e, r) {
                    return L(e).replace(t, function(t, e) {
                        return n(t, e, r)
                    })
                }
            }();
            var le = function() {
                function t() {
                    this.parentNode.removeChild(this)
                }
                return function(e, n) {
                    var r = j.doc.createElement("img"),
                        i = j.doc.body;
                    r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                        n.call(r), r.onload = r.onerror = null, i.removeChild(r)
                    }, r.onerror = t, i.appendChild(r), r.src = e
                }
            }();
            r._.clone = a, r._.cacher = u, r.rad = c, r.deg = h, r.angle = l, r.is = o, r.snapTo = function(t, e, n) {
                    if (n = o(n, "finite") ? n : 10, o(t, "array")) {
                        for (var r = t.length; r--;)
                            if (I(t[r] - e) <= n) return t[r]
                    } else {
                        t = +t;
                        var i = e % t;
                        if (n > i) return e - i;
                        if (i > t - n) return e - i + t
                    }
                    return e
                },
                function(t) {
                    function e(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function n(t) {
                        var n = z.sqrt(e(t));
                        t[0] && (t[0] /= n), t[1] && (t[1] /= n)
                    }
                    t.add = function(t, e, n, r, i, o) {
                        var a, s, u, l, c = [
                                [],
                                [],
                                []
                            ],
                            h = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            d = [
                                [t, n, i],
                                [e, r, o],
                                [0, 0, 1]
                            ];
                        for (t && t instanceof f && (d = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), a = 0; 3 > a; a++)
                            for (s = 0; 3 > s; s++) {
                                for (l = 0, u = 0; 3 > u; u++) l += h[a][u] * d[u][s];
                                c[a][s] = l
                            }
                        return this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2], this
                    }, t.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new f(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, t.clone = function() {
                        return new f(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.translate = function(t, e) {
                        return this.add(1, 0, 0, 1, t, e)
                    }, t.scale = function(t, e, n, r) {
                        return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                    }, t.rotate = function(t, e, n) {
                        t = c(t), e = e || 0, n = n || 0;
                        var r = +z.cos(t).toFixed(9),
                            i = +z.sin(t).toFixed(9);
                        return this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n)
                    }, t.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, t.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, t.get = function(t) {
                        return +this[L.fromCharCode(97 + t)].toFixed(4)
                    }, t.toString = function() {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }, t.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, t.split = function() {
                        var t = {};
                        t.dx = this.e, t.dy = this.f;
                        var r = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        t.scalex = z.sqrt(e(r[0])), n(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = z.sqrt(e(r[1])), n(r[1]), t.shear /= t.scaley;
                        var i = -r[0][1],
                            o = r[1][1];
                        return 0 > o ? (t.rotate = h(z.acos(o)), 0 > i && (t.rotate = 360 - t.rotate)) : t.rotate = h(z.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                    }, t.toTransformString = function(t) {
                        var e = t || this.split();
                        return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : U) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : U) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : U)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(f.prototype), r.Matrix = f, r.getRGB = u(function(t) {
                    if (!t || (t = L(t)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: de
                    };
                    if ("none" == t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: de
                    };
                    if (!(J[q](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = ce(t)), !t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: de
                    };
                    var e, n, i, a, s, u, l = t.match(Y);
                    return l ? (l[2] && (i = G(l[2].substring(5), 16), n = G(l[2].substring(3, 5), 16), e = G(l[2].substring(1, 3), 16)), l[3] && (i = G((s = l[3].charAt(3)) + s, 16), n = G((s = l[3].charAt(2)) + s, 16), e = G((s = l[3].charAt(1)) + s, 16)), l[4] && (u = l[4].split(Q), e = R(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), n = R(u[1]), "%" == u[1].slice(-1) && (n *= 2.55), i = R(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (a = R(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100)), l[5] ? (u = l[5].split(Q), e = R(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = R(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = R(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "Â°" == u[0].slice(-1)) && (e /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (a = R(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100), r.hsb2rgb(e, n, i, a)) : l[6] ? (u = l[6].split(Q), e = R(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = R(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = R(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "Â°" == u[0].slice(-1)) && (e /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (a = R(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (e = O(z.round(e), 255), n = O(z.round(n), 255), i = O(z.round(i), 255), a = O(D(a, 0), 1), l = {
                        r: e,
                        g: n,
                        b: i,
                        toString: de
                    }, l.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), l.opacity = o(a, "finite") ? a : 1, l)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: de
                    }
                }, r), r.hsb = u(function(t, e, n) {
                    return r.hsb2rgb(t, e, n).hex
                }), r.hsl = u(function(t, e, n) {
                    return r.hsl2rgb(t, e, n).hex
                }), r.rgb = u(function(t, e, n, r) {
                    if (o(r, "finite")) {
                        var i = z.round;
                        return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                });
            var ce = function(t) {
                    var e = j.doc.getElementsByTagName("head")[0],
                        n = "rgb(255, 0, 0)";
                    return (ce = u(function(t) {
                        if ("red" == t.toLowerCase()) return n;
                        e.style.color = n, e.style.color = t;
                        var r = j.doc.defaultView.getComputedStyle(e, U).getPropertyValue("color");
                        return r == n ? null : r
                    }))(t)
                },
                he = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                fe = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                de = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                pe = function(t, e, n) {
                    if (null == e && o(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && o(t, string)) {
                        var i = r.getRGB(t);
                        t = i.r, e = i.g, n = i.b
                    }
                    return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                },
                ge = function(t, e, n, i) {
                    t = z.round(255 * t), e = z.round(255 * e), n = z.round(255 * n);
                    var a = {
                        r: t,
                        g: e,
                        b: n,
                        opacity: o(i, "finite") ? i : 1,
                        hex: r.rgb(t, e, n),
                        toString: de
                    };
                    return o(i, "finite") && (a.opacity = i), a
                };
            r.color = function(t) {
                var e;
                return o(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : o(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (o(t, "string") && (t = r.getRGB(t)), o(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
                    hex: "none"
                }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = de, t
            }, r.hsb2rgb = function(t, e, n, r) {
                o(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
                var i, a, s, u, l;
                return t = t % 360 / 60, l = n * e, u = l * (1 - I(t % 2 - 1)), i = a = s = n - l, t = ~~t, i += [l, u, 0, 0, u, l][t], a += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], ge(i, a, s, r)
            }, r.hsl2rgb = function(t, e, n, r) {
                o(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
                var i, a, s, u, l;
                return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), u = l * (1 - I(t % 2 - 1)), i = a = s = n - l / 2, t = ~~t, i += [l, u, 0, 0, u, l][t], a += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], ge(i, a, s, r)
            }, r.rgb2hsb = function(t, e, n) {
                n = pe(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, o, a;
                return o = D(t, e, n), a = o - O(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                    h: r,
                    s: i,
                    b: o,
                    toString: he
                }
            }, r.rgb2hsl = function(t, e, n) {
                n = pe(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, o, a, s, u;
                return a = D(t, e, n), s = O(t, e, n), u = a - s, r = 0 == u ? null : a == t ? (e - n) / u : a == e ? (n - t) / u + 2 : (t - e) / u + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == u ? 0 : .5 > o ? u / (2 * o) : u / (2 - 2 * o), {
                    h: r,
                    s: i,
                    l: o,
                    toString: fe
                }
            }, r.parsePathString = function(t) {
                if (!t) return null;
                var e = r.path(t);
                if (e.arr) return r.path.clone(e.arr);
                var n = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    i = [];
                return o(t, "array") && o(t[0], "array") && (i = r.path.clone(t)), i.length || L(t).replace(K, function(t, e, r) {
                    var o = [],
                        a = e.toLowerCase();
                    if (r.replace(ee, function(t, e) {
                            e && o.push(+e)
                        }), "m" == a && o.length > 2 && (i.push([e].concat(o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == o.length && i.push([e, o[0]]), "r" == a) i.push([e].concat(o));
                    else
                        for (; o.length >= n[a] && (i.push([e].concat(o.splice(0, n[a]))), n[a]););
                }), i.toString = r.path.toString, e.arr = r.path.clone(i), i
            };
            var ve = r.parseTransformString = function(t) {
                if (!t) return null;
                var e = [];
                return o(t, "array") && o(t[0], "array") && (e = r.path.clone(t)), e.length || L(t).replace(te, function(t, n, r) {
                    {
                        var i = [];
                        n.toLowerCase()
                    }
                    r.replace(ee, function(t, e) {
                        e && i.push(+e)
                    }), e.push([n].concat(i))
                }), e.toString = r.path.toString, e
            };
            r._.svgTransform2string = d, r._.rgTransform = new RegExp("^[a-z][" + W + "]*-?\\.?\\d", "i"), r._.transform2matrix = p, r._unit2px = m;
            var ye = j.doc.contains || j.doc.compareDocumentPosition ? function(t, e) {
                var n = 9 == t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e;)
                        if (e = e.parentNode, e == t) return !0;
                return !1
            };
            r._.getSomeDefs = y, r.select = function(t) {
                    return B(j.doc.querySelector(t))
                }, r.selectAll = function(t) {
                    for (var e = j.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(B(e[i]));
                    return n
                },
                function(t) {
                    function a(t) {
                        function e(t, e) {
                            var n = i(t.node, e);
                            n = n && n.match(a), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (u[n] = (u[n] || []).concat(function(n) {
                                var r = {};
                                r[e] = ue(n), i(t.node, r)
                            })))
                        }

                        function n(t) {
                            var e = i(t.node, "xlink:href");
                            e && "#" == e.charAt() && (e = e.substring(1), e && (u[e] = (u[e] || []).concat(function(e) {
                                t.attr("xlink:href", "#" + e)
                            })))
                        }
                        for (var r, o = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], u = {}, l = 0, c = o.length; c > l; l++) {
                            r = o[l], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                            var h = i(r.node, "id");
                            h && (i(r.node, {
                                id: r.id
                            }), s.push({
                                old: h,
                                id: r.id
                            }))
                        }
                        for (l = 0, c = s.length; c > l; l++) {
                            var f = u[s[l].old];
                            if (f)
                                for (var d = 0, p = f.length; p > d; d++) f[d](s[l].id)
                        }
                    }

                    function s(t, e, n) {
                        return function(r) {
                            var i = r.slice(t, e);
                            return 1 == i.length && (i = i[0]), n ? n(i) : i
                        }
                    }

                    function u(t) {
                        return function() {
                            var e = t ? "<" + this.type : "",
                                n = this.node.attributes,
                                r = this.node.childNodes;
                            if (t)
                                for (var i = 0, o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                            if (r.length) {
                                for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += B(r[i]).toString());
                                t && (e += "</" + this.type + ">")
                            } else t && (e += "/>");
                            return e
                        }
                    }
                    t.attr = function(t, n) {
                        {
                            var r = this;
                            r.node
                        }
                        if (!t) return r;
                        if (o(t, "string")) {
                            if (!(arguments.length > 1)) return w(e("snap.util.getattr." + t, r));
                            var i = {};
                            i[t] = n, t = i
                        }
                        for (var a in t) t[q](a) && e("snap.util.attr." + a, r, t[a]);
                        return r
                    }, t.getBBox = function(t) {
                        var e = this;
                        if ("use" == e.type && (e = e.original), e.removed) return {};
                        var n = e._;
                        return t ? (n.bboxwt = r.path.get[e.type] ? r.path.getBBox(e.realPath = r.path.get[e.type](e)) : r._.box(e.node.getBBox()), r._.box(n.bboxwt)) : (e.realPath = (r.path.get[e.type] || r.path.get.deflt)(e), n.bbox = r.path.getBBox(r.path.map(e.realPath, e.matrix)), r._.box(n.bbox))
                    };
                    var l = function() {
                        return this.string
                    };
                    t.transform = function(t) {
                        var e = this._;
                        if (null == t) {
                            var n = new f(this.node.getCTM()),
                                r = v(this),
                                o = r.toTransformString(),
                                a = L(r) == L(this.matrix) ? e.transform : o;
                            return {
                                string: a,
                                globalMatrix: n,
                                localMatrix: r,
                                diffMatrix: n.clone().add(r.invert()),
                                global: n.toTransformString(),
                                local: o,
                                toString: l
                            }
                        }
                        return t instanceof f && (t = t.toTransformString()), v(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? i(this.node, {
                            patternTransform: this.matrix
                        }) : i(this.node, {
                            transform: this.matrix
                        })), this
                    }, t.parent = function() {
                        return B(this.node.parentNode)
                    }, t.append = t.add = function(t) {
                        if (t) {
                            if ("set" == t.type) {
                                var e = this;
                                return t.forEach(function(t) {
                                    e.add(t)
                                }), this
                            }
                            t = B(t), this.node.appendChild(t.node), t.paper = this.paper
                        }
                        return this
                    }, t.appendTo = function(t) {
                        return t && (t = B(t), t.append(this)), this
                    }, t.prepend = function(t) {
                        if (t) {
                            t = B(t);
                            var e = t.parent();
                            this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), e && e.add()
                        }
                        return this
                    }, t.prependTo = function(t) {
                        return t = B(t), t.prepend(this), this
                    }, t.before = function(t) {
                        if ("set" == t.type) {
                            var e = this;
                            return t.forEach(function(t) {
                                var n = t.parent();
                                e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                            }), this.parent().add(), this
                        }
                        t = B(t);
                        var n = t.parent();
                        return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                    }, t.after = function(t) {
                        t = B(t);
                        var e = t.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                    }, t.insertBefore = function(t) {
                        t = B(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.insertAfter = function(t) {
                        t = B(t);
                        var e = this.parent();
                        return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                    }, t.remove = function() {
                        var t = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                    }, t.select = function(t) {
                        return B(this.node.querySelector(t))
                    }, t.selectAll = function(t) {
                        for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(B(e[i]));
                        return n
                    }, t.asPX = function(t, e) {
                        return null == e && (e = this.attr(t)), +m(this, t, e)
                    }, t.use = function() {
                        var t, e = this.node.id;
                        return e || (e = this.id, i(this.node, {
                            id: e
                        })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? S(this.type, this.node.parentNode) : S("use", this.node.parentNode), i(t.node, {
                            "xlink:href": "#" + e
                        }), t.original = this, t
                    }, t.clone = function() {
                        var t = B(this.node.cloneNode(!0));
                        return i(t.node, "id") && i(t.node, {
                            id: t.id
                        }), a(t), t.insertAfter(this), t
                    }, t.toDefs = function() {
                        var t = y(this);
                        return t.appendChild(this.node), this
                    }, t.pattern = function(t, e, n, r) {
                        var a = S("pattern", y(this));
                        return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), i(a.node, {
                            x: t,
                            y: e,
                            width: n,
                            height: r,
                            patternUnits: "userSpaceOnUse",
                            id: a.id,
                            viewBox: [t, e, n, r].join(" ")
                        }), a.node.appendChild(this.node), a
                    }, t.marker = function(t, e, n, r, a, s) {
                        var u = S("marker", y(this));
                        return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(u.node, {
                            viewBox: [t, e, n, r].join(X),
                            markerWidth: n,
                            markerHeight: r,
                            orient: "auto",
                            refX: a || 0,
                            refY: s || 0,
                            id: u.id
                        }), u.node.appendChild(this.node), u
                    };
                    var c = function(t, e, r, i) {
                        "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                    };
                    r.animation = function(t, e, n, r) {
                        return new c(t, e, n, r)
                    }, t.inAnim = function() {
                        var t = this,
                            e = [];
                        for (var n in t.anims) t.anims[q](n) && ! function(t) {
                            e.push({
                                anim: new c(t._attrs, t.dur, t.easing, t._callback),
                                curStatus: t.status(),
                                status: function(e) {
                                    return t.status(e)
                                },
                                stop: function() {
                                    t.stop()
                                }
                            })
                        }(t.anims[n]);
                        return e
                    }, r.animate = function(t, r, i, o, a, s) {
                        "function" != typeof a || a.length || (s = a, a = n.linear);
                        var u = n.time(),
                            l = n(t, r, u, u + o, n.time, i, a);
                        return s && e.once("mina.finish." + l.id, s), l
                    }, t.stop = function() {
                        for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
                        return this
                    }, t.animate = function(t, r, i, a) {
                        "function" != typeof i || i.length || (a = i, i = n.linear), t instanceof c && (a = t.callback, i = t.easing, r = i.dur, t = t.attr);
                        var u, l, h, f, d = [],
                            p = [],
                            g = {},
                            v = this;
                        for (var y in t)
                            if (t[q](y)) {
                                v.equal ? (f = v.equal(y, L(t[y])), u = f.from, l = f.to, h = f.f) : (u = +v.attr(y), l = +t[y]);
                                var m = o(u, "array") ? u.length : 1;
                                g[y] = s(d.length, d.length + m, h), d = d.concat(u), p = p.concat(l)
                            }
                        var x = n.time(),
                            b = n(d, p, x, x + r, n.time, function(t) {
                                var e = {};
                                for (var n in g) g[q](n) && (e[n] = g[n](t));
                                v.attr(e)
                            }, i);
                        return v.anims[b.id] = b, b._attrs = t, b._callback = a, e.once("mina.finish." + b.id, function() {
                            delete v.anims[b.id], a && a.call(v)
                        }), e.once("mina.stop." + b.id, function() {
                            delete v.anims[b.id]
                        }), v
                    };
                    var h = {};
                    t.data = function(t, n) {
                        var i = h[this.id] = h[this.id] || {};
                        if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                        if (1 == arguments.length) {
                            if (r.is(t, "object")) {
                                for (var o in t) t[q](o) && this.data(o, t[o]);
                                return this
                            }
                            return e("snap.data.get." + this.id, this, i[t], t), i[t]
                        }
                        return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
                    }, t.removeData = function(t) {
                        return null == t ? h[this.id] = {} : h[this.id] && delete h[this.id][t], this
                    }, t.outerSVG = t.toString = u(1), t.innerSVG = u()
                }(b.prototype), r.parse = function(t) {
                    var e = j.doc.createDocumentFragment(),
                        n = !0,
                        r = j.doc.createElement("div");
                    if (t = L(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])
                        if (n) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return r.innerHTML = U, new C(e)
                }, C.prototype.select = b.prototype.select, C.prototype.selectAll = b.prototype.selectAll, r.fragment = function() {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = j.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
                        var o = t[n];
                        o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(r.parse(o).node)
                    }
                    return new C(e)
                },
                function(t) {
                    t.el = function(t, e) {
                            return S(t, this.node).attr(e)
                        }, t.rect = function(t, e, n, r, i, a) {
                            var s;
                            return null == a && (a = i), o(t, "object") && "x" in t ? s = t : null != t && (s = {
                                x: t,
                                y: e,
                                width: n,
                                height: r
                            }, null != i && (s.rx = i, s.ry = a)), this.el("rect", s)
                        }, t.circle = function(t, e, n) {
                            var r;
                            return o(t, "object") && "cx" in t ? r = t : null != t && (r = {
                                cx: t,
                                cy: e,
                                r: n
                            }), this.el("circle", r)
                        }, t.image = function(t, e, n, r, a) {
                            var s = S("image", this.node);
                            if (o(t, "object") && "src" in t) s.attr(t);
                            else if (null != t) {
                                var u = {
                                    "xlink:href": t,
                                    preserveAspectRatio: "none"
                                };
                                null != e && null != n && (u.x = e, u.y = n), null != r && null != a ? (u.width = r, u.height = a) : le(t, function() {
                                    i(s.node, {
                                        width: this.offsetWidth,
                                        height: this.offsetHeight
                                    })
                                }), i(s.node, u)
                            }
                            return s
                        }, t.ellipse = function(t, e, n, r) {
                            var i = S("ellipse", this.node);
                            return o(t, "object") && "cx" in t ? i.attr(t) : null != t && i.attr({
                                cx: t,
                                cy: e,
                                rx: n,
                                ry: r
                            }), i
                        }, t.path = function(t) {
                            var e = S("path", this.node);
                            return o(t, "object") && !o(t, "array") ? e.attr(t) : t && e.attr({
                                d: t
                            }), e
                        }, t.group = t.g = function(e) {
                            var n = S("g", this.node);
                            n.add = x;
                            for (var r in t) t[q](r) && (n[r] = t[r]);
                            return 1 == arguments.length && e && !e.type ? n.attr(e) : arguments.length && n.add(Array.prototype.slice.call(arguments, 0)), n
                        }, t.text = function(t, e, n) {
                            var r = S("text", this.node);
                            return o(t, "object") ? r.attr(t) : null != t && r.attr({
                                x: t,
                                y: e,
                                text: n || ""
                            }), r
                        }, t.line = function(t, e, n, r) {
                            var i = S("line", this.node);
                            return o(t, "object") ? i.attr(t) : null != t && i.attr({
                                x1: t,
                                x2: n,
                                y1: e,
                                y2: r
                            }), i
                        }, t.polyline = function(t) {
                            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                            var e = S("polyline", this.node);
                            return o(t, "object") && !o(t, "array") ? e.attr(t) : null != t && e.attr({
                                points: t
                            }), e
                        }, t.polygon = function(t) {
                            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                            var e = S("polygon", this.node);
                            return o(t, "object") && !o(t, "array") ? e.attr(t) : null != t && e.attr({
                                points: t
                            }), e
                        },
                        function() {
                            t.gradient = function(t) {
                                return F(this.defs, t)
                            }, t.gradientLinear = function(t, e, n, r) {
                                return _(this.defs, t, e, n, r)
                            }, t.gradientRadial = function(t, e, n, r, i) {
                                return N(this.defs, t, e, n, r, i)
                            }, t.toString = function() {
                                var t, e = j.doc.createDocumentFragment(),
                                    n = j.doc.createElement("div"),
                                    r = this.node.cloneNode(!0);
                                return e.appendChild(n), n.appendChild(r), i(r, {
                                    xmlns: ae
                                }), t = n.innerHTML, e.removeChild(e.firstChild), t
                            }, t.clear = function() {
                                for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName && e.parentNode.removeChild(e), e = t
                            }
                        }()
                }(k.prototype), r.ajax = function(t, n, r, i) {
                    var a = new XMLHttpRequest,
                        s = ie();
                    if (a) {
                        if (o(n, "function")) i = r, r = n, n = null;
                        else if (o(n, "object")) {
                            var u = [];
                            for (var l in n) n.hasOwnProperty(l) && u.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l]));
                            n = u.join("&")
                        }
                        return a.open(n ? "POST" : "GET", t, !0), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function() {
                            4 == a.readyState && e("snap.ajax." + s + "." + a.status, i, a)
                        }, 4 == a.readyState ? a : (a.send(n), a)
                    }
                }, r.load = function(t, e, n) {
                    r.ajax(t, function(t) {
                        var i = r.parse(t.responseText);
                        n ? e.call(n, i) : e(i)
                    })
                }, e.on("snap.util.attr.mask", function(t) {
                    if (t instanceof b || t instanceof C) {
                        if (e.stop(), t instanceof C && 1 == t.node.childNodes.length && (t = t.node.firstChild, y(this).appendChild(t), t = B(t)), "mask" == t.type) var n = t;
                        else n = S("mask", y(this)), n.node.appendChild(t.node), !n.node.id && i(n.node, {
                            id: n.id
                        });
                        i(this.node, {
                            mask: ue(n.id)
                        })
                    }
                }),
                function(t) {
                    e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
                }(function(t) {
                    if (t instanceof b || t instanceof C) {
                        if (e.stop(), "clipPath" == t.type) var n = t;
                        else n = S("clipPath", y(this)), n.node.appendChild(t.node), !n.node.id && i(n.node, {
                            id: n.id
                        });
                        i(this.node, {
                            "clip-path": ue(n.id)
                        })
                    }
                }), e.on("snap.util.attr.fill", P("fill")), e.on("snap.util.attr.stroke", P("stroke"));
            var me = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            e.on("snap.util.grad.parse", function(t) {
                t = L(t);
                var e = t.match(me);
                if (!e) return null;
                var n = e[1],
                    r = e[2],
                    i = e[3];
                return r = r.split(/\s*,\s*/).map(function(t) {
                    return +t == t ? +t : t
                }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function(t) {
                    t = t.split(":");
                    var e = {
                        color: t[0]
                    };
                    return t[1] && (e.offset = t[1]), e
                }), {
                    type: n,
                    params: r,
                    stops: i
                }
            }), e.on("snap.util.attr.d", function(t) {
                e.stop(), o(t, "array") && o(t[0], "array") && (t = r.path.toString.call(t)), t = L(t), t.match(/[ruo]/i) && (t = r.path.toAbsolute(t)), i(this.node, {
                    d: t
                })
            })(-1), e.on("snap.util.attr.#text", function(t) {
                e.stop(), t = L(t);
                for (var n = j.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(n)
            })(-1), e.on("snap.util.attr.path", function(t) {
                e.stop(), this.attr({
                    d: t
                })
            })(-1), e.on("snap.util.attr.viewBox", function(t) {
                var n;
                n = o(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : o(t, "array") ? t.join(" ") : t, i(this.node, {
                    viewBox: n
                }), e.stop()
            })(-1), e.on("snap.util.attr.transform", function(t) {
                this.transform(t), e.stop()
            })(-1), e.on("snap.util.attr.r", function(t) {
                "rect" == this.type && (e.stop(), i(this.node, {
                    rx: t,
                    ry: t
                }))
            })(-1), e.on("snap.util.attr.textpath", function(t) {
                if (e.stop(), "text" == this.type) {
                    var n, r, a;
                    if (!t && this.textPath) {
                        for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                        return r.remove(), void delete this.textPath
                    }
                    if (o(t, "string")) {
                        var s = y(this),
                            u = B(s.parentNode).path(t);
                        s.appendChild(u.node), n = u.id, u.attr({
                            id: n
                        })
                    } else t = B(t), t instanceof b && (n = t.attr("id"), n || (n = t.id, t.attr({
                        id: n
                    })));
                    if (n)
                        if (r = this.textPath, a = this.node, r) r.attr({
                            "xlink:href": "#" + n
                        });
                        else {
                            for (r = i("textPath", {
                                    "xlink:href": "#" + n
                                }); a.firstChild;) r.appendChild(a.firstChild);
                            a.appendChild(r), this.textPath = B(r)
                        }
                }
            })(-1), e.on("snap.util.attr.text", function(t) {
                if ("text" == this.type) {
                    for (var n = this.node, r = function(t) {
                            var e = i("tspan");
                            if (o(t, "array"))
                                for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                            else e.appendChild(j.doc.createTextNode(t));
                            return e.normalize && e.normalize(), e
                        }; n.firstChild;) n.removeChild(n.firstChild);
                    for (var a = r(t); a.firstChild;) n.appendChild(a.firstChild)
                }
                e.stop()
            })(-1);
            var xe = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            e.on("snap.util.attr", function(t) {
                    var n = e.nt(),
                        r = {};
                    n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
                    var o = n.replace(/-(\w)/gi, function(t, e) {
                            return e.toUpperCase()
                        }),
                        a = n.replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    xe[q](a) ? this.node.style[o] = null == t ? U : t : i(this.node, r)
                }), e.on("snap.util.getattr.transform", function() {
                    return e.stop(), this.transform()
                })(-1), e.on("snap.util.getattr.textpath", function() {
                    return e.stop(), this.textPath
                })(-1),
                function() {
                    function t(t) {
                        return function() {
                            e.stop();
                            var n = j.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + t);
                            return "none" == n ? n : r(j.doc.getElementById(n.match($)[1]))
                        }
                    }

                    function n(t) {
                        return function(n) {
                            e.stop();
                            var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                            if ("" == n || !n) return void(this.node.style[r] = "none");
                            if ("marker" == n.type) {
                                var o = n.node.id;
                                return o || i(n.node, {
                                    id: n.id
                                }), void(this.node.style[r] = ue(o))
                            }
                        }
                    }
                    e.on("snap.util.getattr.marker-end", t("end"))(-1), e.on("snap.util.getattr.markerEnd", t("end"))(-1), e.on("snap.util.getattr.marker-start", t("start"))(-1), e.on("snap.util.getattr.markerStart", t("start"))(-1), e.on("snap.util.getattr.marker-mid", t("mid"))(-1), e.on("snap.util.getattr.markerMid", t("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
                }(), e.on("snap.util.getattr.r", function() {
                    return "rect" == this.type && i(this.node, "rx") == i(this.node, "ry") ? (e.stop(), i(this.node, "rx")) : void 0
                })(-1), e.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        e.stop();
                        var t = E(this.node);
                        return 1 == t.length ? t[0] : t
                    }
                })(-1), e.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1), e.on("snap.util.getattr.viewBox", function() {
                    e.stop();
                    var t = i(this.node, "viewBox").split(Z);
                    return r._.box(+t[0], +t[1], +t[2], +t[3])
                })(-1), e.on("snap.util.getattr.points", function() {
                    var t = i(this.node, "points");
                    return e.stop(), t.split(Z)
                }), e.on("snap.util.getattr.path", function() {
                    var t = i(this.node, "d");
                    return e.stop(), t
                }), e.on("snap.util.getattr", function() {
                    var t = e.nt();
                    t = t.substring(t.lastIndexOf(".") + 1);
                    var n = t.replace(/[A-Z]/g, function(t) {
                        return "-" + t.toLowerCase()
                    });
                    return xe[q](n) ? j.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
                });
            var be = function(t) {
                var e = t.getBoundingClientRect(),
                    n = t.ownerDocument,
                    r = n.body,
                    i = n.documentElement,
                    o = i.clientTop || r.clientTop || 0,
                    a = i.clientLeft || r.clientLeft || 0,
                    s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                    u = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
                return {
                    y: s,
                    x: u
                }
            };
            return r.getElementByPoint = function(t, e) {
                var n = this,
                    r = (n.canvas, j.doc.elementFromPoint(t, e));
                if (j.win.opera && "svg" == r.tagName) {
                    var i = be(r),
                        o = r.createSVGRect();
                    o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
                    var a = r.getIntersectionList(o, null);
                    a.length && (r = a[a.length - 1])
                }
                return r ? B(r) : null
            }, r.plugin = function(t) {
                t(r, b, k, j)
            }, j.win.Snap = r, r
        }();
    return r.plugin(function(t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e) e[R](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }

        function r(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: D.min(n, r) / 2,
                r2: D.max(n, r) / 2,
                r0: D.sqrt(n * n + r * r) / 2,
                path: C(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }

        function i() {
            return this.join(",").replace(G, "$1")
        }

        function o(t) {
            var e = L(t);
            return e.toString = i, e
        }

        function a(t, e, n, r, i, o, a, s, l) {
            return null == l ? d(t, e, n, r, i, o, a, s) : u(t, e, n, r, i, o, a, s, p(t, e, n, r, i, o, a, s, l))
        }

        function s(n, r) {
            function i(t) {
                return +(+t).toFixed(3)
            }
            return t._.cacher(function(t, o, s) {
                t instanceof e && (t = t.attr("d")), t = N(t);
                for (var l, c, h, f, d, p = "", g = {}, v = 0, y = 0, m = t.length; m > y; y++) {
                    if (h = t[y], "M" == h[0]) l = +h[1], c = +h[2];
                    else {
                        if (f = a(l, c, h[1], h[2], h[3], h[4], h[5], h[6]), v + f > o) {
                            if (r && !g.start) {
                                if (d = a(l, c, h[1], h[2], h[3], h[4], h[5], h[6], o - v), p += ["C" + i(d.start.x), i(d.start.y), i(d.m.x), i(d.m.y), i(d.x), i(d.y)], s) return p;
                                g.start = p, p = ["M" + i(d.x), i(d.y) + "C" + i(d.n.x), i(d.n.y), i(d.end.x), i(d.end.y), i(h[5]), i(h[6])].join(), v += f, l = +h[5], c = +h[6];
                                continue
                            }
                            if (!n && !r) return d = a(l, c, h[1], h[2], h[3], h[4], h[5], h[6], o - v)
                        }
                        v += f, l = +h[5], c = +h[6]
                    }
                    p += h.shift() + h
                }
                return g.end = p, d = n ? v : r ? g : u(l, c, h[0], h[1], h[2], h[3], h[4], h[5], 1)
            }, null, t._.clone)
        }

        function u(t, e, n, r, i, o, a, s, u) {
            var l = 1 - u,
                c = U(l, 3),
                h = U(l, 2),
                f = u * u,
                d = f * u,
                p = c * t + 3 * h * u * n + 3 * l * u * u * i + d * a,
                g = c * e + 3 * h * u * r + 3 * l * u * u * o + d * s,
                v = t + 2 * u * (n - t) + f * (i - 2 * n + t),
                y = e + 2 * u * (r - e) + f * (o - 2 * r + e),
                m = n + 2 * u * (i - n) + f * (a - 2 * i + n),
                x = r + 2 * u * (o - r) + f * (s - 2 * o + r),
                b = l * t + u * n,
                w = l * e + u * r,
                C = l * i + u * a,
                S = l * o + u * s,
                k = 90 - 180 * D.atan2(v - m, y - x) / O;
            return {
                x: p,
                y: g,
                m: {
                    x: v,
                    y: y
                },
                n: {
                    x: m,
                    y: x
                },
                start: {
                    x: b,
                    y: w
                },
                end: {
                    x: C,
                    y: S
                },
                alpha: k
            }
        }

        function l(e, n, i, o, a, s, u, l) {
            t.is(e, "array") || (e = [e, n, i, o, a, s, u, l]);
            var c = _.apply(null, e);
            return r(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function c(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function h(t, e) {
            return t = r(t), e = r(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function f(t, e, n, r, i) {
            var o = -3 * e + 9 * n - 9 * r + 3 * i,
                a = t * o + 6 * e - 12 * n + 6 * r;
            return t * a - 3 * e + 3 * n
        }

        function d(t, e, n, r, i, o, a, s, u) {
            null == u && (u = 1), u = u > 1 ? 1 : 0 > u ? 0 : u;
            for (var l = u / 2, c = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; c > g; g++) {
                var v = l * h[g] + l,
                    y = f(v, t, n, i, a),
                    m = f(v, e, r, o, s),
                    x = y * y + m * m;
                p += d[g] * D.sqrt(x)
            }
            return l * p
        }

        function p(t, e, n, r, i, o, a, s, u) {
            if (!(0 > u || d(t, e, n, r, i, o, a, s) < u)) {
                var l, c = 1,
                    h = c / 2,
                    f = c - h,
                    p = .01;
                for (l = d(t, e, n, r, i, o, a, s, f); X(l - u) > p;) h /= 2, f += (u > l ? 1 : -1) * h, l = d(t, e, n, r, i, o, a, s, f);
                return f
            }
        }

        function g(t, e, n, r, i, o, a, s) {
            if (!(V(t, n) < I(i, a) || I(t, n) > V(i, a) || V(e, r) < I(o, s) || I(e, r) > V(o, s))) {
                var u = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
                    l = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
                    c = (t - n) * (o - s) - (e - r) * (i - a);
                if (c) {
                    var h = u / c,
                        f = l / c,
                        d = +h.toFixed(2),
                        p = +f.toFixed(2);
                    if (!(d < +I(t, n).toFixed(2) || d > +V(t, n).toFixed(2) || d < +I(i, a).toFixed(2) || d > +V(i, a).toFixed(2) || p < +I(e, r).toFixed(2) || p > +V(e, r).toFixed(2) || p < +I(o, s).toFixed(2) || p > +V(o, s).toFixed(2))) return {
                        x: h,
                        y: f
                    }
                }
            }
        }

        function v(t, e, n) {
            var r = l(t),
                i = l(e);
            if (!h(r, i)) return n ? 0 : [];
            for (var o = d.apply(0, t), a = d.apply(0, e), s = ~~(o / 5), c = ~~(a / 5), f = [], p = [], v = {}, y = n ? 0 : [], m = 0; s + 1 > m; m++) {
                var x = u.apply(0, t.concat(m / s));
                f.push({
                    x: x.x,
                    y: x.y,
                    t: m / s
                })
            }
            for (m = 0; c + 1 > m; m++) x = u.apply(0, e.concat(m / c)), p.push({
                x: x.x,
                y: x.y,
                t: m / c
            });
            for (m = 0; s > m; m++)
                for (var b = 0; c > b; b++) {
                    var w = f[m],
                        C = f[m + 1],
                        S = p[b],
                        k = p[b + 1],
                        B = X(C.x - w.x) < .001 ? "y" : "x",
                        T = X(k.x - S.x) < .001 ? "y" : "x",
                        M = g(w.x, w.y, C.x, C.y, S.x, S.y, k.x, k.y);
                    if (M) {
                        if (v[M.x.toFixed(4)] == M.y.toFixed(4)) continue;
                        v[M.x.toFixed(4)] = M.y.toFixed(4);
                        var A = w.t + X((M[B] - w[B]) / (C[B] - w[B])) * (C.t - w.t),
                            F = S.t + X((M[T] - S[T]) / (k[T] - S[T])) * (k.t - S.t);
                        A >= 0 && 1 >= A && F >= 0 && 1 >= F && (n ? y++ : y.push({
                            x: M.x,
                            y: M.y,
                            t1: A,
                            t2: F
                        }))
                    }
                }
            return y
        }

        function y(t, e) {
            return x(t, e)
        }

        function m(t, e) {
            return x(t, e, 1)
        }

        function x(t, e, n) {
            t = N(t), e = N(e);
            for (var r, i, o, a, s, u, l, c, h, f, d = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var y = t[p];
                if ("M" == y[0]) r = s = y[1], i = u = y[2];
                else {
                    "C" == y[0] ? (h = [r, i].concat(y.slice(1)), r = h[6], i = h[7]) : (h = [r, i, r, i, s, u, s, u], r = s, i = u);
                    for (var m = 0, x = e.length; x > m; m++) {
                        var b = e[m];
                        if ("M" == b[0]) o = l = b[1], a = c = b[2];
                        else {
                            "C" == b[0] ? (f = [o, a].concat(b.slice(1)), o = f[6], a = f[7]) : (f = [o, a, o, a, l, c, l, c], o = l, a = c);
                            var w = v(h, f, n);
                            if (n) d += w;
                            else {
                                for (var C = 0, S = w.length; S > C; C++) w[C].segment1 = p, w[C].segment2 = m, w[C].bez1 = h, w[C].bez2 = f;
                                d = d.concat(w)
                            }
                        }
                    }
                }
            }
            return d
        }

        function b(t, e, n) {
            var r = w(t);
            return c(r, e, n) && x(t, [
                ["M", e, n],
                ["H", r.x2 + 10]
            ], 1) % 2 == 1
        }

        function w(t) {
            var e = n(t);
            if (e.bbox) return L(e.bbox);
            if (!t) return r();
            t = N(t);
            for (var i, o = 0, a = 0, s = [], u = [], l = 0, c = t.length; c > l; l++)
                if (i = t[l], "M" == i[0]) o = i[1], a = i[2], s.push(o), u.push(a);
                else {
                    var h = _(o, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                    s = s.concat(h.min.x, h.max.x), u = u.concat(h.min.y, h.max.y), o = i[5], a = i[6]
                }
            var f = I.apply(0, s),
                d = I.apply(0, u),
                p = V.apply(0, s),
                g = V.apply(0, u),
                v = r(f, d, p - f, g - d);
            return e.bbox = L(v), v
        }

        function C(t, e, n, r, o) {
            if (o) return [
                ["M", t + o, e],
                ["l", n - 2 * o, 0],
                ["a", o, o, 0, 0, 1, o, o],
                ["l", 0, r - 2 * o],
                ["a", o, o, 0, 0, 1, -o, o],
                ["l", 2 * o - n, 0],
                ["a", o, o, 0, 0, 1, -o, -o],
                ["l", 0, 2 * o - r],
                ["a", o, o, 0, 0, 1, o, -o],
                ["z"]
            ];
            var a = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ];
            return a.toString = i, a
        }

        function S(t, e, n, r, o) {
            if (null == o && null == r && (r = n), null != o) var a = Math.PI / 180,
                s = t + n * Math.cos(-r * a),
                u = t + n * Math.cos(-o * a),
                l = e + n * Math.sin(-r * a),
                c = e + n * Math.sin(-o * a),
                h = [
                    ["M", s, l],
                    ["A", n, n, 0, +(o - r > 180), 0, u, c]
                ];
            else h = [
                ["M", t, e],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ];
            return h.toString = i, h
        }

        function k(e) {
            var r = n(e),
                a = String.prototype.toLowerCase;
            if (r.rel) return o(r.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [],
                u = 0,
                l = 0,
                c = 0,
                h = 0,
                f = 0;
            "M" == e[0][0] && (u = e[0][1], l = e[0][2], c = u, h = l, f++, s.push(["M", u, l]));
            for (var d = f, p = e.length; p > d; d++) {
                var g = s[d] = [],
                    v = e[d];
                if (v[0] != a.call(v[0])) switch (g[0] = a.call(v[0]), g[0]) {
                    case "a":
                        g[1] = v[1], g[2] = v[2], g[3] = v[3], g[4] = v[4], g[5] = v[5], g[6] = +(v[6] - u).toFixed(3), g[7] = +(v[7] - l).toFixed(3);
                        break;
                    case "v":
                        g[1] = +(v[1] - l).toFixed(3);
                        break;
                    case "m":
                        c = v[1], h = v[2];
                    default:
                        for (var y = 1, m = v.length; m > y; y++) g[y] = +(v[y] - (y % 2 ? u : l)).toFixed(3)
                } else {
                    g = s[d] = [], "m" == v[0] && (c = v[1] + u, h = v[2] + l);
                    for (var x = 0, b = v.length; b > x; x++) s[d][x] = v[x]
                }
                var w = s[d].length;
                switch (s[d][0]) {
                    case "z":
                        u = c, l = h;
                        break;
                    case "h":
                        u += +s[d][w - 1];
                        break;
                    case "v":
                        l += +s[d][w - 1];
                        break;
                    default:
                        u += +s[d][w - 2], l += +s[d][w - 1]
                }
            }
            return s.toString = i, r.rel = o(s), s
        }

        function B(e) {
            var r = n(e);
            if (r.abs) return o(r.abs);
            if (q(e, "array") && q(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                ["M", 0, 0]
            ];
            var a, s = [],
                u = 0,
                l = 0,
                c = 0,
                h = 0,
                f = 0;
            "M" == e[0][0] && (u = +e[0][1], l = +e[0][2], c = u, h = l, f++, s[0] = ["M", u, l]);
            for (var d, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), v = f, y = e.length; y > v; v++) {
                if (s.push(d = []), p = e[v], a = p[0], a != a.toUpperCase()) switch (d[0] = a.toUpperCase(), d[0]) {
                        case "A":
                            d[1] = p[1], d[2] = p[2], d[3] = p[3], d[4] = p[4], d[5] = p[5], d[6] = +(p[6] + u), d[7] = +(p[7] + l);
                            break;
                        case "V":
                            d[1] = +p[1] + l;
                            break;
                        case "H":
                            d[1] = +p[1] + u;
                            break;
                        case "R":
                            for (var m = [u, l].concat(p.slice(1)), x = 2, b = m.length; b > x; x++) m[x] = +m[x] + u, m[++x] = +m[x] + l;
                            s.pop(), s = s.concat(E(m, g));
                            break;
                        case "O":
                            s.pop(), m = S(u, l, p[1], p[2]), m.push(m[0]), s = s.concat(m);
                            break;
                        case "U":
                            s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                            break;
                        case "M":
                            c = +p[1] + u, h = +p[2] + l;
                        default:
                            for (x = 1, b = p.length; b > x; x++) d[x] = +p[x] + (x % 2 ? u : l)
                    } else if ("R" == a) m = [u, l].concat(p.slice(1)), s.pop(), s = s.concat(E(m, g)), d = ["R"].concat(p.slice(-2));
                    else if ("O" == a) s.pop(), m = S(u, l, p[1], p[2]), m.push(m[0]), s = s.concat(m);
                else if ("U" == a) s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                else
                    for (var w = 0, C = p.length; C > w; w++) d[w] = p[w];
                if (a = a.toUpperCase(), "O" != a) switch (d[0]) {
                    case "Z":
                        u = c, l = h;
                        break;
                    case "H":
                        u = d[1];
                        break;
                    case "V":
                        l = d[1];
                        break;
                    case "M":
                        c = d[d.length - 2], h = d[d.length - 1];
                    default:
                        u = d[d.length - 2], l = d[d.length - 1]
                }
            }
            return s.toString = i, r.abs = o(s), s
        }

        function T(t, e, n, r) {
            return [t, e, n, r, n, r]
        }

        function M(t, e, n, r, i, o) {
            var a = 1 / 3,
                s = 2 / 3;
            return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
        }

        function A(e, n, r, i, o, a, s, u, l, c) {
            var h, f = 120 * O / 180,
                d = O / 180 * (+o || 0),
                p = [],
                g = t._.cacher(function(t, e, n) {
                    var r = t * D.cos(n) - e * D.sin(n),
                        i = t * D.sin(n) + e * D.cos(n);
                    return {
                        x: r,
                        y: i
                    }
                });
            if (c) k = c[0], B = c[1], C = c[2], S = c[3];
            else {
                h = g(e, n, -d), e = h.x, n = h.y, h = g(u, l, -d), u = h.x, l = h.y;
                var v = (D.cos(O / 180 * o), D.sin(O / 180 * o), (e - u) / 2),
                    y = (n - l) / 2,
                    m = v * v / (r * r) + y * y / (i * i);
                m > 1 && (m = D.sqrt(m), r = m * r, i = m * i);
                var x = r * r,
                    b = i * i,
                    w = (a == s ? -1 : 1) * D.sqrt(X((x * b - x * y * y - b * v * v) / (x * y * y + b * v * v))),
                    C = w * r * y / i + (e + u) / 2,
                    S = w * -i * v / r + (n + l) / 2,
                    k = D.asin(((n - S) / i).toFixed(9)),
                    B = D.asin(((l - S) / i).toFixed(9));
                k = C > e ? O - k : k, B = C > u ? O - B : B, 0 > k && (k = 2 * O + k), 0 > B && (B = 2 * O + B), s && k > B && (k -= 2 * O), !s && B > k && (B -= 2 * O)
            }
            var T = B - k;
            if (X(T) > f) {
                var M = B,
                    F = u,
                    _ = l;
                B = k + f * (s && B > k ? 1 : -1), u = C + r * D.cos(B), l = S + i * D.sin(B), p = A(u, l, r, i, o, 0, s, F, _, [B, M, C, S])
            }
            T = B - k;
            var N = D.cos(k),
                P = D.sin(k),
                E = D.cos(B),
                j = D.sin(B),
                q = D.tan(T / 4),
                L = 4 / 3 * r * q,
                R = 4 / 3 * i * q,
                G = [e, n],
                z = [e + L * P, n - R * N],
                I = [u + L * j, l - R * E],
                V = [u, l];
            if (z[0] = 2 * G[0] - z[0], z[1] = 2 * G[1] - z[1], c) return [z, I, V].concat(p);
            p = [z, I, V].concat(p).join().split(",");
            for (var U = [], H = 0, Y = p.length; Y > H; H++) U[H] = H % 2 ? g(p[H - 1], p[H], d).y : g(p[H], p[H + 1], d).x;
            return U
        }

        function F(t, e, n, r, i, o, a, s, u) {
            var l = 1 - u;
            return {
                x: U(l, 3) * t + 3 * U(l, 2) * u * n + 3 * l * u * u * i + U(u, 3) * a,
                y: U(l, 3) * e + 3 * U(l, 2) * u * r + 3 * l * u * u * o + U(u, 3) * s
            }
        }

        function _(t, e, n, r, i, o, a, s) {
            var u, l = i - 2 * n + t - (a - 2 * i + n),
                c = 2 * (n - t) - 2 * (i - n),
                h = t - n,
                f = (-c + D.sqrt(c * c - 4 * l * h)) / 2 / l,
                d = (-c - D.sqrt(c * c - 4 * l * h)) / 2 / l,
                p = [e, s],
                g = [t, a];
            return X(f) > "1e12" && (f = .5), X(d) > "1e12" && (d = .5), f > 0 && 1 > f && (u = F(t, e, n, r, i, o, a, s, f), g.push(u.x), p.push(u.y)), d > 0 && 1 > d && (u = F(t, e, n, r, i, o, a, s, d), g.push(u.x), p.push(u.y)), l = o - 2 * r + e - (s - 2 * o + r), c = 2 * (r - e) - 2 * (o - r), h = e - r, f = (-c + D.sqrt(c * c - 4 * l * h)) / 2 / l, d = (-c - D.sqrt(c * c - 4 * l * h)) / 2 / l, X(f) > "1e12" && (f = .5), X(d) > "1e12" && (d = .5), f > 0 && 1 > f && (u = F(t, e, n, r, i, o, a, s, f), g.push(u.x), p.push(u.y)), d > 0 && 1 > d && (u = F(t, e, n, r, i, o, a, s, d), g.push(u.x), p.push(u.y)), {
                min: {
                    x: I.apply(0, g),
                    y: I.apply(0, p)
                },
                max: {
                    x: V.apply(0, g),
                    y: V.apply(0, p)
                }
            }
        }

        function N(t, e) {
            var r = !e && n(t);
            if (!e && r.curve) return o(r.curve);
            for (var i = B(t), a = e && B(e), s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, u = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, l = (function(t, e) {
                    var n, r;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"].concat(A.apply(0, [e.x, e.y].concat(t.slice(1))));
                            break;
                        case "S":
                            n = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = ["C", n, r].concat(t.slice(1));
                            break;
                        case "T":
                            e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"].concat(M(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"].concat(M(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), c = function(t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                        t.splice(e, 1), d = V(i.length, a && a.length || 0)
                    }
                }, h = function(t, e, n, r, o) {
                    t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], d = V(i.length, a && a.length || 0))
                }, f = 0, d = V(i.length, a && a.length || 0); d > f; f++) {
                i[f] = l(i[f], s), c(i, f), a && (a[f] = l(a[f], u)), a && c(a, f), h(i, a, s, u, f), h(a, i, u, s, f);
                var p = i[f],
                    g = a && a[f],
                    v = p.length,
                    y = a && g.length;
                s.x = p[v - 2], s.y = p[v - 1], s.bx = z(p[v - 4]) || s.x, s.by = z(p[v - 3]) || s.y, u.bx = a && (z(g[y - 4]) || u.x), u.by = a && (z(g[y - 3]) || u.y), u.x = a && g[y - 2], u.y = a && g[y - 1]
            }
            return a || (r.curve = o(i)), a ? [i, a] : i
        }

        function P(t, e) {
            if (!e) return t;
            var n, r, i, o, a, s, u;
            for (t = N(t), i = 0, a = t.length; a > i; i++)
                for (u = t[i], o = 1, s = u.length; s > o; o += 2) n = e.x(u[o], u[o + 1]), r = e.y(u[o], u[o + 1]), u[o] = n, u[o + 1] = r;
            return t
        }

        function E(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                }, {
                    x: +t[r],
                    y: +t[r + 1]
                }, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? o[3] = {
                    x: +t[0],
                    y: +t[1]
                } : i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }
        var j = e.prototype,
            q = t.is,
            L = t._.clone,
            R = "hasOwnProperty",
            G = /,?([a-z]),?/gi,
            z = parseFloat,
            D = Math,
            O = D.PI,
            I = D.min,
            V = D.max,
            U = D.pow,
            X = D.abs,
            H = s(1),
            Y = s(),
            $ = s(0, 1),
            W = t._unit2px,
            Z = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = W(t);
                    return S(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = W(t);
                    return S(e.cx, e.cy, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = W(t);
                    return C(e.x, e.y, e.width, e.height, e.rx, e.ry)
                },
                image: function(t) {
                    var e = W(t);
                    return C(e.x, e.y, e.width, e.height)
                },
                text: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                },
                g: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                },
                symbol: function(t) {
                    var e = t.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                },
                line: function(t) {
                    return "M" + [t.attr("x1"), t.attr("y1"), t.attr("x2"), t.attr("y2")]
                },
                polyline: function(t) {
                    return "M" + t.attr("points")
                },
                polygon: function(t) {
                    return "M" + t.attr("points") + "z"
                },
                svg: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                },
                deflt: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                }
            };
        t.path = n, t.path.getTotalLength = H, t.path.getPointAtLength = Y, t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return $(t, e).end;
            var r = $(t, n, 1);
            return e ? $(r, e).end : r
        }, j.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, j.getPointAtLength = function(t) {
            return Y(this.attr("d"), t)
        }, j.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = r, t.path.findDotsAtSegment = u, t.path.bezierBBox = l, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = h, t.path.intersection = y, t.path.intersectionNumber = m, t.path.isPointInside = b, t.path.getBBox = w, t.path.get = Z, t.path.toRelative = k, t.path.toAbsolute = B, t.path.toCubic = N, t.path.map = P, t.path.toString = i, t.path.clone = o
    }), r.plugin(function(t) {
        var e = Math.max,
            n = Math.min,
            r = function(t) {
                if (this.items = [], this.length = 0, this.type = "set", t)
                    for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            i = r.prototype;
        i.push = function() {
            for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, i.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, i.forEach = function(t, e) {
            for (var n = 0, r = this.items.length; r > n; n++)
                if (t.call(e, this.items[n], n) === !1) return this;
            return this
        }, i.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, i.attr = function(t) {
            for (var e = 0, n = this.items.length; n > e; e++) this.items[e].attr(t);
            return this
        }, i.clear = function() {
            for (; this.length;) this.pop()
        }, i.splice = function(t, i) {
            t = 0 > t ? e(this.length + t, 0) : t, i = e(0, n(this.length - t, i));
            var o, a = [],
                s = [],
                u = [];
            for (o = 2; o < arguments.length; o++) u.push(arguments[o]);
            for (o = 0; i > o; o++) s.push(this[t + o]);
            for (; o < this.length - t; o++) a.push(this[t + o]);
            var l = u.length;
            for (o = 0; o < l + a.length; o++) this.items[t + o] = this[t + o] = l > o ? u[o] : a[o - l];
            for (o = this.items.length = this.length -= i - l; this[o];) delete this[o++];
            return new r(s)
        }, i.exclude = function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, i.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, i.getBBox = function() {
            for (var t = [], r = [], i = [], o = [], a = this.items.length; a--;)
                if (!this.items[a].removed) {
                    var s = this.items[a].getBBox();
                    t.push(s.x), r.push(s.y), i.push(s.x + s.width), o.push(s.y + s.height)
                }
            return t = n.apply(0, t), r = n.apply(0, r), i = e.apply(0, i), o = e.apply(0, o), {
                x: t,
                y: r,
                x2: i,
                y2: o,
                width: i - t,
                height: o - r,
                cx: t + (i - t) / 2,
                cy: r + (o - r) / 2
            }
        }, i.clone = function(t) {
            t = new r;
            for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
            return t
        }, i.toString = function() {
            return "Snapâ€˜s set"
        }, i.type = "set", t.set = function() {
            var t = new r;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), r.plugin(function(t, e) {
        function n(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function r(e, r, i) {
            r = h(r).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], r = t.parseTransformString(r) || [];
            for (var o, a, l, c, f = Math.max(e.length, r.length), d = [], p = [], g = 0; f > g; g++) {
                if (l = e[g] || n(r[g]), c = r[g] || n(l), l[0] != c[0] || "r" == l[0].toLowerCase() && (l[2] != c[2] || l[3] != c[3]) || "s" == l[0].toLowerCase() && (l[3] != c[3] || l[4] != c[4])) {
                    e = t._.transform2matrix(e, i()), r = t._.transform2matrix(r, i()), d = [
                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                    ], p = [
                        ["m", r.a, r.b, r.c, r.d, r.e, r.f]
                    ];
                    break
                }
                for (d[g] = [], p[g] = [], o = 0, a = Math.max(l.length, c.length); a > o; o++) o in l && (d[g][o] = l[o]), o in c && (p[g][o] = c[o])
            }
            return {
                from: u(d),
                to: u(p),
                f: s(d)
            }
        }

        function i(t) {
            return t
        }

        function o(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }

        function a(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function s(t) {
            var e, n, r, i, o, a, s = 0,
                u = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s++ + "]";
                o += a + "]", u[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + u + "])")
        }

        function u(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++)
                for (var i = 1, o = t[n].length; o > i; i++) e.push(t[n][i]);
            return e
        }
        var l = {},
            c = /[a-z]+$/i,
            h = String;
        l.stroke = l.fill = "colour", e.prototype.equal = function(e, n) {
            var f, d, p = h(this.attr(e) || ""),
                g = this;
            if (p == +p && n == +n) return {
                from: +p,
                to: +n,
                f: i
            };
            if ("colour" == l[e]) return f = t.color(p), d = t.color(n), {
                from: [f.r, f.g, f.b, f.opacity],
                to: [d.r, d.g, d.b, d.opacity],
                f: a
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), r(p, n, function() {
                return g.getBBox(1)
            });
            if ("d" == e || "path" == e) return f = t.path.toCubic(p, n), {
                from: u(f[0]),
                to: u(f[1]),
                f: s(f[0])
            };
            if ("points" == e) return f = h(p).split(","), d = h(n).split(","), {
                from: f,
                to: d,
                f: function(t) {
                    return t
                }
            };
            var v = p.match(c),
                y = h(n).match(c);
            return v && v == y ? {
                from: parseFloat(p),
                to: parseFloat(n),
                f: o(v)
            } : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: i
            }
        }
    }), r.plugin(function(t, n, r, i) {
        for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), u = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, c = function(t) {
                var e = "y" == t ? "scrollTop" : "scrollLeft";
                return i.doc.documentElement[e] || i.doc.body[e]
            }, h = function() {
                this.returnValue = !1
            }, f = function() {
                return this.originalEvent.preventDefault()
            }, d = function() {
                this.cancelBubble = !0
            }, p = function() {
                return this.originalEvent.stopPropagation()
            }, g = function() {
                return i.doc.addEventListener ? function(t, e, n, r) {
                    var i = s && l[e] ? l[e] : e,
                        o = function(i) {
                            var o = c("y"),
                                u = c("x");
                            if (s && l[a](e))
                                for (var h = 0, d = i.targetTouches && i.targetTouches.length; d > h; h++)
                                    if (i.targetTouches[h].target == t || t.contains(i.targetTouches[h].target)) {
                                        var g = i;
                                        i = i.targetTouches[h], i.originalEvent = g, i.preventDefault = f, i.stopPropagation = p;
                                        break
                                    }
                            var v = i.clientX + u,
                                y = i.clientY + o;
                            return n.call(r, i, v, y)
                        };
                    return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1),
                        function() {
                            return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                        }
                } : i.doc.attachEvent ? function(t, e, n, r) {
                    var o = function(t) {
                        t = t || i.win.event;
                        var e = c("y"),
                            o = c("x"),
                            a = t.clientX + o,
                            s = t.clientY + e;
                        return t.preventDefault = t.preventDefault || h, t.stopPropagation = t.stopPropagation || d, n.call(r, t, a, s)
                    };
                    t.attachEvent("on" + e, o);
                    var a = function() {
                        return t.detachEvent("on" + e, o), !0
                    };
                    return a
                } : void 0
            }(), v = [], y = function(n) {
                for (var r, i = n.clientX, o = n.clientY, a = c("y"), u = c("x"), l = v.length; l--;) {
                    if (r = v[l], s) {
                        for (var h, f = n.touches && n.touches.length; f--;)
                            if (h = n.touches[f], h.identifier == r.el._drag.id || r.el.node.contains(h.target)) {
                                i = h.clientX, o = h.clientY, (n.originalEvent ? n.originalEvent : n).preventDefault();
                                break
                            }
                    } else n.preventDefault(); {
                        var d = r.el.node;
                        t._.glob, d.nextSibling, d.parentNode, d.style.display
                    }
                    i += u, o += a, e("snap.drag.move." + r.el.id, r.move_scope || r.el, i - r.el._drag.x, o - r.el._drag.y, i, o, n)
                }
            }, m = function(n) {
                t.unmousemove(y).unmouseup(m);
                for (var r, i = v.length; i--;) r = v[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
                v = []
            }, x = u.length; x--;) ! function(e) {
            t[e] = o[e] = function(n, r) {
                return t.is(n, "function") && (this.events = this.events || [], this.events.push({
                    name: e,
                    f: n,
                    unbind: g(this.shape || this.node || i.doc, e, n, r || this)
                })), this
            }, t["un" + e] = o["un" + e] = function(t) {
                for (var n = this.events || [], r = n.length; r--;)
                    if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                return this
            }
        }(u[x]);
        o.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, o.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var b = [];
        o.drag = function(n, r, i, o, a, s) {
            function u(u, l, c) {
                (u.originalEvent || u).preventDefault(), this._drag.x = l, this._drag.y = c, this._drag.id = u.identifier, !v.length && t.mousemove(y).mouseup(m), v.push({
                    el: this,
                    move_scope: o,
                    start_scope: a,
                    end_scope: s
                }), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n), i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, a || o || this, l, c, u)
            }
            if (!arguments.length) {
                var l;
                return this.drag(function(t, e) {
                    this.attr({
                        transform: l + (l ? "T" : "t") + [t, e]
                    })
                }, function() {
                    l = this.transform().local
                })
            }
            return this._drag = {}, b.push({
                el: this,
                start: u
            }), this.mousedown(u), this
        }, o.undrag = function() {
            for (var n = b.length; n--;) b[n].el == this && (this.unmousedown(b[n].start), b.splice(n, 1), e.unbind("snap.drag.*." + this.id));
            return !b.length && t.unmousemove(y).unmouseup(m), this
        }
    }), r.plugin(function(t, n, r) {
        var i = (n.prototype, r.prototype),
            o = /^\s*url\((.+)\)/,
            a = String,
            s = t._.$;
        t.filter = {}, i.filter = function(e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(a(e)),
                o = t._.id(),
                u = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
            return s(u, {
                id: o,
                filterUnits: "userSpaceOnUse"
            }), u.appendChild(i.node), r.defs.appendChild(u), new n(u)
        }, e.on("snap.util.getattr.filter", function() {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
                var r = a(n).match(o);
                return r && t.select(r[1])
            }
        }), e.on("snap.util.attr.filter", function(r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (s(r.node, {
                    id: r.id
                }), i = r.id), s(this.node, {
                    filter: t.url(i)
                })
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function(e, n) {
            null == e && (e = 2);
            var r = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: r
            })
        }, t.filter.blur.toString = function() {
            return this()
        }, t.filter.shadow = function(e, n, r, i) {
            return i = i || "#000", null == r && (r = 4), "string" == typeof r && (i = r, r = 4), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: n,
                blur: r
            })
        }, t.filter.shadow.toString = function() {
            return this()
        }, t.filter.grayscale = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function() {
            return this()
        }, t.filter.sepia = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function() {
            return this()
        }, t.filter.saturate = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        }, t.filter.saturate.toString = function() {
            return this()
        }, t.filter.hueRotate = function(e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        }, t.filter.hueRotate.toString = function() {
            return this()
        }, t.filter.invert = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function() {
            return this()
        }, t.filter.brightness = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        }, t.filter.brightness.toString = function() {
            return this()
        }, t.filter.contrast = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function() {
            return this()
        }
    }), r
});
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : t.textFit = e()
}("object" == typeof global ? global : this, function() {
    "use strict";
    return function(t, e) {
        function n(t) {
            if (!r(t) || !s.reProcess && t.getAttribute("textFitted")) return !1;
            s.reProcess || t.setAttribute("textFitted", 1);
            var e, n, d, c, p, u, f;
            if (d = t.innerHTML, c = o(t), n = i(t), !c || !s.widthOnly && !n) return window.console && !s.suppressErrors && console.info(s.widthOnly ? "Set a static width on the target element " + t.outerHTML + " before using textFit!" : "Set a static height and width on the target element " + t.outerHTML + " before using textFit!"), !1; - 1 === d.indexOf("textFitted") ? (e = document.createElement("span"), e.className = "textFitted", e.style.display = "inline-block", e.innerHTML = d, t.innerHTML = "", t.appendChild(e)) : (e = t.querySelector("span.textFitted"), l(e, "textFitAlignVert") && (e.className = e.className.replace("textFitAlignVert", ""))), s.alignHoriz && (t.style["text-align"] = "center", e.style["text-align"] = "center");
            var g = s.multiLine;
            for (s.detectMultiLine && !g && e.offsetHeight >= 2 * parseInt(window.getComputedStyle(e)["font-size"], 10) && (g = !0), g || (t.style["white-space"] = "nowrap"), p = s.minFontSize + 1, f = s.maxFontSize + 1; f >= p;) u = parseInt((p + f) / 2, 10), e.style.fontSize = u + "px", e.offsetWidth <= c && (s.widthOnly || e.offsetHeight <= n) ? p = u + 1 : f = u - 1;
            if (e.style.fontSize = u - 1 + "px", s.alignVert) {
                a();
                var y = e.offsetHeight;
                "static" === window.getComputedStyle(t).position && (t.style.position = "relative"), l(e, "textFitAlignVert") || (e.className = e.className + " textFitAlignVert"), e.style.height = y + "px"
            }
        }

        function i(t) {
            var e = window.getComputedStyle(t, null);
            return t.clientHeight - parseInt(e.getPropertyValue("padding-top"), 10) - parseInt(e.getPropertyValue("padding-bottom"), 10)
        }

        function o(t) {
            var e = window.getComputedStyle(t, null);
            return t.clientWidth - parseInt(e.getPropertyValue("padding-left"), 10) - parseInt(e.getPropertyValue("padding-right"), 10)
        }

        function r(t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function l(t, e) {
            return (" " + t.className + " ").indexOf(" " + e + " ") > -1
        }

        function a() {
            if (!document.getElementById("textFitStyleSheet")) {
                var t = [".textFitAlignVert{", "position: absolute;", "top: 0; right: 0; bottom: 0; left: 0;", "margin: auto;", "}"].join(""),
                    e = document.createElement("style");
                e.type = "text/css", e.id = "textFitStyleSheet", e.innerHTML = t, document.body.appendChild(e)
            }
        }
        var s = {
            alignVert: !1,
            alignHoriz: !1,
            multiLine: !1,
            detectMultiLine: !0,
            minFontSize: 6,
            maxFontSize: 80,
            reProcess: !0,
            widthOnly: !1,
            suppressErrors: !1
        };
        for (var d in e) e.hasOwnProperty(d) && (s[d] = e[d]);
        "function" == typeof t.toArray && (t = t.toArray());
        var c = Object.prototype.toString.call(t);
        "[object Array]" !== c && "[object NodeList]" !== c && (t = [t]);
        for (var p = 0; p < t.length; p++) n(t[p])
    }
});
