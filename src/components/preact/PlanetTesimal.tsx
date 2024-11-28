import { Suspense } from "preact/compat";
import { useSelectedTab } from "./context/use-tabs";
import PlanetTesimalLayout from "./PlanetTesimalLayout";
import destinations from "./destinations.json";
import DestinationTab from "./DestinationTab";

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
      <div class="flex flex-col justify-center items-center md:justify-between md:flex-row gap-16">
       <img src={destination.img} alt={destination.tab} class="w-4/5 mr-8" />
       <div class={"flex flex-col justify-start gap-12"}>
        <DestinationTab />
        <div class=" space-y-8">
         <h2 class="text-white font-font-serif text-lg sm:text-4xl uppercase tracking-letterSpacing1">
          {destination.tab}
         </h2>
         <p class="text-accent leading-8 tracking-wide font-light w-3/4">
          {destination.description}
         </p>

         <hr class={"bg-accent/50 mx-auto"} />
         <div class="flex items-center justify-between">
          <div class="flex flex-col gap-2">
           <h3 class="text-accent font-light uppercase font-font-sans-cond text-lg">
            Avg. distance
           </h3>
           <p class="text-white text-2xl font-serif">{destination.distance}</p>
          </div>

          <div class="flex flex-col gap-2">
           <h3 class="text-accent font-light uppercase font-font-sans-cond text-lg">
            Est. Travel Time
           </h3>
           <p class="text-white text-2xl font-serif">{destination.travel}</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     ))}
   </Suspense>
  </PlanetTesimalLayout>
 );
}
