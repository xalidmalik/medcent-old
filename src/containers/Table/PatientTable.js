import React from "react";
import { Link } from "react-router-dom";
import { Dentist } from "../../helpers/Static/Icons";
import { History } from "../../helpers/History";

const PatientTable = props => {
  return (
    <div className="w-full overflow-auto rounded-lg med-table-wrapper">
      <table className="table-auto med-table">
        <thead>
          <tr>
            {props.header.map((i, index) => {
              return <th key={index}>{i.col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((i, index) => {
            return (
              <tr
                className={`border-gray-300 border-b hover:border-med-500 hover:bg-gray-100 cursor-pointer`}
                key={index}
                onDoubleClick={() => {
                  localStorage.setItem("SelectedPatient", JSON.stringify(i));
                  History.push("/patient/detail");
                }}
              >
                <td className="flex items-center">
                  <div className="rounded-full bg-gray-300 mr-4 p-2 w-12 h-12 min-h-12 min-w-12 flex items-center justify-center text-gray-800">
                    {i.Name[0] + i.Surname[0]}
                  </div>
                  {`${i.Name} ${i.Surname}`}
                </td>
                <td>{i.DocumentNo == null ? "" : i.DocumentNo}</td>
                <td>{i.Tc}</td>
                <td>{i.MobilePhone}</td>
                <td>{i.EMail}</td>
                <td
                  className={` font-bold ${
                    i.Balance < 0 ? "text-red-500" : " "
                  }`}
                >
                  {i.Balance} TL
                </td>
                <td>
                  <Link
                    className="w-12 h-12 text-gray-600 block rounded-lg hover:text-med-500"
                    onClick={() => {
                      localStorage.setItem(
                        "SelectedPatient",
                        JSON.stringify(i)
                      );
                    }}
                    to={{
                      pathname: "/patient/detail",
                      state: {
                        patient: i
                      }
                    }}
                  >
                    <span className="w-12 block my-auto">{Dentist.More}</span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
