/**
 * @class firmenliste
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.firmenliste = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.firmenlistePanel, options.animation
    );
  }
});