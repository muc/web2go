/**
 * @class Ext.Updater
 * @extends Object
 * Updates the copies of Sencha Command, Sencha Touch and Ext JS within a project
 */
Ext.Updater = Ext.extend(Object, {

    name: "Updater",
    version: "0.0.1",
    
    constructor: function(config) {
        Ext.apply(this, config);
        
        Cli.call(this);
    },
    
    run: function() {
        var args     = this.args || system.arguments,
            sdkPath  = args[0],
            libPath  = 'lib',
            packages = ['Command', 'touch', 'desktop'],
            pkg, source, i;
        
        //user has supplied a set of packages
        if (args.length > 1) {
            packages = args.slice(1);
        }
        
        if (sdkPath) {
            for (i = 0; i < packages.length; i++) {
                pkg = packages[i];
                source = sdkPath + '/' + pkg;
                
                Logger.log("Updating " + pkg);
                Fs.copy(source, libPath);
            }
        }
    },
    
    initArguments: function() {}
});

Ext.regDispatchable('update', Ext.Updater);
