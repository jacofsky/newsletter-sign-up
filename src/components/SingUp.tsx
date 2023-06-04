import Form from "./Form"
import { ReactComponent as SingUpD } from "../assets/images/SignUpDesktop.svg";
import { ReactComponent as SingUpM } from "../assets/images/SignUpMobile.svg";

import { ReactComponent as IconList } from "../assets/images/IconList.svg";
import { useEffect, useState } from "react";

interface IProps {
  suscriber: React.Dispatch<React.SetStateAction<string | null>>
}

export const SingUp = ({ suscriber }:IProps) => {

  const getIsMobile = () => window.innerWidth <= 768;

  const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
      const onResize = () => {
        setIsMobile(getIsMobile());
      }

      window.addEventListener("resize", onResize);
      
      return () => {
        window.removeEventListener("resize", onResize);
      }
    }, []);
      
  

  return (
      <div className="bg-white flex flex-col md:flex-row md:justify-center md:w-min md:h-min w-full h-full md:rounded-2xl md:p-4 gap-4">
        {
          isMobile && <SingUpM className="w-full h-auto"/>
        }
        <div className="flex flex-col justify-center md:w-max md:mx-10">
          <h1 className="w-max md:text-6xl text-4xl text-dark-slate-grey font-bold md:mb-8 px-6 md:px-0">Stay updated!</h1>
          <p className="w-4/5 font-normal mb-4 px-6 md:px-0">Join 60,000+ product manager reciving monthly updates on:</p>

          <ul className="md:w-max flex flex-col gap-4 mb-11 px-6 md:px-0">
            <li className="flex flex-row gap-2 md:w-max">
              <IconList/> <p>Product discovery and building what matters</p>
            </li>
            <li className="flex flex-row gap-2 md:w-max">
              <IconList/> <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex flex-row gap-2 md:w-max">
              <IconList/> <p>And much more!</p>
            </li>
          </ul>

          <Form suscriber={suscriber} />
        </div>
        {
          !isMobile &&  <SingUpD className="h-min w-min"/>
        }
       
      </div>
  )
}

