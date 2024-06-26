import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.1641333514963!2d-84.32358202490859!3d39.375161518374384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884059b0c229995b%3A0x27b6122d0c4f0a84!2zNTcxOCBSaWNobW9uZCBQYXJrIERyLCBNYXNvbiwgT0ggNDUwNDAsINCh0KjQkA!5e0!3m2!1sru!2s!4v1719412602893!5m2!1sru!2s"
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
            />
        </div>
    );
}

export default Map;
