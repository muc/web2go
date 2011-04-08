web2go.models.Vplaene = Ext.regModel("web2go.models.Vplaene", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "uri", type: "string"}
    ]
});

web2go.stores.vplaene = new Ext.data.Store({
    model: 'web2go.models.Vplaene',
    autoLoad: false,
    sorters: 'name',
    getGroupString : function(record) {
        return record.get('name')[0];
    },
    proxy: {
        type: 'scripttag',
        callbackParam: 'callback',
        callbackPrefix: 'web2goCallback',
        url: web2go.Urls.vplaene.url,
        actionMethods: {
            reader: web2go.Urls.vplaene.method
        },
        reader: {
            type: 'json',
            root: 'vpindex'
        }
    }
});

web2go.models.VplaeneCourse = Ext.regModel("web2go.models.VplaeneCourse", {
    fields: [
        {name: "name", type: "string"},
        {name: "items", type: "array"}
    ]
});

web2go.stores.vpCourse = new Ext.data.Store({
    model: 'web2go.models.VplaeneCourse',
    autoLoad: false
});

web2go.models.VplaeneCourseItems = Ext.regModel("web2go.models.VplaeneCourseItems", {
    fields: [
        {name: "datum", type: "string"},
        {name: "kw", type: "string"},
        {name: "uri", type: "string"}
    ]
});

web2go.stores.vpCourseItems = new Ext.data.Store({
    model: 'web2go.models.VplaeneCourseItems',
    autoLoad: false
});