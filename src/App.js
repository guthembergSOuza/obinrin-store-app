import logo from './img/artelie.jpg';
import instagramIcon from './img/instagram.png';
import './App.css';

function openInstagram(){
  window.open("https://www.instagram.com/artelieobinrin/", '_blank').focus();
}

function openWhatsapp(){
  return window.open("https://web.whatsapp.com/send/?phone=5581995480060&text", '_blank');
}


function App() {
  return (
    <div >
      <header className="App-header">
        <img src={logo} className="ImgLogo"/>
      </header>
      <div className="App-body">
        <div className="container">
          <div className="box">
            <div className="col">
              <br/>
              <div className="item" >Galeria</div>
              <br/>
              <div className="item" onClick={openInstagram}>Instagram</div>
              <br/>
              <div className="item" onClick={openWhatsapp}>WhatsApp</div>

            </div>
          </div>
        </div>
        <div className='base-board'>
          desenvolvido por<br/>
          @gasi.developer
        </div>
      </div>
      
    </div>
  );

}



export default App;
