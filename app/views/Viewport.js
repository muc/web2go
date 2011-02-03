/**
 * @class web2go.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was 
 * generated correctly.
 */
web2go.Viewport = Ext.extend(Ext.Panel, {
  id        : 'viewport',
  layout    : 'card',
  fullscreen: true,

  initComponent: function() {
    this.dockedItems = [{
        xtype: 'toolbar',
        dock : 'bottom',
        ui: 'dark',
        items: [{
            xtype: 'button',
            itemId: 'homeButton',
            iconCls: 'home',
            iconMask: true,
            ui: 'plain',
            handler: this.onHomeTap,
            scope: this
        }]
    }];
    web2go.Viewport.superclass.initComponent.apply(this, arguments);
  }

});

