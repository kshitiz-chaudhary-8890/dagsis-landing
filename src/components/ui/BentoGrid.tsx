import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Adapted from Aceternity UI's composable header/content grid pattern.
 * https://ui.aceternity.com/components/bento-grid
 */
export function BentoGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-1 gap-5", className)} {...props} />;
}

type BentoGridItemProps = Omit<ComponentProps<"article">, "title"> & {
  title: ReactNode;
  description: ReactNode;
  header: ReactNode;
  copyClassName?: string;
};

export function BentoGridItem({ title, description, header, className, copyClassName, children, ...props }: BentoGridItemProps) {
  return <article className={cn("flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white", className)} {...props}>
    {header}
    <div className={copyClassName}><h3>{title}</h3><p>{description}</p>{children}</div>
  </article>;
}
