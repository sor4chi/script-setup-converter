import { parseVueSFC } from "./utils/parse";
import { getVueFilesFromDir } from "./utils/file";
import { convertTextToTypeScript } from "./utils/typescript";

const inputDir = process.argv[2];
const files = getVueFilesFromDir(inputDir);

files.forEach((file) => {
  const result = parseVueSFC(file);
  if (!result.script) return;
  const script = convertTextToTypeScript(result.script.content);
});
