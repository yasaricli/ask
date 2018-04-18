ask.fm like built with Meteor

[![Screenshot][screenshot]][site]

## Run Docker
    docker pull mongo
    docker run --name mongo -d -i -p 3001:27017 mongo
    docker pull yasaricli/ask:0.0.1
    docker run --link mongo:DB -d -i -p 3000:3000 yasaricli/ask:0.0.1

lets go [http://localhost:3000](http://localhost:3000)

## Development Installation

Prerequisites:

* [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Meteor](https://www.meteor.com/install)

Now just clone and start the app:

```sh
git clone https://github.com/yasaricli/ask.git
cd ask
meteor
```

[screenshot]: https://github.com/yasaricli/ask/blob/develop/public/images/screenshot.png
[site]: http://www.pecord.com
