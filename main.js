let students = [
  {
    name: "Ha",
    gender: "female",
    poin: 8
  },
  {
    name: "Huy",
    gender: "male",
    poin: 9
  },
  {
    name: "Hung",
    gender: "male",
    poin: 7
  },
  {
    name: "Phuong",
    gender: "female",
    poin: 6
  },
  {
    name: "Huyen",
    gender: "female",
    poin: 10
  },
  {
    name: "Long",
    gender: "male",
    poin: 5
  },
  {
    name: "Luan",
    gender: "male",
    poin: 10
  },
  {
    name: "Linh",
    gender: "female",
    poin: 8
  },
];

//Cach 1
let sum = 0;
let avr

let diemtrungbinh = (value) => {
    for(let result of value){
        sum += result.poin;
    }
    avr = sum / value.length;
    return avr
}

console.log(diemtrungbinh(students))

//Cach 2
let points = [];
let avr_point = (students) => {
    for(let i = 0; i < students.length; i++){
        points.push(students[i].poin)
    }
    let sum = points.reduce((total, currentValue) => {return total += currentValue});
    let diemtrungbinh = sum/students.length;
    return diemtrungbinh;
}

console.log(avr_point(students))

//Cach 3
let avrpoint = (students) => {
    for(let i = 0; i<students.length; i++){
        let avr = 0;
        avr += students[i].poin/students.length
    }
    return avr
}

console.log(avrpoint(students))
