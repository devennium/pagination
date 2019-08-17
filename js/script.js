/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***
Load javascript on doc load
***/
window.addEventListener('load', function() {

//[START variable declartion]
const divPage = document.querySelector('.page');
const studentList = document.querySelectorAll('.student-list > li');
const itemsPerPage = 10;
//[END variable declartion]

//[Initialize view]
init();

// Function to initialize starting view
function init(){
  showPage(studentList, 1);
  appendPageLinks();
  const divNav = document.querySelector('.pagination');
}

// Function shows current studnet selection and hides remaining students
function showPage(studentList, pageParam) {
  let indexStart = (pageParam * itemsPerPage) - itemsPerPage;
  let indexEnd = pageParam * itemsPerPage;

  for (var i = 0; i < studentList.length; i++){
    studentList[i].style.display = 'none';
  }

  for (var j = indexStart; j < indexEnd; j++){
    studentList[j].style.display = '';
  }
}

// Creates bottom page navigation links with button logic
function appendPageLinks() {
const totalPages = studentList.length / 10 + 1;

const pageLinksDiv = createElement('DIV', 'class', 'pagination');
divPage.appendChild(pageLinksDiv);

const ulNode = createElement('UL', 'id', 'page-links');
pageLinksDiv.appendChild(ulNode);

for (var i = 1; i <= totalPages; i++){
  const liNode = createElement('LI');
  const href = createElement('A', 'href', '#');
  const pageNumber = document.createTextNode(i);
  href.appendChild(pageNumber);
  liNode.appendChild(href);

  liNode.addEventListener('click', function (e) {
  const anchPageLinks = document.querySelectorAll('#page-links > li > a');
  for (var i=0; i < anchPageLinks.length; i++){
    anchPageLinks[i].className = '';
  }

  showPage(studentList, e.currentTarget.firstElementChild.innerHTML);
  e.currentTarget.firstElementChild.setAttribute('class', 'active');
  });

  document.getElementById('page-links').appendChild(liNode);
      }
    }

  function createElement(elementType, attributeType, attributeValue){
    newElement = document.createElement(elementType);
    newElement.setAttribute(attributeType , attributeValue);
    return newElement;
  }
  });
