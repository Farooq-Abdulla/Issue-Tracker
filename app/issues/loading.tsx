import { Skeleton } from "@/components/ui/skeleton";
import StatusBadge from "@/components/ui/statusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/db";

const loading = async () => {
  const issues = await prisma.issue.findMany({
    select: {
      id: true,
    },
  });
  return (
    <div className="space-y-4">
      <div>
        <Skeleton className="h-[40px] w-[100px]" />
      </div>

      <Table className="border border-zinc-300 max-w-5xl">
        <TableHeader className="bg-neutral-100">
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <Skeleton className="w-[430px] h-[25px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[240px] h-[25px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[140px] h-[25px]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default loading;
