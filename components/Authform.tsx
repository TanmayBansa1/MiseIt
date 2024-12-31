"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { createAccount, signInUser } from "@/lib/actions/user.actions"
import OTPModal from "./OTPModal"

type Props = {
    type: 'signin' | 'signup'
}

const Authform = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [accountId, setAccountId] = useState('');
    const formSchema = z.object({
        fullname: props.type === 'signup'
            ? z.string().min(2, {
                message: "Fullname must be at least 2 characters.",
            })
            : z.string().optional(),
        email: z.string().email({
            message: "Please enter a valid email.",
        })
    })

    type FormValues = z.infer<typeof formSchema>

    // 1. Define your form.
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: FormValues) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        setErrorMessage('')
        try {
            const user:{accountId: string} =
                props.type === "signup"
                    ? await createAccount({
                        fullname: values.fullname || "",
                        email: values.email,
                    })
                    : await signInUser({ email: values.email });

            setAccountId(user.accountId);
        } catch (error: any) {
            setErrorMessage("failed to create account")
        } finally {
            setIsLoading(false)
        }


    }
    return (<>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 auth-form">
                <h1 className="form-title">{props.type == 'signin' ? 'Login' : 'Create your Account'}</h1>
                {props.type == 'signup' && <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <div className="shad-form-item">

                                <FormLabel className="shad=form-label">Full Name</FormLabel>
                                <FormControl>
                                    <Input className="shad-input" placeholder="Enter your name"{...field} />
                                </FormControl>
                            </div>
                            <FormDescription className="shad=form-description">
                                This is your public display name.
                            </FormDescription>
                            <FormMessage className="shad-form-message" />
                        </FormItem>
                    )}
                />}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (<FormItem>
                        <div className="shad-form-item">
                            <FormLabel className="shad-form-label">Email</FormLabel>
                            <FormControl>
                                <Input className="shad-input" placeholder="Enter your email" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage className="shad-form-message" />

                    </FormItem>)}
                />
                <Button disabled={isLoading} className="form-submit-button " type="submit">
                    {props.type == 'signin' ? 'Login' : 'Create Account'}
                    {isLoading && <Image src='/assets/icons/loader.svg' alt='loading' className="ml-2 animate-spin" width={24} height={24} />}
                </Button>

                {errorMessage && <div >
                    <p className="error-message">{errorMessage}</p></div>}

                <div className="body-2 flex justify-center">
                    <p className="text-light-100">{props.type == 'signin' ? 'Don\'t have an account? ' : 'Already have an account? '}<Link href={props.type == 'signin' ? '/sign-up' : '/sign-in'} className="text-brand cursor-pointer">{props.type == 'signin' ? 'Sign up' : 'Sign in'}</Link></p>
                </div>
            </form>
        </Form>
        {/* otp verification */}
        {accountId && (
            <OTPModal email={form.getValues("email")} accountId={accountId} />
        )}
    </>
    )
}
export default Authform