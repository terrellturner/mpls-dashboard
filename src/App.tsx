import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./App.css";

function App() {
  const statConfigs = [
    {
      id: "crime-total",
      endpoint: "/",
      label: "",
      hook: "",
    },
  ];

  return (
    <main className="flex justify-center p-10 lowercase items-center bg-stone-900 grow h-full text-stone-300">
      <article className="p-6 rounded-lg border border-stone-500 w-full">
        <Card className="aspect-square justify-around">
          <CardHeader>
            <CardTitle>Hello Minneapolis.</CardTitle>
            <CardDescription className="fit-content">
              It's {new Date().toLocaleDateString("en-US", { weekday: "long" })}
              .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="#"
              className=" font-black inline-block text-3xl underline-offset-4 hover:underline"
            >
              {new Date().toLocaleDateString("en-US", {})}
            </a>
          </CardContent>
        </Card>
      </article>
    </main>
  );
}

export default App;
