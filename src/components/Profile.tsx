import React, { useEffect, useState } from 'react';

const Profile: React.FC = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        description: '',
        email: '',
        github: '',
        linkedin: '',
        profileImage: ''
    });

    useEffect(() => {
        fetch('http://localhost:5050/api/customer')
            .then(response => response.json())
            .then(data => {
                setCustomer(data);
            })
            .catch(error => console.error('Erreur:', error));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={customer.profileImage}
                        alt="Profile"
                        className="img-fluid rounded-circle mb-3"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{customer.firstName} {customer.lastName}</h1>
                    <p className="lead">
                        {customer.description}
                    </p>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> {customer.email}</li>
                        <li><strong>LinkedIn:</strong> <a href="#">{customer.linkedin}</a></li>
                        <li><strong>GitHub:</strong> <a href="#">{customer.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
