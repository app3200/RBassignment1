import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "./Details";
import { Result } from "./Result";
import { addStudent, editStudent, getResult } from "../store/action.js";

export const Register = () => {
  let students = useSelector((e) => e.students);
  const [edit, editDet] = useState({});
  const [res, shRes] = useState(false);

  const [data, addNew] = useState(false);

  const carr = ["lightgreen", "yellow", "whiteshadow", "aqua", "beige"];

  const dispatch = useDispatch();

  let options = useSelector((e) => e.cllg);

  function editData(e, d) {
    editDet({
      ...edit,
      [e]: d
    });
  }
  function handler(e) {
    if (e.key === "Enter") {
      if (
        edit.pref1 === edit.pref2 ||
        edit.pref1 === edit.pref3 ||
        edit.pref2 === edit.pref3
      ) {
        alert("Select Different Prefereces");
      } else {
        dispatch(editStudent(edit));
        editDet({ id: 0 });
      }
    }
  }

  return (
    <div>
      <div id="ddiv">
        <h3>Student List</h3>
        <table id="table1">
          <thead id="thead1">
            <tr>
              <th>Student Name</th>
              <th>Rank</th>
              <th>College Preference 1</th>
              <th>College Preference 2</th>
              <th>College Preference 3</th>
            </tr>
          </thead>
          <tbody id="tbody1">
            {students.map((e) => {
              return (
                <tr
                  key={e.id}
                  onClick={() => {
                    editDet({ ...edit, id: e.id });
                  }}
                  onKeyPress={(e) => {
                    handler(e);
                  }}
                >
                  <td className="td1">
                    {e.id === edit.id ? (
                      <input
                        type="text"
                        placeholder="Name"
                        name="sName"
                        onChange={(e) => {
                          editData(e.target.name, e.target.value);
                        }}
                      />
                    ) : (
                      e.sName
                    )}
                  </td>
                  <td className="td1">
                    {e.id === edit.id ? (
                      <input
                        type="number"
                        placeholder="Rank"
                        name="sRank"
                        onChange={(e) => {
                          editData(e.target.name, e.target.value);
                        }}
                      />
                    ) : (
                      e.sRank
                    )}
                  </td>
                  <td
                    className="td1"
                    style={{
                      background:
                        carr[
                          (function getRndInteger(min, max) {
                            return Math.floor(Math.random() * (6 - 0)) + 0;
                          })()
                        ]
                    }}
                  >
                    {e.id === edit.id ? (
                      <select
                        name="pref1"
                        onChange={(e) => {
                          editData(e.target.name, e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected>
                          Preference 1
                        </option>
                        {options.map((e) => {
                          return (
                            <option value={e} key={e}>
                              {e}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      e.pref1
                    )}
                  </td>
                  <td
                    className="td1"
                    style={{
                      background:
                        carr[
                          (function getRndInteger(min, max) {
                            return Math.floor(Math.random() * (6 - 0)) + 0;
                          })()
                        ]
                    }}
                  >
                    {e.id === edit.id ? (
                      <select
                        name="pref2"
                        onChange={(e) => {
                          editData(e.target.name, e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected>
                          Preference 2
                        </option>
                        {options.map((e) => {
                          return (
                            <option value={e} key={e}>
                              {e}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      e.pref2
                    )}
                  </td>
                  <td
                    className="td1"
                    style={{
                      background:
                        carr[
                          (function getRndInteger(min, max) {
                            return Math.floor(Math.random() * (6 - 0)) + 0;
                          })()
                        ]
                    }}
                  >
                    {e.id === edit.id ? (
                      <select
                        name="pref3"
                        onChange={(e) => {
                          editData(e.target.name, e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected>
                          Preference 3
                        </option>
                        {options.map((e) => {
                          return (
                            <option value={e} key={e}>
                              {e}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      e.pref3
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="button"
          onClick={() => {
            addNew(true);
          }}
        >
          Add New Student
        </button>
        <button
          className="button"
          onClick={() => {
            shRes(true);
            dispatch(getResult());
          }}
        >
          Get Result
        </button>
      </div>
      <div id="adiv">
        {data ? (
          <>
            <Details addNew={addNew} />
          </>
        ) : (
          ""
        )}
      </div>
      {res ? <Result shRes={shRes} /> : ""}
    </div>
  );
};
