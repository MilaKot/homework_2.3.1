// Тестовые данные
let test1 = [{"id": 1,"name": "ivan","scorepoints": 4500}];// Массив с одним игроком.
let test2 = [{"id": 1,"name": "ivan","scorepoints": 4500}, {"id": 2,"name": "petr","scorepoints": 4500}];// Массив с несколькими игроками, у которых одинаковое количество очков.
let test3 = [{"id": 1,"name": "ivan","scorepoints": 4500}, {"id": 2,"name": "petr","scorepoints": 3600}];// Массив с несколькими игроками, у которых разное количество очков.
let test4 = [];//Пустой массив.
// Функция для тестирования
function testMaxPlayer(testData) {
    let scores = [];
    for(let player in testData) {
        scores.push(testData[player].scorepoints);
    }
    let maxScore = Math.max(...scores);
    let maxPlayer = testData.find(player => player.scorepoints === maxScore);
    console.log(maxPlayer);
}
// Запуск тестов
testMaxPlayer(test1);
testMaxPlayer(test2);
testMaxPlayer(test3);
testMaxPlayer(test4);

