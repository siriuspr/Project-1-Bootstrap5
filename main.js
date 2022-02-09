// Look for the id person-grid and assign var called person grid
var personGrid = document.getElementById('person-grid');
let colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
];

let person_description = [
    'is a web developer and teacher who is passionate about building scalable, data-driven web apps, especially ones that address old problems with new technology.',
    'is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.',
    'is a JavaScript developer working on large-scale applications. He is also a teacher who strives to support students in removing barriers to learning code.',
    'found her passion for programming and teaching over 15 years ago. She is excited to introduce you to all of the wonders of JavaScript.',
    'is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.',
    'All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job'
];

let schedule_events = [
    'Keynote Internet of things',
    'React Basics',
    'Hey, Mongo!',
    'Lunch',
    'Introducing ES2015',
    'Getting Started With Redux',
    'What is Babel?'
];

let schedules_sections = document.getElementById('schedules');


// make a api call to get the data
axios.get('https://random-data-api.com/api/users/random_user?size=6')
    .then(function (response) {

        console.log(response.data);
        // loop through the data and console log each first name
        for (var i = 0; i < response.data.length; i++) {
            //  pick a random color from the colors array
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            // pick a random description from the person_description array
            let randomDescription = person_description[Math.floor(Math.random() * person_description.length)];

            // insert the first name into the personGrid element    
            personGrid.innerHTML += `
            
            <div class="col-md-6 col-lg-4 " id="person-card">
                <div class="card mb-3 bg-primary" style="height: 530px ">
                    <div class="d-flex mx-auto">
                        <img class="img-fluid" style="max-width: 500px" src="${response.data[i].avatar}" id="person-img" alt="${response.data[i].first_name} Profile Picture">
                    </div>
                <div class="card-body bg-light">
                    <h4 class="card-title text-center" id="person-name">${response.data[i].first_name} ${response.data[i].last_name}</h4>
                    <div class="d-flex justify-content-center">
                         <p class="text-center badge bg-${randomColor}">${response.data[i].employment.title}</p>
                    </div>
                    <p class="card-text" id="person-description">${response.data[i].first_name} ${randomDescription} </p>
                </div>
                </div>
            </div>
            `;


                    
       let h5_inside_of_schedules =schedules_sections.getElementsByTagName('h5')


       for(var j = 0; j < h5_inside_of_schedules.length; j++){
          if (schedule_events[i].includes('Lunch')) {

          } else {
            schedules_sections.getElementsByTagName('p')[i].innerHTML = `- ${response.data[i].first_name} ${response.data[i].last_name} `;
            
          }
      }
    
    } // end of for loop
    })
    .catch(function (error) {
        console.log(error);
    });

       