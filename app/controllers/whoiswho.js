/**
 * @class whoiswho
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.whoiswho = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.whoiswhoPanel, options.animation
    );
  }
});