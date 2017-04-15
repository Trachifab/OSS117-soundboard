import { A2OssPage } from './app.po';

describe('a2-oss App', () => {
  let page: A2OssPage;

  beforeEach(() => {
    page = new A2OssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
