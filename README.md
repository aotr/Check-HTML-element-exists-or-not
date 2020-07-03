# Check HTML element exists or not

Check HTML element exists or not in multiple URLs using puppeteer.

## Getting Started

### Installation

I use Puppeteer,https and puppeteer-cluster in project, run:

```bash
npm i puppeteer
# or "yarn add puppeteer"
```

```bash
npm i https
# or "yarn add https"
```

```bash
npm i puppeteer-cluster
# or "yarn add puppeteer-cluster"
```

Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, or to download a different browser, see [Environment variables](https://github.com/puppeteer/puppeteer/blob/v5.0.0/docs/api.md#environment-variables).

## Usage

Please replace the requests variable as per your requirement. It is a Array of String its mainly content URLs.

```js
const requests = [
  'https://www.worldpranichealing.com/en/wesak/benefits-of-meditating-during-wesak/',
  'https://www.worldpranichealing.com/en/wesak/a-ceremony-in-the-himalaya/',
];
```

### Example

To run the repo: clone the repo, npm install on the package, and run the app:

```bash
git clone https://github.com/aotr/Check-HTML-element-exists-or-not.git
cd Check-HTML-element-exists-or-not
npm install
node app.js
```
