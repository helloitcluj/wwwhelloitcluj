//google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84673174-1', 'auto');
ga('send', 'pageview');

//google analytics end

var helloit = helloit || {};

helloit.CONTACT_ANCHOR_TAG = "contact";
helloit.ABOUT_US_ANCHOR_TAG = "about_us";

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
        .append($('<div></div>')
            .attr("class", arguments.length < 2 ? "title single" : "title")
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

helloit.formatTitle = function (title, subTitle) {
    var result = title;

    if (subTitle) {
        result = result + ", " + subTitle
    }

    return result;
};

helloit.createNavbar = function () {

    var $data = $([
        {ref: "index.html", caption: helloit.i18n.course1FullTitle},
        {ref: "index.html#" + helloit.CONTACT_ANCHOR_TAG, caption: helloit.i18n.contact},
        {ref: "gallery.html", caption: helloit.i18n.gallery},
        {ref: "index.html#" + helloit.ABOUT_US_ANCHOR_TAG, caption: helloit.i18n.aboutUs}
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

helloit.createAnchor = function(name) {

    return $('<a></a>')
        .attr("name", name);

};

helloit.createGeneralDescription = function(content) {

    return $('<div class="row"></div>')
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="col-md-6"></div>')
            .append(content))
        .append($('<div class="col-md-3"></div>'));

};
