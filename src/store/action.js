import { addStud, editStud, editCllg, srtStud, getRes } from "./actionTypes";

export const editStudent = (payload) => ({
  type: editStud,
  payload
});

export const editCollege = (payload) => ({
  type: editCllg,
  payload
});
export const srtStudent = (payload) => ({
  type: srtStud,
  payload
});
export const addStudent = (payload) => ({
  type: addStud,
  payload
});
export const getResult = (payload) => ({
  type: getRes,
  payload
});
