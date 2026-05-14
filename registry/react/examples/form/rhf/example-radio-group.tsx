"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { toast } from "@/registry/react/components/toast";

const formSchema = z.object({
  plan: z.string().min(1, "You must select a subscription plan to continue."),
});

export function Example() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      id: "plan-submitted",
      title: "Plan submitted",
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            See pricing and features for each plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="plan"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldSet>
                    <FieldLegend>Plan</FieldLegend>
                    <FieldDescription className="ms-0!">
                      You can upgrade or downgrade your plan at any time.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      onValueChange={({ value }) => field.onChange(value)}
                      value={field.value}
                    >
                      {plans.map((plan) => (
                        <FieldLabel key={plan.id}>
                          <Field invalid={fieldState.invalid}>
                            <FieldContent>
                              <RadioGroupItem value={plan.id}>
                                {plan.title}
                              </RadioGroupItem>
                              <FieldDescription>
                                {plan.description}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </FieldSet>
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

const plans = [
  {
    id: "starter",
    title: "Starter (100K tokens/month)",
    description: "For everyday use with basic features.",
  },
  {
    id: "pro",
    title: "Pro (1M tokens/month)",
    description: "For advanced AI usage with more features.",
  },
  {
    id: "enterprise",
    title: "Enterprise (Unlimited tokens)",
    description: "For large teams and heavy usage.",
  },
];

export default Example;
