# weight_from_google
Using node, express and d3 to take weight data from a google spreadsheet and display a graph.

* Published spreadsheet as CSV
* As CORS not allowed, set up node express app to consume the endpoint and create my own endpoint.
* Consumed this endpoint as "text" since I haven't set up a header row in my CSV and needed to parse the rows of the CSV myself.

The rest was pretty straightforward.
