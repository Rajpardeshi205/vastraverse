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

const themes = [
  "Marvel",
  "DC",
  "Anime",
  "Harry Potter",
  "Squid Game",
  "Star Wars",
  "Rick and Morty",
  "Game of Thrones",
];

const ThemeSec = ({ selected = [], onChange }) => (
  <div className="mb-6 sm:mb-4">
    <Typography
      variant="h6"
      className="mb-3 text-base sm:text-lg font-semibold"
    >
      Themes
    </Typography>
    <Input label="Search Theme" className="mb-4" />
    <Card className="shadow-sm">
      <List className="divide-y divide-blue-gray-100">
        {themes.map((theme, index) => (
          <ListItem className="p-0" key={index}>
            <label
              htmlFor={`theme-${index}`}
              className="flex items-center w-full px-3 py-2 cursor-pointer hover:bg-blue-gray-50 transition rounded"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`theme-${index}`}
                  ripple={false}
                  checked={selected.includes(theme)}
                  onChange={() => onChange(theme)}
                  className="hover:before:opacity-0"
                  containerProps={{ className: "p-0" }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-sm sm:text-base"
              >
                {theme}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  </div>
);

export default ThemeSec;
