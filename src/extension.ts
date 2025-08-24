import * as vscode from 'vscode';

const BASE_PROMPT = [
  'You are @dspy — a VS Code Copilot Chat participant. ',
  'Keep replies concise. If the user asks for code, return runnable, commented snippets.'
].join('');

export async function activate(context: vscode.ExtensionContext) {
  // Minimal Chat handler following the tutorial shape
  const handler: vscode.ChatRequestHandler = async (
    request: vscode.ChatRequest,
    _context: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
  ) => {
    console.log('[@dspy] handler invoked with:', request.prompt);

    // Assemble messages (prompt + user message)
    const messages = [
      vscode.LanguageModelChatMessage.User(BASE_PROMPT),
      vscode.LanguageModelChatMessage.User(request.prompt)
    ];

    // Send to the selected model
    const resp = await request.model.sendRequest(messages, {}, token);

    // Stream chunks back to chat
    for await (const chunk of resp.text) {
      stream.markdown(chunk);
    }

    return; // required for ChatRequestHandler
  };

  // Register the chat participant (tutorial uses createChatParticipant)
  const dspy = vscode.chat.createChatParticipant('yu.dspy', handler);

  // Optional icon (skip if asset absent)
  try {
    dspy.iconPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'dspy.png');
  } catch {
    // no-op
  }

  context.subscriptions.push(dspy);
}

export function deactivate() { }