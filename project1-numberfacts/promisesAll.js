//task1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Acknowlegment document const, textcontent and body used internet resources the subjects covered in the lectures seem to not fully explain HTML references.  
//Dynamic HTML, Goodman, Document Object MOdel Marini were other soruces for script tags
// Ajax and JQuery were other code examples used but not explicitly detailed in the lectures sources google and bing.com
let favoriteNumber = 43;
let urlTask1 = `http://numbersapi.com/${favoriteNumber}?json`;

// Using jQuery's getJSON method to fetch data this was copied from the solution provided to the exercise
$.getJSON(urlTask1)
  .done(function (data) {
    console.log('Task 1 Data:', data);
    //Acknowlegment document const, text content and body used internet resources
    const factPara = document.createElement('p');
    factPara.textContent = `Task 1 fact: ${data.text}`;
    document.body.appendChild(factPara);
  });
//task2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let numbers = [7, 11, 22];
let urlTask2 = `http://numbersapi.com/${numbers.join(',')}?json`

$.getJSON(urlTask2)
  .done(function (data) {  //.done and .fail a jQuery methods used from reference
    console.log('Task 2 Data:', data);
    //the for..in loop comes from MDN Docs- Object.prototype.preopertyIsEnumerable() used when iterating over Objcts
    for (const num in data) {
      //Acknowlegment document const, text content and body used internet resources
      const factPara = document.createElement('p');
      factPara.textContent = `Task 2 fact: (${num}): ${data[num]}`;
      document.body.appendChild(factPara);
    }
  })
  .fail(function (jqxhr, textStatus, error) { 
    //note jqxhr specifically is an  Ajax object for a call and error handling,  jqxhr returns request and response in headers. Reference JQuery XMLHttpRequest object
    console.error(`Error fetching data for Task 2: ${textStatus}, ${error}`);
  });

//task3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let factsPromises = [];
for (let i = 0; i < 4; i++) {
  factsPromises.push($.getJSON(urlTask1));
}

Promise.all(factsPromises)
  .then(function (numbers) {
    numbers.forEach(function (data, index) {
      //Acknowlegment document const, text content and body used internet resources and library references noted earlier
      const factPara = document.createElement('p');
      factPara.textContent = `Task 3 fact: ${index + 1}: ${data.text}`;
      document.body.appendChild(factPara);
    });

  })
  .catch(function (error) {
    console.error('Error fetching data for Task 3:', error);
  });


