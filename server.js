document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = input.value.trim();

    if (!name) {
      alert("Please enter a name!");
      return;
    }

    try {
      const response = await fetch("https://wish-link.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const data = await response.json();

      if (data.link) {
        window.location.href = data.link;
      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server.");
    }
  });
});
