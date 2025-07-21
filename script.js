 let timer;
        let timeLeft = 60;
        const paragraphs = [
            "Every great coder starts as a beginner, struggling with bugs and logic errors. But remember—every mistake is a step toward mastery.\n\nCoding isn’t just about writing lines of code; it’s about solving problems, building ideas, and pushing your limits. The frustration you feel now will turn into satisfaction when your code finally runs perfectly. Every bug you fix is a lesson learned. Every error you debug makes you sharper.\n\nThe greatest programmers weren’t born with all the answers; they built their skills through consistency, practice, and persistence. So, don’t fear challenges—embrace them. Whether it’s a small script or a big project, keep coding. Keep improving. Keep moving forward.\n\nYour journey is just beginning, and your future in coding is bright. Keep typing, and success will follow. 🚀",
            "Programming is a skill that requires patience and practice. By consistently improving your typing speed and accuracy, you can become a more efficient coder. Remember, the key to mastering any skill is persistence and dedication.",
            "Typing quickly and accurately is an essential skill for developers. The faster you type, the more productive you become. So keep practicing and pushing your limits every day!",
            "Great coders are not born overnight. They dedicate time and effort to learning, making mistakes, and improving their skills. Keep going, and never give up!"
        ];
        let correctText = "";

        function startChallenge() {
            timeLeft = 60;
            document.getElementById('countdown').innerText = timeLeft;
            correctText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
            document.getElementById('textToType').innerText = correctText;
            document.getElementById('typingInput').value = "";
            document.getElementById('output').innerHTML = "";
            document.getElementById('typingInput').focus();
            clearInterval(timer);
            timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert("Time's up! Great job!");
                } else {
                    timeLeft--;
                    document.getElementById('countdown').innerText = timeLeft;
                }
            }, 1000);
        }

        document.getElementById('typingInput').addEventListener('input', function() {
            const input = this.value;
            let outputHTML = "";
            
            for (let i = 0; i < correctText.length; i++) {
                let charClass = "";
                if (i < input.length) {
                    charClass = input[i] === correctText[i] ? "correct" : "wrong";
                }
                outputHTML += `<span class="highlight ${charClass}">${correctText[i]}</span>`;
            }
            
            document.getElementById('output').innerHTML = outputHTML;
        });
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const themeIcon = document.querySelector('.theme-toggle');
            themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🔆';
        }