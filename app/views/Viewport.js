/**
 * @class web2go.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was 
 * generated correctly.
 */
web2go.views.Viewport = Ext.extend(Ext.Panel, {
  id: 'viewport',
  layout: 'card',
  fullscreen: true,
  cardSwitchAnimation: 'slide',

  initComponent: function() {
    
    //put instances of cards into web2go.views namespace
    Ext.apply(web2go.views, {
      homePanel: new web2go.views.HomePanel(),
      modul1Panel: new web2go.views.Modul1Panel()
    });
    
    //put instances of cards into viewport
    Ext.apply(this, {
      items: [
        web2go.views.homePanel,
        web2go.views.modul1Panel
      ]
    });
    web2go.views.Viewport.superclass.initComponent.apply(this, arguments);
  }

});

