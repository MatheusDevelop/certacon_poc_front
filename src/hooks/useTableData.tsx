import axios from "axios";
import React from "react";
import useSWR from "swr";

const useTableData = () => {
  const { data, error } = useSWR(
    "http://localhost:8080/documents",
    (url: string) => axios.get(url).then((r) => r.data)
  );
  return {
    tableData: data,
    error,
  };
};

export default useTableData;
