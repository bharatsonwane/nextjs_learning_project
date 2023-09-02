const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'bharat',
                mongodb_password: 'K9BpDcZd6wLA3yj',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site'
            }
        }
    }
    else if (phase === PHASE_PRODUCTION_SERVER) {
        return {
            env: {
                mongodb_username: 'bharat',
                mongodb_password: 'K9BpDcZd6wLA3yj',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site'
            }
        }
    }
    return {
        env: {
            mongodb_username: 'bharat',
            mongodb_password: 'K9BpDcZd6wLA3yj',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
}