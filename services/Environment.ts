const isProduction = process.env.NODE_ENV === 'production';

function getDomain() {
    if (isProduction) {
        return process.env.REACT_APP_DOMAIN;
    } else {
        return 'http://localhost:8000';
    }
}

const environment = {
    getDomain,
};

export default environment;
