# QR Code Generator 🖼️🔗

A simple web-based **QR Code Generator** that allows users to generate QR codes from any text or URL. This project uses JavaScript and `qrcode.js` to dynamically generate QR codes in the browser.

## 🚀 Features
- Generate QR codes instantly based on user input.
- Fully responsive and works in any modern web browser.
- Uses **qrcode.js** to handle QR code generation.
- Clean and minimalistic UI.
- No backend required – everything runs in the browser.

## 🛠️ Technologies Used
- **HTML5**: Structure of the webpage.
- **CSS3**: Styling and layout.
- **JavaScript**: Handles QR code generation logic.
- **qrcode.js**: Library used to generate QR codes.

## 📌 Installation & Usage
No installation required! Just open the `index.html` file in your browser.

### 💻 Running the Project Locally
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/QRGenerator.git
   cd QRGenerator
2. **Open```index.html``` in your browser:**
   * Simply **double-click** the file to open it.
   * Or use a local server:
   ```
   npx http-server
   ```
   Then visit ```http://localhost:8080```.
3. **Enter a URL or text** and click **"Generate QR"** to create your QR code.
# **📸 Screenshot**
__(Replace with an actual screenshot of the project)__
# **📂 Project Structure**
```
QRGenerator/
│── node_modules/   # (If using a package manager, not needed for this project)
│── estilos.css     # Styling for the project
│── index.html      # Main HTML file
│── app.js          # JavaScript logic
│── qr.png          # Generated QR image (ignored in Git)
│── .gitignore      # Git ignore file
│── package.json    # (If applicable)
│── README.md       # Project documentation
```
# **❗ Troubleshooting**
* **Error:** ```document is not defined```: Ensure you are opening ```index.html``` in a browser, not running ```node app.js```.
* **QR code not appearing?** Make sure ```qrcode.js``` is properly loaded from the CDN.

# **🤝 Contributing**
Feel free to fork this repository and submit a pull request with improvements!

# **📜 License**
This project is licensed under the MIT License. Feel free to use and modify it.
