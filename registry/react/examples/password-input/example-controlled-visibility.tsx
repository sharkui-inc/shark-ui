"use client";

import React from "react";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <PasswordInput
      className="w-full max-w-64"
      onVisibilityChange={(details) => setVisible(details.visible)}
      placeholder="Enter password"
      visible={visible}
    />
  );
};

export default Example;
