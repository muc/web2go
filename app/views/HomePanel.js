/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * This panel is the web2go home screen.
 */

web2go.Modules = [
  {name: 'Who-is-Who', controller: 'web2go.controllers.mensa', action: 'index', disabled: true},
  {name: 'Studiengänge', controller: 'web2go.controllers.mensa', action: 'index', disabled: true},
  {name: 'Firmenliste', controller: 'web2go.controllers.mensa', action: 'index', disabled: true},
  {name: 'VP', controller: 'web2go.controllers.vplaene', action: 'detail'},
  {name: 'Dokumente', controller: 'web2go.controllers.mensa', action: 'index', disabled: true},
  {name: 'Zimmerbörse', controller: 'web2go.controllers.mensa', action: 'index', disabled: true},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index'},
];

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
  dockedItems: [{
      xtype: 'toolbar',
      dock : 'top',
      title: 'DHBW Mosbach Web2Go'
  }],

  initComponent: function() {
      this.items = [{
          xtype: 'button',
          text: 'VLP',
          handler: function() {
              Ext.dispatch({
                controller: web2go.controllers.vplaene,
                action: 'index',
                animation: {type: 'slide', direction: 'left'}
              });
          }
      }, {
          xtype: 'button',
          text: 'Mensa',
          handler: function() {
              Ext.dispatch({
                controller: web2go.controllers.mensa,
                action: 'index',
                animation: {type: 'slide', direction: 'left'}
              });
          }
      }
      ];
//    this.items = [];
//    var modules = web2go.Modules;
//    var rows = Math.floor(modules.length / 3) + (modules.length % 3 > 0 ? 1 : 0);
//
//    for (i = 0; i < rows; i++) {
//      var row = {
//        height: 100,
//        layout: {type: 'hbox', align: 'stretch'},
//        items: [], padding: 10
//      };
//
//      for (j = 0; j < 3; j++) {
//        var col = {
//          flex: 1,
//          padding: '20 10',
//          items: []
//        };
//        var idx = i * 3 + j;
//        if (idx  < modules.length) {
//          var controller = eval(modules[idx].controller);
//          var action = modules[idx].action;
//          col.items.push({
//            xtype: 'button',
//            disabled: modules[idx].disabled ? modules[idx].disabled : false,
//            text: modules[idx].name,
//            handler: function() {
//                Ext.dispatch({
//                  controller: controller,
//                  action: action,
//                  animation: {type: 'slide', direction: 'left'}
//                });
//            }
////            listeners: {
////              'tap': function() {
////                Ext.dispatch({
////                  controller: controller,
////                  action: action,
////                  animation: {type: 'slide', direction: 'left'}
////                });
////              }
////            }
//          });
//        }
//        row.items.push(col);
//      }
//      this.items.push(row);
//    }

    web2go.views.HomePanel.superclass.initComponent.apply(this, arguments);
  }
});