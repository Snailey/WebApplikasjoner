//Get date
            var d = new Date();
            var ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d)
            var mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
            var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
            date = da + "." + mo + "." + ye;

// Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("btntodo");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            btn.onclick = function() {
              modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }
            

            
    // vise opptil tre todocards
            
            function showcards() {
                
                var todoArray = localStorage.getItem('todoArray');
                todoArray = JSON.parse(todoArray);
            
            if (todoArray.length == 0) {
                card1.style.visibility = 'hidden';
                card2.style.visibility = 'hidden';
                card3.style.visibility = 'hidden';
                
            }
            else if (todoArray.length == 1) {
                card1.style.visibility = 'visible';
                card2.style.visibility = 'hidden';
                card3.style.visibility = 'hidden';
                
            }
            
            else if (todoArray.length == 2) {
                card1.style.visibility = 'visible';
                card2.style.visibility = 'visible';
                card3.style.visibility = 'hidden';
                
            }
            else {
                card1.style.visibility = 'visible';
                card2.style.visibility = 'visible';
                card3.style.visibility = 'visible';
            }
                
            gettodo();    
            }
            
    // Hente ut data fra todoArray
            
            function gettodo() {
                
                var todoArray = localStorage.getItem('todoArray');
                todoArray = JSON.parse(todoArray);
           
            if (todoArray.length >= 3) {
                document.getElementById("card1title").innerHTML = todoArray[0].title;
                document.getElementById("card1desc").innerHTML = todoArray[0].description;
            
                document.getElementById("card2title").innerHTML = todoArray[1].title;
                document.getElementById("card2desc").innerHTML = todoArray[1].description;
            
                document.getElementById("card3title").innerHTML = todoArray[2].title;
                document.getElementById("card3desc").innerHTML = todoArray[2].description;
                
            }
            
            else if (todoArray.length == 2) {
                document.getElementById("card1title").innerHTML = todoArray[0].title;
                document.getElementById("card1desc").innerHTML = todoArray[0].description;
            
                document.getElementById("card2title").innerHTML = todoArray[1].title;
                document.getElementById("card2desc").innerHTML = todoArray[1].description;
                
            }
            
            else if (todoArray.length == 1) {
                document.getElementById("card1title").innerHTML = todoArray[0].title;
                document.getElementById("card1desc").innerHTML = todoArray[0].description;
                
            }
                
            }
            
            
            
            
    // Skrive data til todoArray
            function addtodo() {
                
            var todoArray = localStorage.getItem('todoArray');
            todoArray = JSON.parse(todoArray);
    
            var title = document.getElementById("modaltitle").value;
            var description = document.getElementById("modaldescription").value;
            var author = document.getElementById("modalauthor").value;
            
            todoArray.unshift({title: title, description: description, author: author});
                
            localStorage.setItem('todoArray', JSON.stringify(todoArray));    
                
            showcards();    
            
            }
            
    // Slette todo kort
            function removecard1() {
                
                var todoArray = localStorage.getItem('todoArray');
                todoArray = JSON.parse(todoArray);
                todoArray.splice(0, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                showcards();
            }
            
            function removecard2() {
                var todoArray = localStorage.getItem('todoArray');
                todoArray = JSON.parse(todoArray);
                todoArray.splice(1, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                showcards();
            }
            
            function removecard3() {
                var todoArray = localStorage.getItem('todoArray');
                todoArray = JSON.parse(todoArray);
                todoArray.splice(2, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                showcards();
            }
            
            
    //legger inn alle ferdige oppgaver i tabellen
            function showcomplete() {
                
                var completeArray = localStorage.getItem('completeArray');
                completeArray = JSON.parse(completeArray);
                
                if (completeArray.length > 0) {
                    
                    for (i = completeArray.length - 1; i >= 0; i--) {

                        var table = document.getElementById("tablecomplete");
                          var row = table.insertRow(1);
                          var cell1 = row.insertCell(0);
                          var cell2 = row.insertCell(1);
                          var cell3 = row.insertCell(2);
                          var cell4 = row.insertCell(3);
                          var cell5 = row.insertCell(4);
                          cell2.innerHTML = completeArray[i].title;
                          cell3.innerHTML = completeArray[i].author;
                          cell4.innerHTML = completeArray[i].description;
                          cell5.innerHTML = completeArray[i].date;
                       }
                    }
            }
            
                //legger til oppgave som er ferdig øverst i tabellen    
            function shownew() {
                
                var completeArray = localStorage.getItem('completeArray');
                completeArray = JSON.parse(completeArray);
                
                var table = document.getElementById("tablecomplete");
                          var row = table.insertRow(1);
                          var cell1 = row.insertCell(0);
                          var cell2 = row.insertCell(1);
                          var cell3 = row.insertCell(2);
                          var cell4 = row.insertCell(3);
                          var cell5 = row.insertCell(4);
                          cell2.innerHTML = completeArray[0].title;
                          cell3.innerHTML = completeArray[0].author;
                          cell4.innerHTML = completeArray[0].description;
                          cell5.innerHTML = completeArray[0].date;
                
            }
            
     
            
        //Oppgaver som er ferdige flyttes ned til complete og slettes fra todo    
            
            function done1() {

                var todoArray = localStorage.getItem('todoArray');
                var completeArray = localStorage.getItem('completeArray');
                todoArray = JSON.parse(todoArray);
                completeArray = JSON.parse(completeArray);
                completeArray.unshift({title: todoArray[0].title, description: todoArray[0].description, author: todoArray[0].author, date: date});  
                todoArray.splice(0, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                localStorage.setItem('completeArray', JSON.stringify(completeArray));
                showcards();
                shownew();
            }   
            
            function done2() {

                var todoArray = localStorage.getItem('todoArray');
                var completeArray = localStorage.getItem('completeArray');
                todoArray = JSON.parse(todoArray);
                completeArray = JSON.parse(completeArray);
                completeArray.unshift({title: todoArray[1].title, description: todoArray[1].description, author: todoArray[1].author, date: date});
                todoArray.splice(1, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                localStorage.setItem('completeArray', JSON.stringify(completeArray));
                showcards();
                shownew();
            }   
            
            function done3() {

                var todoArray = localStorage.getItem('todoArray');
                var completeArray = localStorage.getItem('completeArray');
                todoArray = JSON.parse(todoArray);
                completeArray = JSON.parse(completeArray);
                completeArray.unshift({title: todoArray[2].title, description: todoArray[2].description, author: todoArray[2].author, date: date});
                todoArray.splice(2, 1);
                localStorage.setItem('todoArray', JSON.stringify(todoArray));
                localStorage.setItem('completeArray', JSON.stringify(completeArray));
                showcards();
                shownew();
            }   
            
            
            
    // legger inn verdier i listene om de er tomme
            function start() {
                
                if (localStorage.getItem("todoArray") === null) {
                    let todoArray = [
              {
                title: 'Kort 1',
                description: 'Her skal det stå masse rart',
                author: 'Bjarne Hansen',
                
              },
              {
                title: 'kort 2',
                description: 'Her skal det stå masse rart',
                author: 'Bjarne Hansen',
              },
                {
                title: 'kort 3',
                description: 'Her skal det stå masse rart',
                author: 'Bjarne Hansen',
              },
                {
                title: 'kort 4',
                description: 'Her skal det stå masse rart',
                author: 'Bjarne Hansen',
              },
              
            ];
            
            localStorage.setItem('todoArray', JSON.stringify(todoArray));
                }
                
                if (localStorage.getItem("completeArray") === null) {
                    let completeArray = [
                        {
                            title: 'Dette er en test',
                            description: 'Her bør det stå noe',
                            author: 'Test Testesen',
                            date: '02.01.20',
                        },
                    ];
                    localStorage.setItem('completeArray', JSON.stringify(completeArray));
                }
            }
            


//Angir hvor mange tegn igjen i description
            function countChars(obj){
                var maxLength = 30;
                var strLength = obj.value.length;
                var charRemain = (maxLength - strLength);

                if(charRemain < 0){
                    document.getElementById("count").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
                }else{
                    document.getElementById("count").innerHTML = '(' + charRemain+' characters left)';
                }

            }


// Sorterelistene 
// etter titel ??
  /*  function compare(a, b) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }

    completeArray.sort(compare); */

//etter dato ??
 /*       completeArray.sort(function (a, b) {
        a = a[date].toString().split('/');
        b = b[date].toString().split('/');
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    }); */
            
            start();
            showcards();
            showcomplete(); 