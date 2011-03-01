/**
 * @class web2go.views.WhoiswhoList
 * @extends Ext.Panel
 * Who-is-Who Result List
 */


web2go.views.WhoiswhoList = Ext.extend(Ext.List, {
    itemTpl: new Ext.XTemplate(
        '<div class="wiw_list_name">{fullnamereverse}</div>',
        '<div class="wiw_list_campus"><strong>Campus:</strong> {campus}</div>',
        '<div class="wiw_list_position"><strong>Position(en):</strong><br />',
            '<tpl for="positions">',
                '<ul>',
                    '<li>{name}</li>',
                '</ul>',
            '</tpl>',
        '</div>'
    ),
    store: web2go.stores.WiwList,
    grouped : true,
//    indexBar: true,
    
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

