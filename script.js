function showDemoMessage() {
    alert("To je samo demo");
}

document.getElementById('demo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    alert("To je samo demo. Tabela ni bila ustvarjena."); // Show a demo message
    // Refresh the page after a short delay
    setTimeout(function() {
        location.reload(); // This will refresh the page
    }, 1); // 2 seconds delay before the page refreshes
});