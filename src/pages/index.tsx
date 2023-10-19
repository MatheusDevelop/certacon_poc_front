import useSWR from "swr";
import axios from "axios";
import useTableData from "@/hooks/useTableData";
import Table from "../components/Table";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Home() {
  const { tableData, error } = useTableData();
  if (error) return <div>Ocorreu um erro ao carregar os dados</div>;
  const columns = [
    { field: "numero", headerName: "Nº", width: 50 },
    { field: "campo", headerName: "Campo", width: 150 },
    { field: "descricao", headerName: "Descrição", width: 700 },
    { field: "tipo", headerName: "Tipo", width: 50 },
    { field: "tamanho", headerName: "Tam.", width: 50 },
    { field: "decimais", headerName: "Dec.", width: 50 },
    { field: "entrada", headerName: "Entr.", width: 50 },
    { field: "saida", headerName: "Saída", width: 50 },
  ];

  return (
    <div className="h-screen w-screen p-5 bg-white">
      <Backdrop sx={{ color: "#fff", zIndex: 99 }} open={!tableData}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {tableData && <Table tableData={tableData} columns={columns} />}
    </div>
  );
}
