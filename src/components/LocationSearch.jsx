import React from "react";
import Input from "./Input";
import Button from "./Button";
import LocationButton from "./LocationButton";

const LocationSearch = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input type="text" placeholder="From" name="fromLocation" />
      <Input type="text" placeholder="To" name="toLocation" />
      <Button />
    </div>
  );
};

export default LocationSearch;
