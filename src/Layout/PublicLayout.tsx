import { useState } from "react";
import Header from "../components/Header/Header";
import BlogPost from "../components/BlogPost/BlogPost";

export default function PublicLayout() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <>
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <BlogPost openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
}
