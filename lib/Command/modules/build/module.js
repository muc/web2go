Ext.builder = {};
// Loader.require(['Base', 'Factory'], false);

/**
 * @class Ext.builder.Builder
 * @extends Object
 * Builds a given project
 */
Ext.builder.Builder = Ext.extend(Object, {

    run: function() {
        var file = "deploy/index.html";
        
        if (Fs.exists(file)) {
            this.updateTimestamps(file);
        } else {
            this.generateIndex(file);
        }
    },
    
    /**
     * Updates the cache-buster timestamp on each stylesheet and javascript include on the given page
     */
    updateTimestamps: function(file) {
        
    },
    
    /**
     * Generates a default production index.html file for a deploy
     */
    generateIndex: function(file) {
        
    }
});

Ext.regDispatchable('build', Ext.builder.Builder);