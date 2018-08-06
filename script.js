let whatsapp = [
{
	name:"Alisha Hashim",
	number:"0022233",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp1.jpg"
},
{
	name:"marium Zehra",
	number:"00922303",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp2.jpg"

},
{
	name:"Saira Mehtab",
	number:"002822933",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp3.jpg"
},
{
	name:"Razia Alee",
	number:"009222033",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp4.jpg"
},
{
	name:"samina Khan",
	number:"060220233",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp5.jpg"
},
{
	name:"Fatima Khan",
	number:"002322633",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp6.jpg"
},
{
	name:"Neha Ameen",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp7.jpg"
},
{

	name:"Maria Azhar",
	number:"00422523356",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp8.jpg"
	
},
{
	name:"Madeeha Tariq",
	number:"00225323353",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp9.jpg"
},
{

	name:"kiran uit",
	number:"00222468823",
	email:"mmmm@gmail.com",
	status:"Do one thing ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	img:"images/dp10.jpg"
}
];


function intilizer(){
	const contactlistEL = document.querySelector(".all");
	for (let i = 0; i < whatsapp.length; i++) {
		contactlistEL.innerHTML += `
		<section class="person-item">
		<div class="person-img" style="background-image: url(${whatsapp[i].img});"></div>
		<div class="detail">
		<div>
		<p class="name">${whatsapp[i].name}</p>
		<p class="msg">${whatsapp[i].lastMsg}</p>
		</div>
		<div>
		<p class="time">${whatsapp[i].lastTime}</p>
		</div>
		</div>
		</section>


		`


	}
}