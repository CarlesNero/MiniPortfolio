/* Click events for buttons */

const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
});

/* Light and Dark mode */

document.addEventListener("DOMContentLoaded", () => {
   const toggleThemeButton = document.getElementById ("toggleTheme");
   const githubLogo = document.getElementById('github-logo');
   const linkedinLogo = document.getElementById('linkedin-logo');
   const emailLogo = document.getElementById('email-logo');

   const lightLogos = {
        github: "Media/Images/github_light.png",
        linkedin: "Media/Images/linkedin_light.png",
        email: "Media/Images/email_light.png",
        theme: "Media/Images/theme_light.png"
   };
   const darkLogos = {
    github: "Media/Images/github_dark.png",
    linkedin: "Media/Images/linkedin_dark.png",
    email: "Media/Images/email_dark.png",
    theme: "Media/Images/theme_dark.png"
    };

    function setTheme (isDark){
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
        linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
        toggleThemeButton.src = isDark ? darkLogos.theme : lightLogos.theme;
    }

    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);

        setTheme(isDark);
      });

      const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);

        setTheme(isDark);
      };

      // Load saved theme from local storage or default to light theme
      loadTheme();
    });
