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
// Interactive Portfolio Terminal
// A safe portfolio simulator — never executes operating-system commands.
// ===============================
(() => {
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    if (!form || !input || !output) return;

    const history = [];
    let historyIndex = 0;
    const commands = [
        "help", "about", "whoami", "skills", "projects", "project",
        "contact", "socials", "github", "linkedin", "email",
        "education", "focus", "neofetch", "banner", "date", "time",
        "pwd", "ls", "cat", "echo", "history", "clear", "theme",
        "sudo", "man"
    ];

    const projectInfo = {
        "systemic-news": [
            "SYSTEMIC NEWS",
            "An automated news workflow that collects RSS stories, researches coverage and prepares structured reports.",
            "Bot source: github.com/mahehasan69/telegram-news-bot",
            "Website: systemicnews.new.tg"
        ],
        "translator": [
            "BANGLA TRANSLATOR BOT",
            "A Telegram translation project focused on translating messages into Bangla, with voice-output experiments.",
            "The source repository is private."
        ],
        "capacity-tester": [
            "WEBSITE CAPACITY TESTER",
            "A controlled HTTP load-testing project for websites you own or are authorized to test.",
            "Includes target allowlisting, test limits and performance metrics.",
            "GitHub: github.com/mahehasan69/capacity-tester"
        ]
    };

    const helpLines = [
        "PORTFOLIO TERMINAL — COMMAND REFERENCE",
        "help                  Show this command list",
        "whoami / about        Short profile and introduction",
        "skills                Skills and learning areas",
        "projects              List featured projects",
        "project <name>        Details about a project",
        "  names: systemic-news | translator | capacity-tester",
        "education             Education information",
        "focus                 Current technical interests",
        "contact / socials     Contact and social links",
        "github / linkedin     Open a public profile",
        "email                 Open an email draft",
        "neofetch              Portfolio system summary",
        "banner                Display terminal banner",
        "date / time           Show your local date or time",
        "pwd / ls              Explore the demo file system",
        "cat about.txt         Read a demo text file",
        "echo <text>           Print your own text",
        "history               Show commands entered",
        "theme                 Toggle the portfolio theme",
        "clear                 Clear terminal output",
        "man <command>         Explain a command",
        "Tip: ↑ / ↓ command history · Tab autocomplete"
    ];

    const data = {
        about: [
            "I'm a programmer and cybersecurity enthusiast who enjoys learning by building.",
            "I explore Python, Linux, automation, networking and web application security."
        ],
        whoami: [
            "MD MAHE HASAN",
            "College student | Aspiring cybersecurity professional",
            "Curious builder with an interest in secure and useful software."
        ],
        skills: [
            "SKILLS & LEARNING AREAS",
            "Python and automation",
            "Linux and command-line fundamentals",
            "Networking fundamentals",
            "Web security and bug bounty learning",
            "Git, GitHub and Telegram bot development"
        ],
        projects: [
            "FEATURED PROJECTS",
            "01  SYSTEMIC NEWS — automated news collection and publishing",
            "02  Bangla Translator Bot — Telegram translation project",
            "03  Website Capacity Tester — controlled authorized load testing",
            "Try: project systemic-news | project translator | project capacity-tester"
        ],
        education: [
            "EDUCATION",
            "Shahdoula Government College",
            "Class XI · Science",
            "Bagha, Rajshahi, Bangladesh"
        ],
        focus: [
            "CURRENT TECHNICAL INTERESTS",
            "Python automation · Linux · Networking",
            "Web application security · Bug bounty learning",
            "Building practical tools and improving software security"
        ],
        contact: [
            "CONTACT",
            "Email: mdmahemahe899@gmail.com",
            "GitHub: github.com/mahehasan69",
            "LinkedIn: md-mahe-hasan"
        ],
        socials: [
            "PUBLIC PROFILES",
            "GitHub — github.com/mahehasan69",
            "LinkedIn — linkedin.com/in/md-mahe-hasan-021a73381/"
        ]
    };

    function line(text, type = "terminal-response") {
        const p = document.createElement("p");
        p.className = type;
        p.textContent = text;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    }

    function lines(items, title = "terminal-response-title") {
        items.forEach((item, i) => line(item, i === 0 ? title : "terminal-response"));
    }

    function openExternal(url, label) {
        line("Opening " + label + " in a new tab…", "terminal-success");
        window.open(url, "_blank", "noopener,noreferrer");
    }

    function run(raw) {
        const value = raw.trim();
        if (!value) return;
        line("mahe@portfolio:~$ " + value, "terminal-command");
        history.push(value);
        historyIndex = history.length;

        const parts = value.split(/\s+/);
        const cmd = parts.shift().toLowerCase();
        const arg = parts.join(" ").trim();
        const lowerArg = arg.toLowerCase();

        if (cmd === "clear") {
            output.replaceChildren();
            return;
        }
        if (cmd === "help" || cmd === "?") return lines(helpLines);
        if (["about", "whoami", "skills", "projects", "education", "focus", "contact", "socials"].includes(cmd)) return lines(data[cmd]);
        if (cmd === "project") {
            const key = lowerArg.replace(/\s+/g, "-");
            if (!key) return line("Usage: project <systemic-news|translator|capacity-tester>", "terminal-error");
            if (projectInfo[key]) return lines(projectInfo[key]);
            return line("Project not found. Try: project systemic-news", "terminal-error");
        }
        if (cmd === "github") return openExternal("https://github.com/mahehasan69", "GitHub");
        if (cmd === "linkedin") return openExternal("https://www.linkedin.com/in/md-mahe-hasan-021a73381/", "LinkedIn");
        if (cmd === "email") return openExternal("mailto:mdmahemahe899@gmail.com", "email");
        if (cmd === "date") return line(new Date().toLocaleDateString(undefined, { weekday:"long", year:"numeric", month:"long", day:"numeric" }), "terminal-success");
        if (cmd === "time") return line(new Date().toLocaleTimeString(), "terminal-success");
        if (cmd === "pwd") return line("/home/mahe/portfolio  (demo path)");
        if (cmd === "ls") return lines(["about.txt  skills.txt  projects/  contact.txt  README.md"]);
        if (cmd === "cat") {
            if (lowerArg === "about.txt") return lines(["ABOUT.TXT"].concat(data.about));
            if (lowerArg === "skills.txt") return lines(["SKILLS.TXT"].concat(data.skills));
            if (lowerArg === "contact.txt") return lines(["CONTACT.TXT"].concat(data.contact));
            return line("File not found. Try: cat about.txt", "terminal-error");
        }
        if (cmd === "echo") return line(arg || " ");
        if (cmd === "history") {
            if (!history.length) return line("No previous commands yet.");
            return lines(history.map((item, i) => String(i + 1).padStart(2, "0") + "  " + item));
        }
        if (cmd === "banner") {
            return lines([
                " __  __    _    _   _ _____",
                "|  \\/  |  / \\  | | | | ____|",
                "| |\\/| | / _ \\ | |_| |  _|",
                "| |  | |/ ___ \\|  _  | |___",
                "|_|  |_/_/   \\_\\_| |_|_____",
                "      MAHE / PORTFOLIO"
            ]);
        }
        if (cmd === "neofetch") {
            return lines([
                "       .----.       mahe@portfolio",
                "      / .--. \\      ----------------",
                "     | |    | |     OS: Portfolio Demo",
                "      \\ '--' /      Host: GitHub Pages",
                "       '----'       Platform: " + (navigator.platform || "Web browser"),
                "                     Language: " + navigator.language,
                "                     Projects: 3",
                "                     Mode: Safe simulation"
            ]);
        }
        if (cmd === "theme") {
            document.body.classList.toggle("dark-mode");
            return line("Theme toggled for this page view.", "terminal-success");
        }
        if (cmd === "sudo") return line("Nice try 😄 This portfolio terminal has no administrator mode.", "terminal-error");
        if (cmd === "man") {
            const topic = lowerArg.split(/\s+/)[0];
            if (!topic) return line("Usage: man <command>. Example: man project", "terminal-error");
            const descriptions = {
                project:"project <name> — show details for one of the featured projects.",
                cat:"cat <file> — read a demo portfolio text file.",
                echo:"echo <text> — print text inside this simulated terminal.",
                theme:"theme — switch the portfolio color theme.",
                history:"history — list commands entered during this visit.",
                clear:"clear — remove terminal output."
            };
            return line(descriptions[topic] || "No manual entry for " + topic + ". Try help.", descriptions[topic] ? "terminal-response" : "terminal-error");
        }
        line("Command not found: " + cmd + ". Type help to see available commands.", "terminal-error");
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        run(input.value);
        input.value = "";
        input.focus();
    });

    document.querySelectorAll(".terminal-shortcuts [data-command]").forEach(button => {
        button.addEventListener("click", () => {
            run(button.dataset.command || "");
            input.focus();
        });
    });

    input.addEventListener("keydown", event => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (history.length) {
                historyIndex = Math.max(0, historyIndex - 1);
                input.value = history[historyIndex];
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            historyIndex = Math.min(history.length, historyIndex + 1);
            input.value = history[historyIndex] || "";
        } else if (event.key === "Tab") {
            const typed = input.value.trim().toLowerCase();
            if (!typed) return;
            const matches = commands.filter(command => command.startsWith(typed));
            if (matches.length === 1) {
                event.preventDefault();
                input.value = matches[0] + " ";
            }
        }
    });
})();


