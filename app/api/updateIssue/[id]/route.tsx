import { updateIssueSchema } from "@/app/schemaValidations";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { IssueIdProps } from "../../issues/[id]/route";

export async function PUT(
  request: NextRequest,
  { params: { id } }: IssueIdProps
) {
  const body = await request.json();
  const validation = await updateIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const updatedIssue = await prisma.issue.update({
    where: {
      id: Number(id),
    },
    data: {
      description: body.description,
    },
  });
  return NextResponse.json(updatedIssue, { status: 201 });
}
