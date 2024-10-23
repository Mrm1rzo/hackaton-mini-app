import React from "react";
import Input from "./Input";
import Button from "./Button";
import LocationButton from "./LocationButton";

const LocationSearch = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input type="text" placeholder="From" name="location" />
      <Input type="text" placeholder="To" name="location" />
      <Button />
    </div>
  );
};

export default LocationSearch;
