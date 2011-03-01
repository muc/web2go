/**
 * @class whoiswho
 * @extends Ext.Controller
 * The mensa modul controller
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

//            web2go.views.whoiswhoForm.setValues({
//                'location': web2go.stores.WiwFormLocations.last().get('id'),
//                'department': web2go.stores.WiwFormDepartments.last().get('id')
//            });

            web2go.views.viewport.setActiveItem(
              web2go.views.whoiswhoPanel, options.animation
            );
        }
    });
  },
  
  list: function(options) {
      web2go.views.whoiswhoPanel.setActiveItem(
          web2go.views.whoiswhoList, options.animation
      );
  },
  
  detail: function(options) {
      web2go.stores.WiwDetail.load({
          params: {'id': options.person},
          callback: function(records, operation, success) {
            var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first().data);
            web2go.views.whoiswhoDetail.update(html);
          }
      });
      web2go.views.whoiswhoPanel.setActiveItem(
          web2go.views.whoiswhoDetail, options.animation
      );
  }
});
