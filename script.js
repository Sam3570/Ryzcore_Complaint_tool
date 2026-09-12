document.getElementById("supportForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const model = document.getElementById("model").value.trim();
    const problem = document.getElementById("problem").value.trim();

    // Replace with your company's WhatsApp number
    // India example: +91 9876543210 → 919876543210
    const companyWhatsAppNumber = "9198262 00580";

    const message = `Hello Support Team,

I would like to report a product purchase problem.

Customer Details:
Name: ${name}
Email: ${email}
Mobile Number: ${phone}

Product Details:
Product Model: ${model}

Product Problem:
${problem}

Please assist me with this issue.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${companyWhatsAppNumber}?text=${encodedMessage}`;

    const btn = document.getElementById("submitBtn");
    const btnText = btn.querySelector("span");
    btn.disabled = true;
    btnText.textContent = "Opening WhatsApp…";

    window.open(whatsappURL, "_blank");

    setTimeout(function () {
        btn.disabled = false;
        btnText.textContent = "Submit & Contact on WhatsApp";
    }, 2500);
});
