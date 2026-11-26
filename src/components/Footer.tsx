import {
    IconBookFilled,
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    type Icon,
} from "@tabler/icons-react";
import { roundry } from "../lib/const";

interface SocialLinkProps {
    key: string;
    title: string;
    url: string;
    icon: Icon;
    hoverText?: string;
}
export const Footer = () => {
    const socialLinks: SocialLinkProps[] = [
        {
            key: "li",
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/henry-ouellette-8a3b36201/",
            icon: IconBrandLinkedinFilled,
            hoverText: "Visit my LinkedIn!",
        },
        {
            key: "re",
            title: "My Resume",
            url: "/resume",
            icon: IconBookFilled,
            hoverText: "Check out my Resume",
        },
        {
            key: "gh",
            title: "GitHub",
            url: "https://github.com/hxvry-dev",
            icon: IconBrandGithubFilled,
            hoverText: "Visit my GitHub!",
        },
    ];
    return (
        <footer className="footer footer-horizontal bg-base-200 text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <img src={roundry} alt="Me :P" />
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                {socialLinks.map((item) => (
                    <a href={item.url} key={item.key}>
                        <item.icon />
                    </a>
                ))}
            </nav>
        </footer>
    );
};
