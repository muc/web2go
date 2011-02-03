/**
 * @class web2go.views.ModulPanel
 * @extends Ext.Panel
 * Sample Modul panel for testing purposes.
 * Will be replaced by real modules.
 */

web2go.views.ModulPanel = Ext.extend(Ext.Panel, {
  layout: 'fit',
  modTitle: 'Modul',
  
  initComponent: function() {
    this.dockedItems = [{
        xtype: 'toolbar',
        dock : 'top',
        title: this.modTitle
    }];
    web2go.views.ModulPanel.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('modul-panel', web2go.views.ModulPanel);