var helloit = helloit || {};

helloit.createCourseRegistration = function() {

    return $('<div class="row contact"></div>')
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="col-md-6"></div>')
            .append($('<div class="contentheader2"></div>')
                .append(helloit.i18n.registrationTitle)
            )
            .append($('<form action="#"></form>')
                .append(" ")
                .append($('<input type="text" id="name" name="name"/>')
                    .attr("placeholder", helloit.i18n.nameField)
                )
                .append(" ")
                .append($('<input type="text" id="email" name="email"/>')
                    .attr("placeholder", helloit.i18n.emailField)
                )
                .append(" ")
                .append($('<input type="text" id="phone" name="phone"/>')
                    .attr("placeholder", helloit.i18n.phoneNumberField)
                )
                .append(" ")
                .append($('<label></label>')
                    .append($('<input type="file" id="cv" name="cv" style="display: none"/>'))
                    .append(helloit.i18n.uploadCVField)
                )
                .append(" ")
                .append($('<button type="submit"></button>')
                    .append(helloit.i18n.registrationButton))
            )
        )
        .append($('<div class="col-md-3"></div>'));

};
