import { Button } from "@/components/ui/button";
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
import { Issue } from "@prisma/client";
import Link from "next/link";

export async function getAllIssues() {
  const response = await fetch("http://localhost:3000/api/issues", {
    method: "GET",
    next: { revalidate: 1 },
  });
  const issues: Issue[] = await response.json();
  return issues;
}

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany({
    select: {
      id: true,
      title: true,
      status: true,
      created_at: true,
    },
  });
  // const issues = await getAllIssues();

  return (
    <div className="space-y-4">
      <Button>
        <Link href={"/issues/new"}>New Issue</Link>
      </Button>
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
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </TableCell>
              <TableCell>{issue.created_at.toDateString()}</TableCell>
              <TableCell>{<StatusBadge issueState={issue.status} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
