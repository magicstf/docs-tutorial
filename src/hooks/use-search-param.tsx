/*
 * @Author: sutengfei
 * @Date: 2024-12-25 11:42:22
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-25 11:46:09
 */
import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam(key: string) {
  return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({
      clearOnDefault: true,
    })
  );
}
