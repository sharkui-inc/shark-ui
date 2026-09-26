"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  employeeAvatars,
  employees,
  ownerEmployeeId,
} from "../../_data/dashboard";
import { getInitials } from "../../_utils/get-initials";

export const SettingsMembersPage = ({ onSave }: { onSave: () => void }) => (
  <FieldGroup className="max-w-xl">
    <FieldSet>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <FieldLegend>Members</FieldLegend>
          <FieldDescription>
            Four people have access to this workspace.
          </FieldDescription>
        </div>
        <Button onClick={onSave} variant="outline">
          Invite member
        </Button>
      </div>
      <ItemGroup>
        {employees.map((employee) => (
          <Item key={employee.id} variant="outline">
            <ItemMedia>
              <Avatar size="md">
                <AvatarImage
                  alt={employee.name}
                  src={employeeAvatars[employee.id]}
                />
                <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{employee.name}</ItemTitle>
              <ItemDescription>{employee.role}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge size="sm" variant="secondary">
                {employee.id === ownerEmployeeId ? "Owner" : "Member"}
              </Badge>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </FieldSet>
  </FieldGroup>
);
