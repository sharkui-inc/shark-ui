import {
  EllipsisIcon,
  ListPlusIcon,
  PauseIcon,
  PlayIcon,
  Trash2Icon,
} from "lucide-react";
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

const Example = () => (
  <Queue className="w-full max-w-md">
    <QueueSection>
      <QueueSectionHeader title="Queue paused because you interrupted">
        <PauseIcon aria-hidden="true" />
        <QueueSectionAction>
          <QueueItemAction size="xs">
            <PlayIcon aria-hidden="true" />
            Resume
          </QueueItemAction>
        </QueueSectionAction>
      </QueueSectionHeader>
      <QueueSectionContent>
        <QueueList>
          <QueueItem>
            <ListPlusIcon aria-hidden="true" />
            <QueueItemContent>Draft the queue panel update</QueueItemContent>
            <QueueItemActions>
              <QueueItemAction size="xs">Steer</QueueItemAction>
              <QueueItemAction aria-label="Remove Draft the queue panel update">
                <Trash2Icon aria-hidden="true" />
              </QueueItemAction>
              <QueueItemAction aria-label="More actions for Draft the queue panel update">
                <EllipsisIcon aria-hidden="true" />
              </QueueItemAction>
            </QueueItemActions>
          </QueueItem>
        </QueueList>
      </QueueSectionContent>
    </QueueSection>
  </Queue>
);

export default Example;
