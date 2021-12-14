module.exports = function(rootPath){

	const CLI = require("hachiware_cli");
	const cmd = require("./command.js");
	const ctnl = require("./control.js");

	var cli = new CLI();
	
	cli.rootPath = rootPath;

	cli
		.outn("* Hachiware **************************")
		.bn()
	;

	if(cli.getArgs()){
		cmd.bind(this)();
	}
	else{
		ctnl.bind(this)();
	}
};