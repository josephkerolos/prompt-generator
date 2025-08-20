# AI Business UI Generator

A powerful web application that generates realistic business application interfaces using Claude AI. Perfect for creating portfolio pieces, demos, or getting inspiration for AI-powered SaaS ideas.

## Features

- 🎲 **Random AI Business Generation** - Generate unique AI/ML business ideas with one click
- ✏️ **Custom Description Input** - Describe your own business idea and get a UI generated
- 🔥 **Upwork-Inspired Generation** - Generate ideas based on real market demand
- 🎨 **Dynamic UI Creation** - Creates complete HTML interfaces with realistic data
- 💡 **Tech Stack Suggestions** - Get recommendations for technologies to build your idea

## Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` and add your Claude API key
3. Run `npm start`
4. Open http://localhost:3000

## Deployment on Railway

### Prerequisites
- A [Railway account](https://railway.app)
- A [Claude API key](https://console.anthropic.com/)
- This repository pushed to GitHub

### Deploy Steps

1. **Push to GitHub**
   ```bash
   gh repo create prompt-generator --public
   git remote add origin https://github.com/YOUR_USERNAME/prompt-generator.git
   git push -u origin main
   ```

2. **Deploy on Railway**
   - Go to [Railway](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect the Node.js app

3. **Configure Environment Variables**
   - In Railway dashboard, go to your project
   - Click on the service
   - Go to "Variables" tab
   - Add: `CLAUDE_API_KEY` with your API key value
   - Railway automatically sets the `PORT` variable

4. **Access Your App**
   - Railway will provide a public URL
   - Your app will be live at `https://your-app.railway.app`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAUDE_API_KEY` | Your Claude API key from Anthropic | Yes |
| `PORT` | Server port (Railway sets this automatically) | No |

## Tech Stack

- **Backend**: Node.js with native HTTP module
- **AI**: Claude 3 Haiku API for fast generation
- **Frontend**: Vanilla JavaScript with dynamic HTML generation
- **Deployment**: Railway (automatic builds and deploys)

## License

MIT