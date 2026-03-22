/* eslint-disable @next/next/no-img-element */
import { Config, DropZone } from "@puckeditor/core";
import { cn } from "./cn";
import { JSX } from "react";

const paddingOptions = [{ label: "0", value: "p-0" }, { label: "4px", value: "p-1" }, { label: "8px", value: "p-2" }, { label: "12px", value: "p-3" }, { label: "16px", value: "p-4" }, { label: "24px", value: "p-6" }, { label: "32px", value: "p-8" }, { label: "48px", value: "p-12" }, { label: "64px", value: "p-16" }, { label: "96px", value: "p-24" }];
const paddingXOptions = [{ label: "0", value: "px-0" }, { label: "4px", value: "px-1" }, { label: "8px", value: "px-2" }, { label: "12px", value: "px-3" }, { label: "16px", value: "px-4" }, { label: "24px", value: "px-6" }, { label: "32px", value: "px-8" }, { label: "48px", value: "px-12" }, { label: "64px", value: "px-16" }, { label: "96px", value: "px-24" }];
const paddingYOptions = [{ label: "0", value: "py-0" }, { label: "4px", value: "py-1" }, { label: "8px", value: "py-2" }, { label: "12px", value: "py-3" }, { label: "16px", value: "py-4" }, { label: "24px", value: "py-6" }, { label: "32px", value: "py-8" }, { label: "48px", value: "py-12" }, { label: "64px", value: "py-16" }, { label: "96px", value: "py-24" }];
const marginOptions = [{ label: "0", value: "m-0" }, { label: "auto", value: "m-auto" }, { label: "4px", value: "m-1" }, { label: "8px", value: "m-2" }, { label: "16px", value: "m-4" }, { label: "24px", value: "m-6" }, { label: "32px", value: "m-8" }, { label: "48px", value: "m-12" }];
const marginXOptions = [{ label: "0", value: "mx-0" }, { label: "auto", value: "mx-auto" }, { label: "4px", value: "mx-1" }, { label: "8px", value: "mx-2" }, { label: "16px", value: "mx-4" }, { label: "24px", value: "mx-6" }, { label: "32px", value: "mx-8" }, { label: "48px", value: "mx-12" }];
const marginYOptions = [{ label: "0", value: "my-0" }, { label: "auto", value: "my-auto" }, { label: "4px", value: "my-1" }, { label: "8px", value: "my-2" }, { label: "16px", value: "my-4" }, { label: "24px", value: "my-6" }, { label: "32px", value: "my-8" }, { label: "48px", value: "my-12" }, { label: "64px", value: "my-16" }];
const widthOptions = [{ label: "Auto", value: "" }, { label: "Full", value: "w-full" }, { label: "1/2", value: "w-1/2" }, { label: "1/3", value: "w-1/3" }, { label: "2/3", value: "w-2/3" }, { label: "1/4", value: "w-1/4" }, { label: "3/4", value: "w-3/4" }, { label: "Screen", value: "w-screen" }];
const maxWidthOptions = [{ label: "None", value: "" }, { label: "XS (320px)", value: "max-w-xs" }, { label: "SM (384px)", value: "max-w-sm" }, { label: "MD (448px)", value: "max-w-md" }, { label: "LG (512px)", value: "max-w-lg" }, { label: "XL (576px)", value: "max-w-xl" }, { label: "2XL (672px)", value: "max-w-2xl" }, { label: "3XL (768px)", value: "max-w-3xl" }, { label: "4XL (896px)", value: "max-w-4xl" }, { label: "5XL (1024px)", value: "max-w-5xl" }, { label: "6XL (1152px)", value: "max-w-6xl" }, { label: "7XL (1280px)", value: "max-w-7xl" }, { label: "Full", value: "max-w-full" }];
const heightOptions = [{ label: "Auto", value: "" }, { label: "Full", value: "h-full" }, { label: "Screen", value: "h-screen" }, { label: "64px", value: "h-16" }, { label: "128px", value: "h-32" }, { label: "192px", value: "h-48" }, { label: "256px", value: "h-64" }, { label: "320px", value: "h-80" }, { label: "384px", value: "h-96" }, { label: "50vh", value: "h-[50vh]" }, { label: "100vh", value: "h-screen" }];
const minHeightOptions = [{ label: "None", value: "" }, { label: "64px", value: "min-h-16" }, { label: "128px", value: "min-h-32" }, { label: "256px", value: "min-h-64" }, { label: "50vh", value: "min-h-[50vh]" }, { label: "100vh", value: "min-h-screen" }];
const fontSizeOptions = [{ label: "XS (12px)", value: "text-xs" }, { label: "SM (14px)", value: "text-sm" }, { label: "Base (16px)", value: "text-base" }, { label: "LG (18px)", value: "text-lg" }, { label: "XL (20px)", value: "text-xl" }, { label: "2XL (24px)", value: "text-2xl" }, { label: "3XL (30px)", value: "text-3xl" }, { label: "4XL (36px)", value: "text-4xl" }, { label: "5XL (48px)", value: "text-5xl" }, { label: "6XL (60px)", value: "text-6xl" }, { label: "7XL (72px)", value: "text-7xl" }, { label: "8XL (96px)", value: "text-8xl" }];
const fontWeightOptions = [{ label: "Thin", value: "font-thin" }, { label: "Light", value: "font-light" }, { label: "Normal", value: "font-normal" }, { label: "Medium", value: "font-medium" }, { label: "Semibold", value: "font-semibold" }, { label: "Bold", value: "font-bold" }, { label: "Extrabold", value: "font-extrabold" }, { label: "Black", value: "font-black" }];
const textAlignOptions = [{ label: "Left", value: "text-left" }, { label: "Center", value: "text-center" }, { label: "Right", value: "text-right" }, { label: "Justify", value: "text-justify" }];
const lineHeightOptions = [{ label: "None", value: "leading-none" }, { label: "Tight", value: "leading-tight" }, { label: "Snug", value: "leading-snug" }, { label: "Normal", value: "leading-normal" }, { label: "Relaxed", value: "leading-relaxed" }, { label: "Loose", value: "leading-loose" }];
const letterSpacingOptions = [{ label: "Tighter", value: "tracking-tighter" }, { label: "Tight", value: "tracking-tight" }, { label: "Normal", value: "tracking-normal" }, { label: "Wide", value: "tracking-wide" }, { label: "Wider", value: "tracking-wider" }, { label: "Widest", value: "tracking-widest" }];
const textColorOptions = [{ label: "Inherit", value: "" }, { label: "White", value: "text-white" }, { label: "Black", value: "text-black" }, { label: "Zinc 300", value: "text-zinc-300" }, { label: "Zinc 400", value: "text-zinc-400" }, { label: "Zinc 500", value: "text-zinc-500" }, { label: "Zinc 600", value: "text-zinc-600" }, { label: "Zinc 700", value: "text-zinc-700" }, { label: "Zinc 800", value: "text-zinc-800" }, { label: "Zinc 900", value: "text-zinc-900" }, { label: "Blue 400", value: "text-blue-400" }, { label: "Blue 500", value: "text-blue-500" }, { label: "Blue 600", value: "text-blue-600" }, { label: "Red 500", value: "text-red-500" }, { label: "Green 500", value: "text-green-500" }, { label: "Yellow 400", value: "text-yellow-400" }, { label: "Purple 500", value: "text-purple-500" }];
const bgColorOptions = [{ label: "None", value: "" }, { label: "White", value: "bg-white" }, { label: "Black", value: "bg-black" }, { label: "Zinc 50", value: "bg-zinc-50" }, { label: "Zinc 100", value: "bg-zinc-100" }, { label: "Zinc 200", value: "bg-zinc-200" }, { label: "Zinc 300", value: "bg-zinc-300" }, { label: "Zinc 800", value: "bg-zinc-800" }, { label: "Zinc 900", value: "bg-zinc-900" }, { label: "Zinc 950", value: "bg-zinc-950" }, { label: "Blue 50", value: "bg-blue-50" }, { label: "Blue 100", value: "bg-blue-100" }, { label: "Blue 500", value: "bg-blue-500" }, { label: "Blue 600", value: "bg-blue-600" }, { label: "Red 50", value: "bg-red-50" }, { label: "Red 500", value: "bg-red-500" }, { label: "Green 50", value: "bg-green-50" }, { label: "Green 500", value: "bg-green-500" }, { label: "Yellow 50", value: "bg-yellow-50" }, { label: "Yellow 400", value: "bg-yellow-400" }, { label: "Purple 50", value: "bg-purple-50" }, { label: "Purple 500", value: "bg-purple-500" }];
const borderWidthOptions = [{ label: "None", value: "" }, { label: "1px", value: "border" }, { label: "2px", value: "border-2" }, { label: "4px", value: "border-4" }, { label: "8px", value: "border-8" }];
const borderStyleOptions = [{ label: "Solid", value: "border-solid" }, { label: "Dashed", value: "border-dashed" }, { label: "Dotted", value: "border-dotted" }];
const borderColorOptions = [{ label: "Default", value: "" }, { label: "Zinc 100", value: "border-zinc-100" }, { label: "Zinc 200", value: "border-zinc-200" }, { label: "Zinc 300", value: "border-zinc-300" }, { label: "Zinc 700", value: "border-zinc-700" }, { label: "Zinc 800", value: "border-zinc-800" }, { label: "Blue 500", value: "border-blue-500" }, { label: "Red 500", value: "border-red-500" }, { label: "White", value: "border-white" }];
const borderRadiusOptions = [{ label: "None", value: "" }, { label: "SM", value: "rounded-sm" }, { label: "MD", value: "rounded-md" }, { label: "LG", value: "rounded-lg" }, { label: "XL", value: "rounded-xl" }, { label: "2XL", value: "rounded-2xl" }, { label: "3XL", value: "rounded-3xl" }, { label: "Full", value: "rounded-full" }];
const shadowOptions = [{ label: "None", value: "" }, { label: "SM", value: "shadow-sm" }, { label: "MD", value: "shadow-md" }, { label: "LG", value: "shadow-lg" }, { label: "XL", value: "shadow-xl" }, { label: "2XL", value: "shadow-2xl" }, { label: "Inner", value: "shadow-inner" }];
const displayOptions = [{ label: "Block", value: "block" }, { label: "Flex", value: "flex" }, { label: "Grid", value: "grid" }, { label: "Inline", value: "inline" }, { label: "Inline Block", value: "inline-block" }, { label: "Inline Flex", value: "inline-flex" }, { label: "Hidden", value: "hidden" }];
const flexDirOptions = [{ label: "Row", value: "flex-row" }, { label: "Row Reverse", value: "flex-row-reverse" }, { label: "Column", value: "flex-col" }, { label: "Column Reverse", value: "flex-col-reverse" }];
const flexWrapOptions = [{ label: "No Wrap", value: "flex-nowrap" }, { label: "Wrap", value: "flex-wrap" }, { label: "Wrap Reverse", value: "flex-wrap-reverse" }];
const alignItemsOptions = [{ label: "Start", value: "items-start" }, { label: "Center", value: "items-center" }, { label: "End", value: "items-end" }, { label: "Stretch", value: "items-stretch" }, { label: "Baseline", value: "items-baseline" }];
const justifyOptions = [{ label: "Start", value: "justify-start" }, { label: "Center", value: "justify-center" }, { label: "End", value: "justify-end" }, { label: "Between", value: "justify-between" }, { label: "Around", value: "justify-around" }, { label: "Evenly", value: "justify-evenly" }];
const gapOptions = [{ label: "0", value: "gap-0" }, { label: "4px", value: "gap-1" }, { label: "8px", value: "gap-2" }, { label: "12px", value: "gap-3" }, { label: "16px", value: "gap-4" }, { label: "24px", value: "gap-6" }, { label: "32px", value: "gap-8" }, { label: "48px", value: "gap-12" }];
const overflowOptions = [{ label: "Visible", value: "overflow-visible" }, { label: "Hidden", value: "overflow-hidden" }, { label: "Auto", value: "overflow-auto" }, { label: "Scroll", value: "overflow-scroll" }];
const positionOptions = [{ label: "Static", value: "static" }, { label: "Relative", value: "relative" }, { label: "Absolute", value: "absolute" }, { label: "Fixed", value: "fixed" }, { label: "Sticky", value: "sticky" }];
const opacityOptions = [{ label: "100%", value: "opacity-100" }, { label: "90%", value: "opacity-90" }, { label: "75%", value: "opacity-75" }, { label: "50%", value: "opacity-50" }, { label: "25%", value: "opacity-25" }, { label: "0%", value: "opacity-0" }];
const objectFitOptions = [{ label: "Cover", value: "object-cover" }, { label: "Contain", value: "object-contain" }, { label: "Fill", value: "object-fill" }, { label: "None", value: "object-none" }];
const cursorOptions = [{ label: "Default", value: "cursor-default" }, { label: "Pointer", value: "cursor-pointer" }, { label: "Not Allowed", value: "cursor-not-allowed" }];
const transitionOptions = [{ label: "None", value: "" }, { label: "All", value: "transition-all duration-200" }, { label: "Colors", value: "transition-colors duration-200" }, { label: "Opacity", value: "transition-opacity duration-200" }, { label: "Shadow", value: "transition-shadow duration-200" }];

