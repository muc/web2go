/**
 * @class {name}.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was 
 * generated correctly.
 */
{name}.Viewport = Ext.extend(Ext.Panel, {
    id        : 'viewport',
    layout    : 'card',
    fullscreen: true,

    initComponent: function() {

        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock : 'top',
                    title: '{name}'
                }
            ]
        });

         {name}.Viewport.superclass.initComponent.apply(this, arguments);
    },

});
