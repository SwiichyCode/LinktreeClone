// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import { TextField } from "@/app/_components/ui/TextField";
// import { Input } from "@/app/_components/ui/TextField/Input";
// import { Label } from "@/app/_components/ui/TextField/Label";

// describe("TextField", () => {
//   it("should render correctly", () => {
//     render(
//       <TextField
//         name="test"
//         labelText=""
//         placeholder=""
//         error={""}
//         register={() => {}}
//         setFocus={() => {}}
//       />
//     );

//     const inputElement = screen.getByRole("textbox");
//     expect(inputElement).toBeInTheDocument();
//   });

//   it("should render label correctly", () => {
//     render(<Label labelText="test" htmlFor="test" error={""} />);

//     const labelElement = screen.getByText("test");
//     expect(labelElement).toBeInTheDocument();
//   });

//   it("should handle focus correctly", async () => {
//     render(
//       <Input name="test" error={""} register={() => {}} setFocus={() => {}} />
//     );

//     const inputWrapper = screen.getByRole("group");
//     expect(inputWrapper).not.toHaveClass("border-input-focus");

//     userEvent.click(inputWrapper);

//     await waitFor(() => {
//       expect(inputWrapper).toHaveClass("border-input-focus");
//     });
//   });

//   it("should render icon when iconUrl is provided", () => {
//     render(
//       <Input
//         name="test"
//         placeholder=""
//         error={""}
//         iconUrl="/icon-email.svg"
//         register={() => {}}
//         setFocus={() => {}}
//       />
//     );

//     const iconElement = screen.getByRole("icon");

//     expect(iconElement).toBeInTheDocument();
//     expect(iconElement).toHaveAttribute("src", "/icon-email.svg"); // Vérifier le chemin de l'icône
//     expect(iconElement).toHaveAttribute("alt", "icon"); // Vérifier l'attribut alt de l'icône
//   });

//   it("should apply error style when error is provided", () => {
//     const errorText = "Erreur dans le champ";
//     render(
//       <Input
//         name="test"
//         error={errorText}
//         register={() => {}}
//         setFocus={() => {}}
//       />
//     );

//     const inputWrapper = screen.getByRole("group");
//     expect(inputWrapper).toHaveClass("border-error");
//   });
// });
