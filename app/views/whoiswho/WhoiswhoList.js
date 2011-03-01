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
        web2go.views.WhoiswhoList.superclass.initComponent.apply(this, arguments);
    }
});