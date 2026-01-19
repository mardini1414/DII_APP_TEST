import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import TableEmpty from "./TableEmpty";
import TableSkeleton from "./TableSkeleton";

type TableHeaderType = {
  label: string;
  minWidth?: number | string;
};

type Props<T> = {
  headers: TableHeaderType[];
  page: number;
  count: number;
  rowsPerPage?: number;
  isLoading: boolean;
  isEmpty: boolean;
  data: T[];
  showPagination?: boolean;
  handleChangePage?: (page: number) => void;
  handleChangeRowsPerPage?: (rows: number) => void;
  render: (data: T) => React.ReactNode;
};

export default function CustomTable<T>({
  headers,
  page,
  count,
  rowsPerPage = 10,
  isLoading,
  isEmpty,
  data,
  showPagination = true,
  handleChangePage = () => {},
  handleChangeRowsPerPage,
  render,
}: Props<T>) {
  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <div className="w-full rounded-md border">
      <div className="max-h-150 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead
                  key={header.label}
                  style={{ minWidth: header.minWidth }}
                  className="font-bold"
                >
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading && <TableSkeleton totalCell={headers.length} />}

            {isEmpty && !isLoading && <TableEmpty colSpan={headers.length} />}

            {!isLoading && !isEmpty && data?.map((row) => render(row))}
          </TableBody>
        </Table>
      </div>

      {showPagination && (
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-sm text-muted-foreground">
            Page {page + 1} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => handleChangePage(page - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page + 1 >= totalPages}
              onClick={() => handleChangePage(page + 1)}
            >
              Next
            </Button>

            {handleChangeRowsPerPage && (
              <select
                className="ml-2 rounded-md border px-2 py-1 text-sm"
                value={rowsPerPage}
                onChange={(e) =>
                  handleChangeRowsPerPage(Number(e.target.value))
                }
              >
                {[10, 25, 100].map((size) => (
                  <option key={size} value={size}>
                    {size} / page
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
