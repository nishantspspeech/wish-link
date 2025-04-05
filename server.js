document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('input').value;

  if (!name.trim()) {
    alert("Please enter a name!");
    return;
  }

  const response = await fetch('https://wish-link.onrender.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });

  const data = await response.json();

  // Redirect to the generated link
  window.location.href = data.link;
});
