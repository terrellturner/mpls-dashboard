import { useEffect, useState } from "react";

function usePoliceIncidentsStats() {
  const [data, setData] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  interface PoliceIncidentsStats {
    count: number | null;
  }

  useEffect(() => {
    const totalPoliceIncidentsStatUrl = `/api/stats/policeincidents`;
    const fetchPoliceIncidentsStats = async () => {
      try {
        const res = await fetch(totalPoliceIncidentsStatUrl);
        const data: PoliceIncidentsStats = await res.json();
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
    fetchPoliceIncidentsStats();
  }, []);

  return { data, loading, error };
}

export default usePoliceIncidentsStats;
