/**
 * @class web2go.views.WhoiswhoForm
 * @extends Ext.FormPanel
 */


web2go.views.WhoiswhoForm = Ext.extend(Ext.form.FormPanel, {
   scroll: 'vertical',
   defaults: {
       labelAlign: 'left'
//       labelWidth: '40%'
   },

   initComponent: function() {

       this.bottomBar = new Ext.Toolbar({
           dock: 'bottom',
           ui: 'dark',
           items: [{xtype: 'spacer'}, {
               text: 'Reset'
           }, {
               text: 'Suchen',
               ui: 'confirm',
               scope: this,
               handler: function() {
                   console.log(this.getValues());
               }
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
   }
});