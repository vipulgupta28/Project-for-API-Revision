async function generateImages() {
            const query = document.getElementById('input').value;
            if (!query) {
                alert("Please enter a keyword!");
                return;
            }
            const apiKey = 'ZzCi0UxDqp3lu8QXTrU8BQBJXsvkaAlXq2LBKdkV2Vk'; // API key
            const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            
            const imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = '';

            data.results.forEach(image => {
                const img = document.createElement('img');
                img.src = image.urls.small;
                imageContainer.appendChild(img);
            });
        }
