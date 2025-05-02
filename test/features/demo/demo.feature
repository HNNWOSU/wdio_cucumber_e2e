Feature: Demo Feature


 
    Scenario Outline: Run first demo test
        Given Google page is opened
        When I search for <SearchItem>
      Then click on the first link in the search results
   Then the url should match <ExpectedURL>
       

    Examples:
        | TestID| SearchItem | ExpectedURL|
        | Demo_TC01 | WDIO     | https://webdriver.io |