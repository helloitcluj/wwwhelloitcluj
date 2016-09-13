var helloit = helloit || {};

helloit.createCarousel = function() {
    return $('\
    <div class="row">\
        <div class="col-md-3"></div>\
        <div class="col-md-6">\
            <div id="carousel-gallery" class="carousel slide" data-ride="carousel">\
                <ol class="carousel-indicators">\
                    <li data-target="#carousel-gallery" data-slide-to="0" class="active"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="1"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="2"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="3"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="4"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="5"></li>\
                    <li data-target="#carousel-gallery" data-slide-to="6"></li>\
                </ol>\
            <div class="carousel-inner" role="listbox">\
                <div class="carousel-item active">\
                    <img src="../images/IMG_1_8328-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_2_8368-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_3_8385-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_4_8415-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_5_8421-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_6_8440-min.jpg" alt="">\
                </div>\
                <div class="carousel-item">\
                    <img src="../images/IMG_7_8457-min.jpg" alt="">\
                </div>\
            </div>\
            <a class="left carousel-control" href="#carousel-gallery" role="button" data-slide="prev">\
                <span class="icon-prev" aria-hidden="true"></span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a class="right carousel-control" href="#carousel-gallery" role="button" data-slide="next">\
                <span class="icon-next" aria-hidden="true"></span>\
                <span class="sr-only">Next</span>\
            </a>\
            </div>\
        </div>\
        <div class="col-md-3"></div>\
    </div>');
};