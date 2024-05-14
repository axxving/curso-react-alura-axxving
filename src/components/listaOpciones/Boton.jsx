import React from 'react';
import { Button } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';

export const Boton = ({title}) => {
    return (
        <Button variant="primary" type="submit"><ChatDotsFill className="mr-2 mb-1" /> {title}</Button>
    );
};
