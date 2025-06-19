import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const SizeSec = ({ selected = [], onChange }) => {
  const toggleSize = (size) => {
    onChange((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="mb-6 sm:mb-4">
      <Typography
        variant="h6"
        className="mb-3 text-base sm:text-lg font-semibold"
      >
        Size
      </Typography>

      <div className="mb-4">
        <Input
          label="Search Size"
          className="text-sm"
          containerProps={{ className: "min-w-full" }}
        />
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selected.includes(size) ? "filled" : "outlined"}
            color="blue"
            size="sm"
            className="rounded-full px-4 py-1 text-xs sm:text-sm"
            onClick={() => toggleSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSec;
