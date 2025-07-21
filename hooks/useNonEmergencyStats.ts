import { useEffect, useState } from "react";

function useNonEmergencyStats() {
  const [data, setData] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  interface NonEmergencyStats {
    count: number | null;
  }

  useEffect(() => {
    const totalNonEmergencyStatsUrl = `/api/stats/nonemergencyincidents`;
    const fetchNonEmergencyStats = async () => {
      try {
        const res = await fetch(totalNonEmergencyStatsUrl);
        const data: NonEmergencyStats = await res.json();
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
    fetchNonEmergencyStats();
  }, []);

  return { data, loading, error };
}

export default useNonEmergencyStats;
