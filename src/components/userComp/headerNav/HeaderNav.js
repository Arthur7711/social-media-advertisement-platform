import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../images/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import arrow from "../../../images/Vector.png";
import Simplebutton from "../../simpleButton/SimpleButton";
import jingle from "../../../images/jingle.png";
import user from "../../../images/girl.jpg";
import { NavLink, Route, useHistory } from "react-router-dom";
import talk from "../../../images/talk.png";
import selected from "../../../images/selected.png";
import settings from "../../../images/settings.png";
import question from "../../../images/question.png";
import out from "../../../images/out.png";
import SimpleDialogDemo from "../RingMenu";
import TextGenerator from "../../../pages/textGenerator/TextGenerator";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0].toUpperCase()}${name
      .split(" ")[0][1]
      .toUpperCase()}`,
  };
}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  let history = useHistory();

  const [userInfo, setUserInfo] = useState({
    image: user,
    name: "Charles Hu",
    title: "Business Admin",
  });
  const [incomingData, setIncomingData] = useState([
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  const [isopen, setIsOpen] = useState(false);
  const [doesOpen, setDoesOpen] = useState(false);

  const navState = [
    {
      text: "Dashboard",
      image: (
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.35385 0H2.28846C1.989 0 1.73138 9.74307e-09 1.50385 0.0536154C1.1516 0.137785 0.829535 0.31783 0.573332 0.573801C0.31713 0.829773 0.136795 1.15168 0.0523076 1.50385C-4.87153e-08 1.73138 0 1.98769 0 2.28846V5.55769C0 5.85715 9.74307e-09 6.11477 0.0536154 6.34231C0.137785 6.69455 0.31783 7.01662 0.573801 7.27282C0.829773 7.52902 1.15168 7.70936 1.50385 7.79385C1.73138 7.84615 1.98769 7.84615 2.28846 7.84615H5.55769C5.85715 7.84615 6.11477 7.84615 6.34231 7.79254C6.69455 7.70837 7.01662 7.52832 7.27282 7.27235C7.52902 7.01638 7.70936 6.69448 7.79385 6.34231C7.84615 6.11477 7.84615 5.85846 7.84615 5.55769V2.28846C7.84615 1.989 7.84615 1.73138 7.79254 1.50385C7.70837 1.1516 7.52832 0.829535 7.27235 0.573332C7.01638 0.31713 6.69448 0.136795 6.34231 0.0523076C6.11477 -4.87153e-08 5.85846 0 5.55769 0H2.35385ZM1.80854 1.326C1.86477 1.31292 1.95238 1.30769 2.35385 1.30769H5.49231C5.89508 1.30769 5.98138 1.31162 6.03762 1.326C6.15509 1.35409 6.26248 1.41417 6.34788 1.49958C6.43329 1.58498 6.49337 1.69238 6.52146 1.80985C6.53454 1.86477 6.53846 1.95108 6.53846 2.35385V5.49231C6.53846 5.89508 6.53454 5.98138 6.52015 6.03762C6.49206 6.15509 6.43198 6.26248 6.34658 6.34788C6.26117 6.43329 6.15378 6.49337 6.03631 6.52146C5.98269 6.53323 5.89638 6.53846 5.49231 6.53846H2.35385C1.95108 6.53846 1.86477 6.53454 1.80854 6.52015C1.69107 6.49206 1.58368 6.43198 1.49827 6.34658C1.41286 6.26117 1.35278 6.15378 1.32469 6.03631C1.31292 5.98269 1.30769 5.89638 1.30769 5.49231V2.35385C1.30769 1.95108 1.31162 1.86477 1.326 1.80854C1.35409 1.69107 1.41417 1.58368 1.49958 1.49827C1.58498 1.41286 1.69238 1.35278 1.80985 1.32469L1.80854 1.326ZM11.5077 0H11.4423C11.1428 0 10.8852 9.74307e-09 10.6577 0.0536154C10.3054 0.137785 9.98338 0.31783 9.72718 0.573801C9.47098 0.829773 9.29064 1.15168 9.20615 1.50385C9.15385 1.73138 9.15385 1.98769 9.15385 2.28846V5.55769C9.15385 5.85715 9.15385 6.11477 9.20746 6.34231C9.29163 6.69455 9.47168 7.01662 9.72765 7.27282C9.98362 7.52902 10.3055 7.70936 10.6577 7.79385C10.8852 7.84615 11.1415 7.84615 11.4423 7.84615H14.7115C15.011 7.84615 15.2686 7.84615 15.4962 7.79254C15.8484 7.70837 16.1705 7.52832 16.4267 7.27235C16.6829 7.01638 16.8632 6.69448 16.9477 6.34231C17 6.11477 17 5.85846 17 5.55769V2.28846C17 1.989 17 1.73138 16.9464 1.50385C16.8622 1.1516 16.6822 0.829535 16.4262 0.573332C16.1702 0.31713 15.8483 0.136795 15.4962 0.0523076C15.2686 -4.87153e-08 15.0123 0 14.7115 0H11.5077ZM10.9624 1.326C11.0186 1.31292 11.1062 1.30769 11.5077 1.30769H14.6462C15.0489 1.30769 15.1352 1.31162 15.1915 1.326C15.3089 1.35409 15.4163 1.41417 15.5017 1.49958C15.5871 1.58498 15.6472 1.69238 15.6753 1.80985C15.6884 1.86477 15.6923 1.95108 15.6923 2.35385V5.49231C15.6923 5.89508 15.6871 5.98138 15.674 6.03762C15.6459 6.15509 15.5858 6.26248 15.5004 6.34788C15.415 6.43329 15.3076 6.49337 15.1902 6.52146C15.1352 6.53454 15.0489 6.53846 14.6462 6.53846H11.5077C11.1049 6.53846 11.0186 6.53454 10.9624 6.52015C10.8449 6.49206 10.7375 6.43198 10.6521 6.34658C10.5667 6.26117 10.5066 6.15378 10.4785 6.03631C10.4668 5.98269 10.4615 5.89638 10.4615 5.49231V2.35385C10.4615 1.95108 10.4655 1.86477 10.4798 1.80854C10.5079 1.69107 10.568 1.58368 10.6534 1.49827C10.7388 1.41286 10.8462 1.35278 10.9637 1.32469L10.9624 1.326ZM2.28846 9.15385H5.55769C5.85715 9.15385 6.11477 9.15385 6.34231 9.20746C6.69455 9.29163 7.01662 9.47168 7.27282 9.72765C7.52902 9.98362 7.70936 10.3055 7.79385 10.6577C7.84615 10.8852 7.84615 11.1415 7.84615 11.4423V14.7115C7.84615 15.011 7.84615 15.2686 7.79254 15.4962C7.70837 15.8484 7.52832 16.1705 7.27235 16.4267C7.01638 16.6829 6.69448 16.8632 6.34231 16.9477C6.11477 17 5.85846 17 5.55769 17H2.28846C1.989 17 1.73138 17 1.50385 16.9464C1.1516 16.8622 0.829535 16.6822 0.573332 16.4262C0.31713 16.1702 0.136795 15.8483 0.0523076 15.4962C-4.87153e-08 15.2686 0 15.0123 0 14.7115V11.4423C0 11.1428 9.74307e-09 10.8852 0.0536154 10.6577C0.137785 10.3054 0.31783 9.98338 0.573801 9.72718C0.829773 9.47098 1.15168 9.29064 1.50385 9.20615C1.73138 9.15385 1.98769 9.15385 2.28846 9.15385ZM2.35385 10.4615C1.95108 10.4615 1.86477 10.4655 1.80854 10.4798C1.69107 10.5079 1.58368 10.568 1.49827 10.6534C1.41286 10.7388 1.35278 10.8462 1.32469 10.9637C1.31292 11.0173 1.30769 11.1036 1.30769 11.5077V14.6462C1.30769 15.0489 1.31162 15.1352 1.326 15.1915C1.35409 15.3089 1.41417 15.4163 1.49958 15.5017C1.58498 15.5871 1.69238 15.6472 1.80985 15.6753C1.86477 15.6884 1.95108 15.6923 2.35385 15.6923H5.49231C5.89508 15.6923 5.98138 15.6871 6.03762 15.674C6.15509 15.6459 6.26248 15.5858 6.34788 15.5004C6.43329 15.415 6.49337 15.3076 6.52146 15.1902C6.53454 15.1352 6.53846 15.0489 6.53846 14.6462V11.5077C6.53846 11.1049 6.53454 11.0186 6.52015 10.9624C6.49206 10.8449 6.43198 10.7375 6.34658 10.6521C6.26117 10.5667 6.15378 10.5066 6.03631 10.4785C5.98269 10.4668 5.89638 10.4615 5.49231 10.4615H2.35385ZM11.5077 9.15385H11.4423C11.1428 9.15385 10.8852 9.15385 10.6577 9.20746C10.3054 9.29163 9.98338 9.47168 9.72718 9.72765C9.47098 9.98362 9.29064 10.3055 9.20615 10.6577C9.15385 10.8852 9.15385 11.1415 9.15385 11.4423V14.7115C9.15385 15.011 9.15385 15.2686 9.20746 15.4962C9.29163 15.8484 9.47168 16.1705 9.72765 16.4267C9.98362 16.6829 10.3055 16.8632 10.6577 16.9477C10.8852 17.0013 11.1428 17.0013 11.4423 17.0013H14.7115C15.011 17.0013 15.2686 17.0013 15.4962 16.9477C15.8482 16.8633 16.1699 16.6832 16.4259 16.4272C16.6819 16.1713 16.862 15.8495 16.9464 15.4975C17 15.2699 17 15.0123 17 14.7128V11.4423C17 11.1428 17 10.8852 16.9464 10.6577C16.8622 10.3054 16.6822 9.98338 16.4262 9.72718C16.1702 9.47098 15.8483 9.29064 15.4962 9.20615C15.2686 9.15385 15.0123 9.15385 14.7115 9.15385H11.5077ZM10.9624 10.4798C11.0186 10.4668 11.1062 10.4615 11.5077 10.4615H14.6462C15.0489 10.4615 15.1352 10.4655 15.1915 10.4798C15.3089 10.5079 15.4163 10.568 15.5017 10.6534C15.5871 10.7388 15.6472 10.8462 15.6753 10.9637C15.6884 11.0186 15.6923 11.1049 15.6923 11.5077V14.6462C15.6923 15.0489 15.6871 15.1352 15.674 15.1915C15.6459 15.3089 15.5858 15.4163 15.5004 15.5017C15.415 15.5871 15.3076 15.6472 15.1902 15.6753C15.1352 15.6884 15.0489 15.6923 14.6462 15.6923H11.5077C11.1049 15.6923 11.0186 15.6871 10.9624 15.674C10.8449 15.6459 10.7375 15.5858 10.6521 15.5004C10.5667 15.415 10.5066 15.3076 10.4785 15.1902C10.4668 15.1365 10.4615 15.0502 10.4615 14.6462V11.5077C10.4615 11.1049 10.4655 11.0186 10.4798 10.9624C10.5079 10.8449 10.568 10.7375 10.6534 10.6521C10.7388 10.5667 10.8462 10.5066 10.9637 10.4785L10.9624 10.4798Z"
            fill="url(#paint0_linear_118:468)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118:468"
              x1="-4.53483"
              y1="-3.02566"
              x2="17.6557"
              y2="-3.58496"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#005792" stop-opacity="0.35" />
              <stop stop-color="#005792" stop-opacity="0.4" />
              <stop offset="0.0001" stop-color="#C4C4CA" />
              <stop offset="1" stop-color="#C4C4CA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      text: "Businesses",
      image: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 4H14V2L12 0H8L6 2V4H2C0.9 4 0 4.9 0 6V11C0 11.75 0.4 12.38 1 12.73V16C1 17.11 1.89 18 3 18H17C18.11 18 19 17.11 19 16V12.72C19.59 12.37 20 11.73 20 11V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM2 6H18V11H13V8H7V11H2V6ZM11 12H9V10H11V12ZM17 16H3V13H7V14H13V13H17V16Z"
            fill="#C4C4CA"
          />
        </svg>
      ),
    },
    {
      text: "Accounts",
      image: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.125 11.995C7.7725 12.4212 7.55739 12.9441 7.508 13.495H2.248C2.14964 13.4951 2.05227 13.5146 1.96145 13.5524C1.87062 13.5902 1.78813 13.6454 1.71867 13.7151C1.64921 13.7847 1.59415 13.8674 1.55663 13.9583C1.51911 14.0492 1.49987 14.1466 1.5 14.245V14.822C1.5 15.358 1.691 15.876 2.039 16.283C3.216 17.662 5.023 18.403 7.508 18.488C7.557 19.058 7.781 19.578 8.125 19.996H7.996C4.851 19.996 2.465 19.091 0.898 17.257C0.318385 16.5781 -3.07437e-05 15.7147 2.22639e-09 14.822V14.244C2.22639e-09 13.054 0.925 12.08 2.095 12.001L2.249 11.995H8.125ZM12.746 9.495H15.746C16.394 9.495 16.926 9.987 16.99 10.618L16.997 10.745L16.996 11.995H18.246C19.213 11.995 19.996 12.779 19.996 13.745V18.245C19.996 18.7091 19.8116 19.1542 19.4834 19.4824C19.1552 19.8106 18.7101 19.995 18.246 19.995H10.246C9.78187 19.995 9.33675 19.8106 9.00856 19.4824C8.68037 19.1542 8.496 18.7091 8.496 18.245V13.745C8.496 12.779 9.28 11.995 10.246 11.995H11.496V10.745C11.496 10.098 11.988 9.565 12.619 9.502L12.746 9.495H15.746H12.746ZM18.246 13.495H10.246C10.1797 13.495 10.1161 13.5213 10.0692 13.5682C10.0223 13.6151 9.996 13.6787 9.996 13.745V18.245C9.996 18.383 10.108 18.495 10.246 18.495H18.246C18.3123 18.495 18.3759 18.4687 18.4228 18.4218C18.4697 18.3749 18.496 18.3113 18.496 18.245V13.745C18.496 13.6787 18.4697 13.6151 18.4228 13.5682C18.3759 13.5213 18.3123 13.495 18.246 13.495ZM15.496 10.995H12.996V11.995H15.496V10.995ZM7.997 0C9.32308 0 10.5949 0.526784 11.5325 1.46447C12.4702 2.40215 12.997 3.67392 12.997 5C12.997 6.32608 12.4702 7.59785 11.5325 8.53553C10.5949 9.47322 9.32308 10 7.997 10C6.67092 10 5.39915 9.47322 4.46147 8.53553C3.52378 7.59785 2.997 6.32608 2.997 5C2.997 3.67392 3.52378 2.40215 4.46147 1.46447C5.39915 0.526784 6.67092 0 7.997 0ZM7.997 1.5C7.06874 1.5 6.1785 1.86875 5.52213 2.52513C4.86575 3.1815 4.497 4.07174 4.497 5C4.497 5.92826 4.86575 6.8185 5.52213 7.47487C6.1785 8.13125 7.06874 8.5 7.997 8.5C8.92526 8.5 9.8155 8.13125 10.4719 7.47487C11.1283 6.8185 11.497 5.92826 11.497 5C11.497 4.07174 11.1283 3.1815 10.4719 2.52513C9.8155 1.86875 8.92526 1.5 7.997 1.5Z"
            fill="#C4C4CA"
          />
        </svg>
      ),
    },
    {
      text: "Introduction",
      image: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8559 15.7133C17.5377 15.7148 17.224 15.788 16.9381 15.9276L13.8669 12.8563H11.4277V14.2848H13.2748L15.9282 16.9382C15.7885 17.2241 15.715 17.5378 15.7132 17.856C15.7132 18.2798 15.8388 18.6941 16.0743 19.0465C16.3097 19.3988 16.6444 19.6735 17.0359 19.8356C17.4275 19.9978 17.8583 20.0403 18.2739 19.9576C18.6896 19.8749 19.0714 19.6708 19.371 19.3712C19.6707 19.0715 19.8748 18.6897 19.9575 18.2741C20.0401 17.8584 19.9977 17.4276 19.8355 17.036C19.6733 16.6445 19.3987 16.3099 19.0463 16.0744C18.694 15.839 18.2797 15.7133 17.8559 15.7133ZM17.8559 18.5703C17.7146 18.5703 17.5765 18.5284 17.4591 18.4499C17.3416 18.3714 17.2501 18.2599 17.196 18.1294C17.142 17.9988 17.1278 17.8552 17.1554 17.7167C17.1829 17.5781 17.251 17.4509 17.3509 17.351C17.4507 17.2511 17.578 17.1831 17.7166 17.1555C17.8551 17.128 17.9987 17.1421 18.1292 17.1962C18.2597 17.2502 18.3713 17.3418 18.4498 17.4592C18.5283 17.5767 18.5701 17.7148 18.5701 17.856C18.5701 18.0455 18.4949 18.2271 18.3609 18.3611C18.227 18.495 18.0453 18.5703 17.8559 18.5703Z"
            fill="#C4C4CA"
          />
          <path
            d="M17.8559 7.85666C17.4142 7.85797 16.9837 7.99599 16.6236 8.25176C16.2635 8.50754 15.9913 8.86852 15.8446 9.28514H11.4277V10.7136H15.8446C15.9762 11.083 16.2068 11.4091 16.5111 11.6563C16.8155 11.9035 17.182 12.0623 17.5705 12.1153C17.9591 12.1683 18.3547 12.1135 18.7142 11.9569C19.0736 11.8003 19.3832 11.5479 19.6089 11.2272C19.8346 10.9066 19.9679 10.5301 19.9941 10.1388C20.0203 9.74759 19.9385 9.35666 19.7575 9.00878C19.5766 8.66089 19.3035 8.36943 18.9682 8.16624C18.6328 7.96306 18.248 7.85596 17.8559 7.85666ZM17.8559 10.7136C17.7146 10.7136 17.5765 10.6717 17.4591 10.5933C17.3416 10.5148 17.2501 10.4032 17.196 10.2727C17.142 10.1422 17.1278 9.99859 17.1554 9.86004C17.1829 9.7215 17.251 9.59423 17.3509 9.49434C17.4507 9.39445 17.578 9.32643 17.7166 9.29887C17.8551 9.27131 17.9987 9.28545 18.1292 9.33951C18.2597 9.39357 18.3713 9.48512 18.4498 9.60257C18.5283 9.72003 18.5701 9.85812 18.5701 9.99939C18.5701 10.1888 18.4949 10.3705 18.3609 10.5044C18.227 10.6384 18.0453 10.7136 17.8559 10.7136Z"
            fill="#C4C4CA"
          />
          <path
            d="M17.8559 8.98362e-07C17.2878 0.000568159 16.7431 0.226501 16.3414 0.628217C15.9397 1.02993 15.7137 1.57461 15.7132 2.14272C15.7156 2.48488 15.8009 2.82136 15.9617 3.12338L13.2819 5.71393H11.4277V7.14241H13.859L17.0017 4.10546C17.2936 4.23276 17.6102 4.29336 17.9286 4.28285C18.2469 4.27234 18.5588 4.19098 18.8417 4.0447C19.1246 3.89842 19.3713 3.69089 19.5639 3.43723C19.7565 3.18357 19.8901 2.89016 19.955 2.57836C20.0198 2.26655 20.0144 1.94421 19.939 1.63479C19.8635 1.32536 19.7201 1.03665 19.519 0.789667C19.3179 0.542684 19.0643 0.343646 18.7766 0.207043C18.4889 0.0704395 18.1744 -0.000290764 17.8559 8.98362e-07ZM17.8559 2.85697C17.7146 2.85697 17.5765 2.81508 17.4591 2.73659C17.3416 2.65811 17.2501 2.54656 17.196 2.41605C17.142 2.28554 17.1278 2.14193 17.1554 2.00338C17.1829 1.86483 17.251 1.73757 17.3509 1.63768C17.4507 1.53779 17.578 1.46977 17.7166 1.44221C17.8551 1.41465 17.9987 1.42879 18.1292 1.48285C18.2597 1.53691 18.3713 1.62846 18.4498 1.74591C18.5283 1.86337 18.5701 2.00146 18.5701 2.14272C18.5701 2.33215 18.4949 2.51382 18.3609 2.64777C18.227 2.78172 18.0453 2.85697 17.8559 2.85697Z"
            fill="#C4C4CA"
          />
          <path
            d="M11.4279 2.85696H12.8563V1.42848H11.4279C11.0208 1.42984 10.6188 1.51868 10.2491 1.68899C9.87945 1.8593 9.55069 2.10708 9.28514 2.41556C9.01958 2.10708 8.69082 1.8593 8.32112 1.68899C7.95143 1.51868 7.54944 1.42984 7.14241 1.42848H6.42817C4.72389 1.43037 3.08996 2.10823 1.88486 3.31334C0.679749 4.51844 0.00189049 6.15238 0 7.85665V12.1421C0.00189049 13.8464 0.679749 15.4803 1.88486 16.6854C3.08996 17.8905 4.72389 18.5684 6.42817 18.5703H7.14241C7.54944 18.5689 7.95143 18.4801 8.32112 18.3098C8.69082 18.1395 9.01958 17.8917 9.28514 17.5832C9.55069 17.8917 9.87945 18.1395 10.2491 18.3098C10.6188 18.4801 11.0208 18.5689 11.4279 18.5703H12.8563V17.1418H11.4279C11.0491 17.1414 10.686 16.9908 10.4182 16.723C10.1504 16.4552 9.99975 16.092 9.99938 15.7133V4.28545C9.99975 3.90671 10.1504 3.54359 10.4182 3.27578C10.686 3.00796 11.0491 2.85734 11.4279 2.85696ZM7.14241 17.1418H6.42817C5.22713 17.1396 4.06694 16.7055 3.1595 15.9187C2.25206 15.1319 1.65793 14.045 1.48562 12.8563H2.85696V11.4279H1.42848V8.57089H3.57121C4.13932 8.57033 4.684 8.34439 5.08571 7.94268C5.48743 7.54096 5.71336 6.99628 5.71393 6.42817V4.99969H4.28545V6.42817C4.28545 6.6176 4.2102 6.79927 4.07625 6.93322C3.9423 7.06716 3.76063 7.14241 3.57121 7.14241H1.48562C1.65793 5.9538 2.25206 4.86683 3.1595 4.08003C4.06694 3.29323 5.22713 2.85911 6.42817 2.85696H7.14241C7.52115 2.85734 7.88427 3.00796 8.15208 3.27578C8.41989 3.54359 8.57052 3.90671 8.57089 4.28545V7.14241H7.14241V8.57089H8.57089V11.4279H7.14241C6.5743 11.4284 6.02962 11.6544 5.6279 12.0561C5.22619 12.4578 5.00026 13.0025 4.99969 13.5706V14.9991H6.42817V13.5706C6.42817 13.3812 6.50342 13.1995 6.63737 13.0655C6.77131 12.9316 6.95298 12.8563 7.14241 12.8563H8.57089V15.7133C8.57052 16.092 8.41989 16.4552 8.15208 16.723C7.88427 16.9908 7.52115 17.1414 7.14241 17.1418Z"
            fill="#C4C4CA"
          />
        </svg>
      ),
    },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isopen);
    setDoesOpen(false);
  };

  const handleUserIntOpen = () => {
    setDoesOpen(!doesOpen);
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 43px rgba(135, 135, 135, 0.1)",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <div
                style={{
                  width: 350,
                  background: "#F4F4F4",
                  borderRadius: 6,
                  padding: "0 10px",
                }}
                name="Businesses"
                id="Businesses"
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Avatar {...stringAvatar("Amazon")} />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#005792",
                        }}
                      >
                        Amazon
                      </p>
                    </Stack>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontSize: 14,
                          color: "#C4C4C4",
                          marginRight: 10,
                        }}
                      >
                        E-Commerce
                      </p>
                      <img alt="arrow" src={arrow} />
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Simplebutton COLOR="#fff" BG="#42CC23" text="UPGRADE" />
            <div
              style={{
                width: 42,
                height: 42,
                background: "#F4F4F4",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15px",
                cursor: "pointer",
              }}
            >
              <img onClick={toggleOpen} alt="jingle" src={jingle} />
            </div>
            <div
              onClick={handleUserIntOpen}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar alt="Remy Sharp" src={userInfo.image} />
              <div style={{ margin: "0 10px" }}>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#005792",
                    margin: 0,
                  }}
                >
                  {userInfo.name}
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "#005792",
                    margin: 0,
                  }}
                >
                  {userInfo.title}
                </p>
              </div>
              <img alt="arrow" src={arrow} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ width: "150px" }}>
            <img style={{ width: "100%" }} alt="logo" src={logo} />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div
          style={{
            background:
              "linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)",
            boxShadow: "0px 6px 7px rgba(31, 31, 31, 0.15)",
            borderRadius: 20,
            width: 200,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "50px 15px",
            cursor: "pointer",
          }}
        >
          <img alt="talk" src={talk} width="24px" height="24px" />
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 16,
              color: " #FFFFFF",
            }}
          >
            Create an AD
          </span>
        </div>
        <List>
          {navState.map((item, index) => (
            <NavLink to={`/${item.text.toLowerCase()}`}>
              <ListItem
                button
                key={index}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: 18,
                  color: "#C4C4CA",
                }}
              >
                <ListItemIcon>{item.image}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          ))}
          <TextGenerator />
        </List>

        <SimpleDialogDemo />
      </Drawer>
      <Main open={open}>
        {navState.map((el) => (
          <Route exact path={`/${el.text.toLowerCase()}`} component={el.text} />
        ))}
        <div
          style={{ padding: "100px", background: "#F7FBFE", height: "100vh" }}
        >
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.06)",
              borderRadius: 6,
              width: 350,
              height: 430,
              padding: 20,
              position: "absolute",
              zIndex: 100,
              top: 70,
              right: 0,
              display: isopen ? "block" : "none",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <img src={jingle} alt="jingle" />
              <span style={{ marginLeft: 15, color: "#04118A" }}>
                Notification
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "#575757",
                marginTop: 20,
              }}
            >
              EARLIER
            </p>
            <main>
              {incomingData.map((el) => (
                <div
                  style={{
                    border: " 1px solid #DDE1EB",
                    boxSizing: "border-box",
                    borderRadius: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                    padding: 10,
                  }}
                >
                  <Avatar alt="Remy Sharp" src={el.image} />
                  <p
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "0 5px",
                      color: "#1DAAFF",
                    }}
                  >
                    {el.text}
                  </p>
                  <img alt="selected" src={selected} />
                </div>
              ))}
            </main>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.06)",
              borderRadius: 6,
              width: 250,
              height: 200,
              position: "absolute",
              top: 70,
              right: 0,
              padding: 20,
              display: doesOpen ? "block" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                borderBottom: "1px solid #DDE1EB",
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={() => history.push("/settings")}
            >
              <img src={settings} alt="settings" />
              <span style={{ color: "#575757", marginLeft: 10 }}>Settings</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                borderBottom: "1px solid #DDE1EB",
                paddingBottom: 10,
                margin: "20px 0",
                cursor: "pointer",
              }}
              onClick={() => history.push("/help")}
            >
              <img src={question} alt="question" />
              <span style={{ color: "#575757", marginLeft: 10 }}>
                Help Center
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                borderBottom: "1px solid #DDE1EB",
                paddingBottom: 10,
                cursor: "pointer",
              }}
              onClick={() => history.push("/login")}
            >
              <img src={out} alt="logout" />
              <span style={{ color: "#575757", marginLeft: 10 }}>Logout</span>
            </div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px 50px" }}>
            {children}
          </div>
        </div>
      </Main>
    </Box>
  );
}
