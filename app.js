let robots = [
    {
        key: "Robot1",
        power: 95
    },
    {
        key: "Robot",
        power: 56 
    },
    {
        key: "Robot3",
        power: 192
    },
    {
        key: "Robot4",
        power: 100
    },
    {
        key: "Robot5",
        power: 111
    }
]

const filtered = robots.filter(robot => robot.power > 100)
console.log(filtered)

for(let i = 0; i < 21; i++){
    if(i == 5 || i == 10 || i == 15) continue;
console.log(i); 
}