const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

// Access your API key directly
const genAI = new GoogleGenerativeAI("AIzaSyCQpG-IsGTPm1cycPSeux0atSYm-MHNqZM");

// Middleware to serve static files and parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ text });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
