/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.mensa = new Ext.Controller({
    //campus selection
    index: function(options) {
        //reset the nested list to first level
        web2go.views.mensaCampus.switchToList(0);

        //show the mensaCampus view
        web2go.views.viewport.setActiveItem(
            web2go.views.mensaCampus, options.animation
        );
    }
  
});