//
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import "@/app/join-group/components/Join-group.css";
const inter = Inter({ subsets: ["latin"] });
export default function JoinGroup({ groupName }) {
  return (
    <div className="${inter.className} join-group">
      <div className="join-group-background-image-container">
        <div className="join-group-background-image">
          <div className="join-group-invitation-button">
            <span className="join-group-invitation-text">INVITATION</span>
          </div>
        </div>
      </div>

      <div className="join-group-dynamic-text-container">
        <span className="join-group-dynamic-text">{groupName}</span>
        <span className="join-group-tag-line">
          Add, track, and split expenses with your friends
        </span>
      </div>

      <div className="join-group-button-container">
        <a
          href="https://play.google.com/store/apps/details?id=com.getnumora.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="join-group-button">
            <div className="join-image-conatiner">
              <Image
                className="join-image-icon"
                src="/icons/apple-svg.svg"
                alt="apple store"
                height={18}
                width={18}
              />

              <div className="join-group-image-line"></div>

              <Image
                className="join-image-icon"
                src="/icons/playstore-svg.svg"
                alt="play store"
                height={18}
                width={18}
              />
            </div>

            <span className="join-group-text">Download Numora</span>
          </button>
        </a>
      </div>
    </div>
  );
}
//
