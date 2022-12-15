import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Huasdareal Chat</span>
            <div className="user">
                <img
                    src="https://images.pexels.com/photos/14529648/pexels-photo-14529648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                />
                <span>Huas</span>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
