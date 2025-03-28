# K.Home

.header-info {
    width: 50%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 2;
}

.header-headline{
    font-size: 40px;
    width: 110%;
    font-weight: 900;
    text-align: center;
    line-height: 110%;
    text-transform: capitalize;
    color: #fff;
    padding-block: 1rem;
}

.header-para{
    font-size: 1.2rem;
    width: 150%;
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 2rem;
    color: #fff;
}

.btn {
    background-color: #fff;
    color: #000;
    box-shadow: 0 0 4px 0 #994e4e;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    transition: background-color 300ms ease;
}
.btn:hover {
    background-color: hsl(0, 1%, 27%);
    color: #fff;
    box-shadow: 0 0 4px 0 #ffffff;
    transform: scale(1.1);
    transition: 0.5s;   
    cursor: pointer;
}

form{
    /* max-width: 100px; */
    width: 100%;
    margin-top: -40px;
}

form .container {
    width: 80%;
    margin-inline: auto;
    background-color: #efebeb;
    box-shadow: 0px 5px 10px rgba(80, 80, 80, 0.30);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem 0;
    border-radius: 8px;
    align-items: center;
    min-height: 100px;
    gap: 2rem;
}



 
.coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 240px;
  }
  
  .coolinput label.text {
    font-size: 0.75rem;
    color: #5d649c;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #e8e8e8;
    width: fit-content;
  }
  
  .coolinput input[type=text].input {
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px hsl(240, 1%, 37%) solid;
    border-radius: 5px;
    box-shadow: #0000001a 0px 1px 3px 0px;
    transition: border 0.3s;
    background: #e8e8e8;
  }
  
  .coolinput input[type=text].input:focus {
    outline: none;
  }

.input input {
    outline: 0;
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 1rem;

}

/* From Uiverse.io by zanina-yassine */ 
.btn {
    min-width: 120px;
  
    position: relative;
    cursor: pointer;
  
    padding: 12px 17px;
    border: 0;
    border-radius: 7px;
  
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    background: radial-gradient(
      ellipse at bottom,
      rgba(71, 81, 92, 1) 0%,
      rgba(11, 21, 30, 1) 45%
    );
  
    color: rgb(255, 255, 255, 0.66);
  
    transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .btn::before {
    content: "";
    width: 70%;
    height: 1px;
  
    position: absolute;
    bottom: 0;
    left: 15%;
  
    /* background: rgb(255, 255, 255); */
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.2;
  
    transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .btn:hover {
    /* color: rgb(255, 255, 255, 1); */
    transform: scale(1.1) translateY(-3px);
  }
  
  .btn:hover::before {
    opacity: 1;
  }


/* property*/

#property{
  width: 100%;
  max-width: 1980px;
  padding-block: 4rem;
}

.property-info{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
}

.property-info .property-title{
  font-size: 2.8rem;
  font-weight: 500;
  text-transform: capitalize;
  color: grey;
  width: 70%;
}

.property-btn {
  background-color: transparent;
  color: #505050;
  font-size: 1.5rem;
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  transition: color 300ms;
}

.property-btn:hover {
  color: #000;
}

.property .container{
  width: 90%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.container{
  width: 100%;
  margin-inline: auto;
  
}

.property-card{
  display: flex;
  /* align-items: stretch; */
  justify-content: center;
  flex-wrap: wrap;
}

.Popular{
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 1rem 2rem;
  overflow: hidden;
  width: 240px;
  min-height: 340px;
  /* height: 340px; */
  border-radius: 1.2rem;
  margin: 2rem;
  box-shadow: 0px 1px 10px #0000001a;
  transition: 0.5s;
  /* flex: 1; */
}

.Popular:hover img{
  transform: scale(1.1);
  transition: 0.5s;
}

.Popular:hover{
  box-shadow: 5px 5px 25px #0000001a;
  transition: 0.5s;
}

.property-img{
  width: 240px;
  /* min-height: 20px; */
  /* padding: 10px 0px; */
  object-fit: cover;
  /* border-radius: 1.2rem; */
}

.card-info{
  margin-top: 15px;
  text-align: left;
}

.location-img{
  padding-left: 75px;
}

.location-name{
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
  font-weight: bolder;
}

.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.content-img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.content p{
  margin: 0;
  font-size: 16px;
  color: #555;
}

.Price{
  font-size: 22px;
  margin-top: 10px;
  color: #28a745;
  font-weight: bolder;
}

.content-btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
