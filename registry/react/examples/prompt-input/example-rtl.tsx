"use client";

import { createListCollection, useListCollection } from "@ark-ui/react";
import {
  CircleHelpIcon,
  FileTextIcon,
  FolderIcon,
  GitBranchIcon,
  GlobeIcon,
  ImagePlusIcon,
  ListTodoIcon,
  MicIcon,
  MonitorIcon,
  PaperclipIcon,
  PlusIcon,
  ShieldAlertIcon,
} from "lucide-react";
import React from "react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Combobox,
  ComboboxButtonTrigger,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  PromptInput,
  PromptInputBottom,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  const [status, setStatus] = React.useState<PromptInputStatus>("ready");
  const [value, setValue] = React.useState("");
  const [model, setModel] = React.useState(["terra-5.6"]);
  const [effort, setEffort] = React.useState(["medium"]);
  const [access, setAccess] = React.useState(["full"]);
  const { collection } = useListCollection({ initialItems: models });

  const effortCollection = createListCollection({ items: values.efforts });
  const accessCollection = createListCollection({ items: values.accessLevels });

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <PromptInput
        className="w-full"
        onStop={() => setStatus("ready")}
        onSubmit={() => {
          setValue("");
          setStatus("streaming");
          window.setTimeout(() => setStatus("ready"), 900);
        }}
        status={status}
      >
        <PromptInputTextarea
          aria-label={values.promptAriaLabel}
          onChange={(event) => setValue(event.target.value)}
          placeholder={values.promptPlaceholder}
          value={value}
        />
        <PromptInputFooter>
          <PromptInputTools>
            <Menu positioning={{ placement: "top-start" }}>
              <MenuTrigger asChild>
                <PromptInputButton
                  aria-label={values.addToPromptAriaLabel}
                  size="icon-sm"
                >
                  <PlusIcon aria-hidden />
                </PromptInputButton>
              </MenuTrigger>
              <MenuContent className="w-80">
                <MenuGroup heading={values.actionSections.context}>
                  {contextActions.map((action) => (
                    <MenuItem key={action.value} value={action.value}>
                      {action.icon}
                      {values.actionLabels[action.value]}
                    </MenuItem>
                  ))}
                </MenuGroup>
                <MenuSeparator />
                <MenuGroup heading={values.actionSections.agent}>
                  {agentActions.map((action) => (
                    <MenuItem key={action.value} value={action.value}>
                      {action.icon}
                      {values.actionLabels[action.value]}
                    </MenuItem>
                  ))}
                </MenuGroup>
              </MenuContent>
            </Menu>
            <Select
              collection={accessCollection}
              onValueChange={(details) => setAccess(details.value)}
              positioning={{ placement: "top-start" }}
              value={access}
            >
              <SelectTrigger showTrigger={false} size="sm" variant="ghost">
                <ShieldAlertIcon aria-hidden />
                <SelectValue placeholder={values.accessLevels[0].label} />
              </SelectTrigger>
              <SelectContent>
                {accessCollection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span>{item.label}</span>
                      <span className="text-muted-foreground text-xs">
                        {item.description}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </PromptInputTools>
          <Combobox
            collection={collection}
            onValueChange={(details) => setModel(details.value)}
            positioning={{ placement: "top" }}
            value={model}
          >
            <ComboboxButtonTrigger
              placeholder="Model"
              showTrigger={false}
              size="sm"
              variant="ghost"
            />
            <ComboboxContent className="max-h-72 w-52">
              <ComboboxList>
                {collection.items.map((item) => (
                  <ComboboxItem item={item} key={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <Select
            collection={effortCollection}
            onValueChange={(details) => setEffort(details.value)}
            positioning={{ placement: "top" }}
            value={effort}
          >
            <SelectTrigger showTrigger={false} size="sm" variant="ghost">
              <SelectValue placeholder={values.efforts[1].label} />
            </SelectTrigger>
            <SelectContent>
              {effortCollection.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PromptInputButton
            aria-label={values.voiceInputAriaLabel}
            size="icon-sm"
          >
            <MicIcon aria-hidden />
          </PromptInputButton>
          <PromptInputSubmit className="ms-2" size="icon-sm" />
        </PromptInputFooter>
        <PromptInputBottom>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            variant="ghost"
          >
            <FolderIcon aria-hidden data-icon="inline-start" />
            viajuntos
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            variant="ghost"
          >
            <MonitorIcon aria-hidden data-icon="inline-start" />
            {values.local}
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            variant="ghost"
          >
            <GitBranchIcon aria-hidden data-icon="inline-start" />
            main
          </Button>
          <div className="ms-auto">
            <Context
              maxTokens={128_000}
              positioning={{ placement: "top-end" }}
              usedTokens={18_420}
            >
              <ContextTrigger
                aria-label={values.contextTriggerAria}
                size="icon-sm"
              >
                <ContextIcon />
              </ContextTrigger>
              <ContextContent>
                <ContextHeader>
                  <ContextTitle showCloseButton>
                    {values.contextTitle}
                  </ContextTitle>
                  <ContextMeter />
                </ContextHeader>
                <ContextBody>
                  {contextUsage.map((usage) => (
                    <ContextUsageRow
                      key={usage.key}
                      title={values.contextRows[usage.key]}
                      value={usage.value}
                    />
                  ))}
                </ContextBody>
              </ContextContent>
            </Context>
          </div>
        </PromptInputBottom>
      </PromptInput>
    </div>
  );
};

const models = [
  { label: "5.6 Terra", value: "terra-5.6" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "GPT-5.2", value: "gpt-5.2" },
];

const actionItemsByValue = [
  {
    group: "context",
    icon: <PaperclipIcon aria-hidden />,
    value: "files",
  },
  {
    group: "context",
    icon: <ImagePlusIcon aria-hidden />,
    value: "image",
  },
  {
    group: "context",
    icon: <GlobeIcon aria-hidden />,
    value: "web-page",
  },
  {
    group: "context",
    icon: <FileTextIcon aria-hidden />,
    value: "instructions",
  },
  {
    group: "agent",
    icon: <ListTodoIcon aria-hidden />,
    value: "plan",
  },
  {
    group: "agent",
    icon: <CircleHelpIcon aria-hidden />,
    value: "ask",
  },
] as const;

const contextActions = actionItemsByValue.filter(
  (action) => action.group === "context"
);

const agentActions = actionItemsByValue.filter(
  (action) => action.group === "agent"
);

const contextUsage = [
  { key: "input", value: 4200 },
  { key: "output", value: 860 },
  { key: "reasoning", value: 640 },
  { key: "cache", value: 1200 },
] as const;

const translations = {
  ar: {
    values: {
      accessLevels: [
        {
          description: "قراءة وكتابة وتشغيل أوامر.",
          label: "وصول كامل",
          value: "full",
        },
        {
          description: "اطلب الموافقة قبل تنفيذ أي إجراء.",
          label: "اسأل أولًا",
          value: "ask",
        },
        {
          description: "عرض الملفات دون إجراء تغييرات.",
          label: "قراءة فقط",
          value: "read",
        },
      ],
      actionLabels: {
        ask: "اطرح سؤالًا",
        files: "إرفاق ملفات ومجلدات",
        image: "إضافة صورة أو لقطة شاشة",
        instructions: "إضافة تعليمات المشروع",
        plan: "تخطيط التنفيذ",
        "web-page": "إضافة صفحة ويب",
      },
      actionSections: {
        agent: "إجراءات الوكيل",
        context: "إضافة سياق",
      },
      addToPromptAriaLabel: "أضف إلى الموجه",
      contextRows: {
        cache: "الذاكرة المؤقتة",
        input: "المدخلات",
        output: "المخرجات",
        reasoning: "الاستدلال",
      },
      contextTitle: "استخدام السياق",
      contextTriggerAria: "استخدام السياق",
      efforts: [
        { label: "منخفض", value: "low" },
        { label: "متوسط", value: "medium" },
        { label: "عالي", value: "high" },
        { label: "عالي جدًا", value: "extra-high" },
      ],
      local: "محلي",
      promptAriaLabel: "موجه",
      promptPlaceholder: "افعل أي شيء",
      voiceInputAriaLabel: "إدخال صوتي",
    },
  },
  en: {
    values: {
      accessLevels: [
        {
          description: "Read, write, and run commands.",
          label: "Full access",
          value: "full",
        },
        {
          description: "Request approval before taking action.",
          label: "Ask first",
          value: "ask",
        },
        {
          description: "View files without making changes.",
          label: "Read only",
          value: "read",
        },
      ],
      actionLabels: {
        ask: "Ask a question",
        files: "Attach files and folders",
        image: "Add image or screenshot",
        instructions: "Add project instructions",
        plan: "Plan implementation",
        "web-page": "Add web page",
      },
      actionSections: {
        agent: "Agent actions",
        context: "Add context",
      },
      addToPromptAriaLabel: "Add to prompt",
      contextRows: {
        cache: "Cache",
        input: "Input",
        output: "Output",
        reasoning: "Reasoning",
      },
      contextTitle: "Context Usage",
      contextTriggerAria: "Context usage",
      efforts: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "Extra high", value: "extra-high" },
      ],
      local: "Local",
      promptAriaLabel: "Prompt",
      promptPlaceholder: "Do anything",
      voiceInputAriaLabel: "Voice input",
    },
  },
  he: {
    values: {
      accessLevels: [
        {
          description: "קריאה, כתיבה והרצת פקודות.",
          label: "גישה מלאה",
          value: "full",
        },
        {
          description: "בקש אישור לפני ביצוע פעולה.",
          label: "שאל קודם",
          value: "ask",
        },
        {
          description: "צפייה בקבצים ללא שינויים.",
          label: "קריאה בלבד",
          value: "read",
        },
      ],
      actionLabels: {
        ask: "שאל שאלה",
        files: "צרף קבצים ותיקיות",
        image: "הוסף תמונה או צילום מסך",
        instructions: "הוסף הנחיות פרויקט",
        plan: "תכנון יישום",
        "web-page": "הוסף דף אינטרנט",
      },
      actionSections: {
        agent: "פעולות Agent",
        context: "הוסף קונטקסט",
      },
      addToPromptAriaLabel: "הוסף לפרומפט",
      contextRows: {
        cache: "מטמון",
        input: "קלט",
        output: "פלט",
        reasoning: "הנמקה",
      },
      contextTitle: "שימוש בקונטקסט",
      contextTriggerAria: "שימוש בקונטקסט",
      efforts: [
        { label: "נמוך", value: "low" },
        { label: "בינוני", value: "medium" },
        { label: "גבוה", value: "high" },
        { label: "גבוה במיוחד", value: "extra-high" },
      ],
      local: "מקומי",
      promptAriaLabel: "פרומפט",
      promptPlaceholder: "תעשה הכל",
      voiceInputAriaLabel: "קלט קולי",
    },
  },
};

export default Example;
