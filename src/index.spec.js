import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';
import fs from 'fs';

let index;
let $;

describe('Init test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  beforeEach((done) => {
    index = fs.readFileSync('./src/index.html', "utf-8");
    $ = cheerio.load(index);
    console.log('Testing...');
    done();
  });
  it('should say h1 says sers', () => {
    const h1 = $('h1').first().text();
    expect(h1).to.equal('Users');
    // jsdom.env(index, function(err, window) {
    //   const h1 = window.document.getElementsByTagName('h1')[0];
    //   expect(h1.innerHTML).to.equal('Users');
    //   done();
    //   window.close();
    // });
  });

  it('should have td with id users', () => {
    const users = $('tbody').attr('id');
    const userList = $('thead th');
    expect(users).to.equal('users');
    expect(userList.length).to.be.at.least(3);
    expect(userList.last().text()).to.equal('Email');
    // done();

    // jsdom.env(index, function(err, window) {
    //   const users = window.document.getElementsById('users')[0];
    //   
    //   window.close();
    // })
  })
});
