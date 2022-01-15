module.exports = function(rootPath, args, exitResolve){

    var cmd = args.get(0);

    if(cmd == "client"){
        console.log("client....");
    }
    else if(cmd == "server"){
        console.log("server...");
    }
    else{
        this.color.red("[Error] ").outn("\"" + cmd + "\ is a command that does not exist.");
        exitResolve();
    }

};


/*
create [-image=|image name] [-project=|project name] [-platform=|platform]
build [-project=|project name]

init 
start
status
* 

version
*/
