import { auth } from "@clerk/nextjs/server";
import Editor from "app/workflow/_components/Editor";
import prisma from "lib/prisma";
import React from "react";

interface Props {
  params: { workflowId: string };
}

const page = async ({ params }: Props) => {
  const { workflowId } = await params;
  const { userId } = await auth();

  if (!userId) {
    return <div>unauthenticated</div>;
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    return <div>Workflow not found</div>;
  }

  return <Editor workflow={workflow} />;
};

export default page;
