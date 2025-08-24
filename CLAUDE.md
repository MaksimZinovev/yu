# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code extension called "yu" that implements a chat participant `@dspy` inside Copilot Chat. The extension uses Ax (TypeScript DSPy) pipelines to orchestrate DSPy-style reasoning loops (plan → draft → critique → revise) via the VS Code Language Model API.

## Common Development Commands

### Build and Development
- `npm run compile` - Compile TypeScript, check types, lint, and build with esbuild
- `npm run watch` - Run development mode with concurrent watching of TypeScript and esbuild
- `npm run package` - Create production build for publishing
- `npm run check-types` - Run TypeScript type checking without emitting files
- `npm run lint` - Run ESLint on the src directory

### Testing
- `npm run pretest` - Compile tests, compile extension, and lint before testing
- `npm run test` - Run VS Code extension tests using vscode-test

### Watch Commands
- `npm run watch:esbuild` - Watch for changes and rebuild with esbuild
- `npm run watch:tsc` - Watch for TypeScript changes in real-time
- `npm run watch-tests` - Watch for test file changes

## Architecture

### Core Components
1. **Extension Entry Point** - `src/extension.ts:7` - Main activation function and command registration
2. **Chat Participant** - Not yet implemented (see docs/todos.md) but will register `@dspy` in Copilot Chat
3. **Ax Pipeline** - Will use `@ax-llm/ax` for structured LLM orchestration with three signatures:
   - Plan: Create structured approach
   - Draft: Generate initial code
   - Critique: Review and improve code
4. **VS Code LM Provider** - Adapter to bridge Ax with `vscode.lm` API
5. **Context Collector** - Gathers editor selection or current file content

### Build Process
- Uses esbuild for bundling (see `esbuild.js`)
- TypeScript compilation with strict mode enabled
- ESLint configuration enforces TypeScript conventions and code quality rules
- Output goes to `./dist/extension.js` as specified in package.json

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

## Key Features from PRD

### MVP Goals
- Register `@dspy` chat participant in Copilot Chat
- Implement context-aware responses from editor selection/current file
- Use Ax signatures for structured plan/draft/critique pipeline
- Stream responses back to chat with markdown formatting
- Provide "Insert to Editor" quick action

### Architecture Constraints
- ≤1 week development time for MVP
- Only dependencies: `@ax-llm/ax` + VS Code APIs
- No Python runtime required
- Keep extension small and composable

## Current Implementation Status

The project is in early development stage:
- Basic extension scaffold is complete
- Standard "Hello World" command is implemented
- Chat participant functionality is pending (see docs/todos.md)
- Ax integration and pipeline implementation needed

## Configuration

### TypeScript
- Target: ES2022
- Module: Node16
- Strict mode enabled
- Source maps enabled

### ESLint Rules
- TypeScript naming conventions for imports
- Standard code quality rules (curly braces, eqeqeq, semi-colons)
- Warning level for most rules to allow flexibility

## Testing

Tests are located in `src/test/extension.test.ts` and use the VS Code test runner. Current tests are basic sample tests - comprehensive test coverage should be added as functionality grows.