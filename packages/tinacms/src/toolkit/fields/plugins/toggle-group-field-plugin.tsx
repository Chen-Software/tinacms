import { ToggleGroup } from "../components";
import { wrapFieldsWithMeta } from "./wrap-field-with-meta";

export const ToggleGroupField = wrapFieldsWithMeta(ToggleGroup);

export const ToggleGroupFieldPlugin = {
  name: "toggle-group",
  Component: ToggleGroupField,
  validate(value: any, values: unknown, meta: any, field: any) {
    if (field.required && !value) return "Required";
  },
};
