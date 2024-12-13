/*
 * @Author: sutengfei
 * @Date: 2024-12-11 16:07:58
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-11 16:12:39
 */
import { create } from "zustand";
import { type Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
