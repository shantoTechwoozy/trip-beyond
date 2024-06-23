"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useDialog } from "@/components/common/DialogContext";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  retypePassword: z.string().min(6, {
    message: "Retype password must be at least 6 characters.",
  }),
}).refine((data) => data.password === data.retypePassword, {
  message: "Passwords do not match",
  path: ["retypePassword"],
});

type FormSchemaType = z.infer<typeof formSchema>;

export function SignupForm() {
  const [isMounted, setIsMounted] = React.useState(false);
  const router = useRouter();
  const { setSignupDialogOpen } = useDialog(); // Use the context

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/signup", data);
      toast.success("Signup successful!");

      console.log("Signup successful, navigating to home");
      setTimeout(() => {
        if (isMounted) {
          console.log("Calling router.push('/')");
          router.push("/"); // Navigate to home after success
          setSignupDialogOpen(false); // Hide the signup form
        }
      }, 2000);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <ToastContainer />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="retypePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retype Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Retype your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
              onClick={() => alert("Forgot Password Clicked")}
            >
              Forgot Password?
            </button>
          </div>
          <DialogFooter className="flex flex-col space-y-2">
            <Button type="submit" className="w-full bg-orange-400 font-bold">
              Sign Up
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full bg-blue-400 text-white font-bold">
                Sign Up with Facebook
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full bg-red-400 text-white font-bold">
                Sign Up with Google
              </Button>
            </Link>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
