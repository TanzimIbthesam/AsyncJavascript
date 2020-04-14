
const button = document.querySelector('button');
const buttontwo = document.querySelector('.buttontwo');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {
            'Content-Type': 'application/json'
        } : {}
    }).then(res => {
        if (res.status >= 400) {
            // !response.ok

            return res.json().then(errResData => {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error;
            });
        }
        return res.json();
    });
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
             "email": "eve.holt@reqres.in",
             "password": "pistol"
})
.then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        })
};

button.addEventListener('click', getData);
buttontwo.addEventListener('click', sendData);
