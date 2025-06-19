import React from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const prices = [
  "Rs. 599 - Rs. 1073",
  "Rs. 1074 - Rs. 1548",
  "Rs. 1549 - Rs. 2023",
  "Rs. 2024 - Rs. 2499",
];

const PriceSec = ({ selected = [], onChange }) => {
  const togglePrice = (priceLabel) => {
    const isSelected = selected.includes(priceLabel);
    const updated = isSelected
      ? selected.filter((p) => p !== priceLabel)
      : [...selected, priceLabel];
    onChange(updated);
  };

  return (
    <div className="mb-6 sm:mb-4">
      <Typography
        variant="h6"
        className="mb-3 text-base sm:text-lg font-semibold"
      >
        Price
      </Typography>
      <Card className="shadow-sm">
        <List className="divide-y divide-blue-gray-100">
          {prices.map((priceLabel, index) => (
            <ListItem className="p-0" key={index}>
              <label
                htmlFor={`price-${index}`}
                className="flex items-center w-full px-3 py-2 cursor-pointer hover:bg-blue-gray-50 transition rounded"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id={`price-${index}`}
                    ripple={false}
                    checked={selected.includes(priceLabel)}
                    onChange={() => togglePrice(priceLabel)}
                    className="hover:before:opacity-0"
                    containerProps={{ className: "p-0" }}
                  />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="font-medium text-sm sm:text-base"
                >
                  {priceLabel}
                </Typography>
              </label>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default PriceSec;
