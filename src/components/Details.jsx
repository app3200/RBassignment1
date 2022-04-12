import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addStudent,
  editStudent,
  editCollege,
  srtStudent
} from "../store/action.js";

export const Details = ({ addNew }) => {
  const dispatch = useDispatch();
  let options = useSelector((e) => e.cllg);
  const [pref, setPref] = useState({
    id: Math.floor(Math.random() * (999 - 100 + 1) + 100)
  });

  function setData(e, d) {
    setPref({
      ...pref,
      [e]: d
    });
  }
  function add() {
    if (
      pref.pref1 === pref.pref2 ||
      pref.pref1 === pref.pref3 ||
      pref.pref2 === pref.pref3 ||
      pref.sName === undefined ||
      pref.sRank === undefined
    ) {
      alert("Please Enter Correct Details and Select Different Prefereces");
    } else {
      dispatch(addStudent(pref));
      addNew(false);
    }
  }
  return (
    <div id="adder">
      <h2
        style={{ float: "right" }}
        onClick={() => {
          addNew(false);
        }}
      >
        X
      </h2>
      <h3>Student Details and Preferences</h3>
      {"  "}
      <hr />
      <div id="inpdiv">
        <input
          type="text"
          placeholder="Enter Student Name"
          name="sName"
          onChange={(e) => {
            setData(e.target.name, e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Student Rank"
          name="sRank"
          onChange={(e) => {
            setData(e.target.name, e.target.value);
          }}
        />
        <br />
        <select
          name="pref1"
          onChange={(e) => {
            setData(e.target.name, e.target.value);
          }}
          required
        >
          <option value="" disabled selected>
            College Preference 1
          </option>
          {options.map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <br />
        <select
          name="pref2"
          onChange={(e) => {
            setData(e.target.name, e.target.value);
          }}
          required
        >
          <option value="" disabled selected>
            College Preference 2
          </option>
          {options.map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <br />
        <select
          name="pref3"
          onChange={(e) => {
            setData(e.target.name, e.target.value);
          }}
          required
        >
          <option value="" disabled selected>
            College Preference 3
          </option>
          {options.map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <br />
        <button
          placeholder="Submit"
          onClick={() => {
            add();
          }}
          style={{
            color: "white",
            background: "green",
            width: "126px",
            height: "26px",
            borderRadius: "2px"
          }}
        >
          Add Details
        </button>
      </div>
    </div>
  );
};
