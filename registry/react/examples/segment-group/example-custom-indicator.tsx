"use client";

import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => (
  <SegmentGroup
    className="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
    defaultValue="Profile"
  >
    {items.map((item) => (
      <SegmentGroupItem
        className="px-2 py-1.5 text-sm"
        disabled={item === "Security"}
        key={item}
        value={item}
      >
        <SegmentGroupItemText>{item}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
  </SegmentGroup>
);

const items = ["Profile", "Account", "Security", "Notifications"];

export default Example;