// Portfolio Assistant — local FAQ preview (no external AI service connected).
(() => {
    const widget = document.getElementById("portfolio-assistant");
    const toggle = document.getElementById("assistant-toggle");
    const panel = document.getElementById("assistant-panel");
    const close = document.getElementById("assistant-close");
    const form = document.getElementById("assistant-form");
    const input = document.getElementById("assistant-input");
    const messages = document.getElementById("assistant-messages");
    if (!widget || !toggle || !panel || !form || !input || !messages) return;

    function setOpen(open) {
        panel.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
        if (open) input.focus();
    }
    toggle.addEventListener("click", () => setOpen(panel.hidden));
    if (close) close.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !panel.hidden) setOpen(false);
    });

    function addMessage(text, who) {
        const bubble = document.createElement("p");
        bubble.className = "assistant-bubble " + (who === "user" ? "assistant-user" : "assistant-bot");
        bubble.textContent = text;
        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    }

    function answer(question) {
        const q = question.toLowerCase();
        if (/project|built|work|systemic|translator|capacity/.test(q))
            return "Mahe's featured projects:\n• SYSTEMIC NEWS — automated news collection, research and publishing to Telegram and a companion website.\n• Bangla Translator Bot — a Telegram project for translating messages into Bangla, with voice-output experiments.\n• Website Capacity Tester — controlled load testing for websites he owns or is authorized to test.\nExplore the project cards for repository links.";
        if (/skill|technology|tech stack|program|python|linux|security/.test(q))
            return "Mahe is learning and working with Python, Linux, networking fundamentals, web security, bug bounty research, Git and GitHub, automation, and Telegram bot development.";
        if (/education|college|study|student/.test(q))
            return "Mahe is a Class XI Science student at Shahdoula Government College in Bagha, Rajshahi, Bangladesh.";
        if (/contact|email|reach|message|linkedin|github/.test(q))
            return "Email: mdmahemahe899@gmail.com\nGitHub: github.com/mahehasan69\nLinkedIn: linkedin.com/in/md-mahe-hasan-021a73381/";
        if (/who|about|mahe|introduce|profile/.test(q))
            return "MD Mahe Hasan is a college student and aspiring cybersecurity professional who enjoys building practical projects and learning about Python, Linux, automation, networking, and web security.";
        if (/goal|future|interest|focus/.test(q))
            return "Mahe's current interests include Python automation, Linux and networking, web application security, bug bounty learning, and building useful tools.";
        if (/hello|hi|hey/.test(q))
            return "Hey there! 👋 Ask me about Mahe's projects, skills, education, interests, or contact details.";
        return "I can answer questions about Mahe's projects, skills, education, interests, and contact details. Try: “Tell me about his projects”.";
    }

    function ask(question) {
        const clean = question.trim().slice(0, 240);
        if (!clean) return;
        addMessage(clean, "user");
        addMessage(answer(clean), "bot");
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        ask(input.value);
        input.value = "";
        input.focus();
    });
    widget.querySelectorAll("[data-assistant-question]").forEach(button => {
        button.addEventListener("click", () => ask(button.getAttribute("data-assistant-question") || ""));
    });
})();


