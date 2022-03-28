import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [photos] = useState([
        {
            name: 'Menu Masters',
            category: 'Portfolio',
            description:
                'A Pinterest for only recipes. We always want to try something new but never know what to make. With this site, you will be presented with options that are user generated. You can try recipes, upvote the ones you like, comment on ones you have tried and even submit your own.',
            deployed: 'https://ancient-cliffs-24066.herokuapp.com/',
            repo: 'https://github.com/EthanRugh/team-project-2'
        },
        {
            name: 'Personal Crypto Tracker',
            category: 'Portfolio',
            description:
                'A website that allows you search for crypto, enter the amount you own, and convert it into your currency!',
            deployed: 'https://mikebashford.github.io/personal-crypto-tracker/',
            repo: 'https://github.com/mikebashford/personal-crypto-tracker'
        },
        {
            name: 'Run Buddy',
            category: 'Portfolio',
            description:
                'A website that offers fitness training services.',
            deployed: 'https://chellesjord.github.io/run-buddy/',
            repo: 'https://github.com/chellesjord/run-buddy'
        },
        {
            name: 'Work-Day Scheduler',
            category: 'Portfolio',
            description:
                'This app is a Work Day Scheduler used to create a schedule. The current day is displayed at the top of the calendar. There are time blocks for standard business hours and each time block is color-coded to indicate whether it is in the past, present, or future. When the user clicks into a time block an event can be entered. The save button with save that time block in local storage. When the user refreshs the page, the saved events will continue to show.',
            deployed: 'https://chellesjord.github.io/work-day-scheduler/',
            repo: 'https://github.com/chellesjord/work-day-scheduler'
        },
        {
            name: 'Weather Dashboard',
            category: 'Portfolio',
            description:
                'This application shows the weather outlook for multiple cities so that the user can plan a trip accordingly. The user can search a city and is presented with current and future conditions for that city. That city is also added to the search history. The city weather conditions include the city name, date, weather conditions, temperature, humidity, wind speed, and UV index.',
            deployed: 'https://github.com/chellesjord/weather-app',
            repo: 'https://chellesjord.github.io/weather-app/'
        },
        {
            name: 'Employee Tracker',
            category: 'Portfolio',
            description:
                'The user is able to view Employees, Job Roles, Departments, and mode via node on the terminal. The user can also add more Employees, Departments, and Roles as needed. Finally, the user can update the Employee as needed with the otpions to change varying as the user needs.',
            deployed: 'https://github.com/chellesjord/Employee-Tracker',
            repo: 'https://github.com/chellesjord/Employee-Tracker'
        },
        {
            name: 'My Resume',
            category: 'Resume',
            description:
                'Click the link below to download a copy of my resume',
            deployed: 'https://bit.ly/3DkET3U',
            repo: 'https://bit.ly/3DkET3U'
        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img img-thumbnail mx-1"
                        style={{ width: "30%" }}
                        onClick={() => toggleModal(image, i)}
                        key={image.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
