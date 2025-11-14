let iplTeams = [
  {
    team: "MI",
    fullTeamName: "Mumbai Indians",
    primaryColor: "Blue",
    secondaryColor: "Gold",
    captain: "Rohit Sharma",
    trophies: "🏆🏆🏆🏆🏆",
  },
  {
    team: "CSK",
    fullTeamName: "Chennai Super Kings",
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    captain: "MS Dhoni",
    trophies: "🏆🏆🏆🏆🏆",
  },
  {
    team: "RCB",
    fullTeamName: "Royal Challengers Bengaluru",
    primaryColor: "Red",
    secondaryColor: "Black",
    captain: "Faf du Plessis",
    trophies: "🏆",
  },
  {
    team: "KKR",
    fullTeamName: "Kolkata Knight Riders",
    primaryColor: "Purple",
    secondaryColor: "Gold",
    captain: "Shreyas Iyer",
    trophies: "🏆🏆🏆",
  },
  {
    team: "RR",
    fullTeamName: "Rajasthan Royals",
    primaryColor: "Pink",
    secondaryColor: "Blue",
    captain: "Sanju Samson",
    trophies: "🏆",
  },
  {
    team: "GT",
    fullTeamName: "Gujarat Titans",
    primaryColor: "Dark Blue",
    secondaryColor: "Aqua",
    captain: "Shubman Gill",
    trophies: "🏆",
  },
  {
    team: "SRH",
    fullTeamName: "Sunrisers Hyderabad",
    primaryColor: "Orange",
    secondaryColor: "Black",
    captain: "Pat Cummins",
    trophies: "🏆",
  },
  {
    team: "DC",
    fullTeamName: "Delhi Capitals",
    primaryColor: "Blue",
    secondaryColor: "Red",
    captain: "Rishabh Pant",
    trophies: "❌",
  },
  {
    team: "PBKS",
    fullTeamName: "Punjab Kings",
    primaryColor: "Red",
    secondaryColor: "Gold",
    captain: "Shikhar Dhawan",
    trophies: "❌",
  },
  {
    team: "LSG",
    fullTeamName: "Lucknow Super Giants",
    primaryColor: "Blue",
    secondaryColor: "Orange",
    captain: "KL Rahul",
    trophies: "❌",
  },
];

let Fname = document.querySelector("h1");
let Cname = document.querySelector("h3");
let trophies = document.querySelector("h2");
let btn = document.querySelector("button");
let body  = document.querySelector("body")
let sec= document.querySelector("#contain")

btn.addEventListener("click", function () {
  let ran = iplTeams[Math.floor(Math.random() * 10)];
  console.log(ran);

  Fname.innerText = ran.fullTeamName;
  Cname.innerText = ran.captain;
  trophies.innerText = ran.trophies;
  body.style.backgroundColor = ran.secondaryColor
  sec.style.backgroundColor = ran.primaryColor
});
