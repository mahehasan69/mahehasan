// ===============================
// Typing Animation
// ===============================

const words = [
    "Cybersecurity Researcher",
    "Python Developer",
    "Linux Enthusiast",
    "Bug Hunter",
    "Web Security Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function type() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, deleting ? 50 : 100);
}

type();


// ===============================
// Dark / Light Theme Toggle
// ===============================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

    });

}



// ===============================
// Safe Interactive Portfolio Terminal
// This is a portfolio demo, not a real shell.
// ===============================

(() => {
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");

    if (!form || !input || !output) return;

    const commandHelp = [
        "Available commands:",
        "  help       Show this command list",
        "  whoami     A short introduction",
        "  about      Learn about Mahe",
        "  skills     View technical interests",
        "  projects   List featured projects",
        "  contact    Show contact details",
        "  github     Open GitHub profile",
        "  linkedin   Open LinkedIn profile",
        "  clear      Clear the terminal"
    ];

    const responses = {
        whoami: [
            "MD MAHE HASAN",
            "College student | Aspiring cybersecurity professional",
            "Interested in Python, Linux, web security and building useful tools."
        ],
        about: [
            "I'm a programmer and cybersecurity enthusiast who enjoys learning by building.",
            "My current interests include web application security, Python automation, Linux and networking."
        ],
        skills: [
            "Current skills and learning areas:",
            "• Python and automation",
            "• Linux and command-line tools",
            "• Networking fundamentals",
            "• Web security and bug bounty learning",
            "• Git and GitHub"
        ],
        projects: [
            "Featured projects:",
            "1. SYSTEMIC NEWS — automated news collection and publishing",
            "2. Bangla Translator Bot — Telegram translation and voice project",
            "3. Website Capacity Tester — controlled load testing for authorized targets",
            "Open the Projects section for details and links."
        ],
        contact: [
            "Email: mdmahemahe899@gmail.com",
            "GitHub: github.com/mahehasan69",
            "LinkedIn: linkedin.com/in/md-mahe-hasan-021a73381/"
        ],
        help: commandHelp
    };

    function addLine(text, className) {
        const line = document.createElement("p");
        if (className) line.className = className;
        line.textContent = text;
        output.appendChild(line);
    }

    function runCommand(rawCommand) {
        const command = rawCommand.trim().toLowerCase();
        if (!command) return;

        addLine("mahe@portfolio:~$ " + rawCommand, "terminal-command");

        if (command === "clear") {
            output.replaceChildren();
            return;
        }

        if (command === "github") {
            addLine("Opening GitHub profile…", "terminal-success");
            window.open("https://github.com/mahehasan69", "_blank", "noopener,noreferrer");
        } else if (command === "linkedin") {
            addLine("Opening LinkedIn profile…", "terminal-success");
            window.open("https://www.linkedin.com/in/md-mahe-hasan-021a73381/", "_blank", "noopener,noreferrer");
        } else if (responses[command]) {
            responses[command].forEach((line, index) => {
                addLine(line, index === 0 ? "terminal-result-title" : "terminal-result");
            });
        } else {
            addLine("Command not found: " + command + ". Type help to see available commands.", "terminal-error");
        }

        output.scrollTop = output.scrollHeight;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        runCommand(input.value);
        input.value = "";
        input.focus();
    });

    document.querySelectorAll(".terminal-shortcuts [data-command]").forEach(button => {
        button.addEventListener("click", () => {
            const command = button.dataset.command || "";
            runCommand(command);
            input.focus();
        });
    });
})();


// ===============================
// Safe Interactive Portfolio Terminal
// ===============================

const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const terminalCommands = {
    help: [
        "Available commands:",
        "  about     - learn about Mahe",
        "  skills    - view technical interests",
        "  projects  - explore selected projects",
        "  contact   - show contact links",
        "  clear     - clear this terminal",
        "  whoami    - identify this portfolio"
    ],
    about: [
        "MD Mahe Hasan",
        "College student and aspiring cybersecurity professional.",
        "Interested in Python, Linux, web security and building useful tools."
    ],
    skills: [
        "TECHNICAL INTERESTS",
        "Python | Linux | Networking fundamentals",
        "Web security | Bug bounty learning | Git & GitHub",
        "Automation | Telegram bot development"
    ],
    projects: [
        "SELECTED PROJECTS",
        "1. SYSTEMIC NEWS - automated news publishing",
        "2. Bangla Translator Bot - Telegram translation project",
        "3. Website Capacity Tester - controlled authorized load testing",
        "Use the Projects section for links and more details."
    ],
    contact: [
        "CONTACT",
        "Email: mdmahemahe899@gmail.com",
        "GitHub: github.com/mahehasan69",
        "LinkedIn: linkedin.com/in/md-mahe-hasan-021a73381"
    ],
    whoami: [
        "visitor@mahe-portfolio",
        "You are exploring MD Mahe Hasan's personal portfolio.",
        "This is a simulated portfolio terminal, not a real shell."
    ]
};

function appendTerminalLine(text, className = "") {
    if (!terminalOutput) return;
    const line = document.createElement("p");
    if (className) line.className = className;
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function runPortfolioCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    appendTerminalLine("mahe@portfolio:~$ " + rawCommand, "terminal-command");

    if (command === "clear") {
        terminalOutput.replaceChildren();
        return;
    }

    const response = terminalCommands[command];
    if (!response) {
        appendTerminalLine("Command not found: " + command + ". Type 'help' to see available commands.", "terminal-error");
        return;
    }

    response.forEach((line, index) => {
        appendTerminalLine(line, index === 0 ? "terminal-response-title" : "terminal-response");
    });
}

if (terminalForm && terminalInput && terminalOutput) {
    terminalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runPortfolioCommand(terminalInput.value);
        terminalInput.value = "";
        terminalInput.focus();
    });

    document.querySelectorAll("[data-command]").forEach((button) => {
        button.addEventListener("click", () => {
            const command = button.dataset.command || "";
            runPortfolioCommand(command);
            terminalInput.value = "";
            terminalInput.focus();
        });
    });
}
