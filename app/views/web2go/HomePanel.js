/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * The panel is the web2go home screen.
 */

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
  dockedItems: [{
      xtype: 'toolbar',
      dock : 'top',
      title: 'DHBW Mosbach Web2Go'
  }],

  items: [{
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
//              itemId: 'modul1Button',
//              scope: this
              text: 'Modul1',
              listeners: {
                'tap': function() {
                  Ext.dispatch({
                    controller: web2go.controllers.modul1,
                    action: 'index',
                    animation: {type: 'slide', direction: 'left'}
                  });
                }
              }
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
              disabled: true,
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
              disabled: true,
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
              disabled: true,
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
              disabled: true,
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
              disabled: true,
              itemId: 'modul6Button',
              text: 'Modul6'
            }
          }]
      }]
  },{
  }],

  initComponent: function() {
    web2go.views.HomePanel.superclass.initComponent.apply(this, arguments);
  }
});