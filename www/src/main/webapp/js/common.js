var helloit = helloit || {};


helloit.createHeader = function(title, subTitle) {

    return $('<div class="row header"></div>')
        .append($('<div class="col-xs-4 col-md-5"></div>'))
        .append($('<div class="col-xs-4 col-md-2 logo"></div>')
            .append($('<div><div></div></div>'))
        )
        .append($('<div class="col-xs-4 col-md-2"></div>')
            .append(helloit.createLanguageChooser())
        )
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="title"></div>')
            .append(title)
        )
        .append($('<div class="subtitle"></div>')
            .append(subTitle)
        );

};


helloit.createLanguageChooser = function() {
    return $('\
    <div class="language-chooser pull-xs-right">\
    <span>Magyar</span>\
    <div>\
        <button type="button" role="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
            <span class="chevron"></span>\
        </button>\
        <ul class="dropdown-menu">\
            <li><a href="#">Română</a></li>\
            <li><a href="#">English</a></li>\
        </ul>\
    </div>\
    </div>\
    ');
};


helloit.createNavbar = function () {

    var $data = $([
        {ref: 'index.html', caption: 'Junior Java WEB programozó képzés'},
        {ref: 'index.html', caption: 'Kapcsolat'},
        {ref: 'index.html', caption: 'Galéria'},
        {ref: 'index.html', caption: 'Rólunk'}
    ]);

    var $list = $('<ul class="nav navbar-nav"></ul>');

    $data.each( function () {
        $list.append($('<li class="nav-item menuitem"></li>')
            .append($('<a class="nav-link"></a>')
                .attr('href', this.ref)
                .append(this.caption)));
    });

    return $('<div class="row"></div>')
        .append($('<div class="col-md-3"></div>'))
        .append($('<nav class="navbar navbar-light col-md-9 menu"></nav>')
            .append($('<button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">&#9776;</button>'))
            .append($('<div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2"></div>')
                .append($list)
            )
        );
};
