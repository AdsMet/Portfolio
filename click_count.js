let clickCount = 0;
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    clickCount++;
    alert(`Button clicked ${clickCount} times`);
    saveToNotepad();
});

function saveToNotepad() {
    const blob = new Blob([`Button Click Count: ${clickCount}`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "click_count.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
