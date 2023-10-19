import { DataGrid, GridColDef } from "@mui/x-data-grid";
interface DataProps {
  tableData: any[];
  columns: GridColDef<any>[];
}
const Table: React.FC<DataProps> = ({ tableData, columns }) => {
  return (
    <DataGrid
      rows={tableData}
      columns={columns}
      className="shadow-lg"
      getRowId={(row) => row.idDocumento}
    />
  );
};
export default Table;
