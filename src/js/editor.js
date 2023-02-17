const textArea = document.querySelector("textarea");
const saveButton = document.querySelector("#save-button");
const saveButton1 = document.querySelector("#save-button1");
const saveButton2 = document.querySelector("#save-button2");
const reloadButton = document.querySelector("#reload-button");

reloadButton.addEventListener("click", () => {
  window.location.reload();
})

saveButton.addEventListener("click", () => {
  const text = textArea.value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "index.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
});

saveButton1.addEventListener("click", () => {
  const text = textArea.value;
  const blob = new Blob([text], { type: "text/html" });
  const link = document.createElement("a");
  link.download = "index.html";
  link.href = URL.createObjectURL(blob)
  link.click();
});

saveButton2.addEventListener("click", () => {
  const text = textArea.value;
  const blob = new Blob([text], { type: "text/md" });
  const link = document.createElement("a");
  link.download = "index.md";
  link.href = URL.createObjectURL(blob)
  link.click();
});