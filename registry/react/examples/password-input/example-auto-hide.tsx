"use client";

import React from "react";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!visible) {
      return;
    }

    const hideTimeoutId = window.setTimeout(() => {
      setVisible(false);
    }, HIDE_DELAY_MS);

    return () => {
      window.clearTimeout(hideTimeoutId);
    };
  }, [visible]);

  return (
    <PasswordInput
      className="w-full max-w-64"
      onVisibilityChange={({ visible: nextVisible }) => setVisible(nextVisible)}
      placeholder="Enter password"
      visible={visible}
    />
  );
};

const HIDE_DELAY_MS = 3000;

export default Example;
