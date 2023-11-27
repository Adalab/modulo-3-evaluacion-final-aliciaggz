# Web page React Harry Potter Characters

Web page with search engine and filters on Harry Potter characters. This page is part of a final assessment exam. Let's define the different parts of the exercise:

1. List of characters

First of all, we are going to make a website with the list of Harry Potter characters. For that, we are going to use the https://hp-api.onrender.com/ service that returns information about the Harry Potter characters filtered by the house to which they belong. On each one, we are going to paint at least:

- Photo
- Name
- Species

Images

Some of the characters returned by the API do not have an image (such as the Dursleys: Vernon Dursley, Petunia Dursley, ... or James Potter). In that case you have to show a filler image. We can create a fill image with the placeholder.com service where in the URL itself we indicate the size, colors, text: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter, or you can use your creativity...

2. Character filtering

Now that we have the list of characters on the screen, the second part consists of being able to search for them by name. For that, we add an input to the interface, so that when writing a name, only the characters whose name contains the written letters remain in the interface. In the screenshot above, typing 'h' brings up characters whose full names contain those letters in that order.

Note: in principle it is not necessary to take into account if the letters are in uppercase / lowercase for the search, but if you want to add this improvement, great.

3. Filter by house

Now that we have the list of characters on the screen, and filtered by name, the next part consists of being able to search for them at home. For that, we add a select to the interface, so that when selecting a house, only the characters whose house is selected remain in the interface.

Note: By default, when the page loads, the Gryffindor house should appear.

4. Components of the character list

The list must have the following components as a minimum:

Component for the name filter.
Component for the list.
Component for the card of each character in the list
Component for the detail of each character. 5. Detail of characters

We are going to implement a new functionality: when you click on a character's card, their information will appear in full screen. To do this we will use routes and the React Router DOM. On the detail screen, in addition to the photo, the name, the house to which it belongs, whether it is alive or dead, gender, species and alternative names, if any, will appear.

6. Quality details

As we like to take care of semantics, the text field must be covered by a <form /> tag.
If we press enter while in the filter field, you must prevent the browser from navigating or changing the route inadvertently.
If you search for a text, for example "XXX" and there is no character that matches that text, a message of the type "There is no character that matches the word XXX" should be displayed.
The filter should filter regardless of whether the user enters the text in upper or lower case.
When entering a character detail and then pressing back, the text field should display the text it previously had.

7. BONUS: Visual improvements

Finally, you can make some visual improvements to the exercise. For example:

In the detail of the character, show the house with its respective emblem and if a character is alive or dead with its respective icon.
Use some grid system to paint the list of characters.
That the responsive work well on small devices.

8. BONUS: Shareable URL

As an extra exercise, we suggest that the character detail URL be compatible, that is, if we visit that URL directly in the browser, the character detail will be seen. If we refresh the browser in the detail of a character, it should show the detail of the character again. And in the event that the user navigates to a non-existent URL such as http://localhost:3000/#/detail/12345 (the id 12345 does not exist) we must display a message of the type "The character you are looking for does not exist".

9. BONUS: Sorting

An interesting extra would be that you order the list of characters alphabetically by name.

10. BONUS: More filters

An interesting extra would be that you add more filters to filter, for example, by gender.

11. BONUS: Reset button

An interesting extra would be to add a reset button so that the page returns to its main list

## Authors

- [@aliciaggz](https://www.github.com/aliciaggz)
