/**
 * @class web2go.views.VplaeneTime
 * @extends Ext.Panel
 * Vorlesungspläne Zeitraum-Auswahl
 */

web2go.views.VplaeneTime = Ext.extend(Ext.form.FormPanel, {
    submitOnAction: false,

    initComponent: function() {
        this.timeSelectField = new Ext.form.Select({
            name: 'timeframe',
            valueField: 'uri',
            displayField: 'datum',
            store : web2go.stores.vpCourseItems
        });
        
        this.bottomBar = new Ext.Toolbar({
            dock: 'bottom',
            ui: 'dark',
            items: [{
                xtype: 'spacer'
            }, {
                text: 'PDF Anzeigen',
                ui: 'action',
                scope: this,
                handler: this.showPDF
            }]
        });

        this.dockedItems = [this.bottomBar];
        
        this.items = [{
            xtype: 'fieldset',
            title: 'Zeitraum',
            items: [this.timeSelectField]
        }];
    
        web2go.views.VplaeneTime.superclass.initComponent.apply(this, arguments);
    },

    showPDF: function() {
        window.location.href=this.timeSelectField.getValue();
    }

});