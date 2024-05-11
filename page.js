// Variable and Constant Declarations

let enemies = [];

let styles = [
  {
    name: "Aikido",
    arms: 1,
    legs: 1,
    grappling: 5,
    defense: 5,
    total: 12
  },
  {
    name: "Boxing",
    arms: 5,
    legs: 1,
    grappling: 1,
    defense: 4,
    total: 11
  },
  {
    name: "Brazilian Jiu-Jitsu",
    arms: 1,
    legs: 1,
    grappling: 5,
    defense: 4,
    total: 11
  },
  {
    name: "Capoeira",
    arms: 2,
    legs: 5,
    grappling: 2,
    defense: 2,
    total: 11
  },
  {
    name: "Eskrima",
    arms: 5,
    legs: 2,
    grappling: 4,
    defense: 4,
    total: 15
  },
  {
    name: "Hapkido",
    arms: 2,
    legs: 5,
    grappling: 2,
    defense: 4,
    total: 11
  },
  {
    name: "Jeet Kune Do",
    arms: 3,
    legs: 3,
    grappling: 2,
    defense: 3,
    total: 11
  },
  {
    name: "Judo",
    arms: 1,
    legs: 1,
    grappling: 5,
    defense: 3,
    total: 10
  },
  {
    name: "Karate",
    arms: 5,
    legs: 3,
    grappling: 2,
    defense: 3,
    total: 13
  },
  {
    name: "Krav Maga",
    arms: 3,
    legs: 3,
    grappling: 4,
    defense: 4,
    total: 14
  },
  {
    name: "Muay Thai",
    arms: 4,
    legs: 3,
    grappling: 2,
    defense: 3,
    total: 12
  },
  {
    name: "Sambo",
    arms: 1,
    legs: 2,
    grappling: 5,
    defense: 2,
    total: 10
  },
  {
    name: "Silat",
    arms: 5,
    legs: 5,
    grappling: 4,
    defense: 2,
    total: 16
  },
  {
    name: "Systema",
    arms: 2,
    legs: 2,
    grappling: 4,
    defense: 4,
    total: 12
  },
  {
    name: "Taekwondo",
    arms: 3,
    legs: 5,
    grappling: 2,
    defense: 3,
    total: 13
  },
  {
    name: "Wing Chun",
    arms: 4,
    legs: 2,
    grappling: 4,
    defense: 3,
    total: 13
  },
  {
    name: "Wushu",
    arms: 3,
    legs: 4,
    grappling: 2,
    defense: 2,
    total: 11
  }
];

class Enemy {
  constructor(name, bio, styles) {
    this.name = name;
    this.bio = bio;
    this.styles = styles;
    this.arms = 0;
    this.legs = 0;
    this.grappling = 0;
    this.defense = 0;
    this.total = 0;
  }
}

var bio = "To the public, he is Clarkson's popular, affable president. But beneath the surface lurk dark secrets about his unquestioned control over Clarkson that are guaranteed to shock you.";
const tonyCollins = new Enemy("Tony Collins", bio, [styles[4], styles[9], styles[12]]);
enemies.push(tonyCollins);

var bio = "A shadowy figure who is an enigma to most, he is known for keeping \"order\" at Clarkson through unconventional means. Some say he serves a secret master, but if true, these rumors have not yet been confirmed.";
const nightKnight = new Enemy("the Night Knight", bio, [styles[4], styles[12], styles[14]]);
enemies.push(nightKnight);

var bio = "This is a secretive organization that operates behind the scenes to tip the balance of power in their favor. Beware of them, their members of nigh unbeatable once fully trained.";
const leagueOfKnights = new Enemy("the League of Knights", bio, [styles[4], styles[15], styles[16]]);
enemies.push(leagueOfKnights);

for (var i = 0; i < enemies.length; i++) {
  enemy(enemies[i]);
}

