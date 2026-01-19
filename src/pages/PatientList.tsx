import CustomTable from "@/components/custom-table/CustomTable";
import { SelectField } from "@/components/SelectField";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { useGetPatients } from "@/hooks/use-get-patients";
import { formatDate } from "@/utils/format-date";

const TABLE_TITLE = [
  {
    label: "Nama",
  },
  {
    label: "NIK",
  },
  {
    label: "Tanggal",
  },
  {
    label: "Dokter",
  },
  {
    label: "Ruangan",
  },
  {
    label: "Diagnosa",
  },
];

const SORT_NAME_OPTIONS = [
  { label: "a - z", value: "ASC" },
  { label: "z - a", value: "DESC" },
];

const SORT_DATE_OPTIONS = [
  { label: "Terlama", value: "ASC" },
  { label: "Terbaru", value: "DESC" },
];

export default function PatientList() {
  const {
    data,
    total,
    page,
    perPage,
    isLoading,
    isEmpty,
    sortName,
    sortDate,
    handleSearchNameOrNIK,
    handleSortName,
    handleSortDate,
    handlePageChange,
    handlePerPageChange,
  } = useGetPatients();

  return (
    <div>
      <div className="flex gap-6 py-6">
        <Input placeholder="Cari nama/nik" onChange={handleSearchNameOrNIK} />
        <div className="flex gap-6 w-160">
          <SelectField
            placeholder="Urutkan nama"
            value={sortName}
            options={SORT_NAME_OPTIONS}
            onChange={handleSortName}
          />
          <SelectField
            placeholder="Urutkan tanggal"
            value={sortDate}
            options={SORT_DATE_OPTIONS}
            onChange={handleSortDate}
          />
        </div>
      </div>
      <CustomTable
        headers={TABLE_TITLE}
        data={data}
        page={page}
        rowsPerPage={perPage}
        count={total}
        isLoading={isLoading}
        isEmpty={isEmpty}
        handleChangePage={handlePageChange}
        handleChangeRowsPerPage={handlePerPageChange}
        render={(row) => (
          <TableRow key={row.nik}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.nik}</TableCell>
            <TableCell>{formatDate(row.date)}</TableCell>
            <TableCell>{row.doctor}</TableCell>
            <TableCell>{row.room}</TableCell>
            <TableCell>{row.diagnosis}</TableCell>
          </TableRow>
        )}
      />
    </div>
  );
}