// Interactive real-world global map. Routes are illustrative, not live traffic.
(() => {
    const el = document.getElementById("global-network-map");
    if (!el || typeof L === "undefined" || el.dataset.mapReady === "true") return;
    el.dataset.mapReady = "true";

    const map = L.map(el, {
        center: [22, 35],
        zoom: 2.4,
        minZoom: 2,
        maxZoom: 9,
        scrollWheelZoom: false,
        worldCopyJump: true
    });
    const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
    });
    const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19,
        attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community'
    });
    const placeLabels = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19,
        opacity: 0.95,
        attribution: 'Labels &copy; Esri'
    });
    satellite.addTo(map);
    placeLabels.addTo(map);
    L.control.layers(
        {"Satellite imagery": satellite, "Street map": streets},
        {"Country borders & place labels": placeLabels},
        {collapsed: true, position: "topright"}
    ).addTo(map);

    const home = [24.185, 88.85]; // Bagha, Rajshahi, Bangladesh
    const nodes = [
        {name:"Dhaka, Bangladesh",coords:[23.8103,90.4125]},
        {name:"Singapore",coords:[1.3521,103.8198]},
        {name:"Dubai, UAE",coords:[25.2048,55.2708]},
        {name:"London, UK",coords:[51.5072,-0.1276]},
        {name:"Frankfurt, Germany",coords:[50.1109,8.6821]},
        {name:"Tokyo, Japan",coords:[35.6762,139.6503]},
        {name:"New York, USA",coords:[40.7128,-74.0060]},
        {name:"Sydney, Australia",coords:[-33.8688,151.2093]}
    ];

    const homeIcon = L.divIcon({
        className:"map-home-marker",
        html:'<span class="map-home-pulse"></span><span class="map-home-core"></span>',
        iconSize:[24,24],iconAnchor:[12,12]
    });
    L.marker(home,{icon:homeIcon}).addTo(map)
        .bindPopup("<strong>Mahe's home node</strong><br>Bagha, Rajshahi, Bangladesh");

    // Each route has a soft glow, a dashed signal path and a moving packet.
    const packets = [];
    nodes.forEach((node,index) => {
        const points = [home,node.coords];
        const routeColor = index % 2 === 0 ? "#22d3ee" : "#818cf8";

        const glow = L.polyline(points,{
            color:routeColor,weight:8,opacity:.12,lineCap:"round",
            interactive:false
        }).addTo(map);
        const route = L.polyline(points,{
            color:routeColor,weight:2.2,opacity:.9,
            dashArray:"5 11",lineCap:"round",
            className:"network-route-flow"
        }).addTo(map);

        const marker = L.circleMarker(node.coords,{
            radius:5,weight:2,color:"#082f49",fillColor:"#a5f3fc",
            fillOpacity:1,className:"network-node-pulse"
        }).addTo(map);
        marker.bindPopup("<strong>"+node.name+"</strong><br>Illustrative network endpoint");
        route.bindTooltip("Illustrative route to "+node.name);

        const packetIcon = L.divIcon({
            className:"network-packet-marker",
            html:'<span class="network-packet-core"></span>',
            iconSize:[12,12],iconAnchor:[6,6]
        });
        const packet = L.marker(points[0],{
            icon:packetIcon,interactive:false,keyboard:false,zIndexOffset:500
        }).addTo(map);
        packets.push({
            marker:packet,
            from:L.latLng(home[0],home[1]),
            to:L.latLng(node.coords[0],node.coords[1]),
            phase:(index / nodes.length) * .82,
            speed:.000035 + (index % 3) * .000004
        });
    });

    // Animate signal packets along the illustrative paths. Pause when tab is hidden.
    let previousFrame = 0;
    function animateNetwork(now) {
        if (document.hidden) {
            previousFrame = now;
            requestAnimationFrame(animateNetwork);
            return;
        }
        const delta = previousFrame ? Math.min(now - previousFrame,50) : 16;
        previousFrame = now;
        packets.forEach(packet => {
            packet.phase += packet.speed * delta;
            if (packet.phase > 1) packet.phase -= 1;
            const p = packet.phase;
            const lat = packet.from.lat + (packet.to.lat - packet.from.lat) * p;
            const lng = packet.from.lng + (packet.to.lng - packet.from.lng) * p;
            packet.marker.setLatLng([lat,lng]);
        });
        requestAnimationFrame(animateNetwork);
    }
    requestAnimationFrame(animateNetwork);

    window.portfolioGlobalMap = map;
    setTimeout(() => map.invalidateSize(),250);
    window.addEventListener("resize",() => map.invalidateSize());
})();


