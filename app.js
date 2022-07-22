let robots = [
    {
        key: "Robot1",
        sil: 100
    },
    {
        key: "Robot2",
        sil: 115
    },
    {
        key: "Robot3",
        sil: 98
    },
    {
        key: "Robot4",
        sil: 250
    },
    {
        key: "Robot5",
        sil: 99
    }
]

const filtered = robots.filter(robot => robot.sil > 109)
console.log(filtered)

for(let i = 0; i < 21; i++){
    if(i == 5 || i == 10 || i == 15) continue;
    console.log(i)
}





