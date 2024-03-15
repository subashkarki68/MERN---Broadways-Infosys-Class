import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryList = [
    {
      country: "India",
      cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai"],
    },
    {
      country: "Nepal",
      cities: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
    },
    {
      country: "United States",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Glasgow"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Montreal", "Vancouver", "Calgary"],
    },
    {
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    },
    { country: "France", cities: ["Paris", "Marseille", "Lyon", "Toulouse"] },
    { country: "Germany", cities: ["Berlin", "Hamburg", "Munich", "Cologne"] },
    {
      country: "China",
      cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    },
    { country: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama"] },
    {
      country: "Brazil",
      cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
    },
  ];

  const handleCountrySelect = (country: any, city: any) => {
    setSelectedCountry(`${country} - ${city}`);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {selectedCountry ? selectedCountry : "Choose your country"}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {countryList.map((country) => (
            <DropdownMenuSub key={country.country}>
              <DropdownMenuSubTrigger>{country.country}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {country.cities.map((city) => {
                    return (
                      <DropdownMenuItem
                        key={city}
                        onClick={() =>
                          handleCountrySelect(country.country, city)
                        }
                      >
                        {city}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default CountrySelector;
