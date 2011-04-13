/**
 * @class web2go.views.VplaeneTime
 * @extends Ext.Panel
 * Vorlesungspläne timeframe selection
 */

web2go.views.VplaeneTime = Ext.extend(Ext.form.FormPanel, {
    submitOnAction: false,

    initComponent: function() {

        /*
         * Combobox with all timeframes
         */
        this.timeSelectField = new Ext.form.Select({
            name: 'timeframe',
            valueField: 'uri',
            displayField: 'datum',
            store : web2go.stores.vpCourseItems
        });

        /*
         * Bottom-Toolbar with button for open the selected pdf
         */
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

        //add toolbar to this view
        this.dockedItems = [this.bottomBar];

        //add the timeframe select field to this view
        this.items = [{
            xtype: 'fieldset',
            title: 'Zeitraum',
            items: [this.timeSelectField]
        }];
    
        web2go.views.VplaeneTime.superclass.initComponent.apply(this, arguments);
    },

    /**
     * Simple helper function that does a rediect to the pdf document.
     */
    showPDF: function() {
        window.location.href=this.timeSelectField.getValue();
    }

});