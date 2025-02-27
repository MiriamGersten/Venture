import { useState, useEffect, useRef } from "react";
import { TextField, Autocomplete } from "@mui/material";

const AddressAutocomplete = ({ onAddressSelect }: { onAddressSelect: (data: any) => void }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);

  useEffect(() => {
    if (!window.google) return;
    autocompleteService.current = new google.maps.places.AutocompleteService();
  }, []);

  const fetchPredictions = async (input: string) => {
    if (!autocompleteService.current || !input) {
      setOptions([]);
      return;
    }

    autocompleteService.current.getPlacePredictions({ input }, (predictions) => {
      setOptions(predictions ? predictions.map((p) => p.description) : []);
    });
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      inputValue={inputValue}
      onInputChange={(_, newValue) => {
        setInputValue(newValue);
        fetchPredictions(newValue);
      }}
      onChange={(_, selectedValue) => {
        if (!selectedValue) return;
        
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: selectedValue }, (results, status) => {
            if (status !== "OK" || !results || results.length === 0) {
              console.error("Geocoding failed:", status);
              return;
            }
          
            const address = results[0].address_components;
            const formattedAddress = {
              street: address.find((c) => c.types.includes("route"))?.long_name || "",
              streetNumber: address.find((c) => c.types.includes("street_number"))?.long_name || "",
              city: address.find((c) => c.types.includes("locality"))?.long_name || "",
              state: address.find((c) => c.types.includes("administrative_area_level_1"))?.short_name || "",
              zip: address.find((c) => c.types.includes("postal_code"))?.long_name || "",
              country: address.find((c) => c.types.includes("country"))?.long_name || "",
            };
          
            onAddressSelect(formattedAddress);
          });
      }}
      renderInput={(params) => <TextField {...params} label="Address" fullWidth  sx={{ backgroundColor: '#fff', marginTop: 3 }}/>}
    />
  );
};

export default AddressAutocomplete;
