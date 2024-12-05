import {
 computed,
 Signal,
 signal,
 useComputed,
 useSignal,
} from "@preact/signals";
import crewData from "./crew.json";
import type { HTMLAttributes } from "preact/compat";

export default function CrewComponent() {
 const selectedCrewTab = useSignal(1);
 const TabToRender = useComputed(() =>
  crewData?.filter((tab) => tab.id === selectedCrewTab.value)
 );

 const updateSelectedCrewTab = (newTab: string) => {
  const newCrewId = crewData?.find((crew) => crew.tab === newTab)?.id;

  if (newCrewId) {
   selectedCrewTab.value = newCrewId;
  }
 };

 return (
  <section class={"grid grid-cols-1 md:grid-cols-2"}>
   <article
    class={" space-y-8 grid grid-cols-1 grid-rows-6 text-center md:text-left"}
   >
    <div class={"row-span-5 place-self-center space-y-4"}>
     {TabToRender.value?.map((data) => (
      <div class={"py-4"}>
       <h2
        class={
         "uppercase text-xl font-light md:text-2xl font-font-serif text-white/50"
        }
       >
        {data.role}
       </h2>
       <h3
        class={
         "uppercase py-4 sm:py-8 text-2xl font-light md:text-3xl  font-serif text-white"
        }
       >
        {data.name}
       </h3>

       <p
        class={
         "pt-8 md:py-4 text-accent/90 text-base md:text-lg leading-7 md:leading-9 tracking-letterSpacing7"
        }
       >
        {data.description}
       </p>
      </div>
     ))}
    </div>

    {/* dots for navigation */}
    <div
     class={"place-self-center md:place-self-end md:justify-self-start"}
     id="navigation-crew-tab"
    >
     <ul class={"flex items-center gap-8"}>
      {crewData?.map((crewTab) => (
       <li>
        <Button
         active={crewTab.id === selectedCrewTab.value}
         id={crewTab.tab}
         onClick={(e) => updateSelectedCrewTab(e.currentTarget.id)}
        />
       </li>
      ))}
     </ul>
    </div>
   </article>

   <article
    class={
     "justify-self-center md:place-self-center my-8 md:my-0 py-8 md:py-0 w-4/5 md:w-full"
    }
   >
    {crewData?.map(
     (crewTab) =>
      crewTab.id === selectedCrewTab.value && <img src={crewTab?.img} />
    )}
   </article>
  </section>
 );
}

interface CrewTabButtonProps extends HTMLAttributes<HTMLButtonElement> {
 active: boolean;
}

const Button = (props: CrewTabButtonProps) => {
 const { active, ...rest } = props;
 return (
  <button
   class={`${active ? "bg-white" : "bg-white/50"} p-2 rounded-full`}
   {...rest}
  >
   <span class={"sr-only"}></span>
  </button>
 );
};
