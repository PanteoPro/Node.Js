const fs = require("fs");

/*fs.unlink("somefile.txt", (err) => { // удаление файла
	if (err) throw err;
	console.log("Succeful delete");
});*/

/*fs.rename('test', "test.txt", (err) => {
	if(err) throw err;
	console.log("rename complete");
});*/

/*fs.stat('test.txt', (err,stats)=>{
	if(err)throw err;
	console.log(`stats: ${JSON.stringify(stats)}`);
});*/

/*fs.open('./test.txt', 'r', (err, fd) => {
	if(err) throw err;
	fs.close(fd, (err) => {
		if (err) throw err;
	});
});*/


/*fs.open("test.txt", "r", (err, fd) => {
	if (err) throw err;
	fs.fstat(fd, (err, stat) => {
		if(err) throw err;
		console.log(stat);
	});
	fs.close(fd, (err) => {
		if (err) throw err;
	});
});*/

/*fs.readdir("test", (err, data)=>{
	if(err) throw err;
	console.log(data);
})*/

/*fs.watch('./test', (eventType, filename) => {
	if(eventType)
		console.log(eventType);
	if(filename){
		console.log(filename);
	}
});*/

