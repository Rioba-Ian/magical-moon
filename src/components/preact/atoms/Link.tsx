import type { HTMLAttributes } from "preact/compat";
import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority";

const anchorVariants = cva("", {
 variants: {
  variant: {
   circle: "",
   default: "",
  },
 },
 defaultVariants: {
  variant: "default",
 },
});

interface LinkTabProps
 extends HTMLAnchorElement,
  VariantProps<typeof anchorVariants> {
 asChild?: boolean;
}

export default function LinkTab() {}
