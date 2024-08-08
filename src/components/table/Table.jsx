import React, { useState, useEffect } from "react";
import candidates from "./TableData.js";

const Table = ({ searchQuery }) => {
  const [data, setData] = useState(candidates);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelected(newSelectAll ? data.map((_, index) => index) : []);
  };

  const handleSelect = (index) => {
    const newSelected = [...selected];
    if (newSelected.includes(index)) {
      newSelected.splice(newSelected.indexOf(index), 1);
    } else {
      newSelected.push(index);
    }
    setSelected(newSelected);
    setSelectAll(newSelected.length === data.length);
  };

  useEffect(() => {
    // Filter data based on searchQuery
    const filteredData = candidates.filter((candidate) => {
      return Object.values(candidate).some((value) => {
        if (value === undefined || value === null) {
          return false;
        }
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          const query = searchQuery ? searchQuery.toLowerCase() : '';
          return value.toString().toLowerCase().includes(query);
        }
        return false;
      });
    });

    setData(filteredData);
  }, [searchQuery]);

  return (
    <div>
      <div className="headingdiv">
        <h2 className="flex m-5 w-full text-lg text-left rtl:text-right text-black-500 light:text-black-400 font-bold">
          Candidates
        </h2>
        <button type="button" class="hover:bg-gray-100 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-white dark:border-gray-300 dark:hover:bg-white-700 dark:hover:border-gray-300 dark:focus:ring-gray-700">
          <div className="flex text-gray-400 ">
            <svg class="w-6 h-6 mr-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
            </svg>
            fliter
          </div>

        </button>
      </div>
      <h2 className="flex m-5 w-full text-lg text-left rtl:text-right text-gray-500 light:text-gray-400 font-bold">
        Total candidates
        <div className="flex p-1 pr-1.5 ml-3 rounded-lg bg-green-100">
          {data.length}
        </div>
      </h2>
      <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
          <thead className="text-xs mb-5 text-white-400 uppercase bg-white-50 light:bg-white-700 light:text-white-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('name')}>
                <div className="flex">
                  Name
                  <svg className="flex w-4 h-4 ml-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('rating')}>
                <div className="flex">
                  Rating
                  <svg className="w-4 h-4 ml-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('stages')}>
                <div className="flex">
                  Stages
                  <svg className="flex w-4 h-4 ml-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('date')}>
                <div className="flex">
                  Applied Date
                  <svg className="flex w-4 h-4 ml-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('owner')}>
                <div className="flex">
                  Owner
                  <svg className="flex w-4 h-4 ml-2 text-gray-400 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((candidate, index) => (
              <tr
                key={index}
                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      checked={selected.includes(index)}
                      onChange={() => handleSelect(index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                    />
                    <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap light:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={candidate.image}
                    alt={`${candidate.name} image`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{candidate.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <svg
                      className={`w-4 h-4 ms-1 ${!candidate.available ? 'text-gray-300' : 'text-yellow-300'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className={`ml-1 ${!candidate.available ? 'text-gray-300' : 'text-yellow-300'}`}>
                      {candidate.rating}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {candidate.stages}
                  <div className="max-w-20 flex items-center gap-x-0.5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-1.5 flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 ${i < candidate.progress ? `bg-${candidate.color}-600 dark:bg-${candidate.color}-500` : 'bg-gray-100 dark:bg-gray-200'
                          }`}
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">{candidate.date}</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap light:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={candidate.ownerIMG}
                    alt={`${candidate.owner} image`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{candidate.owner}</div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
