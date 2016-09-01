var helloit = helloit || {};


helloit.createHeader = function(title, subTitle) {

    return $('<div class="row header"></div>')
        .append($('<div class="logo"></div>'))
        .append($('<div class="title"></div>')
            .append(title)
        )
        .append($('<div class="subtitle"></div>')
            .append(subTitle)
        );

};


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

