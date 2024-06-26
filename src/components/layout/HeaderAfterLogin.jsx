import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import HolidazeContext from "../HolidazeContext";

function HeaderAfterLogin({ img, alt }) {
    const userName = localStorage.getItem('userName');
    const { logOut } = useContext(HolidazeContext);
    const avatar = localStorage.getItem('avatar');

    useEffect(() => {
    }, [img]);

    return (
        <div className="dropdown-center">
            <NavDropdown title={
                <div className="d-sm-flex justify-content-sm-center">
                    <img src={avatar} alt={alt} width="60" height="60" className="rounded-circle" />
                </div>
            } id="basic-nav-dropdown" className="dropdownItem dropdown-toggle" data-bs-toggle="dropdown">
                <div className="dropdownContainer">
                    <NavDropdown.Item as={Link} to={`/profilesite/${userName}`}>Your account</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/yourbookings">
                        Your bookings
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={`/ownerproperties/${userName}`}>Property manager</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                        Sign out
                    </NavDropdown.Item>
                </div>
            </NavDropdown>
        </div>
    );
}

export default HeaderAfterLogin;