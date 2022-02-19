// @see https://github.com/testing-library/cypress-testing-library#config-testidattribute
import './commands';
import { configure } from '@testing-library/cypress';
configure({ testIdAttribute: 'data-test-id' });
