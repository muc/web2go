/**
 * @class web2go.views.VplaeneZeit
 * @extends Ext.Panel
 * Vorlesungspläne Zeitraum-Auswahl
 */

web2go.views.VplaeneZeit = Ext.extend(Ext.form.FormPanel, {
  submitOnAction: false,

  initComponent: function() {
    this.formTitle = new Ext.form.FieldSet({
        title: this.course,
        items: [{
          xtype: 'selectfield',
          name: 'timeframe',
          label: 'Zeitraum',
          valueField: 'id',
          displayField: 'name'
        }]});
    this.items = [this.formTitle];
    
    web2go.views.VplaeneZeit.superclass.initComponent.apply(this, arguments);
  },

  getCourse: function() {
    return this.course;
  },
  
  setCourse: function(val) {
    this.course = val;
    this.formTitle.setTitle('Kurs ' + this.course);
  }
});