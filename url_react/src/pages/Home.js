import React, { useState } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Header from "../components/Header";
import SearhSection from "../components/SearhSection";

function Home() {
  const [table, setTable] = useState([]);

  console.log(table);
  return (
    <div className="App">
      <Header></Header>
      <ReactNotification />
      <div className="container">
        <div className="searchSection">
          <p>NGShrink URL Shortner</p>

          <SearhSection
            addShrinkData={setTable}
            currentSet={table}
          ></SearhSection>
          {table.length > 0 && (
            <table className="dataTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Url</th>
                  <th>Shrinked URL</th>
                </tr>
              </thead>
              <tbody>
                {table.map((value) => (
                  <tr key={value.val}>
                    <td>{value.val}</td>
                    <td>{value.full}</td>
                    <td>
                      <a href={value.short}>{value.short}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
