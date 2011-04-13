/**
 * @class vplaene
 * @extends Ext.Controller
 * The vplaene modul controller
 */

web2go.controllers.vplaene = new Ext.Controller({
    //study courses list
    index: function(options) {
        //reset card view for VplaenePanel
        Ext.defer(web2go.views.vplaenePanel.setActiveItem, 1, web2go.views.vplaenePanel, 0);

        //scroll list to top
        var listScroller = web2go.views.vplaeneList.scroller;
        if (listScroller != undefined) {
            web2go.views.vplaeneList.scroller.scrollTo({x:0, y:0});
        }

        //load the store
        web2go.stores.vplaene.load();

        //show vplaenePanel in the viewport
        web2go.views.viewport.setActiveItem(
            web2go.views.vplaenePanel, options.animation
        );
    },

    //course list
    course: function(options) {
        //show loading mask
        web2go.views.vplaenePanel.setLoading(true);

        //get a list of all courses for the submitted study course id
        Ext.Ajax.request({
            method: 'POST',
            url: web2go.Urls.vplaene.url,
            params: {
                'tx_dhbwcomplainmobile_pi1[course]': options.id,
                'tx_dhbwcomplainmobile_pi1[action]': 'course',
                'tx_dhbwcomplainmobile_pi1[controller]': 'Mobile'
            },
            success: function(response) {
                var data = Ext.decode(response.responseText),
                    course = data.vpcourse;

                //if there are any courses
                if (course.length > 0) {
                    //scroll the course list to the top
                    var listScroller = web2go.views.vplaeneCourse.scroller;
                    if (listScroller != undefined) {
                        web2go.views.vplaeneCourse.scroller.scrollTo({x:0, y:0});
                    }

                    //load the course data into the store
                    web2go.stores.vpCourse.loadData(course);

                    //and show the course list
                    web2go.views.vplaenePanel.setActiveItem(
                        web2go.views.vplaeneCourse, options.animation
                    );
                }
                //if ther are no courses found
                else {
                    //open a message alert box.
                    Ext.Msg.alert('Keine Kurse gefunden.');
                }

                //hide loading mask
                web2go.views.vplaenePanel.setLoading(false);
            }
        });

    },

    //timeframe selection form
    time: function(options) {
        //load the submitted course items into the store
        web2go.stores.vpCourseItems.loadData(options.items);

        //get the current kw (calendar week), and select it in the timeframe selection field as default.
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

                //show the timeframe form
                web2go.views.vplaenePanel.setActiveItem(
                    web2go.views.vplaeneTime, options.animation
                );
            }
        });
    }
});
