/**
 * @class web2go.views.VplaeneZeit
 * @extends Ext.Panel
 * Vorlesungspläne Zeitraum-Auswahl
 */

web2go.views.VplaeneZeit = Ext.extend(Ext.form.FormPanel, {
    submitOnAction: false,

    initComponent: function() {
        this.timeSelectField = new Ext.form.Select({
            name: 'timeframe',
            valueField: 'kw',
            displayField: 'time',
            store : web2go.stores.vplaeneTimes
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
        web2go.stores.vplaeneTimes.load({
            scope   : this,
            callback: function() {
                this.setValues({
                    'timeframe': web2go.stores.vplaeneTimes.findRecord('curr', true).get('kw')
                });
            }
        });
    
        web2go.views.VplaeneZeit.superclass.initComponent.apply(this, arguments);
    },

    getCourse: function() {
        return this.course;
    },
  
    setCourse: function(val) {
        this.course = val;
    },
    
    showPDF: function() {
        var url  = "http://pollux.dhbw-mosbach.de/cmos_extern_kurs_ext/",
            kw   = this.timeSelectField.getValue(),
            href = url + this.course.toLowerCase() + '-' + kw + '.pdf';
//            window.open(href);
        if (!this.pdfPanel) {
            this.pdfPanel = new Ext.Panel({
                floating: true,
                modal: true,
                centered: true,
                styleHtmlContent: true,
                fullscreen: true,
                scroll: 'both',
                html: '<iframe src="' + href + '" width="1000" height="2000"></iframe>',
//                html: '<a href="' + href + '" target="_blank">PDF</a>',
                dockedItems: [ new Ext.Toolbar({
                        items: {text: 'Zurück', ui: 'back', scope: this, handler: function() {this.pdfPanel.hide();}}
                })
                ]
            });
        }
        this.pdfPanel.show();
//        window.location.href=href;
    }

});