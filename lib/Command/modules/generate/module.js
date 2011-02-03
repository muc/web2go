Ext.generator = {};
Loader.require(['Base', 'Factory'], false);

Ext.regDispatchable('generate', Ext.generator.Factory);

(function() {
    var generators = system.folders(JSBuilderPath + 'modules/generate/generators/*'),
        length     = generators.length,
        i;

    for (i = 0; i < length; i++) {
        Loader.setBasePath(JSBuilderPath + 'modules/generate/generators/' + generators[i]);
        Loader.load('generator');
    }    
})();
