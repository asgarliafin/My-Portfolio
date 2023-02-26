
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SiHackerrank, SiUpwork } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';


export default [
    {
        title: "Pages",
        links: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Projects",
                link: "/projects"
            },
            {
                name: "Resume",
                link: "/resume"
            },
            {
                name: "Certificates",
                link: "/"
            }
        ]
    },
    {
        title: "Social",
        links: [
            {
                name: "Github",
                link: "https://github.com/asgarliafin",
                icon: FiGithub
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/afinasgarli/",
                icon: SlSocialLinkedin
            },
            {
                name: "HackerRank",
                link: "https://www.hackerrank.com/afinasgarli",
                icon: SiHackerrank
            },
            {
                name: "Upwork",
                link: "https://www.hackerrank.com/afinasgarli",
                icon: SiUpwork
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                name: "Email",
                link: "mailto:afinasgarli0@gmail.com",
                icon: MdOutlineEmail
            },
            {
                name: "Whatsapp",
                link: "",
                icon: BsWhatsapp
            },
            {
                name: "Twitter",
                link: "https://twitter.com/asgarliafin",
                icon: FiTwitter
            },
            {
                name: "Discord",
                link: "https://twitter.com/asgarliafin",
                icon: RxDiscordLogo
            }
        ]
    }
]

export const logos = [
    {
        link: "images/footer/react-logo.svg"
    },
    {
        link: "images/footer/bootstrap-logo.svg"
    }
]