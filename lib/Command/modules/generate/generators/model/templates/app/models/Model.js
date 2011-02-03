/**
 * @class {name}
 * @extends Ext.data.Model
 * The {name} model
 */
Ext.regModel("{name}", {
    fields: [
<tpl for="fields">
        \{name: "{name}", type: "{type}"\}{[xindex != xcount ? "," : ""]}</tpl>
    ]
});