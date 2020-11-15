Instalasjon:
Frontend:
	yarn/npm install
	yarn/npm dev

Backend:
	yarn/npm install
	yarn/npm dev

Har ikke noe funksjon som fyller databasen, så lag noen brukere og opprett Polls i appen eller postman.


API:
http://localhost:5000

/users/ 	get/        	Hent alle brukerene
		get/:id		Hent bruker med ID
		post/create	Opprettbruker
		put/update/:id	Oppdater bruker
		post/login	Logg Inn

/polls/		get/		Hent alle poll'er
		get/:id		Hent poll med ID
		post/create	Opprette ny poll
		put/update/:id	Oppdatere poll
		


		