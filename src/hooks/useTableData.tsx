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
    columns: [
      { field: "numero", headerName: "Nº", width: 50 },
      { field: "campo", headerName: "Campo", width: 150 },
      { field: "descricao", headerName: "Descrição", width: 700 },
      { field: "tipo", headerName: "Tipo", width: 50 },
      { field: "tamanho", headerName: "Tam.", width: 50 },
      { field: "decimais", headerName: "Dec.", width: 50 },
      { field: "entrada", headerName: "Entr.", width: 50 },
      { field: "saida", headerName: "Saída", width: 50 },
    ],
  };
};

export default useTableData;
