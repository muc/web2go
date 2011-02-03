/**
 * @class Ext.generator.Base
 * @extends Object
 * Base class for all Generators
 */
Ext.generator.Base = Ext.extend(Object, {
    /**
     * @cfg {Boolean} pretend True to only output what the generator would do (e.g. which files would be created),
     * without actually modifying anything on the filesystem.
     */
    pretend: false,
    
    basePath: '.',
    
    constructor: function(config) {
        Ext.apply(this, config);
        
        if (this.args) {
            this.decodeArgs(this.args);
        }
    },
    
    /**
     * Creates an empty directory at the given location
     * @param {String} path The directory path
     */
    mkdir: function() {
        var length = arguments.length,
            dirName, i;
        
        for (i = 0; i < length; i++) {
            dirName = this.basePath + "/" + arguments[i];
            Logger.log("    Creating dir: " + dirName);
            
            if (!this.pretend) {
                Filesystem.mkdir(dirName);
            }
        }
    },
    
    /**
     * Applies data to an XTemplate, saving its output to the given file name
     * @param {String} fileName The template file name
     * @param {Object} data Data to be passed to the XTemplate
     * @param {String} destination The destination path (defaults to the fileName)
     */
    template: function(fileName, data, destination) {
        Logger.log("    Creating file: " + (fileName || destination));
        
        // dirty hack to let <tpl> get through without being picked up
        Ext.apply(data, {
            tpl: 'tpl'
        });
        
        var destination = this.basePath + '/' + (destination || fileName),
            currentPath = (this.basePath == '.') ? 'lib/Command/' : '',
            fileName    = currentPath + 'modules/generate/generators/' + this.dirName + '/templates/' + fileName,
            stream      = new Stream(fileName, 'rw'),
            template    = new Ext.XTemplate(stream.readText()),
            contents    = template.apply(data),
            newFile     = new Stream(destination, "w");
        
        newFile.writeLine(contents);
        newFile.close();
    },
    
    /**
     * Copies a file from the generator's files directory into the app
     * @param {String} fileName The name of the file to copy
     * @param {String} destination The destination path (defaults to the fileName)
     * @param {Boolean} silent True to not log any messages (defaults to false)
     */
    file: function(fileName, destination, silent) {
        Logger.log("    Copying " + fileName);
        
        destination = this.basePath + '/' + (destination || fileName);
        fileName = 'modules/generate/generators/' + this.dirName + '/files/' + fileName;
        
        if (!this.pretend && this.silent !== true) {
            Filesystem.copy(fileName, destination);
        }
    },
    
    /**
     * Copies all contents of the given source directory to a destination
     * @param {String} dirName The name of the directory to copy
     * @param {String} destination The destination for the source files
     */
    copyDir: function(dirName, destination) {
        destination = this.basePath + '/' + (destination || dirName);
        
        if (!this.pretend) {
            Filesystem.copy(dirName, destination);
        }
    },
    
    /**
     * Inserts a script tag to load the given src file inside the given div id
     * @param {String} path The path to the script to be included
     * @param {String} id The id of the div to include after
     * @param {String} htmlFile Optional html file to update (defaults to index.html)
     */
    insertInclude: function(path, id, htmlFile) {
        htmlFile = htmlFile || 'index.html';
        
        var stream = new Stream(htmlFile, 'rw'),
            regex  = new RegExp('<div id="' + id + '">'),
            lines  = [],
            line;
        
        while (line = stream.readLine()) {
            lines.push(line);
            
            if (regex.test(line)) {
                lines.push('            <script type="text/javascript" src="' + path + '"></script>');
            }
        }
        
        var destination = htmlFile + "-modified",
            newFile     = new Stream(destination, "w");
        
        newFile.writeLine(lines.join("\n"));
        system.move(destination, htmlFile, true);
        newFile.close();
    },
    
    /**
     * Convenience function for displaying a clear message to the user
     * @param {String} message The message to display
     */
    headline: function(message) {
        Logger.log("");
        Logger.log("*********************************************");
        Logger.log(message);
        Logger.log("*********************************************");
        Logger.log("");
    },
    
    generate: function() {
        
    }
});
