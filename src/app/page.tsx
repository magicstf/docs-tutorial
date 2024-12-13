/*
 * @Author: sutengfei
 * @Date: 2024-12-10 09:34:29
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-10 16:44:23
 */
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-200">
      Click
      <Link href="/documents/123">
        <span className="underline text-blue-400">&nbsp;here</span> to go to
        document Id
      </Link>
    </div>
  );
};

export default Home;
