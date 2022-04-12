import { useDipatch, useSelector } from "react-redux";

export const Result = ({ shRes }) => {
  const results = useSelector((e) => e.result);
  const carr = ["lightgreen", "yellow", "whiteshadow", "aqua", "beige"];
  return (
    <div id="rdiv">
      <h3
        style={{ float: "right" }}
        onClick={() => {
          shRes(false);
        }}
      >
        X
      </h3>
      <h3>Results</h3>{" "}
      <div id="resdiv">
        <table id="table2">
          <thead id="thead2">
            <tr>
              <td className="td2">Student Name</td>
              <td className="td2">Rank</td>
              <td className="td2">Alloted College</td>
            </tr>
          </thead>
          <tbody id="tbody2">
            {results.map((e) => {
              return (
                <tr key={e[0]}>
                  <td className="td2">{e[0]}</td>
                  <td className="td2">{e[1]}</td>
                  <td
                    className="td2"
                    style={{
                      background:
                        carr[
                          (function getRndInteger(min, max) {
                            return Math.floor(Math.random() * (6 - 0)) + 0;
                          })()
                        ]
                    }}
                  >
                    {e[2]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
