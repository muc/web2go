/**
 * This file registers the Web2Go App, generating the namespace "web2go"
 * and renders the application's Viewport (see app/views/Viewport.js)
 * inside the launch method when everything has been loaded onto the page.
 */
Ext.regApplication('web2go', {
    defaultTarget: "viewport",
    name         : "web2go",
    icon         : "resources/img/app_icon.png",
    phoneStartupScreen: "resources/img/loading_screen.png",
    glossOnIcon: false,
    useHistory   : true,
    
    launch: function() {
        this.views.viewport = new web2go.views.Viewport({
            application: this
        });
    }
});