const allStyleFields = {
  // Layout
  display: { type: "select" as const, label: "Display", options: displayOptions },
  flexDir: { type: "select" as const, label: "Flex Direction", options: flexDirOptions },
  flexWrap: { type: "select" as const, label: "Flex Wrap", options: flexWrapOptions },
  alignItems: { type: "select" as const, label: "Align Items", options: alignItemsOptions },
  justifyContent: { type: "select" as const, label: "Justify Content", options: justifyOptions },
  gap: { type: "select" as const, label: "Gap", options: gapOptions },
  // Spacing
  padding: { type: "select" as const, label: "Padding", options: paddingOptions },
  paddingX: { type: "select" as const, label: "Padding X", options: paddingXOptions },
  paddingY: { type: "select" as const, label: "Padding Y", options: paddingYOptions },
  margin: { type: "select" as const, label: "Margin", options: marginOptions },
  marginX: { type: "select" as const, label: "Margin X", options: marginXOptions },
  marginY: { type: "select" as const, label: "Margin Y", options: marginYOptions },
  // Sizing
  width: { type: "select" as const, label: "Width", options: widthOptions },
  maxWidth: { type: "select" as const, label: "Max Width", options: maxWidthOptions },
  height: { type: "select" as const, label: "Height", options: heightOptions },
  minHeight: { type: "select" as const, label: "Min Height", options: minHeightOptions },
  // Typography
  fontSize: { type: "select" as const, label: "Font Size", options: fontSizeOptions },
  fontWeight: { type: "select" as const, label: "Font Weight", options: fontWeightOptions },
  textAlign: { type: "select" as const, label: "Text Align", options: textAlignOptions },
  lineHeight: { type: "select" as const, label: "Line Height", options: lineHeightOptions },
  letterSpacing: { type: "select" as const, label: "Letter Spacing", options: letterSpacingOptions },
  textColor: { type: "select" as const, label: "Text Color", options: textColorOptions },
  // Background
  bgColor: { type: "select" as const, label: "Background", options: bgColorOptions },
  // Border
  borderWidth: { type: "select" as const, label: "Border Width", options: borderWidthOptions },
  borderStyle: { type: "select" as const, label: "Border Style", options: borderStyleOptions },
  borderColor: { type: "select" as const, label: "Border Color", options: borderColorOptions },
  borderRadius: { type: "select" as const, label: "Border Radius", options: borderRadiusOptions },
  // Effects
  shadow: { type: "select" as const, label: "Shadow", options: shadowOptions },
  opacity: { type: "select" as const, label: "Opacity", options: opacityOptions },
  overflow: { type: "select" as const, label: "Overflow", options: overflowOptions },
  position: { type: "select" as const, label: "Position", options: positionOptions },
  transition: { type: "select" as const, label: "Transition", options: transitionOptions },
  cursor: { type: "select" as const, label: "Cursor", options: cursorOptions },
  // Custom
  customClass: { type: "text" as const, label: "Custom Classes" },
};

