
import React from "react";
import './../styles/App.css';
import Weather from "./weather";
import 

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Weather Display App
      </Typography>
      <Weather weather={weather} />
    </Container>
    </div>
  )
}

export default App
