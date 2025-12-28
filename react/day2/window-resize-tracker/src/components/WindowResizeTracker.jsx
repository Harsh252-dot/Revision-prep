import { useEffect, useState } from "react";

function WindowResizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const getDeviceType = (width) => {
    if (width < 768) return "Mobile";
    if (width <= 1024) return "Tablet";
    return "Desktop";
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Window Resize Tracker</h3>

      <p>
        Window Size: <strong>{size.width} × {size.height}</strong>
      </p>

      <p>
        Device Type: <strong>{getDeviceType(size.width)}</strong>
      </p>
    </div>
  );
}

export default WindowResizeTracker;
