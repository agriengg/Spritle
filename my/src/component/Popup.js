function Popup() {
  return (
    <div>
      <div className="container">
        <h1>Form</h1>
        <a href="#" class="button">
          Login
        </a>
      </div>
      <div className="popup">
        <div className="popup-content">
            
            <input type="text" placeholder = ' Enter Your Message'></input>
            <input type="text" placeholder = 'Enter the name'></input>
            <input type="text" placeholder = 'Enter the Query'></input>
            <input type="text" placeholder = 'Enter the Type'></input>
            
            <a href="#" className="button">Login</a>

        </div>

      </div>
    </div>
  );
}
export default Popup;
