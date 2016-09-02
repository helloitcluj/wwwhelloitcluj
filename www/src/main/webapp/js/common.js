var helloit = helloit || {};


helloit.createHeader = function(title, subTitle) {

    return $('<div class="row header"></div>')
        .append($('<div class="logo"><div></div></div>'))
        .append($('<div class="title"></div>')
            .append(title)
        )
        .append($('<div class="subtitle"></div>')
            .append(subTitle)
        );

};


helloit.createNavbar = function () {

    return $('\
    <div class="row">\
    <div class="col-md-3"></div>\
    <nav class="navbar navbar-light col-md-9 menu">\
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">\
            &#9776;\
        </button>\
        <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">\
          <ul class="nav navbar-nav">\
            <li class="nav-item menuitem">\
              <a class="nav-link" href="index.html">Junior Java WEB programozó képzés</a>\
            </li>\
            <li class="nav-item menuitem">\
              <a class="nav-link" href="#">Kapcsolat</a>\
            </li>\
            <li class="nav-item menuitem">\
              <a class="nav-link" href="#">Galéria</a>\
            </li>\
            <li class="nav-item menuitem">\
              <a class="nav-link" href="#">Rólunk</a>\
            </li>\
          </ul>\
        </div>\
    </nav>\
    ');
};
