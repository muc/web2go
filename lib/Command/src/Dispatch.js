var JSBuilderPath = system.cwd + '/' + system.arguments[0] + '/';

system.arguments = system.arguments.slice(1);

load(JSBuilderPath + 'src/Loader.js');
Loader.setBasePath(JSBuilderPath + 'src');

Loader.require([
    'Ext', 'Cmd', 'Filesystem', 'Platform', 'Cli', 'Logger', 'CommandDispatcher', 'Template', 'XTemplate'
    // 'Project', 'Target', 'Package', 'Build'
], false);


//Load all of the modules
(function() {
    var modules = system.folders(JSBuilderPath + '/modules/*'),
        length  = modules.length,
        moduleName, moduleDir, i;

    for (i = 0; i < length; i++) {
        moduleName = modules[i];
        moduleDir = 'modules/' + moduleName;
        Loader.setBasePath(JSBuilderPath + moduleDir);
        Loader.load('module');
    }


    //Finally, dispatch to the appropriate module
    var args   = system.arguments,
        module = args[0];

    Ext.CommandDispatcher.dispatch(module, args.slice(1));
})();