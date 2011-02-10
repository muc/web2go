/**
 * @class web2go.views.DokumentePanel
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.DokumentePanel = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {
        
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
            title: 'Dokumente',
            items: [this.homeBtn, {xtype: 'spacer'}, this.wwwBtn]
        };
        
        this.dockedItems = [this.titleBar];
        
        Ext.apply(web2go.views, {
            dokumenteCategory: new web2go.views.DokumenteCategory()
        });
        Ext.apply(this, {
            items: [
                web2go.views.dokumenteCategory
            ]
        });
        
        web2go.views.DokumentePanel.superclass.initComponent.apply(this, arguments);
    }
});