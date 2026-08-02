# FlyRank Capstone

Frontend capstone project built with HTML, CSS, JavaScript, and Node.js.

## About

This repository is the starting point for the FlyRank frontend capstone assignment. You will build a client-side web application using HTML, CSS, and JavaScript, with Node.js for local development tooling and Git for version control throughout the project.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML | Page structure and content |
| CSS | Styling and layout |
| JavaScript | Client-side interactivity |
| Node.js | Local dev server and tooling |
| Git | Version control |

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Git](https://git-scm.com/)

Verify your installations:

```bash
node --version
npm --version
git --version
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd FlyRank_capstone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:3000`).

## Project Structure

```
FlyRank_capstone/
├── index.html          # Main HTML entry point
├── css/                # Stylesheets
├── js/                 # JavaScript modules
├── assets/             # Images, fonts, and other static files
├── package.json        # Node.js dependencies and scripts
├── .gitignore          # Git ignore rules
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the local development server |
| `npm run dev` | Start the dev server with live reload (if configured) |

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and test locally
3. Stage and commit: `git add .` then `git commit -m "Describe your change"`
4. Push to remote: `git push origin feature/your-feature-name`
5. Open a pull request for review

## License

This project is licensed under the [MIT License](LICENSE).
