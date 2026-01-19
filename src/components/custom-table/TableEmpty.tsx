import { TableRow, TableCell } from "@/components/ui/table";
import { Inbox } from "lucide-react";

type Props = {
  colSpan?: number;
  message?: string;
};

export default function TableEmpty({
  colSpan = 1,
  message = "Tidak ada data",
}: Props) {
  return (
    <TableRow>
      <TableCell
        colSpan={colSpan}
        className="h-40 text-center text-sm text-muted-foreground"
      >
        <Inbox size={60} className="mx-auto my-6" />
        {message}
      </TableCell>
    </TableRow>
  );
}
