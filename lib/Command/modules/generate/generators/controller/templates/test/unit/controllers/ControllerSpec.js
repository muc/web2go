describe("The {name} controller", function() {
    var controller = Ext.ControllerManager.get("{name}");
<tpl for="actions">
    describe("the {.} action", function() {
        beforeEach(function() {
            
        });
    });\n
</tpl>
});