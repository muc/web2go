/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.studiengaenge = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.studiengaengePanel, options.animation
    );
  }
});