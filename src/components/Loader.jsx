import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      onComplete?.();
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-name">AF.</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
