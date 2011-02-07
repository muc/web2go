web2go.models.Mensa = Ext.regModel("web2go.models.Mensa", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "kw", type: "string"}
    ]
});

web2go.stores.mensa = new Ext.data.Store({
    model: 'web2go.models.Mensa',
    sorters: 'name',
    getGroupString: function(record) {
        return record.get('kw');
    },
    data: [{
        id: 1, 
        name: 'Alte Mälzerei',
        kw: 'KW 5'
    },{
        id: 2, 
        name: 'Brauhaus',
        kw: 'KW 5'
    },{
        id: 3, 
        name: 'Lamm',
        kw: 'KW 5'
    },{
        id: 4, 
        name: 'Lamm',
        kw: 'KW 6'
    }]
});