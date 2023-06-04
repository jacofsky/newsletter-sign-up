import { useState } from "react"
import { isValidEmail } from "../lib/utils"

interface IProps {
  suscriber: React.Dispatch<React.SetStateAction<string | null>>
}


const Form = ({suscriber}:IProps) => {

  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidEmail(email)) {
      suscriber(email)  
      setEmail("")
    } else {
      setError(true)
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError(false)
  }

  return (
    <form className="flex flex-col gap-6 px-6 md:px-0 mt-auto md:mt-0" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <label className="text-dark-slate-grey font-bold text-xs">Email address</label>
            { error && <span className="text-primary font-bold text-xs">Invalid email</span> }
          </div>
          <input 
            className={`p-4 rounded-lg border-grey border-2 outline-none ${error && "border-primary bg-primary/10 text-primary"}`}
            onChange={(e) => handleChange(e)} 
            value={email}
            type="text" 
            placeholder="email@company.com" 
          />
        </div>

        <button className="text-center w-full bg-dark-slate-grey text-white py-4 rounded-lg hover:bg-gradient-to-r from-pink to-orange">Suscribe to monthly newsletter</button>
    </form>
  )
}

export default Form