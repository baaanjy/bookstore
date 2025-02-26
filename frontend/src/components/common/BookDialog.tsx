import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"

import Book from "@/types/book";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  title: z.string().max(15),
  author: z.string().max(15),
  publisher: z.string().max(15),
  pub_date: z.string().max(10),
  sales: z.number().positive(),
  stock: z.number().positive(),
  price: z.number().positive(),
  description: z.string().max(15),
  details: z.string().max(500)
})

interface Props{
  book?: Book;
  children: ReactNode;
  dialogTitle: string;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export default function BookDialog({book, children, dialogTitle, onSubmit}:Props){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book?.title,
      author: book?.author,
      publisher: book?.publisher,
      pub_date: book?.pub_date,
      sales: book?.sales,
      stock: book?.stock,
      price: book?.price,
      description: book?.description,
      details: book?.details,
    }
  })


  return(
    <Dialog>
      {children}
      <DialogContent className="max-w-4xl rounded-none">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">책 제목</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">저자</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publisher"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">출판사</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pub_date"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">출판일</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">가격</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">소개</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sales"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">판매량</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4">
                    <FormLabel className="h-full flex items-center justify-center">재고</FormLabel>
                    <FormControl className="col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="pl-3">상세 내용</FormLabel>
                    <FormControl className="mt-3">
                      <div className="h-48">
                        <textarea {...field} className="w-full h-48 resize-none p-3 border rounded-md border-input shadow-sm text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <DialogFooter>
              <Button type="submit" className="bg-myblue hover:bg-myblue hover:text-myyellow">제출</Button>
            </DialogFooter>
          </form>
        </Form>
        
      </DialogContent>
    </Dialog>
  )
}
