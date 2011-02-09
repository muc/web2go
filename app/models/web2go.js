web2go.models.Campus = Ext.regModel("web2go.models.Campus", {
    fields: [
        { name: "name", type: "string" },
        { name: "id", type: "string" }
    ]
});

web2go.stores.campus = new Ext.data.TreeStore({
    model: 'web2go.models.Campus',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'ajax/get_campus/a',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});