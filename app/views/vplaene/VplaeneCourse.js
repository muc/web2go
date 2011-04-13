/**
 * @class web2go.views.VplaeneCourse
 * @extends Ext.List
 * Vorlesungspläne - a list of all courses for the selected Studiengang
 */

web2go.views.VplaeneCourse = Ext.extend(Ext.List, {
    itemTpl: '{name}', 
    onItemDisclosure: true,
    store: web2go.stores.vpCourse,
    
    initComponent: function() {

        /*
         * Catch the itemtap event.
         * Get the selected item record and dispatch vplaene controllers time action
         */
        this.listeners = {
            'itemtap': function(list, index) {
                var record = list.getStore().getAt(index);
                Ext.dispatch({
                    controller: web2go.controllers.vplaene,
                    action: 'time',
                    animation: {type: 'slide', direction: 'left'},
                    items: record.get('items')
                });
            }
        };
        
        web2go.views.VplaeneCourse.superclass.initComponent.apply(this, arguments);
    }
    
});