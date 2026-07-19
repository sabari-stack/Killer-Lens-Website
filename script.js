function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let text =
`*New Booking Enquiry*

 Name: ${name}
 Phone: ${phone}
 Email: ${email}
Message: ${message}`;

    let whatsapp = "https://wa.me/918838144076?text=" + encodeURIComponent(text);

    window.open(whatsapp, "_blank");
}