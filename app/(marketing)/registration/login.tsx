"use client";

import * as React from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useDialog } from "@/components/common/DialogContext";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

type FormSchemaType = z.infer<typeof formSchema>;

export function LoginForm() {
  const [isMounted, setIsMounted] = React.useState(false);
  const router = useRouter();
  const { setLoginDialogOpen } = useDialog();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", data);
      toast.success("Login successful!");

      setTimeout(() => {
        if (isMounted) {
          router.push("/"); // Navigate to home after success
          setLoginDialogOpen(false); // Hide the login form
        }
      }, 2000);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <ToastContainer />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 p-4 sm:p-6 md:p-8 lg:p-0"
        >
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
              Log in
            </Button>
            <Button variant="outline" className="w-full bg-blue-400 text-white font-bold">
              Log in with Facebook
            </Button>
            <Button variant="outline" className="w-full bg-red-400 text-white font-bold">
              Log in with Google
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
