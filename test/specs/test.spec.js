const Page = require('../pageObjects/page'),
iPhone = new Page(iphone);
Chrome = new Page(chrome);

describe('Chat socket test', function () {

  it('displays the title', function () {
    browser.url('http://localhost:3000');
    expect(Chrome.getMessages().length).to.equal(0);
  });

  it('sends a message from chrome', function() {
    Chrome.sendMessage('Sending message 1 from Chrome');
    expect(iPhone.getMessages().length).to.equal(1);
  });

  it('sends a message from iPhone', function () {
    iPhone.sendMessage('Sending message 2 from iPhone')
    expect(Chrome.getMessages().length).to.equal(2);
  });

  it('sends a message from chrome', function () {
    Chrome.sendMessage('Sending message 3 from Chrome');
    expect(iPhone.getMessages().length).to.equal(3);
  });

  it('sends a message from iPhone', function () {
    iPhone.sendMessage('Sending message 4 from iPhone');
    expect(Chrome.getMessages().length).to.equal(4);
  });

});