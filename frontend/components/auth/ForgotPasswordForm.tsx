"use client";

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
import { createBrowserSupabaseClient } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const supabase = createBrowserSupabaseClient();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        form.setError("root", { message: "Có lỗi xảy ra, vui lòng thử lại" });
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      form.setError("root", { message: "Có lỗi xảy ra, vui lòng thử lại" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-lg font-semibold text-green-600">Thành công!</h2>
        <p className="text-sm">
          Chúng tôi đã gửi email hướng dẫn đặt lại mật khẩu đến địa chỉ email
          của bạn. Vui lòng kiểm tra hộp thư và làm theo hướng dẫn.
        </p>
        <Button
          onClick={() => (window.location.href = "/login")}
          variant="outline"
        >
          Quay lại đăng nhập
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Nhập email đã đăng ký"
                  {...field}
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm text-destructive" role="alert">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Đang gửi..." : "Gửi hướng dẫn đặt lại mật khẩu"}
        </Button>

        <div className="text-center text-sm">
          <a href="/login" className="text-primary hover:underline">
            Quay lại đăng nhập
          </a>
        </div>
      </form>
    </Form>
  );
}
