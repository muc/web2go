/**
 * Mensa Model
 */
web2go.models.Mensa = Ext.regModel("web2go.models.Mensa", {
    fields: [
        {name: "name", type: "string"},
        {name: "kw", type: "string"},
        {name: "link", type: "string"}
    ]
});

/**
 * Mensa Store
 */
web2go.stores.mensa = new Ext.data.Store({
    model: 'web2go.models.Mensa',
    sorters: 'name',
    getGroupString: function(record) {
        return 'KW ' + record.get('kw');
    },
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: web2go.Urls.mensa.url,
        actionMethods: {
            reader: web2go.Urls.mensa.method
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
    
});