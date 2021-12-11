const express = require('express');
const app = express();
const pool = require('./database');

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);
/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
app.get('/', (req, res) => {
    /* res.sendFile() is a method that can be used to send files as its name indicates. However, it takes the absolute
    not the relative path to the file. Therefore, you need to specify the root directory of the file.
    To avoid this confusion, you can use "__dirname", which you have access to after installing "lodash" */

    //res.sendFile('./views/index.html', { root: __dirname });

    res.render('index');
});

app.get('/contactus', (req, res) => {
    // siit ära jäetud res.sendFile...
    res.render('contactus');
})

/*app.get('/',(req,res) => {
    // siit ära jäetud res.sendFile...
    res.render('404');})
    */

app.get('/posts', (req, res) => {
    let posts = [
        { title: "saas,asasa,sa", body: "qqqqqqqqqqq" },
        { title: "rrrrrr", body: "yyyyyyyy" },
    ];
    // siit ära jäetud res.sendFile...
    res.render('posts', { posts: posts });
})

// We will discuss this method next week, when we speak about Middlewares
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.render('404')
});


app.get('/posts', async (req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM nodetable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.get('/posts/:id', async (req, res) => {
    try {
        console.log("get a post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM nodetable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.put('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE nodetable SET (title, body, urllink) = ($2, $3, $4) WHERE id = $1", [id, post.title, post.body, post.urllink]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});


app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM nodetable WHERE id = $1", [id]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});


