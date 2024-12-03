const session = await chrome.aiOriginTrial.languageModel.create({
    systemPrompt: 'You are a helpful and friendly assistant.',
  });
  await session.prompt('What is the capital of Italy?');