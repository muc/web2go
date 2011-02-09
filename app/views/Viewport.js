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
      studiengaengePanel: new web2go.views.StudiengaengePanel(),
      firmenlistePanel: new web2go.views.FirmenlistePanel(),
      vplaenePanel: new web2go.views.VplaenePanel(),
      mensaCampus: new web2go.views.MensaCampus(),
      mensaDetail: new web2go.views.MensaDetail()
    });
    
    //put instances of cards into viewport
    Ext.apply(this, {
      items: [
        web2go.views.homePanel,
        web2go.views.firmenlistePanel,
        web2go.views.studiengaengePanel,
        web2go.views.vplaenePanel,
        web2go.views.mensaCampus,
        web2go.views.mensaDetail
      ]
    });
    web2go.views.Viewport.superclass.initComponent.apply(this, arguments);
  }

});

