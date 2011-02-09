/**
 * @class web2go.views.DokumentePanel
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.DokumentePanel = Ext.extend(Ext.Panel, {
    
    styleHtmlContent: true,
    html: '<br/><br/><br/><div style="text-align: center;text-shadow: rgba(0, 0, 0, 0.3) 0.2em .2em 0.2em;"><h3>work in progress&hellip;</h3></div>',
    
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
            title: 'Dokumente',
            items: [this.homeBtn, {xtype: 'spacer'}, this.wwwBtn]
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock : 'top',
            items: [this.backBtn]
        };
        
        this.dockedItems = [this.titleBar, this.toolBar];
        
        web2go.views.DokumentePanel.superclass.initComponent.apply(this, arguments);
    }
});