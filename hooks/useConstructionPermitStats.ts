import { useEffect, useState } from "react";

function useConstructionPermitStats() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  interface TotalConstructionPermitValue {
    count: number | null;
  }

  useEffect(() => {
    const totalConstructionPermitValueUrl = `/api/stats/constructionValue`;
    const fetchTotalConstructionValue = async () => {
      try {
        console.log(totalConstructionPermitValueUrl);

        const res = await fetch(totalConstructionPermitValueUrl);
        console.log(res);

        const data: TotalConstructionPermitValue = await res.json();
        setData(
          Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
            style: "currency",
            currency: "USD",
          }).format(Number(data))
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTotalConstructionValue();
  }, []);

  return { data, loading, error };
}

export default useConstructionPermitStats;
