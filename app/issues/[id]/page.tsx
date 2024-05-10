import AlertButtonOnClick from "@/components/ui/AlertButtonOnClick";
import AssignBox from "@/components/ui/AssignSelect";
import TextAreaComp from "@/components/ui/rhf-Textarea";
import StatusBadge from "@/components/ui/statusBadge";
import prisma from "@/prisma/db";
import { Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface IssueIdProps {
  params: {
    id: string;
  };
}

const IssueDetailsPage = async ({ params: { id } }: IssueIdProps) => {
  //   const { register, handleSubmit } = UseFormComp();
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!issue) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <div>
        <div className="max-w-3xl flex justify-between">
          <Heading>{issue.title}</Heading>
          {/* <Button className="h-[30px] bg-red-900 rounded-xl md:visible invisible" >
            Delete Issue
          </Button> */}
          <div className="flex space-x-2">
            <AlertButtonOnClick
              className="md:visible invisible"
              buttonText="Delete Issue"
              buttonClass=''
              id={id}
            />
            <AssignBox />
          </div>
        </div>
        <div className="flex space-x-3 my-3">
          <StatusBadge issueState={issue.status} />
          <p>{issue.created_at.toDateString()}</p>
        </div>
        <TextAreaComp id={id} issueDescription={issue.description} />
        {/* <RhfButton ButtonText="Update" /> */}
        {/* <Button className=" mt-3 md:invisible visible">Delete</Button> */}
        <AlertButtonOnClick
          className="md:invisible visible mt-3"
          buttonText="Delete"
          buttonClass=''
          id={id}
        />
      </div>
    </div>
  );
};

export default IssueDetailsPage;
