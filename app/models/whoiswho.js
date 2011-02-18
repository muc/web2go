web2go.models.WiwFormData = Ext.regModel("web2go.models.WiwFormData", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name'}
    ]
});

web2go.stores.WiwFormLocations = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    autoload: false
});

web2go.stores.WiwFormDepartments = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    autoload: false
});

web2go.stores.WiwFormCourses = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    autoload: false
});