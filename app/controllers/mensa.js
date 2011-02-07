/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.mensa = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.mensaCampus, options.animation
    );
  },
  
  detail: function(options) {
    web2go.views.mensaDetail.getDockedItems()[0].setTitle('Mensa ' + options.campus);
    Ext.defer(web2go.views.mensaDetail.setActiveItem, 1, web2go.views.mensaDetail, 0);
    web2go.views.viewport.setActiveItem(
      web2go.views.mensaDetail, options.animation
    );
  }
});