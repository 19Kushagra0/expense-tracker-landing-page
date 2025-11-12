import React from "react";
import "@/app/myComponents/Header/Header.css";
import Image from "next/image";
import { Inter } from 'next/font/google';

export const inter = Inter({
    subsets: ['display'],
});
export default function Header() {
    return <header className="header">
        <div className="left-header">
            <div className="logo">
                <Image
                    src="/icons/logo.svg"
                    alt="play store"
                    height={36}
                    width={36}
                />
            </div>
        </div>

        <div className="right-header">
            <div className="careers">Careers</div>
            <div className="privacy">Privacy</div>
            <div className="terms">Terms</div>
            <div className="menu-btn">
                <Image
                    src="/icons/menu-icon.svg"
                    alt="apple store"
                    height={24}
                    width={24}
                />
            </div>
        </div>
    </header>
}
