import { useEffect, useState } from "react";

function useConfirmedFireStats() {
  const [data, setData] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  interface ConfirmedFireStats {
    count: number | null;
  }

  useEffect(() => {
    const totalConfirmedFiresUrl = `/api/stats/confirmedFires`;
    const fetchConfirmedFireStats = async () => {
      try {
        console.log(totalConfirmedFiresUrl);

        const res = await fetch(totalConfirmedFiresUrl);
        const data: ConfirmedFireStats = await res.json();
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
    fetchConfirmedFireStats();
  }, []);

  return { data, loading, error };
}

export default useConfirmedFireStats;
