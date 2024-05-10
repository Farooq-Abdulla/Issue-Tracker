import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../schemaValidations";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = await createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues, { status: 200 });
}
