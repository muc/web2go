/**
 * @class web2go.views.StudiengaengeList
 * @extends Ext.Panel
 * Campus selection for studiengaenge
 */


web2go.views.StudiengaengeList = Ext.extend(Ext.Panel, {
//    itemTpl : '{title}',
//    store: web2go.stores.sglist,
//    onItemDisclosure: true,
//    disableSelection: true,
    
    initComponent: function() {
        
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.studiengaenge,
                        action: 'index',
                        target: 'sub',
                        animation: {type: 'slide', direction: 'right'}
                    });
                }
            }
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock : 'top',
            items: [this.backBtn]
        };
        
        this.dockedItems = [this.toolBar];
        
        this.items = [{
                xtype: 'list',
                itemTpl : '{title}',
                store: web2go.stores.sglist,
                onItemDisclosure: true,
                disableSelection: true,
                listeners: {
                    itemtap: function(dataView, index) {
                        Ext.dispatch({
                            controller: web2go.controllers.studiengaenge,
                            action: 'list',
                            animation: {type: 'slide', direction: 'left'},
                            filter: this.store.getAt(index).get('id')
                        });
                    }
                }
        }];
        
//        this.listeners = {
//            itemtap: function(dataView, index) {
//                Ext.dispatch({
//                    controller: web2go.controllers.studiengaenge,
//                    action: 'list',
//                    animation: {type: 'slide', direction: 'left'},
//                    filter: this.store.getAt(index).get('id')
//                });
//            }
//        };
        
        web2go.views.StudiengaengeList.superclass.initComponent.apply(this, arguments);
    }
});