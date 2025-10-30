// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('United Assistance Foundation Lanka - App loaded');
    
    // Initialize projects data
    const projects = [
        {
            title: "Clean Water Initiative",
            location: "Central Province",
            image: "http://static.photos/blue/640x360/1",
            description: "Providing clean drinking water to rural communities",
            outcomes: "10,000+ beneficiaries, 50+ water purification systems installed",
            date: "2023",
            impact: "Reduced waterborne diseases by 80%"
        },
        {
            title: "Education for All",
            location: "Eastern Province",
            image: "http://static.photos/education/640x360/2",
            description: "Building schools and providing educational materials",
            outcomes: "5 new schools constructed, 2,000+ students enrolled",
            date: "2022",
            impact: "Literacy rate increased by 35%"
        },
        {
            title: "Healthcare Outreach",
            location: "Northern Province",
            image: "http://static.photos/medical/640x360/3",
            description: "Mobile medical camps and health education programs",
            outcomes: "50,000+ patients treated, 100+ medical camps conducted",
            date: "2023",
            impact: "Infant mortality reduced by 25%"
        },
        {
            title: "Women Empowerment Program",
            location: "Western Province",
            image: "http://static.photos/people/640x360/4",
            description: "Vocational training and entrepreneurship development",
            outcomes: "2,000+ women trained, 500+ small businesses established",
            date: "2022",
            impact: "Women's employment rate increased by 40%"
        },
        {
            title: "Rural Infrastructure Development",
            location: "Sabaragamuwa Province",
            image: "http://static.photos/construction/640x360/5",
            description: "Road construction and community infrastructure projects",
            outcomes: "100km of roads built, 50+ community centers established",
            date: "2023",
            impact: "Access to markets improved by 60%"
        },
        {
            title: "Sustainable Agriculture Program",
            location: "North Central Province",
            image: "http://static.photos/agriculture/640x360/6",
            description: "Modern farming techniques and organic agriculture training",
            outcomes: "5,000+ farmers trained, crop yield increased by 45%",
            date: "2022",
            impact: "Farmer income increased by 55%"
        },
        {
            title: "Disaster Relief Initiative",
            location: "Southern Province",
            image: "http://static.photos/event/640x360/7",
            description: "Emergency response and disaster management programs",
            outcomes: "20,000+ families assisted, 100+ emergency shelters built",
            date: "2023",
            impact: "Disaster recovery time reduced by 50%"
        },
        {
            title: "Digital Literacy Program",
            location: "Uva Province",
            image: "http://static.photos/technology/640x360/8",
            description: "Computer training and digital skills development",
            outcomes: "10,000+ individuals trained, 50+ computer labs established",
            date: "2022",
            impact: "Digital literacy rate increased by 65%"
        }
    ];

    // Initialize leadership data
    const leadership = [
        {
            name: "A.J.A. De Silva",
            role: "President",
            image: "/assets/President.jpg",
            occupation: "Community Development Expert"
        },
        {
            name: "A.P.S.R. De Silva",
            role: "Secretary",
            image: "/assets/secretary.jpg",
            occupation: "Education Specialist"
        },
        {
            name: "Waduge Princy AJantha",
            role: "Treasurer",
            image: "/assets/Treasurer.jpg",
            occupation: "Finance Professional"
        }
    ];

    // Populate projects section
    const projectsContainer = document.querySelector('#projects .grid');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card bg-white rounded-lg shadow-lg overflow-hidden';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${project.title}</h3>
                    <p class="text-amber-600 font-semibold mb-2">${project.location}</p>
                    <p class="text-gray-600 mb-3">${project.description}</p>
                    <div class="border-t pt-3">
                        <p class="text-sm text-gray-500"><strong>Outcomes:</strong> ${project.outcomes}</p>
                        <p class="text-sm text-gray-500"><strong>Date:</strong> ${project.date}</p>
                        <p class="text-sm text-gray-500"><strong>Impact:</strong> ${project.impact}</p>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Populate leadership section
    const leadershipContainer = document.getElementById('leadership-grid');
    if (leadershipContainer) {
        leadership.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'text-center bg-white p-6 rounded-lg shadow-lg';
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.role}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-lg font-bold text-gray-800 mb-1">${member.name}</h3>
                <p class="text-amber-600 font-semibold mb-2">${member.role}</p>
                <p class="text-gray-600">${member.occupation}</p>
            `;
            leadershipContainer.appendChild(memberCard);
        });
    }

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Newsletter signup function
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! You'll receive updates about our work.`);
    event.target.reset();
}