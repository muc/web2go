/**
 * @class web2go.views.MensaCampus
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.MensaCampus = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    useToolbar: false,
    onItemDisclosure: true,
    
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
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock : 'top',
            title: 'Mensapläne',
            items: [
                this.backBtn, 
                {xtype: 'spacer'},
                this.homeBtn
            ]
        }];
    
        this.store = web2go.stores.campus;
        
        this.listeners = {
            'leafitemtap': function(subList, subIdx, el, e, detailCard) {
                var selModel = subList.getSelectionModel();
                Ext.defer(selModel.deselectAll, 1, selModel);
                Ext.dispatch({
                    controller: web2go.controllers.mensa,
                    action: 'detail',
                    animation: {type: 'slide', direction: 'left'},
                    campus: subList.getStore().getAt(subIdx).get('name')
                });
            }
        };
        
        //    web2go.stores.campus.load();
        web2go.views.MensaCampus.superclass.initComponent.apply(this, arguments);
    }
});