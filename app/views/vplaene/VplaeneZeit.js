/**
 * @class web2go.views.VplaeneZeit
 * @extends Ext.Panel
 * Vorlesungspläne Zeitraum-Auswahl
 */

web2go.views.VplaeneZeit = Ext.extend(Ext.form.FormPanel, {
  submitOnAction: false,

  initComponent: function() {
    this.items = [{
        xtype: 'fieldset',
        title: 'Zeitraum',
        items: [{
          xtype: 'selectfield',
          name: 'timeframe',
          valueField: 'kw',
          displayField: 'time',
          store : web2go.stores.vplaeneTimes
        }]
    }];
    web2go.stores.vplaeneTimes.load({
      scope   : this,
      callback: function() {
        var r = web2go.stores.vplaeneTimes.findRecord('curr', true);
        console.log(this.items);
        this.setValues({
          'timeframe': r.get('time')
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
  }

});