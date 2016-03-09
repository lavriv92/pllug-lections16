import assert from 'assert';
import User from '../src/user';


describe('User', function() {
  describe('#fullName', function() {

    let user = new User('Test', 'User');

    it('should initialize user with constructor', function () {
      assert.equal(user.firstName, 'Test');
      assert.equal(user.lastName, 'User');
    });

    it('shold firstName and lastName be parts of splitted fullName', function() {
      assert.equal(user.fullName, 'Test User');
    });

    it('shold fullName compared with firstName and lastName', function() {
      user.fullName = 'Test2 User2';
      assert.equal(user.firstName, 'Test2');
      assert.equal(user.lastName, 'User2');
    });
  });
});
