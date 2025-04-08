import { Route, Routes } from "react-router-dom"
import { Home } from "../screens/home"
import { Generate } from "../screens/generate"
import { MyIdCard } from "../screens/mycard"

export const AppRoute=()=>{

    return <div>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/generate" element={<Generate/>}/>
      <Route path="/my-IdCard" element={<MyIdCard/>}/>
        </Routes>
    </div>
}