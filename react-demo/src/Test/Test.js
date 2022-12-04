import React from 'react';

export default function Test() {



  //______________________________oxiridan 3ta harf_________________________________________

  // let name = "Ubduvali";

  // console.log(name.slice(5, 8));

  //______________________________________Juf toq____________________________________________

  // let a = +prompt("juft toq");
  // let b = a % 2;
  // if (b === 1) {
  //   console.log(`${a}  toq`);
  // } else {
  //   console.log(`${a} juft`);
  // }


  //________________________________summa chisel_________________________________________________


  // let g = +prompt("sum");
  // let sum = 0;
  // for (let i = 1; i <= g; i++) {
  //   sum += i;
  // }
  // console.log(sum);


  //_______________________________yil oy kun___________________________________________


  // let f = +prompt("yil kiriting");

  // let n = f * 12;
  // let h = f * 52;
  // let o = f * 365

  // console.log(f, "yil bor");
  // console.log(n, "oy bor");
  // console.log(h, "hafta bor");
  // console.log(o, "kun bor");


  //_______________________________otrisatelniy chisla______________________________


  // let s = +prompt("manfiy son qiberamiz");
  // if (s < 0) {
  //   console.log(s);
  // } else if (s === 0) {
  //   console.log(0);
  // } else {
  //   console.log(-s);
  // }


  //_______________________________________async  await______________________________________________________________________________

  // const getData = async () => {
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // };

  // getData();



  //_____________________________сколько нечетных чисел ______________________________________________________

  // let w = +prompt("toq sonlarni topish");
  // let u = w % 2;

  // if (u === 1) {
  //   console.log((w + 1) / 2);
  // } else {
  //   console.log(w / 2);
  // }

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{height: "580px"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height: "580px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU" class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img style={{height: "580px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs-668hLHHlQtcOMtXIlyTURREpsVdnndaQ&usqp=CAU" class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img style={{height: "580px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDioQZpBVaPYbmSxorVHy58KfT2wHZfzJSw&usqp=CAU" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
