/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty. Experiment with this before you get started on
    * the rest of this project. What happens when you change
    * allFeeds in app.js to be an empty array and refresh the
    * page?
    */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Test to validate url is defined for each feed and is not empty
    */
    it('url is defined for each feed', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    /* Test to validate name is defined for each feed and is not empty
    */
    it('name is defined for each feed', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });


  /* Tests for the site's menu */
  describe('The menu', function() {

    /* Validate that menu is hidden
    */
    it('menu is hidden by default', function() {
      expect($('body')).toHaveClass('menu-hidden');
    });

    /* Validate menu appears when we click the menu icon
    * and dissappears when clicked again
    */
    it('menu visibility toggles when menu-icon is clicked', function() {
      menuIcon.trigger();
      expect($('body')).not.toHaveClass('menu-hidden');
      menuIcon.trigger();
      expect($('body')).toHaveClass('menu-hidden');
    });

  });
  /* Tests for the initial entries */
  describe('Initial Entries', function() {

    /* tell Jasmine loadFeed is async
    */
    beforeEach(function(done) {
      loadFeed(function() {
        done();
      });
    });

    /* a test to see initial entries were loaded */
    it('should have at least one entry in the feed container', function() {
      expect($('.feed').find('.entry').length).not.toBe(0);
      done();
    });
  });
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */
}());
