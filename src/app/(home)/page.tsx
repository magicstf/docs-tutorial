/*
 * @Author: sutengfei
 * @Date: 2024-12-10 09:34:29
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-24 11:08:06
 */
import Link from "next/link";

import { Navbar } from "./navbar";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        Click
        <Link href="/documents/123">
          <span className="underline text-blue-400">&nbsp;here</span> to go to
          document Id
        </Link>
      </div>
    </div>
  );
};

export default Home;
