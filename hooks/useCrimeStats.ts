import { useEffect, useState } from "react";

function useCrimeStats() {
  const [data, setData] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  interface CrimeStats {
    count: number | null;
  }

  useEffect(() => {
    const totalCrimeStatsUrl = `/api/stats/crimes`;
    const fetchCrimeStats = async () => {
      try {
        const res = await fetch(totalCrimeStatsUrl);
        const data: CrimeStats = await res.json();
        setData(data.count);
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
    fetchCrimeStats();
  }, []);

  return { data, loading, error };
}

export default useCrimeStats;
