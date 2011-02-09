/**
 * @class zimmerboerse
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.zimmerboerse = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.zimmerboersePanel, options.animation
    );
  }
});