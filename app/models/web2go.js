/*
 * Campus Model
 */
web2go.models.Campus = Ext.regModel("web2go.models.Campus", {
    fields: [
        { name: "name", type: "string" },
        { name: "id", type: "string" }
    ]
});

/*
 * Campus Store
 */
web2go.stores.campus = new Ext.data.TreeStore({
    model: 'web2go.models.Campus',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: web2go.Urls.campus.url,
        reader: {
            type: 'json',
            root: 'campus'
        }
    }
});