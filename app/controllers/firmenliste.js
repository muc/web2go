/**
 * @class firmenliste
 * @extends Ext.Controller
 * The mensa modul controller
 */

web2go.controllers.firmenliste = new Ext.Controller({
    index: function(options) {
        Ext.defer(web2go.views.firmenlistePanel.setActiveItem, 1, web2go.views.firmenlistePanel, 0);
        var listScroller = web2go.views.flCoursesList.scroller;
        if (listScroller != undefined) {
            web2go.views.flCoursesList.scroller.scrollTo({x:0, y:0});
        }
        web2go.stores.flCourses.load();
        web2go.views.viewport.setActiveItem(
            web2go.views.firmenlistePanel, options.animation
        );
    },
    list: function(options) {
        web2go.views.firmenlistePanel.setLoading(true);
        Ext.util.JSONP.request({
            url: web2go.Urls.firmenliste.url,
            callbackKey: 'callback',
            params: {
                'tx_dhbwenterprise20modmobile_pi1[course]': options.id,
                'tx_dhbwenterprise20modmobile_pi1[action]': 'index',
                'tx_dhbwenterprise20modmobile_pi1[controller]': 'Mobile'
            },
            callback: function(result) {
                var data = result.jobs;
                console.log(data);
                
                if (data.length > 0) {
//                    var listScroller = web2go.views.vplaeneCourse.scroller;
//                    if (listScroller != undefined) {
//                        web2go.views.vplaeneCourse.scroller.scrollTo({x:0, y:0});
//                    }
//                    web2go.stores.vpCourse.loadData(course);
//                    web2go.views.vplaenePanel.setActiveItem(
//                        web2go.views.vplaeneCourse, options.animation
//                    );
                }
                else {
                    Ext.Msg.alert('Keine Firmen gefunden.');
                }
                web2go.views.firmenlistePanel.setLoading(false);
            }
        });
    }
});