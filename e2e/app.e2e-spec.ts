import { MultiLevelDropdownPage } from './app.po';

describe('multi-level-dropdown App', () => {
  let page: MultiLevelDropdownPage;

  beforeEach(() => {
    page = new MultiLevelDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
