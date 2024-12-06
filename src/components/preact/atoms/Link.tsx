import type { HTMLAttributes } from "preact/compat";
import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentChildren } from "preact";

const anchorVariants = cva("transition-colors duration-150 ", {
 variants: {
  variant: {
   circle: "rounded-full",
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
 const { class: ClassName, asChild, variant, children, ...rest } = props;

 if (asChild) {
  return children;
 }

 return (
  <a class={cn(anchorVariants({ variant }), ClassName)} {...rest}>
   {children}
  </a>
 );
}
