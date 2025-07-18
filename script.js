(async function () {
  const battery = await navigator.getBattery?.();
  const payload = {
    project: "Portfolio",
    message: "User visited",
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    connection: navigator.connection?.effectiveType || "unknown",
    referrer: document.referrer || "direct",
    battery: battery ? `${battery.level * 100}%` : "unknown",
  };

  fetch("https://portfolio-logger.vercel.app/api/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
})();
