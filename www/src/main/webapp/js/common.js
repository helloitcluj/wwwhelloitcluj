var helloit = helloit || {};


helloit.createHeader = function(title, subTitle) {

    return $('<div class="row header"></div>')
        .append($('<div class="col-xs-3 col-md-4"></div>'))
        .append($('<div class="col-xs-6 col-md-4 logo"></div>')
            .append($('<div><div></div></div>'))
        )
        .append($('<div class="col-xs-3 col-md-1 language-chooser">Magyar</div>'))
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="title"></div>')
            .append(title)
        )
        .append($('<div class="subtitle"></div>')
            .append(subTitle)
        );

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
