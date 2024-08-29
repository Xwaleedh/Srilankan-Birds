// Load the default language on page load
window.onload = function () {
  loadLanguage("si");
};

// Function to load language based on the selected language code
function loadLanguage(lang) {
  fetch(`../languages/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update the content based on the loaded language
      document.getElementById("home-link").textContent = data.home_link;
      document.getElementById("features-link").textContent =
        data.features_link;
      document.getElementById("release-link").textContent = data.release_link;
      document.getElementById("about-link").textContent = data.about_link;
      document.getElementById("contact-link").textContent = data.contact_link;


      document.getElementById("modal-header-text").textContent =
        data.modal_header_text;
      document.getElementById("subBtn").value = data.subscribe;
      document.getElementById("cancelBtn").value = data.cancel;
      document.getElementById("ltxt1").textContent = data.ltxt1;
      document.getElementById("ltxt2").textContent = data.ltxt2;
      document.getElementById("sub").textContent = data.subscribe_us;
      //document.getElementById("text1").textContent = data.dynamic_text;
      document
        .getElementById("features")
        .getElementsByClassName("heading")[0].textContent = data.features_link;
      document
        .getElementById("release")
        .getElementsByClassName("heading")[0].textContent = data.release_link;
      document
        .getElementById("release")
        .getElementsByClassName("description")[0].innerHTML =
        data.release_description;
      document
        .getElementById("about")
        .getElementsByClassName("heading")[0].textContent =
        data.about_link;
      document
        .getElementById("contact")
        .getElementsByClassName("heading")[0].textContent = data.contact_link;
      document
        .getElementById("contact")
        .getElementsByClassName("description")[0].innerHTML =
        data.contact_description;

      // Update the card titles and descriptions in the Features section
      const featureCards = document
        .getElementById("features")
        .getElementsByClassName("card");
      for (let i = 0; i < featureCards.length; i++) {
        const card = featureCards[i];
        card.getElementsByClassName("card-title")[0].textContent =
          data.feature_cards[i].title;
        card.getElementsByClassName("card-description")[0].textContent =
          data.feature_cards[i].description;
      }

      // Update the card titles and descriptions in the About section
      const aboutCards = document
        .getElementById("about")
        .getElementsByClassName("card");
      for (let i = 0; i < aboutCards.length; i++) {
        const card = aboutCards[i];
        card.getElementsByClassName("card-title")[0].textContent =
          data.about_cards[i].title;
        card.getElementsByClassName("card-description")[0].textContent =
          data.about_cards[i].description;
      }
    });
}
