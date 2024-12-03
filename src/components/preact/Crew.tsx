import { signal, useSignal } from "@preact/signals";
import crewData from "./crew.json";
import type { HTMLAttributes } from "preact/compat";

export default function CrewComponent() {
 const selectedCrewTab = signal(1);

 console.log(selectedCrewTab.value);

 return (
  <section class={"grid grid-cols-1 md:grid-cols-2"}>
   <article class={" space-y-8 grid grid-cols-1 grid-rows-6"}>
    <div class={"row-span-5 place-self-center space-y-4"}>
     <h2 class={"uppercase text-2xl font-serif text-white/50"}>Commander</h2>
     <h3 class={"uppercase text-3xl font-serif text-white"}>Douglas Hurley</h3>

     <p class={"py-4 text-accent/90 text-base md:text-[20px] leading-8"}>
      Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
      and former NASA astronaut. He launched into space for the third time as
      commander of Crew Dragon Demo-2.
     </p>
    </div>

    {/* dots for navigation */}
    <div class={"place-self-end justify-self-start"} id="navigation-crew-tab">
     <ul class={"flex items-center gap-8"}>
      {crewData?.map((crewTab) => (
       <li>
        <Button active={crewTab.active} />
       </li>
      ))}
     </ul>
    </div>
   </article>

   <article class={"place-self-center"}>
    {crewData?.map((crewTab) => crewTab.active && <img src={crewTab?.img} />)}
   </article>
  </section>
 );
}

interface CrewTabButtonProps extends HTMLAttributes<HTMLButtonElement> {
 active: boolean;
}

const Button = (props: CrewTabButtonProps) => {
 const { active } = props;
 return (
  <button class={`${active ? "bg-white" : "bg-white/50"} p-2 rounded-full`}>
   <span class={"sr-only"}></span>
  </button>
 );
};
