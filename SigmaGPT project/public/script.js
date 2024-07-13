document.getElementsByClassName('send')[0].addEventListener('click', async () => {
    const input = document.getElementsByClassName('take-input')[0].value;
    const responseElement = document.getElementsByClassName('bot')[0];

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: input }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        responseElement.textContent = data.text;
    } catch (error) {
        responseElement.textContent = 'Error generating content: ' + error.message;
    }
});
