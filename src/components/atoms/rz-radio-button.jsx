const RZRadioButton = ({ title }) => {
    return (
      <>
        <style>{`
        .container {
          display: block;
          position: relative;
          padding-left: 12px;
          margin-bottom: 16px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 16px;
          width: 16px;
          border:1px solid #D1D5DB;
          border-radius: 50%;
        }
     
        .container input:checked ~ .checkmark {
          background-color: #2563EB;
        }
     
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        .container input:checked ~ .checkmark:after {
          display: block;
        }
        
        .container .checkmark:after {
         top: 4px;
         left: 4px;
         width: 6.5px;
         height: 6.5px;
         border-radius: 50%;
         background: white;
        }
        `}</style>
        <div className="flex items-center mt-[4px]">
          <div>
            <label className="container">
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="text-sm font-normal text-[#6B7280] leading-normal pl-[12px]">
            {title ? title : ""}
          </div>
        </div>
      </>
    );
  };
  
  export default RZRadioButton;
  