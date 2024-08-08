import React from "react";
import Table from "../components/table/Table";

function Page() {
  return (
    <div className="page">
      <h2 className="flex m-5 w-full text-lg text-left rtl:text-right text-black-500 light:text-black-400 font-bold">
      Candidates 
      </h2>
      <Table />
    </div>
  );
};

export default Page;