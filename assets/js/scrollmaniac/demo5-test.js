! function(e) {
    function o(e, o) {
        l++, d = l / c, TweenLite.to(u, .7, {
            progress: d,
            ease: Linear.easeNone
        })
    }

    function t() {
        d = Math.round(100 * u.progress()), e(".txt-perc").text(d + "%")
    }

    function a() {
        var o = new TimelineMax;
        return o.to(e(".progress"), .3, {
            y: 100,
            autoAlpha: 0,
            ease: Back.easeIn
        }).to(e(".txt-perc"), .3, {
            y: 100,
            autoAlpha: 0,
            ease: Back.easeIn
        }, .1).set(e("body"), {
            className: "-=is-loading"
        }).set(e("#intro"), {
            className: "+=is-loaded"
        }).to(e("#preloader"), .7, {
            yPercent: 100,
            ease: Power4.easeInOut
        }).set(e("#preloader"), {
            className: "+=is-hidden"
        }).from(e("#intro .title"), 1, {
            autoAlpha: 0,
            ease: Power1.easeOut
        }, "-=0.2").from(e("#intro p"), .7, {
            autoAlpha: 0,
            ease: Power1.easeOut
        }, "+=0.2").from(e(".scroll-hint"), .3, {
            y: -20,
            autoAlpha: 0,
            ease: Power1.easeOut
        }, "+=0.1"), o
    }
    var s = new ScrollMagic.Controller,
        r = ["#slide01", "#slide02", "#slide03"],
        n = ["#slide01 header", "#slide02 header", "#slide03 header"],
        i = ["#cb01", "#cb02", "#cb03"],
        l = 0,
        c = e(".bcg").length,
        d = 0;
    e(".bcg").imagesLoaded({
        background: !0
    }).progress(function(e, t) {
        o()
    });
    var u = new TimelineMax({
        paused: !0,
        onUpdate: t,
        onComplete: a
    });
    if (u.to(e(".progress span"), 1, {
            width: 100,
            ease: Linear.easeNone
        }), !Modernizr.touch) {
        n.forEach(function(e, o) {
            {
                var t = o + 1;
                new ScrollMagic.Scene({
                    triggerElement: e,
                    offset: -95
                }).setClassToggle("#slide0" + t, "is-active").addTo(s)
            }
        }), i.forEach(function(o, t) {
            {
                var a = e(o).attr("id");
                new ScrollMagic.Scene({
                    triggerElement: o,
                    triggerHook: .75
                }).setClassToggle("#" + a, "is-active").on("enter", function(o) {
                    e("nav").attr("class", "is-light")
                }).addTo(s)
            }
        }), r.forEach(function(o, t) {
            new ScrollMagic.Scene({
                triggerElement: o
            }).on("enter", function(o) {
                e("nav").removeAttr("class")
            }).addTo(s)
        }), r.forEach(function(o, t) {
            {
                var a = e(o).find(".bcg");
                new ScrollMagic.Scene({
                    triggerElement: o,
                    triggerHook: 1,
                    duration: "100%"
                }).setTween(TweenMax.from(a, 1, {
                    y: "-40%",
                    autoAlpha: .3,
                    ease: Power0.easeOut
                })).addTo(s)
            }
        });
        var h = new TimelineMax;
        h.to(e("#intro header, .scroll-hint"), .2, {
            autoAlpha: 0,
            ease: Power1.easeNone
        }).to(e("#intro"), .7, {
            autoAlpha: .5,
            ease: Power1.easeNone
        }, 0);
        var g = (new ScrollMagic.Scene({
            triggerElement: "#intro",
            triggerHook: 0,
            duration: "100%"
        }).setTween(h).addTo(s), new TimelineMax);
        g.to(e("#slide01 h1"), .2, {
            autoAlpha: 0,
            ease: Power1.easeNone
        }, 1.5).to(e("#slide01 section"), .2, {
            autoAlpha: 0,
            ease: Power1.easeNone
        }, 1.5).set(e("#slide01 h1"), {
            text: "Rock Climbing"
        }).set(e("#slide01 p"), {
            text: "Remember that time spent on a rock climb isn't subtracted from your life span."
        }).fromTo(e("#slide01 h1"), .7, {
            y: "+=20"
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Power1.easeOut
        }, "+=0.4").fromTo(e("#slide01 section"), .6, {
            y: "+=20"
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Power1.easeOut
        }, "-=0.6").set(e("#slide01 h1"), {
            autoAlpha: 1
        }, "+=2");
        var w = (new ScrollMagic.Scene({
            triggerElement: "#slide01",
            triggerHook: 0,
            duration: "250%"
        }).setPin("#slide01").setTween(g).addTo(s), new TimelineMax);
        w.to(e("#slide02 h1"), .2, {
            autoAlpha: 0,
            ease: Power1.easeNone
        }, 1.5).to(e("#slide02 section"), .2, {
            autoAlpha: 0,
            ease: Power1.easeNone
        }, 1.5).set(e("#slide02 h1"), {
            text: "The Memories"
        }).set(e("#slide02 p"), {
            text: "You never climb the same mountain twice, not even in memory. Memory rebuilds the mountain, changes the weather, retells the jokes, remakes all the moves."
        }).to(e("#slide02 .bcg"), .6, {
            scale: 1.2,
            transformOrigin: "0% 0%",
            ease: Power0.easeNone
        }).fromTo(e("#slide02 h1"), .7, {
            y: "+=20"
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Power1.easeOut
        }, "+=0.4").fromTo(e("#slide02 section"), .6, {
            y: "+=20"
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Power1.easeOut
        }, "-=0.6").set(e("#slide02 h1"), {
            autoAlpha: 1
        }, "+=2.5"); {
            new ScrollMagic.Scene({
                triggerElement: "#slide02",
                triggerHook: 0,
                duration: "300%"
            }).setPin("#slide02").setTween(w).addTo(s)
        }
        s.scrollTo(function(e) {
            TweenMax.to(window, 1, {
                scrollTo: {
                    y: e
                },
                ease: Power1.easeInOut
            })
        }), e(document).on("click", "a[href^='#']", function(o) {
            var t = e(this).attr("href");
            e(t).length > 0 && (o.preventDefault(), s.scrollTo(t), window.history && window.history.pushState && history.pushState("", document.title, t))
        })
    }
}(jQuery);
