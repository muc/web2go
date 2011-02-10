/**
 * @class web2go.views.StudiengaengePanel
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.StudiengaengePanel = Ext.extend(Ext.Panel, {
    
    layout: 'card',
    
//    styleHtmlContent: true,
//    html: '<br/><br/><br/><div style="text-align: center;text-shadow: rgba(0, 0, 0, 0.3) 0.2em .2em 0.2em;"><h3>work in progress&hellip;</h3></div>',
    
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
            title: 'Studiengänge',
            items: [this.homeBtn, {xtype: 'spacer'}, this.wwwBtn]
        };
        
        this.dockedItems = [this.titleBar];
        
        Ext.apply(web2go.views, {
            studiengaengeFilter: new web2go.views.StudiengaengeFilter(),
            studiengaengeList: new web2go.views.StudiengaengeList()
        });
        Ext.apply(this, {
            items: [
                web2go.views.studiengaengeFilter,
                web2go.views.studiengaengeList
            ]
        });
        
        web2go.views.StudiengaengePanel.superclass.initComponent.apply(this, arguments);
    }
});