let dataProject = []

function addProject(event){
  //!refresh 
  event.preventDefault()
  //DOM
  const title = document.getElementById("input-project-name").value;
  const description = document.getElementById("description").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const technologies1 = document.getElementById("input-react").checked;
  const technologies2 = document.getElementById("input-js").checked;
  const technologies3 = document.getElementById("input-php").checked;
  const technologies4 = document.getElementById("input-golang").checked;
  let image = document.getElementById("input-image").files  ;

  //files - > URL
  image = URL.createObjectURL(image[0])

  let project={
    title,
    description,
    image,
    startDate ,
    endDate,
    technologies1,
    technologies2,
    technologies3,
    technologies4
  }
 
  dataProject.push(project)
  renderProject()
}
console.log(dataProject)

function renderProject(){
  console.log(dataProject);
  
  let containerDataProject = document.getElementById('contents')

  containerDataProject.innerHTML = ""

  for (let data = 0;data < dataProject.length; data++ ){
    containerDataProject.innerHTML +=    
    `
    <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataProject[data].image}" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${dataProject[data].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${dataProject[data].startDate}| Ichsan Emrald Alamsyah
                </div>
                <div>
                  <p> ${dataProject[data].technologies1? `<i class="fa-brands fa-js-square"></i>`:""} </p>
                  <p> ${dataProject[data].technologies2? `<i class="fa-brands fa-java"></i>`:""} </p>
                  <p> ${dataProject[data].technologies3? `<i class="fa-brands fa-react"></i>`:""} </p>
                  <p> ${dataProject[data].technologies4? `<i class="fa-brands fa-php"></i>`:""} </p>
                </div>
                <p>
                    ${dataProject[data].description}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">1 hour ago</span>
                </div>
            </div>
        </div>
    `
  }
}

// date

// month=[
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December'
// ]


// function getFullTime(time){
//   console.log(time)
//     let date = time.getDate()
//     let monthIndex = time.getMonth()
//     let year = time.getFullYear()
//     let hour = time.getHours()
//     let minute = time.geMinutes()
    
//     return`${date} ${month[monthIndex]}${year} ${hour}:${minute} WIB`
//   }




