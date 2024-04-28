"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { z } from "zod";

import { schema } from "./formSchema";

export const MailForm = () => {
  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: "",
      last: "",
      file: undefined,
    },
  });

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(console.log)}>
        <div className='flex gap-2'>
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
            name='last'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormDescription>Your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          // control={form.control}
          name='file'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Document</FormLabel>
              <FormControl>
                <Input placeholder='' type='file' {...field} />
              </FormControl>
              <FormDescription>File to be.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
