import {
  Queue,
  QueueItem,
  QueueItemContent,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionHeader,
} from "@/registry/react/components/queue";

const Example = () => (
  <Queue className="w-full max-w-md">
    <QueueSection>
      <QueueSectionHeader title="2 Completed" />
      <QueueSectionContent>
        <QueueList>
          <QueueItem>
            <QueueItemContent completed>
              Summarize the launch brief
            </QueueItemContent>
          </QueueItem>
          <QueueItem>
            <QueueItemContent completed>Draft release notes</QueueItemContent>
          </QueueItem>
        </QueueList>
      </QueueSectionContent>
    </QueueSection>
  </Queue>
);

export default Example;
