import { useComputed, useSignal } from "@preact/signals";
import technologyData from "./technology.json";

export default function SpaceTechnology() {
 const selectedTechnologyTab = useSignal("launch");
 const TechnologyTabToRender = useComputed(() =>
  technologyData?.filter((tab) => tab.tab === selectedTechnologyTab.value)
 );
 return (
  <section class={"flex  items-center justify-between py-16"}>
   <article class={"basis-1/2 flex grow items-center gap-8 "}>
    <ul className="space-y-4">
     {technologyData?.map((tab) => (
      <li>
       <button
        id={tab.tab}
        onClick={(e) => {
         const newTab = e.currentTarget.id;
         selectedTechnologyTab.value = newTab;
        }}
        class={`${
         tab.tab === selectedTechnologyTab.value
          ? "bg-white"
          : "bg-transparent border border-gray-500 text-white"
        } px-8 py-6 text-dark rounded-full `}
       >
        <span class={"text-xl m-2 font-font-serif"}>{tab.id}</span>
       </button>
      </li>
     ))}
    </ul>
    <div>
     {TechnologyTabToRender.value?.map((tab) => (
      <div class="py-4">
       <h2
        class={
         "uppercase text-xl font-light md:text-2xl font-font-serif text-white/50"
        }
       >
        the terminology...
       </h2>
       <h3
        class={
         "uppercase py-4 sm:py-8 text-2xl font-light md:text-3xl  font-serif text-white"
        }
       >
        {tab.name}
       </h3>
       <p class={"text-pretty text-accent"}>{tab.description}</p>
      </div>
     ))}
    </div>
   </article>
   <article class={"basis-1/2 flex justify-end grow-0"}>
    <div>
     {TechnologyTabToRender.value?.map((tab) => (
      <img src={tab.img} alt={tab.name} class={"scale-115"} />
     ))}
    </div>
   </article>
  </section>
 );
}
