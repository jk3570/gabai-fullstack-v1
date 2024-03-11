import React, { useState } from "react";

const btnStyle = "p-2 rounded-xl bg-azure text-white";

const inputStyle = "border-2 rounded-xl p-2 w-[20rem]";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);

  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <input
        type="text"
        className={inputStyle}
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <div>
        <button onClick={onClick} className={btnStyle}>
          Join
        </button>
        {" or "}
        <button onClick={onClick} className={btnStyle}>
          Create Meeting
        </button>
      </div>
    </div>
  );
}

export default JoinScreen;
