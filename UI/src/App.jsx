import { useState } from "react";
import "./App.css";
import {
  Stack,
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from "@mui/material";

function App() {  
  const [results, setResults] = useState({});
  const [formData, setFormData] = useState({ city: "", passcode: "" });

  

  function handleFormFieldChangeHandler(field, value) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [field]: value,
      };
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();    
    fetch("http://localdemoapi.com/api/demo", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(formData),
    }).then((res) => res.json())
    .then((datas) => {
      setFormData({ city: "", passcode: "" });      
      setResults(datas);
    });
  }

  return (
    <><form onSubmit={handleFormSubmit}>
        <Stack spacing={4} direction="row">
          <FormControl
            xs={{ width: "200px", fullWidth: true, display: "flex" }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.city}
              label="City"
              onChange={(e) =>
                handleFormFieldChangeHandler("city", e.target.value)
              }
            >
              <MenuItem value="ahemedabad">Ahemedabad</MenuItem>
              <MenuItem value="indore">Indore</MenuItem>
              <MenuItem value="surat">Surat</MenuItem>
              <MenuItem value="gurugram">Gurugram</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Passcode</InputLabel>
            <Input
              id="my-input"
              type="password"
              aria-describedby="my-helper-text"
              value={formData.passcode}
              onChange={(e) =>
                handleFormFieldChangeHandler("passcode", e.target.value)
              }
            />
          </FormControl>
          <FormControl xs={{ margin: "5px" }} fullWidth>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </FormControl>
        </Stack>
      </form>
      <div>
        {results.status === 'success' && <p>Record match found!</p>}
        {results.status === 'notfound' && <p>Record not found!</p>}
      </div>
    </>
  );
}

export default App;
