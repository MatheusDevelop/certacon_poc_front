import useTableData from "@/hooks/useTableData";
import Table from "../components/Table";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

export default function Home() {
  const { tableData, error, columns } = useTableData();
  return (
    <div className="h-screen w-screen p-5 bg-white">
      {error && (
        <div className="flex fixed z-30 top-0 left-0">
          <Alert severity="error" className="w-screen">
            Ocorreu um erro ao carregar os dados
          </Alert>
        </div>
      )}
      <Backdrop sx={{ color: "#fff", zIndex: 99 }} open={!tableData && !error}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {tableData && <Table tableData={tableData} columns={columns} />}
    </div>
  );
}
