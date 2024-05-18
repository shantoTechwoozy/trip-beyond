import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const SpecialDeals: React.FC = () => {
  return (
    <CardContent className="w-full flex aspect-auto items-center justify-center  p-32">
      <Button>Content for Special Deals</Button>
    </CardContent>
  );
};

export default SpecialDeals;
