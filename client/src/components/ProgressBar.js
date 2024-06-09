import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { MdComputer } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io";
import 'react-circular-progressbar/dist/styles.css';
import { DiMongodb } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";

export const ProgressBar = ({percentage,Icon}) => {

  const Icons={
    computer:MdComputer,
    backEnd: CiServer,
    js:IoLogoJavascript,
    mongodb:DiMongodb,
    azure: SiMicrosoftazure,
    css: IoLogoCss3,
    html: FaHtml5,
  }
  const SelectedIcon=Icons[Icon]
  return (

<CircularProgressbarWithChildren value={percentage}>
  <SelectedIcon style={{color:"purple",fontSize:"40px"}}/>
</CircularProgressbarWithChildren>
  )
}
