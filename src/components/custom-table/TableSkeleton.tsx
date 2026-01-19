import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  totalCell: number;
  totalRow?: number;
};

export default function TableSkeleton({ totalCell, totalRow = 5 }: Props) {
  return (
    <>
      {Array.from({ length: totalRow }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: totalCell }).map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
