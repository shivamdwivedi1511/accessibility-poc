import React from "react";
import Header from "../header/Header";
import Controller from "../voiceController/Controller";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Controller />
    </>
  );
}
