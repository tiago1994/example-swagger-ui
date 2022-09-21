import { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFile(e.target.result);
    };
  };

  return (
    <div>
      <h2>PoC Swagger</h2>
      <input type="file" onChange={handleChange} />
      {file && <SwaggerUI spec={file} />}
    </div>
  );
}

export default App;
