import { format } from "prettier";

export const formatScript = (script: string) => {
  return format(script);
};
