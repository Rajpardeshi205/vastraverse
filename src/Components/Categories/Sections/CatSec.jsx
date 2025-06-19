import React from "react";
import {
  Input,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const categories = [
  "Oversized T-Shirts",
  "All Bottoms",
  "Shirts",
  "Polos",
  "Caps",
  "Sneakers",
  "Slides & Clogs",
  "Jackets & More",
];

const CatSec = ({ selected = [], onChange }) => (
  <div className="mb-6 sm:mb-4">
    <Typography
      variant="h6"
      className="mb-3 text-base sm:text-lg font-semibold"
    >
      Categories
    </Typography>

    <div className="mb-4">
      <Input
        label="Search"
        className="text-sm"
        containerProps={{ className: "min-w-full" }}
      />
    </div>

    <Card className="max-h-64 sm:max-h-full overflow-y-auto shadow-none sm:shadow-md">
      <List>
        {categories.map((category, index) => (
          <ListItem className="p-0" key={index}>
            <label
              htmlFor={`cat-${index}`}
              className="flex items-center w-full px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md transition"
            >
              <ListItemPrefix className="mr-2">
                <Checkbox
                  id={`cat-${index}`}
                  ripple={false}
                  checked={selected.includes(category)}
                  onChange={() => onChange(category)}
                  className="hover:before:opacity-0"
                  containerProps={{ className: "p-0" }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-sm sm:text-base"
              >
                {category}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  </div>
);

export default CatSec;
