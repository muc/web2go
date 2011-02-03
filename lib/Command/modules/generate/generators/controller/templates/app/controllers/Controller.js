/**
 * @class {name}
 * @extends Ext.Controller
 * The {name} controller
 */
Ext.regController("{name}", {
<tpl for="actions">
    {.}: function() {
        
    }{[xindex != xcount ? ",\n\n" : ""]}</tpl>   
});