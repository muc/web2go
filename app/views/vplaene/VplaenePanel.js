/**
 * @class web2go.views.VplaenePanel
 * @extends Ext.Panel
 */

 web2go.views.VplaenePanel = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    onItemDisclosure: true,
    useToolbar: false,
    store: web2go.stores.vplaene,
    
    initComponent: function() {
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            scope: this,
            handler: function() {
                this.getListIndex() == 0 ? this.switchToHome() : this.onBackTap();
            }
        };

        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            handler: this.switchToHome
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
        
        this.toolBar = {
            xtype: 'toolbar',
            ui: 'dark',
            dock: 'top',
            items: [this.backBtn]
        };

        this.dockedItems = [this.titleBar, this.toolBar];

        web2go.views.VplaenePanel.superclass.initComponent.apply(this, arguments);
    },
    
    getListIndex: function() {
        return this.items.indexOf(this.getActiveItem());
    },
    
    switchToList: function(index) {
        if (index >= 0 && index < this.items.getCount()) {
            var list = this.items.getAt(index),
                selModel = list.getSelectionModel();
            Ext.defer(selModel.deselectAll, 1, selModel);
            Ext.defer(this.setActiveItem, 1, this, index);
        }
    },
    
    switchToHome: function() {
        Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {type: 'slide', direction: 'right'}
        });
    }
    
 });