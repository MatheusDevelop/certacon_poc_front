import Image from "next/image";
import { Inter } from "next/font/google";
import useSWR from "swr";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { data: tableData, error } = useSWR(
    "http://localhost:8080/documentos",
    (url: string) => axios.get(url).then((r) => r.data)
  );
  if (error) return <div>Ocorreu um erro ao carregar os dados</div>;
  if (!tableData) return <div>Carregando...</div>;
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
      <DataGrid
        rows={tableData}
        columns={columns}
        className="shadow-lg"
        getRowId={(row) => row.idDocumento}
      />
    </div>
  );
}
