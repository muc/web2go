/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * The panel is the web2go home screen.
 */

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
  initComponent: function() {
    this.dockedItems = [{
        xtype: 'toolbar',
        dock : 'top',
        title: 'DHBW Mosbach Web2Go'
    }];
    this.items = [{
        padding: 30,
        layout: {
          type: 'hbox',
          align: 'stretch'
        },
        items: [{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul1Button',
                text: 'Modul1',
                scope: this
              }
            }]
        },{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul2Button',
                text: 'Modul2'
              }
            }]
        },{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul3Button',
                text: 'Modul3'
              }
            }]
        }]
    },{
        padding: 30,
        layout: {
          type: 'hbox',
          align: 'stretch'
        },
        items: [{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul4Button',
                text: 'Modul4'
              }
            }]
        },{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul5Button',
                text: 'Modul5'
              }
            }]
        },{
            flex: 1,
            items: [{
              layout: {
                type: 'vbox',
                align: 'center'
              },
              items: {
                xtype: 'button',
                itemId: 'modul6Button',
                text: 'Modul6'
              }
            }]
        }]
    },{
    }];

    web2go.views.HomePanel.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('home-panel', web2go.views.HomePanel);