import { RegisterForm } from "@/components/auth/RegisterForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 relative">
      <ThemeToggle />
      <div className="max-w-md w-full space-y-8 p-6 sm:p-8 bg-card rounded-lg shadow-md border">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Đăng Ký
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Tạo tài khoản để trải nghiệm dịch vụ ZenSpa
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
