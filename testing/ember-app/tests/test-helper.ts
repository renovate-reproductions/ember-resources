import { getSettledState, setApplication } from '@ember/test-helpers';
import { getPendingWaiterState, getWaiters } from '@ember/test-waiters';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'ember-app/app';
import config from 'ember-app/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

Object.assign(window, { getPendingWaiterState, getWaiters, getSettledState });

QUnit.config.testTimeout = 2000;

start();
