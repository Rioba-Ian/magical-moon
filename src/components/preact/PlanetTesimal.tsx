import { Suspense } from "preact/compat";
import { useSelectedTab } from "./context/use-tabs";
import PlanetTesimalLayout from "./PlanetTesimalLayout";
import destinations from "./destinations.json";

const Fallback = () => <p>Loading...</p>;

export default function PlanetTesimal() {
 const selectedTab = useSelectedTab();

 return (
  <PlanetTesimalLayout>
   <Suspense fallback={Fallback}>
    {destinations
     ?.filter(
      (destination) => destination.tab.toLocaleLowerCase() === selectedTab.value
     )
     ?.map((destination) => (
      <div class="grid grid-cols-2">
       <img src={destination.img} alt={destination.tab} class="w-full mr-8" />
       <div class="col-start-2 border border-green-400">
        <h2 class="text-accent font-font-sans-cond text-lg sm:text-xl uppercase tracking-letterSpacing1">
         {destination.tab}
         <span class="font-font-serif text-7xl sm:text-8xl md:text-9xl uppercase text-white block">
          {destination.tab}
         </span>
        </h2>
        <p class="text-white/50">{destination.description}</p>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
         <div class="flex flex-col gap-2">
          <h3 class="text-white/50">Avg. distance</h3>
          <p class="text-white/100">{destination.distance}</p>
         </div>
        </div>
       </div>
      </div>
     ))}
   </Suspense>
  </PlanetTesimalLayout>
 );
}
