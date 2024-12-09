import { useComputed, useSignal } from "@preact/signals";
import technologyData from "./technology.json";

export default function SpaceTechnology() {
 const selectedTechnologyTab = useSignal("launch");
 const TechnologyTabToRender = useComputed(() =>
  technologyData?.filter((tab) => tab.tab === selectedTechnologyTab.value)
 );
 return (
  <section
   class={
    "flex  md:flex-row flex-col-reverse items-center justify-between py-16"
   }
  >
   <article
    class={
     "basis-1/2 flex flex-col md:flex-row grow items-center gap-8 py-4 md:py-0"
    }
   >
    <ul className="space-y-4 flex items-baseline justify-start gap-4 md:block">
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
        } sm:px-6 sm:py-4 md:px-8 md:py-6 text-dark rounded-full `}
       >
        <span class={"text-xl m-2 font-font-serif"}>{tab.id}</span>
       </button>
      </li>
     ))}
    </ul>
    <div>
     {TechnologyTabToRender.value?.map((tab) => (
      <div class="py-4 px-4 md:px-0 text-center md:text-left">
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
       <p class={"text-pretty mx-auto text-accent w-4/5 md:w-[90%]"}>
        {tab.description}
       </p>
      </div>
     ))}
    </div>
   </article>
   <article class={"basis-1/2 flex justify-end grow-0"}>
    <div>
     {TechnologyTabToRender.value?.map((tab) => (
      <picture>
       {/* mobile image */}
       <source media="(max-width: 759.99px)" srcset={tab.imgLandspace} />
       {/* <!-- Desktop Image --> */}
       <source media="(min-width: 760px)" srcset={tab.imgPotrait} />
       {/* <!-- Fallback Image --> */}
       <img
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        src={tab.imgPotrait}
        alt={tab.title}
        width="1920"
        height="1280"
       />
      </picture>
     ))}
    </div>
   </article>
  </section>
 );
}

/*

<img
       id="technology-image"
       alt={tab.name}
       class={"scale-115"}
      />
*/
