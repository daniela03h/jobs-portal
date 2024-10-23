import Button from "@/components/atoms/Button/Button";
import React from "react";

export default function Tabs() {
  return (
    <div>
      <Button variant="rounded" color="purple">
        Vacantes
      </Button>
      <Button variant="rounded">Compañías</Button>
    </div>
  );
}
