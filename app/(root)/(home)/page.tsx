import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <h1 className="h1-bold">this is Benjamin</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
