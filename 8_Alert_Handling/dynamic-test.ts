import * as localTest from '@playwright/test';
import lambdatest from './lambdatest-setup';
import dotenv from 'dotenv';

dotenv.config();

const executionMode = process.env.EXECUTION_MODE || 'local';

const test = executionMode === 'lambdatest' ? lambdatest : localTest.test;

export default test;