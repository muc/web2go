/**
 * @class whoiswho
 * @extends Ext.Controller
 * The whoiswho modul controller
 */

web2go.controllers.whoiswho = new Ext.Controller({
  index: function(options) {
    Ext.Ajax.request({
        method: 'GET',
        url: 'sample_data/wiwformdata.json',
        success: function(response, opts) {
            var obj = Ext.decode(response.responseText);
            web2go.stores.WiwFormLocations.loadData(obj.wiw.locations);
            web2go.stores.WiwFormDepartments.loadData(obj.wiw.departments);
            web2go.stores.WiwFormCourses.loadData(obj.wiw.courses);

            Ext.defer(web2go.views.whoiswhoPanel.setActiveItem, 1, web2go.views.whoiswhoPanel, 0);
            web2go.views.viewport.setActiveItem(
              web2go.views.whoiswhoPanel, options.animation
            );
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
      Ext.Ajax.request({
        method: 'GET',
        url: 'sample_data/wiw_detail.php',
        success: function(response, opts) {
          var obj = Ext.decode(response.responseText);
          web2go.stores.WiwDetail.loadData(obj.wiwdetails.person);

          console.log(web2go.stores.WiwDetail.first().data);
          var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first().data);
          web2go.views.whoiswhoDetail.update(html);
          web2go.views.whoiswhoPanel.setActiveItem(
                web2go.views.whoiswhoDetail, options.animation
            );
        }
      });
      
//      web2go.stores.WiwDetail.load({
//          params: {'id': options.person},
//          callback: function(records, operation, success) {
//
//            console.log(web2go.stores.WiwDetail.first().data);
//
//            var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first().data);
//            web2go.views.whoiswhoDetail.update(html);
//            web2go.views.whoiswhoPanel.setActiveItem(
//                web2go.views.whoiswhoDetail, options.animation
//            );
//          }
//      });
      
  }
});
