var helloit = helloit || {};

helloit.createCourseDescription = function(content) {

    return $('<div class="row"></div>')
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="col-md-6"></div>')
            .append(content))
        .append($('<div class="col-md-3"></div>'));

};
