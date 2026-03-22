"use client";

import { config } from "@/utils/puck-config";
import { Render } from "@puckeditor/core";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

interface EditorPreviewProps {
  className?: string;
  data: string;
}

export default function EditorPreview({ data, className = "" }: EditorPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const content = data && data.trim() !== ""
    ? JSON.parse(data)
    : { content: [], root: {} };

  useEffect(() => {
    const element = createElement(Render, { config, data: content });
    const html = renderToStaticMarkup(element);

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"><\/script>
          <style>
            *, *::before, *::after { box-sizing: border-box; }
            body { margin: 0; padding: 0; }
          </style>
          <script>
            // Notify parent whenever content height changes
            function sendHeight() {
              window.parent.postMessage(
                { type: "iframe-height", height: document.body.scrollHeight },
                "*"
              );
            }
            // Run after Tailwind finishes applying styles
            window.addEventListener("load", () => {
              sendHeight();
              new ResizeObserver(sendHeight).observe(document.body);
            });
          <\/script>
        </head>
        <body class=${cn(className)}>
          ${html}
        </body>
      </html>
    `;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(fullHtml);
    doc.close();

    // Listen for height updates from inside the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "iframe-height" && iframeRef.current) {
        iframeRef.current.style.height = event.data.height + 16 + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [data]);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: "100%", border: "none", display: "block" }}
      scrolling="no"
    />
  );
}