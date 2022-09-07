export default class HomePage {
  constructor(page) {
    this.page = page;
  }
  async visit() {
    await this.page.goto('https://www.google.com'); // we need to use this. because we are going to get to the class
  }
}
