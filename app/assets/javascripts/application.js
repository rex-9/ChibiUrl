var clipboard = new ClipboardJS('.clipboard-btn');

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  document.getElementById('copied').innerHTML = `Success: Copied "${e.text}" to clipboard!`;
  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
