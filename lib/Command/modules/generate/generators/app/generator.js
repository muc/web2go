/**
 * @class Ext.generator.Application
 * @extends Ext.generator.Base
 * Generates a full application
 */
Ext.generator.Application = Ext.extend(Ext.generator.Base, {
    generate: function() {
        this.headline('Generating the ' + this.name + ' application');
        
        this.createDirectoryStructure();
        this.copyApplicationFiles();
        this.copyJasmine();
        this.copyCommand();
        this.copyTouch();
    },
    
    /**
     * Copies all files required for jasmine to the lib directory
     */
    copyJasmine: function() {
        Logger.log("Copying dependencies...");
        
        this.mkdir('lib/jasmine', 'lib/sencha-jasmine', 'lib/sencha-jasmine/matchers');
        
        this.file('lib/jasmine/jasmine.css');
        this.file('lib/jasmine/jasmine-html.js');
        this.file('lib/jasmine/jasmine.js');
        this.file('lib/jasmine/MIT.LICENSE');
        
        this.file('lib/sencha-jasmine/sencha-jasmine.css');
        this.file('lib/sencha-jasmine/sencha-jasmine.js');
        this.file('lib/sencha-jasmine/matchers/Model.js');
        this.file('lib/sencha-jasmine/matchers/Controller.js');
    },
    
    /**
     * Copies all static application files to their destination directories
     */
    copyApplicationFiles: function() {
        Logger.log("Copying files...");
        
        this.file('index.html');
        this.file('app/routes.js');
        this.file('resources/scss/config.rb');
        this.file('resources/scss/application.scss');
        this.file('resources/css/application.css');
        this.file('test/unit/index.html');
        this.file('test/unit/SpecOptions.js');
        this.file('test/unit/.htaccess');
        
        this.template('app/app.js',            this);
        this.template('app/views/Viewport.js', this);
    },
    
    /**
     * Creates all of the necessary directories for a new app
     */
    createDirectoryStructure: function() {
        Logger.log("Creating directories...");
        this.mkdir(
            'app', 'app/models', 'app/controllers', 'app/views', 'lib', 
            'resources', 'resources/images', 'resources/css', 'resources/scss',
            'test', 'test/acceptance', 'test/fixtures', 'test/unit',
            'test/unit/models', 'test/unit/controllers', 'test/unit/views'
        );
    },
    
    /**
     * Copies all files/folders required for Sencha Command into the lib directory
     */
    copyCommand: function() {
        Logger.log("Copying Sencha Command");
        this.mkdir("lib/Command");
        
        var builderDirs = ['lib', 'modules', 'src'],
            length      = builderDirs.length,
            i;
        
        for (i = 0; i < length; i++) {
            this.copyDir(builderDirs[i], "lib/Command");
        }
        
        Logger.log("    Copying Sencha Command files");
        this.file("sencha");
        
        Filesystem.copy("dispatch.sh", this.basePath + '/lib/Command/dispatch.sh');
        Filesystem.copy("sencha", this.basePath + '/lib/Command/sencha');
        Filesystem.copy("README.md", this.basePath + '/lib/Command/README.md');
    },
    
    /**
     * Attempts to copy Sencha Touch to lib/touch. Expects a deployed version of Sencha Touch
     * to be present at the same directory level as Command
     */
    copyTouch: function() {
        Logger.log("Copying Sencha Touch");
        Filesystem.copy('touch', this.basePath + '/lib');
    },
    
    decodeArgs: function(args) {
        this.name = args[0];
        this.basePath = args[1] || this.name;
    }
});

Ext.regGenerator('app', Ext.generator.Application);
