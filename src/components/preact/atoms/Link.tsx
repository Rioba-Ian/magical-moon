import type { HTMLAttributes } from "preact/compat";
import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentChildren } from "preact";

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
 extends HTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof anchorVariants> {
 class?: string;
 asChild?: boolean;
 children?: ComponentChildren;
}

export default function LinkTab(props: LinkTabProps) {
 const { class: ClassName, asChild, children, ...rest } = props;

 return (
  <a class={cn(ClassName, "")} {...rest}>
   {children}
  </a>
 );
}
