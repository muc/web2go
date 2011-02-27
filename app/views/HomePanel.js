/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * This panel is the web2go home screen.
 */

web2go.Modules = [
  {name: 'Vorlesungspläne', controller: 'web2go.controllers.vplaene', action: 'index', icon: 'icon_vorlesungsplaene.png'},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon_mensaplaene.png'},
  {name: 'Who-is-Who', controller: 'web2go.controllers.whoiswho', action: 'index', icon: 'icon_who-is-who.png'},
  {name: 'Zimmerbörse', controller: 'web2go.controllers.zimmerboerse', action: 'index', icon: 'icon_zimmerboerse.png'},
  {name: 'Firmenliste', controller: 'web2go.controllers.firmenliste', action: 'index', icon: 'icon_firmenliste.png'},
  {name: 'Dokumente', controller: 'web2go.controllers.dokumente', action: 'index', icon: 'icon_dokumente.png'},
  {name: 'Studiengänge', controller: 'web2go.controllers.studiengaenge', action: 'index', icon: 'icon_studiengaenge.png'},
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
