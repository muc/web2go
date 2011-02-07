web2go.models.Mensa = Ext.regModel("web2go.models.Mensa", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"}
    ]
});

web2go.stores.mensa = new Ext.data.Store({
    model: 'web2go.models.Mensa',
    data: [{
        id: 1, 
        name: 'alte_mälzerei_KW5.pdf (56.74 kb)'
    },{
        id: 2, 
        name: 'Brauhaus_KW5.pdf (501.15 kb)'
    },{
        id: 3, 
        name: 'Brauhaus_Veranstaltungskalender-Februar 2011.pdf (522.25 kb)'
    },{
        id: 4, 
        name: 'Lamm_KW5.pdf (534.03 kb)'
    },{
        id: 5, 
        name: 'Lamm_KW6.pdf (533.57 kb)'
    }]
});