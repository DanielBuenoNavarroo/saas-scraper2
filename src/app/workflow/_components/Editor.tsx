import { Workflow } from "@prisma/client";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import Topbar from "./nodes/topbar/Topbar";
import FlowEditor from "./FlowEditor";

interface Props {
  workflow: Workflow;
}

const Editor = ({ workflow }: Props) => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar
          title="Workflow editor"
          subtitle="Workflow name"
          workflowId={workflow.id}
        />
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
