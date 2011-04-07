/**
 * @class web2go.views.FirmenlisteCoursesList
 * @extends Ext.List
 */

web2go.views.FlCoursesList = Ext.extend(Ext.List, {
    itemTpl: '{name}', 
    onItemDisclosure: true,
    store: web2go.stores.flCourses,
    
    initComponent: function() {
        this.listeners = {
            'itemtap': function(list, index) {
                var record = list.getStore().getAt(index),
                    uri = record.get('uri');
                Ext.dispatch({
                    controller: web2go.controllers.firmenliste,
                    action: 'list',
                    animation: {type: 'slide', direction: 'left'},
                    id: record.get('id')
                });
            }
        };
        
        web2go.views.FlCoursesList.superclass.initComponent.apply(this, arguments);
    }
    
});