"use client";

import "./Join-group.css";

export default function JoinGroup({ groupName }) {
  return (
    <div className="join-group">
      <div className="join-group-top-line">You are invited to</div>

      <div className="join-group-dynamic-text">
        {groupName || "Your Group Name"}
      </div>

      <div className="join-group-tag-line">
        Easily join this group using the link below.
      </div>

      <div className="join-group-line" />

      <button className="join-group-button">
        <span className="join-group-text">Join Group</span>
      </button>
    </div>
  );
}
