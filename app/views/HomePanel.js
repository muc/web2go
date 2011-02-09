/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * This panel is the web2go home screen.
 */

web2go.Modules = [
  {name: 'Who-is-Who', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png', disabled: true},
  {name: 'Studiengänge', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png', disabled: true},
  {name: 'Firmenliste', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png', disabled: true},
  {name: 'VP', controller: 'web2go.controllers.vplaene', action: 'index', icon: 'icon4.png'},
  {name: 'Dokumente', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png', disabled: true},
  {name: 'Zimmerbörse', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png', disabled: true},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon4.png'},
];

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    cls: 'HomeScreenBg',

    initComponent: function() {
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock : 'top',
            title: 'DHBW Mosbach Web2Go'
        }];

        var buttons = [];

        for (i = 0; i < web2go.Modules.length; i++) {
            buttons.push({
                xtype: 'button',
                text: web2go.Modules[i].name,
                plugins: [new web2go.plugins.HomeScreenButton({image: web2go.Modules[i].icon})],
                dispatchController: eval(web2go.Modules[i].controller),
                dispatchAction: web2go.Modules[i].action,
                handler: function() {
                    Ext.dispatch({
                        controller: this.dispatchController,
                        action: this.dispatchAction,
                        animation: {type: 'slide', direction: 'left'}
                    });
                }
            });
        }

        this.plugins = [new web2go.plugins.HomeScreen({buttons: buttons})];

    web2go.views.HomePanel.superclass.initComponent.apply(this, arguments);
  }
});