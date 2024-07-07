import { Button } from "./ui/button";

export default function Navbar() {
  return <div className="flex justify-between items-center w-full border-b p-3 px-20">
      <img
        className="w-[80px] h-[80x] rounded-full"
        src="./logo-white.png"
        alt=""
      />
      <Button>Home</Button>

  </div>;
}
