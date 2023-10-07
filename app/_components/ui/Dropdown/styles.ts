export const CustomStyle = {
  control: (base: any, state: any) => ({
    ...base,
    borderColor: state.isFocused ? "#633CFF" : "#D9D9D9",
    borderRadius: "8px",
    boxShadow: "none",
    ":hover": {
      ...base[":hover"],
      border: "1px solid #633CFF",
      boxShadow: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
    },
  }),
  option: (base: any, state: any, index: any) => ({
    ...base,
    backgroundColor: state.isSelected ? "transparent" : "transparent",
    color: state.isSelected ? "#633CFF" : "#333",
    borderTop: "1px solid #D9D9D9",
    padding: "10px 16px",
    ":active": {
      ...base[":active"],
      backgroundColor: state.isSelected ? "transparent" : "transparent",
    },
    ":hover": {
      ...base[":hover"],
      color: "#633CFF",
    },
    ":first-of-type": {
      borderTop: "none",
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "8px",
  }),
} as const;
