! function(e) {
    var n = new ScrollMagic.Controller,
        r = ["#slide01", "#slide02", "#slide03", "#slide04", "#slide05", "#slide06", "#slide07", "#slide08", "#slide09", "#slide010", "#slide011", "#slide012", "#slide013", "#slide014", "#slide015", "#slide016", "#slide017", "#slide018", "#slide019"],
        t = ["#slide01 header", "#slide02 header", "#slide03 header", "#slide04 header", "#slide05 header", "#slide06 header", "#slide07 header", "#slide08 header", "#slide09 header", "#slide010 header", "#slide011 header", "#slide012 header", "#slide013 header", "#slide014 header", "#slide015 header", "#slide016 header", "#slide017 header", "#slide018 header", "#slide019 header"],
        c = ["#cb01", "#cb02", "#cb03"];
    Modernizr.touch || (t.forEach(function(e, r) {
        {
            var t = r + 1;
            new ScrollMagic.Scene({
                triggerElement: e,
                offset: -95
            }).setClassToggle("#slide0" + t, "is-active").addTo(n)
        }
    }), c.forEach(function(r, t) {
        {
            var c = e(r).attr("id");
            new ScrollMagic.Scene({
                triggerElement: r,
                offset: -195
            }).setClassToggle("#" + c, "is-active").on("enter", function(n) {
                e("nav").attr("class", "is-light")
            }).addTo(n)
        }
    }), r.forEach(function(r, t) {
        new ScrollMagic.Scene({
            triggerElement: r
        }).on("enter", function(n) {
            e("nav").removeAttr("class")
        }).addTo(n)
    }))
}(jQuery);
