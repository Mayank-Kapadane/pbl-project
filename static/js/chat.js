// script.js
$(document).ready(function () {
    const responses =  {
        "what is ai in agriculture?": "AI in agriculture refers to the use of artificial intelligence technologies to improve farming practices, enhance crop yields, and optimize resource use.",
        "how does ai help farmers?": "AI helps farmers by providing data-driven insights for decision-making, automating tasks, predicting weather patterns, and monitoring crop health.",
        "what are the benefits of using ai in agriculture?": "The benefits include increased efficiency, reduced costs, better pest management, improved crop yields, and enhanced sustainability.",
        "what technologies are used in agricultural ai?": "Technologies include machine learning, computer vision, drones, IoT sensors, and big data analytics.",
        "how can ai improve crop yields?": "AI can analyze soil health, weather data, and crop conditions to provide tailored recommendations for irrigation, fertilization, and pest control.",
        "what is precision agriculture?": "Precision agriculture is an approach that uses AI and technology to monitor and manage field variability in crops to optimize yields.",
        "can ai predict weather for farming?": "Yes, AI can analyze historical weather data and current conditions to predict future weather patterns, helping farmers plan their activities accordingly.",
        "what role do drones play in agricultural ai?": "Drones equipped with cameras and sensors can monitor crop health, assess irrigation needs, and identify pest infestations from the air.",
        "how does machine learning work in agriculture?": "Machine learning algorithms analyze large datasets from sensors and historical records to recognize patterns and make predictions about crop performance.",
        "what is the future of ai in agriculture?": "The future includes more advanced AI technologies, greater automation, and improved data analytics to support sustainable farming practices.",
        "how is ai used in pest management?": "AI can identify pest infestations through image recognition and help farmers implement targeted treatments, reducing chemical usage.",
        "can ai help in water management?": "Yes, AI can analyze soil moisture levels and weather forecasts to optimize irrigation schedules and reduce water waste.",
        "what are some challenges of using ai in agriculture?": "Challenges include the high cost of technology, the need for technical expertise, data privacy concerns, and the integration of new systems with existing practices.",
        "how does ai contribute to sustainable farming?": "AI promotes sustainable practices by optimizing resource use, reducing waste, and minimizing the environmental impact of farming activities.",
        "what are some examples of ai applications in agriculture?": "Examples include autonomous tractors, smart irrigation systems, crop monitoring systems, and AI-driven farm management software.",
        "is there any research on ai in agriculture?": "Yes, many universities and research institutions are exploring AI applications in agriculture to enhance productivity and sustainability.",
        "how does ai assist in supply chain management for agriculture?": "AI can forecast demand, optimize logistics, and improve inventory management, leading to more efficient supply chains.",
        "what is crop monitoring?": "Crop monitoring involves using AI and technology to track the health and growth of crops through sensors and imaging techniques.",
        "can ai reduce labor costs in agriculture?": "AI technologies like automation and robotics can perform repetitive tasks, reducing the need for manual labor and associated costs.",
        "how can farmers get started with ai?": "Farmers can start by educating themselves about available technologies, collaborating with tech companies, and gradually implementing AI solutions in their operations.",
        "what are the economic impacts of ai in agriculture?": "AI can lead to increased profitability for farmers through improved yields and reduced operational costs, positively impacting the agricultural economy.",
        "are there any ethical concerns with ai in agriculture?": "Yes, concerns include data privacy, the potential for job displacement, and the need for equitable access to technology among farmers.",
        "what are some successful case studies of ai in agriculture?": "Success stories include farms that have significantly increased yields using AI-powered analytics and companies developing AI-driven pest control solutions.",
        "how can ai help with soil health?": "AI can analyze soil data to recommend crop rotations, fertilization schedules, and cover cropping practices to enhance soil health.",
        "what role does big data play in agricultural ai?": "Big data provides the vast datasets needed for training AI models, enabling more accurate predictions and better decision-making."
    };


    $('#send-btn').on('click', function () {
        let userInput = $('#user-input').val().toLowerCase();
        if (userInput) {
            appendMessage(userInput, 'user');
            setTimeout(() => {
                getBotResponse(userInput);
            }, 500);  // Simulate delay
        }
        $('#user-input').val('');
    });

    function appendMessage(message, sender) {
        $('#chat-log').append(`<div class="message ${sender}">${message}</div>`);
        $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
    }

    function getBotResponse(userInput) {
        let botResponse = responses[userInput] || "I'm sorry, I'm still learning and can't answer that right now.";
        appendMessage(botResponse, 'bot');
    }
});
