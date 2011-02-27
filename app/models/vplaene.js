web2go.models.Vplaene = Ext.regModel("web2go.models.Vplaene", {
    fields: [
        {name: "name", type: "string"}
    ]
});

web2go.stores.vplaene = new Ext.data.TreeStore({
    autoLoad: false,
    model: 'web2go.models.Vplaene',
    sorters: 'name',
    getGroupString: function(record) {
        return record.get('name');
    },
    proxy: {
        type: 'ajax',
        url: 'sample_data/vplaene.json',
        actionMethods: {
            reader: 'GET'
        },
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});