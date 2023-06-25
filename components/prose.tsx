import clsx from "clsx";

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={clsx(className, 'prose')}>{children}</div>
    )
  }