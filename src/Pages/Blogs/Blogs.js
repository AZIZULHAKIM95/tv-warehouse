import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h2>DIFFERENCE BETWEEN JAVASCRIPT and NODEJS.</h2>

                <br />
                <br />

                <p>
                    <b>JAVASCRIPT:</b>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>It can only be run in the browsers.</li>
                        <li>Javascript is basically used on the client-side.</li>
                        <li>Javascript is used in frontend development.</li>
                        <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>
                    </ul>
                </p>
                <p>
                    <b>NODEJS:</b>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Node JS only run in a V8 engine which mainly used by google chrome.</li>
                    </ul>
                </p>
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2>DIFFERENCE BETWEEN SQL and NOSQL DATABASES.</h2>

                <br />
                <br />

                <p>
                    <b>SQL:</b>
                    <ul>
                        <li>SQL databases are relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema.</li>
                        <li>SQL databases are table-based.</li>
                        <li>These databases are best suited for complex queries.</li>
                    </ul>
                </p>
                <p>
                    <b>NOSQL:</b>
                    <ul>
                        <li>NoSQL databases are non-relational.</li>
                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>These databases are not so good for complex queries.</li>
                    </ul>
                </p>
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2>WHEN SHOULD YOU USE NODEJS AND  WHEN SHOULD YOU USE MONGODB.?</h2>

                <br />
                <br />

                <p>Nodejs is a Javascript engine that can write any application what you want. It runs your Javascript code. Mostly it used to build servers that can respond to web requests. It also used for lots of other types of code too. Nodejs is such as tool for the Javascript programming language. So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>

                <br />
                <br />
                <p>MongoDB is actually a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming application like Python, Java, etc. If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There has many of popular databases. MongoDB is one such database.</p>
            </div>

        </div>
    );
};

export default Blogs;