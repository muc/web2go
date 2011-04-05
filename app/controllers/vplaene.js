/**
 * @class mensa
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.vplaene = new Ext.Controller({
    index: function(options) {
        Ext.defer(web2go.views.vplaenePanel.setActiveItem, 1, web2go.views.vplaenePanel, 0);
        var listScroller = web2go.views.vplaeneList.scroller;
        if (listScroller != undefined) {
            web2go.views.vplaeneList.scroller.scrollTo({x:0, y:0});
        }
        web2go.stores.vplaene.load();
        web2go.views.viewport.setActiveItem(
            web2go.views.vplaenePanel, options.animation
        );
    },
    
    course: function(options) {
        Ext.Ajax.request({
            method: 'POST',
            url: options.uri,
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                web2go.stores.vpCourse.loadData(obj.vpcourse);
                web2go.views.vplaenePanel.setActiveItem(
                    web2go.views.vplaeneCourse, options.animation
                );
            }
        });
    },
    
    time: function(options) {
        web2go.stores.vpCourseItems.loadData(options.items);
        web2go.views.vplaeneTime.setValues({
            'timeframe': web2go.stores.vpCourseItems.findRecord('kw', '2011-13').get('uri')
        });
        web2go.views.vplaenePanel.setActiveItem(
            web2go.views.vplaeneTime, options.animation
        );
    }
});