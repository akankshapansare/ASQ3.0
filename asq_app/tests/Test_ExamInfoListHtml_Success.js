module.exports = {
  'ExamInfo Test Successful' : function (browser) {
    browser
      .url('http://localhost:1337/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=Email]', 'asqtest@gmail.com')
	  .setValue('input[name=Password]', 'asqtest')
      .waitForElementVisible('button[name=Login]', 100)
      .click('button[name=Login]')
      .waitForElementVisible('button[name=Exam]', 100)
	  .click('button[name=Exam]')
	  .pause(1000)
	  .waitForElementVisible('button[name=Start]', 100)
	  .waitForElementVisible('button[name=Cancel]', 100)
      .end();
  }
};