const styleDefaults = {
  display: "",
  flexDir: "",
  flexWrap: "",
  alignItems: "",
  justifyContent: "",
  gap: "",
  padding: "",
  paddingX: "",
  paddingY: "",
  margin: "",
  marginX: "",
  marginY: "",
  width: "",
  maxWidth: "",
  height: "",
  minHeight: "",
  fontSize: "",
  fontWeight: "",
  textAlign: "",
  lineHeight: "",
  letterSpacing: "",
  textColor: "",
  bgColor: "",
  borderWidth: "",
  borderStyle: "",
  borderColor: "",
  borderRadius: "",
  shadow: "",
  opacity: "",
  overflow: "",
  position: "",
  transition: "",
  cursor: "",
  customClass: "",
};

type StyleProps = typeof styleDefaults;

function sc(s: Partial<StyleProps>): string {
  return Object.values(s).filter(Boolean).join(" ");
}

type Props = {
  // Hero: StyleProps & {
  //   title: string;
  //   subtitle: string;
  //   bgImage: string;
  // };
  Heading: StyleProps & {
    title: string;
    tag: "h1" | "h2" | "h3" | "h4";
    align: "left" | "center";
  };
  Paragraph: StyleProps & {
    text: string;
  };
  Image: StyleProps & {
    src: string;
    caption: string;
    objectFit: string;
  };
  CodeSnippet: StyleProps & {
    code: string;
    language: string;
  };
  Grid: StyleProps & {
    columns: number;
  };
  Block: StyleProps & {
    containerType: "container" | "narrow" | "full";
    bgImage: string;
    backgroundSize: "cover" | "contain" | "auto";
  };
  RichText: StyleProps & {
    body: string | undefined;
  };
  Divider: StyleProps & {
    thickness: string;
    color: string;
  };
  Button: StyleProps & {
    label: string;
    href: string;
    variant: "primary" | "outline" | "ghost";
    size: "sm" | "md" | "lg";
    fullWidth: boolean;
  };
};

