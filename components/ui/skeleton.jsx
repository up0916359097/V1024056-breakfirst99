import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
<<<<<<< HEAD
      className={cn("bg-primary/10 animate-pulse rounded-md", className)}
=======
      className={cn("bg-accent animate-pulse rounded-md", className)}
>>>>>>> ce541ea (123)
      {...props} />
  );
}

export { Skeleton }