// Visitor location: explicit opt-in, displayed only in this browser.
(() => {
    const start = document.getElementById("visitor-location-start");
    const stop = document.getElementById("visitor-location-stop");
    const status = document.getElementById("visitor-location-status");
    const mapElement = document.getElementById("global-network-map");
    if (!start || !stop || !status || !mapElement) return;

    let watchId = null;
    let visitorMarker = null;
    let accuracyCircle = null;
    let mapInstance = null;

    function setStatus(message) { status.textContent = message; }

    function stopSharing() {
        if (watchId !== null && navigator.geolocation) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
        stop.hidden = true;
        start.hidden = false;
        setStatus("Location sharing stopped. Your location was not saved or sent to a server.");
    }

    start.addEventListener("click", () => {
        if (!("geolocation" in navigator)) {
            setStatus("This browser does not support location sharing.");
            return;
        }
        if (!window.isSecureContext) {
            setStatus("Location access requires a secure HTTPS connection.");
            return;
        }
        if (watchId !== null) return;

        setStatus("Waiting for your browser's location permission…");
        navigator.geolocation.getCurrentPosition(position => {
            const point = [position.coords.latitude, position.coords.longitude];
            const accuracy = Math.max(20, position.coords.accuracy || 100);
            if (typeof L === "undefined") {
                setStatus("The map is not ready. Please reload and try again.");
                return;
            }
            mapInstance = window.portfolioGlobalMap || null;
            if (!mapInstance) {
                setStatus("The map is still loading. Please try again in a moment.");
                return;
            }

            const icon = L.divIcon({
                className: "visitor-location-marker",
                html: '<span class="visitor-location-pulse"></span><span class="visitor-location-core"></span>',
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            });
            if (!visitorMarker) {
                visitorMarker = L.marker(point, {icon, zIndexOffset: 1000}).addTo(mapInstance);
                accuracyCircle = L.circle(point, {
                    radius: accuracy,
                    color: "#38bdf8",
                    weight: 1,
                    fillColor: "#38bdf8",
                    fillOpacity: .12
                }).addTo(mapInstance);
            } else {
                visitorMarker.setLatLng(point);
                accuracyCircle.setLatLng(point).setRadius(accuracy);
            }
            visitorMarker.bindPopup("<strong>Your current location</strong><br>Visible only in this browser.");
            mapInstance.setView(point, Math.max(mapInstance.getZoom(), 8), {animate: true});
            setStatus("Your location is shown on this map only. Accuracy: about " + Math.round(accuracy) + " m.");
            start.hidden = true;
            stop.hidden = false;

            watchId = navigator.geolocation.watchPosition(next => {
                const nextPoint = [next.coords.latitude, next.coords.longitude];
                const nextAccuracy = Math.max(20, next.coords.accuracy || 100);
                visitorMarker.setLatLng(nextPoint);
                accuracyCircle.setLatLng(nextPoint).setRadius(nextAccuracy);
                setStatus("Live location active in this browser · accuracy about " + Math.round(nextAccuracy) + " m.");
            }, error => {
                const messages = {
                    1: "Location permission was denied. You can allow it in your browser settings.",
                    2: "Your current location is unavailable. Please try again.",
                    3: "Location request timed out. Please try again."
                };
                setStatus(messages[error.code] || "Unable to update your location.");
                stopSharing();
            }, {enableHighAccuracy: true, maximumAge: 5000, timeout: 15000});
        }, error => {
            const messages = {
                1: "Location permission was denied. Nothing was collected.",
                2: "Your current location is unavailable. Please try again.",
                3: "Location request timed out. Please try again."
            };
            setStatus(messages[error.code] || "Unable to access your location.");
        }, {enableHighAccuracy: true, maximumAge: 5000, timeout: 15000});
    });

    stop.addEventListener("click", stopSharing);
    window.addEventListener("pagehide", stopSharing);
})();
