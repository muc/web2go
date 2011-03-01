/**
 * @class web2go.views.WhoiswhoList
 * @extends Ext.Panel
 * Who-is-Who Result List
 */


web2go.views.WhoiswhoList = Ext.extend(Ext.List, {
    itemTpl: new Ext.XTemplate(
        '<p>{fullnamereverse}</p>',
        '<p style="font-size:12px">Campus: {campus}</p>',
        '<p style="font-size:12px">Position:',
        '<tpl for="positions">',
            '<p style="font-size:12px">{name}</p>',
        '</p></tpl>'
    ),
    store: web2go.stores.WiwList,
    grouped : true,
    indexBar: true,
    
    initComponent: function() {
        this.listeners = {
            itemtap: function(dataview, index) {
                Ext.dispatch({
                    controller: web2go.controllers.whoiswho,
                    action: 'detail',
                    animation: {type: 'slide', direction: 'left'},
                    person: this.store.getAt(index).get('id')
                });
            }
        };
        web2go.views.WhoiswhoList.superclass.initComponent.apply(this, arguments);
    }
});