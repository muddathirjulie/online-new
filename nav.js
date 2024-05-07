document.addEventListener("DOMContentLoaded", function () {
    const navLinks = [
      { title: "Home", url: "index.html", class: "neon-green-link" },
      { title: "About me", url: "about.html", class: "neon-green-link" },
      { title: "Projects", url: "projects.html", class: "neon-green-link" },
      { title: "Contact", url: "contact.html", class: "neon-green-link" },
    ];

    const navContainer = document.getElementById("dynamicNav");
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("dynamicNav");


    // Add numbered list items for navigation links
    navLinks.forEach((link, index) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = link.title;
      anchor.href = link.url;
      anchor.classList.add("nav-number");
      anchor.setAttribute("data-number", index + 1);
      if (link.class) {
        anchor.classList.add(link.class);
      }

      // Check if the link corresponds to the current page
      if (link.url === window.location.pathname) {
        anchor.classList.add("active");
      }

      listItem.appendChild(anchor);
      navContainer.appendChild(listItem);
    });

    // Create button element
    const aboutButton = document.createElement("li");
    aboutButton.classList.add("nav-button");
    const buttonAnchor = document.createElement("a");
    buttonAnchor.href = "https://drive.google.com/file/d/1FUJAA_rHvGs9vLrLxDcRzSlElcGXGiYG/view?usp=drive_link";
    buttonAnchor.textContent = "Resume";
    aboutButton.appendChild(buttonAnchor);

    // Add link to the button
    const projectLink = document.createElement("a");
    projectLink.classList.add("project-link");
    projectLink.href = "https://drive.google.com/file/d/1FUJAA_rHvGs9vLrLxDcRzSlElcGXGiYG/view?usp=drive_link";
    projectLink.target = "_blank";

    aboutButton.appendChild(projectLink);

    navContainer.appendChild(aboutButton);

    const currentYear = new Date().getFullYear();
    const footerContainer = document.getElementById("dynamicFooter");
    const footerContent = document.createElement("footer");
    footerContent.textContent = `${currentYear} Developed by Muddathir Julie`;
    footerContainer.appendChild(footerContent);

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });