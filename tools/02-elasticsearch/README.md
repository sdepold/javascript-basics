# Tools 02 | ElasticSearch

## Exercise

### Preparation

1. Download a copy of any wikipedia dump (e.g. https://dumps.wikimedia.org/dewikibooks/20191201/dewikibooks-20191201-pages-articles-multistream.xml.bz2)
2. Upzip it
3. Run the following command: bin/import-wiki-dump.js path/to/your/dump.xml
4. Optionally remove a good chunk of the dump since it's quite big
5. Check the output of the command (You'll see a randomly chosen page of the parsed dump)

### Web app

1. Create a web application that offers a search field
2. When you enter a term it should search for the term in the data provided by the wiki dump and render a prioritized list of results

### Meet ElasticSearch

1. Install ElasticSearch (Mac: `brew tap elastic/tap; brew install elastic/tap/elasticsearch-full; elasticsearch`)
2. Enable the commented code in the import script and run it again; It will now add the data to ElasticSearch
3. Play around with ElasticSearch's search functionality: `curl -d '{"query": {"simple_query_string": {"query": "Mathematik", "fields": ["title", "text"]}}}' -H 'Content-Type: application/json' -X GET 127.0.0.1:9200/wiki/_search`
4. You can find a score (which is how well a document matches the search term)

More info on searching:

You can boost the weight of a field through the ^ operator:

```
{
    "query": {
        "simple_query_string": {
            "query": "Mathematik", 
            "fields": ["title^5", "text"]
        }
    }
}
```

This will make matches in the title field weigh 5 times heavier than matches in the text field.
Please note that defining the `fields` is optional.

### ElasticSearch in Node.JS

```js
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

client
  .search({
    index: "wiki",
    body: {
      query: {
        simple_query_string: {
          query: "Abstellraum",
          fields: ["title^5", "text"]
        }
      }
    }
  })
  .then(res => console.log(res.body.hits));
```

## Random facts about ElasticSearch

- Indexes can be optimized for particular languages: https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-stemmer-tokenfilter.html
- Search queries can contain fuzziness: https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#supported-flags (Search for FUZZY; "Abstellraum~2)

## Bonus exercise

### Highlighting

Extend the UI code to highlight the given search term, so that I can easily understand why the search returned me the respective entry

### Employee Search

Check out: https://ikeptwalking.com/elasticsearch-sample-data/
You will find nice sample data of employee data which has the following format:

```
{
    "FirstName": "JOYE",
    "LastName": "WIATR",
    "Designation": "CEO",
    "Salary": 144000,
    "DateOfJoining":"25/05/2009"
    "Address": "9068 SW. Grove St. Waynesboro, PA 17268",
    "Gender": "Female",
    "Age": 58,
    "MaritalStatus": "Unmarried",
    "Interests": "Renting movies,Scuba Diving,Snowboarding,Butterfly Watching,Dumpster Diving,Badminton,Church/church activities"
}
```

Task: Create a website that allows searching for employee names as well as interests. E.g. I want to be able to search for all people interested in movies with a certain last name.