class User {
  constructor() {
    this.name = "";
    this.year = "";
    this.major = "";
    this.socialSecurityNumber = 0;
    this.styles = [];
    this.arms = 0;
    this.legs = 0;
    this.grappling = 0;
    this.defense = 0;
    this.total = 0;
    this.experience = 0;
  }
}
const you = new User();

// Functions

function enableButton() {
  document.getElementById("ok").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
  document.getElementById("ok").tabIndex = "0";
  document.getElementById("ok").ariaLabel = "Keep clicking here to move the game forward";
  document.getElementById("ok").disabled = false;
}

function disableButton() {
  document.getElementById("ok").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
  document.getElementById("ok").tabIndex = "-1";
  document.getElementById("ok").ariaLabel = "This button is currently disabled, you need to do something first before you can move forward";
  document.getElementById("ok").disabled = true;
  document.getElementById("ok").blur();
}

function profileEntrance() {
  sessionStorage.clear();
  document.getElementById("profileCont").style.left = "2em";
  document.getElementById("profileCont").style.transition = "left 2s ease .5s";
}

function enemy(enemy) {
  enemy.arms = ((enemy.styles[0].arms + enemy.styles[1].arms + enemy.styles[2].arms) / (enemy.styles).length);
  enemy.legs = ((enemy.styles[0].legs + enemy.styles[1].legs + enemy.styles[2].legs) / (enemy.styles).length);
  enemy.grappling = ((enemy.styles[0].grappling + enemy.styles[1].grappling + enemy.styles[2].grappling) / (enemy.styles).length);
  enemy.defense = ((enemy.styles[0].defense + enemy.styles[1].defense + enemy.styles[2].defense) / (enemy.styles).length);
  enemy.total = ((enemy.styles[0].total + enemy.styles[1].total + enemy.styles[2].total) / (enemy.styles).length);
}

function gotIt1() {
  document.getElementById("profileTalk").innerHTML = "First, select your gender.";
  disableButton();
  document.getElementById("menCont").style.left = "25%";
  document.getElementById("womenCont").style.right = "25%";
  document.getElementById("menCont").style.transition = "left 2s ease .5s";
  document.getElementById("womenCont").style.transition = "right 2s ease .5s";
}

function selectGender(gender) {
  sessionStorage.gender = gender;
  for (var i = 0; i < document.getElementsByClassName("genderCont").length; i++) {
    if (i == (sessionStorage.gender - 1)) {
      document.getElementsByClassName("genderCont")[i].style.transform = "scale(1.1)";
      document.getElementsByClassName("gender")[i].style.boxShadow = "0 0 .5em .5em var(--clarksonGold)";
      document.getElementsByClassName("gender")[i].style.transition = "box-shadow .25s ease 0s";
      document.getElementsByClassName("genderLabel")[i].style.boxShadow = "0 0 .5em .5em var(--clarksonGold)";
      document.getElementsByClassName("genderLabel")[i].style.transition = "box-shadow .25s ease 0s";
    }
    else {
      document.getElementsByClassName("genderCont")[i].style.transform = "scale(1)";
      document.getElementsByClassName("gender")[i].style.boxShadow = "none";
      document.getElementsByClassName("gender")[i].style.transition = "box-shadow .25s ease 0s";
      document.getElementsByClassName("genderLabel")[i].style.boxShadow = "none";
      document.getElementsByClassName("genderLabel")[i].style.transition = "box-shadow .25s ease 0s";
    }
  }
  document.getElementById("menCont").style.transition = "left 2s ease 1s, transform .25s ease 0s";
  document.getElementById("womenCont").style.transition = "right 2s ease 1s, transform .25s ease 0s";
  if (document.getElementById("ok").disabled == true) {
    enableButton();
    document.getElementById("ok").onclick = gotIt2;
  }
}

