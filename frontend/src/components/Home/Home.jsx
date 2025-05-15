import { useName } from "@/context/UserContext";
import React from "react";

const Home = () => {
  const { name, token } = useName();

  return (
    <div className="mb-4">
      <h1 className="text-4xl py-15 px-5 m-auto text-center text-slate-800 font-bold">
        Helo, {name ? name : "Guest"}
      </h1>
      {/* <p className="text-center font-bold , text-slate-500">
        Token is: {token ? token : "Not Found Token"}
      </p> */}
    </div>
  );
};

export default Home;
