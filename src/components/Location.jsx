import React, { useState, useEffect } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState({
    Location: "",
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const apiKey = "2cdf4ecf9bfd4356b77175d0a32b7ec0";

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            try {
              const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`,
              );
              const data = await response.json();

              if (data.results && data.results.length > 0) {
                const Location =
                  data.results[0].components.Location ||
                  data.results[0].components.town ||
                  data.results[0].components.village ||
                  "Shahar topilmadi";
                setLocation({ Location });
              } else {
                setError(
                  "Joylashuv topilmadi. Iltimos, boshqa joyni sinab ko'ring.",
                );
              }
            } catch (fetchError) {
              setError("API so'rovida xato.");
            }
          },
          (geolocationError) => {
            if (geolocationError.code === 1) {
              setError("GPS o'chirilgan. Iltimos, GPSni yoqing.");
            } else {
              setError("Geolocation xatosi: " + geolocationError.message);
            }
          },
        );
      } else {
        setError("Geolocation qo'llab-quvvatlanmaydi.");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h1>Joylashuv</h1>
      {error && <p>{error}</p>}
      {location.Location && location.Location !== "Shahar topilmadi" ? (
        <p>Shahar: {location.Location}</p>
      ) : (
        <p>Joylashuv ma'lumotlari olinmoqda...</p>
      )}
    </div>
  );
};

export default LocationComponent;
