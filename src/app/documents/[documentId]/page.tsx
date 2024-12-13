/*
 * @Author: sutengfei
 * @Date: 2024-12-10 15:03:21
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-11 15:39:51
 */
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
