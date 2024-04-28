"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { schema } from "./formSchema";
import { onSubmitAction } from "./formSubmit";

const FileUpload = () => {
  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: "",
    },
  });

  // Updated submit handler to include file handling
  async function onSubmit(data: z.output<typeof schema>) {
    const formData = new FormData();
    formData.append("first", data.first);
    if (data.file instanceof File) {
      formData.append("file", data.file);
    }

    onSubmitAction(formData);
    console.log(await onSubmitAction(formData));
  }

  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Upload</CardTitle>
          <CardDescription>Generate </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
              {/* New File Input Field */}
              <FormField
                control={form.control}
                name='first'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='' {...field} />
                    </FormControl>
                    <FormDescription>Your first name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='file'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=''
                        accept='.pdf, .ppt'
                        type='file'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Upload your syllabus here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex justify-between'></CardFooter>
      </Card>
    </div>
  );
};

export default FileUpload;
