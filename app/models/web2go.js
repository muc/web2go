web2go.models.Campus = Ext.regModel("web2go.models.Campus", {
    fields: [
        {name: "name", type: "string"}
    ]
});

web2go.stores.campus = new Ext.data.TreeStore({
  model: 'web2go.models.Campus',
  proxy: {
        type: 'ajax',
        url: 'app/sample_data/campus.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});