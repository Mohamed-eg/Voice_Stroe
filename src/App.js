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
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import mainData from "./data";
import ProdactDetales from "./componants/bagcon/prodactDetales";
function App() {
  const [chosen, setchosen] = useState({});
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState([]);
  const [AllData, setState] = useState(mainData);
  const handeDecreasOne = (p) => {
    setCount(count - 1);
    if (
      added.find((prodect) => {
        return prodect.id === p.id;
      }) === undefined
    ) {
      p.num = p.num - 1;
      setAdded([...added, p]);
    } else {
      p.num = p.num - 1;
    }
  };

  const addone = (p) => {
    setCount(count + 1);

    if (
      added.find((prodect) => {
        return prodect.id === p.id;
      }) === undefined
    ) {
      p.num = p.num + 1;
      setAdded([...added, p]);
    } else {
      p.num = p.num + 1;
    }
  };
  const calcnum = () => {
    let totalNum = added.map((pr) => {
      return pr.num * 1;
    });
    let totalNumSum = totalNum.reduce((total, eachnum) => {
      return total + eachnum;
    }, 0);
    setCount(totalNumSum);
  };
  const handelDelete = (p) => {
    setAdded([
      ...added.filter((prodect) => {
        return prodect.id !== p.id;
      }),
    ]);
    setState([
      ...AllData,
      (AllData.filter((prodect) => {
        return prodect.id === p.id;
      })[0].num = 0),
    ]);
    calcnum();
  };
  const TotalPris = added.map((p) => {
    return p.pris * p.num;
  });
  const handelCatagory = (prand) => {
    if (prand === "all") {
      setState(mainData);
    } else {
      setState(
        mainData.filter((prodect) => {
          return prodect.prand === prand;
        })
      );
    }
  };

  const sum = TotalPris.reduce((total, eachPrise) => total + eachPrise, 0);
  const choseOne = (prodact) => {
    setchosen(prodact);
    // setchosen(
    //   AllData.find((p) => {
    //     return p.id === prodact.id;
    //   })
    // );
  };

  return (
    <>
      <Nav cardNo={count} handelCatagory={handelCatagory} />
      <Routes>
        {/* <Route path="/Voice_Stroe/" element={<Navigate replace to="/home" />} /> */}
        <Route
          path="/Voice_Stroe/"
          element={<Home prodacts={AllData} handelcount={addone} />}></Route>
        <Route
          path="/"
          element={<Home prodacts={AllData} handelcount={addone} />}></Route>
        <Route
          path="/home"
          element={<Home prodacts={AllData} handelcount={addone} />}></Route>
        <Route path="/componants/bagcon/contact" element={<About />}></Route>
        <Route path="/componants/bagcon/about" element={<Contact />}></Route>
        <Route
          path="/componants/bagcon/ProdactDetales"
          element={
            <ProdactDetales prodacts={chosen} choseOne={choseOne} />
          }></Route>
        <Route
          path="/componants/bagcon/brodacts"
          element={
            <Brodacts
              prodectsAdded={added}
              handelDelete={handelDelete}
              handeAddOne={addone}
              handeDecreasOne={handeDecreasOne}
              Sum={sum}
            />
          }></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
