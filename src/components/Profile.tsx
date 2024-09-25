import React from 'react';
import profileImage from '../assets/profile.jpg';

const Profile: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="img-fluid rounded-circle mb-3"
                    />
                </div>
                <div className="col-md-8">
                    <h1>Copin Thomas</h1>
                    <p className="lead">
                        Je suis un développeur passionné par les technologies web et les jeux de société.
                    </p>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> thomas.copin@ifosup.wavre.be</li>
                        <li><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/thomas-copin-02935928b</a></li>
                        <li><strong>GitHub:</strong> <a href="#">github.com/Tod2a</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
