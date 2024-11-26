# Welcome

This is an humble express

# Getting Started

Clone the repo to your local environment

```
git clone https://github.com/kilometers/html2pdf.git
```

Install dependencies using `yarn`

```
yarn install
```

Run the server 

```
yarn start:dev
```

To build and run the server in production...

```
yarn build
yarn start:prod
```

# Usage

Send a POST request to the /generate-pdf endpoint as follows

```
curl -X POST <HOSTNAME>/generate-pdf \
     -H "Content-Type: application/json" \
     -d '{"url": "http://example.com"}'
```

Replace <HOSTNAME> with the server's hostname, and set `url` equal to the webpage you wish to convert.

There are additional, though optional, parameters including:

```
{
  "horizontal": true    // Generate a landscape PDF, default is true
  "format": "A3"        // Page format, default is "A4"
  "scale": 1            // Page
}
```
