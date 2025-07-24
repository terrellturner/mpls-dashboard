import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./App.css";
import useCrimeStats from "../hooks/useCrimeStats";
import useNonEmergencyStats from "../hooks/useNonEmergencyStats";
import usePoliceIncidentStats from "../hooks/usePoliceIncidentsStats";
import useConfirmedFireStats from "../hooks/useConfirmedFireStats";
import useConstructionPermitStats from "../hooks/useConstructionPermitStats";

function App() {
  const crimeStats = useCrimeStats();
  const nonEmergencyStats = useNonEmergencyStats();
  const policeIncidentStats = usePoliceIncidentStats();
  const confirmedFireStats = useConfirmedFireStats();
  const constructionPermitValueStats = useConstructionPermitStats();

  const statConfigs = [
    {
      id: "crime-total",
      label: "👮 Crimes Reported ",
      ...crimeStats,
    },
    {
      id: "non-emergency-incidents",
      label: "ℹ️ 311 Calls ",
      ...nonEmergencyStats,
    },
    {
      id: "police-incidents",
      label: "🚔 Police Incidents ",
      ...policeIncidentStats,
    },
    {
      id: "confirmed-fires",
      label: "🔥 Confirmed Fires",
      ...confirmedFireStats,
    },
    {
      id: "construction-value",
      label: "🏗️ Construction Permit Value",
      ...constructionPermitValueStats,
    },
  ];

  return (
    <main className="flex relative justify-center p-10 lowercase items-center bg-[url(/imgs/minneapolis.jpg)] bg-cover bg-center grow h-full text-stone-300">
      <div className="h-full w-full absolute top-0 left-0 backdrop-blur-lg z-10"></div>
      <article className="text-stone-50 p-6 z-50 rounded-lg border border-stone-300 w-full max-w-4xl bg-stone-800/30 backdrop-blur-sm bg-opacity-10">
        <h1 className="text-4xl m-5 ">mpls now🌾🏙️</h1>
        <h2 className="m-5">
          A live snapshot of vital Minneapolis stats from the past 7 days,
          pulled from OpenDataMpls.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <Card className="h-full aspect-square justify-around w-full bg-indigo-300/20 text-stone-50 border-stone-300">
            <CardHeader>
              <CardTitle>Hello Minneapolis.</CardTitle>
              <CardDescription className="fit-content text-stone-100 font-bold">
                It's{" "}
                {new Date().toLocaleDateString("en-US", { weekday: "long" })}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#"
                className=" font-black inline-block text-xl lg:text-3xl underline-offset-4 hover:underline"
              >
                <span className="xl:block">
                  {new Date().toLocaleDateString("en-US", {}).slice(0, 4)}
                </span>
                <span className="hidden lg:block">
                  {new Date().getFullYear()}
                </span>
              </a>
            </CardContent>
          </Card>
          {statConfigs.map(({ id, label, data, loading, error }) => {
            return (
              <Card
                key={id}
                className="h-full aspect-square justify-around w-full bg-indigo-300/20 text-stone-50 border-stone-300 text-lg"
              >
                <CardHeader>
                  <CardTitle className="leading-normal">{label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="#"
                    className=" font-bold inline-block text-3xl underline-offset-4 hover:underline"
                  >
                    {data}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </article>
    </main>
  );
}

export default App;
