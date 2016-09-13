var helloit = helloit || {};

helloit.createCourseRegistration = function() {

    return $('<div class="row contact"></div>')
        .append($('<div class="col-md-3"></div>'))
        .append($('<div class="col-md-6"></div>')
            .append($('<div class="contentheader2"></div>')
                .append(helloit.i18n.registrationTitle)
            )
            .append($('<form action="../register.php" method="post" enctype="multipart/form-data" target="register-target"></form>')
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
            .append($('<iframe id="register-target" name="register-target" src="about:blank" style="width:0;height:0;border:0 solid #fff;visibility: hidden"></iframe>'))
        )
        .append($('<div class="col-md-3"></div>'));

};
