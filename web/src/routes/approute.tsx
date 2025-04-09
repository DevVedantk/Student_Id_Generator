import { Route, Routes } from "react-router-dom"
import { Home } from "../screens/home"
import { Generate } from "../screens/generate"
import { MyIdCard } from "../screens/mycard"
import { IdGenerated } from "../screens/IdGenerated"
import { Design1 } from "../components/design1"
import { Design2 } from "../components/design2"

export const AppRoute=()=>{

    return <div>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/generate" element={<Generate/>}/>
      <Route path="/my-IdCard" element={<MyIdCard/>}/>
      <Route path="/IdCard-generated" element={<IdGenerated/>}/>
      <Route path="/design1" element={<Design1/>}/>
      <Route path="/design2" element={<Design2/>}/>
        </Routes>
    </div>
}