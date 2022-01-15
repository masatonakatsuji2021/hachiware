
const sync = require("hachiware_sync");
const tool = require("hachiware_tool");
const fs = require("hachiware_fs");
const cli = require("hachiware_cli");
const te = require("hachiware_te");
const server = require("hachiware_server");
const client = require("hachiware_client");
const validator = require("hachiware_validator");

module.exports = {

	sync: sync,
	tool: tool,
	fs: fs,
	cli: cli,
	server: server,
	te: te,
	client: client,
	validator: validator,

	console: function(rootPath){

		const cmd = require("./bin/command.js");
	
		var _cli = new cli();

		_cli.then(function(resolve){

			this.rootPath = rootPath;
	
			this.outn("*** Hachiware **************************");

			var args = this.getArgs();

			if(args.length){
				return cmd.bind(this)(rootPath, args, resolve);
			}

			this.br(2);
			
			this.in("Command Input ", function(value, retry){

				if(!value){
					this.color.red("[Error] ").outn("No command entered. Please retry.");
					return retry();
				}

				var args = this.convertArgs(value);

				cmd.bind(this)(rootPath, args, retry);
			})

		}).then(function(){

			this.exit();

		}).start();

	},
};
