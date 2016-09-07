var helloit = helloit || {};

helloit.i18n.languages = {
    "en": {
        name : "English"
    },
    "hu": {
        name : "Magyar"
    },
    "ro": {
        name : "Română"
    }
};

helloit.i18n.defaultLanguage = "en";


helloit.getCurrentLangId = function () {

    if (!helloit.i18n.currentLanguage) {

        var pathPieces = window.location.pathname.split("/");

        for (var i = 0; i < pathPieces.length; i++) {
            var pathPiece = pathPieces[i];
            if (pathPiece in helloit.i18n.languages) {
                helloit.i18n.currentLanguage = pathPiece;
                break;
            }
        }

        if (!helloit.i18n.currentLanguage) {
            helloit.i18n.currentLanguage = helloit.i18n.defaultLanguage;
        }
    }

    return helloit.i18n.currentLanguage;
};

helloit.getAdaptedCurrentPath = function(langId) {
    return window.location.pathname.replace("/" + helloit.getCurrentLangId() + "/", "/" + langId + "/");
};

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

    var currentLangId = helloit.getCurrentLangId();

    var $list = $('<ul class="dropdown-menu"></ul>');
    for(var langId in helloit.i18n.languages) {
        //noinspection JSUnfilteredForInLoop
        var language = helloit.i18n.languages[langId];

        if (langId != currentLangId) {
            //noinspection JSUnfilteredForInLoop
            $list.append($('<li></li>')
                .append($('<a></a>')
                    .attr("href", helloit.getAdaptedCurrentPath(langId))
                    .append(language.name)
                )
            );
        }
    }

    return $('<div class="language-chooser pull-xs-right"></div>')
        .append( $('<span></span>')
            .append(helloit.i18n.languages[currentLangId].name)
        )
        .append( $('<div></div>')
            .append( $('<button type="button" role="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="chevron"></span></button>'))
            .append( $list )
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
