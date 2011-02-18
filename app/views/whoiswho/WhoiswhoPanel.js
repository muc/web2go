/**
 * @class web2go.views.WhoiswhoPanel
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.WhoiswhoPanel = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {

        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            scope: this,
            handler: function() {
                var currCard = this.getCardIndex();
                currCard == 0 ? this.switchToHome() : this.setActiveItem(currCard - 1);
            }
        };

        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            handler: this.switchToHome
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock : 'top',
            title: 'Who is who',
            items: [this.backBtn, {xtype: 'spacer'}, this.homeBtn]
        };
        
        this.dockedItems = [this.toolBar];

        Ext.apply(web2go.views, {
            whoiswhoForm: new web2go.views.WhoiswhoForm()
        });
        Ext.apply(this, {
            items: [
                web2go.views.whoiswhoForm
            ]
        });
        
        web2go.views.WhoiswhoPanel.superclass.initComponent.apply(this, arguments);
    },

    getCardIndex: function() {
        return this.items.indexOf(this.getActiveItem());
    },

    switchToHome: function() {
        Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {type: 'slide', direction: 'right'}
        });
    }
});