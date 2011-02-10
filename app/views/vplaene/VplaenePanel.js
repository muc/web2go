/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 web2go.views.VplaenePanel = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    onItemDisclosure: true,
    toolbar: {
      ui: 'dark'
    },
    
    initComponent: function() {
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.web2go,
                        action: 'home',
                        animation: {type: 'slide', direction: 'right'}
                    });
                }
            }
        };

        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.web2go,
                        action: 'home',
                        animation: {type: 'slide', direction: 'right'}
                    });
                }
            }
        };

        this.wwwBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'action',
            listeners: {
                'tap': function() {
                    Ext.Msg.alert('Redirect to dhbw-mosbach.de');
                }
            }
        };

        this.titleBar = {
            xtype: 'toolbar',
            dock : 'top',
            title: 'Vorlesungspläne',
            items: [this.homeBtn, {xtype: 'spacer'}, this.wwwBtn]
        };

        this.dockedItems = [this.titleBar];

        this.store = web2go.stores.vplaene;
        
        web2go.views.VplaenePanel.superclass.initComponent.apply(this, arguments);
    }
 });