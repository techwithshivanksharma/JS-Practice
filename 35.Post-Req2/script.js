document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const data = {
    title: name,
    body: message,
    userId: 1, //dummy userId (Required in JSON Placeholder)
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById(
        "response"
      ).innerText = `Message sent! Post ID: ${result.id}`;
      console.log("Server Response: ", result);

    //   console.log("Title:", result.title);
    //   console.log("Body:", result.body);
    //   console.log("User ID:", result.userId);
    })
    .catch((error) => {
      document.getElementById("response").innerText = "Error sending message.";
      console.error("Error:", error);
    });
});
