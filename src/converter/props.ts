import {
  ObjectLiteralExpression,
  PropertyAssignment,
  SourceFile,
} from "typescript";

interface PropItem {
  type: string;
  required?: boolean;
  default?: string;
}

const convertProps = (propsObj: ObjectLiteralExpression) => {};

const extractPropItem = (
  propObj: ObjectLiteralExpression,
  convertingSourceFile: SourceFile
) => {
  const propItem: PropItem = {
    type: "",
  };
  propObj.properties.forEach((prop) => {
    if (!prop.name) return;
    const propName = prop.name.getText(convertingSourceFile);
    if (propName === "type") propItem.type = prop.getText(convertingSourceFile);
    if (propName === "required")
      propItem.required = prop.getText(convertingSourceFile) === "true";
    if (propName === "default")
      propItem.default = prop.getText(convertingSourceFile);
  });

  return propItem;
};
