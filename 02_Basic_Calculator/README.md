# 🧮 Basic Calculator

A simple and responsive web-based calculator built using HTML, CSS, and JavaScript.  
It performs basic arithmetic operations like addition, subtraction, multiplication, division, percentage, clear, and delete functions.

---

## 🚀 Features

- Addition, Subtraction, Multiplication, Division
- Percentage (%) calculation
- Clear All (AC)
- Delete last entry (C)
- Decimal support
- Clean and simple UI
- Easy to use button-based interaction

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## ⚙️ How It Works

- All buttons are selected using `querySelectorAll`
- Click events detect which button is pressed
- Based on the button value, different functions run:

### 🔹 Button Logic
- `AC` → Clears the display
- `C` → Deletes last character
- `=` → Evaluates the expression using `eval()`
- `%` → Converts current value into percentage
- Numbers/operators → Appended to the display

---

👨‍💻 Author

Mohammed Tosif