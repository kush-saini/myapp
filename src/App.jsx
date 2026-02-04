import { useState } from "react";
import Header from "./Header.jsx";
import "./App.css";
import Carousell from "./Carousell.jsx";
import Cards from "./Cards.jsx";
import Services from "./Services.jsx";
import AboutUs from "./AboutUs.jsx";
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Inputs from "./Inputs.jsx";
import InpChk from "./InpChk.jsx";
import InRadio from "./InRadio.jsx";
import SimplVal from "./simplVal.jsx";
import Search from "./Search.jsx";
import MyForm from "./MyForm.jsx";
import MyForm2 from "./MyForm2.jsx";
import MyForm3 from "./MyForm3.jsx";
import MyFormSimple from "./MyFormSimple.jsx";
import AdvanceFormVal from "./AdvanceFormVal.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Carousell />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path="/valone"
          element={
            <Layout>
              <SimplVal />
            </Layout>
          }
        />
        <Route
          path="/inputs"
          element={
            <Layout>
              <Inputs />
            </Layout>
          }
        />
        <Route
          path="/radio"
          element={
            <Layout>
              <InRadio />
            </Layout>
          }
        />
        <Route
          path="/check"
          element={
            <Layout>
              <InpChk />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Cards />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout>
              <MyForm3 />
            </Layout>
          }
        />
        <Route
          path="/myform"
          element={
            <Layout>
              <MyFormSimple />
            </Layout>
          }
        />
        <Route
          path="/afv"
          element={
            <Layout>
              <AdvanceFormVal />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* 
      <Carousell/>
      <Cards/>
      <Services/>
      <AboutUs/>
      <Team/>
       */}
    </>
  );
}

export default App;
