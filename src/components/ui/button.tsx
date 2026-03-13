"use client";

import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
};

const variantStyles: Record<ButtonVariant, { base: string; icon?: string }> = {
  primary: {
    base: "nt-inline-flex nt-items-center nt-gap-2  nt-rounded-full nt-bg-theme nt-text-body nt-font-semibold nt-text-base hover:nt-opacity-90 nt-transition-opacity nt-shadow-lg nt-pr-2 nt-py-2.5 nt-pl-6",
    icon: "nt-w-8 nt-h-8 nt-rounded-full nt-bg-grey-dark nt-flex nt-items-center nt-justify-center nt-flex-shrink-0",
  },
  secondary: {
    base: "nt-inline-flex nt-items-center nt-px-6 nt-py-3.5 nt-rounded-full nt-bg-white nt-text-body nt-font-semibold nt-text-base hover:nt-opacity-90 nt-transition-opacity",
  },
};

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
  showArrow = undefined,
}: ButtonProps) {
  const styles = variantStyles[variant];
  const withArrow = showArrow ?? variant === "primary";

  return (
    <Link
      href={href}
      className={`${styles.base}${className ? ` ${className}` : ""}`}
    >
      {label}
      {withArrow && variant === "primary" && styles.icon && (
        <span className={styles.icon}>
          <RiArrowRightLine className="nt-w-4 nt-h-4 nt-text-white" />
        </span>
      )}
    </Link>
  );
}
