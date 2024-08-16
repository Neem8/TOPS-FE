import React from "react";
import { Table } from "reactstrap";

export default function List() {
  let arr = [
    "Waking Up Early",
    "Having Breakfast",
    "Going to React Class",
    "Going to Office at 8:30 a.m.",
    "Having lunch at 2:00 p.m.",
    "Going Home at 6:00 p.m.",
    "Going to play volleyball",
    "Going to Sleep at 10:00 p.m.",
  ];
  return (

    <div>
      <h1 className="text-center text-4xl font-black">My Daily Schedule</h1>
      <div className="flex justify-center list-none">
      <table className="border-2 border-black border-solid w-1/4 h-1/4 mt-8 ml-8 mr-8">
          
        {arr.map((e, i) => (
          <tr className="border-2 border-black flex  ">
          <td className="border border-r-4 border-black ">
          <span className="text-red-500 ">{i + 1}.</span>
          </td>
          <td>
          <div className="flex">
              <div className="">
              {e}
              </div>
            </div>
          </td>
          </tr>
    ))}
      </table>
    </div>
    </div>
  );
}
