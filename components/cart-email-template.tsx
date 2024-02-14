import { Button, Html } from "@react-email/components";
import * as React from "react";

type CartEmailTemplateProps = {
  cartId: string;
};

export function CartEmailTemplate({ cartId }: CartEmailTemplateProps) {
  return (
    <Html>
      Success!!
      <Button href={`http://localhost:3000/${cartId}`}>
        Sjekk ut handlekurv
      </Button>
    </Html>
  );
}
