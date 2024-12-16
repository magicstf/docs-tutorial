/*
 * @Author: sutengfei
 * @Date: 2024-12-16 14:27:48
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-16 14:31:19
 */
import { BsCloudCheck } from "react-icons/bs";
export const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck />
    </div>
  );
};
