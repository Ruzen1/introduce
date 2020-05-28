import { liff } from "../lib/liff";
import { useState, useEffect } from "react";

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
    } catch (error) {
      alert({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // useLiffが呼ばれたらinitialize処理を実行する
  useEffect(() => {
    initLiff({ liffId });
  }, [liffId]);

  return { loading, error };
}

export default useLiff;
