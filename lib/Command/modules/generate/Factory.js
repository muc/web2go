/**
 * @class Ext.generator.Factory
 * @extends Object
 * Generates files and folders based on a template
 */
Ext.generator.Factory = Ext.extend(Object, {
    name: "Generator",
    version: "0.0.1",
    
    constructor: function(config) {
        Ext.apply(this, config);
        
        Cli.call(this);
    },
    
    initArguments: function() {},
    
    usage: [
        'Example usage:',
        'Arguments in square brackets are optional',
        '',
        'Generating an application:',
        '    ./generate app AppName [../path/to/app]',
        '',
        'Generating a model:',
        '    ./generate model User id:int name:string active:boolean',
        '',
        'Generating a controller:',
        '    ./generate controller users create update destroy',
        ''
    ],
    
    run: function() {
        var args = this.args || system.arguments,
            Gen  = Ext.generator.Factory.types[args[0]];
        
        if (Gen) {
            new Gen({args: args.slice(1)}).generate();
        } else {
            this.printUsage();
        }
    }
});

Ext.generator.Factory.types = {};
Ext.regGenerator = function(name, constructor) {
    Ext.generator.Factory.types[name] = constructor;
    
    constructor.prototype.dirName = name;
    constructor.templates = {};
};