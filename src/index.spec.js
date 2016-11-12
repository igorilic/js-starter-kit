import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';
import fs from 'fs';

describe('Init test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
beforeEach(() => {
  const index = fs.readFileSync('./src/index.html', "utf-8");
  return index;
})
describe('index.html', () => {
  it('should say h1 says sers', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  });
  it('should have td with id users', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const $ = cheerio.load(index);
    const users = $('tbody').attr('id');
    const userList = $('thead th').length;
    expect(users).to.equal('users');
    expect(userList).to.equal(4);
    // done();

    // jsdom.env(index, function(err, window) {
    //   const users = window.document.getElementsById('users')[0];
    //   
    //   window.close();
    // })
  })
});
