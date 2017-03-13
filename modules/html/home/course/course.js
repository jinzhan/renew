var $ = require('/modules/lib/jquery.js');
require('/modules/lib/bootstrap.js');

module.exports = {
    init: function () {
        $(window).width() > 900 && $('.carousel').carousel();
    }
};
