import { CSSProperties, ReactNode } from "react";

export type HeadingProps = {
  children: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & CSSProperties;
