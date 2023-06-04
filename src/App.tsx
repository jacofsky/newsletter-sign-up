import { useState } from "react";
import { SingUp, Success } from "./components";


function App() {

  const [validEmail, setValidEmail] = useState<string | null>(null)

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      { validEmail ?  <Success setEmail={setValidEmail} email={validEmail}/> : <SingUp suscriber={setValidEmail}/> }
    </div>
  )
}

export default App
