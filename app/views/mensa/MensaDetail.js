/**
 * @class web2go.views.MensaDetail
 * @extends Ext.Panel
 * Mensa detail informations and pdf plans
 */

web2go.views.MensaDetail = Ext.extend(Ext.List, {
    itemTpl: '{name}',
    store: web2go.stores.mensa,
    grouped: true,
    onItemDisclosure: true,
    
    initComponent: function() {

        /*
         * Event handler for itemtap. Does a simple redirect to the pdf file.
         */
        this.listeners = {
            'itemtap': function(list, index) {
                var record = list.getStore().getAt(index);
                window.location.href=record.get('link');
            }
        };
        
        web2go.views.MensaDetail.superclass.initComponent.apply(this, arguments);
    },

    //Getter and setter for campus variable.
    getCampus: function() {
        return this.campus;
    },

    setCampus: function(cmps) {
        this.campus = cmps;
        this.store.load();
    }
});