function gotIt2() {
  document.getElementById("profileTalk").innerHTML = "Good choice! Now enter all your other info in the correct fields.";
  disableButton();
  document.getElementById("menCont").style.pointerEvents = "none";
  document.getElementById("menCont").tabIndex = "-1";
  document.getElementById("menCont").blur();
  document.getElementById("womenCont").style.pointerEvents = "none";
  document.getElementById("womenCont").tabIndex = "-1";
  document.getElementById("womenCont").blur();
  if (sessionStorage.gender == 1) {
    document.getElementById("menCont").style.bottom = "105%";
    document.getElementById("womenCont").style.transform = "scale(0)";
    document.getElementById("menCont").style.transition = "bottom 1s ease .25s";
    document.getElementById("womenCont").style.transition = "transform .5s ease 0s";
  }
  else if (sessionStorage.gender == 2) {
    document.getElementById("menCont").style.transform = "scale(0)";
    document.getElementById("womenCont").style.bottom = "-51%";
    document.getElementById("menCont").style.transition = "transform .5s ease 0s";
    document.getElementById("womenCont").style.transition = "bottom 1s ease .25s";
  }
  document.getElementById("infoCont").style.visibility = "visible";
  document.getElementById("infoCont").style.opacity = "1";
  document.getElementById("infoCont").style.transition = "all .25s ease 1.25s";
  document.getElementById("infoCont").style.visibility = "visible";
  document.getElementById("infoCont").style.opacity = "1";
  document.getElementById("infoCont").style.transition = "all .25s ease 1.5s";
  setTimeout(enableButton, 1750);
  document.getElementById("ok").onclick = gotIt3;
}

function process(field, event) {
  if (event.key == "Enter") {
    event.preventDefault();
    store(field, event);
  }
  else if (event.key == "Escape") {
    document.getElementsByClassName("infoInput")[field - 1].blur();
  }
}

function leave(field) {
  if (((document.getElementsByClassName("infoInput")[field - 1].value).match(/\s+/gsm)) && (((document.getElementsByClassName("infoInput")[field - 1].value).match(/\s/gsm)).length == (document.getElementsByClassName("infoInput")[field - 1].value).length)) {
    document.getElementsByClassName("infoInput")[field - 1].value = "";
  }
}

