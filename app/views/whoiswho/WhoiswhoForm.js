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
//       labelWidth: '40%'
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
      this.submit({
          url: web2go.Urls.wiw_form.url,
          method: web2go.Urls.wiw_form.method,
          success: function(form, result) {
              web2go.stores.WiwList.loadData(result.wiwlist.persons);
              Ext.dispatch({
                  controller: web2go.controllers.whoiswho,
                  action: 'list',
                  animation: {type: 'slide', direction: 'left'}
              });
          },
          failure: function(form, result) {
              console.log('fail');
              Ext.Msg.alert('Keine Ergebnisse gefunden.');
          }
      });
   }
});