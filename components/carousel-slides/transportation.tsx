// components/CarouselSlides/Slide2.tsx
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const Transportation: React.FC = () => {
  return (
    <CardContent className="w-full flex aspect-auto items-center justify-center  p-32">
      <Button>Content for Transportation</Button>
    </CardContent>
  );
};

export default Transportation;
