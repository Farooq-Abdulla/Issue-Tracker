import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export interface IssueIdProps {
  params: {
    id: string;
  };
}
export async function GET(
  request: NextRequest,
  { params: { id } }: IssueIdProps
) {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(issue, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: IssueIdProps
) {
  await prisma.issue.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(null, { status: 200 });
}
