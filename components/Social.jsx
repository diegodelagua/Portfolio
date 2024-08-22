
import { clamp } from "framer-motion";
import Link from "next/link";
import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/diegodelagua?tab=repositories"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/diego-del-agua-b28242290/?trk=opento_sprofile_pfeditor"},
];

const Social = ({containerStyles, iconStyles}) =>{
    return (
        <div className={containerStyles}>
            {socials.map ((item, index) =>{
                return(
                    <Link key={index} href={item.path} className={iconStyles} legacyBehavior>
                       <a target="_blank">{item.icon}</a>
                    </Link>
                );
            })}
        </div>
    )
}

export default Social;