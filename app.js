const { Cluster } = require('puppeteer-cluster');

(async () => {
  //Your array of URLs define
  const requests = [
    'https://www.worldpranichealing.com/en/wesak/benefits-of-meditating-during-wesak/',
    'https://www.worldpranichealing.com/en/wesak/a-ceremony-in-the-himalaya/',
  ];
  // Your element name you want to find in dom element.
  const element = '.wph-blog ul';

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 1,
  });

  await cluster.task(async ({ page, data }) => {
    let { url } = data;

    await page
      .goto(url, {
        timeout: 120000,
        waitUntil: 'networkidle2',
      })
      .catch((e) => {
        console.error(e.message, `This was a failure.Url is ${url}`);
      });
    //Here is main check happened
    (await page.$(element)) !== null
      ? console.log(`Your Element ('${element}') is not found in this ${url}`)
      : console.log(`Your Element  ('${element}')  is found in this ${url}`);
  });
  requests.forEach((url) => {
    cluster.queue({
      url: url,
    });
  });

  await cluster.idle();
  await cluster.close();
})();
