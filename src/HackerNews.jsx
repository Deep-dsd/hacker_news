import React from "react";
import Stories from "./Stories";
import SearchForm from "./SearchForm";
import Buttons from "./Buttons";
import { AppProvider } from "./context";
import "./style.css";
const HackerNews = () => {
  return (
    <>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
    </>
  );
};

export default HackerNews;
