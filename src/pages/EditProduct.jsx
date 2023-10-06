import React from "react";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.head.sm}
`;

export const EditProduct = () => {
  return <Header>Edit Product</Header>;
};

// import styled from "@emotion/styled";
// import { useState } from "react";
// import Input from "../components/Input";
// import Button from "../components/Button";

// const StyledNav = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 213px;
//   height: 372px;
//   justify-content: center;
//   align-items: center;
//   background: #f2f2f2;
//   gap: 32px;
//   margin-top: 96px;
// `;

// const ProfilePage = ({ dataUser, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     email: dataUser.email,
//     password: dataUser.password,
//     first_name: dataUser.first_name,
//     last_name: dataUser.last_name,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     onUpdate(formData);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "32px",
//           fontWeight: "400",
//           textAlign: "center",
//           lineHeight: "40.22px",
//           marginTop: "16px",
//         }}
//       >
//         Profile
//       </h1>
//       <StyledNav onSubmit={handleSubmit}>
//         <Input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="example@mail.com"
//           label="Email"
//         />
//         <Input
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="******"
//           label="Password"
//         />
//         <Input
//           name="first_name"
//           value={formData.first_name}
//           onChange={handleChange}
//           label="First Name"
//         />
//         <Input
//           name="last_name"
//           value={formData.last_name}
//           onChange={handleChange}
//           label="Last Name"
//         />
//         <Button type="submit">Update</Button>
//       </StyledNav>
//     </div>
//   );
// };

// export default ProfilePage;
