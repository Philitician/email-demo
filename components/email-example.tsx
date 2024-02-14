import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function EmailExample() {
  return (
    <Html>
      Success!!
      <Button
        href="http://localhost:3000"
        // style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
