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
        web2go.views.vplaenePanel.setLoading(true);
        
        Ext.Ajax.request({
            method: 'POST',
            url: options.uri,
            params: {
                'tx_dhbwcomplainmobile_pi1[course]': options.id,
                'tx_dhbwcomplainmobile_pi1[action]': 'course',
                'tx_dhbwcomplainmobile_pi1[controller]': 'Mobile'
            },
            success: function(response) {
                var data = Ext.decode(response.responseText),
                    course = data.vpcourse;
                
                if (course.length > 0) {
                    var listScroller = web2go.views.vplaeneCourse.scroller;
                    if (listScroller != undefined) {
                        web2go.views.vplaeneCourse.scroller.scrollTo({x:0, y:0});
                    }
                    web2go.stores.vpCourse.loadData(course);
                    web2go.views.vplaenePanel.setActiveItem(
                        web2go.views.vplaeneCourse, options.animation
                    );
                }
                else {
                    Ext.Msg.alert('Keine Kurse gefunden.');
                }
                web2go.views.vplaenePanel.setLoading(false);
            }
        });

//        Ext.util.JSONP.request({
//            url: web2go.Urls.vplaene.url,
//            callbackKey: 'callback',
//            params: {
//                'tx_dhbwcomplainmobile_pi1[course]': options.id,
//                'tx_dhbwcomplainmobile_pi1[action]': 'course',
//                'tx_dhbwcomplainmobile_pi1[controller]': 'Mobile'
//            },
//            callback: function(result) {
//                var course = result.vpcourse;
//                
//                if (course.length > 0) {
//                    var listScroller = web2go.views.vplaeneCourse.scroller;
//                    if (listScroller != undefined) {
//                        web2go.views.vplaeneCourse.scroller.scrollTo({x:0, y:0});
//                    }
//                    web2go.stores.vpCourse.loadData(course);
//                    web2go.views.vplaenePanel.setActiveItem(
//                        web2go.views.vplaeneCourse, options.animation
//                    );
//                }
//                else {
//                    Ext.Msg.alert('Keine Kurse gefunden.');
//                }
//                web2go.views.vplaenePanel.setLoading(false);
//            }
//        });
    },
    
    time: function(options) {
        web2go.stores.vpCourseItems.loadData(options.items);
        Ext.Ajax.request({
            url: web2go.Urls.vplaene_times.url,
            success: function(response) {
                var data   = Ext.decode(response.responseText),
                    kw     = data.kw,
                    record = null;

                while (record == null) {
                    record = web2go.stores.vpCourseItems.findRecord('kw', data.year + '-' + kw);
                    kw--;
                }
                web2go.views.vplaeneTime.setValues({
                    'timeframe': record.get('uri')
                });
                web2go.views.vplaenePanel.setActiveItem(
                    web2go.views.vplaeneTime, options.animation
                );
            }
        });
    }
});