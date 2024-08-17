"use client"

import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod"
import { Rocket } from 'lucide-react';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


const formSchema = z.object({
    fullname: z.string().min(2, { message: "Fullname must be at least 2 characters.", }),
    phone: z.string().min(3).max(15).regex(/^\d+$/, { message: 'Phone number must contain only digits' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(5, { message: "Message must be at least 5 characters.", }),
})

const Portform = () => {
    const [onprocess, setOnprocess] = useState(false);
    const [onmessage, setOnmessage] = useState(false);

    const formPost = async (raw) => {
        setOnprocess(true);
        try {
            const response = await axios.post('/contact/api/lead', raw, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                form.reset();
                console.log("Data is been Added");
                setOnmessage(true);
                setOnprocess(false);
                setTimeout(() => {
                    setOnmessage(false);
                }, 1200);
            }
        } catch (error) {
            console.error(error);
            form.reset();
        }
    };


    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            phone: "",
            email: "",
            message: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        const today = new Date();
        formPost({ ...values, today });

    }
    return (
        <div className="form-contact-sec">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3" id="formSubmit">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" {...field} disabled={onprocess} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone Number" {...field} disabled={onprocess} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email Address" {...field} disabled={onprocess} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Inquiry</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your Enquiry or Message" {...field} rows={7} disabled={onprocess} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={onprocess}>{onprocess ? 'Sending...' : 'Submit'}</Button>
                </form>
            </Form>
            {onmessage && 
            <Alert className="ty-box">
                <Rocket />
                <AlertTitle>Message sent successfully.</AlertTitle>
                <AlertDescription>
                    Thank you for your patience. We'll respond shortly.
                </AlertDescription>
            </Alert>}
        </div>
    )
}

export default Portform
