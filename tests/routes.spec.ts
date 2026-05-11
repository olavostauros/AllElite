import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = resolve(__dirname, '..');

test.describe('Routes', () => {
  test('GET / returns 200', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('GET /index.html returns 200', async ({ page }) => {
    const response = await page.goto('/index.html');
    expect(response?.status()).toBe(200);
  });

  test('/ and /index.html resolve to the same page', async ({ page }) => {
    const rootResponse = await page.goto('/');
    const rootUrl = page.url();
    expect(rootResponse?.status()).toBe(200);

    const indexResponse = await page.goto('/index.html');
    expect(indexResponse?.status()).toBe(200);

    const rootTitle = await (await page.goto('/'))?.text();
    const indexTitle = await (await page.goto('/index.html'))?.text();
    expect(rootTitle).toBe(indexTitle);
  });
});

test.describe('Naming — all_elite (underscore), not all-elite (hyphen)', () => {
  test('package.json name uses underscore', () => {
    const pkg = JSON.parse(
      readFileSync(resolve(PROJECT_ROOT, 'package.json'), 'utf-8')
    );
    expect(pkg.name).toBe('all_elite');
  });

  test('project directory path contains all_elite, not all-elite', () => {
    expect(PROJECT_ROOT).toContain('all_elite');
    expect(PROJECT_ROOT).not.toContain('all-elite');
  });

  test('page URL does not contain all-elite', async ({ page }) => {
    await page.goto('/');
    expect(page.url()).not.toContain('all-elite');
  });

  test('page HTML does not reference all-elite as a path segment', async ({ page }) => {
    await page.goto('/');
    const html = await page.content();
    // Paths and hrefs should use underscore form; prose containing the brand
    // name "All Elite" (with space) is fine — only kebab-case is wrong.
    expect(html).not.toMatch(/href="[^"]*all-elite[^"]*"/i);
    expect(html).not.toMatch(/src="[^"]*all-elite[^"]*"/i);
  });
});
