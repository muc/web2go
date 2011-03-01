web2go.models.WiwFormData = Ext.regModel("web2go.models.WiwFormData", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name'}
    ]
});

web2go.stores.WiwFormLocations = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    sorters: [{
        property : 'name',
        direction: 'ASC'
    }],
    autoload: false
});

web2go.stores.WiwFormDepartments = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    sorters: [{
        property : 'name',
        direction: 'ASC'
    }],
    autoload: false
});

web2go.stores.WiwFormCourses = new Ext.data.Store({
    model: web2go.models.WiwFormData,
    sorters: 'name',
    autoload: false
});


web2go.models.WiwPersons = Ext.regModel("web2go.models.WiwPersons", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'gender'},
        {name: 'title'},
        {name: 'firstname'},
        {name: 'surname'},
        {name: 'suffix'},
        {name: 'campus'},
        {name: 'fullname'},
        {name: 'fullnamereverse'}
    ],
    hasMany: {model: 'web2go.models.WiwPosition', name: 'positions'}
});

web2go.models.WiwPerson = Ext.regModel("web2go.models.WiwPerson", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'gender'},
        {name: 'title'},
        {name: 'firstname'},
        {name: 'surname'},
        {name: 'suffix'},
        {name: 'campus'},
        {name: 'fullname'},
        {name: 'fullnamereverse'},
        {name: 'phone'},
        {name: 'fax'},
        {name: 'address'},
        {name: 'zip'},
        {name: 'city'},
        {name: 'room'},
        {name: 'text'},
        {name: 'sign'},
        {name: 'mail'},
        {name: 'image'}
    ],
    hasMany: {model: 'web2go.models.WiwPosition', name: 'positions'}
});

web2go.models.WiwPosition = Ext.regModel("web2go.models.WiwPosition", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name'}
    ],
    belongsTo: ['web2go.models.WiwPersons', 'web2go.models.WiwPerson']
});

web2go.stores.WiwList = new Ext.data.Store({
    model: web2go.models.WiwPersons,
//    sorters: 'surname',
    getGroupString : function(record) {
        return record.get('surname')[0];
    }
});

web2go.stores.WiwDetail = new Ext.data.Store({
    model: web2go.models.WiwPerson,
    proxy: {
        type: 'ajax',
        url: 'sample_data/wiw_detail.php',
        actionMethods: {
            reader: 'GET'
        },
        reader: {
            type: 'json',
            root: 'wiwdetails.person'
        }
    }
});