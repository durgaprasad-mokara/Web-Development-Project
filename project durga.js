function consultationForm() {
    const form = document.getElementById('consultationForm');
    const captchaCodeEl = document.getElementById('captchaCode');
    const captchaInput = form.querySelector('#captchaInput');

    // For demo, captcha is fixed "1514"
    const captchaValue = '1514';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        if (!form.name.value.trim()) {
            alert('Please enter your name.');
            form.name.focus();
            return;
        }
        if (!form.mobile.value.trim()) {
            alert('Please enter your mobile number.');
            form.mobile.focus();
            return;
        }
        // Mobile number pattern check (simple)
        const mobilePattern = /^\+?\d{7,15}$/;
        if (!mobilePattern.test(form.mobile.value.trim())) {
            alert('Please enter a valid mobile number (7 to 15 digits, optional +).');
            form.mobile.focus();
            return;
        }
        if (!form.captchaInput.value.trim()) {
            alert('Please enter the captcha.');
            captchaInput.focus();
            return;
        }
        if (form.captchaInput.value.trim() !== captchaValue) {
            alert('Captcha is incorrect. Please try again.');
            captchaInput.focus();
            return;
        }
        if (!form.agree.checked) {
            alert('You must agree to the Terms and Privacy Policy.');
            form.agree.focus();
            return;
        }

        // If all good, simulate submission
        alert('Thank you for booking a free consultation! We will contact you soon.');
        form.reset();
    });
};

const treatments = [{
        imgSrc: "https://storage.googleapis.com/a1aa/image/b96d7262-7638-4571-557a-b9a7aed29b6b.jpg",
        imgAlt: "Illustration of a tooth cross-section with an orange handle dental tool inside the root canal",
        title: "Root Canal Treatment",
        description: "Ideal for infected or damaged tooth",
        typesTitle: "Types of RCT",
        typesList: [
            "Root Canal Treatment",
            "Split RCT",
            "Split RCT with rubber dam",
            "Split RCT with laser",
        ],
        priceLabel: "Starting Price",
        price: "₹ 19,999",
        buttonText: "Get Free Consultation",
    },
    {
        imgSrc: "https://storage.googleapis.com/a1aa/image/fb36b4b6-59e2-4d96-2340-2827debccbc6.jpg",
        imgAlt: "Illustration of a tooth cross-section with a blue handle dental tool inside the root canal",
        title: "Re-Root Canal Treatment",
        description: "Ideal issues that persist or recur after an initial root canal treatment",
        typesTitle: "Types of RCT",
        typesList: [
            "Re-RCT with rubber dam",
            "Re-RCT laser specialist",
            "e-RCT with retrieval of old RCT filling",
        ],
        priceLabel: "Starting Price",
        price: "₹ 19,999",
        buttonText: "Get Free Consultation",
    },
];

// Function to create a card element
function createCard(treatment) {
    const card = document.createElement("div");
    card.className =
        "flex-1 bg-[#f0e6db] rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6";

    const img = document.createElement("img");
    img.src = treatment.imgSrc;
    img.alt = treatment.imgAlt;
    img.className = "w-[200px] h-[160px] object-contain rounded-md flex-shrink-0";
    img.width = 200;
    img.height = 160;

    const content = document.createElement("div");
    content.className = "text-left max-w-md";

    const title = document.createElement("h3");
    title.className = "font-semibold text-sm md:text-base mb-1";
    title.textContent = treatment.title;

    const desc = document.createElement("p");
    desc.className = "text-xs md:text-sm mb-2";
    desc.textContent = treatment.description;

    const typesTitle = document.createElement("p");
    typesTitle.className = "font-semibold text-xs md:text-sm mb-1";
    typesTitle.textContent = treatment.typesTitle;

    const ul = document.createElement("ul");
    ul.className = "list-disc list-inside text-xs md:text-sm text-gray-700 mb-3 space-y-0.5";
    treatment.typesList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    const priceLabel = document.createElement("p");
    priceLabel.className = "text-[10px] md:text-xs text-[#d46a2e] font-semibold mb-1";
    priceLabel.textContent = treatment.priceLabel;

    const price = document.createElement("p");
    price.className = "font-bold text-sm md:text-base mb-3";
    price.textContent = treatment.price;

    const button = document.createElement("button");
    button.type = "button";
    button.className =
        "bg-[#f68b1e] text-white text-xs md:text-sm font-semibold rounded-full px-4 py-1.5 hover:bg-[#d46a2e] transition";
    button.textContent = treatment.buttonText;

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(typesTitle);
    content.appendChild(ul);
    content.appendChild(priceLabel);
    content.appendChild(price);
    content.appendChild(button);

    card.appendChild(img);
    card.appendChild(content);

    return card;
}

// Inject cards into container
const container = document.getElementById("treatment-cards");
treatments.forEach((treatment) => {
    container.appendChild(createCard(treatment));
});