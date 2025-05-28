"use strict";

// let Dolphins = [44,23,71];
// let Koalas = [65,54,49];
// let total = 0;

// function total(list) {
//     let total = 0;
//     for (let i = 0; i<list.length; i++){
//         total +=list[i];
//     }
//     return total;
// }
// function checkWinner(avg, avg2){
// if (avg > avg2){
//     console.log("Dolphins win the trophy");
// }else if (avg < avg2) {
//     console.log("Koalas win the trophy")
// }else {
//     console.log("No team wins...")
// }

// }

// let calcAverage = (total, length) => total / length;

// scoreDolphins = calcAverage(total(Dolphins)/Dolphins.length);
// scoreKoales = calcAverage(total(Koalas)/Koalas.length)

// checkWinner(scoreDolphins,scoreKoales);

// function calcTip(bill){
//     if (bill >= 50 && bill <=300){
//         return bill * 0.15;
//     }else {
//         return bill * 0.2;
//     }
// }

// let bills = new Array(125,555,44);
// let tips = new Array();

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// }

// let total = new Array();

// for (let i = 0; i < bills.length; i++) {
//     total.push(tips[i]+bills[i]);
// }

let mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  fullName: function () {
    console.log(
      $(this.firstName + " " + this.lastName) +
        "'s has BMI (" +
        this.bmi +
        ")" +
        "is higher than " +
        mark.firstName +
        " " +
        mark.lastName +
        "'s (" +
        mark.bmi +
        ")!"
    );
  },
};

let john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
  },
  fullName: function () {
    console.log(
      $(this.firstName + " " + this.lastName) +
        "'s has BMI (" +
        this.bmi +
        ")" +
        "is higher than " +
        mark.firstName +
        " " +
        mark.lastName +
        "'s (" +
        mark.bmi +
        ")!"
    );
  },
};

mark.calcBMI();
john.calcBMI();
john.fullName();

let x = 10;
