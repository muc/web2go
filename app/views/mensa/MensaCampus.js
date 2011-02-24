/**
 * @class web2go.views.MensaCampus
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.MensaCampus = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    useToolbar: false,
    onItemDisclosure: true,
    store: web2go.stores.campus,
    
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
        
        this.modulMenu = this.createModulMenu('Mensa');
        
        this.titleBtn = {
            xtype: 'button',
            text: 'Mensapläne',
            iconMask: true,
            ui: 'plain',
            cls: 'title-btn',
            scope: this,
            handler: function(btn) {
                this.modulMenu.show();
            }
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'dark',
            items: [this.backBtn, {xtype: 'spacer'}, this.titleBtn, {xtype: 'spacer'}, this.homeBtn]
        };
        
        this.dockedItems = [this.toolBar];
    
        this.listeners = {
            'leafitemtap': function(subList, subIdx, el, e, detailCard) {
                var selModel = subList.getSelectionModel();
                Ext.defer(selModel.deselectAll, 1, selModel);
                Ext.dispatch({
                    controller: web2go.controllers.mensa,
                    action: 'detail',
                    animation: {type: 'slide', direction: 'left'},
                    campus: subList.getStore().getAt(subIdx)
                });
            }
        };
        
        web2go.views.MensaCampus.superclass.initComponent.apply(this, arguments);
    },
    createModulMenu: function(currentModul) {
        var mm = new Ext.ActionSheet({
            hideOnMaskTap: true,
            enter: 'bottom'
        });
        Ext.each(web2go.Modules, function(module) {
            mm.add({
                text: module.name,
                ui: module.name == currentModul ? 'confirm-round' : 'normal',
                dispatchController: eval(module.controller),
                dispatchAction: module.action,
                handler: function() {
                    mm.hide();
                    Ext.dispatch({
                        controller: this.dispatchController,
                        action: this.dispatchAction,
                        animation: {type: 'slide', direction: 'down'}
                    });
                }
            });
        });
        return mm;
    }
});