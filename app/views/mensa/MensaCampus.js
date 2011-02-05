/**
 * @class web2go.views.MensaCampus
 * @extends Ext.Panel
 * Campus selection for mensa
 */

web2go.models.Campus = Ext.regModel("web2go.models.Campus", {
  fields: [
    {name: "id", type: "int"},
    {name: "name", type: "string"}
  ]
});
web2go.models.Mensa = Ext.regModel("web2go.models.Mensa", {
  fields: [
    {name: "id", type: "int"},
    {name: "name", type: "string"}
  ]
});

web2go.stores.campus = new Ext.data.Store({
  model: 'web2go.models.Campus',
  data: [
    {id: 1, name: 'Mosbach'},
    {id: 2, name: 'Heilbronn'},
    {id: 3, name: 'Bad Merkentheim'}
  ]
});
web2go.stores.mensa = new Ext.data.Store({
  model: 'web2go.models.Mensa',
  data: [
    {id: 1, name: 'alte_mälzerei_KW5.pdf (56.74 kb)'},
    {id: 2, name: 'Brauhaus_KW5.pdf (501.15 kb)'},
    {id: 3, name: 'Brauhaus_Veranstaltungskalender-Februar 2011.pdf (522.25 kb)'},
    {id: 4, name: 'Lamm_KW5.pdf (534.03 kb)'},
    {id: 5, name: 'Lamm_KW6.pdf (533.57 kb)'}
  ]
});

web2go.views.MensaCampus = Ext.extend(Ext.Panel, {
  dockedItems: [{
    xtype: 'toolbar',
    dock : 'top',
    title: 'Mensapläne',
    items: [{xtype: 'spacer'},{
      xtype: 'button',
      iconMask: true,
      ui: 'plain',
      iconCls: 'home',
      listeners: {
        'tap': function() {
          Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {type: 'slide', direction: 'right'}
          });
        }
      }
    }]
  }],
  
  items: [{
    xtype: 'list',
    store: web2go.stores.campus,
    itemTpl: '{name}',
    onItemDisclosure: function(record) {
      Ext.dispatch({
        controller: web2go.controllers.mensa,
        action: 'detail',
        animation: {type: 'slide', direction: 'left'},
        campus: record.get('name')
      });
    }
  }],
  
  initComponent: function() {
//    web2go.stores.campus.load();
    web2go.views.MensaCampus.superclass.initComponent.apply(this, arguments);
  }
});