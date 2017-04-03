import { SimiAssistantPage } from './app.po';

describe('simi-assistant App', function() {
  let page: SimiAssistantPage;

  beforeEach(() => {
    page = new SimiAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
