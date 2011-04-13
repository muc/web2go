/**
 * @class web2go
 * @extends Ext.Controller
 * The web2go controller
 */

web2go.controllers.web2go = new Ext.Controller({
    //only one action for the homescreen view.
    home: function(options) {
        web2go.views.viewport.setActiveItem(
            web2go.views.homePanel, options.animation
            );
    }
});