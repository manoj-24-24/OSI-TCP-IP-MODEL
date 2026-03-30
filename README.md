
# 📡 OSI vs TCP/IP Model Simulation using WhatsApp Message

A **neon-glow animated visualization** of how a message travels through the **OSI Model** and **TCP/IP Model**, using a **WhatsApp-style chat example**.

This project demonstrates **data encapsulation layer-by-layer** as a message moves through networking layers.

---

# 🎬 Demo Concept

User sends:

Hello

The message transforms layer-by-layer:

Application → Hello
Presentation → [Encrypted] Hello
Session → [Session][Encrypted] Hello
Transport → [TCP Header][Session][Encrypted] Hello
Network → [IP Header][TCP Header]...
Data Link → [Frame Header]...
Physical → Binary Bits

---

# ✨ Features

✅ Neon glow layer transitions
✅ WhatsApp-style chat UI
✅ Real encapsulation simulation
✅ OSI and TCP/IP models shown side-by-side
✅ Dynamic message transformation
✅ Beginner-friendly visualization
✅ Pure HTML, CSS, JavaScript (no frameworks)

---

# 🧠 Networking Concepts Covered

This project demonstrates:

* OSI Model (7 Layers)
* TCP/IP Model (4 Layers)
* Data Encapsulation
* Message Transmission Flow
* Binary Conversion (Physical Layer)
* Protocol Layer Mapping

---

# 📂 Project Structure

```
osi-tcpip-simulation/
│
├── index.html      # Main HTML structure
├── style.css       # Neon styling and layout
├── script.js       # Animation logic
└── README.md       # Project documentation
```

---

# 🧪 Example Flow Simulation

When clicking:

▶ Send "Hello"

The animation shows:

```
Hello
↓
Encrypted
↓
Session Added
↓
TCP Header Added
↓
IP Header Added
↓
Frame Created
↓
Binary Transmission
```
---

# 🛠 Tech Stack

Built using:

* HTML5
* CSS3
* JavaScript (Vanilla JS)

No frameworks used.

---

Inspired by the need to make **network protocols easier to visualize** using real-world messaging examples.

