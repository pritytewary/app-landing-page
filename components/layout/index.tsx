import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
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
      <div className={cn("flex flex-wrap w-full max-w-7xl px-4", className)}>
        {children}
      </div>
    </section>
  );
}
