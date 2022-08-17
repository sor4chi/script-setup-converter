import { parse } from "@vue/compiler-sfc";

export const parseVueSFC = (source: string) => {
  const { descriptor: sfc, errors: ParseErrors } = parse(source);

  if (ParseErrors.length) throw new Error(ParseErrors.join("\n"));

  return {
    template: sfc.template,
    script: sfc.script,
    styles: sfc.styles,
  };
};
