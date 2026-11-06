import {
  CornerDownLeftIcon,
  EllipsisIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { Kbd } from "@/registry/react/components/kbd";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueList,
  QueueSection,
  QueueSectionAction,
  QueueSectionContent,
  QueueSectionHeader,
} from "@/registry/react/components/queue";

const QueueDemo = () => (
  <Queue className="w-full max-w-md">
    <QueueSection>
      <QueueSectionHeader title="4 Queued Messages">
        <QueueSectionAction>
          <QueueItemAction size="xs">Start Multitasking</QueueItemAction>
        </QueueSectionAction>
      </QueueSectionHeader>
      <QueueSectionContent>
        <QueueList>
          {ITEMS.map((item) => (
            <QueueItem key={item}>
              <QueueItemContent>{item}</QueueItemContent>
              <QueueItemActions>
                <QueueItemAction size="xs">
                  Send Now
                  <Kbd className="border-0 bg-transparent px-0">
                    <CornerDownLeftIcon aria-hidden="true" />
                  </Kbd>
                </QueueItemAction>
                <QueueItemAction aria-label={`Edit ${item}`}>
                  <PencilIcon aria-hidden="true" />
                </QueueItemAction>
                <QueueItemAction aria-label={`Remove ${item}`}>
                  <Trash2Icon aria-hidden="true" />
                </QueueItemAction>
                <QueueItemAction aria-label={`More actions for ${item}`}>
                  <EllipsisIcon aria-hidden="true" />
                </QueueItemAction>
              </QueueItemActions>
            </QueueItem>
          ))}
        </QueueList>
      </QueueSectionContent>
    </QueueSection>
  </Queue>
);

const ITEMS = [
  "Summarize the launch brief",
  "Draft release notes",
  "Open a PR for the queue panel",
  "Ship the docs preview",
];

export default QueueDemo;
