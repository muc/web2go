/**
 * @class studiengaenge
 * @extends Ext.Controller
 * The studiengaenge modul controller
 */

web2go.controllers.studiengaenge = new Ext.Controller({
    index: function(options) {
        web2go.stores.sgnav.load();
        
        var listScroller = web2go.views.studiengaengeFilter.list.scroller;
        if (listScroller != undefined) {
            web2go.views.studiengaengeFilter.list.scroller.scrollTo({x:0, y:0});
        }
        if (options.target == 'sub') {
            web2go.views.studiengaengePanel.setActiveItem(
                web2go.views.studiengaengeFilter, options.animation
            );
        }
        else {
            Ext.defer(web2go.views.studiengaengePanel.setActiveItem, 1, web2go.views.studiengaengePanel, 0);
            web2go.views.viewport.setActiveItem(
                web2go.views.studiengaengePanel, options.animation
            );
        }
    },
  
    list: function(options) {
        web2go.stores.sglist.load({params: {'filter': options.filter}});
        web2go.views.studiengaengePanel.setActiveItem(
            web2go.views.studiengaengeList, options.animation
        );
    }
});