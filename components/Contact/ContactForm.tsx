'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email()
})

export default function ContactForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: ''
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>){
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex gap-x-10">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Type your name" className="font-primary border-b border-b-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Type your email" className="font-primary border-b border-b-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Textarea placeholder="Type your message" className="font-primary border border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}