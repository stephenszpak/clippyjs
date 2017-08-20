"use script"

$("#clippy").click(function() {
    clippy.load('Clippy', function(agent) {
        agent.show();
        agent.play('RestPose');
    });
});
var jsonGet = [
      { "first_name": "Ricky",
        "last_name": "",
        "email": "",   
        "cohort": "",
        "github_username": "",
        "commits": 5        
      },
      {   
        "first_name": "Joe",
        "last_name": "",
        "email": "",   
        "cohort": "",
        "github_username": "",
        "commits": 3      
      },
      {   
        "first_name": "Bill",
        "last_name": "",
        "email": "",   
        "cohort": "",
        "github_username": "",
        "commits": 4
      }
];

var showPeep = document.getElementById("commit");
var showLoser = document.getElementById("loser");


for (var i = 0; i < jsonGet.length; i++) {
    var newInfo = "";
    newInfo += "<div>" + jsonGet[i].first_name + "</div>";
    showPeep.innerHTML += newInfo;

    if (jsonGet[i].commits < 4){
        var loser = "";
        loser += "<h1>" + jsonGet[i].first_name + " is bad" + "</h1>";
        showLoser.innerHTML += loser;
        
        clippy.load('Clippy', function(agent) {
            agent.show();
            agent.play('RestPose');
        });
    }
};


