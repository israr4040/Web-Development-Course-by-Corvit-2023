const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 ",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "493-170-9623",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web "
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end "
        }
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
                lat: "-71.4197",
                lng: "71.7478"
            }
        },
        phone: "1-477-935-8478",
        website: "ola.org",
        company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative "
        }
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
                lat: "24.8918",
                lng: "21.8984"
            }
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers"
        }
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
                lat: "-14.3990",
                lng: "-120.7677"
            }
        },
        phone: "586.493.6943",
        website: "jacynthe.com",
        company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers"
        }
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
                lat: "24.6463",
                lng: "-168.8889"
            }
        },
        phone: "(775)976-6794",
        website: "conrad.com",
        company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time "
        }
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232"
            }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models"
        }
    }
]
function myFunction() {

    var row = document.getElementById("row");
    var data = "";
    users.forEach(element => {
        data += '<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
            '<div class="card bg-secondary bg-gradient text-white";">' +
            '<h4 class="p-2 text-center"> User Data</h4>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + '<b>ID:</b>' + ' ' + element.id + '</li>' +
            ' <li class="list-group-item">' + '<b>Name:</b>' + ' ' + element.name + '</li>' +
            ' <li class="list-group-item">' + '<b>User Name:</b>' + ' ' + element.username + '</li>' +
            '<li class="list-group-item">' + '<b>email:</b>' + ' ' + element.email + '</li>' +
            '<li class="list-group-item">' + '<b>Adress:<br>&nbsp &nbsp &nbsp &nbsp &nbsp   Street:</b>' + ' ' + element.address.street + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Suite:</b>' + ' ' + element.address.suite +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>City:</b>' + ' ' + element.address.city + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Zipcode:</b>' + ' ' + element.address.zipcode +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  <b>Geo:</b>' +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Latitude:</b>' + ' ' + element.address.geo.lat + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Longitude:</b>' + ' ' + element.address.geo.lng + '</li>' +
            '<li class="list-group-item">' + '<b>Phone:</b>' + ' ' + element.phone + '</li>' +
            '<li class="list-group-item">' + '<b>Website:</b>' + ' ' + element.website + '</li>' +
            '<li class="list-group-item">' + '<b>Company:<br>   Name:</b>' + ' ' + element.company.name + '<br>' + '<b>Catchphrse:</b>' + ' ' + element.company.catchPhrase +
            '<br>' + '<b>BS:</b>' + ' ' + element.company.bs +
            '</ul>' +
            '</div>' +
            '</div>'

    });
    row.innerHTML = data;
    document.getElementById("btn").style.display = "none";

};
function clrFunction() {
    document.getElementById("row").style.display = "none"
    document.getElementById("btn2").style.display = "none"
};




// Axios Function To show data in cards
// Make a request for a user with a given ID

// var data="";
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {
//     var row = document.getElementById("row");
//     var data = "";
//     response.data.forEach(element => {
//         data += '<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
//             '<div class="card bg-secondary bg-gradient text-white";">' +
//             '<h4 class="p-2 text-center"> User Data</h4>' +
//             '<ul class="list-group list-group-flush">' +
//             '<li class="list-group-item">' + '<b>ID:</b>' + ' ' + element.id + '</li>' +
//             ' <li class="list-group-item">' + '<b>Name:</b>' + ' ' + element.name + '</li>' +
//             ' <li class="list-group-item">' + '<b>User Name:</b>' + ' ' + element.username + '</li>' +
//             '<li class="list-group-item">' + '<b>email:</b>' + ' ' + element.email + '</li>' +
//             '<li class="list-group-item">' + '<b>Adress:<br>&nbsp &nbsp &nbsp &nbsp &nbsp   Street:</b>' + ' ' + element.address.street + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Suite:</b>' + ' ' + element.address.suite +
//             '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>City:</b>' + ' ' + element.address.city + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Zipcode:</b>' + ' ' + element.address.zipcode +
//             '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  <b>Geo:</b>' +
//             '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Latitude:</b>' + ' ' + element.address.geo.lat + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Longitude:</b>' + ' ' + element.address.geo.lng + '</li>' +
//             '<li class="list-group-item">' + '<b>Phone:</b>' + ' ' + element.phone + '</li>' +
//             '<li class="list-group-item">' + '<b>Website:</b>' + ' ' + element.website + '</li>' +
//             '<li class="list-group-item">' + '<b>Company:<br>   Name:</b>' + ' ' + element.company.name + '<br>' + '<b>Catchphrse:</b>' + ' ' + element.company.catchPhrase +
//             '<br>' + '<b>BS:</b>' + ' ' + element.company.bs +
//             '</ul>' +
//             '</div>' +
//             '</div>'

//     });
//     row.innerHTML = data;
//    console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
 