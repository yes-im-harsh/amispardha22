import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <>
      <div className="about_section">
        <div className="about_img">
          <Image src="/image.png " alt="" height={500} width={500} />
        </div>
        <div className="about_content ">
          <h1 className="title">About AmiSpradha 2022</h1>
          <h2 className=" text-xl mb-2">
            Theme: Science, Technology and Management (Open Innovation).
          </h2>
          <p>
            <b> EVENT: MODEL PRESENTATION </b>
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
            <b>Stage 1 Registration:</b>
            <br />
            1. There will be individual participation and participants must
            register online through Website
            <br />
            Senior Level Category (class 9 to 12)
            <br />
            UG/PG Level Category: Amity Students / Open Category
          </p>
          <p>
            <b>Stage 2 Uploading Video & Presentation</b>
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
            <b>Stage 3 Offline Presentations of Selected Models</b>
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
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
