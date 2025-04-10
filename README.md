# 🎓 Student ID Card Generator

An online **Student ID Card Generator** web application built with **React.js**, enabling users to generate, preview, and download student ID cards — all without any backend!

---
## 🚀 Features
- 🖥️ Clean and responsive UI built with TailwindCSS
- 📋 Form to collect student details
- 💾 Data stored locally using `localStorage`
- 🆔 Dynamic ID Card generation
- 📎 QR Code with embedded student data (in JSON format)
- 🎨 Two downloadable ID card design options
- 📥 Export ID card as PNG
- ☁️ Deployed on AWS EC2 with Nginx reverse proxy

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **QR Code**: qrcode.react
- **Image Export**: html-to-image
- **Storage**: localStorage
- **Deployment**: AWS EC2
- **Web Server**: Nginx (Reverse Proxy)

---

## 🧠 Thought Process

The main goal was to build a fully functional Student ID Card generator without relying on a backend. Here's how it was approached:

1. **UI/UX Design**  
   - Designed a modern interface using TailwindCSS  
   - Took design inspiration from Pinterest and similar platforms  
   - Created key pages: Home, Generate, My ID, and Design views  

2. **Routing Setup**  
   - Configured routes using `react-router-dom`:  
     - `/` – Home  
     - `/generate` – Student form  
     - `/my-IdCard` – Preview ID  
     - `/IdCard-generated` – Confirmation  
     - `/design1`, `/design2` – Design templates  

3. **Form and LocalStorage**  
   - User inputs are collected via a form  
   - Data is saved in `localStorage` to allow seamless flow without backend  

4. **ID Card Preview and QR Code**  
   - ID cards dynamically display user input  
   - QR Code on the card reveals student data in JSON format when scanned  

5. **Download as PNG**  
   - Used `html-to-image` to convert the ID card into a PNG  
   - Users can choose from two design layouts  

6. **Deployment**  
   - Hosted on **AWS EC2**  
   - Configured **Nginx** as a reverse proxy to map the correct ports and ensure proper routing  

---

## 📸 Screenshots

> _Add screenshots here if available (e.g., home page, ID preview, download section)_
![Screenshot (615)](https://github.com/user-attachments/assets/d6ffc092-9ced-48d4-b99e-02b8f68b34c9)
![Screenshot (616)](https://github.com/user-attachments/assets/3fd24a6a-6ecb-49df-8e2a-acbfc3200215)
![Screenshot (617)](https://github.com/user-attachments/assets/ea4e630a-8afc-4cca-97e2-98feb8eb4cbe)
![Screenshot (620)](https://github.com/user-attachments/assets/c48181f9-8518-4353-b5f0-6ed9ff728b58)

---

