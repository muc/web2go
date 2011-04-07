web2go.models.FlCourses = Ext.regModel("web2go.models.FlCourses", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "uri", type: "string"}
    ]
});

web2go.stores.flCourses = new Ext.data.Store({
    model: 'web2go.models.FlCourses',
    autoLoad: false,
    sorters: 'name',
    proxy: {
        type: 'scripttag',
        callbackParam: 'callback',
        callbackPrefix: 'web2goCallback',
        url: web2go.Urls.firmenliste.url,
        actionMethods: {
            reader: web2go.Urls.firmenliste.method
        },
        reader: {
            type: 'json',
            root: 'courses'
        }
    }
});