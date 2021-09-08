function Location() {
    return (
        <div style={{ textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '500px', height: '500px' }}>
            <div id="canvasfor-googlemap" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                <iframe title="location" style={{ height: '100%', width: '100%', border: 0 }} frameBorder={0} src="https://www.google.com/maps/embed/v1/place?q=hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
            </div>
            <style dangerouslySetInnerHTML={{ __html: "#canvasfor-googlemap .text-marker{ }.map-generator{max - width: 100%; max-height: 100%; background: none;" }} />
        </div>
    );
}

export default Location;