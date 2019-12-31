const users = [{
        id: 1,
        name: "Akr",
        email: "abcd@xyz",
    },
    {
        id: 2,
        name: "Rka",
        email: "dcba@zyx",
    },
];


const router = app => { app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
    );
	
	app.get('/users',(request, response) => {
		response.send(users);
		});
});
}


module.exports = router;