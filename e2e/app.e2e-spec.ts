import { StarWarsCatologuePage } from './app.po';

describe('star-wars-catologue App', () => {
  let page: StarWarsCatologuePage;

  beforeEach(() => {
    page = new StarWarsCatologuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
