import React from "react";
import ProductForm from "./components/product-form/ProductForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Get from "./pages/Get";
import Put from "./pages/Put";
import Delete from "./pages/Delete";

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/" element={<ProductForm />} />
      <Route path="/get" element={<Get />} />
      <Route path="/put" element={<Put />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>

    // </div>
  );
}

export default App;

// import "./App.css";
// import ImageUploader from "./component/product-form/ImageUploader";

// function App() {
//   return (
//     <div>
//       {/* <ImageUploader /> */}
//     </div>
//   );
// }

// export default App;

// import React, { Component } from "react";
// import Input from "./input";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Input name="asdf" type="textarea" autoFocus={true} />
//         <br />
//         <Input name="pass" type="textarea" />
//         <br />
//         <Input name="ggg" type="text" autoFocus={true} size="30" />
//         <br />
//         <Input name="agds" autoFocus={true} />
//         <br />
//         <Input name="asdfzz" type="text" autoFocus={true} />
//         <br />
//         <Input
//           name="zzzzz"
//           autoFocus={true}
//           type="textarea"
//           style={{
//             // fontSize: "40px",
//             color: "red",
//             height: "30px",
//             width: "100px",
//           }}
//         />
//         <br />
//         <Input
//           type="textarea"
//           name="zzzzz"
//           autoFocus={true}
//           rows="5"
//           cols="70"
//         />
//       </div>
//     );
//   }
// }

// export default App;
