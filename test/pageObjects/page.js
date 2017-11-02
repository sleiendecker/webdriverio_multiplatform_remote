class Page {

  constructor(device) {
    this.device = device;
    this.selectors = {
      inputField: '#m',
      button: 'button'
    }
  }

  sendMessage(message) {
    this.device.element(this.selectors.inputField).setValue(message);
    this.device.click(this.selectors.button);
    return;
  }

  getMessages() {
    return this.device.elements('li').value;
  }

}


module.exports = Page;