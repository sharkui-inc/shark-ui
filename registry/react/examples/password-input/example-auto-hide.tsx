"use client";

import React from "react";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => {
  const [visible, setVisible] = React.useState(false);

  const handleVisibilityChange = (nextVisible: boolean) => {
    setVisible(nextVisible);

    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, HIDE_DELAY_MS);
    }
  };

  return (
    <PasswordInput
      className="w-full max-w-64"
      onVisibilityChange={({ visible: nextVisible }) =>
        handleVisibilityChange(nextVisible)
      }
      placeholder="Enter password"
      visible={visible}
    />
  );
};

const HIDE_DELAY_MS = 3000;

export default Example;
