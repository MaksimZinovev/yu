# Yu - @dspy Chat Participant for VS Code

A VS Code extension that implements an intelligent chat participant `@dspy` inside Copilot Chat, using DSPy-style reasoning loops to provide more reliable and structured code assistance.

## 🎯 Overview

**Yu** enhances your development workflow by adding a `@dspy` chat participant that uses structured reasoning loops (plan → draft → critique → revise) to provide more reliable code completions and refactoring suggestions. The extension leverages **Ax** (TypeScript DSPy) to orchestrate multi-step LLM conversations through the VS Code Language Model API.

### Key Benefits

- **Structured Reasoning**: Uses DSPy-style patterns to reduce hallucinations and improve code quality
- **Context-Aware**: Automatically collects relevant code context from your editor
- **Streaming Responses**: Real-time markdown output with "Insert to Editor" actions
- **Extensible**: Built to be composable and adaptable to new AI providers

## ✨ Features

### MVP Features

- **🤖 @dspy Chat Participant**: Invoke from Copilot Chat for structured assistance
- **📋 Multi-Step Process**: Responses include Plan, Draft, Critique, and Final sections
- **🎯 Smart Context**: Automatically uses selected code or current file as context
- **⚡ Quick Actions**: "Insert to Editor" button to apply final code snippets
- **🔄 Ax Pipeline**: Uses `@ax-llm/ax` for structured LLM orchestration

### Future Roadmap

- **💭 Conversation Memory**: Remember findings and instructions across chat turns
- **🔍 Extended Context**: Integration with docs and repository context
- **🚀 Proactive Suggestions**: Intelligent next-step recommendations
- **🏠 Local Runners**: Support for local DSPy (Python) execution

## 🚀 Getting Started

### Prerequisites

- VS Code 1.103.0 or higher
- Access to VS Code's Language Model API (varies by organization/subscription)

### Installation

1. Clone and install dependencies:

   ```bash
   npm install
   ```

2. Compile and package the extension:

   ```bash
   npm run package
   ```

3. Install the extension in VS Code:
   - Open VS Code
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
   - Type "Extensions: Install from VSIX..." and select the generated `.vsix` file

### Usage

1. Open Copilot Chat in VS Code
2. Type `@dspy` followed by your request, for example:

   ```
   @dspy Refactor this function to be more efficient
   @dspy Add error handling to this code
   @dspy Explain what this code does and suggest improvements
   ```

3. The `@dspy` participant will respond with structured reasoning steps
4. Use the "Insert to Editor" button to apply the final code suggestions

## 🛠 Development

### Project Structure

```
src/
├── extension.ts          # Main extension entry point
└── test/
    └── extension.test.ts # Extension tests
docs/
├── prd.md               # Product Requirements Document
└── todos.md            # Development TODO list
```

### Development Commands

```bash
# Development
npm run compile          # Compile TypeScript, check types, lint, and build
npm run watch            # Run development mode with file watching
npm run package          # Create production build for publishing

# Quality Assurance
npm run check-types      # Run TypeScript type checking
npm run lint             # Run ESLint
npm run test             # Run VS Code extension tests

# Watch Commands
npm run watch:esbuild    # Watch for changes and rebuild with esbuild
npm run watch:tsc        # Watch for TypeScript changes
npm run watch-tests      # Watch for test file changes
```

### In VS Code

- Ensure tasks. and launch.json are configured in `.vscode`
- Build: npm run compile
- Run: “Run Extension (Watch)” config
- In the Dev Host: open Copilot Chat → @dspy hello
- See streamed ack + “dspy” Output channel logs

## 🛠 Custoom Development Instructions  for local setup Claude Code + Claude Code Router + Task-Master-ai

```bash
# Ensure Claude Code is running
ccr status          # Check if Claude Code Router is running
ccr start           # Run development mode with file watching

# Launching Claude Code (in separate terminal tab)
ANTHROPIC_BASE_URL=http://localhost:3456 ANTHROPIC_API_KEY=any-string-is-ok npx @anthropic-ai/claude-code        

# Taskmaster 
source .env                                       # Ensure API keys are loaded and available as env variables
tm list                                           # List tasks
task-master expand --id=3                         # Expand task 3
task-master set-status --id=3 --status=done       # Expand task 3
```

### Architecture

The extension follows a modular architecture:

1. **Extension Layer**: Registers the chat participant and manages context collection
2. **Ax Pipeline**: Uses structured signatures for plan/draft/critique orchestration
3. **VS Code LM Adapter**: Bridges Ax with the VS Code Language Model API
4. **UI Integration**: Handles streaming responses and quick actions

## 🔧 Configuration

### TypeScript Configuration

- Target: ES2022
- Module: Node16
- Strict mode enabled
- Source maps enabled

### ESLint Rules

- TypeScript naming conventions
- Code quality enforcement (curly braces, equality checks, semicolons)

## 📋 Requirements

- VS Code 1.103.0+
- Access to VS Code Language Model API
- Node.js for development
- No Python runtime required (Ax runs in TypeScript/JavaScript)

## 🎯 Current Status

**Phase**: Early Development - MVP in Progress

The project scaffold is complete with:

- ✅ VS Code extension structure
- ✅ Basic command registration
- ✅ TypeScript configuration
- ✅ Build and test pipeline
- ✅ Task Master integration
- ⏳ Chat participant implementation
- ⏳ Ax pipeline integration
- ⏳ VS Code LM API integration

See [docs/todos.md](docs/todos.md) for detailed progress tracking.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run `npm run lint` and `npm run test`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Ax (TypeScript DSPy)](https://github.com/ax-llm/ax)
- [DSPy Documentation](https://dspy-docs.vercel.app/)
- [VS Code LM API](https://code.visualstudio.com/api/extension-guides/language-models)

---

**Built with ❤️ using Claude Code**
