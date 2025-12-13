import React from "react";
import { WalletMultiButton } from "../providers/solana-provider";

const NavBar = () => {
  return (
    <div className="flex fixed w-screen justify-between px-20 h-20 items-center backdrop-blur-sm">
      <div className="w-20"></div>
      <WalletMultiButton />
    </div>
  );
};

export default NavBar;
