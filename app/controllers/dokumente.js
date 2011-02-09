/**
 * @class dokumente
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.dokumente = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.dokumentePanel, options.animation
    );
  }
});