function store(field, event) {
  if (event.type == "click") {
    event.preventDefault();
  }
  while ((document.getElementsByClassName("infoInput")[field - 1].value).match(/(?<=^)\s+|\s+(?=$)/gsm)) {
    document.getElementsByClassName("infoInput")[field - 1].value = (document.getElementsByClassName("infoInput")[field - 1].value).replaceAll(/(?<=^)\s+|\s+(?=$)/gsm, "");
  }
  if (((field == 4) && (((document.getElementById("socialSecurityNumberInput").value).length == 9) && ((!((document.getElementById("socialSecurityNumberInput").value).match(/0/gsm))) || (((document.getElementById("socialSecurityNumberInput").value).match(/0/gsm)).length < 9)) && (!((document.getElementById("socialSecurityNumberInput").value).match(/[a-zA-Z]|\.|\,|\'|\"|\`|\~|\-|\_|\+|\*|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\/|\\|\||\(|\)|\[|\]|\{|\}|\s+/gism))))) || ((field != 4) && (((document.getElementsByClassName("infoInput")[field - 1].value).length > 0) && ((!((document.getElementsByClassName("infoInput")[field - 1].value).match(/\s+/gsm))) || (((document.getElementsByClassName("infoInput")[field - 1].value).match(/\s/gsm)).length < (document.getElementsByClassName("infoInput")[field - 1].value).length))))) {
    eval("you." + document.getElementsByClassName("infoInput")[field - 1].name + " = document.getElementsByClassName(\"infoInput\")[field - 1].value");
    eval("sessionStorage." + document.getElementsByClassName("infoInput")[field - 1].name + " = you." + document.getElementsByClassName("infoInput")[field - 1].name);
    document.getElementsByClassName("infoInput")[field - 1].placeholder = document.getElementsByClassName("infoInput")[field - 1].value;
    document.getElementsByClassName("infoInput")[field - 1].value = "";
    document.getElementsByClassName("clearInfo")[field - 1].style.visibility = "visible";
    document.getElementsByClassName("clearInfo")[field - 1].style.opacity = "1";
    document.getElementsByClassName("clearInfo")[field - 1].style.transition = "all .25s ease 0s";
    if (field == 1) {
      document.getElementById("profileName").innerHTML = "Welcome, " + you.name + "!";
    }
  }
}

function remove(field, event) {
  event.preventDefault();
  if (field == 4) {
    you.socialSecurityNumber = 0;
    document.getElementById("socialSecurityNumberInput").placeholder = "No spaces (ex. 123456789)";
  }
  else {
    eval("you." + document.getElementsByClassName("infoInput")[field - 1].name + " = \"\"");
    document.getElementsByClassName("infoInput")[field - 1].placeholder = ((document.getElementsByClassName("infoInput")[field - 1].name).charAt(0)).toUpperCase() + (document.getElementsByClassName("infoInput")[field - 1].name).substring(1) + "...";
  }
  eval("sessionStorage." + document.getElementsByClassName("infoInput")[field - 1].name + " = you." + document.getElementsByClassName("infoInput")[field - 1].name);
  document.getElementsByClassName("infoInput")[field - 1].value = "";
  document.getElementsByClassName("clearInfo")[field - 1].style.visibility = "hidden";
  document.getElementsByClassName("clearInfo")[field - 1].style.opacity = "0";
  document.getElementsByClassName("clearInfo")[field - 1].style.transition = "all .25s ease 0s";
  if (field == 1) {
    document.getElementById("profileName").innerHTML = "Welcome!";
  }
}

function gotIt3() {
  document.getElementById("profileTalk").innerHTML = "Which fighting styles do you want to train in? Choose wisely, this could save your life later on! You can choose up to three.";
  disableButton();
  document.getElementById("infoCont").style.visibility = "hidden";
  document.getElementById("infoCont").style.opacity = "0";
  document.getElementById("infoCont").style.transition = "all .25s ease 0s";
  document.getElementById("styles").style.visibility = "visible";
  document.getElementById("styles").style.opacity = "1";
  document.getElementById("styles").style.transition = "all .25s ease .25s";
  document.getElementById("ok").onclick = gotIt4;
}

function selectStyle(style) {
  if ((you.styles).length <= 3) {
    document.getElementsByClassName("styleButton")[style - 1].disabled = true;
    (you.styles).push(styles[style - 1]);
    localStorage.styles = JSON.stringify(styles);
    if ((you.styles).length == 1) {
      enableButton();
    }
    else if ((you.styles).length == 3) {
      for (var i = 0; i < document.getElementsByClassName("styleButton").length; i++) {
        document.getElementsByClassName("styleButton")[i].disabled = true;
      }
    }
  }
}

function gotIt4() {
  user(you);
  document.getElementById("profileTalk").innerHTML = "Now select the arena that you want to fight in.";
  document.getElementById("styles").style.visibility = "hidden";
  document.getElementById("styles").style.opacity = "0";
  document.getElementById("styles").style.transition = "all .25s ease 0s";
  document.getElementById("background").style.filter = "blur(.25em)";
  document.getElementById("background").style.transition = "filter .25s ease .25s";
  document.getElementById("arenasCont").style.visibility = "visible";
  document.getElementById("arenasCont").style.opacity = "1";
  document.getElementById("arenasCont").style.transition = "all .25s ease .25s";
  disableButton();
}

function user(user) {
  if ((user.styles).length == 1) {
    user.arms = user.styles[0].arms;
    user.legs = user.styles[0].legs;
    user.grappling = user.styles[0].grappling;
    user.defense = user.styles[0].defense;
    user.total = user.styles[0].total;
  }
  else if ((user.styles).length == 2) {
    user.arms = ((user.styles[0].arms + user.styles[1].arms) / (user.styles).length);
    user.legs = ((user.styles[0].legs + user.styles[1].legs) / (user.styles).length);
    user.grappling = ((user.styles[0].grappling + user.styles[1].grappling) / (user.styles).length);
    user.defense = ((user.styles[0].defense + user.styles[1].defense) / (user.styles).length);
    user.total = ((user.styles[0].total + user.styles[1].total) / (user.styles).length);
  }
  else if ((user.styles).length == 3) {
    user.arms = ((user.styles[0].arms + user.styles[1].arms + user.styles[2].arms) / (user.styles).length);
    user.legs = ((user.styles[0].legs + user.styles[1].legs + user.styles[2].legs) / (user.styles).length);
    user.grappling = ((user.styles[0].grappling + user.styles[1].grappling + user.styles[2].grappling) / (user.styles).length);
    user.defense = ((user.styles[0].defense + user.styles[1].defense + user.styles[2].defense) / (user.styles).length);
    user.total = ((user.styles[0].total + user.styles[1].total + user.styles[2].total) / (user.styles).length);
  }
}

function selectArena(arena) {
  document.getElementsByClassName("arena")[arena - 1].style.zIndex = "1";
  document.getElementsByClassName("arena")[arena - 1].style.position = "absolute";
  document.getElementsByClassName("arena")[arena - 1].style.left = document.getElementsByClassName("arena")[arena - 1].getBoundingClientRect().left + "px";
  document.getElementsByClassName("arena")[arena - 1].style.right = (window.innerWidth - document.getElementsByClassName("arena")[arena - 1].getBoundingClientRect().right) + "px";
  document.getElementsByClassName("arena")[arena - 1].style.top = document.getElementsByClassName("arena")[arena - 1].getBoundingClientRect().top + "px";
  document.getElementsByClassName("arena")[arena - 1].style.bottom = (window.innerHeight - document.getElementsByClassName("arena")[arena - 1].getBoundingClientRect().bottom) + "px";
  document.getElementsByClassName("arena")[arena - 1].style.borderRadius = "0";
  document.getElementsByClassName("arena")[arena - 1].style.height = "auto";
  document.getElementsByClassName("arena")[arena - 1].style.width = "auto";
  document.getElementsByClassName("arena")[arena - 1].style.border = ".5em solid var(--clarksonGreen)";
  document.getElementsByClassName("arena")[arena - 1].style.filter = "blur(.1em)";
  document.getElementsByClassName("arena")[arena - 1].style.transition = "z-index 0s ease 0s, position 0s ease 0s, left 0s ease 0s, right 0s ease 0s, top 0s ease 0s, bottom 0s ease 0s, border-radius 1s ease 0s, height 0s ease 0s, width 0s ease 0s, border 1s ease 0s, filter 1s ease 0s";
  document.getElementsByClassName("arena")[arena - 1].style.animation = "expand 1s ease 0s 1 forwards";
  setTimeout(() => {
    document.getElementsByClassName("arena")[arena - 1].style.left = "0"
  }, 1000);
  setTimeout(() => {
    document.getElementsByClassName("arena")[arena - 1].style.right = "0"
  }, 1000);
  setTimeout(() => {
    document.getElementsByClassName("arena")[arena - 1].style.top = "0"
  }, 1000);
  setTimeout(() => {
    document.getElementsByClassName("arena")[arena - 1].style.bottom = "0"
  }, 1000);
  setTimeout(() => {
    document.getElementsByClassName("arena")[arena - 1].style.animation = "none"
  }, 1000);
  for (var i = 0; i < document.getElementsByClassName("arena").length; i++) {
    if (i != (arena - 1)) {
      document.getElementsByClassName("arena")[i].style.visibility = "hidden";
      document.getElementsByClassName("arena")[i].style.opacity = "0";
      document.getElementsByClassName("arena")[i].style.transition = "all 0s ease 1s";
    }
    document.getElementsByClassName("arena")[i].style.pointerEvents = "none";
  }
  setTimeout(gotIt5, 1000);
}

function gotIt5() {
  document.getElementById("profileTalk").innerHTML = "And now it's time to fight!!!";
  sessionStorage.fights = 1;
  sessionStorage.more = "true";
  enableButton();
  document.getElementById("ok").onclick = fight;
}

function fight() {
  if ((sessionStorage.more == "true") && (enemies.length > 0)) {
    var enemy = Math.floor(Math.random() * enemies.length);
    document.getElementById("profileTalk").innerHTML = "Your " + ((sessionStorage.fight == 1) ? ("first") : ("next")) + " enemy is " + enemies[enemy].name + "! " + enemies[enemy].bio;
    outcome(enemies[enemy]);
  }
}

function outcome(enemy) {
  var youPoints = 0;
  var enemyPoints = 0;
  if (you.arms > enemy.arms) {
    youPoints++;
  }
  else if (enemy.arms > you.arms) {
    enemyPoints++;
  }
  if (you.legs > enemy.legs) {
    youPoints++;
  }
  else if (enemy.legs > you.legs) {
    enemyPoints++;
  }
  if (you.grapple > enemy.grapple) {
    youPoints++;
  }
  else if (enemy.grapple > you.grapple) {
    enemyPoints++;
  }
  if (you.defense > enemy.defense) {
    youPoints++;
  }
  else if (enemy.defense > you.defense) {
    enemyPoints++;
  }
  if (youPoints > enemyPoints) {
    sessionStorage.win = "true";
  }
  else if (enemyPoints > youPoints) {
    sessionStorage.win = "false";
  }
  else if (youPoints == enemyPoints) {
    if (you.total > enemy.total) {
      sessionStorage.win = "true";
    }
    else if (enemy.total > you.total) {
      sessionStorage.win = "false";
    }
    else if (you.total == enemy.total) {
      var chance = Math.ceil(Math.random() * 2);
      if (chance == 1) {
        sessionStorage.win = "true";
      }
      else if (chance == 2) {
        sessionStorage.win = "false";
      }
    }
  }
  if (sessionStorage.win == undefined) {
    sessionStorage.win = "true";
  }
  if (sessionStorage.win == "true") {
    document.getElementById("ok").onclick = win;
  }
  else if (sessionStorage.win == "false") {
    document.getElementById("ok").onclick = lose;
  }
  sessionStorage.fights++;
  var newEnemies = [];
  for (var i = 0; i < enemies.length; i++) {
    if (i != enemy) {
      newEnemies.push(enemies[i]);
    }
    enemies = newEnemies;
  }
}

function win() {
  document.getElementById("profileTalk").innerHTML = "Congrats, you won!!! Feel free to do another fight if you want.";
  if (enemies.length == 0) {
    document.getElementById("ok").onclick = done;
  }
  else if (enemies.length > 0) {
    document.getElementById("ok").onclick = notDone;
  }
}

function lose() {
  document.getElementById("profileTalk").innerHTML = "Aww, looks like you lost. Better luck next time!";
  document.getElementById("ok").onclick = notDone;
}

function notDone() {
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "1";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  setTimeout(() => (
    document.getElementById("more").open = true
  ), 250);
}

function done() {
  gameOver();
}

function more(more, event) {
  event.preventDefault();
  if (more == 1) {
    document.getElementById("more").open = false;
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0";
    document.getElementById("cover").style.transition = "all .25s ease 0s";
    if (enemies.length == 0) {
      gameOver();
    }
  }
  else if (more == 2) {
    document.getElementById("more").open = false;
    sessionStorage.more = "false";
    gameOver();
  }
}

function gameOver() {
  document.getElementById("profileTalk").innerHTML = "Game over! Thanks for playing!";
  disableButton();
  document.getElementById("gameOver").style.visibility = "visible";
  document.getElementById("gameOver").style.opacity = "1";
  document.getElementById("gameOver").style.transition = "all 0s ease 0s";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "1";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
}
