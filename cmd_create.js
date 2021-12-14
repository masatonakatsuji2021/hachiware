const hfs = require("hachiware_fs");

module.exports = function(values, control){

	var projectName = null;
	var projectPath = null;

	this.then(function(resolve){

		this.outn("# Create Project");

		if(values[1]){
			projectName = values[1];
			resolve();
		}
		else{

			this.in("- Create project Name?", function(value, retry){

				if(!value){
					this.color.redn(" [Error] not found project name. retry.");
					return retry();
				}

				projectName = value;
				resolve();
			});

		}	

	}).then(function(resolve){

		projectPath = this.rootPath + "/" + projectName;

		if(hfs.existSync(projectPath)){
			this.color.yellown("# directory exist.");
			this.in(
				"- The Directory already exists. Do you want to delete the target directory once? [Y/N]", 
				function(value, retry){

					value = value.toUpperCase();

					if(
						value == "Y" ||
						value == "N"
					){
						if(value == "Y"){
							hfs.deepDelete(projectPath);
							this.outn("# delete ..... " + projectPath);
							resolve();
						}
						else{
							this.out("...... Cansel.");
							control();
						}
					}
					else{
						this.color.redn(" [Error] the answer yes(Y) or no(N). retry.");
						return retry();
					}

				}
			);
		}
		else{
			resolve();
		}

	}).then(function(resolve){


		


	}).start();


};