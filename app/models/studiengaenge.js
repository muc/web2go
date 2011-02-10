web2go.models.SGNav = Ext.regModel("web2go.models.SGNav", {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"}
    ]
});

web2go.stores.sgnav = new Ext.data.Store({
    model: 'web2go.models.SGNav',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'studiengaenge/ajax/get_nav1',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});

web2go.stores.sglist = new Ext.data.Store({
    model: 'web2go.models.SGNav',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'studiengaenge/ajax/get_list',
        actionMethods: {
            reader: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});