# CopilotKit <> Mastra Starter

This is a starter template for building AI agents using [Mastra](https://mastra.ai) and [CopilotKit](https://copilotkit.ai). It provides a modern Next.js application with integrated AI capabilities and a beautiful UI.

## Project Structure

This is a **monorepo** managed with [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/repo). The project is organized into the following services:

```
copilotkit-mastra/
├── services/
│   ├── frontend/          # Next.js web application (port 3000)
│   └── mastra/            # Mastra AI agent service (port 4111)
├── package.json           # Root workspace configuration
├── pnpm-workspace.yaml    # Workspace definition
└── turbo.json            # Turborepo configuration
```

### Services Overview

- **Frontend** (`@workspace/frontend`): Next.js 16 application with React 19, CopilotKit integration, and Tailwind CSS for a modern UI
- **Mastra** (`@workspace/mastra`): Mastra agent service that handles AI operations, tools, and agent orchestration

## Prerequisites

- **Node.js 22+** - Required for Mastra service
- **pnpm** - This project uses pnpm workspaces
  ```bash
  npm install -g pnpm
  ```

## Getting Started

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd copilotkit-mastra

# Install all dependencies for the entire monorepo
pnpm install
```

This single command will install dependencies for all services in the workspace.

### 2. Configure Environment Variables

Add your OpenAI API key (or any model that Mastra supports):

```bash
# Create .env file in the root
echo "OPENAI_API_KEY=your-key-here" > .env
```

### 3. Start Development Servers

You have multiple options for running the services:

#### Option A: Start All Services (Recommended for Development)

```bash
pnpm dev
```

This starts both the frontend and Mastra services concurrently using Turborepo:
- Frontend: http://localhost:3000
- Mastra: http://localhost:4111

#### Option B: Start Services Individually

```bash
# Start only the frontend
pnpm dev:frontend

# Start only the Mastra agent service
pnpm dev:mastra
```

#### Option C: Start with Debug Logging

```bash
pnpm dev:debug
```

This enables detailed debug logs for troubleshooting.

## Available Scripts

All scripts can be run from the root directory using `pnpm`:

### Development
- `pnpm dev` - Start all services in development mode
- `pnpm dev:frontend` - Start only the frontend service
- `pnpm dev:mastra` - Start only the Mastra service
- `pnpm dev:debug` - Start all services with debug logging

### Build
- `pnpm build` - Build all services for production
- `pnpm build:frontend` - Build only the frontend
- `pnpm build:mastra` - Build only the Mastra service

### Production
- `pnpm start` - Start the production frontend server

### Maintenance
- `pnpm lint` - Run ESLint across all services
- `pnpm clean` - Remove all node_modules, build artifacts, and Turbo cache

## Working with the Monorepo

### Adding Dependencies

```bash
# Add a dependency to a specific service
pnpm add <package> --filter @workspace/frontend
pnpm add <package> --filter @workspace/mastra

# Add a dev dependency to a specific service
pnpm add -D <package> --filter @workspace/frontend

# Add a dependency to the root workspace
pnpm add -w <package>
```

### Running Commands in Specific Services

```bash
# Run a command in a specific service
pnpm --filter @workspace/frontend <command>
pnpm --filter @workspace/mastra <command>

# Example: Lint only the frontend
pnpm --filter @workspace/frontend lint
```

### Why Monorepo?

This monorepo structure provides several benefits:

1. **Shared Dependencies**: Common packages are installed once at the root level, reducing disk space and install time
2. **Consistent Tooling**: Shared configuration for TypeScript, ESLint, and build tools
3. **Atomic Changes**: Make changes across frontend and backend in a single commit
4. **Simplified Development**: Start all services with one command
5. **Efficient CI/CD**: Turborepo caches build outputs and only rebuilds what changed

## Documentation

- [Mastra Documentation](https://mastra.ai/en/docs) - Learn more about Mastra and its features
- [CopilotKit Documentation](https://docs.copilotkit.ai) - Explore CopilotKit's capabilities
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.