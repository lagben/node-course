var baseConfig = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        PROD_A: 'AA'
    },
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    collaborators: ['benjamin@utom.com', 'erikkri@gmail.com'],
    features: {
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
         preboot: {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: []
};

module.exports = baseConfig;
