import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

const variants = {
  primary: "bg-fg text-on-accent hover:bg-accent-soft",
  secondary:
    "border border-line-strong bg-canvas text-fg hover:border-line-hover hover:bg-surface-hover",
} as const;

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
