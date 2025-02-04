let content;

fetch('content.json')
  .then(response => response.json())
  .then(data => {
    content = data;
    setLanguage('en'); // Default language
  });

function setLanguage(lang) {
  document.getElementById('motto').innerText = content[lang].motto;
  document.getElementById('address').innerText = content[lang].location;
  
  // Update Google Map
  document.getElementById('map').innerHTML = `
    <iframe src="${content[lang].google_map}" width="400" height="300" style="border:0;" allowfullscreen loading="lazy"></iframe>
  `;

  // Update Gallery
  const gallery = document.getElementById('product-gallery');
  gallery.innerHTML = '';
  content[lang].products.forEach(product => {
    const img = document.createElement('img');
    img.src = `images/${product.image}`;
    img.alt = product.description;
    gallery.appendChild(img);
  });

  // Update Social Media Links with Icons
  document.getElementById('telegram').innerHTML = `<img src="icons/telegram.png" alt="Telegram"> Telegram`;
  document.getElementById('telegram').href = content[lang].social.telegram;
  
  document.getElementById('whatsapp').innerHTML = `<img src="icons/whatsapp.png" alt="WhatsApp"> WhatsApp`;
  document.getElementById('whatsapp').href = content[lang].social.whatsapp;
  
  document.getElementById('instagram').innerHTML = `<img src="icons/instagram.png" alt="Instagram"> Instagram`;
  document.getElementById('instagram').href = content[lang].social.instagram;

  // Update Gallery Headings
  document.getElementById('gallery-heading').innerText = content[lang].gallery_heading;
  document.getElementById('gallery-subtext').innerText = content[lang].gallery_subtext;
}
