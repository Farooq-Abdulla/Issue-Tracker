"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./Spinner";

interface Props {
  issueDescription: string;
  id: string;
}
const TextAreaComp = ({ issueDescription, id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      description: issueDescription,
    },
  });
  return (
    <div>
      <Textarea className="max-w-xl" {...register("description")} />
      <Button
        className="mt-2"
        onClick={handleSubmit(async (data) => {
          try {
            setIsLoading(true);
            await axios.put(`/api/updateIssue/${id}`, data);
            router.push("/issues");
            router.refresh();
          } catch (error) {
            setIsLoading(false);
            console.log(error);
          }
        })}
        disabled={isLoading}
      >
        Edit {isLoading && <LoadingSpinner />}
      </Button>
    </div>
  );
};

export default TextAreaComp;
