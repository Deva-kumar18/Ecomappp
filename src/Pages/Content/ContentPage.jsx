import React from "react";
import { Outlet } from "react-router-dom";

const ContentPage = () => {
  return (
    <div className="content-container">
      <Outlet />
    </div>
  );
};

export default ContentPage;
