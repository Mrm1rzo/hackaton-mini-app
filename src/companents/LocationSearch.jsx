import React from "react";
import Input from "./Input";
import Button from "./Button";

const LocationSearch = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input type="text" placeholder="From" name="location"></Input>
      <Button></Button>
      <Input type="text" placeholder="To" name="location"></Input>
    </div>
  );
};

export default LocationSearch;
