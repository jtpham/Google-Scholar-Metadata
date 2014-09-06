Google-Scholar-Metadata
=======================
Full code and demo can be found at:
http://jsfiddle.net/jtpham/jy3sa1ng/2/
=======================

Returns metadata using the Google Scholar API. Each image is associated with a unique URL which links to a research article;
hovering over an image will display the subject of the image and the URL itself. Each image also acts as a button; when selected,
the URL is sent to the query textbox. Underneath the query textbox are two buttons: one labeled "Clear" to clear the textbox and
one labeled "Get Metadata!" to retrieve the metadata of the URL. Once the latter is selected, the article's citation, author(s),
and publication details (year, publisher, source, and volume) are returned. This is not limited to just the four given images;
the query textbox can handle any valid URL or text-based query input. The information retrieved comes from a single matching result from many (the best-matched article).
