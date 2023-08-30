import { useEffect, useState } from "react";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./SocialIcons";
import BackgroundHeader from "../../images/background.jpg";
import avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

import { fetchHeaderTheme } from "../../../store/HeaderThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderContent from "./HeaderContent";
import HeaderImg from "./HeaderImg";
import axios from "axios";
import swal from "sweetalert";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}



const Header = () => {

  const [Header, setHeaderlist] = useState({
    contentHeader:[],
  });
  useEffect(() => {

    axios.get('api/linkes_Content/fatchLinkes_Content' ).then( res  => {
      
      setHeaderlist({...Header , contentHeader: res.data.Home});
      console.log(res.data.Home);
    });
  }, []);


  return (
    <div className="py-16">
      <div className="absolute top-0 left-0 -z-30 h-screen overflow-hidden">
        <img src={BackgroundHeader} />
      </div>
      <div className="container max-w-screen-lg mx-auto px-4 mt-9">
        <HeaderImg data={Header.contentHeader} />

        <div className="max-w-2xl mt-8">
          <HeaderContent data={Header.contentHeader} />

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
