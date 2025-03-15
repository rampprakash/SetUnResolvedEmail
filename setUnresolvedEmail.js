
function setUnresolvedEmail() {
    var obj = new Object(); 
        obj.name = "contosso@live.com";
        obj.entityType = "unresolvedaddress";
        obj.id = "{00000000-0000-0000-0000-000000000000}";
        var toField = Xrm.Page.getAttribute("to");
        var toValue = toField.getValue();
        if (toValue != null) {
            toValue.push(obj); 
            toField.setValue(toValue);
        }
        else {
        var value = new Array();
        value[0] = obj;
            toField.setValue(value);
        }       
}
