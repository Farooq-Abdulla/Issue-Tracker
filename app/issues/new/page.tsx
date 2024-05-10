"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Callout, Heading, Text } from "@radix-ui/themes";
import { z } from "zod";
import { createIssueSchema } from "@/app/schemaValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingSpinner } from "@/components/ui/Spinner";
import { resolve } from "path";

type FormValues = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
      console.log(response.data, response.status);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl space-y-3 ">
      <Heading>New Issue</Heading>
      <Input type="text" placeholder="Title" {...register("title")} />
      {errors.title && (
        <Text color="red" as="p">
          {errors.title.message}
        </Text>
      )}
      <Textarea placeholder="Description..." {...register("description")} />
      {errors.description && (
        <Text color="red" as="p">
          {errors.description.message}
        </Text>
      )}
      <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
        Submit {isLoading && <LoadingSpinner />}
      </Button>
    </div>
  );
};

export default NewIssuePage;
