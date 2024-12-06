import { useComputed, useSignal } from "@preact/signals";
import technologyData from "./technology.json";
export default function SpaceTechnology() {
 const selectedTechnologyTab = useSignal("launch");
 const TechnologyTabToRender = useComputed(() =>
  technologyData?.filter((tab) => tab.tab === selectedTechnologyTab.value)
 );
 return (
  <section>
   <article>
    <ul className="flex flex-col items-center">
     {technologyData?.map((tab) => (
      <li>{tab.id}</li>
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
      </div>
     ))}
    </div>
   </article>
   <article></article>
  </section>
 );
}
