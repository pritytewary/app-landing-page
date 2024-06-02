import { cn } from "@/lib/utils";

export function Layout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={cn("w-full", className)}>{children}</main>;
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="flex items-center justify-center w-full">
      <div className={cn("flex flex-wrap w-full max-w-7xl px-6", className)}>
        {children}
      </div>
    </section>
  );
}
