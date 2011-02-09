web2go.models.Vplaene = Ext.regModel("web2go.models.Vplaene", {
    fields: [
        {name: "name", type: "string"}
    ]
});

web2go.stores.vplaene = new Ext.data.TreeStore({
    autoLoad: false,
    model: 'web2go.models.Vplaene',
    proxy: {
        type: 'ajax',
        url: 'ajax/get_vplaene',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});