"use client";

import Button, { type ButtonVariant } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

type HTMLContent = string | { __html: string };

interface ModuleTitleProps {
  suppertitle?: HTMLContent;
  title?: HTMLContent;
  subtitle?: HTMLContent;
  ctaText?: string;
  ctaHref?: string;
  btnVariant?: "dark" | "primary" | "link" | "outline" | "secondary" | "white";
  className?: string;
  variant?: "v1" | "v2" | "v3";
  colorVariant?: "light" | "dark" | "primary";
}

// ✅ Safe content renderer
const RenderContent = ({ content }: { content?: HTMLContent }) => {
  if (!content) return null;

  if (typeof content === "object" && "__html" in content) {
    return <span dangerouslySetInnerHTML={content} />;
  }

  return <>{content}</>;
};

// Motion wrapper
const MotionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

export const ModuleTitle: React.FC<ModuleTitleProps> = ({
  suppertitle,
  title,
  subtitle,
  ctaText,
  ctaHref,
  btnVariant,
  className = "",
  variant = "v1",
  colorVariant = "dark",
}) => {
  if (!suppertitle && !title && !subtitle && !ctaText) return null;

  const buttonVariant: ButtonVariant | undefined =
    btnVariant === "secondary" || btnVariant === "outline"
      ? "secondary"
      : "primary";

  const getTitleColor = () => {
    switch (colorVariant) {
      case "light":
        return "nt-text-white";
      case "primary":
        return "nt-text-title";
      case "dark":
      default:
        return "nt-text-title";
    }
  };

  const getParagraphColor = () => {
    switch (colorVariant) {
      case "light":
        return "nt-text-white nt-text-base";
      case "primary":
        return "nt-text-desc nt-text-base";
      case "dark":
      default:
        return "nt-text-desc nt-text-base";
    }
  };

  // ✅ Variant 1 – Centered
  if (variant === "v1") {
    return (
      <MotionWrapper
        className={`nt-text-center nt-space-y-3 nt-mb-16 nt-max-w-[1080px] nt-m-auto ${className}`}
      >
        {suppertitle && (
          <p
            className={`nt-flex nt-items-center nt-gap-2 nt-mb-3 ${getParagraphColor()}`}
            {...(typeof suppertitle === "object"
              ? { dangerouslySetInnerHTML: suppertitle }
              : {})}
          >
            {typeof suppertitle === "string" ? suppertitle : null}
          </p>
        )}

        {title && (
          <h2
            className={`nt-text-h2 ${getTitleColor()}`}
            {...(typeof title === "object"
              ? { dangerouslySetInnerHTML: title }
              : {})}
          >
            {typeof title === "string" ? title : null}
          </h2>
        )}

        {subtitle && (
          <p className={getParagraphColor()}>
            <RenderContent content={subtitle} />
          </p>
        )}

        {ctaText && (
          <Button
            label={ctaText}
            href={ctaHref || "#"}
            {...(buttonVariant ? { variant: buttonVariant } : {})}
          />
        )}
      </MotionWrapper>
    );
  }

  // ✅ Variant 2 – Left-Aligned
  if (variant === "v2") {
    return (
      <MotionWrapper
        className={`nt-flex nt-flex-wrap nt-justify-between nt-gap-6 nt-mb-16 ${className}`}
      >
        <div className="nt-max-w-[850px] nt-space-y-2">
          {suppertitle && (
            <p
              className={`nt-flex nt-items-center nt-gap-2 nt-mb-3 ${getParagraphColor()}`}
              {...(typeof suppertitle === "object"
                ? { dangerouslySetInnerHTML: suppertitle }
                : {})}
            >
              {typeof suppertitle === "string" ? suppertitle : null}
            </p>
          )}

          {title && (
            <h2
              className={`nt-text-h2 ${getTitleColor()}`}
              {...(typeof title === "object"
                ? { dangerouslySetInnerHTML: title }
                : {})}
            >
              {typeof title === "string" ? title : null}
            </h2>
          )}
        </div>

        <div className="nt-max-w-md nt-flex nt-flex-col nt-justify-end nt-gap-8">
          {subtitle && (
            <p className={getParagraphColor()}>
              <RenderContent content={subtitle} />
            </p>
          )}

          {ctaText && (
            <Button
              label={ctaText}
              href={ctaHref || "#"}
              {...(buttonVariant ? { variant: buttonVariant } : {})}
            />
          )}
        </div>
      </MotionWrapper>
    );
  }

  // ✅ Variant 3 – Alternative layout
  if (variant === "v3") {
    return (
      <MotionWrapper
        className={`nt-flex nt-flex-col md:nt-flex-row nt-items-center nt-justify-between nt-gap-6 nt-mb-16 ${className}`}
      >
        <div className="nt-text-center md:nt-text-left nt-space-y-2">
          {suppertitle && (
            <p
              className={`nt-uppercase nt-tracking-wide ${getParagraphColor()}`}
            >
              <RenderContent content={suppertitle} />
            </p>
          )}

          {title && (
            <h2
              className={`nt-text-h2 ${getTitleColor()}`}
              {...(typeof title === "object"
                ? { dangerouslySetInnerHTML: title }
                : {})}
            >
              {typeof title === "string" ? title : null}
            </h2>
          )}

          {subtitle && (
            <p className={getParagraphColor()}>
              <RenderContent content={subtitle} />
            </p>
          )}
        </div>

        {ctaText && (
          <Button
            label={ctaText}
            href={ctaHref || "#"}
            {...(buttonVariant ? { variant: buttonVariant } : {})}
          />
        )}
      </MotionWrapper>
    );
  }

  return null;
};
