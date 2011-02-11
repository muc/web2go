/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.vplaene = new Ext.Controller({
  index: function(options) {
    web2go.views.vplaenePanel.switchToList(0);
    web2go.views.viewport.setActiveItem(
      web2go.views.vplaenePanel, options.animation
    );
  }
});