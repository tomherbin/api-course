import React from 'react';

const HomePage = (props) => {
    return (
        <div className="jumbotron">
            <h1>Heading 1</h1>
            <h3>Heading <small className="text-muted">with muted text</small></h3>
            <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <button type="button" className="btn btn-primary">Default button</button>
        </div>

    );
}
export default HomePage;