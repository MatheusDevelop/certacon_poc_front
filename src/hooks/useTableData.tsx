import axios from "axios";
import useSWR from "swr";
const useTableData = () => {
  const { data, error } = useSWR(
    process.env.API_URL + "/documents",
    (url: string) => axios.get(url).then((r) => r.data)
  );
  return {
    tableData: data,
    error,
  };
};

export default useTableData;
