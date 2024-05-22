const axios = require("axios");

app.get("/chapters", async (req, res) => {
  try {
    const response = await axios.get("https://api.quran.com/api/v4/chapters");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching chapters");
  }
});

// Add routes for pages and verses similarly
