import { useState } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Slider from "../Components/Slider";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <Slider />
      <Main />
    </div>
  );
}
