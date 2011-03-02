/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.mensa = new Ext.Controller({
    index: function(options) {
        web2go.views.mensaCampus.switchToList(0);
        web2go.views.viewport.setActiveItem(
            web2go.views.mensaCampus, options.animation
        );
    }
  
});