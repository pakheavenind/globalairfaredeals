
fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(data => {
    const locationDiv = document.getElementById('location-info');
    locationDiv.innerHTML = `<p>Hello from ${data.city}, ${data.country_name}!</p>`;
  });
