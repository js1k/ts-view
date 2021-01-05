var Students = /** @class */ (function () {
    function Students(faleName, pikName) {
        this.aName = faleName;
        this.bName = pikName;
    }
    return Students;
}());
function getName(name) {
    console.log(name.aName, name.bName);
}
var stac = new Students('令狐冲', '潘金莲');
getName(stac);
