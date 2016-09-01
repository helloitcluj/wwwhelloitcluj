var helloit = helloit || {};

helloit.createNavbar = function () {

    return $('\
    <nav class="navbar navbar-light bg-faded main-navbar hidden-xl-down">\
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">\
            &#9776;\
        </button>\
        <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">\
        </div>\
    </nav>');
};

