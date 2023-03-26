import React from "react";
import Thanos from "../image/thanos.png";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row p-2 justify-center items-center">
      <p className="font-bold text-5xl">Page Not Found!</p>
      <img src={Thanos} alt="Thanos" />
    </div>
  );
};
export default ErrorPage;
