/**
 * @class web2go.views.MensaDetail
 * @extends Ext.Panel
 * Mensa informations and pdf plans
 */

web2go.views.MensaDetail = Ext.extend(Ext.List, {
    itemTpl: '{name}',
    store: web2go.stores.mensa,
    grouped: true,
    onItemDisclosure: true,
    
    initComponent: function() {
        
        this.listeners = {
            'itemtap': function(list, index) {
                var record = list.getStore().getAt(index);
                Ext.Msg.alert('Tap', 'PDF for ' + record.get('name'));
            }
        };
        
        web2go.views.MensaDetail.superclass.initComponent.apply(this, arguments);
    },

    getCampus: function() {
        return this.campus;
    },

    setCampus: function(cmps) {
        this.campus = cmps;
        this.store.load();
    }
});