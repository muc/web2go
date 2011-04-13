/**
 * @class web2go.views.Viewport
 * @extends Ext.Panel
 * This is the application's main viewport.
 * All available module screens are loaded into the web2go namespace
 */
web2go.views.Viewport = Ext.extend(Ext.Panel, {
    //config options
    id: 'viewport',
    layout: 'card',
    fullscreen: true,
    cardSwitchAnimation: 'slide',

    initComponent: function() {
    
        //put instances of cards into web2go.views namespace
        Ext.apply(web2go.views, {
            homePanel: new web2go.views.HomePanel(),
            vplaenePanel: new web2go.views.VplaenePanel(),
            mensaCampus: new web2go.views.MensaCampus(),
            mensaDetail: new web2go.views.MensaDetail(),
            whoiswhoPanel: new web2go.views.WhoiswhoPanel()
        });
    
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
            web2go.views.homePanel,
            web2go.views.vplaenePanel,
            web2go.views.mensaCampus,
            web2go.views.mensaDetail,
            web2go.views.whoiswhoPanel
            ]
        });
        web2go.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});

