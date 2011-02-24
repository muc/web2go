/**
 * @class dokumente
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.dokumente = new Ext.Controller({
    index: function(options) {
//        web2go.stores.dokumentCategories.load();
//        
//        var listScroller = web2go.views.dokumenteCategory.list.scroller;
//        if (listScroller != undefined) {
//            web2go.views.dokumenteCategory.list.scroller.scrollTo({x:0, y:0});
//        }
//        if (options.target == 'sub') {
//            web2go.views.dokumentePanel.setActiveItem(
//                web2go.views.dokumenteCategory, options.animation
//            );
//        }
//        else {
//            Ext.defer(web2go.views.dokumentePanel.setActiveItem, 1, web2go.views.dokumentePanel, 0);
            web2go.views.viewport.setActiveItem(
                web2go.views.dokumentePanel, options.animation
            );
//        }
    }
});