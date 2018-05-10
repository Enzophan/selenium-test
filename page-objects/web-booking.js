module.exports = {

    url: 'https://wb.lab.qup.vn/booking.html?fleet=ecar',

    elements: {
        searchInputPickup: by.name('pickup'),
        searchInputDestination: by.name('destination'),
        searchResultLink: by.name('btn-book-a-ride')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    searchTrip: function (searchPickup) {

        var selector = page.googleSearch.elements.searchInputPickup;

        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(searchPickup, selenium.Key.ENTER);
    }
};