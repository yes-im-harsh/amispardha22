import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import React from "react";
import Link from "next/link";

const TimelineComponent = () => {
  return (
    <div className="timeline mx-10">
      <h1 className="timeh1 text-5xl font-semibold mt-4 text-[#1A56DB]">
        Amispradha 2.0 Timeline
      </h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>17th November 2022</Timeline.Time>
            <Timeline.Title>Participants Registration Started</Timeline.Title>
            <Timeline.Body>
              You can now register for the event. The registration is live now.
            </Timeline.Body>
            <Button className="my-4">
              <Link
                href="https://forms.gle/YdoQBvQfBJqjreDQ8"
                className="flex justify-center items-center"
                target="_blank"
              >
                Register
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>28th November 2022</Timeline.Time>
            <Timeline.Title>Registration will close</Timeline.Title>
            <Timeline.Body>
              Registration will close on 28th November 2022. So, register Now.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>1st December 2022</Timeline.Time>
            <Timeline.Title>Amispardha 2.0</Timeline.Title>
            <Timeline.Body>
              Final Day for the event All the participants will be judged and
              the winners will be announced.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
