// dokumentCategories

web2go.models.DokCat = Ext.regModel("web2go.models.DokCat", {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"},
        {name: "teaser", type: "string"}
    ]
});

web2go.stores.dokumentCategories = new Ext.data.Store({
    model: 'web2go.models.DokCat',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'dokumente/ajax/get_categories',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});