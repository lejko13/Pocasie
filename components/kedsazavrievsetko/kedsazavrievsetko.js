export const Textclpsed = () => {
  const footer = document.createElement("div");
  footer.className = "footer";

  const ig = document.createElement("i");
  ig.className = "bx bxl-instagram";

  const link = document.createElement("i");
  link.className = "bx bxl-linkedin";

  const facebook = document.createElement("i");
  facebook.className = "bx bxl-facebook";

  const twitter = document.createElement("i");
  twitter.className = "bx bxl-twitter";

  const openIG = () => {
    window.open("https://www.instagram.com/leofudaly/", "_blank");
  };

  [ig, link, facebook, twitter].forEach(icon => {
    icon.style.cursor = "pointer";
    icon.addEventListener("click", openIG);
  });

  footer.innerHTML = `
  <div class = "texcovac">
  <div class = "tujstotext">
  Táto aplikácia je optimalizovaná pre mobilné zariadenia. Pre najlepší zážitok ju prosím otvorte na mobilnom telefóne.
  </div>
  </div>
  <div class = "dzrilinok">
      <div class="ikoknomom"></div>
    <div class="ikoknomom2"></div>
    <div class="ikoknomom3"></div>
    <div class="ikoknomom4"></div>
  
  </div>

  `;

  const ikon1 = footer.querySelector(".ikoknomom");
  const ikon2 = footer.querySelector(".ikoknomom2");
  const ikon3 = footer.querySelector(".ikoknomom3");
  const ikon4 = footer.querySelector(".ikoknomom4");

  ikon1.append(ig);
  ikon2.append(link);
  ikon3.append(facebook);
  ikon4.append(twitter);

  return footer;
};