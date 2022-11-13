// const x = document.getElementById("parent");

const mile_1 = document.getElementById('one');
const mile_2 = document.getElementById('two');
const mile_3 = document.getElementById('three');
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');

console.log(right)

let vazneha = [
  {
    id: 1,
    col: 1,
    isselected:false
  },
  {
    id: 2,
    col: 1,
    isselected:false
  },
  {
    id: 3,
    col: 1,
    isselected:false
  },
  {
    id: 4,
    col: 1,
    isselected:false
  },
]

function updateUI() {
  let result1 = '';
  let result2 = '';
  let result3 = '';
  vazneha.forEach((item, index) => {
    
    if (item.col == 1) {
      result1 += `<div onclick ="selected(${item.id})" class="${item.id == 1 ? 'red' : item.id == 2 ? 'blue' : item.id == 3 ? 'green' : 'yellow'} ${item.isselected ? 'select' : ''}"></div>`;        
    }
    if (item.col == 2) {   
      result2 += `<div onclick ="selected(${item.id})" class="${item.id == 1 ? 'red' : item.id == 2 ? 'blue' : item.id == 3 ? 'green' : 'yellow'} ${item.isselected ? 'select' : ''}"></div>`;
    }
    if(item.col == 3) {
      result3 += `<div onclick ="selected(${item.id})" class="${item.id == 1 ? 'red' : item.id == 2 ? 'blue' : item.id == 3 ? 'green' : 'yellow'} ${item.isselected ? 'select' : ''}"></div>`;
    }
  });

  mile_1.innerHTML = result1;
  mile_2.innerHTML = result2;
  mile_3.innerHTML = result3;
  
}
updateUI();

// select vazne
const selected = (id) => {
  
  const check_select = vazneha.every(item => !item.isselected);

  const index = vazneha.findIndex(item => item.id === id);

  let col_1 = vazneha.filter(item => item.col == 1);
  let col_2 = vazneha.filter(item => item.col == 2);
  let col_3 = vazneha.filter(item => item.col == 3);
  // console.log(col_1)

  if (check_select &&
      (vazneha[index] == col_1[col_1.length - 1] ||
      vazneha[index] == col_2[col_2.length - 1] ||
      vazneha[index] == col_3[col_3.length - 1]))
  {
    vazneha[index].isselected = true;
  }
  else {
    vazneha[index].isselected = false;
  }
  updateUI();
}

// move to right
const Toright = () => {

  let col3 = vazneha.filter(item => item.col == 3);
  
  if (col3 == '') {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true ){
          item.col = 3;
          item.isselected = false;
      }
    });
  } else {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true && (item.id > col3[col3.length - 1].id) ){
          item.col = 3;
          item.isselected = false;
      }
    })
  }

  updateUI();

  console.log(col3)
  console.log(mile_1);
  console.log(mile_3);
}
right.onclick = Toright;

// move to left
const Toleft = () => {

  let col1 = vazneha.filter(item => item.col == 1);
  if (col1 == '') {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true ){
          item.col = 1;
          item.isselected = false;
      }
    });
  } else {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true && (item.id > col1[col1.length - 1].id) ){
          item.col = 1;
          item.isselected = false;
      }
    })
  }

  updateUI();

}
left.onclick = Toleft;

// move to center
const Tocenter = () => {
  
  let col2 = vazneha.filter(item => item.col == 2);
  if (col2 == '') {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true ){
          item.col = 2;
          item.isselected = false;
      }
    });
  } else {
    vazneha.forEach((item , index)=>{
      if(item.isselected == true && (item.id > col2[col2.length - 1].id) ){
          item.col = 2;
          item.isselected = false;
      }
    })
  }

  updateUI();
}
center.onclick = Tocenter;

