web2go.models.Mensa = Ext.regModel("web2go.models.Mensa", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "kw", type: "string"}
    ]
});

web2go.stores.mensa = new Ext.data.Store({
    model: 'web2go.models.Mensa',
    sorters: 'name',
    getGroupString: function(record) {
        return record.get('kw');
    },
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'mensa/ajax/get_mensa',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
    
});