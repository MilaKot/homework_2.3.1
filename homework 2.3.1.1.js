const players = [
    {"id": 1,"name": "ivan","scorepoints": 4500},
    {"id": 2,"name": "petr","scorepoints": 3600},
    {"id": 3,"name": "vadim","scorepoints": 3433},
    {"id": 4,"name": "olga","scorepoints": 2356},
];
let scores = [];
for(let player in players) {
    scores.push(players[player].scorepoints);
}
let maxScore = Math.max(...scores);
let maxPlayer = players.find(player => player.scorepoints === maxScore);
console.log(maxPlayer);