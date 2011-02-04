/**
 * @class web2go.views.ModulPanel
 * @extends Ext.Panel
 * Sample Modul panel for testing purposes.
 * Will be replaced by real modules.
 */

web2go.views.Modul1Panel = Ext.extend(Ext.Panel, {
  layout: 'fit',

  initComponent: function() {
    this.dockedItems = [{
      xtype: 'toolbar',
      dock : 'top',
      title: 'Modul 1',
      items: [{
        xtype: 'button',
        text: 'Back',
        ui: 'back',
        listeners: {
          'tap': function() {
            Ext.dispatch({
              controller: web2go.controllers.web2go,
              action: 'home',
              animation: {type: 'slide', direction: 'right'}
            });
          }
        }
      }]
    }];
    web2go.views.Modul1Panel.superclass.initComponent.apply(this, arguments);
  }
});