const experiences = {
    paris: {
        title: "Experience in Paris",
        text: "Paris, the city of love, offers stunning monuments like the Eiffel Tower, exquisite cuisine, and incredible art at the Louvre. Don’t miss out on a Seine river cruise at sunset!"
    },
    tokyo: {
        title: "Experience in Tokyo",
        text: "Tokyo is a blend of ultra-modern skyscrapers and ancient temples. Experience the vibrant culture, world-class sushi, and the iconic Shibuya Crossing. Be sure to visit Mount Fuji for breathtaking views."
    },
    newyork: {
        title: "Experience in New York",
        text: "New York is known as the city that never sleeps. From the Statue of Liberty to Times Square, the energy is infectious. Visit Central Park, take in a Broadway show, and eat pizza like a New Yorker!"
    }
};

function showExperience(place) {
    const experienceSection = document.getElementById('experience');
    const title = document.getElementById('experience-title');
    const text = document.getElementById('experience-text');
    
    title.innerText = experiences[place].title;
    text.innerText = experiences[place].text;

    experienceSection.style.display = 'block';
}
