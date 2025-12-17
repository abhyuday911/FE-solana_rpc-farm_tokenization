import React from "react";
import { WalletMultiButton } from "../providers/solana-provider";
import { Button } from '../ui/button';

const NavBar = () => {
  return (
    <div className="flex fixed w-screen justify-between px-20 h-20 items-center backdrop-blur-sm">
      <div className="w-20"></div>
      <div className='grid grid-cols-2 gap-6 items-center w-md justify-end'>
        <Button className='h-12' variant={"secondary"}>SOALNA DEVNET</Button>
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default NavBar;
