var barTabs = ["Inicio","Unete","Info","Promos"];
var tabs = ["disciplinas","inscripcion","informacion","promociones"];
function removeactive(current){
	i=0;
	while (i < 4){
		if(current==barTabs[i]){
            $("li#"+current).addClass("is-active");
            
		}else{
			$("li#"+barTabs[i]).removeClass("is-active");
		}
		i++;
	}
}


function changeTab(current){
	i=0;
	while (i < 4){
		if(current==tabs[i]){
            $("div#"+current).addClass("is-active");
            $("div#"+current).css({ "display": "block" });
            
		}else{
            $("div#"+current).removeClass("is-active");
            $("div#"+current).css({ "display": "none" });
		}
		i++;
	}
}

if (annyang) {
    console.log("Zip");
        let commands = {
            'Inicio': function () {
                console.log("Inicio");
                removeactive("Inicio");
                changeTab("disciplinas");
            },
            'Unete': function () {
            	removeactive("Unete");	
                changeTab("inscripcion");
            },
            'Info': function () {
                removeactive("Info");
                changeTab("informacion");
            },
            'Promos': function () {
                removeactive("Promos");
                changeTab("promociones");
            }
        };

        annyang.addCommands(commands);
        annyang.setLanguage("es-MX");
        annyang.start();
    }