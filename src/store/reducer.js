import { addStud, editStud, editCllg, srtStud, getRes } from "./actionTypes.js";

const init = {
  avail: [
    { name: "IIT Madras", noOfSeats: 4 },
    { name: "IIT Kanpur", noOfSeats: 2 },
    { name: "IIT Bombay", noOfSeats: 1 },
    { name: "IIIT Hyderabad", noOfSeats: 3 },
    { name: "IIT Roorkee", noOfSeats: 1 },
    { name: "IIM Ahemedabad", noOfSeats: 2 }
  ],
  cllg: [
    "IIT Madras",
    "IIT Kanpur",
    "IIT Bombay",
    "IIIT Hyderabad",
    "IIT Roorkee",
    "IIM Ahemedabad"
  ],
  students: [
    {
      id: 785,
      sName: "Rohan",
      sRank: 2,
      pref1: "IIT Kanpur",
      pref2: "IIT Madras",
      pref3: "IIT Hyderabad"
    },
    {
      id: 554,
      sName: "Ramesh",
      sRank: 1,
      pref1: "IIT Bombay",
      pref2: "IIT Kanpur",
      pref3: "IIT Hyderabad"
    },
    {
      id: 685,
      sName: "Ankit",
      sRank: 4,
      pref1: "IIT Roorkee",
      pref2: "IIT Bombay",
      pref3: "IIT Hyderabad"
    },
    {
      id: 700,
      sName: "Shubham",
      sRank: 9,
      pref1: "IIT Kanpur",
      pref2: "IIT Madras",
      pref3: "IIT Hyderabad"
    },
    {
      id: 300,
      sName: "Roshan",
      sRank: 3,
      pref1: "IIT Bombay",
      pref2: "IIT Madras",
      pref3: "IIT Hyderabad"
    }
  ],
  result: []
};
export const reducer = (system = init, { type, payload }) => {
  switch (type) {
    case addStud:
      return { ...system, students: [...system.students, payload], resul: [] };
    case editStud:
      let arr = system.students;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === payload.id) {
          arr[i].sName = payload.sName || arr[i].sName;
          arr[i].sRank = payload.sRank || arr[i].sRank;
          arr[i].pref1 = payload.pref1 || arr[i].pref1;
          arr[i].pref2 = payload.pref2 || arr[i].pref2;
          arr[i].pref3 = payload.pref3 || arr[i].pref3;
        }
      }
      return { ...system, students: arr };
    case getRes:
      let sarr = [];
      for (let i = 0; i < system.students.length; i++) {
        sarr.push(system.students[i]);
      }
      sarr.sort((a, b) => {
        return a.sRank - b.sRank;
      });
      let res = [];
      for (let i = 0; i < sarr.length; i++) {
        let res1 = system.avail.filter((cllg) => cllg.name === sarr[i].pref1);
        let res2 = system.avail.filter((cllg) => cllg.name === sarr[i].pref2);
        let res3 = system.avail.filter((cllg) => cllg.name === sarr[i].pref3);
        if (res1[0].noOfSeats >= 1) {
          res1[0].noOfSeats = res1[0].noOfSeats - 1;
          res.push([sarr[i].sName, sarr[i].sRank, res1[0].name]);
        } else if (res2[0].noOfSeats >= 1) {
          res2[0].noOfSeats = res2[0].noOfSeats - 1;
          res.push([sarr[i].sName, sarr[i].sRank, res2[0].name]);
        } else if (res3[0].noOfSeats >= 1) {
          res3[0].noOfSeats = res3[0].noOfSeats - 1;
          res.push([sarr[i].sName, sarr[i].sRank, res3[0].name]);
        }
      }
      console.log(res);
      return { ...system, result: res };
    default:
      return system;
  }
};
