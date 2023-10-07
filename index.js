function submitData(name, email) {
    const submitData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(submitData)
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Unauthorized Access');
        }
      })
      .then(data => {
        const id = data.id;
        document.body.innerHTML += id;
        return id;
      })
      .catch(error => {
        const errorMessage = error.message;
        document.body.innerHTML += errorMessage;
        console.log(errorMessage);
      });
  }