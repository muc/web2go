/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * This panel is the web2go home screen.
 */

web2go.Modules = [
  {name: 'Who-is-Who', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon1.jpg'},
  {name: 'Studiengänge', controller: 'web2go.controllers.studiengaenge', action: 'index', icon: 'icon2.png'},
  {name: 'Firmenliste', controller: 'web2go.controllers.firmenliste', action: 'index', icon: 'icon3.jpg'},
  {name: 'Vorlesungspläne', controller: 'web2go.controllers.vplaene', action: 'index', icon: 'icon4.png'},
  {name: 'Dokumente', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon5.jpg'},
  {name: 'Zimmerbörse', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon6.jpg'},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon7.jpg'},
];

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    cls: 'HomeScreenBg',

    initComponent: function() {
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock : 'top',
            title: '<span class="dhbw-red">DH</span>BW Mosbach'
        }];

        var buttons = [];

        for (i = 0; i < web2go.Modules.length; i++) {
            buttons.push({
                xtype: 'button',
                text: web2go.Modules[i].disabled ? '' : web2go.Modules[i].name,
                label: web2go.Modules[i].name,
                disabled: web2go.Modules[i].disabled ? web2go.Modules[i].disabled : false,
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