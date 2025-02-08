async function callDeepSeek() {
    const inputText = document.getElementById("inputText").value;
    
    const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'deepseek-v2:16b',
            messages: [{ role: 'user', content: inputText }]
        })
    });

    const text = await response.text();
    console.log('Raw response:', text);

    try {
        const jsonObjects = text.split('\n').filter(obj => obj.trim() !== '').map(obj => JSON.parse(obj));
        
        let finalMessage = "";
        jsonObjects.forEach(data => {
            if (data.message && data.message.content) {
                finalMessage += data.message.content;
            }
        });

        document.getElementById('result').textContent = finalMessage;
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
