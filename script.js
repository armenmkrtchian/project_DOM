var ul = document.querySelector('ul');

//**********ADD ITEMS
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        // console.log(li);
        addInput.value = '';
    }
});

//**********EDIT AND DELETE ITEMS

ul.addEventListener('click', function(e) {

  // console.log(this);
  // console.log(e.target;
  // console.log(e.target.classList[1]);
    
  if(e.target.classList[1] === "fa-pencil-square-o") {
      
   // console.log('Hello');
      var parentPar = e.target.parentNode;
      parentPar.style.display = 'none';
      
      var note = parentPar.previousElementSibling;
      var input = parentPar.nextElementSibling;
      // console.log(note, input);
      
      input.style.display = 'block';
      input.value = note.textContent;
      
      input.addEventListener('keypress', function(e) {
        // console.log('Hello');
        // console.log(e);
        if(e.keyCode === 13) {
            if(input.value !== '') {
                note.textContent = input.value;
                parentPar.style.display = 'block';
                input.style.display = 'none';
            } else {
                var li = input.parentNode;
                li.parentNode.removeChild(li);
            }
        } 
    });
    
} else if (e.target.classList[1] === "fa-times") {
    var list = e.target.parentNode.parentNode;
    list.parentNode.removeChild(list);

  }
});

//****************HIDE ITEMS

var hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function() {
    // console.log('Checked');
    var label = document.querySelector('label');
    
    if(hideItem.checked) {
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    } else {
        label.textContent = 'Hide notes';
        ul.style.display = 'block';
    }
  
});

//*********SEARCH FILTER

var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e) {
    
    var searchChar = e.target.value.toUpperCase();
    // console.log(searchChar);

    var notes = ul.getElementsByTagName('li');
    
    Array.from(notes).forEach(function(note) {
        var parText = note.firstElementChild.textContent;
        
        if(parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
        
    });

});
