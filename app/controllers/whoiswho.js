/**
 * @class whoiswho
 * @extends Ext.Controller
 * The whoiswho modul controller
 */

web2go.controllers.whoiswho = new Ext.Controller({
  index: function(options) {
//    Ext.Ajax.request({
//        method: web2go.Urls.wiw_form_data.method,
//        url: web2go.Urls.wiw_form_data.url,
//        success: function(response, opts) {
//            var obj = Ext.decode(response.responseText);
//            web2go.stores.WiwFormLocations.loadData(obj.wiw.locations);
//            web2go.stores.WiwFormDepartments.loadData(obj.wiw.departments);
//            web2go.stores.WiwFormCourses.loadData(obj.wiw.courses);
//
//            Ext.defer(web2go.views.whoiswhoPanel.setActiveItem, 1, web2go.views.whoiswhoPanel, 0);
//            web2go.views.viewport.setActiveItem(
//              web2go.views.whoiswhoPanel, options.animation
//            );
//        }
//    });
        web2go.views.viewport.setLoading(true);
        Ext.util.JSONP.request({
            url: web2go.Urls.wiw_form_data.url,
            callbackKey: 'callback',
            callback: function(result) {
                var data = result.wiw;
                web2go.stores.WiwFormLocations.loadData(data.locations);
                web2go.stores.WiwFormDepartments.loadData(data.departments);
                web2go.stores.WiwFormCourses.loadData(data.courses);

                Ext.defer(web2go.views.whoiswhoPanel.setActiveItem, 1, web2go.views.whoiswhoPanel, 0);
                web2go.views.viewport.setActiveItem(
                  web2go.views.whoiswhoPanel, options.animation
                );
                web2go.views.viewport.setLoading(false);
            }
        });
  },
  
  list: function(options) {
      var listScroller = web2go.views.whoiswhoList.scroller;
      if (listScroller != undefined) {
        web2go.views.whoiswhoList.scroller.scrollTo({x:0, y:0});
      }
      web2go.views.whoiswhoPanel.setActiveItem(
          web2go.views.whoiswhoList, options.animation
      );
      web2go.views.whoiswhoList.refresh();
  },
  
  detail: function(options) {
//      Ext.Ajax.request({
//        method: web2go.Urls.wiw_details.method,
//        url: web2go.Urls.wiw_details.url,
//        success: function(response, opts) {
//          var obj = Ext.decode(response.responseText);
//          web2go.stores.WiwDetail.loadData(obj.wiwdetails.person);
//
//          var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first().data);
//          web2go.views.whoiswhoDetail.update(html);
//          web2go.views.whoiswhoPanel.setActiveItem(
//                web2go.views.whoiswhoDetail, options.animation
//            );
//        }
//      });
        web2go.views.whoiswhoPanel.setLoading(true);
        Ext.util.JSONP.request({
            url: web2go.Urls.wiw_details.url,
            callbackKey: 'callback',
            params: {
                'tx_dhbwcontactsmobile_pi1[person]': options.person,
                'tx_dhbwcontactsmobile_pi1[action]': 'index',
                'tx_dhbwcontactsmobile_pi1[controller]': 'Mobile'
            },
            callback: function(result) {
                var data = result.wiwdetails;
                Ext.apply(data.person, {
                    image: data.image
                });
                web2go.stores.WiwDetail.loadData(data);
                var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first());
                web2go.views.whoiswhoDetail.update(html);
                web2go.views.whoiswhoPanel.setActiveItem(
                    web2go.views.whoiswhoDetail, options.animation
                );
                web2go.views.whoiswhoPanel.setLoading(false);
            }
        });
      
  }
});
