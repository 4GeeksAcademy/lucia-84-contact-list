const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

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
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});

			}

			deleteContact: (name,phone,email,address) => {

				fetch('https://playground.4geeks.com/contact/agendas/luciacanalda/contacts', {
					method: 'DELETE',
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
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});

			}
		}
	};
};

export default getState;
