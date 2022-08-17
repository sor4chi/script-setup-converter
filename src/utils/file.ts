import { readdirSync } from "fs";

export const getVueFilesFromDir = (dirPath: string): string[] => {
  const files = readdirSync(dirPath);
  return files.filter((file) => file.endsWith(".vue"));
};
