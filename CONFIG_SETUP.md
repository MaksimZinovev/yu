# Configuration Setup

## Setting up config.json

1. Copy the template configuration file:
   ```bash
   cp config.json.template config.json
   ```

2. Set your OpenRouter API key as an environment variable:
   ```bash
   export OPENROUTER_API_KEY="your-actual-api-key-here"
   ```

   Or add it to your shell profile (e.g., `.bashrc`, `.zshrc`):
   ```bash
   echo 'export OPENROUTER_API_KEY="your-actual-api-key-here"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. Your application should read the environment variable and substitute it in the config.

## Security Note

- **NEVER commit your actual API keys to the repository**
- The `config.json` file is gitignored to prevent accidental commits
- Always use environment variables for sensitive configuration
- If you accidentally commit secrets, immediately revoke them and follow the incident response process

## Getting an OpenRouter API Key

1. Sign up at [OpenRouter.ai](https://openrouter.ai/)
2. Go to the [Keys](https://openrouter.ai/keys) section
3. Create a new API key
4. Add credits to your account if needed
