        var navMenu = document.getElementById("navMenu");
        function openMenu() {
            navMenu.style.right = "0";
        }

        function closeMenu() {
            navMenu.style.right = "-200px";
        }

        const toggleBtn = document.getElementById("theme-toggle");

        toggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";

            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.classList.remove(currentTheme);
            document.documentElement.classList.add(newTheme);

            // Optional: Save preference
            localStorage.setItem("theme", newTheme);
        });

        // Load saved theme if available
        window.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem("theme") || "light";
            document.documentElement.classList.add(savedTheme);
        });

