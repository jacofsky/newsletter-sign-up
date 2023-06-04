import { ReactComponent as IconSuccess } from "../assets/images/IconSuccess.svg";

interface IProps {
  email: string | null,
  setEmail: React.Dispatch<React.SetStateAction<string | null>>
}

export const Success = ({ email, setEmail }:IProps) => {
  return (
    <div className="bg-white flex flex-col justify-center md:w-min md:h-min md:rounded-2xl w-full h-full py-10 md:px-14 px-6 gap-4">
      <IconSuccess className="md:mb-11 mb-6 mt-32 md:mt-0"/>
      <h1 className="md:text-6xl text-4xl text-dark-slate-grey font-bold md:mb-9 md:pr-16">Thanks for subscribing!</h1>
      <p className="mb-11">A confirmation email has been sent to <span className="text-dark-slate-grey font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>

      <button onClick={() => setEmail(null)} className="text-center mt-auto w-full bg-dark-slate-grey text-white py-4 rounded-lg hover:bg-gradient-to-r from-pink to-orange">Dismiss message</button>
    </div>
  )
}

