class Students {
    aName:string;
    bName:string;
    constructor(faleName:string,pikName:string){
        this.aName=faleName
        this.bName=pikName
    }
}
interface nameClass {
    aName:string,
    bName:string
}
function getName(name:nameClass){
    console.log(name.aName,name.bName)
    console.log()
}
let stac=new Students('令狐冲','潘金莲')
getName(stac)