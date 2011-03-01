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
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});

web2go.models.VplaeneTime = Ext.regModel('web2go.models.VplaeneTime', {
    fields: [
        {name: 'time', type: 'string'},
        {name: 'kw', type: 'string'},
        {name: 'curr', type: 'boolean'}
    ]
});

web2go.stores.vplaeneTimes = new Ext.data.JsonStore({
      model: 'web2go.models.VplaeneTime',
      proxy: {
        type: 'ajax',
        url: 'sample_data/vplaene_times.php',
        reader: {
            type: 'json',
            root: 'data'
        }
      },
      autoDestroy: true
    });
