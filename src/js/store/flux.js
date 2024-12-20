const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
listContact: [],
contactindividual : {}
		},
		actions: {

			createAgenda: () => {

				fetch('https://playground.4geeks.com/contact/agendas/luciacanalda', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify()
				})
					.then(response => {
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});

			}, 

			getContact: () => {

				fetch('https://playground.4geeks.com/contact/agendas/luciacanalda/contacts', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					// // body: JSON.stringify({
					// 	name: name,
					// 	phone: phone,
					// 	email: email,
					// 	address: address,
					//   })
				})
					.then(response => {
						return response.json()
					})
					.then(data => {
						// console.log(data);
						setStore({listContact:data.contacts})
					})
					.catch(error => {
						console.error(error);
					});

			},

			createContact: (name,phone,email,address) => {

				fetch('https://playground.4geeks.com/contact/agendas/luciacanalda/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address,
					  })
				})
					.then(response => {
						if (response.ok){
							getContact()
						}
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});

			},

			deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/luciacanalda/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listContact.filter(contact => contact.id !== id);
                            setStore({ listContact: updatedContacts });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },


		

			updatecontactindvidual: (contact) => {

				setStore({contactindividual:contact})


			},

			editContact:(id, contact, navigate) =>{
				let data = {
					"name": contact.name,
					"phone": contact.phone,
					"email": contact.email,
					"address": contact.address
				}
		
				fetch(`https://playground.4geeks.com/contact/agendas/luciacanalda/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						
						return response.json()
					})
					.then((data) => {
						console.log(data)
						getActions().getContact()
					    navigate("/")		
					})
					.catch((err) => { err })

			}



		}
	};
};

export default getState;
