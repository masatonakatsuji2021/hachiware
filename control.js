var control = function(){

	control = control.bind(this);

	this.in("- command now", function(value, retry){

		if(!value){
			this.color.redn(" [Error] not found command. retry.");
			return retry();
		}

		var values = value.split(" ");

		if(value[0] == "create"){

			const create = require("./cmd_create.js");
			create.bind(this)(values, control);
		}
		else if(value[0] == "build"){

			const build = require("./cmd_build.js");
			build.bind(this)(values, control);
		}
		else if(value[0] == "version"){

			const version = require("./cmd_version.js");
			version.bind(this)(values, control);
		}
		else if(value[0] == "exit" || value[0] == "end"){
			this.br().outn("......GoodBye.").exit();
		}
		else{
			this.color.redn(" [Error] \"" + value[0] * "\" is not exist command. retry.");
			return retry();
		}

	});

};
module.exports = control;