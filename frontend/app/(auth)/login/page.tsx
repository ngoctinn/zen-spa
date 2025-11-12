import { LoginForm } from "@/components/auth/LoginForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 relative">
      <ThemeToggle />
      <div className="max-w-md w-full space-y-8 p-6 sm:p-8 bg-card rounded-lg shadow-md border">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Đăng Nhập
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Chào mừng bạn quay trở lại ZenSpa
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
