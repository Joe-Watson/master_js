let instance= null;
class Database{
    constructor(){
        console.log("Loading....")
        if(instance) return instance
        this.connection=this.connectToDatabase();
        instance=this;
    }

    connectToDatabase(){
        console.log("connecting to DB...")
        return{name:"Suman kumar",age:27,role:"admin"}
    }
}
// console.log(null)
module.exports=new Database();