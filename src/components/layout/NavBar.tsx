import React from "react";
import { WalletMultiButton } from "../providers/solana-provider";

const NavBar = () => {
  return (
    <div className='flex justify-between px-20 py-8 backdrop-blur-2xl'>
      <div className="w-20"></div>
      <WalletMultiButton />
    </div>
  );
};

export default NavBar;
