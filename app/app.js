/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the application's Viewport inside the
 * launch method (see app/views/Viewport.js).
 */ 
Ext.regApplication('web2go', {
    defaultTarget: "viewport",
    name         : "web2go",
    useHistory   : true,
    defaultUrl   : 'web2go/home',
    
    launch: function() {
        this.views.viewport = new web2go.views.Viewport({
            application: this
        });
    }
});
