function counter(i) {
  if (i > 10) {
    return;
  }
  else {
    console.log(i);
  }
  
  counter(i+1);
}

function main(i) {
  if (i === 0) {
    counter(i);
  }
  
  const one = () => {
    console.log("one");
  };
  
  const two = () => {
    console.log("two");
  };
  
  const three = () => {
    console.log("three");
    one();
    two();
  };
  
  const four = () => {
    console.log("four");
    setTimeout(one, 0);
    three();
  };
  
  four();
}