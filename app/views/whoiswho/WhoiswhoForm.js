/**
 * @class web2go.views.WhoiswhoForm
 * @extends Ext.FormPanel
 * Who-is-who search form
 */


web2go.views.WhoiswhoForm = Ext.extend(Ext.form.FormPanel, {
   scroll: 'vertical',
   submitOnAction: false,
   defaults: {
       labelAlign: 'left'
   },

   initComponent: function() {

       this.bottomBar = new Ext.Toolbar({
           dock: 'bottom',
           ui: 'dark',
           items: [{xtype: 'spacer'}, {
               text: 'Zurücksetzen',
               scope: this,
               handler: function() {
                   this.reset();
               }
           }, {
               text: 'Suchen',
               ui: 'action',
               scope: this,
               handler: this.doSubmit
           }]
       });

       this.dockedItems = [this.bottomBar];
       
       this.items = [{
           xtype: 'selectfield',
           name: 'location',
           label: 'Campus',
           valueField: 'id',
           displayField: 'name',
           store: web2go.stores.WiwFormLocations
       }, {
           xtype: 'selectfield',
           name: 'department',
           label: 'Bereich',
           valueField: 'id',
           displayField: 'name',
           store: web2go.stores.WiwFormDepartments
       }, {
           xtype: 'selectfield',
           name: 'course',
           label: 'Studieng.',
           valueField: 'id',
           displayField: 'name',
           store: web2go.stores.WiwFormCourses
       }, {
           xtype: 'textfield',
           name: 'name',
           label: 'Name',
           useClearIcon: true
       }];

       web2go.views.WhoiswhoForm.superclass.initComponent.apply(this, arguments);
   },
   
   doSubmit: function() {
      this.setLoading(true);
      var values = this.getValues();
      
      Ext.Ajax.request({
          url: web2go.Urls.wiw_form.url,
          method: web2go.Urls.wiw_form.method,
          params: {
              'tx_dhbwcontactsmobile_pi1[action]': 'results',
              'tx_dhbwcontactsmobile_pi1[controller]': 'Mobile',
              'tx_dhbwcontactsmobile_pi1[search][location]': values.location,
              'tx_dhbwcontactsmobile_pi1[search][department]': values.department,
              'tx_dhbwcontactsmobile_pi1[search][course]': values.course,
              'tx_dhbwcontactsmobile_pi1[search][name]': values.name
          },
          scope: this,
          success: function(result) {
              this.setLoading(false);
              var obj  = Ext.decode(result.responseText),
                  data = obj.wiwlist.persons;
              if (data) {
                  web2go.stores.WiwList.loadData(data);
                  Ext.dispatch({
                      controller: web2go.controllers.whoiswho,
                      action: 'list',
                      animation: {type: 'slide', direction: 'left'}
                  });
              }
              else {
                  Ext.Msg.alert('Keine Ergebnisse gefunden.');
              }
          }
      });
      
//      Ext.util.JSONP.request({
//          url: web2go.Urls.wiw_form.url,
//          callbackKey: 'callback',
//          params: {
//              'tx_dhbwcontactsmobile_pi1[action]': 'results',
//              'tx_dhbwcontactsmobile_pi1[controller]': 'Mobile',
//              'tx_dhbwcontactsmobile_pi1[search][location]': values.location,
//              'tx_dhbwcontactsmobile_pi1[search][department]': values.department,
//              'tx_dhbwcontactsmobile_pi1[search][course]': values.course,
//              'tx_dhbwcontactsmobile_pi1[search][name]': values.name
//          },
//          scope: this,
//          callback: function(result) {
//              this.setLoading(false);
//              var data = result.wiwlist.persons;
//              if (data) {
//                  web2go.stores.WiwList.loadData(data);
//                  Ext.dispatch({
//                      controller: web2go.controllers.whoiswho,
//                      action: 'list',
//                      animation: {type: 'slide', direction: 'left'}
//                  });
//              }
//              else {
//                  Ext.Msg.alert('Keine Ergebnisse gefunden.');
//              }
//          }
//          
//      });
      
//      this.submit({
//          url: web2go.Urls.wiw_form.url,
//          method: web2go.Urls.wiw_form.method,
//          params: {
//              'tx_dhbwcontactsmobile_pi1[action]': 'results',
//              'tx_dhbwcontactsmobile_pi1[controller]': 'Mobile'
//          },
//          success: function(form, result) {
//              web2go.stores.WiwList.loadData(result.wiwlist.persons);
//              Ext.dispatch({
//                  controller: web2go.controllers.whoiswho,
//                  action: 'list',
//                  animation: {type: 'slide', direction: 'left'}
//              });
//          },
//          failure: function(form, result) {
//              console.log('fail');
//              Ext.Msg.alert('Keine Ergebnisse gefunden.');
//          }
//      });
   }
});