export const config: Config<Props> = {
  components: {

    // Hero: {
    //   fields: {
    //     title: { type: "text", label: "Title" },
    //     subtitle: { type: "text", label: "Subtitle" },
    //     bgImage: { type: "text", label: "Background Image URL" },
    //     ...allStyleFields,
    //   },
    //   defaultProps: {
    //     title: "Blog Title",
    //     subtitle: "",
    //     bgImage: "",
    //     ...styleDefaults,
    //     paddingX: "px-6",
    //     paddingY: "py-20",
    //     bgColor: "bg-zinc-900",
    //     textColor: "text-white",
    //     textAlign: "text-center",
    //     borderRadius: "rounded-3xl",
    //     overflow: "overflow-hidden",
    //     position: "relative",
    //   },
    //   render: ({ title, subtitle, bgImage, ...style }) => (
    //     <section
    //       className={cn("relative", sc(style as StyleProps))}
    //       style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" } : {}}
    //     >
    //       <div className="relative z-10 max-w-3xl mx-auto">
    //         <h1 className="text-5xl font-black tracking-tighter mb-4">
    //           {title || "Blog Title"}
    //         </h1>
    //         {subtitle && (
    //           <p className="text-xl opacity-70 font-medium">{subtitle}</p>
    //         )}
    //       </div>
    //       {bgImage && <div className="absolute inset-0 bg-black/60" />}
    //     </section>
    //   ),
    // },

    Heading: {
      fields: {
        title: { type: "text", label: "Title" },
        tag: {
          type: "select",
          label: "Tag",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
          ],
        },
        align: {
          type: "radio",
          label: "Align",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },
        ...allStyleFields,
      },
      defaultProps: {
        title: "New Section",
        tag: "h2",
        align: "left",
        ...styleDefaults,
        fontSize: "text-3xl",
        fontWeight: "font-bold",
        letterSpacing: "tracking-tight",
        marginY: "my-8",
      },
      render: ({ title, tag, align, ...style }) => {
        const Tag = (tag || "h2") as keyof JSX.IntrinsicElements;
        console.log(Tag)
        return (
          <Tag
            className={cn(
              align === "center" ? "text-center" : "text-left",
              sc(style as StyleProps)
            )}
          >
            {title || "New Section"}
          </Tag>
        );
      },
    },

    Paragraph: {
      fields: {
        text: { type: "textarea", label: "Text" },
        ...allStyleFields,
      },
      defaultProps: {
        text: "Start typing your blog content here...",
        ...styleDefaults,
        fontSize: "text-lg",
        lineHeight: "leading-relaxed",
        textColor: "text-zinc-600",
        marginY: "my-6",
      },
      render: ({ text, ...style }) => (
        <p className={cn("whitespace-pre-wrap", sc(style as StyleProps))}>
          {text || "Start typing your blog content here..."}
        </p>
      ),
    },

    Image: {
      fields: {
        src: {
          label: "Image Asset",
          type: "custom",
          render: ({ value, onChange }) => (
            // <PuckImageUpload value={value} onChange={onChange} />
            <></>
          ),
        },
        caption: { type: "text", label: "Caption" },
        objectFit: { type: "select", label: "Object Fit", options: objectFitOptions },
        ...allStyleFields,
      },
      defaultProps: {
        src: "",
        caption: "",
        objectFit: "object-cover",
        ...styleDefaults,
        marginY: "my-10",
        paddingX: "px-6",
        borderRadius: "rounded-2xl",
        width: "w-full",
      },
      render: ({ src, caption, objectFit, ...style }) => (
        <figure className={cn(sc(style as StyleProps))}>
          <img
            src={src || "https://placehold.co/600x400/EEE/31343C?text=No+Image"}
            className={cn("w-full border shadow-sm", objectFit)}
            alt={caption}
          />
          {caption && (
            <figcaption className="text-center text-sm text-zinc-400 mt-3 italic">
              {caption}
            </figcaption>
          )}
        </figure>
      ),
    },

    Block: {
      fields: {
        containerType: {
          type: "select",
          label: "Container",
          options: [
            { label: "Standard (1280px)", value: "container" },
            { label: "Narrow (768px)", value: "narrow" },
            { label: "Full Width", value: "full" },
          ],
        },
        bgImage: { type: "text", label: "Background Image URL" },
        backgroundSize: {
          type: "select",
          label: "Background Size",
          options: [
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Auto", value: "auto" },
          ]
        },
        ...allStyleFields,
      },
      defaultProps: {
        containerType: "container",
        bgImage: "",
        backgroundSize: "cover",
        ...styleDefaults,
        paddingY: "py-5",
      },
      render: ({ containerType, bgImage, backgroundSize, ...style }) => {
        const containerClass: Record<"container" | "narrow" | "full", string> = {
          container: "container mx-auto",
          narrow: "max-w-3xl mx-auto",
          full: "w-full",
        };
        return (
          <div
            className={cn("px-4", containerClass[containerType],
              sc(style as StyleProps))}
            style={bgImage ? {
              backgroundImage: `url(${bgImage})`, backgroundSize: bgImage ? backgroundSize : "", backgroundPosition: "center", backgroundRepeat: "no-repeat"
            } : {}}
          >
            <DropZone zone="content" />
          </div >
        );
      },
    },

    CodeSnippet: {
      fields: {
        code: { type: "textarea", label: "Code" },
        language: { type: "text", label: "Language" },
        ...allStyleFields,
      },
      defaultProps: {
        code: "// Paste your code here",
        language: "javascript",
        ...styleDefaults,
        padding: "p-6",
        bgColor: "bg-zinc-950",
        textColor: "text-zinc-100",
        borderRadius: "rounded-xl",
        fontSize: "text-sm",
        marginY: "my-6",
        borderWidth: "border",
        borderColor: "border-zinc-800",
        overflow: "overflow-x-auto",
      },
      render: ({ code, language, ...style }) => (
        <pre className={cn("font-mono", sc(style as StyleProps))}>
          <div className="text-xs text-zinc-500 mb-2 uppercase tracking-widest">
            {language || "javascript"}
          </div>
          <code>{code || "// Paste your code here"}</code>
        </pre>
      ),
    },

    Grid: {
      fields: {
        columns: {
          type: "radio",
          label: "Columns",
          options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
        },
        ...allStyleFields,
      },
      defaultProps: {
        columns: 2,
        ...styleDefaults,
        gap: "gap-6",
        marginY: "my-10",
        width: "w-full",
      },
      render: ({ columns, ...style }) => {
        const gridCols: Record<number, string> = {
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 md:grid-cols-3",
          4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        };
        return (
          <section className={cn("grid", gridCols[columns as keyof typeof gridCols], sc(style as StyleProps))}>
            {Array.from({ length: columns || 0 }).map((_, i) => (
              <div key={i} className="min-h-24 border border-dashed border-zinc-200 rounded-xl">
                <DropZone zone={`column-${i}`} />
              </div>
            ))}
          </section>
        );
      },
    },

    RichText: {
      fields: {
        body: {
          type: "richtext",
          contentEditable: true,
          initialHeight: 300,
        },
        ...allStyleFields,
      },
      defaultProps: {
        body: undefined,
        ...styleDefaults,
        marginY: "my-4",
      },
      render: ({ body, ...style }) => {
        if (!body) return <></>;
        return (
          <div
            className={cn("prose max-w-none", sc(style as StyleProps))}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        );
      },
    },

    Divider: {
      fields: {
        thickness: {
          type: "select",
          label: "Thickness",
          options: [
            { label: "1px", value: "border-t" },
            { label: "2px", value: "border-t-2" },
            { label: "4px", value: "border-t-4" },
          ],
        },
        color: {
          type: "select",
          label: "Color",
          options: [
            { label: "Zinc 200", value: "border-zinc-200" },
            { label: "Zinc 400", value: "border-zinc-400" },
            { label: "Zinc 800", value: "border-zinc-800" },
            { label: "White", value: "border-white" },
            { label: "Black", value: "border-black" },
          ],
        },
        ...allStyleFields,
      },
      defaultProps: {
        thickness: "border-t",
        color: "border-zinc-200",
        ...styleDefaults,
        marginY: "my-8",
      },
      render: ({ thickness, color, ...style }) => (
        <hr className={cn(thickness, color, sc(style as StyleProps))} />
      ),
    },

    Button: {
      fields: {
        label: { type: "text", label: "Label" },
        href: { type: "text", label: "Link URL" },
        variant: {
          type: "select",
          label: "Variant",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Outline", value: "outline" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        size: {
          type: "select",
          label: "Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        fullWidth: {
          type: "radio",
          label: "Width",
          options: [
            { label: "Auto", value: false },
            { label: "Full", value: true },
          ],
        },
        ...allStyleFields,
      },
      defaultProps: {
        label: "Click me",
        href: "#",
        variant: "primary",
        size: "md",
        fullWidth: false,
        ...styleDefaults,
        borderRadius: "rounded-lg",
        fontWeight: "font-semibold",
        transition: "transition-colors duration-200",
        cursor: "cursor-pointer",
      },
      render: ({ label, href, variant, size, fullWidth, ...style }) => {
        const variantClass = {
          primary: "bg-zinc-900 text-white hover:bg-zinc-700",
          outline: "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100",
          ghost: "text-zinc-900 hover:bg-zinc-100",
        }[variant];
        const sizeClass = {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-3 text-base",
          lg: "px-8 py-4 text-lg",
        }[size];
        return (
          <a
            href={href}
            className={cn(
              "inline-block",
              variantClass,
              sizeClass,
              fullWidth ? "w-full text-center" : "",
              sc(style as StyleProps)
            )}
          >
            {label}
          </a>
        );
      },
    },
  },

  root: {
    render: ({ children }) => children
  },
};