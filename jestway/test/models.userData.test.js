const User = require('../models/user');
const UserData = require('../models/userData');

// Count method
describe('Count user', () => {
    test('default user count', () => {
      testUserData = new UserData();  
      const userCount = testUserData.getUserCount();
      expect(userCount).toEqual(3);
    })

    test('clear user and Count', () => {
        testUserData = new UserData(); 
        testUserData.clearUsers()
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    
    })
})

// Remove user
describe('remove user', () => {
    test('Remove one', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeOneUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(1);
    })
})

describe('remove 2 user', () => {
  test('Remove two', () => {
    const user = new User("test","test@test.com");
    const testUserData = new UserData();
    testUserData.clearUsers();
    testUserData.addUser(user);
    testUserData.addUser(user);
    testUserData.addUser(user);
    testUserData.removeTwoUser();
    expect(testUserData.getUserCount()).toBe(1);
  });
});