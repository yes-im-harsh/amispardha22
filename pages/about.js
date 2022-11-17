import React from "react";
import Image from "next/image";
import { Button, Timeline } from "flowbite-react";
const about = () => {
  return (
    <>
      <div className="about_section">
        <div className="about_img">
          <Image src="/image.png " alt="" height={500} width={500} />
        </div>
        <div className="about_content ">
          <h1 className="title text-xl md:text-3xl lg:text-5xl mt-3  mb-[0.85rem] text-[#1A56DB]">
            {" "}
            AmiSpardha 2022
          </h1>
          <h2 className=" text-sm md:text-3xl lg:text-2xl mb-7  text-center">
            <span className="text-[#1A56DB] font-semibold">Theme:</span>{" "}
            <span className="text-[#6B7280]">
              Science, Technology and Management (Open Innovation).
            </span>
          </h2>
          {/* <p>
            <b className="about-title text-[#1A56DB]">
              {" "}
              EVENT: MODEL PRESENTATION{" "}
            </b>
            <br />
            There are 3 Stages in this event
            <br />
            1. Stage 1 Registration
            <br />
            2. Stage 2 Uploading Video of model presentation
            <br />
            3. Stage 3 Offline Presentations of Selected Models
            <br />
          </p>
          <p>
            <b className="about-title text-[#1A56DB]">Stage 1 Registration:</b>
            <br />
            1. There will be individual participation and participants must
            register online through Website
            <br />
            Senior Level Category (class 9 to 12)
            <br />
            UG/PG Level Category: Amity Students / Open Category
          </p>
          <p>
            <b className="about-title text-[#1A56DB]">
              Stage 2 Uploading Video & Presentation
            </b>
            <br />
            a) Video (Good video & audio quality) of model/exhibit not more than
            3 minutes is uploaded on participant&apos;s Google&apos;s drive and
            link of the same be shared by the participants on the Whatsapp
            group. While uploading you have to mention Title, Theme, Sub-theme,
            your Name, Class and Category.
            <br />
            b) These videos & Presentation will be examined by the panel of
            judges.
            <br />
            c) Best 10 videos of models/exhibits their write-ups will be
            shortlisted after screening by the panel of judges.
            <br />
            <b className="about-title text-[#1A56DB]">
              Stage 3 Offline Presentations of Selected Models
            </b>
            <br />
            1) Presentation should contain
            <br />
            1. Title of the exhibit, <br />
            2.Theme, <br />
            3.Sub Theme, <br />
            4.Name of Participant,
            <br />
            5. Class <br />
            6. Name of School,
            <br />
            8.Name of Guide Teacher,
            <br />
            9.School Address
            <br />
            Inner slides should contain
            <br />
            1. Problem Description
            <br />
            2. Solution Concept
            <br />
            3. Scientific principle involved <br />
            4. Material Required
            <br />
            5. Procedure <br />
            6. Working <br />
            7. Utility <br />
            8. Follow up action <br />
            9. Sketch of the Model
            <br />
            2. The participants of selected videos will be invited for their
            presentation offline during the event.
            <br />
            3. Each participant will be given 5 minutes for his/ her model
            presentation followed by 2 minutes of interaction with a panel of
            Judges.
            <br />
            4. Out of 10 models the best two will be declared as First, Second
            and followed by two consolations.
            <br />
            5. First, Second & two consolations will be conferred award with
            Medal, Merit Certificate & kit for all participants. (First Prize:
            Rs. 5000.00 and Second Prize: Rs. 3000.00) (All other participants
            and guide teachers will get their certificates according to the
            level of participation of the models)
          </p> */}
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                {/* <Timeline.Time>February 2022</Timeline.Time> */}
                <Timeline.Title>
                  <div className=" font-medium">
                    <span className="text-[#1A56DB] font-semibold">Event:</span>{" "}
                    Amispardha 2.0
                  </div>
                </Timeline.Title>
                <Timeline.Body>
                  There are 3 Stages in this event <br /> Stage 1: Registration{" "}
                  <br /> Stage 2: Uploading Video of model presentation <br />{" "}
                  Stage 3: Offline Presentations of Selected Models
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                {/* <Timeline.Time>February 2022</Timeline.Time> */}
                <Timeline.Title>
                  <div className=" font-medium">
                    <span className="text-[#1A56DB] font-semibold">
                      Stage 1:
                    </span>{" "}
                    Registration
                  </div>
                </Timeline.Title>
                <Timeline.Body>
                  &#x2022; There will be individual participation and
                  participants must register online through Website <br />{" "}
                  &#x2022; Senior Level Category (class 9 to 12) <br /> &#x2022;
                  UG/PG Level Category: Amity Students / Open Category
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                {/* <Timeline.Time>February 2022</Timeline.Time> */}
                <Timeline.Title>
                  <div className=" font-medium">
                    <span className="text-[#1A56DB] font-semibold">
                      Stage 2:
                    </span>{" "}
                    Uploading Video & Presentation
                  </div>
                </Timeline.Title>
                <Timeline.Body>
                  1. Video (Good video & audio quality) of model/exhibit not
                  more than 3 minutes is uploaded on participant's Google's
                  drive and link of the same be shared by the participants on
                  the Whatsapp group. While uploading you have to mention Title,
                  Theme, Sub-theme, your Name, Class and Category. <br /> 2.
                  These videos & Presentation will be examined by the panel of
                  judges. <br />
                  3. Best 10 videos of models/exhibits their write-ups will be
                  shortlisted after screening by the panel of judges.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                {/* <Timeline.Time>February 2022</Timeline.Time> */}
                <Timeline.Title>
                  <div className=" font-medium">
                    <span className="text-[#1A56DB] font-semibold">
                      Stage 3:
                    </span>{" "}
                    Offline Presentations of Selected Models
                  </div>
                </Timeline.Title>
                <Timeline.Body>
                  <span className="text-red-400 font-medium">
                    1. Presentation should contain: <br />
                  </span>
                  {"  "}
                  &nbsp; 1. Title of the exhibit <br />
                  &nbsp; 2. Theme & Sub Theme <br /> &nbsp; 3. Name of
                  Participant <br /> &nbsp; 4. Class of Participant <br />{" "}
                  &nbsp; 5. Name of School <br /> &nbsp; 6. Name of Guide
                  Teacher <br /> &nbsp; 7. Address of School <br />{" "}
                  <span className="text-red-400 font-medium">
                    &#x2022; Inner slides should contain:{" "}
                  </span>{" "}
                  <br />
                  &nbsp; 1. Problem Description <br />
                  &nbsp; 2. Solution Concept <br />
                  &nbsp; 3. Scientific principle involved <br />
                  &nbsp; 4. Material Required <br />
                  &nbsp; 5. Procedure <br />
                  &nbsp; 6. Working & Utility <br />
                  &nbsp; 7. Follow up action <br />
                  &nbsp; 8. Sketch of the Model <br />{" "}
                  <span className="text-red-400 font-medium">
                    2. The participants of selected videos will be invited for
                    their presentation offline during the event.
                  </span>{" "}
                  <br />
                  <span className="text-red-400 font-medium">
                    3. Each participant will be given 5 minutes for his/ her
                    model presentation followed by 2 minutes of interaction with
                    a panel of Judges.
                  </span>
                  <br />
                  <span className="text-red-400 font-medium">
                    4. Out of 10 models the best two will be declared as First,
                    Second and followed by two consolations.
                  </span>{" "}
                  <br />
                  <span className="text-red-400 font-medium">
                    5. First, Second & two consolations will be conferred award
                    with Medal, Merit Certificate & kit for all participants.
                    <br />
                    &nbsp; &#x2022; &nbsp;{" "}
                    <span className="text-red-500">1st Prize: Rs. 5000.00</span>
                    <br />
                    &nbsp; &#x2022; &nbsp;{" "}
                    <span className="text-red-500">2nd Prize: Rs. 3000.00</span>
                    <br /> All other participants and guide teachers will get
                    their certificates according to the level of participation
                    of the models
                  </span>{" "}
                  <br />
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default about;
