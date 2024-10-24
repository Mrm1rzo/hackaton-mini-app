import React, { useState, useEffect } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState({
    city: "",
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  const apiKey = "YOUR_OPENCAGE_API_KEY"; // Bu yerga o'z API kalitingizni joylashtiring.

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            // Geocoding so'rovi
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`,
            );
            const data = await response.json();

            if (data.results.length > 0) {
              const city =
                data.results[0].components.city ||
                data.results[0].components.town ||
                data.results[0].components.village ||
                "Shahar topilmadi";
              setLocation({ city, latitude: lat, longitude: long });
            } else {
              setError("Shahar nomi topilmadi.");
            }
          },
          (error) => {
            setError(error.message);
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
      {location.city ? (
        <p>
          Shahar: {location.city}, Kenglik: {location.latitude}, Uzunlik:{" "}
          {location.longitude}
        </p>
      ) : (
        <p>Joylashuv ma'lumotlari olinmoqda...</p>
      )}
    </div>
  );
};

export default LocationComponent;
