export default {
    background: {
      color: {
        value: "#1d1d1d", // لون خلفية هادئ
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: "#333", // لون الجسيمات
      },
      links: {
        color: "#333",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none", // لا تتحرك الجسيمات
        enable: true,
        outModes: {
          default: "bounce",
        },
        speed: 0.5, // سرعة بطيئة
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30, // عدد صغير من الجسيمات
      },
      opacity: {
        value: 0.7, // شفافية معتدلة
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };
  