"use client";

import Image from "next/image";
import "@/app/join-group/components/Join-group.css";

export default function JoinGroup({ groupName }) {
  return (
    <div className="join-group">
      {/* Top line */}
      <span className="join-group-top-line">You are invited to</span>

      {/* Dynamic group name */}
      <span className="join-group-dynamic-text">{groupName}</span>

      {/* Tagline */}
      <span className="join-group-tag-line">
        Add, track, and split expenses with your friends
      </span>

      {/* Divider line */}
      <div className="join-group-line"></div>

      {/* Bottom line */}
      <span className="join-group-bottom-line">Simplify your debts</span>

      {/* Download Buttons */}
      <div className="join-group-button-container">
        <button className="join-group-button">
          <div className="join-image-conatiner">
            <Image
              src="/icons/apple-svg.svg"
              width={18}
              height={18}
              alt="App Store"
            />
            <div className="join-group-image-line"></div>
            <Image
              src="/icons/playstore-svg.svg"
              width={18}
              height={18}
              alt="Play Store"
            />
          </div>

          <span className="join-group-text">Download Numora</span>
        </button>
      </div>
    </div>
  );
}
