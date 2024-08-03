import React from "react";

const AppStore = () => (
  <section className="bg-gray-200 py-4 mt-20">
    <div className="max-w-[1260px] mx-auto flex items-center justify-center gap-10">
      <p
        style={{
          fontFamily: "Gilroy",
          fontWeight: 800,
          fontSize: "28px",
          lineHeight: "32px",
          letterSpacing: "-0.6px",
          color: "rgba(2, 6, 12, 0.75)",
        }}
      >
        For better experience, download<br></br> the Swiggy app now
      </p>
      <img
        src="/images/play_store.png"
        alt="Google Play Store"
        className="h-16"
      />
      <img src="/images/app_store.png" alt="iOS App Store" className="h-16" />
    </div>
  </section>
);

export default AppStore;
