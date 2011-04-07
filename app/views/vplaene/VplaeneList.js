/**
 * @class web2go.views.VplaeneList
 * @extends Ext.List
 */

web2go.views.VplaeneList = Ext.extend(Ext.List, {
    itemTpl: '{name}', 
    onItemDisclosure: true,
    store: web2go.stores.vplaene,
    grouped : true,
    indexBar: true,
    
    initComponent: function() {
        this.listeners = {
            'itemtap': function(list, index) {
                var record = list.getStore().getAt(index);
                Ext.dispatch({
                    controller: web2go.controllers.vplaene,
                    action: 'course',
                    animation: {type: 'slide', direction: 'left'},
                    id: record.get('id')
                });
            }
        };
        
        web2go.views.VplaeneList.superclass.initComponent.apply(this, arguments);
    }
    
});