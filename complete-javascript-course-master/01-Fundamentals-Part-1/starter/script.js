let Dolphins = [96,108,89];
let Koalas = [88,91,110];
let total = 0;


function avg(list) {
    let avg;
    let total = 0;
    for (let i = 0; i<list.length; i++){
        total +=list[i];
    }
    avg = total/list.length;
    return avg;
}

if (avg(Dolphins) > avg(Koalas)){
    console.log("Dolphins win the trophy");
}else if (avg(Dolphins) < avg(Koalas)) {
    console.log("Koalas win the trophy")
}else {
    console.log("Both win the trophy")
}