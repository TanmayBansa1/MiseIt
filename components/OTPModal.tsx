"use client"
import React, { FormEvent, MouseEvent, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,

} from "@/components/ui/alert-dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Image from 'next/image'
import { Button } from './ui/button'
import { LucideAlignVerticalJustifyCenter } from 'lucide-react'
import { sendEmailOTP, verifyOTP } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

type Props = {
    email: string;
    accountId: string;
}

const OTPModal = (props: Props) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            const sessionId = await verifyOTP({
                accountId: props.accountId,
                otp
            })
            console.log(sessionId);
            if(sessionId){

                router.push('/')
            }
        }catch(err){
            console.log(err, "Failed to verify OTP");
            setErrorMessage("Invalid OTP");
            throw err;
        }finally{
            setIsLoading(false)
        }
        
    }
    const handleResend = async () => {
        setIsLoading(true)
        try{
            await sendEmailOTP(props.email)
        }catch(err){
            console.log(err, "Failed to resend OTP");
            setErrorMessage("Failed to resend OTP");
            throw err;
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>

            <AlertDialogContent className='shad-alert-dialog'>
                <AlertDialogHeader className='relative flex justify-center'>
                    <AlertDialogTitle className='flex-center h2' >
                        Enter One-Time Password
                        <Image
                            src="/assets/icons/close-dark.svg"
                            alt="close"
                            width={20}
                            height={20}
                            onClick={() => setIsOpen(false)}
                            className="otp-close-button"
                        />

                    </AlertDialogTitle>
                    <AlertDialogDescription className='text-light-100 text-center '>
                        We have sent an OTP to <span className='font-medium text-sky-900 pl-1'>{props.email} alsd@gmail.com</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
                    <InputOTPGroup className='shad-otp flex-center'>
                        <InputOTPSlot index={0} className='shad-otp-input text-sky-950 text-xl' />
                        <InputOTPSlot index={1} className='shad-otp-input text-sky-950 text-xl' />
                        <InputOTPSlot index={2} className='shad-otp-input text-sky-950 text-xl' />
                        <InputOTPSlot index={3} className='shad-otp-input text-sky-950 text-xl' />
                        <InputOTPSlot index={4} className='shad-otp-input text-sky-950 text-xl' />
                        <InputOTPSlot index={5} className='shad-otp-input text-sky-950 text-xl' />
                    </InputOTPGroup>
                </InputOTP>

                <AlertDialogFooter>
                    <div className="flex w-full flex-col gap-4">
                        <AlertDialogAction
                            onClick={handleSubmit}
                            className="w-full bg-sky-950 rounded-full hover:bg-sky-800 h-12"
                            type="button"
                            disabled={isLoading}
                        >
                            Submit
                            {isLoading && (
                                <Image
                                    src="/assets/icons/loader.svg"
                                    alt="loader"
                                    width={24}
                                    height={24}
                                    className="ml-2 animate-spin"
                                />
                            )}
                        </AlertDialogAction>
                        <div className='text-center text-sm text-light-100'>
                            Didn't receive the code?<Button variant={'link'} onClick={handleResend} className=' font-medium cursor-pointer'>Resend</Button>
                        </div>
                        {errorMessage && (
                            <div className='text-center text-sm text-error'>
                                {errorMessage}
                            </div>)
                        }
                    </div>
                </AlertDialogFooter>
                
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default OTPModal