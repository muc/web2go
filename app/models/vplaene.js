web2go.models.Vplaene = Ext.regModel("web2go.models.Vplaene", {
    fields: [
        {name: "name", type: "string"}
    ]
});

web2go.stores.vplaene = new Ext.data.TreeStore({
  model: 'web2go.models.Vplaene',
  proxy: {
        type: 'ajax',
        url: 'app/sample_data/vplaene.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});