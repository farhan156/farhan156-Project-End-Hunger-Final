        const feedHopeText = "Feed Hope,";
        const endHungerText = "End Hunger";

        const feedHopeElement = document.getElementById("typewriter-feed-hope");
        const endHungerElement = document.getElementById("typewriter-end-hunger");

        function typeWriter(text, element, speed) {
            let index = 0;
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }
            element.textContent = ""; 
            type();
        }

        typeWriter(feedHopeText, feedHopeElement, 100);

        setTimeout(() => {
            typeWriter(endHungerText, endHungerElement, 100);
        }, feedHopeText.length * 100); 