import type { Children } from "preact/compat";
import type { ComponentChild, ComponentChildren } from "preact";
import { SelectedTabContext, selectedTab } from "./context/use-tabs";
import { cn } from "../../utils";

type Props = {
 children: ComponentChildren;
 className?: string;
};

const PlanetTesimalLayout = ({ children, className }: Props) => {
 return (
  <SelectedTabContext.Provider value={selectedTab}>
   <div class={cn(className, "")}>{children}</div>
  </SelectedTabContext.Provider>
 );
};

export default PlanetTesimalLayout;
