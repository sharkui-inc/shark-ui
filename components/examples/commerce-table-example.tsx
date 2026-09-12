"use client";

import { EllipsisIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/registry/react/components/alert-dialog";
import { Badge, type BadgeVariant } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

export const CommerceTableExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  const [refund, setRefund] = useState<(typeof DATA)[number] | null>(null);

  return (
    <Card className={cn("[--space:--spacing(2)]", className)} {...rest}>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {DATA.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell className="text-center">{row.amount}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={BADGE_VARIANTS[row.status]}>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Menu>
                    <MenuTrigger asChild>
                      <Button
                        aria-label={`Actions for ${row.name}`}
                        size="icon-sm"
                        variant="outline"
                      >
                        <EllipsisIcon aria-hidden="true" />
                      </Button>
                    </MenuTrigger>
                    <MenuContent>
                      <MenuItem
                        onSelect={() =>
                          toast.info({
                            description: row.name,
                            title: "Customer",
                          })
                        }
                        value="view"
                      >
                        View
                      </MenuItem>
                      <MenuItem onSelect={() => setRefund(row)} value="refund">
                        Refund
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <AlertDialog
        onOpenChange={({ open }) => {
          if (!open) {
            setRefund(null);
          }
        }}
        open={refund !== null}
      >
        <AlertDialogContent>
          <AlertDialogHeader
            description={
              refund
                ? `Refund ${refund.amount} to ${refund.name}? This preview does not move money.`
                : undefined
            }
            title="Issue a refund?"
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogClose asChild>
              <AlertDialogAction
                onClick={() => {
                  toast.success({
                    description: refund?.name,
                    title: "Refund issued",
                  });
                  setRefund(null);
                }}
                variant="destructive"
              >
                Refund
              </AlertDialogAction>
            </AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

const DATA = [
  { amount: 100, id: "1", name: "Vinicius V.", status: "success" },
  { amount: 200, id: "2", name: "Bruno S.", status: "processing" },
  { amount: 300, id: "3", name: "Clara M.", status: "failed" },
  { amount: 400, id: "4", name: "David P.", status: "pending" },
];

const BADGE_VARIANTS: Record<string, BadgeVariant> = {
  failed: "destructive",
  pending: "warning",
  processing: "info",
  success: "success",
} as const;
