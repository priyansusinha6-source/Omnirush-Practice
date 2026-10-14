async function runAgent() {
  const input = document.getElementById('userInput').value.trim();
  const mode = document.getElementById('modeSelect').value;
  const outputBox = document.getElementById('outputBox');
  const responseText = document.getElementById('responseText');

  if (!input) {
    alert("Please enter some text or code first!");
    return;
  }

  outputBox.classList.remove('hidden');
  responseText.textContent = "⏳ Thinking and analyzing...";

  // === HACKATHON API PLUG-IN POINT ===
  // On Oct 16, we will replace this mock block with the real GPT-6 / Astra API fetch()!
  setTimeout(() => {
    responseText.textContent = `[Mode: ${mode}]\n\n✅ Successfully received your input (${input.length} characters).\n\nWhen the hackathon starts on Oct 16, your 100M token API key will go right here in script.js to generate real AI responses!`;
  }, 1000);
}