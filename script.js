document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if(cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }

            if(cursorOutline) {
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 200, fill: "forwards" });
            }
        });

        const interactables = document.querySelectorAll('a, button, .tilt-card, .hover-scale');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

    // --- Typing Effect ---
    const roles = ["Sujeet Kumar", "a Data Scientist", "a Security Analyst"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingText = document.querySelector('.typing-text');
    
    function typeEffect() {
        if(!typingText) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    setTimeout(typeEffect, 1500);

    // --- Navbar Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Animations (Reveal & Progress Bars & Timeline) ---
    const revealElements = document.querySelectorAll('.reveal');
    const progressFills = document.querySelectorAll('.progress-fill');
    const numVals = document.querySelectorAll('.num-val');
    const timelineLine = document.querySelector('.timeline-line-anim');
    const timelineSection = document.querySelector('.education');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Regular Reveal
                if(entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('active');
                }
                
                // Progress Bars Animation
                if(entry.target.classList.contains('skills')) {
                    progressFills.forEach(fill => {
                        fill.style.width = fill.getAttribute('data-width');
                        fill.style.transition = "width 1.5s cubic-bezier(0.25, 1, 0.5, 1) 0.5s";
                    });
                    

                }
                
                // Timeline Animation
                if(entry.target.classList.contains('education') && timelineLine) {
                    timelineLine.style.height = "100%";
                }
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => scrollObserver.observe(el));
    const skillsSection = document.querySelector('.skills');
    if(skillsSection) scrollObserver.observe(skillsSection);
    if(timelineSection) scrollObserver.observe(timelineSection);


    // --- 3D Tilt Effect on Cards ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Smoother, subtle rotation
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none'; // Remove transition for smooth tracking
            });
        });
    }

    // --- Background Particle Canvas (Neural Network) ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > width || this.x < 0) this.speedX *= -1;
                if (this.y > height || this.y < 0) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(0, 218, 243, 0.3)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const numberOfParticles = Math.floor((width * height) / 12000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 218, 243, ${0.1 - distance/1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // =============================================
    //  AI CHATBOT (Gemini API)
    // =============================================
    const GEMINI_API_KEY = 'AIzaSyBIkxxxtTlwB1fKdTZ45i2PmPyYr3biXkI';
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const SUJEET_RESUME_CONTEXT = `You are Sujeet Kumar's personal AI assistant on his portfolio website. You answer questions about Sujeet ONLY based on the information below. Be conversational, professional, concise, and friendly. Use bullet points or short paragraphs. If someone asks something unrelated to Sujeet, politely redirect them. If you don't know something specific, say so honestly rather than inventing details. Use emojis sparingly to keep it engaging.

=== SUJEET KUMAR's RESUME ===

CONTACT:
- Phone: +91 7004072847
- Email: sujeetk.work@gmail.com
- Location: New Delhi, Delhi, India

PROFESSIONAL SUMMARY:
A Master of Computer Science candidate with hands-on experience in predictive modeling, data analytics, algorithm design and marketing. Proven ability to develop and deploy machine learning solutions using Python, SQL, and Scikit-Learn. Skilled in deriving actionable business insights from large datasets and end-to-end exploratory data analysis. Combines technical proficiency with team leadership and cybersecurity experience.

EDUCATION:
1. Master of Computer Science (Expected 2026) - Department of Computer Science, University of Delhi
   Coursework: Machine Learning, Deep Learning, Artificial Intelligence, Cloud Computing.
2. BSc Physical Science with Computer Science (2021-2024) - Acharya Narendra Dev College, University of Delhi
   Coursework: Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks.

SKILLS:
- Languages & Core: Python, SQL, C++, JavaScript, HTML/CSS
- Data Science & ML: Scikit-Learn, Predictive Modeling, Data Cleaning, EDA, Power BI, Tableau
- Techniques: Regression, Classification, Decision Trees, Data Visualization, Algorithm Design
- Soft Skills: Problem Solving, Cross-functional Collaboration, Strategic Thinking, Project Management

EXPERIENCE:
1. Data Science Intern at Unified Mentor (June 2025 - July 2025, Remote)
   - Executed end-to-end EDA and data cleaning on large datasets to improve model accuracy and data quality.
   - Developed and validated machine learning models, applying statistical concepts to real-world data problems.
   - Derived insights from structured data to support data-driven decision-making processes.

2. Cybersecurity Intern at Center of Development of Advanced Computing / CDAC (May 2025 - July 2025, Noida, UP)
   - Gained hands-on experience in securing digital assets, aligning with risk and fraud prevention methodologies.
   - Analyzed potential security vulnerabilities, enhancing understanding of risk mitigation strategies relevant to financial data protection.

3. Team Leader at Viral Fission (May 2023 - May 2026, Mumbai, Maharashtra)
   - Led a community team, structuring business findings and driving engagement strategies.
   - Demonstrated leadership and communication skills.

PROJECTS:
1. Customer Trends & Spending Analysis (Python, SQL, Power BI)
   - Executed end-to-end analysis of transactional data to uncover spending patterns, customer segments, and product preferences.
   - Leveraged SQL for data extraction and Power BI for visualization, presenting structured business findings.

2. Laptop Price Predictor (Machine Learning, Python, Streamlit)
   - Developed a predictive model to estimate market prices based on technical specifications using Scikit-Learn.
   - Deployed as a live web application using Streamlit.

3. CreatorCalc – Algorithmic Pricing Dashboard (JavaScript, Algorithms)
   - Designed a custom weighted algorithm to calculate fair market rates for content creators.
   - Built a responsive dashboard with real-time lead capture using PostgreSQL.

4. Elite Influencer – Marketing Marketplace (Full Stack)
   - Developed a marketplace platform connecting influencers with brands, facilitating optimized marketing campaigns.

CERTIFICATIONS:
- Data Analytics Course – PW Skills & Microsoft
- Introduction to Career Skills in Data Analytics – LinkedIn
- Data Analytics Job Simulation – Deloitte Australia
- Prompt Design in Vertex AI Skill Badge – Google

LEADERSHIP & INVOLVEMENT:
- Team Leader for Youth Community Platform Viral Fission
- Campus Ambassador for Realme India and 91 Mobiles
- Elite Community Member 91 Mobiles

=== END OF RESUME ===

Remember: Only answer based on the above information. Be helpful and represent Sujeet professionally.`;

    let conversationHistory = [];

    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatWindow = document.getElementById('ai-chat-window');
    const chatClose = document.getElementById('ai-chat-close');
    const chatInput = document.getElementById('ai-chat-input');
    const chatSend = document.getElementById('ai-chat-send');
    const chatMessages = document.getElementById('ai-chat-messages');

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
            if (chatWindow.classList.contains('open')) {
                chatInput.focus();
            }
        });

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        // Send on Enter key
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        chatSend.addEventListener('click', sendMessage);

        // Suggestion chips
        document.querySelectorAll('.ai-suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.getAttribute('data-q');
                chatInput.value = question;
                sendMessage();
                // Remove suggestion chips after clicking
                const suggestionsContainer = chip.parentElement;
                if (suggestionsContainer) suggestionsContainer.remove();
            });
        });
    }

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message
        appendMessage(text, 'user');
        chatInput.value = '';

        // Add to conversation history
        conversationHistory.push({ role: 'user', parts: [{ text }] });

        // Show typing indicator
        const typingEl = showTypingIndicator();

        // Call Gemini API
        callGeminiAPI(text)
            .then(response => {
                removeTypingIndicator(typingEl);
                appendMessage(response, 'ai');
                conversationHistory.push({ role: 'model', parts: [{ text: response }] });
            })
            .catch(err => {
                removeTypingIndicator(typingEl);
                const errorMsg = err.message.includes('API key')
                    ? '⚠️ API key not configured. The site owner needs to add a Gemini API key.'
                    : '⚠️ Sorry, something went wrong. Please try again.';
                appendMessage(errorMsg, 'ai', true);
            });
    }

    function appendMessage(text, sender, isError = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;

        if (sender === 'ai') {
            msgDiv.innerHTML = `
                <div class="ai-msg-avatar"><span class="material-symbols-outlined">smart_toy</span></div>
                <div class="ai-msg-bubble ${isError ? 'ai-error-bubble' : ''}">${formatMessage(text)}</div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="ai-msg-bubble">${escapeHtml(text)}</div>
            `;
        }

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function formatMessage(text) {
        // Convert markdown-like formatting to HTML
        let formatted = escapeHtml(text);
        // Bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Bullet points
        formatted = formatted.replace(/^[-•]\s+(.+)/gm, '<li>$1</li>');
        if (formatted.includes('<li>')) {
            formatted = formatted.replace(/(<li>.*<\/li>)/gs, '<ul style="margin:6px 0;padding-left:16px;">$1</ul>');
        }
        // Line breaks
        formatted = formatted.replace(/\n/g, '<br>');
        return formatted;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-typing-indicator';
        typingDiv.innerHTML = `
            <div class="ai-msg-avatar"><span class="material-symbols-outlined">smart_toy</span></div>
            <div class="ai-typing-dots"><span></span><span></span><span></span></div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return typingDiv;
    }

    function removeTypingIndicator(el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }

    async function callGeminiAPI(userMessage) {
        if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
            throw new Error('API key not configured');
        }

        const requestBody = {
            system_instruction: {
                parts: [{ text: SUJEET_RESUME_CONTEXT }]
            },
            contents: conversationHistory
        };

        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `API Error: ${response.status}`);
        }

        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiText) {
            throw new Error('No response from AI');
        }

        return aiText;
    }

});
