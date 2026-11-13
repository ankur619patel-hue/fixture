import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { worker } from 'cluster';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    actionTimeout: 30 * 1000,
    navigationTimeout: 45 * 1000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
    headless:false
    

  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
    // ,
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }
    // }
  ],
  outputDir: 'test-results/'
};

export default config;
