// 1 - Declare import - import * from
import * as scriptService from '../utility/scriptService.js'
import * as testdata from '../testdata/testdata.js'

import * as env from '../../env.js'


// 2 - Options - VU
export const options = {
    vus: testdata.VUS,
    duration: testdata.DURATION,
    teardownTimeout: '20s'
}

// 3 - Test Life Cycle - Init - One time Init
let environment;
let token;

    //environment
    if (`${__ENV.ENVIRONMENT}`== env.int) {
        environment = env.intEnvironment;
        token = `${__ENV.INT_TOKEN}`
    }
    else if (`${__ENV.ENVIRONMENT}`== env.dev) {
        environment = env.devEnvironment;
        token = `${__ENV.DEV_TOKEN}`
    }

// 4 - Test Life Cycle - Setup


// 5 - Test Life Cycle - Default function - VU Main function


// 6 - Test Life Cycle - teardown - CleanUp if any







