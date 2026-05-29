"use client";

import React from "react";
import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const Example = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <PasswordInput
      className="w-full max-w-64"
      onVisibilityChange={(details) => setVisible(details.visible)}
      visible={visible}
    >
      <PasswordInputGroup>
        <PasswordInputInput placeholder="Enter password" />
        <PasswordInputTrigger />
      </PasswordInputGroup>
    </PasswordInput>
  );
};

export default Example;
