import "./componants/styles/Slider.css";
import "./componants/styles/App.css";
import "./componants/styles/Swip.css";
import "./componants/styles/contact.css";
import About from "./componants/bagcon/about";
import Home from "./home";
import Contact from "./componants/bagcon/contact";
import Brodacts from "./componants/bagcon/brodacts";
import Footer from "./componants/footer";
import Nav from "./componants/nav";
import Shoes1 from './img/pngwing.com 11.png';
import Shoes2 from './img/pngwing.com 12.png';
import Shoes3 from './img/pngwing.com 13.png';
import Shoes4 from './img/pngwing.com 14.png';
import Shoes5 from './img/pngwing.com 15.png';
import Shoes6 from './img/pngwing.com 10.png';
import Shoes7 from './img/pngwing.com 17.png';
import Shoes8 from './img/pngwing.com 18.png';
import Shoes9 from './img/pngwing.com 9.png';
import Shoes10 from './img/pngwing.com 8.png';
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const mainData =[{id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes1 ,pris: 200 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes2 ,pris: 210 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes3 ,pris: 220 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes4 ,pris: 260 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'41' , imgurl: Shoes5 ,pris: 280 },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes6 ,pris: 300 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes7 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes8 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes9 ,pris: 250 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'41' , imgurl: Shoes10,pris: 270  },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes1 ,pris: 200 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'44' , imgurl: Shoes2 ,pris: 210 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes3 ,pris: 220 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes4 ,pris: 260 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'41' , imgurl: Shoes5 ,pris: 280 },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes6 ,pris: 300 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes7 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes8 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes9 ,pris: 250 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'41' , imgurl: Shoes10,pris: 270  },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes1 ,pris: 200 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes2 ,pris: 210 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes3 ,pris: 220 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes4 ,pris: 260 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'41' , imgurl: Shoes5 ,pris: 280 },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes6 ,pris: 300 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes7 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes8 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes9 ,pris: 250 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'41' , imgurl: Shoes10,pris: 270  },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes1 ,pris: 200 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'44' , imgurl: Shoes2 ,pris: 210 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes3 ,pris: 220 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes4 ,pris: 260 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'41' , imgurl: Shoes5 ,pris: 280 },
  {id:`${Math.random()}` ,num:0 ,prand:'Nike',size:'45' , imgurl: Shoes6 ,pris: 300 },
  {id:`${Math.random()}` ,num:0 ,prand:'Adidas',size:'44' , imgurl: Shoes7 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Poma',size:'43' , imgurl: Shoes8 ,pris: 180 },
  {id:`${Math.random()}` ,num:0 ,prand:'Fashon',size:'42' , imgurl: Shoes9 ,pris: 250 },
  {id:`${Math.random()}` ,num:0 ,prand:'Active',size:'41' , imgurl: Shoes10,pris: 270  }]
  const [count, setCount] = useState(0);
  const [added,setAdded]= useState([]);
 const [state,setState]=useState(mainData);
//  const [num,setNum] = useState(mainData)

  const addone = (p) => {
    setCount(count + 1);
 
    if (added.find((prodect)=>{return prodect.id==p.id})==undefined) {
      p.num=p.num+1
         setAdded([...added,p]);
         
    }
    else{
   setState([...state,state.filter((prodect)=>{return prodect.id==p.id})[0].num+=1])
    }
    // added.find((prodect)=>{return prodect.id==p.id})
  };
  // const ifTheBrodectChosed =(p)=>{
  //   if (condition) {
      
  //   }
  // }
  const calcnum = ()=>{
    let totalNum = added.map((pr)=>{return pr.num*1});
    let totalNumSum = totalNum.reduce((total,eachnum)=>{return total+eachnum},0)
    setCount(totalNumSum);
  }
  const handelDelete=(p)=>{
    // p.num=p.num-1
      setAdded([...added.filter((prodect)=>{return prodect.id!==p.id})])
      setState([...state,state.filter((prodect)=>{return prodect.id==p.id})[0].num=0]) 
      calcnum();
  }
  const TotalPris = added.map((p)=>{
    return p.pris*p.num
  });
const handelCatagory = (prand)=>{
if (prand==='all') {
  setState(mainData)
}else{
  setState(mainData.filter((prodect)=>{
    return prodect.prand===prand
    }))
}
}

  const sum = TotalPris.reduce((total, eachPrise) => total + eachPrise, 0);

  return (
    <>
    
      <Nav cardNo={count} handelCatagory={handelCatagory} />
      <Routes>
        <Route path="/Voice_Stroe/" element={<Navigate replace to="/home" />} />
        <Route path="/Voice_Stroe/" element={<Home prodacts={state} handelcount={addone}/>}></Route>
        <Route path="/" element={<Home prodacts={state} handelcount={addone}/>}></Route>
        <Route path="/home" element={<Home prodacts={state} handelcount={addone}/>}></Route>
        <Route path="/componants/bagcon/contact" element={<About />}></Route>
        <Route path="/componants/bagcon/about" element={<Contact />}></Route>
        <Route path="/componants/bagcon/brodacts" element={<Brodacts prodectsAdded={added} handelDelete={handelDelete} Sum={sum} />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
